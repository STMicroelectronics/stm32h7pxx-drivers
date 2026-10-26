/**
  * @file Functions providing the mapping logic to generate code
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
 * Nominal hook as per embedded software architecture
 * Several SW instances can configure the same HW instance,
 * but the configuration code must end-up in the same mx_hwpppX.c file
 *
 * We expect the codegen service to call this hook per component.
 *
 * @param {string}   component_id         identifier of the component being processed by the codegen service
 * @param {array}    component_templates  array of templates for component_id
 * @param {function} _get_hw_instances     function returning the hardware instances (from the configuration data model) associated to the component id
 * @param {function} get_sw_instances     function returning the software instances (from the configuration data model) associated to the component id
 * @param {object}   _cfg_data             configuration data for the current software project
 * @param {string}   secure_ctxt          indicates if the context is 'None' (no security), 'Secure' (secure context), 'Non-secure' (non-secure context)
 * @param {string}   _genfileslist_folder  where to write the list of files to be generated
 * @param {function} debug_print          function to evacuate logs
 * @return object describing the mapping rules to be applied, empty object if nothing to process
 */
module.exports.main_grouping_hook = function (
  component_id,
  component_templates,
  _get_hw_instances,
  get_getters_context,
  _cfg_data,
  secure_ctxt,
  _genfileslist_folder,
  debug_print,
  _strategy
) {

  const globalGetters = get_getters_context();
  const strategy = globalGetters.envVarGettersAPI.EnvVarAPI.getVariableValue('SYSTEM_PROJECT_CODEGEN_STRATEGY') ?? 'HW';
  switch (strategy) {
    case "HW":
      return hw_grouping_hook(
        component_id,
        component_templates,
        get_getters_context,
        secure_ctxt,
        debug_print
      );

    case "SW":
      return hw_grouping_hook(
        component_id,
        component_templates,
        get_getters_context,
        secure_ctxt,
        debug_print
      );

    default:
      break;
  }
};
/**
 * Nominal hook as per embedded software architecture
 * Several SW instances can configure the same HW instance,
 * but the configuration code must end-up in the same stm32_hwpppX.c file
 *
 * We expect the codegen service to call this hook per component.
 *
 * @param {string}   component_id         identifier of the component being processed by the codegen service
 * @param {array}    component_templates  array of templates for component_id
 * @param {function} get_getters_context  function returning the DomainGettersAPI that contain the list of available getters
 * @param {string}   secure_ctxt          indicates if the context is 'None' (no security), 'Secure' (secure context), 'Non-secure' (non-secure context)
 * @param {function} debug_print          function to evacuate logs
 * @return object describing the mapping rules to be applied, empty object if nothing to process
 */
function hw_grouping_hook(
  component_id,
  component_templates,
  get_getters_context,
  secure_ctxt,
  debug_print
) {
  let mapping_object = {}; /* the object to return the mapping rules */
  let my_hw_instances = []; /* array of hardware instances associated to component_id */
  let debug = true; /* decide if we debug                                     */
  /* Disable the debug if no print function is provided (undefined or null) */
  if (debug_print == null) {
    debug = false;
  }
  /*
   * Parameters check: check null or undefined (so use ==)
   */
  if (
    component_id == null ||
    component_templates == null ||
    secure_ctxt == null
  ) {
    if (debug === true) {
      debug_print(
        "[ERROR] fmc_mapping_hooks.hw_grouping_hook: incorrect parameter(s)"
      );
    }
    /* exit now */
    return mapping_object;
  } else {
    if (debug === true) {
      debug_print("[INFO] fmc_mapping_hooks.hw_grouping_hook: starting");
    }
  }

  /**
    *   DomainGettersAPI { resourceManagerGettersAPI, pinoutGettersAPI, clockGettersAPI, swProjectLevelGettersAPI, swConfigGettersAPI, dmaGettersAPI, nvicGettersAPI, extiGettersAPI, envVarGettersAPI, hwPlateformGetters}
    */
  const globalGetters = get_getters_context();

  //step[2.1] ##LUT purpose##:
  // Access the peripheralsResourceManagerAPI domain from the global getters context
  /*
  * Domain name: peripheralsResourceManagerAPI
  * RM domain getter list:
  * [
  * "getConfigurablePeripheralsFromComponent" ## getter for LUT extraction
  * "getPeripheralBoundToSoftwareInstance"
  * "getPeripheralsBoundToSoftwareComponent"
  * "getPeripheralsBoundToSoftwareInstances"
  * "getPeripheralSoftwareConfigurationsForComponent"
  * "getSoftwareInstancesBoundToPeripheral"
  * ]
  * read me file https://github.com/PRG-Cube/cube-resource-manager/blob/main/docs/peripheral-resource-manager-code-generation-getters.md
  */
  const peripheralsResourceManagerAPI = globalGetters?.resourceManagerGettersAPI?.peripheralsResourceManagerAPI;

  //step[2.2] ##LUT purpose##:
  // Call the getConfigurablePeripheralsFromComponent getter to obtain the LUT mapping for the given component ID
  /*
  * The getter returns:
  *   - MCU Peripheral (described in peripherals.json)
  *     type HardwareIP = { name: string; type: string; }
  *   - Marketing/EmbSW Peripheral (as seen in the peripherals view, described in the LUT)
  *     type Peripheral = {
  *       name: string;
  *       associatedIps: HardwareIP[];
  *       children?: Peripheral[];
  *     }
  * For more information, see JIRA ticket: https://jira.st.com/browse/T2RM-863
  */
let periphMappingFromCompSRAM = [];
let periphMappingFromCompNOR = [];
let periphMappingFromCompSDRAM = [];
let periphMappingFromCompNAND = [];

let my_hw_instances_comp = peripheralsResourceManagerAPI?.getPeripheralsBoundToSoftwareComponent('STMicroelectronics::Device:STM32CubeMX2 Config:SRAM');
if (my_hw_instances_comp.length != 0) {
  my_hw_instances.push(...my_hw_instances_comp);
  periphMappingFromCompSRAM = peripheralsResourceManagerAPI?.getConfigurablePeripheralsFromComponent('STMicroelectronics::Device:STM32CubeMX2 Config:SRAM');
}
my_hw_instances_comp = peripheralsResourceManagerAPI?.getPeripheralsBoundToSoftwareComponent('STMicroelectronics::Device:STM32CubeMX2 Config:NOR');
if (my_hw_instances_comp.length != 0) {
  my_hw_instances.push(...my_hw_instances_comp);
  periphMappingFromCompNOR = peripheralsResourceManagerAPI?.getConfigurablePeripheralsFromComponent('STMicroelectronics::Device:STM32CubeMX2 Config:NOR');
}
my_hw_instances_comp = peripheralsResourceManagerAPI?.getPeripheralsBoundToSoftwareComponent('STMicroelectronics::Device:STM32CubeMX2 Config:SDRAM');
if (my_hw_instances_comp.length != 0) {
  my_hw_instances.push(...my_hw_instances_comp);
  periphMappingFromCompSDRAM = peripheralsResourceManagerAPI?.getConfigurablePeripheralsFromComponent('STMicroelectronics::Device:STM32CubeMX2 Config:SDRAM');
}
my_hw_instances_comp = peripheralsResourceManagerAPI?.getPeripheralsBoundToSoftwareComponent('STMicroelectronics::Device:STM32CubeMX2 Config:NAND');
if (my_hw_instances_comp.length != 0) {
  my_hw_instances.push(...my_hw_instances_comp);
  periphMappingFromCompNAND = peripheralsResourceManagerAPI?.getConfigurablePeripheralsFromComponent('STMicroelectronics::Device:STM32CubeMX2 Config:NAND');
}
console.info("my_hw_instances for FMC" + JSON.stringify(my_hw_instances));

  // component_id = 'STMicroelectronics::Device:STM32CubeMX2 Config:PCD@0.2.0';
  const periphMappingFromComp = [...periphMappingFromCompSRAM, ...periphMappingFromCompNOR, ...periphMappingFromCompSDRAM, ...periphMappingFromCompNAND];
  console.info("periphMappingFromComp" + JSON.stringify(periphMappingFromComp))

  //step[2.3] ##LUT purpose##:
  // Iterate over the returned structure to extract the mapping peripherals for the current component.
  // Note: The returned object represents the global definition of mapping peripherals for a component, not just the bound peripherals

  const peripheralMappingConfig = {};

  //step[2.4]##LUT purpose##:
  for (const item of periphMappingFromComp) {
    const prefix = item.id.split(".")[0];
    if (!peripheralMappingConfig[prefix]) {
      peripheralMappingConfig[prefix] = [];
    }
    peripheralMappingConfig[prefix].push(item.id);
  }
  console.info("peripheralMappingConfig" + JSON.stringify(peripheralMappingConfig))

  /*
   * All hw instances code must end-up in the same file
   */
  let array_index = 0;

  // Process each peripheral group based on the mapping configuration
  for (const [peripheral, instances] of Object.entries(peripheralMappingConfig)) {
    // Check if any of the instances are present in the current hardware instances
    const relevantInstances = my_hw_instances.filter(instance => instances.includes(instance));
    /**
     * Remove parent HW resource
     */
    const hw_resources = relevantInstances.map(item => {
      // Check if there is a dot in the string
      if (item.includes('.')) {
        // Split at the first dot and return the part after it
        return item.split('.', 2)[1];
      }
      // If no dot, return the original string
      return item;
    });

    if ((relevantInstances.length !== 0) && (peripheral !== undefined)) {
      /* Apply it for all templates of this component (.c and .h) */
      for (const template of component_templates) {
        /*
         * Compute the proper output filename
         */
        let output_filename;
        let extension = template.split(".");
        extension = extension[1]; /* save the extension: .c or .h */

        if (debug === true) {
          debug_print("\t[INFO] Processing template: " + template);
        }

        /* Apply a specific processing for templates starting by mx_ (drivers) */
        let regex = /^mx_/;
        let driver_template = regex.exec(template);

        if (driver_template === null) {
          /* This is not a driver template : probably abnormal for this hook */
          if (debug === true) {
            debug_print("\t[WARNING] not a driver template: " + template);
          }
          regex = /^test_/;
          driver_template = regex.exec(template);
          if (driver_template === null) {
            output_filename = template.replace("_template", "");
            output_filename = output_filename.replace(".hbs", "");
          } else {
            output_filename =
              "test_" + peripheral.toLowerCase() + "." + extension;
          }
        } else {
          /*driver template:  determine the secure context and update the filename */
          if (secure_ctxt === "none") {
            output_filename =
              "mx_" + peripheral.toLowerCase() + "." + extension;
          } else if (secure_ctxt == "Secure") {
            output_filename =
              "mx_" + peripheral.toLowerCase() + "_s." + extension;
          } else {
            /* assume Non-secure */
            output_filename =
              "mx_" + peripheral.toLowerCase() + "_ns." + extension;
          }
        }

        if (debug === true) {
          debug_print("\t[INFO] output_filename: " + output_filename);
        }

        /*
         * Update the mapping object
         */
        mapping_object[array_index] = {
          component: component_id,
          resource_type:
            "hw_instance" /* indicate we group by hardware instance */,
          resource: peripheral,
          template: template,
          output: output_filename,
          generation_level: 'hw_block',
          context: relevantInstances,
          peripheral: peripheral,
          hw_resources: hw_resources
        };
        /* next array index */
        array_index++;
      } /* end loop on templates */
    }
  }



  if (debug === true) {
    str = JSON.stringify(mapping_object);
    debug_print("[Object] mapping_object=\n" + str);
  }

  if (debug === true) {
    debug_print("[INFO] fmc_mapping_hooks.hw_grouping_hook: returning");
  }

  /* Return the mapping object */
  return mapping_object;
}

/**
 * Alternate hook to prototype the possibility to provide several hooks.
 * Several SW instances can configure the same HW instance,
 * and the configuration code must end-up in different mx_swpppX.c file
 *
 * We expect the codegen service to call this hook per component.
 *
 * @param {string}   component_id         identifier of the component being processed by the codegen service
 * @param {array}    component_templates  array of templates for component_id
 * @param {function} get_sw_instances     function returning the software instances (from the configuration data model) associated to the component id
 * @param {string}   secure_ctxt          indicates if the context is 'None' (no security), 'Secure' (secure context), 'Non-secure' (non-secure context)
 * @param {function} debug_print          function to evacuate logs
 * @return object describing the mapping rules to be applied, empty object if nothing to process
 */
function sw_grouping_hook(
  component_id,
  component_templates,
  get_sw_instances,
  secure_ctxt,
  debug_print
) {
  let arrayIndex = 0;
  let mappingObject = [];
  for (const template of component_templates) {
    let outputFilename = '';

    outputFilename = getTemplateName(template);

    /*
     * Update the mapping object
     */
    mappingObject.push(getHookResult(component_id, template, outputFilename))
    /* next array index */
    arrayIndex++;
  } /* end loop on templates */

  /* Return the mapping object */
  return mappingObject;
}

function getTemplateName(templateFileName) {
  if (!templateFileName) {
    return '';
  }
  return templateFileName.replace('_template', '').replace('.hbs', '');
}
function getHookResult(component_id, templateName, outputFileName) {
  return {
    component: component_id,
    resource_type: 'COMPONENT_ENTRY',
    resource: 'no hardware resource',
    template: templateName,
    output: outputFileName,
  };
}
