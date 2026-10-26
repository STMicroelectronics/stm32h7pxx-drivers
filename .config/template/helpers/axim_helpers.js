/**
 * @file Helpers functions used for AXIM SW component
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
 * List of components that are not related to STM32 peripherals
 */
const NonIPComponents = [
  "GPDMA",
  "HPDMA",
  "CORE",
  "NPU_1",
  "NPU_2"
];

/**
 * List of memories used as targets
 */
const TargetMemories = [
  "AHBIC_BRIDGE",
  "AXISRAM3",
  "AXISRAM2",
  "AXISRAM1",
  "AXISRAM4",
  "AHBS_BRIDGE"
];

function helper_axim_get_cpu_name(name, coreType) {
  if (name.includes('CORE_')) {
    return name.replace('CORE_', coreType + ' ');
  }
  return name;
}

/**
 * Returns the AXIM element name that will be configured.
 *
 * @param {Array<object>} elements Hardware feature array.
 * @param {number|string} id Element index.
 * @returns {string} Element name or fallback value.
 */
function helper_axim_get_element_name(elements, id) {
  console.info('helper_axim_get_element_name called', {elements, id});
  try {
    const i = Number(id);
    const list = elements || [];
    const name = list?.[i]?.name;
    console.info('helper_axim_get_element_name', {elements, id, i, name});
    if (typeof name === 'string' && name.length > 0) {
      /* The success case shows this log */
      console.info('helper_axim_get_element_name found name', name);
      return name;
    }
    console.info('helper_axim_get_element_name fallback', `Element ${isFinite(i) ? i + 1 : ''}`.trim());
    return `Element ${isFinite(i) ? i + 1 : ''}`.trim();
  } catch (e) {
    console.error(`[ERROR] helper_axim_get_element_name: ${e}`);
    return '';
  }
}

/**
 * Checks if the initiator has configurable QoS.
 *
 * @param {Array<object>} initiators Hardware initiator descriptors.
 * @param {string} id Initiator name.
 * @returns {boolean|undefined} QoS availability.
 */
function helper_axim_ini_is_qos_available(initiators, id) {
  console.info('helper_axim_ini_is_qos_available called', {id});
  console.info('helper_axim_ini_is_qos_available initiators', {initiators});
  try {
    const item = initiators.find(initiator => initiator.name === id);
    return item ? item.qos_available : undefined;
  } catch (e) {
    console.error(`[ERROR] helper_axim_ini_is_qos_available: ${e}`);
    return undefined;
  }
}

/**
 * Returns the default QoS value for the selected initiator.
 *
 * @param {Array<object>} initiators Hardware initiator descriptors.
 * @param {string} id Initiator name.
 * @returns {number} Default QoS value.
 */
function helper_axim_ini_get_default_qos(initiators, id) {
  console.info('helper_axim_ini_get_default_qos called', {id});
  try {
    if (helper_axim_ini_is_qos_available(initiators, id)) {
      const item = initiators.find(initiator => initiator.name === id);
      return item ? item.def_qos : 0;
    }
    else {
      console.info('helper_axim_ini_get_default_qos not available, skipping');
      return 0;
    }
  } catch (e) {
    console.error(`[ERROR] helper_axim_ini_get_default_qos: ${e}`);
    return 0;
  }
}

/**
 * Returns whether the component is a non-IP component.
 *
 * @param {string} componentName Component name.
 * @returns {boolean} True if the component is a non-IP component, false otherwise.
 */
function helper_axim_is_non_ip_component(componentName) {
  try {
    return NonIPComponents.includes(componentName) || TargetMemories.includes(componentName);
  } catch (e) {
    console.error(`[ERROR] helper_axim_is_non_ip_component: ${e}`);
    return false;
  }
}

/**
 * Checks if the initiator has support for packing.
 *
 * @param {Array<object>} initiators Hardware initiator descriptors.
 * @param {string} id Initiator name.
 * @returns {boolean|undefined} Packing availability.
 */
function helper_axim_ini_is_packing_available(initiators, id) {
  console.info('helper_axim_ini_is_packing_available called', {id});
  try {
    const item = initiators.find(initiator => initiator.name === id);
    return item ? item.packing : undefined;
  } catch (e) {
    console.error(`[ERROR] helper_axim_ini_is_packing_available: ${e}`);
    return undefined;
  }
}

/**
 * Checks if the target has support for packing.
 *
 * @param {Array<object>} targets Hardware target descriptors.
 * @param {string} id Target name.
 * @returns {boolean|undefined} Packing availability.
 */
function helper_axim_targ_is_packing_available(targets, id) {
  console.info('helper_axim_targ_is_packing_available called', {id});
  try {
    const item = targets.find(target => target.name === id);
    return item ? item.packing : undefined;
  } catch (e) {
    console.error(`[ERROR] helper_axim_targ_is_packing_available: ${e}`);
    return undefined;
  }
}

/**
 * Returns whether at least two input conditions are strictly true.
 *
 * @param {...boolean} conditions Condition values.
 * @returns {boolean} True if at least two conditions are true.
 */
function helper_axim_at_least_two_true(...conditions) {
  try {
    let values = conditions;

    /* Handlebars can append an options object as the last argument. */
    const lastArg = values[values.length - 1];
    if (lastArg && typeof lastArg === 'object' && Object.prototype.hasOwnProperty.call(lastArg, 'hash')) {
      values = values.slice(0, -1);
    }

    let trueCount = 0;
    for (const value of values) {
      if (value === true) {
        trueCount += 1;
        if (trueCount >= 2) {
          return true;
        }
      }
    }

    return false;
  } catch (e) {
    console.error(`[ERROR] helper_axim_at_least_two_true: ${e}`);
    return false;
  }
}

module.exports = {
  helper_axim_get_cpu_name,
  helper_axim_get_element_name,
  helper_axim_ini_is_qos_available,
  helper_axim_ini_get_default_qos,
  helper_axim_is_non_ip_component,
  helper_axim_ini_is_packing_available,
  helper_axim_targ_is_packing_available,
  helper_axim_at_least_two_true
};
