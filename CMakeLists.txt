# origin-pack: STMicroelectronics::stm32h7pxx_hal_drivers@2.0.0
# file-format: 1.0.0
project(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0)
cmake_minimum_required(VERSION 3.30)
add_library(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE)

# List of all CMSIS properties that influence conditions for this package
if(NOT DEFINED CMSIS_Dname)
  set(CMSIS_Dname "CMSIS_Dname not set")
  message(DEBUG "CMSIS_Dname is not set to any value")
endif()

if(NOT DEFINED CMSIS_Dvendor)
  set(CMSIS_Dvendor "CMSIS_Dvendor not set")
  message(DEBUG "CMSIS_Dvendor is not set to any value")
endif()


# Device specific defined symbols








# Enable all components in this package
if(CMSIS_ENTIRE_STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0)
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:SYSTICK#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC timebase template#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_ALARM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_WAKEUP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM timebase template#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:TIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Core#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I2C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I3C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:FDCAN#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ASSERT#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:template#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADF#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:AXIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:COMP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORDIC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORTEX#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DAC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DBGMCU#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:DLYB#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DMA#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DTS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:EXTI#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FDCAN#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH_ITF#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FMAC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:FMC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:GPIO#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HASH#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HCD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HRTIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HSP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I3C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2S#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:IWDG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:LPTIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:MMC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NAND#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NOR#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PCD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PWR#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Q#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RAMECC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RCC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RNG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDIO#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDRAM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:SDMMC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMARTCARD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMBUS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SPI#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SBS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SRAM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TAMP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UART#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UCPD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:USART#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB CORE DEF#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB OTG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:VREFBUF#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:WWDG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:XSPI#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:Common#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:ADC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:AXIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:BUS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:COMP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CORDIC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DAC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DBGMCU#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DMA#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FLASH#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:EXTI#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FMAC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:GPIO#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:HRTIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I2C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I3C#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:IWDG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPTIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPUART#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:PWR#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RAMECC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RCC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RNG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RTC#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TAMP#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SPI#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SBS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SYSTEM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TIM#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UCPD#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:USART#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UTILS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:VREFBUF#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:WWDG#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:NO_OS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:FreeRTOS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:TEMPLATE OS#Cversion:2.0.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:WWDG#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:VREFBUF#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UTILS#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:USART#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UCPD#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TAMP#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SYSTEM#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SPI#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SBS#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RTC#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RNG#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RCC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RAMECC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:PWR#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPUART#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPTIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:IWDG#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I3C#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I2C#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:HRTIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:GPIO#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FMAC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FLASH#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:EXTI#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DMA#Cversion:0.2.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DBGMCU#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DAC#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:Common#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRS#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CORDIC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:COMP#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:BUS#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:AXIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:ADC#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:TIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:SYSTICK#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_WAKEUP#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_ALARM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:template#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:XSPI#Cversion:0.5.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:WWDG#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:VREFBUF#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:USART#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UCPD#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UART#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM#Cversion:0.1.2")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM timebase template#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TAMP#Cversion:0.1.4")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SRAM#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SPI#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMBUS#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMARTCARD#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDRAM#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDIO#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SD#Cversion:0.5.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SBS#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC timebase template#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RNG#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RCC#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RAMECC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Q#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PWR#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PCD#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NOR#Cversion:0.2.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NAND#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:MMC#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:LPTIM#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:IWDG#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I3C#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2S#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2C#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HSP#Cversion:0.0.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HRTIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HCD#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HASH#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:TEMPLATE OS#Cversion:0.0.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:NO_OS#Cversion:0.0.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:FreeRTOS#Cversion:0.0.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:GPIO#Cversion:0.2.2")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FMAC#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH_ITF#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FDCAN#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:EXTI#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DTS#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DMA#Cversion:0.5.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DBGMCU#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DAC#Cversion:0.4.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Core#Cversion:0.4.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRS#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRC#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORTEX#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORDIC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:COMP#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:AXIM#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ASSERT#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADF#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADC#Cversion:0.2.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I3C#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I2C#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:FDCAN#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB OTG#Cversion:0.3.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB CORE DEF#Cversion:0.1.1")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:SDMMC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:FMC#Cversion:0.1.0")
  list(APPEND CMSIS_COMPONENTS_LIST "Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:DLYB#Cversion:0.1.0")
endif()

# All conditions used by this package

# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0
# description: 
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0 "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0 enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:CMSIS Core
# description: STMicroelectronics STM32H7P and HAL Common
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL ADC
# description: HAL ADC dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:ADC(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:DBGMCU(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL ADF
# description: HAL ADF dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL AXIM
# description: HAL AXIM dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:AXIM(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL COMP
# description: HAL COMP dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:COMP(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:EXTI(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORDIC
# description: HAL CORDIC dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:CORDIC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE
# description: STMicroelectronics STM32H7P and HAL system
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE DMA
# description: STMicroelectronics STM32H7P and HAL with DMA
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE DMA Init
# description: STMicroelectronics HAL CORE and DMA Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE DMA Init and CORDIC
# description: STMicroelectronics HAL CORDIC Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_CORDIC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_CORDIC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_CORDIC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE DMA Init and FMAC
# description: STMicroelectronics HAL FMAC Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_FMAC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_FMAC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_FMAC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE DMA Init and HASH
# description: STMicroelectronics HAL HASH Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_HASH "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:HASH(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_HASH enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA_Init_and_HASH 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE FMC
# description: HAL CORE FMC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:FMC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init
# description: STMicroelectronics HAL CORE, GPIO and DMA Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and ADC
# description: STMicroelectronics HAL ADC Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and ADF
# description: STMicroelectronics HAL ADF Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADF "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:ADF(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADF enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_ADF 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and DAC
# description: STMicroelectronics HAL DAC Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_DAC "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_DAC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_DAC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and HRTIM
# description: STMicroelectronics HAL HRTIM Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_HRTIM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_HRTIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_HRTIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and I2C
# description: STMicroelectronics HAL I2C Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2C "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2C enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2C 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and I2S
# description: STMicroelectronics HAL I2S Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2S "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2S enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I2S 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and I3C
# description: STMicroelectronics HAL I3C Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I3C "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I3C enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_I3C 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and LPTIM
# description: STMicroelectronics HAL LPTIM Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_LPTIM "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_LPTIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_LPTIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and NAND
# description: STMicroelectronics HAL NAND Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_NAND "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:NAND(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_NAND enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_NAND 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and SMARTCARD
# description: STMicroelectronics HAL SMARTCARD Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMARTCARD "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMARTCARD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMARTCARD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and SMBUS
# description: STMicroelectronics HAL SMBUS Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMBUS "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMBUS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SMBUS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and SPI
# description: STMicroelectronics HAL SPI Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SPI "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SPI enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_SPI 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and TIM
# description: STMicroelectronics HAL TIM Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_TIM "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_TIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_TIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and UART
# description: STMicroelectronics HAL UART Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UART "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UART enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UART 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and UCPD
# description: STMicroelectronics HAL UCPD Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UCPD "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UCPD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_UCPD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and USART
# description: STMicroelectronics HAL USART Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_USART "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_USART enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_USART 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO DMA Init and XSPI
# description: STMicroelectronics HAL SPI Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_XSPI "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:XSPI(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_XSPI enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_DMA_Init_and_XSPI 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and COMP
# description: HAL COMP Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_COMP "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_COMP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_COMP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and FDCAN
# description: STMicroelectronics HAL FDCAN Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_FDCAN "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:FDCAN(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_FDCAN enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_FDCAN 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and HCD
# description: STMicroelectronics HAL HCD Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_HCD "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:HCD(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_HCD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_HCD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and MMC
# description: STMicroelectronics HAL MMC Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_MMC "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:MMC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_MMC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_MMC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and NOR
# description: STMicroelectronics HAL NOR Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_NOR "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:NOR(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_NOR enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_NOR 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and PCD
# description: STMicroelectronics HAL PCD Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PCD "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:PCD(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PCD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PCD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and PWR
# description: STMicroelectronics HAL PWR Init
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PWR "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PWR enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_PWR 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and RTC
# description: STMicroelectronics HAL RTC Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_RTC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_RTC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_RTC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and SD
# description: STMicroelectronics HAL SD Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SD "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:SD(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and SDIO
# description: STMicroelectronics HAL SDIO Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDIO "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:SDIO(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDIO enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDIO 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and SDRAM
# description: STMicroelectronics HAL SDRAM Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDRAM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:SDRAM(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDRAM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SDRAM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and SRAM
# description: STMicroelectronics HAL SRAM Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SRAM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:SRAM(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SRAM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_SRAM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE GPIO Init and TAMP
# description: STMicroelectronics HAL TAMP Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_TAMP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_TAMP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_GPIO_Init_and_TAMP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init GPIO and CORTEX
# description: STMicroelectronics HAL CORTEX Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CORTEX "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CORTEX enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CORTEX 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init GPIO and CRS
# description: STMicroelectronics HAL CRS Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CRS "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CRS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_CRS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init GPIO and HSP
# description: STMicroelectronics HAL HSP Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_HSP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:HSP(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_HSP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_HSP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init GPIO and RCC
# description: STMicroelectronics HAL Common Init
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_RCC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_RCC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_GPIO_and_RCC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and AXIM
# description: STMicroelectronics HAL AXIM Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_AXIM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_AXIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_AXIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and CORTEX
# description: STMicroelectronics HAL CORTEX Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CORTEX "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CORTEX enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CORTEX 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and CRC
# description: STMicroelectronics HAL CRC Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CRC "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CRC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_CRC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and DTS
# description: STMicroelectronics HAL DTS Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_DTS "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DTS(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_DTS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_DTS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and FLASH
# description: STMicroelectronics HAL FLASH Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_FLASH "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_FLASH enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_FLASH 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and IWDG
# description: STMicroelectronics HAL IWDG Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_IWDG "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_IWDG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_IWDG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and RAMECC
# description: STMicroelectronics HAL RAMECC Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RAMECC "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RAMECC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RAMECC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and RNG
# description: STMicroelectronics HAL RNG Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RNG "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RNG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_RNG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and SBS
# description: STMicroelectronics HAL SBS Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_SBS "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_SBS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_SBS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and VREFBUF
# description: STMicroelectronics HAL VREFBUF Init dependencies
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_VREFBUF "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_VREFBUF enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_VREFBUF 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE Init and WWDG
# description: STMicroelectronics HAL WWDG Init dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_WWDG "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_WWDG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_Init_and_WWDG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE SDMMC
# description: HAL CORE SDMMC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:DLYB(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:Q(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:SDMMC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE SRAM
# description: HAL CORE SRAM dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:FMC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE USB
# description: HAL CORE USB dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:USB OTG(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:USB CORE DEF(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORE XSPI
# description: HAL CORE XSPI dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL DRIVERS CORE#.*Csub:DLYB(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CORTEX
# description: HAL CORTEX dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CRC
# description: HAL CRC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:CRC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL CRS
# description: HAL CRS dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:CRS(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL Common
# description: STMicroelectronics STM32H7P and HAL common
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL DAC
# description: HAL DAC dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:DAC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL DBGMCU
# description: HAL DBGMCU dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:DBGMCU(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL DMA
# description: HAL DMA dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:DMA(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:Q(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL EXTI
# description: HAL EXTI dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:EXTI(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL FLASH
# description: HAL FLASH dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:FLASH_ITF(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL FLASH_ITF
# description: HAL FLASH_ITF dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:FLASH(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL FMAC
# description: HAL FMAC dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:FMAC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL GPIO
# description: HAL GPIO dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:GPIO(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL GPIO Init
# description: STMicroelectronics HAL Common Init
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO_Init "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO_Init enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO_Init 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL Generated code
# description: STMicroelectronics HAL components used for code Generation
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Generated_code "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Generated_code enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Generated_code 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL HRTIM
# description: HAL HRTIM dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:HRTIM(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL HSP
# description: HAL HSP dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL I2C
# description: HAL I2C dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:I2C(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL I2S
# description: HAL I2S dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:SPI(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL I3C
# description: HAL I3C dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:I3C(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL IWDG
# description: HAL IWDG dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:IWDG(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL LPTIM
# description: HAL LPTIM dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:LPTIM(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL PWR
# description: HAL PWR dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:PWR(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL RAMECC
# description: HAL RAMECC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:RAMECC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL RCC
# description: HAL RCC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:RCC(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:BUS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:PWR(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL RNG
# description: HAL RNG dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:RNG(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL RTC
# description: HAL RTC dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:RTC(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL SBS
# description: HAL SBS dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:SBS(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL SMARTCARD
# description: HAL SMARTCARD dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:USART(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL SMBUS
# description: HAL SMBUS dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:I2C(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL SPI
# description: HAL SPI dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:SPI(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL System Init
# description: STMicroelectronics HAL Common Init
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_System_Init "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UTILS(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32CubeMX2 Codegen#.*Csub:Generated Code(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_System_Init enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_System_Init 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL TAMP
# description: HAL TAMP dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:TAMP(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL TIM
# description: HAL TIM dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:TIM(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:SBS(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL UART
# description: HAL UART dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:USART(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL UCPD
# description: HAL UCPD dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:UCPD(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL USART
# description: HAL USART dependencies
if((((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")) AND ((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART "$<AND:$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:DMA(#.*|$)>,>>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:USART(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL VREFBUF
# description: HAL VREFBUF dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:VREFBUF(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:HAL WWDG
# description: HAL WWDG dependencies
if(((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13") AND (CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13")))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:CMSIS#.*Cgroup:CORE(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:WWDG(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:LL
# description: STMicroelectronics STM32H7P and LL
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL "$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 LL#.*Csub:Common(#.*|$)>,>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:MW FreeRTOS
# description: MW FreeRTOS used for HAL OS
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:NO OS
# description: NO MW used for HAL OS
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:STM32H7P
# description: STMicroelectronics STM32H7P
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:TEMPLATE OS
# description: TEMPLATE OS used for HAL OS
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:Timebase HAL RTC ALARM or WKUP
# description: HAL timebase based on RTC ALARM or WAKEUP
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:RTC(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:RTC timebase template(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:Timebase HAL TIM
# description: HAL timebase based on TIM
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM "$<AND:$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:TIM(#.*|$)>,>>,$<NOT:$<STREQUAL:$<FILTER:${CMSIS_COMPONENTS_LIST},INCLUDE,.*Cclass:Device#.*Cgroup:STM32 HAL#.*Csub:TIM timebase template(#.*|$)>,>>>")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:Timebase NONE
# description: HAL timebase NONE
if((CMSIS_Dname MATCHES "STM32H7P.*" AND CMSIS_Dvendor STREQUAL "STMicroelectronics:13"))
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE "1")
  message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE enabled")
else()
  set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE 0)
endif()


# condition: STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0:Use mutex
# description: STMicroelectronics HAL condition to check if USE_HAL_MUTEX is enabled
set(STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Use_mutex "1")
message(DEBUG "CMSIS condition STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Use_mutex enabled")

# Files and components in this package
if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:SYSTICK#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on Systick
  message(DEBUG "Using component Device_STM32_HAL_timebases_SYSTICK_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE}:-DCMSIS_USE_Device_STM32_HAL_timebases_SYSTICK_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE}:${CMAKE_CURRENT_LIST_DIR}/timebases/>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC timebase template#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL RTC templates used for timebases based on RTC alarm or RTC wakeup
  message(DEBUG "Using component Device_STM32_HAL_RTC_timebase_template_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_RTC_timebase_template_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/timebases>")
  if(EXISTS ${CMSIS_RTE_FOLDER}/Device/mx_rtc.c)
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMSIS_RTE_FOLDER}/Device/mx_rtc.c>")
  else()
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/timebases/mx_rtc.c>")
  endif()
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_ALARM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on RTC alarm
  message(DEBUG "Using component Device_STM32_HAL_timebases_RTC_ALARM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:-DCMSIS_USE_Device_STM32_HAL_timebases_RTC_ALARM_2_0_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_rtc_alarm.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_WAKEUP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on RTC wakeup
  message(DEBUG "Using component Device_STM32_HAL_timebases_RTC_WAKEUP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:-DCMSIS_USE_Device_STM32_HAL_timebases_RTC_WAKEUP_2_0_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_rtc_wakeup.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM timebase template#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL templates
  message(DEBUG "Using component Device_STM32_HAL_TIM_timebase_template_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_TIM_timebase_template_2_0_0=1>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:TIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on TIM
  message(DEBUG "Using component Device_STM32_HAL_timebases_TIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM}:-DCMSIS_USE_Device_STM32_HAL_timebases_TIM_2_0_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_tim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Core#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Common HAL driver
  message(DEBUG "Using component Device_STM32_HAL_Core_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_Core_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal/>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/ll/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I2C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities I2C
  message(DEBUG "Using component Device_STM32_HAL_UTILS_I2C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_I2C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i2c_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i2c_timing/stm32_utils_i2c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I3C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities I3C
  message(DEBUG "Using component Device_STM32_HAL_UTILS_I3C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_I3C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i3c_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i3c_timing/stm32_utils_i3c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:FDCAN#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities FDCAN
  message(DEBUG "Using component Device_STM32_HAL_UTILS_FDCAN_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_FDCAN_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/fdcan_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/fdcan_timing/stm32_utils_fdcan.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ASSERT#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL ASSERT template
  message(DEBUG "Using component Device_STM32_HAL_ASSERT_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_ASSERT_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/common>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:template#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL templates
  message(DEBUG "Using component Device_STM32_HAL_template_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_template_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/common>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Analog-to-digital converter (ADC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_ADC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:-DCMSIS_USE_Device_STM32_HAL_ADC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_adc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADF#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # ADF HAL driver
  message(DEBUG "Using component Device_STM32_HAL_ADF_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:-DCMSIS_USE_Device_STM32_HAL_ADF_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_adf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:AXIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # AXI interconnect matrix (AXIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_AXIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:-DCMSIS_USE_Device_STM32_HAL_AXIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_axim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:COMP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Comparator (COMP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_COMP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:-DCMSIS_USE_Device_STM32_HAL_COMP_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_comp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORDIC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORDIC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CORDIC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:-DCMSIS_USE_Device_STM32_HAL_CORDIC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_cordic.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORTEX#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Cortex (CORTEX) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CORTEX_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:-DCMSIS_USE_Device_STM32_HAL_CORTEX_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_cortex.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CRC calculation unit (CRC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CRC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:-DCMSIS_USE_Device_STM32_HAL_CRC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_crc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Clock Recovery CORE (CRS) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CRS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:-DCMSIS_USE_Device_STM32_HAL_CRS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_crs.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DAC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Digital-to-analog converter (DAC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DAC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:-DCMSIS_USE_Device_STM32_HAL_DAC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dac.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DBGMCU#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Microcontroller debug unit (DBGMCU) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DBGMCU_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:-DCMSIS_USE_Device_STM32_HAL_DBGMCU_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dbgmcu.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:DLYB#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Delay Block (DLYB) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_DLYB_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_DLYB_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_dlyb_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DMA#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # DMA controller (DMA) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DMA_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:-DCMSIS_USE_Device_STM32_HAL_DMA_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dma.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DTS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # DTS HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DTS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DTS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dts.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:EXTI#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # External interrupts and events (EXTI) controller
  message(DEBUG "Using component Device_STM32_HAL_EXTI_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:-DCMSIS_USE_Device_STM32_HAL_EXTI_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_exti.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FDCAN#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FDCAN HAL Driver
  message(DEBUG "Using component Device_STM32_HAL_FDCAN_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_FDCAN_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_fdcan.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Embedded FLASH memory HAL driver
  message(DEBUG "Using component Device_STM32_HAL_FLASH_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:-DCMSIS_USE_Device_STM32_HAL_FLASH_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_flash.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH_ITF#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Embedded FLASH Option Bytes HAL driver
  message(DEBUG "Using component Device_STM32_HAL_FLASH_ITF_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:-DCMSIS_USE_Device_STM32_HAL_FLASH_ITF_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_flash_itf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FMAC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FMAC HAL Driver
  message(DEBUG "Using component Device_STM32_HAL_FMAC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:-DCMSIS_USE_Device_STM32_HAL_FMAC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_fmac.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:FMC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FMC low layer (FMC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_FMC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_FMC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_fmc_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:GPIO#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # General-purpose I/O (GPIO) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_GPIO_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:-DCMSIS_USE_Device_STM32_HAL_GPIO_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_gpio.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HASH#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HASH HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HASH_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:-DCMSIS_USE_Device_STM32_HAL_HASH_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hash.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HCD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HCD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HCD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:-DCMSIS_USE_Device_STM32_HAL_HCD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hcd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HRTIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # High Resolution Timer (HRTIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HRTIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:-DCMSIS_USE_Device_STM32_HAL_HRTIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hrtim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HSP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Hardware Signal Processor (HSP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HSP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:-DCMSIS_USE_Device_STM32_HAL_HSP_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hsp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Inter-integrated circuit (I2C) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I2C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:-DCMSIS_USE_Device_STM32_HAL_I2C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i2c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I3C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Improved inter-integrated circuit (I3C) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I3C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:-DCMSIS_USE_Device_STM32_HAL_I3C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i3c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2S#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Integrated Inter-IC Sound Bus (I2S) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I2S_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:-DCMSIS_USE_Device_STM32_HAL_I2S_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i2s.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:IWDG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Independent watchdog (IWDG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_IWDG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:-DCMSIS_USE_Device_STM32_HAL_IWDG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_iwdg.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:LPTIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power timer (LPTIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_LPTIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:-DCMSIS_USE_Device_STM32_HAL_LPTIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_lptim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:MMC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # MMC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_MMC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_MMC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_mmc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NAND#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # NAND Flash controller HAL driver
  message(DEBUG "Using component Device_STM32_HAL_NAND_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_NAND_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_nand.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NOR#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # NOR Flash controller HAL driver
  message(DEBUG "Using component Device_STM32_HAL_NOR_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_NOR_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_nor.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PCD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Peripheral controller (PCD) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_PCD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:-DCMSIS_USE_Device_STM32_HAL_PCD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_pcd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PWR#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Power controller (PWR) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_PWR_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:-DCMSIS_USE_Device_STM32_HAL_PWR_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_pwr.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Q#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Queue (Q) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_Q_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_Q_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_q.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RAMECC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # RAMECC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RAMECC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:-DCMSIS_USE_Device_STM32_HAL_RAMECC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_ramecc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RCC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Reset and clock control (RCC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RCC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:-DCMSIS_USE_Device_STM32_HAL_RCC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rcc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RNG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Random number generator (RNG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RNG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:-DCMSIS_USE_Device_STM32_HAL_RNG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rng.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Real-time clock (RTC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RTC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:-DCMSIS_USE_Device_STM32_HAL_RTC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rtc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_SD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDIO#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SDIO HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SDIO_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_SDIO_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sdio.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDRAM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SDRAM HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SDRAM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_SDRAM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sdram.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:SDMMC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SD/MMC low layer (SDMMC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_SDMMC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_SDMMC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_sdmmc_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMARTCARD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SMARTCARD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SMARTCARD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:-DCMSIS_USE_Device_STM32_HAL_SMARTCARD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_smartcard.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMBUS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SMBus (SMBUS) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SMBUS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:-DCMSIS_USE_Device_STM32_HAL_SMBUS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_smbus.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SPI#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Serial peripheral interface (SPI) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SPI_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:-DCMSIS_USE_Device_STM32_HAL_SPI_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_spi.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SBS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORE configuration controller (SBS) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SBS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:-DCMSIS_USE_Device_STM32_HAL_SBS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sbs.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SRAM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SRAM controller (SRAM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SRAM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:-DCMSIS_USE_Device_STM32_HAL_SRAM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sram.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TAMP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Tampers (TAMP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_TAMP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:-DCMSIS_USE_Device_STM32_HAL_TAMP_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_tamp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Timers (TIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_TIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:-DCMSIS_USE_Device_STM32_HAL_TIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_tim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UART#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal asynchronous receiver transmitter (UART) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_UART_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:-DCMSIS_USE_Device_STM32_HAL_UART_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_uart.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UCPD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Type-C / USB Power Delivery (UCPD) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_UCPD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:-DCMSIS_USE_Device_STM32_HAL_UCPD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_ucpd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:USART#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal synchronous asynchronous receiver transmitter (USART) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_USART_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:-DCMSIS_USE_Device_STM32_HAL_USART_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_usart.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB CORE DEF#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Core Def (USB CORE DEF) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_USB_CORE_DEF_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_USB_CORE_DEF_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB OTG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB OTG Core (USB OTG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_USB_OTG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_USB_OTG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_usb_otg_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:VREFBUF#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Voltage reference buffer (VREFBUF) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_VREFBUF_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:-DCMSIS_USE_Device_STM32_HAL_VREFBUF_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_vrefbuf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:WWDG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Window watchdog (WWDG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_WWDG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:-DCMSIS_USE_Device_STM32_HAL_WWDG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_wwdg.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:XSPI#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Octo-SPI/Hexa-SPI (XSPI) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_XSPI_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:-DCMSIS_USE_Device_STM32_HAL_XSPI_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_xspi.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:Common#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Common LL driver
  message(DEBUG "Using component Device_STM32_LL_Common_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core}:-DCMSIS_USE_Device_STM32_LL_Common_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core}:${CMAKE_CURRENT_LIST_DIR}/ll/>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:ADC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Analog-to-digital converter (ADC) LL driver
  message(DEBUG "Using component Device_STM32_LL_ADC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_ADC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:AXIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # AXI interconnect matrix (AXIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_AXIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_AXIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:BUS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # LL BUS driver
  message(DEBUG "Using component Device_STM32_LL_BUS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_BUS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:COMP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # COMP LL driver
  message(DEBUG "Using component Device_STM32_LL_COMP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_COMP_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CORDIC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORDIC LL driver
  message(DEBUG "Using component Device_STM32_LL_CORDIC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CORDIC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CRC calculation unit (CRC) LL driver
  message(DEBUG "Using component Device_STM32_LL_CRC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CRC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # (CRS) LL driver
  message(DEBUG "Using component Device_STM32_LL_CRS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CRS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DAC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Digital-to-analog converter (DAC) LL driver
  message(DEBUG "Using component Device_STM32_LL_DAC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DAC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DBGMCU#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration (DBGMCU) LL driver
  message(DEBUG "Using component Device_STM32_LL_DBGMCU_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DBGMCU_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DMA#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # DMA controller (DMA) LL driver
  message(DEBUG "Using component Device_STM32_LL_DMA_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DMA_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FLASH#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FLASH LL driver
  message(DEBUG "Using component Device_STM32_LL_FLASH_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_FLASH_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:EXTI#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Extended interrupts and events controller (EXTI) LL driver
  message(DEBUG "Using component Device_STM32_LL_EXTI_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_EXTI_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FMAC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  #  (FMAC) LL driver
  message(DEBUG "Using component Device_STM32_LL_FMAC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_FMAC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:GPIO#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # General-purpose I/O (GPIO) LL driver
  message(DEBUG "Using component Device_STM32_LL_GPIO_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_GPIO_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:HRTIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # High Resolution Timer (HRTIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_HRTIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_HRTIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I2C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Inter-integrated circuit (I2C) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_I2C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_I2C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I3C#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Improved inter-integrated circuit (I3C) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_I3C_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_I3C_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:IWDG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Independent watchdog (IWDG) LL driver
  message(DEBUG "Using component Device_STM32_LL_IWDG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_IWDG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPTIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power timer (LPTIM) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_LPTIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_LPTIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPUART#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power universal asynchronous receiver transmitter (LPUART) LL driver
  message(DEBUG "Using component Device_STM32_LL_LPUART_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_LPUART_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:PWR#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Power controller (PWR) LL driver
  message(DEBUG "Using component Device_STM32_LL_PWR_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_PWR_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RAMECC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # RAM ECC controller (RAMECC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RAMECC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RAMECC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RCC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Reset and clock control (RCC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RCC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RCC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RNG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Random number generator (RNG) LL driver
  message(DEBUG "Using component Device_STM32_LL_RNG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RNG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RTC#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Real-time clock (RTC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RTC_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RTC_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TAMP#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # (TAMP) LL driver
  message(DEBUG "Using component Device_STM32_LL_TAMP_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_TAMP_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SPI#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Serial peripheral interface (SPI) LL driver
  message(DEBUG "Using component Device_STM32_LL_SPI_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SPI_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SBS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration (SBS) LL driver
  message(DEBUG "Using component Device_STM32_LL_SBS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SBS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SYSTEM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration LL driver
  message(DEBUG "Using component Device_STM32_LL_SYSTEM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SYSTEM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TIM#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Timers (TIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_TIM_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_TIM_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UCPD#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Type-C / USB Power Delivery interface (UCPD) LL driver
  message(DEBUG "Using component Device_STM32_LL_UCPD_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_UCPD_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:USART#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal synchronous asynchronous receiver transmitter (USART) LL driver
  message(DEBUG "Using component Device_STM32_LL_USART_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_USART_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UTILS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utils LL driver
  message(DEBUG "Using component Device_STM32_LL_UTILS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P}:-DCMSIS_USE_Device_STM32_LL_UTILS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:VREFBUF#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Voltage reference buffer (VREFBUF) LL driver
  message(DEBUG "Using component Device_STM32_LL_VREFBUF_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_VREFBUF_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:WWDG#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System window watchdog (WWDG) LL driver
  message(DEBUG "Using component Device_STM32_LL_WWDG_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_WWDG_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:NO_OS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port without OS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_NO_OS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_NO_OS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os/stm32_hal_os.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:FreeRTOS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port with MW FreeRTOS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_FreeRTOS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_FreeRTOS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos/stm32_hal_os.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:TEMPLATE OS#Cversion:2.0.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port with CMSIS OS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_TEMPLATE_OS_2_0_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_TEMPLATE_OS_2_0_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMAKE_CURRENT_LIST_DIR}/templates/os_port>")
  if(EXISTS ${CMSIS_RTE_FOLDER}/Device/stm32_hal_os.c)
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMSIS_RTE_FOLDER}/Device/stm32_hal_os.c>")
  else()
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMAKE_CURRENT_LIST_DIR}/templates/os_port/stm32_hal_os.c>")
  endif()
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:WWDG#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System window watchdog (WWDG) LL driver
  message(DEBUG "Using component Device_STM32_LL_WWDG_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_WWDG_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:VREFBUF#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Voltage reference buffer (VREFBUF) LL driver
  message(DEBUG "Using component Device_STM32_LL_VREFBUF_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_VREFBUF_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UTILS#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Utils LL driver
  message(DEBUG "Using component Device_STM32_LL_UTILS_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P}:-DCMSIS_USE_Device_STM32_LL_UTILS_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_STM32H7P}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:USART#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal synchronous asynchronous receiver transmitter (USART) LL driver
  message(DEBUG "Using component Device_STM32_LL_USART_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_USART_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:UCPD#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Type-C / USB Power Delivery interface (UCPD) LL driver
  message(DEBUG "Using component Device_STM32_LL_UCPD_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_UCPD_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Timers (TIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_TIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_TIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:TAMP#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # (TAMP) LL driver
  message(DEBUG "Using component Device_STM32_LL_TAMP_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_TAMP_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SYSTEM#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration LL driver
  message(DEBUG "Using component Device_STM32_LL_SYSTEM_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SYSTEM_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SPI#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Serial peripheral interface (SPI) LL driver
  message(DEBUG "Using component Device_STM32_LL_SPI_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SPI_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:SBS#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration (SBS) LL driver
  message(DEBUG "Using component Device_STM32_LL_SBS_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_SBS_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RTC#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Real-time clock (RTC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RTC_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RTC_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RNG#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Random number generator (RNG) LL driver
  message(DEBUG "Using component Device_STM32_LL_RNG_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RNG_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RCC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Reset and clock control (RCC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RCC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RCC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:RAMECC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # RAM ECC controller (RAMECC) LL driver
  message(DEBUG "Using component Device_STM32_LL_RAMECC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_RAMECC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:PWR#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Power controller (PWR) LL driver
  message(DEBUG "Using component Device_STM32_LL_PWR_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_PWR_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPUART#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power universal asynchronous receiver transmitter (LPUART) LL driver
  message(DEBUG "Using component Device_STM32_LL_LPUART_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_LPUART_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:LPTIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power timer (LPTIM) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_LPTIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_LPTIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:IWDG#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Independent watchdog (IWDG) LL driver
  message(DEBUG "Using component Device_STM32_LL_IWDG_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_IWDG_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I3C#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Improved inter-integrated circuit (I3C) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_I3C_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_I3C_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:I2C#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Inter-integrated circuit (I2C) interface LL driver
  message(DEBUG "Using component Device_STM32_LL_I2C_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_I2C_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:HRTIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # High Resolution Timer (HRTIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_HRTIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_HRTIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:GPIO#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # General-purpose I/O (GPIO) LL driver
  message(DEBUG "Using component Device_STM32_LL_GPIO_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_GPIO_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FMAC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  #  (FMAC) LL driver
  message(DEBUG "Using component Device_STM32_LL_FMAC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_FMAC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:FLASH#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FLASH LL driver
  message(DEBUG "Using component Device_STM32_LL_FLASH_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_FLASH_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:EXTI#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Extended interrupts and events controller (EXTI) LL driver
  message(DEBUG "Using component Device_STM32_LL_EXTI_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_EXTI_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DMA#Cversion:0.2.1" IN_LIST CMSIS_COMPONENTS_LIST)  # DMA controller (DMA) LL driver
  message(DEBUG "Using component Device_STM32_LL_DMA_0_2_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DMA_0_2_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DBGMCU#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # System configuration (DBGMCU) LL driver
  message(DEBUG "Using component Device_STM32_LL_DBGMCU_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DBGMCU_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:DAC#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Digital-to-analog converter (DAC) LL driver
  message(DEBUG "Using component Device_STM32_LL_DAC_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_DAC_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:Common#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Common LL driver
  message(DEBUG "Using component Device_STM32_LL_Common_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core}:-DCMSIS_USE_Device_STM32_LL_Common_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_CMSIS_Core}:${CMAKE_CURRENT_LIST_DIR}/ll/>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRS#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # (CRS) LL driver
  message(DEBUG "Using component Device_STM32_LL_CRS_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CRS_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CRC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CRC calculation unit (CRC) LL driver
  message(DEBUG "Using component Device_STM32_LL_CRC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CRC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:CORDIC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORDIC LL driver
  message(DEBUG "Using component Device_STM32_LL_CORDIC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_CORDIC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:COMP#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # COMP LL driver
  message(DEBUG "Using component Device_STM32_LL_COMP_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_COMP_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:BUS#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # LL BUS driver
  message(DEBUG "Using component Device_STM32_LL_BUS_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_BUS_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:AXIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # AXI interconnect matrix (AXIM) LL driver
  message(DEBUG "Using component Device_STM32_LL_AXIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_AXIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 LL#Csub:ADC#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Analog-to-digital converter (ADC) LL driver
  message(DEBUG "Using component Device_STM32_LL_ADC_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:-DCMSIS_USE_Device_STM32_LL_ADC_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_LL}:${CMAKE_CURRENT_LIST_DIR}/ll>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:TIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on TIM
  message(DEBUG "Using component Device_STM32_HAL_timebases_TIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM}:-DCMSIS_USE_Device_STM32_HAL_timebases_TIM_0_1_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_tim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:SYSTICK#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on Systick
  message(DEBUG "Using component Device_STM32_HAL_timebases_SYSTICK_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE}:-DCMSIS_USE_Device_STM32_HAL_timebases_SYSTICK_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_NONE}:${CMAKE_CURRENT_LIST_DIR}/timebases/>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_WAKEUP#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on RTC wakeup
  message(DEBUG "Using component Device_STM32_HAL_timebases_RTC_WAKEUP_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:-DCMSIS_USE_Device_STM32_HAL_timebases_RTC_WAKEUP_0_1_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_rtc_wakeup.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:timebases#Cvariant:RTC_ALARM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL timebases based on RTC alarm
  message(DEBUG "Using component Device_STM32_HAL_timebases_RTC_ALARM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:-DCMSIS_USE_Device_STM32_HAL_timebases_RTC_ALARM_0_1_0=1>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_Timebase_HAL_RTC_ALARM_or_WKUP}:${CMAKE_CURRENT_LIST_DIR}/timebases/stm32_hal_timebase_rtc_alarm.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:template#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL templates
  message(DEBUG "Using component Device_STM32_HAL_template_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_template_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/common>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:XSPI#Cversion:0.5.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Octo-SPI/Hexa-SPI (XSPI) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_XSPI_0_5_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:-DCMSIS_USE_Device_STM32_HAL_XSPI_0_5_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_XSPI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_xspi.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:WWDG#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Window watchdog (WWDG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_WWDG_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:-DCMSIS_USE_Device_STM32_HAL_WWDG_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_WWDG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_wwdg.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:VREFBUF#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Voltage reference buffer (VREFBUF) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_VREFBUF_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:-DCMSIS_USE_Device_STM32_HAL_VREFBUF_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_VREFBUF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_vrefbuf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:USART#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal synchronous asynchronous receiver transmitter (USART) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_USART_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:-DCMSIS_USE_Device_STM32_HAL_USART_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_USART}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_usart.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UCPD#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Type-C / USB Power Delivery (UCPD) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_UCPD_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:-DCMSIS_USE_Device_STM32_HAL_UCPD_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UCPD}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_ucpd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:UART#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Universal asynchronous receiver transmitter (UART) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_UART_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:-DCMSIS_USE_Device_STM32_HAL_UART_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_UART}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_uart.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM#Cversion:0.1.2" IN_LIST CMSIS_COMPONENTS_LIST)  # Timers (TIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_TIM_0_1_2")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:-DCMSIS_USE_Device_STM32_HAL_TIM_0_1_2=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_tim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TIM timebase template#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL templates
  message(DEBUG "Using component Device_STM32_HAL_TIM_timebase_template_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_TIM_timebase_template_0_1_1=1>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:TAMP#Cversion:0.1.4" IN_LIST CMSIS_COMPONENTS_LIST)  # Tampers (TAMP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_TAMP_0_1_4")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:-DCMSIS_USE_Device_STM32_HAL_TAMP_0_1_4=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_TAMP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_tamp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SRAM#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SRAM controller (SRAM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SRAM_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:-DCMSIS_USE_Device_STM32_HAL_SRAM_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SRAM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sram.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SPI#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Serial peripheral interface (SPI) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SPI_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:-DCMSIS_USE_Device_STM32_HAL_SPI_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SPI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_spi.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMBUS#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SMBus (SMBUS) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SMBUS_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:-DCMSIS_USE_Device_STM32_HAL_SMBUS_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMBUS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_smbus.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SMARTCARD#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SMARTCARD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SMARTCARD_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:-DCMSIS_USE_Device_STM32_HAL_SMARTCARD_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SMARTCARD}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_smartcard.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDRAM#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SDRAM HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SDRAM_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_SDRAM_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sdram.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SDIO#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SDIO HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SDIO_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_SDIO_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sdio.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SD#Cversion:0.5.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SD_0_5_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_SD_0_5_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:SBS#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORE configuration controller (SBS) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_SBS_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:-DCMSIS_USE_Device_STM32_HAL_SBS_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_SBS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_sbs.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Real-time clock (RTC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RTC_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:-DCMSIS_USE_Device_STM32_HAL_RTC_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RTC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rtc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RTC timebase template#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL RTC templates used for timebases based on RTC alarm or RTC wakeup
  message(DEBUG "Using component Device_STM32_HAL_RTC_timebase_template_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_RTC_timebase_template_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/timebases>")
  if(EXISTS ${CMSIS_RTE_FOLDER}/Device/mx_rtc.c)
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMSIS_RTE_FOLDER}/Device/mx_rtc.c>")
  else()
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/timebases/mx_rtc.c>")
  endif()
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RNG#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Random number generator (RNG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RNG_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:-DCMSIS_USE_Device_STM32_HAL_RNG_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RNG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rng.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RCC#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Reset and clock control (RCC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RCC_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:-DCMSIS_USE_Device_STM32_HAL_RCC_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RCC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_rcc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:RAMECC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # RAMECC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_RAMECC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:-DCMSIS_USE_Device_STM32_HAL_RAMECC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_RAMECC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_ramecc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Q#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Queue (Q) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_Q_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_Q_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_q.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PWR#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Power controller (PWR) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_PWR_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:-DCMSIS_USE_Device_STM32_HAL_PWR_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_PWR}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_pwr.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:PCD#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Peripheral controller (PCD) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_PCD_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:-DCMSIS_USE_Device_STM32_HAL_PCD_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_pcd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NOR#Cversion:0.2.1" IN_LIST CMSIS_COMPONENTS_LIST)  # NOR Flash controller HAL driver
  message(DEBUG "Using component Device_STM32_HAL_NOR_0_2_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_NOR_0_2_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_nor.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:NAND#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # NAND Flash controller HAL driver
  message(DEBUG "Using component Device_STM32_HAL_NAND_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:-DCMSIS_USE_Device_STM32_HAL_NAND_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_FMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_nand.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:MMC#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # MMC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_MMC_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:-DCMSIS_USE_Device_STM32_HAL_MMC_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_SDMMC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_mmc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:LPTIM#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Low-power timer (LPTIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_LPTIM_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:-DCMSIS_USE_Device_STM32_HAL_LPTIM_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_LPTIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_lptim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:IWDG#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Independent watchdog (IWDG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_IWDG_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:-DCMSIS_USE_Device_STM32_HAL_IWDG_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_IWDG}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_iwdg.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I3C#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Improved inter-integrated circuit (I3C) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I3C_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:-DCMSIS_USE_Device_STM32_HAL_I3C_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I3C}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i3c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2S#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Integrated Inter-IC Sound Bus (I2S) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I2S_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:-DCMSIS_USE_Device_STM32_HAL_I2S_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2S}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i2s.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:I2C#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Inter-integrated circuit (I2C) interface HAL driver
  message(DEBUG "Using component Device_STM32_HAL_I2C_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:-DCMSIS_USE_Device_STM32_HAL_I2C_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_I2C}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_i2c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HSP#Cversion:0.0.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Hardware Signal Processor (HSP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HSP_0_0_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:-DCMSIS_USE_Device_STM32_HAL_HSP_0_0_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HSP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hsp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HRTIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # High Resolution Timer (HRTIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HRTIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:-DCMSIS_USE_Device_STM32_HAL_HRTIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_HRTIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hrtim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HCD#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HCD HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HCD_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:-DCMSIS_USE_Device_STM32_HAL_HCD_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_USB}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hcd.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HASH#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # HASH HAL driver
  message(DEBUG "Using component Device_STM32_HAL_HASH_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:-DCMSIS_USE_Device_STM32_HAL_HASH_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_hash.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:TEMPLATE OS#Cversion:0.0.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port with CMSIS OS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_TEMPLATE_OS_0_0_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_TEMPLATE_OS_0_0_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMAKE_CURRENT_LIST_DIR}/templates/os_port>")
  if(EXISTS ${CMSIS_RTE_FOLDER}/Device/stm32_hal_os.c)
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMSIS_RTE_FOLDER}/Device/stm32_hal_os.c>")
  else()
    target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_TEMPLATE_OS}:${CMAKE_CURRENT_LIST_DIR}/templates/os_port/stm32_hal_os.c>")
  endif()
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:NO_OS#Cversion:0.0.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port without OS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_NO_OS_0_0_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_NO_OS_0_0_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_NO_OS}:${CMAKE_CURRENT_LIST_DIR}/os_port/no_os/stm32_hal_os.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:HAL OS#Cvariant:FreeRTOS#Cversion:0.0.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL OS port with MW FreeRTOS
  message(DEBUG "Using component Device_STM32_HAL_HAL_OS_FreeRTOS_0_0_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:-DCMSIS_USE_Device_STM32_HAL_HAL_OS_FreeRTOS_0_0_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_MW_FreeRTOS}:${CMAKE_CURRENT_LIST_DIR}/os_port/freertos/stm32_hal_os.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:GPIO#Cversion:0.2.2" IN_LIST CMSIS_COMPONENTS_LIST)  # General-purpose I/O (GPIO) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_GPIO_0_2_2")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:-DCMSIS_USE_Device_STM32_HAL_GPIO_0_2_2=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_GPIO}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_gpio.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FMAC#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FMAC HAL Driver
  message(DEBUG "Using component Device_STM32_HAL_FMAC_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:-DCMSIS_USE_Device_STM32_HAL_FMAC_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FMAC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_fmac.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH_ITF#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Embedded FLASH Option Bytes HAL driver
  message(DEBUG "Using component Device_STM32_HAL_FLASH_ITF_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:-DCMSIS_USE_Device_STM32_HAL_FLASH_ITF_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH_ITF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_flash_itf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FLASH#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Embedded FLASH memory HAL driver
  message(DEBUG "Using component Device_STM32_HAL_FLASH_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:-DCMSIS_USE_Device_STM32_HAL_FLASH_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_FLASH}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_flash.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:FDCAN#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FDCAN HAL Driver
  message(DEBUG "Using component Device_STM32_HAL_FDCAN_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_FDCAN_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_fdcan.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:EXTI#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # External interrupts and events (EXTI) controller
  message(DEBUG "Using component Device_STM32_HAL_EXTI_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:-DCMSIS_USE_Device_STM32_HAL_EXTI_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_EXTI}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_exti.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DTS#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # DTS HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DTS_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DTS_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dts.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DMA#Cversion:0.5.0" IN_LIST CMSIS_COMPONENTS_LIST)  # DMA controller (DMA) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DMA_0_5_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:-DCMSIS_USE_Device_STM32_HAL_DMA_0_5_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DMA}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dma.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DBGMCU#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Microcontroller debug unit (DBGMCU) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DBGMCU_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:-DCMSIS_USE_Device_STM32_HAL_DBGMCU_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DBGMCU}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dbgmcu.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:DAC#Cversion:0.4.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Digital-to-analog converter (DAC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DAC_0_4_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:-DCMSIS_USE_Device_STM32_HAL_DAC_0_4_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_DAC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_dac.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:Core#Cversion:0.4.1" IN_LIST CMSIS_COMPONENTS_LIST)  # Common HAL driver
  message(DEBUG "Using component Device_STM32_HAL_Core_0_4_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_Core_0_4_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal/>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/ll/>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRS#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Clock Recovery CORE (CRS) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CRS_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:-DCMSIS_USE_Device_STM32_HAL_CRS_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRS}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_crs.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CRC#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CRC calculation unit (CRC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CRC_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:-DCMSIS_USE_Device_STM32_HAL_CRC_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CRC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_crc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORTEX#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Cortex (CORTEX) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CORTEX_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:-DCMSIS_USE_Device_STM32_HAL_CORTEX_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORTEX}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_cortex.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:CORDIC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # CORDIC HAL driver
  message(DEBUG "Using component Device_STM32_HAL_CORDIC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:-DCMSIS_USE_Device_STM32_HAL_CORDIC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORDIC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_cordic.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:COMP#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Comparator (COMP) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_COMP_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:-DCMSIS_USE_Device_STM32_HAL_COMP_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_COMP}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_comp.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:AXIM#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # AXI interconnect matrix (AXIM) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_AXIM_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:-DCMSIS_USE_Device_STM32_HAL_AXIM_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_AXIM}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_axim.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ASSERT#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # HAL ASSERT template
  message(DEBUG "Using component Device_STM32_HAL_ASSERT_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_ASSERT_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/templates/common>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADF#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # ADF HAL driver
  message(DEBUG "Using component Device_STM32_HAL_ADF_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:-DCMSIS_USE_Device_STM32_HAL_ADF_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADF}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_adf.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL#Csub:ADC#Cversion:0.2.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Analog-to-digital converter (ADC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_ADC_0_2_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:-DCMSIS_USE_Device_STM32_HAL_ADC_0_2_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_ADC}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_hal_adc.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I3C#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities I3C
  message(DEBUG "Using component Device_STM32_HAL_UTILS_I3C_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_I3C_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i3c_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i3c_timing/stm32_utils_i3c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:I2C#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities I2C
  message(DEBUG "Using component Device_STM32_HAL_UTILS_I2C_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_I2C_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i2c_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/i2c_timing/stm32_utils_i2c.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL UTILS#Csub:FDCAN#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Utilities FDCAN
  message(DEBUG "Using component Device_STM32_HAL_UTILS_FDCAN_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:-DCMSIS_USE_Device_STM32_HAL_UTILS_FDCAN_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/fdcan_timing>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_Common}:${CMAKE_CURRENT_LIST_DIR}/utils/fdcan_timing/stm32_utils_fdcan.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB OTG#Cversion:0.3.0" IN_LIST CMSIS_COMPONENTS_LIST)  # USB OTG Core (USB OTG) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_USB_OTG_0_3_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_USB_OTG_0_3_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_usb_otg_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:USB CORE DEF#Cversion:0.1.1" IN_LIST CMSIS_COMPONENTS_LIST)  # USB Core Def (USB CORE DEF) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_USB_CORE_DEF_0_1_1")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_USB_CORE_DEF_0_1_1=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:SDMMC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # SD/MMC low layer (SDMMC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_SDMMC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_SDMMC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_sdmmc_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:FMC#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # FMC low layer (FMC) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_FMC_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_FMC_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_fmc_core.c>")
endif()

if("Cvendor:STMicroelectronics#Cclass:Device#Cgroup:STM32 HAL DRIVERS CORE#Csub:DLYB#Cversion:0.1.0" IN_LIST CMSIS_COMPONENTS_LIST)  # Delay Block (DLYB) HAL driver
  message(DEBUG "Using component Device_STM32_HAL_DRIVERS_CORE_DLYB_0_1_0")
  target_compile_definitions(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:-DCMSIS_USE_Device_STM32_HAL_DRIVERS_CORE_DLYB_0_1_0=1>")
  target_include_directories(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal>")
  target_sources(STMicroelectronics_stm32h7pxx_hal_drivers_2_0_0 INTERFACE "$<${STMicroelectronics.stm32h7pxx_hal_drivers.2.0.0_HAL_CORE}:${CMAKE_CURRENT_LIST_DIR}/hal/stm32h7pxx_dlyb_core.c>")
endif()

