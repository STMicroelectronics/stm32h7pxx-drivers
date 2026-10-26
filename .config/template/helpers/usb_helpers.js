/**
 * @file Helpers functions used for USB SW component
 * @license
  * @attention
  *
  * Copyright (c) 2026 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
 */


/**
 * Convert a decimal value into an uppercase hexadecimal string.
 *
 * - Accepts a number or a decimal string (base 10).
 * - Returns an uppercase hex string (without any `0x` prefix).
 * - If `padLength` is provided, the string is left-padded with `0` to reach that length.
 * - If the input cannot be parsed into a finite number, returns a string of zeros with length `padLength`.
 *
 * Examples:
 * - helper_usb_dec_into_hex_string(26)        -> "1A"
 * - helper_usb_dec_into_hex_string("26")     -> "1A"
 * - helper_usb_dec_into_hex_string(26, 4)    -> "001A"
 *
 * @param {number|string} value Decimal value (number or base-10 string).
 * @param {number} [padLength=0] Minimum output length (left-pads with '0').
 * @returns {string} Uppercase hexadecimal string.
 * 
 */
function helper_usb_dec_into_hex_string(value, padLength = 0) {
  const n = (typeof value === "number") ? value : Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return "0".padStart(padLength, "0");
  return n.toString(16).toUpperCase().padStart(padLength, "0");
}

/**
  * Retrieve all the interruptions set by USB but not generated
  * @param {object} nvic_api Getter on NVIC api
  * @param {object} dma_api Getter on DMA api (not used)
  * @param {object} gpio_api Getter on GPIO api (not used)
  * @param {object} exti_api Getter on EXTI api
  * @param {object} resource Current resource
  * @param {object} config current configuration of the USB
  * @returns {object}
 */
function helper_usb_get_irq_handler(nvic_api, exti_api, resource, config, parent) {
  let result = [];
  try {
    console.info(
      `helper_usb_get_irq_handler: resource= ${resource}, config=${JSON.stringify(config)}`
    );

    /** Reference all the elements which enable the USB interruptions */
    const list_interrupts = [
      { enable: "enable_interruption", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config" }
    ];

    /** Parse the list of interruptions */
    for (let index = 0; index < list_interrupts.length; index++) {
      const element = list_interrupts[index];
      /** Check if interruption has been enabled on the USB */
      const enableInterruption = config?.system?.nvic?.[element['enable']] ?? false;
      if (!enableInterruption) continue;

      /** Check if IRQ handler generated is done on code generation or not */
      const irqHandlerGeneration = config.system?.nvic?.[element['irq_handler_generation']] ?? false;

      if (!irqHandlerGeneration) {
        const labels = config.info?.labels || [];
        let nvic_config = nvic_api.getNeedById(config.system?.nvic?.[element['nvic_context']].needs[0].id);
        nvic_config.name = parent;
        /** Fill the object to be used for aliases in mx_hal_def.h */
        if (labels.length) {
          let first_label = true;
          for (const label of labels) {
            result.push({
              resource,
              labels,
              first_label,
              alias: label.toUpperCase(),
              nvic_config,
              generated: false
            });
            first_label = false;
          }
        } else {
          result.push({
            resource,
            alias: "",
            nvic_config,
            generated: false
          });
        }
      }
    }
  } catch (e) {
    console.error(`helper_usb_get_irq_handler: ${e}`);
  }
  return result;
}

/**
 * Return the default RX FIFO size based on the USB IP name.
 *
 * Rule:
 * - `OTG_HS` => 512
 * - otherwise => 128
 *
 * @param {string} ip_name USB IP name (e.g. "OTG_HS", "OTG_FS", "USB").
 * @returns {number}
 */
function helper_usb_get_rx_fifo_size_by_ip(ip_name) {
  return (ip_name === "OTG_HS") ? 512 : 128;
}

/**
 * Find the index of a FIFO endpoint entry inside `usb_fifo_settings.eps_settings`.
 *
 * Note:
 * - For FIFO settings, endpoint numbers may not be unique (especially before auto-numbering).
 * - We therefore primarily rely on object identity (`elem === item`) to locate the entry.
 * - If identity lookup fails, a best-effort fallback tries matching by `number` and `direction`.
 *
 * @param {Array<object>} epsSettings Array of FIFO endpoint objects.
 * @param {object} item The current endpoint item (typically `$item`).
 * @returns {number} Index of the entry, or -1 if not found.
 */
function helper_usb_get_fifo_ep_index(epsSettings, item) {
  if (!Array.isArray(epsSettings) || !item) {
    return -1; 
  }

  const idx = epsSettings.findIndex((elem) => elem === item);
  if (idx >= 0) {
    return idx;
  }
}

/**
 * Return the default USB speed setting for a given USB IP name.
 *
 * Mapping:
 * - `OTG_HS` => `USB_OTG_SPEED_HIGH`
 * - `OTG_FS` / `USB` / any other value => `USB_OTG_SPEED_FULL`
 *
 * @param {string} ip_name USB IP name (e.g. "OTG_HS", "OTG_FS", "USB").
 * @returns {string} USB speed identifier.
 */
function helper_usb_get_speed_by_ip(ip_name) {
  switch (ip_name) {
    case "OTG_HS":
      return "SPEED_HS";
    case "OTG_FS":
    case "USB":
    default:
      return "SPEED_FS";
  }
}
/**
 * Return the default PHY interface setting for a given USB IP name.
 *
 * Mapping:
 * - `OTG_HS` => `PHY_EMBEDDED_HS`
 * - `OTG_FS` / `USB` / any other value => `PHY_EMBEDDED_FS`
 *
 * This helper is intended to centralize the IP-to-PHY selection logic used by
 * templates/schemas when building the PCD/HCD configuration.
 *
 * @param {string} ip_name USB IP name (e.g. "OTG_HS", "OTG_FS", "USB").
 * @returns {"PHY_EMBEDDED_HS"|"PHY_EMBEDDED_FS"} PHY interface identifier.
 */
function helper_usb_get_phy_interface_by_ip(ip_name) {
  switch (ip_name) {
    case "OTG_HS":
      return "PHY_EMBEDDED_HS";
    case "OTG_FS":
    case "USB":
    default:
      return "PHY_EMBEDDED_FS";
  }
}

function helper_usb_get_phy_interface_title_by_ip(ip_name) {
  switch (ip_name) {
    case "OTG_HS":
      return "Embedded High Speed PHY";
    case "OTG_FS":
    case "USB":
    default:
      return "Embedded Full Speed PHY";
  }
}

module.exports = {
  helper_usb_get_rx_fifo_size_by_ip,
  helper_usb_get_fifo_ep_index,
  helper_usb_get_phy_interface_by_ip,
  helper_usb_get_phy_interface_title_by_ip,
  helper_usb_get_speed_by_ip,
  helper_usb_dec_into_hex_string,
  helper_usb_get_irq_handler
};
