/**
 * @file Helpers functions used to optimize the LL code in RAMECC
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
const LL_RAMECC_Functions_V1 = {
  LL_RAMECC_ClearFlag: [
    ["ramecc1_monitor_array[idx]", "ramecc2_monitor_array[idx]", "RAMECC1_AXISRAM1", "RAMECC1_AXISRAM2", "RAMECC1_AXISRAM3", "RAMECC1_AXISRAM4", "RAMECC1_ITCM", "RAMECC1_DTCM0", "RAMECC1_DTCM1", "RAMECC2_BKPRAM"],
    ["LL_RAMECC_FLAG_ALL"]
  ],
};
/* Private variables -----------------------------------------------------------------------------------------------*/
/* Private function ------------------------------------------------------------------------------------------------*/
/* Exported functions ----------------------------------------------------------------------------------------------*/
/**
 * Returns the LUT table to optimize the LL code.
 *
 * @param {String} ip_version - Version of IP must be 'V1".
 * @returns {Tab}
 */
function helper_ramecc_get_lut_table(ip_version) {
  if (ip_version == 'V1') {
    return LL_RAMECC_Functions_V1;
  }
  else {
    console.error(`[ERROR] helper_ramecc_get_lut_table bad input`);
    return null;
  }
}

module.exports = {
  helper_ramecc_get_lut_table
};