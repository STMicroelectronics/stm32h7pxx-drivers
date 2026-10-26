/**
 * @file Helpers functions used for RAMECC SW component
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

/* Private constants -----------------------------------------------------------------------------------------------*/
/* Private variables -----------------------------------------------------------------------------------------------*/
/* Private function ------------------------------------------------------------------------------------------------*/
/* Exported functions ----------------------------------------------------------------------------------------------*/
/**
 * Returns the global RAMECC enumeration used in generated code.
 * @param {string} layer Current RAMECC layer.
 * @param {object} config Current configuration of the RAMECC.
 * @returns {string} Enumeration expression called in generated code.
 */
function helper_ramecc_get_global_it_enum(layer, config){
  let it_enum = '';
  try {
    if(layer == 'HAL')
    {
      let tmp_arr = []
      if((config.enable_global_interrupt) || (config.enable_single_interrupt && config.enable_double_interrupt && config.enable_double_on_byte_write_interrupt))
      {
        tmp_arr.push('HAL_RAMECC_CONTROLLER_IT_ALL');
      }
      else
      {
        if(config.enable_single_interrupt)
          tmp_arr.push('HAL_RAMECC_CONTROLLER_IT_SINGLE');
        if(config.enable_double_interrupt)
          tmp_arr.push('HAL_RAMECC_CONTROLLER_IT_DOUBLE');
        if(config.enable_double_on_byte_write_interrupt)
          tmp_arr.push('HAL_RAMECC_CONTROLLER_IT_DOUBLE_BYTE_WRITE');
      }
      it_enum = tmp_arr.join(' | ');
    }
    else
    {
      let tmp_arr = []

      if((config.enable_global_interrupt) || (config.enable_single_interrupt && config.enable_double_interrupt && config.enable_double_on_byte_write_interrupt))
      {
        tmp_arr.push('LL_RAMECC_GLOBAL_IT_ALL');
      }
      else
      {
        if(config.enable_single_interrupt)
          tmp_arr.push('LL_RAMECC_GLOBAL_IT_SE');
        if(config.enable_double_interrupt)
          tmp_arr.push('LL_RAMECC_GLOBAL_IT_DE');
        if(config.enable_double_on_byte_write_interrupt)
          tmp_arr.push('LL_RAMECC_GLOBAL_IT_DEBW');
      }
      it_enum = tmp_arr.join(' | ');
    }
  } catch (error) {
    console.error(`helper_ramecc_get_global_it_enum: ${error}`);
  }
  return it_enum;
}

/**
 * Returns the individual monitor RAMECC enumeration used in generated code.
 * @param {string} layer Current RAMECC layer.
 * @param {object} config Current configuration of the RAMECC.
 * @returns {string} Enumeration expression called in generated code.
 */
function helper_ramecc_get_monitor_it_enum(layer, config_controller, config_monitor){
  let it_enum = '';

  try {
    if(layer == 'HAL')
    {
      let tmp_arr = []

      if(config_monitor.enable_single_interrupt && config_monitor.enable_double_interrupt && config_monitor.enable_double_on_byte_write_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_single_interrupt && !config_controller.enable_double_interrupt && !config_controller.enable_double_on_byte_write_interrupt)))
      {
        tmp_arr.push('HAL_RAMECC_MONITOR_IT_ALL');
      }
      else
      {
        if(config_monitor.enable_single_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_single_interrupt)))
          tmp_arr.push('HAL_RAMECC_MONITOR_IT_SINGLE');
        if(config_monitor.enable_double_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_double_interrupt)))
          tmp_arr.push('HAL_RAMECC_MONITOR_IT_DOUBLE');
        if(config_monitor.enable_double_on_byte_write_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_double_on_byte_write_interrupt)))
          tmp_arr.push('HAL_RAMECC_MONITOR_IT_DOUBLE_BYTE_WRITE');
      }
      it_enum = tmp_arr.join(' | ');
    }
    else
    {
      let tmp_arr = []
      if(config_monitor.enable_single_interrupt && config_monitor.enable_double_interrupt && config_monitor.enable_double_on_byte_write_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_single_interrupt && !config_controller.enable_double_interrupt && !config_controller.enable_double_on_byte_write_interrupt)))
        {
        tmp_arr.push('LL_RAMECC_MONITOR_IT_ALL');
      }
      else
      {
        if(config_monitor.enable_single_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_single_interrupt)))
          tmp_arr.push('LL_RAMECC_MONITOR_IT_SE');
        if(config_monitor.enable_double_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_double_interrupt)))
          tmp_arr.push('LL_RAMECC_MONITOR_IT_DE');
        if(config_monitor.enable_double_on_byte_write_interrupt && (!config_controller.enable_ecc || (!config_controller.enable_global_interrupt && !config_controller.enable_double_on_byte_write_interrupt)))
          tmp_arr.push('LL_RAMECC_MONITOR_IT_DEBW');
      }
      it_enum = tmp_arr.join(' | ');
    }
  } catch (error) {
    console.error(`helper_ramecc_get_monitor_it_enum: ${error}`);
  }
  return it_enum;
}

/**
  * Retrieve all the interruptions set by RAMECC but not generated
  * @param {object} nvic_api Getter on NVIC api
  * @param {object} exti_api Getter on EXTI api
  * @param {object} resource Current resource
  * @param {object} config   Current configuration of the RAMECC
  * @returns {object}
  */
function helper_ramecc_get_irq_handler(nvic_api, exti_api, resource, config) {
  let result = [];
  try {
    console.info(`helper_ramecc_get_irq_handler: resource=${resource}, config=${JSON.stringify(config)}`
    );

    /** Reference all the elements which enable the ramecc interruptions */
    const list_interrupts = [
      {enable: "ramecc_interruption", irq_handler_generation: "irq_handler_generation", nvic_context: "irq_config"},
    ];

    /** Parse the list of interruptions */
    for (let index = 0; index < list_interrupts.length; index++) {
      const element = list_interrupts[index];
      /** Check if interruption has beenn enabled on the ramecc */
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
  } catch (e) {
    console.error(`helper_ramecc_get_irq_handler: ${e}`);
  }
  return result;
}

/**
 * Parse an NVIC context array and return items 2 and 3
 * @param {Array} arr The NVIC context array
 * @returns {Array} A list containing the 2nd and 3rd items
 */
function helper_ramecc_parse_nvic_context(arr) {
  try {
    if (!Array.isArray(arr)) return {};
    return { instance: arr[1], generate_handler: arr[2] };
  } catch (e) {
    console.error(`helper_ramecc_parse_nvic_context: ${e}`);
    return {};
  }
}

module.exports = {
  helper_ramecc_get_global_it_enum,
  helper_ramecc_get_monitor_it_enum,
  helper_ramecc_get_irq_handler,
  helper_ramecc_parse_nvic_context
};