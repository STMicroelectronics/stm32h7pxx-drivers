/**
  * @file Helpers functions used for FMC SW component
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
 * Returns the integer at the end of the input string.
 * @param {string} str The string to analyze
 * @returns {string} The extracted number
 */
function helper_fmc_extract_number(str) {
    try {
        console.info(`helper_fmc_extract_number: ${str}`
        );

        const result = str.match(/(\d+)$/);
        return result ? result[0] : null;

    } catch (e) {
        console.error(`helper_fmc_extract_number: ${e}`);
        return {};
    }
}

/**
  * Retrieve all the interruptions set by FMC but not generated
  * @param {object} nvic_api Getter on NVIC api
  * @param {object} exti_api Getter on EXTI api (may not used)
  * @param {object} resource Current resource
  * @param {object} config current configuration of the FMC
  * @returns {object}
  */
function helper_fmc_get_irq_handler(nvic_api, exti_api, resource, config) {
  let result = [];
  try {
    console.info(`helper_fmc_get_irq_handler: resource=${resource}, config=${JSON.stringify(config)}`
    );
    // Check if FMC interrupt is enabled in config
    const enableInterruption = config?.system?.nvic?.enable_interruption ?? false;
    if (enableInterruption) {
      // Check if IRQ handler generation is required
      const irqHandlerGeneration = config.system?.nvic?.irq_handler_generation ?? false;
      if (!irqHandlerGeneration) {
        const labels = config.info?.labels || [];
        const nvic_config = nvic_api.getNeedById(config.system?.nvic?.nvic_config?.needs[0].id);
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
    console.error(`helper_fmc_get_irq_handler: ${e}`);
  }
  return result;
}

module.exports = {
    helper_fmc_extract_number,
    helper_fmc_get_irq_handler,
}