/**
 * @file Helpers functions used for HSP SW component
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
  * Retrieve all the interruptions set by HSP but not generated.
  * @param {object} nvic_api - Getter on NVIC api.
  * @param {object} exti_api - Getter on EXTI api (may not be used).
  * @param {object} resource - Current resource.
  * @param {object} config   - Current configuration of the HSP.
  * @returns {object}
 */
function helper_hsp_get_irq_handler(nvic_api, exti_api, resource, config) {
    let result = [];
    try {
    const list_interrupts = [
      { enable: "enable_interrupt", irq_handler_generation: "irq_handler_generation", nvic_context: "nvic_config", selector: "_GLOBAL" },
      { enable: "error_enable_interrupt", irq_handler_generation: "error_irq_handler_generation", nvic_context: "error_nvic_config", selector: "_ERR" },
      { enable: "event_enable_interrupt", irq_handler_generation: "event_irq_handler_generation", nvic_context: "event_nvic_config", selector: "_EVT" },
      { enable: "fw_event_enable_interrupt", irq_handler_generation: "fw_envent_irq_handler_generation", nvic_context: "fw_event_nvic_config", selector: "_FWEVT" },
    ];

    /** Parse the list of interruptions */
    for (let index = 0; index < list_interrupts.length; index++) {
      const element = list_interrupts[index];
      /** Check if interruption has been enabled on the HSP */
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
      console.error(`helper_hsp_get_irq_handler: ${e}`);
    }
    return result;
  }

function helper_is_interrupt_supported(resource, ip_signal) {
  try {
    console.info(`helper_is_interrupt_supported: resource=${JSON.stringify(resource)}`);
    const interconnect = resource?.interconnect;

    if (!Array.isArray(interconnect)) {
      return false;
    }

    return interconnect.some((entry) => entry?.type === "interrupt" && entry?.ip_signal === ip_signal);
  } catch (e) {
    console.error(`helper_is_interrupt_supported: ${e}`);
    return false;
  }
}

const HSP_TRGIN_SOURCE_TABLE = {
  "EXTI0": "HAL_HSP1_TRGIN_EXTI0",
  "GPDMAChannel15 TC": "HAL_HSP1_TRGIN_GPDMA_CH15_TC",
  "GPDMAChannel14 TC": "HAL_HSP1_TRGIN_GPDMA_CH14_TC",
  "GPDMAChannel13 TC": "HAL_HSP1_TRGIN_GPDMA_CH13_TC",
  "GPDMAChannel12 TC": "HAL_HSP1_TRGIN_GPDMA_CH12_TC",
  "NPU host_int_3": "HAL_HSP1_TRGIN_NPU_HOST_INT_3",
  "tim1_trgo": "HAL_HSP1_TRGIN_TIM1_TRGO",
  "tim1_trgo2": "HAL_HSP1_TRGIN_TIM1_TRGO2",
  "tim2_trgo": "HAL_HSP1_TRGIN_TIM2_TRGO",
  "tim3_trgo": "HAL_HSP1_TRGIN_TIM3_TRGO",
  "tim6_trgo": "HAL_HSP1_TRGIN_TIM6_TRGO",
  "tim7_trgo": "HAL_HSP1_TRGIN_TIM7_TRGO",
  "tim8_trgo": "HAL_HSP1_TRGIN_TIM8_TRGO",
  "tim8_trgo2": "HAL_HSP1_TRGIN_TIM8_TRGO2",
  "tim9_trgo": "HAL_HSP1_TRGIN_TIM9_TRGO",
  "tim12_trgo": "HAL_HSP1_TRGIN_TIM12_TRGO",
  "tim15_trgo": "HAL_HSP1_TRGIN_TIM15_TRGO",
  "tim20_trgo": "HAL_HSP1_TRGIN_TIM20_TRGO",
  "tim23_trgo": "HAL_HSP1_TRGIN_TIM23_TRGO",
  "tim24_trgo": "HAL_HSP1_TRGIN_TIM24_TRGO",
  "tim25_trgo": "HAL_HSP1_TRGIN_TIM25_TRGO",
  "tim26_trgo": "HAL_HSP1_TRGIN_TIM26_TRGO",
  "HPDMAChannel15 TC": "HAL_HSP1_TRGIN_HPDMA_CH15_TC",
  "HPDMAChannel14 TC": "HAL_HSP1_TRGIN_HPDMA_CH14_TC",
  "HPDMAChannel13 TC": "HAL_HSP1_TRGIN_HPDMA_CH13_TC",
  "HPDMA Channel12 TC": "HAL_HSP1_TRGIN_HPDMA_CH12_TC",
  "ADF1_SAD_det": "HAL_HSP1_TRGIN_ADF1_SAD_DET",
  "GPDMA1 dma_chan_tc[7]": "HAL_HSP1_TRGIN_GPDMA1_CH7_TC",
  "GPDMA1 dma_chan_tc[6]": "HAL_HSP1_TRGIN_GPDMA1_CH6_TC",
  "GPDMA1 dma_chan_tc[5]": "HAL_HSP1_TRGIN_GPDMA1_CH5_TC",
  "GPDMA1 dma_chan_tc[4]": "HAL_HSP1_TRGIN_GPDMA1_CH4_TC",
  "GPDMA2 dma_chan_tc[7]": "HAL_HSP1_TRGIN_GPDMA2_CH7_TC",
  "GPDMA2 dma_chan_tc[6]": "HAL_HSP1_TRGIN_GPDMA2_CH6_TC",
  "GPDMA2 dma_chan_tc[5]": "HAL_HSP1_TRGIN_GPDMA2_CH5_TC",
  "GPDMA2 dma_chan_tc[4]": "HAL_HSP1_TRGIN_GPDMA2_CH4_TC",
  "GPDMA3 dma_chan_tc[7]": "HAL_HSP1_TRGIN_GPDMA3_CH7_TC",
  "GPDMA3 dma_chan_tc[6]": "HAL_HSP1_TRGIN_GPDMA3_CH6_TC",
  "GPDMA3 dma_chan_tc[5]": "HAL_HSP1_TRGIN_GPDMA3_CH5_TC",
  "GPDMA3 dma_chan_tc[4]": "HAL_HSP1_TRGIN_GPDMA3_CH4_TC",
  "mdf1_flt0_rx_it": "HAL_HSP1_TRGIN_MDF1_FLT0_RX_IT",
  "mdf1_flt1_rx_it": "HAL_HSP1_TRGIN_MDF1_FLT1_RX_IT",
  "mdf1_flt2_rx_it": "HAL_HSP1_TRGIN_MDF1_FLT2_RX_IT",
  "mdf1_flt3_rx_it": "HAL_HSP1_TRGIN_MDF1_FLT3_RX_IT",
  "play1_out6": "HAL_HSP1_TRGIN_PLAY1_OUT6"
};

function helper_hsp_trgin_source_to_enum(trigger) {
  try {
    const source = trigger?.source ?? trigger;

    if (typeof source !== "string") {
      console.error(`helper_hsp_trgin_source_to_enum: invalid trigger=${JSON.stringify(trigger)}`);
      return source;
    }

    if (source.startsWith("HAL_HSP")) {
      return source;
    }

    const enumValue = HSP_TRGIN_SOURCE_TABLE[source];
    if (enumValue === undefined) {
      console.error(`helper_hsp_trgin_source_to_enum: unsupported TRGIN source='${source}'`);
      return source;
    }

    return enumValue;
  } catch (e) {
    console.error(`helper_hsp_trgin_source_to_enum: ${e}`);
    return trigger;
  }
}


module.exports = {
  helper_hsp_get_irq_handler,
  helper_is_interrupt_supported,
  helper_hsp_trgin_source_to_enum
};
