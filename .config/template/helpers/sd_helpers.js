/**
 * @file Helpers functions used for SDMMC SW component
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
 * Calculate the SD output frequency based on kernel clock frequency and user input clock values
 * @note  This api is used directly in the sd_parameters.json in advanced view
 * @param {integer} kernel_clock_frequency System clock frequency in Hz
 * @param {integer} clock_freq clock frequency set by the user
 * @returns {integer} SD output frequency in Hz
 */
function helper_sd_compute_frequency(
    kernel_clock_frequency,
    clock_freq,
  ) {
    let result = 0;
    let clock_div = 0;
    let output_frequency = 0;
    try {
      console.info(`helper_sd_compute_frequency: sd_configuration=${JSON.stringify(kernel_clock_frequency)}`);
      
      if ((2 * clock_freq) > kernel_clock_frequency)
      {
        clock_div = 0;
        output_frequency = kernel_clock_frequency;
      }
      else
      {
        /* Calculate the actual timer frequency */
        clock_div = kernel_clock_frequency / (2 * clock_freq);
        clock_div = Math.floor(kernel_clock_frequency / (2 * clock_freq)) + (clock_div > Math.floor(clock_div) ? 1 : 0);
        /* Calculate the actual output frequency */
        output_frequency = kernel_clock_frequency / (2 * clock_div);
      }
      /* Return the output frequency */
      result = Math.floor(output_frequency);
    } catch (e) {
      console.error(`helper_sd_compute_frequency: ${e}`);
    }
    return result;
  }
/**
  * Retrieve all the interruptions set by SD but not generated
  * @param {object} nvic_api Getter on NVIC api
  * @param {object} exti_api Getter on EXTI api
  * @param {object} resource Current resource
  * @param {object} config current configuration of the SD
  * @returns {object}
 */
function helper_sd_get_irq_handler(nvic_api, exti_api, resource, config) {
  let result = [];
  try {
    console.info(`helper_sd_get_irq_handler: resource= ${resource}, config=${JSON.stringify(config)}`);

    /** Reference all the elements which enable the SD interruptions */
    const list_interrupts = [
      { enable: "enable_interruption", irq_handler_generation: "irq_handler_generation", nvic_context: "irq_config" },
    ];

    /** Parse the list of interruptions */
    for (let index = 0; index < list_interrupts.length; index++) {
      const element = list_interrupts[index];
      /** Check if interruption has beenn enabled on the SD */
      const enableInterruption = config?.system?.nvic?.[element['enable']] ?? false;
      if (!enableInterruption) continue;

      /** Check if IRQ handler generated is done on code generation or not */
      const irqHandlerGeneration = config.system?.nvic?.[element['irq_handler_generation']] ?? false;

      if (!irqHandlerGeneration) {
        const labels = config.info?.labels || [];
        const nvic_config = nvic_api.getNeedById(config.system?.nvic?.[element['nvic_context']].needs[0].id);
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
    /** Check the EXTI interruptions have been generated or not */
    all_functions = require('./gpio_helpers.js');
    if (typeof all_functions['helper_gpio_need_get_irq_handler'] === "function") {
      result = result.concat(all_functions['helper_gpio_need_get_irq_handler'](nvic_api, exti_api, resource));
    }
  } catch (e) {
    console.error(`helper_sd_get_irq_handler: ${e}`);
  }
  return result;
}
module.exports = {

    helper_sd_compute_frequency,
    helper_sd_get_irq_handler,
};