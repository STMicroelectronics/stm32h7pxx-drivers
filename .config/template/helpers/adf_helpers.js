/**
  * @file Helpers functions used for ADF SW component
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
 * Calculate the clock frequency after divider
 * @note  This api is used directly in the adf_parameters.json in advanced view
 * @param {integer} source_clock_frequency Source clock frequency in Hz
 * @param {integer} divider divider set by the user
 * @returns {integer} Clock frequency in Hz
 */
function helper_adf_clock_divider(
  source_clock_frequency,
  divider
) {
  let result;


  try {

    console.info(`helper_adf_clock_divider: source_clock_frequency=${source_clock_frequency}, divider=${divider}`);

    /* Calculate the processing clock */
    var frequency = source_clock_frequency / divider;

    /* Return the processing clock frequency */
    result = Math.floor(frequency);
  } catch (e) {
    console.error(`helper_adf_clock_divider: ${e}`);
  }
  return result;
}

/**
 * Calculate the gain in dB
 * @note  This api is used directly in the adf_parameters.json in advanced view
 * @param {integer} gain_in_step Source clock frequency in Hz
 * @returns {integer} Gain in dB
 */
function helper_adf_compute_gain_in_db(
  gain_in_step
) {
  let result;


  try {

    console.info(`helper_adf_compute_gain_in_db: gain_in_step=${gain_in_step}`);

    /* Calculate the gain in dB */
    var gain_in_db = gain_in_step * 3;

    /* Return the gain in dB */
    result = gain_in_db;
  } catch (e) {
    console.error(`helper_adf_compute_gain_in_db: ${e}`);
  }
  return result;
}

/**
 * Check common clock usage from serial interface
 * @note  This api is used directly in the adf_parameters.json in advanced view
 * @param {array} serial_interface Serial interface array
 * @param {integer} clock_index common clock 0 or 1
 * @returns {boolean} Common clock used or not
 */
function helper_adf_check_cck_on_sitf(
  serial_interface,
  clock_index
) {
  let result;


  try {

    var index = 'CCK' + clock_index.toString();


    console.info(`helper_adf_check_cck_on_sitf : clock_index=${index}`);


    result = serial_interface.some(element => ((element.use_channel === true) && (element.clock_source === index)));
  } catch (e) {
    console.error(`helper_adf_check_cck_on_sitf: ${e}`);
  }
  return result;
}

/**
 * Check subblock usage
 * @note  This api is used directly in the adf_parameters.json in advanced view
 * @param {array} subblock Subblock array (SITF, BSMX, ...)
 * @param {integer} index Index on the sub-block array
 * @returns {boolean} Sub-block usage status
 */
function helper_adf_check_sub_block_usage(
  subblock,
  index
) {
  let result;


  try {

    console.info(`helper_adf_check_sub_block_usage : index=${index}`);


    result = subblock[index].use_channel;
  } catch (e) {
    console.error(`helper_adf_check_cck_on_sitf: ${e}`);
  }
  return result;
}

/**
 * Renames the clock trigger if it matches a specific value.
 * @param {string} trigger - The original clock trigger name.
 * @returns {string} - The renamed trigger if it matches, otherwise the original trigger.
 */
function helper_adf_rename_clock_trigger(trigger)
{
  let result = trigger.toUpperCase();
  try {
    if(result.includes(" ")) {
      result = result.replace(" ", "_");
    }
  } catch (e) {
    console.error(`[ERROR] helper_adf_rename_clock_trigger: ${e}`);
  }
  return result;
}

/**
 * Renames the filter trigger if it matches a specific value.
 * @param {string} trigger - The original filter trigger name.
 * @returns {string} - The renamed trigger if it matches, otherwise the original trigger.
 */
function helper_adf_rename_filter_trigger(trigger)
{
  let result = trigger.toUpperCase();
  try {
    if(result.includes(" ")) {
      result = result.replace(" ", "_");
    }
  } catch (e) {
    console.error(`[ERROR] helper_adf_rename_clock_trigger: ${e}`);
  }
  return result;
}

/**
 * Get index from interrupt line.
 * @param {string} line - The interrupt line.
 * @returns {string} - Only the index of the interrupt line.
 */
function helper_adf_get_index_from_line(line)
{
  let result

  try {

    result = line.replace("ADF1_FLT", "");

  } catch (e) {
    console.error(`[ERROR] helper_adf_get_index_from_line: ${e}`);
  }
  return result;
}

/**
 * Retrieve all the interruptions set by ADF but not generated
 * @param {object} nvic_api Getter on NVIC api
 * @param {object} exti_api Getter on EXTI api (may not used)
 * @param {object} resource Current resource
 * @param {object} config current configuration of the ADF
 * @returns {object}
 */
 function helper_adf_get_irq_handler(nvic_api, exti_api, resource, config) {
  let result = [];
  try {
    // console.info(//   `helper_adf_get_irq_handler: resource= ${resource}, config=${JSON.stringify(config)}`
    // );

    /** Reference all the elements which enable the ADF interruptions
     * @type {Array} List of interruptions available for the ADF
     * @property {string} enable Name of the property which enables the interruption
     * @property {string} irq_handler_generation Name of the property which indicates if IRQ handler generation is done or not
     * @property {string} nvic_context Name of the property which contains the NVIC context
     * @property {string} selector Suffix to be added to the alias name (empty if global interrupt, starts with underscore with NVIC selector if not empty)
     */
    const list_interrupts = [
      { filter: "it_filter0", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT0" },
      { filter: "it_filter1", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT1" },
      { filter: "it_filter2", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT2" },
      { filter: "it_filter3", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT3" },
      { filter: "it_filter4", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT4" },
      { filter: "it_filter5", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT5" },
      { filter: "it_filter6", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT6" },
      { filter: "it_filter7", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT7" },
      { filter: "it_filter8", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT8" },
      { filter: "it_filter9", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT9" },
      { filter: "it_filter10", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT10" },
      { filter: "it_filter11", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT11" },
      { filter: "it_filter12", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT12" },
      { filter: "it_filter13", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT13" },
      { filter: "it_filter14", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT14" },
      { filter: "it_filter15", enable: "enable_it", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_FLT15" },
    ];

    /** Parse the list of interruptions */
    for (let index = 0; index < list_interrupts.length; index++) {
      const element = list_interrupts[index];
      /** Check if interruption has beenn enabled on the ADF */
      const enableInterruption = config?.system?.nvic?.[element['filter']]?.[element['enable']] ?? false;
      if (!enableInterruption) continue;

      /** Check if IRQ handler generated is done on code generation or not */
      const irqHandlerGeneration = config.system?.nvic?.[element['filter']]?.[element['irq_handler_generation']] ?? false;

      if (!irqHandlerGeneration) {
        const labels = config.info?.labels || [];
        const nvic_config = nvic_api.getNeedById(config.system?.nvic?.[element['filter']]?.[element['nvic_context']].needs[0].id);
        /** Fill the object to be used for aliases in mx_hal_def.h */
        if (labels.length) {
          let first_label = true;
          for (const label of labels) {
            result.push({
              resource,
              labels,
              first_label,
              alias: label.toUpperCase() + element['selector'],
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
    console.error(`helper_adf_get_irq_handler: ${e}`);
  }
  return result;
}

module.exports = {
  helper_adf_clock_divider,
  helper_adf_compute_gain_in_db,
  helper_adf_check_cck_on_sitf,
  helper_adf_check_sub_block_usage,
  helper_adf_rename_clock_trigger,
  helper_adf_rename_filter_trigger,
  helper_adf_get_index_from_line,
  helper_adf_get_irq_handler
};
