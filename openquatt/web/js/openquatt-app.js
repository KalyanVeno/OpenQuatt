/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var Ns={main:"https://github.com/OpenQuatt/OpenQuatt/releases/latest",dev:"https://github.com/OpenQuatt/OpenQuatt/releases/tag/dev-latest"},Os="https://oi.esphome.io/v3/www.js",Ut=2,Gt=4,_n=6e4,Ia="Power House",Fa="Water Temperature Control (heating curve)",Hr=[["setup","Kies je setup","Controleer of je Q-edition als Single of Duo en via Wi-Fi of Ethernet moet werken."],["generation","Kies je Quatt Hybrid","Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar."],["flow-source","Flowmeting configureren","Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort."],["thermostat-source","Thermostaatgegevens configureren","Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt."],["boiler","CV-ketel of boiler","Leg vast of er een ketel is en hoe die fysiek is aangesloten.","boilerCvAssistEnabled"],["strategy","Kies de verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs."],["heating","Werk de regeling uit","Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze."],["flow","Flowregeling en afstelling","Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning."],["water","Watertemperatuur beveiligen","Controleer de normale bovengrens en de tripgrens voor het watercircuit."],["silent","Stille uren en niveaus","Stel daarna het stille venster en de compressorlimieten voor dag en nacht in."],["usage-telemetry","Gebruiksstatistieken","Kies of OpenQuatt beperkte technische gebruiksstatistieken mag delen. Tijdens een nieuwe Quick Start staat delen standaard aan.","usageTelemetryEnabled"],["confirm","Bevestigen en afronden","Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid."]].map(([e,t,r,n],a)=>({id:e,kicker:`Stap ${a+1}`,title:t,copy:r,...n?{optionalEntity:n}:{}})),An=[1,2],Dr=Array.from({length:11},(e,t)=>t),ja=["cooling","heating"];function zw(e){return e==="cooling"?"cooling":"heating"}function Uw(e){return e==="cooling"?"Cooling":"Heating"}function Wo(e,t,r){return`hp${e}OduRuntime${Uw(t)}F${r}`}function _e(e,t){return`hp${e}OduRuntimeFrequency${t}`}function Ps(e){return[_e(e,"Enable"),_e(e,"Load"),_e(e,"Apply"),_e(e,"Status"),...ja.flatMap(t=>Dr.map(r=>Wo(e,t,r)))]}function bd(e){let t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}var Wa=An.flatMap(Ps),Va=new Set(An.flatMap(e=>[_e(e,"Load"),_e(e,"Apply")])),L={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},hardwareRevisionText:{domain:"text_sensor",name:"OpenQuatt Hardware Revision",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},usageTelemetryEnabled:{domain:"switch",name:"Usage statistics",optional:!0},usageTelemetryChoiceConfigured:{domain:"binary_sensor",name:"Usage statistics choice configured",optional:!0},usageTelemetryInstallationId:{domain:"text_sensor",name:"Usage statistics installation ID",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},boilerFaultFallbackEnabled:{domain:"switch",name:"Boiler fallback on heat-pump fault",optional:!0},boilerConnection:{domain:"select",name:"Boiler connection",optional:!0},otbConnectionMismatch:{domain:"binary_sensor",name:"OTB - Boiler Connection Mismatch",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableValid:{domain:"binary_sensor",name:"Cooling Enable Valid",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp1RuntimeHours:{domain:"sensor",name:"HP1 - Runtime Hours",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},hp2RuntimeHours:{domain:"sensor",name:"HP2 - Runtime Hours",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},pt1000ReadProblem:{domain:"binary_sensor",name:"PT1000 read problem",optional:!0},waterSupplyTempFallbackActive:{domain:"binary_sensor",name:"Water Supply Temp Fallback Active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},otbLinkAvailable:{domain:"binary_sensor",name:"OTB - Boiler Link Available",optional:!0},otbChCommand:{domain:"switch",name:"OTB - Central Heating Command",optional:!0},otbControlSetpointCommand:{domain:"number",name:"OTB - Control Setpoint Command",optional:!0},otbFaultIndication:{domain:"binary_sensor",name:"OTB - Fault Indication",optional:!0},otbChActive:{domain:"binary_sensor",name:"OTB - Central Heating Active",optional:!0},otbDhwActive:{domain:"binary_sensor",name:"OTB - Domestic Hot Water Active",optional:!0},otbFlameOn:{domain:"binary_sensor",name:"OTB - Flame On",optional:!0},otbDiagnosticIndication:{domain:"binary_sensor",name:"OTB - Diagnostic Indication",optional:!0},otbDhwPresent:{domain:"binary_sensor",name:"OTB - DHW Present",optional:!0},otbServiceRequest:{domain:"binary_sensor",name:"OTB - Service Required",optional:!0},otbLockoutReset:{domain:"binary_sensor",name:"OTB - Lockout Reset",optional:!0},otbLowWaterPressure:{domain:"binary_sensor",name:"OTB - Low Water Pressure",optional:!0},otbFlameFault:{domain:"binary_sensor",name:"OTB - Flame Fault",optional:!0},otbAirPressureFault:{domain:"binary_sensor",name:"OTB - Air Pressure Fault",optional:!0},otbWaterOverTemp:{domain:"binary_sensor",name:"OTB - Water Overtemperature",optional:!0},otbRelativeModulation:{domain:"sensor",name:"OTB - Relative Modulation",optional:!0},otbChPressure:{domain:"sensor",name:"OTB - CH Water Pressure",optional:!0},otbBoilerWaterTemp:{domain:"sensor",name:"OTB - Boiler Water Temperature",optional:!0},otbReturnWaterTemp:{domain:"sensor",name:"OTB - Return Water Temperature",optional:!0},otbDhwTemp:{domain:"sensor",name:"OTB - Domestic Hot Water Temperature",optional:!0},otbOemFaultCode:{domain:"sensor",name:"OTB - OEM Fault Code",optional:!0},otbOemDiagnosticCode:{domain:"sensor",name:"OTB - OEM Diagnostic Code",optional:!0},otbMaxCapacity:{domain:"sensor",name:"OTB - Maximum Boiler Capacity",optional:!0},otbMinModulation:{domain:"sensor",name:"OTB - Minimum Modulation",optional:!0},otbOpenThermVersion:{domain:"sensor",name:"OTB - OpenTherm Device Version",optional:!0},otbDeviceType:{domain:"sensor",name:"OTB - Device Type",optional:!0},otbDeviceVersion:{domain:"sensor",name:"OTB - Device Product Version",optional:!0},otbLastResponseAge:{domain:"sensor",name:"OTB - Last Response Age",optional:!0},otbResponseCount:{domain:"sensor",name:"OTB - Valid Response Count",optional:!0},otbLastResponseId:{domain:"sensor",name:"OTB - Last Response Message ID",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerCommandValid:{domain:"binary_sensor",name:"Boiler command valid",optional:!0},boilerCommandActive:{domain:"binary_sensor",name:"Boiler command active",optional:!0},boilerCommandTargetTemperature:{domain:"sensor",name:"Boiler command target temperature",optional:!0},boilerCommandRequestedPower:{domain:"sensor",name:"Boiler command requested power",optional:!0},boilerCommandAge:{domain:"sensor",name:"Boiler command age",optional:!0},boilerCommandSource:{domain:"text_sensor",name:"Boiler command source",optional:!0},boilerBlockReason:{domain:"text_sensor",name:"Boiler block reason",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},decisionLogHistoryEnabled:{domain:"switch",name:"Beslisloghistorie bewaren",optional:!0},decisionLogHistoryFlush:{domain:"button",name:"Beslisloghistorie nu opslaan",optional:!0},decisionLogHistoryClear:{domain:"button",name:"Beslisloghistorie wissen",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},waterSupplyTempEffectiveSource:{domain:"text_sensor",name:"Water Supply Temp Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};An.forEach(e=>{let t=`HP${e} - EXPERIMENTAL`;L[_e(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},L[_e(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},L[_e(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},L[_e(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},ja.forEach(r=>{Dr.forEach(n=>{L[Wo(e,r,n)]={domain:"number",name:`${t} ${zw(r)} F${n} runtime Hz`,optional:!0}})})});var Ba=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"control",label:"Beslislog",icon:"activity",badge:"BETA"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"settings",label:"Instellingen",icon:"settings"}],wd=new Set(Ba.map(e=>e.id)),Gw={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',shield:'<path d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6z"/><path d="m9 12 2 2 4-5"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function me(e,t=""){let r=Gw[e];return r?`<svg${t?` class="${Qw(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function Qw(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var ye=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Ie=new Set(ye.map(e=>e.id)),Ka=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",compressor:"hp1Compressor",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",compressor:"hp2Compressor",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],vd=Ka.flatMap(e=>Object.values(e.keys)),Yw=new Set(["cop","compressor","mode","failures","defrost","bottomPlate","crankcase","eev","fourWay"]),Jw=Ka.flatMap(e=>Object.entries(e.keys).filter(([t])=>!Yw.has(t)).map(([,t])=>t)),Se=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],Mt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Vo=["dayMax","silentMax","maxWater"],at=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Nr=["flowKp","flowKi"],Rn=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Hn=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],Dn=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","pt1000ReadProblem","waterSupplyTempFallbackActive","flowMismatch","boilerFaultFallbackEnabled","cicPollingEnabled","cicDataStale","otEnabled","otThermostatStatusValid","otLinkProblem","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","hp1Failures","hp2Failures"],Zw=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","pt1000ReadProblem","waterSupplyTempFallbackActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otThermostatStatusValid","otLinkProblem","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","hp1Failures","hp2Failures"],za=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Hn,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Nn=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),Ls=["cicCompatibilityMode"],Is=["otEnabled","otLinkProblem"],Bo=["boilerConnection","boilerFaultFallbackEnabled"],Fs=["cicPollingEnabled","cicFeedUrl","cicDataStale"],js=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Ua=["boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerCommandAge","boilerCommandSource","boilerBlockReason"],Ga=["otbLinkAvailable","otbChCommand","otbControlSetpointCommand","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbDhwPresent","otbServiceRequest","otbLockoutReset","otbLowWaterPressure","otbFlameFault","otbAirPressureFault","otbWaterOverTemp","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbDhwTemp","otbOemFaultCode","otbOemDiagnosticCode","otbMaxCapacity","otbMinModulation","otbOpenThermVersion","otbDeviceType","otbDeviceVersion","otbLastResponseAge","otbResponseCount","otbLastResponseId"],Ws=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],On=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],Vs=["supplyTemp","waterSupplyTempEffectiveSource","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","otThermostatCoolingEnable","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],bt=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Ko=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],Bs=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],zo=[...Se.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Ks=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],Uo=["silentStartTime","silentEndTime","silentMax","dayMax"],yd=1e4;var Qa=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Go=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","hardwareRevisionText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Qt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Xw=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],$t=[...Qt,...Xw,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],Or=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],it=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Pn=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","boilerConnection","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerBlockReason","boilerHeatPower","otbLinkAvailable","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbLastResponseAge","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive",...vd],Sd=["strategyActiveCode","hp1CompressorStarts24h","hp2CompressorStarts24h","hp1RuntimeHours","hp2RuntimeHours"],zs=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","boilerRatedHeatPower","boilerConnection","boilerFaultFallbackEnabled","openquattResumeAt","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingEffectiveMinSupplyTemp","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerBlockReason","boilerHeatPower","otbLinkAvailable","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbLastResponseAge","systemHeatPower","silentModeOverride",...vd,...Zw],kd=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Bo,"strategy",...Mt,...zo,...at,"maxWater",...Uo,...bt,...Ko,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive",...Ua,"boilerHeatPower",...Ga,"systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget",...Jw],Ya=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Ja=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Bo,...za,"manualCoolingEnable","usageTelemetryEnabled","usageTelemetryInstallationId","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...Ls,...Is,...js,...Ua,...Ga,...Fs,...Ws,...On,...Vs,...at,...Nr,...Rn,...Hn,...Dn,...Bs,...Vo,...Mt,...zo,...Ks,...Uo,...Wa];var nC=new Set(["installationTopology",...za,...Wa,"cicDataStale","otLinkProblem","otbChCommand","otbControlSetpointCommand","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled","usageTelemetryEnabled"]),Yt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Bo]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...Rn]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...Se.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","decisionLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Us=2,wo=[...new Set(Yt.flatMap(e=>e.keys))],qd=new Set(wo),Td=5e3,Ed=3e4,Cd=6e4,vo=12e3,Pr=4e3,xd=1500,Md=3e4,$d=3e4,_d=1e3,Ln=3e4,Gs=250,Ad=750,ev=22,Rd=ev/1.7,Hd=360/3.2,Qo="2000-01-01 00:00:00";function Dd(e){return{controlReplayTab:"status",controlReplayWindow:"last24",controlReplayPeriodMenuOpen:!1,controlReplayCustomPeriodOpen:!1,controlReplayCustomStart:"",controlReplayCustomEnd:"",controlReplayCustomPeriodError:"",controlReplaySelectedEpisode:"",controlReplaySupportDetailsItemId:"",controlReplayGraphMinute:1e3,controlReplayScrubbing:!1,decisionLog:null,decisionLogError:"",decisionLogSignature:"",decisionLogLastFetchAt:0,decisionLogFetchPromise:null,decisionLogStorageMetadata:{},decisionLogStorageMetadataError:"",decisionLogStorageMetadataSignature:"",decisionLogStorageMetadataLastFetchAt:0,decisionLogStorageMetadataFetchPromise:null,trendWindowHours:e,trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageAdvancedOpen:!1,settingsStorageDetailsOpen:!1,settingsStoragePage:"overview",energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""}}}function Nd(e){return{webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogCsrfToken:"",webServerLogHistoryNeedsReconcile:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,historyStorageModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,quickStartSetupDraft:"",quickStartSetupConfirmed:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:e,debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null}}function Od(){return{complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,compressorLimitsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,usageTelemetryDetailsOpen:!1,installationMonitoringProblemSignature:"",incidentMonitoringSnapshot:null,incidentMonitoringError:"",incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:0,incidentMonitoringSignature:"",incidentMonitoringLastFetchAt:0,incidentMonitoringFetchPromise:null,incidentAction:{hp:0,kind:"",requestId:0,pending:!1,ok:null,result:""},settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupMqttPassword:"",settingsBackupRestoreResult:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:""}}function Pd(){return{authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttRetainedToggleBusyKey:"",mqttSensorsModalRenderSignature:""}}function Ld(){return{updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:""}}function Id(e){return{draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:e,motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}}}function tv(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var _t=24,Yo=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:rv(),devPanelOpen:!1,nativeOpen:nv()==="native",currentStep:"setup",quickStartModalMode:"wizard",settingsGroup:av(),appView:"",overviewTheme:ov(),hpVisualMode:iv(),hpLayoutMode:sv(),...Dd(lv()),deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",ota:{on:!1,ok:0,id:null,wait:!1,base:null},firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",...Nd(tv()),...Od(),updateModalOpen:!1,systemModal:"",...Pd(),...Ld(),...Id(cv())};function ov(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function rv(){return!1}function nv(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function av(){try{let e=window.localStorage.getItem("oq-settings-group");return Ie.has(e)?e:ye[0].id}catch{return ye[0].id}}function iv(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function sv(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function lv(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Yo.includes(e)?e:_t}catch{return _t}}function Qs(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function cv(){return!!Qs()?.matches}function S(e){return!!o.entities[e]}function E(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];let t=o.entities[e];return t?t.value??t.state??"":""}function Ue(e){let t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Ee(e){if(typeof e=="number")return e;let t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function At(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function In(e){let t=At(e);return t?t.slice(0,5):""}function et(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),u=Number(r[6]||"0");return[n,a,i,l,c,u].some(d=>Number.isNaN(d))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||u<0||u>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function Za(e){let t=et(e);return!t||t===Qo?"":t.slice(0,16).replace(" ","T")}function jd(e){let t=et(e);if(!t||t===Qo)return null;let r=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),u=Number(r[6]),d=new Date(n,a-1,i,l,c,u,0);return Number.isNaN(d.getTime())?null:d}function Fn(e=E("openquattResumeAt")){return!!jd(e)}function Lr(e,t=!1){let r=jd(e);return r?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function Fd(e){let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${r}-${n}T${a}:${i}`}function uv(e){let t=new Date(e.getTime());t.setSeconds(0,0);let r=t.getMinutes(),n=r%15;return n!==0&&t.setMinutes(r+(15-n)),t}function Ys(e){let t=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=uv(new Date(t.getTime()+r*3600*1e3));return Fd(n)}if(e==="tomorrow-morning"){let r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),Fd(r)}return""}function Xa(){let e=Za(o.pauseResumeDraft);if(e)return e;let t=Za(E("openquattResumeAt"));return t||Ys("2h")}function Y(e,t=E(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";let r=Ue(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function ke(e,t){let r=Ue(e),n=Ee(t);if(Number.isNaN(n)){let u=Ee(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(u)?r.min:u}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,c=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function ei(){let e=Se[Math.floor(Se.length/2-1)],t=Se[Math.floor(Se.length/2)];if(!e||!t||!S("curveFallbackSupply"))return null;let r=ke(e.key,E(e.key)),n=ke(t.key,E(t.key)),a=(r+n)/2,i=ke("curveFallbackSupply",a);return{value:i,label:Y("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:ke("curveFallbackSupply",E("curveFallbackSupply"))===i}}function dv(e){let t=String(e||"").replace(/\/$/,"");if(!t)return"";let r=t.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?t.slice(0,-r.length).replace(/\/$/,"")||"":t}function Ne(){return dv(window.location.pathname)}function Q(e,t,r=""){let n=r?`/${r}`:"";return`${Ne()}/${e}/${encodeURIComponent(t)}${n}`}function ie(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function Wd(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function U(e,t,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(t)}${r?` ${r}`:""}`}function Jo(e){if(!Number.isFinite(e)||e<0)return"\u2014";let t=Math.floor(e),r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Vd(){let e=[];e.push(ie()?"Stooklijn":"Power House");let t=String(E(ie()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);let r=String(E("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&S("manualIpwm")?e.push(`iPWM ${Y("manualIpwm")}`):S("flowSetpoint")&&e.push(`flow ${Y("flowSetpoint")}`),S("dayMax")&&e.push(`dag ${Y("dayMax")}`),S("silentMax")&&e.push(`silent ${Y("silentMax")}`),S("maxWater")&&e.push(`max water ${Y("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function F(e,t="\u2014"){let r=o.entities[e];if(!r)return t;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?t:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function R(e){let t=Number(E(e));return Number.isNaN(t)?NaN:t}function Js(e){let t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function Zs(e){let t=String(e||"");if(t==="totalEer"){let r=R("totalCoolingPower"),n=R("coolingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(t==="totalCop"){let r=R("totalHeat"),n=R("heatingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function Ir(e,t=""){let r=String(o.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function st(e){let t=o.entities[e],r=Zs(e);if(!t)return Number.isNaN(r)?"\u2014":U(r,1,Ir(e));let n=R(e);if(Number.isNaN(n))return Number.isNaN(r)?F(e):U(r,1,Ir(e));let a=n>0||Number.isNaN(r)?n:r,i=Js(e)?1:0;return U(a,i,Ir(e))}function C(e){let t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;let r=String(t.state??t.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function wt(){return!S("trendHistoryEnabled")||C("trendHistoryEnabled")}function ti(){let e=o.entities.setupComplete;if(!e)return null;let t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Bd(){return`
      <div class="oq-helper-app-nav">
        ${Ba.filter(e=>e.id!=="diagnosis"||wt()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${me(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
            ${e.badge?`<span class="oq-helper-app-tab-badge">${s(e.badge)}</span>`:""}
          </button>
        `).join("")}
      </div>
    `}function pv(e=o.appView){return Ba.find(t=>t.id===e)?.label||"OpenQuatt"}function Xs(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=pv();document.title=`${e} \u2022 OpenQuatt`}function el(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}var oi="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",tl="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",ol='<svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>';var rl=null;function Kd(e){rl=typeof e=="function"?e:null}function h(){rl&&rl()}function mv(e){return e instanceof Error&&e.message?e.message:String(e||"Onbekende fout")}function zd(e,t){o.controlError=`Actie ${e||"(onbekend)"} mislukt. ${mv(t)}`,h(),console.error(`[OpenQuatt] Action failed: ${e||"(unknown)"}`,t)}function se(e,t,...r){let n=e[t];if(!n)return!1;try{let a=n(...r);a&&typeof a.then=="function"&&a.catch(i=>zd(t,i))}catch(a){zd(t,a)}return!0}function Ud(e,t=null){e&&console.warn(`[OpenQuatt] Unknown action: ${e}`,t||"")}function jn(e,t={},r=$d){if(t.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function Jt(){return o.appView==="settings"&&o.settingsGroup==="system"}function Gd(){return o.appView==="settings"&&o.settingsGroup==="integrations"}function Qd(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Yd(){let e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function ni(e=o.apiSecurityStatus||{}){return[e.transport_active?"active":"idle",e.key_present?"has-key":"no-key",e.provisioning_pending?"pending":"settled",e.provisioning_closed?"closed":"open"].join(":")}function Jd(){return o.systemModal==="login"||o.systemModal==="api-security"||Jt()}function Zd(){return o.systemModal==="api-security"||Jt()}async function Zo(e={}){if(!jn(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{let t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=Qd(),i=Qd(n);return o.authStatus=n,a!==i&&Yd(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function ri(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function yo(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function Xd(e=_d){o.loginAuthStatusPollTimer||!ri()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!ri())return;let t=o.authError;(await Zo({force:!0})||o.authError!==t)&&o.systemModal==="login"&&h(),ri()&&Xd()},Math.max(0,Number(e)||0)))}async function gv(e={}){if(o.systemModal!=="login")return!1;let t=o.authError,r=await Zo({force:!0});return(r||o.authError!==t)&&o.systemModal==="login"&&h(),e.poll!==!1&&ri()&&Xd(),r}async function ai(e={}){if(!jn(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{let t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={transport_active:!!r.transport_active,key_present:!!r.key_present,provisioning_pending:!!r.provisioning_pending,provisioning_closed:!!r.provisioning_closed},a=ni(),i=ni(n);return o.apiSecurityStatus=n,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,o.systemModal==="api-security"&&h(),!1}}async function fv(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",h();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",h();return}if(t&&!n){o.authError="Vul je huidige wachtwoord in.",h();return}if(!t&&!r){o.authError="Houd de herstelknop 5 seconden vast.",h();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",h();return}o.authBusy=!0,o.authError="",o.authNotice="",h();try{let c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",n),c.set("new_username",a),c.set("new_password",i);let u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),d=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!d.ok)throw new Error(d.error||`HTTP ${u.status}`);await Zo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",h()}catch(c){o.authError=`Opslaan is mislukt. ${c.message}`,h()}finally{o.authBusy=!1,h()}}async function hv(){let e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",h();return}let t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",h();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",h();return}o.authBusy=!0,o.authError="",o.authNotice="",h();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",t);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await Zo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",h()}catch(r){o.authError=`Uitzetten is mislukt. ${r.message}`,h()}finally{o.authBusy=!1,h()}}var bv={"open-login-modal":()=>(o.systemModal="login",Yd(),o.authNotice="",o.authError="",h(),gv({poll:!0})),"open-api-security-modal":async()=>{o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",h(),await ai({force:!0}),o.systemModal==="api-security"&&h()},"save-web-auth":()=>fv(),"disable-web-auth":()=>hv()};function ep(e){return se(bv,e)}function G(e){let t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=t.state??t.value??"",n=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function we(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Wn(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",o.incidentMonitoringSignature,o.incidentMonitoringError,we(o.incidentAction),ni(),G("setupComplete"),...Ja.map(e=>G(e))].join("|")}function ii(){return[o.appView,o.busyAction,G("openquattEnabled"),G("openquattResumeAt"),G("manualCoolingEnable"),G("coolingEnableSource"),G("coolingEnableSelected"),G("coolingEnableEffectiveSource"),G("silentModeOverride"),G("controlModeLabel"),G("coolingPermitted"),G("coolingRequestActive"),G("coolingBlockReason"),G("silentActive")].join("|")}var si="",nl=null,wv=["id","data-oq-action","data-oq-field","data-group-id","data-view-id","aria-label"];function vv(e){if(!e||e===document.body||typeof e.getAttribute!="function")return null;let t=wv.map(r=>[r,e.getAttribute(r)]).filter(([,r])=>r);return t.length?{tagName:e.tagName,attributes:t}:null}function yv(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName.toLowerCase())).find(r=>t.attributes.every(([n,a])=>r.getAttribute(n)===a))||null}function te({id:e="",modalId:t,titleId:r,kicker:n,title:a,copy:i="",body:l="",bodyMarkup:c="",actions:u="",backdropClass:d="",className:m="",modalClass:w="",role:v="dialog",ariaModal:f=v==="dialog",ariaLive:g="",sectionAttributes:p="",closeAction:b="",closeLabel:y="",headerMarkup:k="",copyInHeader:q=!1}){let T=t||e,M=w||m,A=c||l;!si&&typeof document<"u"&&!document.querySelector('[role="dialog"][aria-modal="true"]')&&(nl=vv(document.activeElement));let H=`oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}${d?` ${d}`:""}`,j=`oq-helper-modal${M?` ${M}`:""}`,I=b?`<button class="oq-helper-modal-close" type="button" data-oq-action="${s(b)}" aria-label="${s(y)}">\xD7</button>`:"",W=[`role="${s(v)}"`,f?'aria-modal="true"':"",g?`aria-live="${s(g)}"`:"",`aria-labelledby="${s(r)}"`,p,'tabindex="-1"'].filter(Boolean).join(" ");return`
    <div class="${H}" data-oq-modal="${s(T)}" data-oq-modal-scroll="backdrop">
      <section class="${j}" ${W} data-oq-modal-scroll="dialog">
        ${k||`<div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">${s(n)}</p>
            <h2 class="oq-helper-modal-title" id="${s(r)}">${s(a)}</h2>
            ${i&&q?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
          </div>
          ${I}
        </div>`}
        ${i&&!q?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
        ${A}
        ${u?`<div class="oq-helper-modal-actions">${u}</div>`:""}
      </section>
    </div>
  `}function al(e){if(!e||typeof document>"u")return;let t=e.querySelector('[role="dialog"][aria-modal="true"]');if(t){si=t.closest("[data-oq-modal]")?.dataset.oqModal||"dialog",t.contains(document.activeElement)||(t.querySelector(".oq-helper-modal-close, button, input, select, textarea, a[href]")||t).focus({preventScroll:!0});return}si&&yv(e,nl)?.focus({preventScroll:!0}),si="",nl=null}var il=0;function rp(e){let t=e?.querySelector('[role="dialog"][aria-modal="true"]');return t?{modalId:String(e.dataset?.oqModal||""),titleId:String(t.getAttribute("aria-labelledby")||"")}:null}function tp(e,t){return!e||!t?null:Array.from(e.querySelectorAll("[data-oq-modal]")).find(r=>{let n=rp(r);return n&&n.modalId===t.modalId&&n.titleId===t.titleId})||null}function Sv(e,t){if(!e||!t?.contains(e)||typeof e.getAttribute!="function")return null;let r=Array.from(e.attributes||[]).filter(({name:l,value:c})=>(c||l.startsWith("data-oq-"))&&(l==="id"||l==="name"||l==="aria-label"||l.startsWith("data-oq-"))).map(({name:l,value:c})=>[l,c]);if(!r.length)return null;let n=String(e.tagName||"").toLowerCase(),i=Array.from(t.querySelectorAll(n)).filter(l=>r.every(([c,u])=>l.getAttribute(c)===u)).indexOf(e);return i<0?null:{tagName:n,attributes:r,index:i}}function op(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName)).filter(n=>t.attributes.every(([a,i])=>n.getAttribute(a)===i))[t.index]||null}function kv(e,t){if(!e||!t?.contains(e)||typeof e.getBoundingClientRect!="function")return null;let r=e.getBoundingClientRect(),n=Number(r?.top);return Number.isFinite(n)?{top:n}:null}function qv(e){return[e,...e.querySelectorAll("[data-oq-modal-scroll]")].map(t=>({key:String(t.dataset?.oqModalScroll||"backdrop"),left:Number(t.scrollLeft||0),top:Number(t.scrollTop||0)}))}function Tv(e,t){if(!e)return;let r=[e,...e.querySelectorAll("[data-oq-modal-scroll]")];t.forEach(n=>{let a=r.find(i=>String(i.dataset?.oqModalScroll||"backdrop")===n.key);a&&(a.scrollLeft=n.left,a.scrollTop=n.top)})}function Ev(e,t,r){if(!e||!t||!r||typeof t.getBoundingClientRect!="function")return;let n=Number(t.getBoundingClientRect()?.top);if(!Number.isFinite(n))return;let a=n-r.top;if(Math.abs(a)<.5)return;let i=[e,...e.querySelectorAll("[data-oq-modal-scroll]")].reverse().find(l=>l.contains(t)&&Number(l.scrollHeight)>Number(l.clientHeight));i&&(i.scrollTop+=a)}function np(e){if(!e||typeof document>"u")return null;let n=((typeof document.activeElement?.closest=="function"?document.activeElement.closest("[data-oq-modal]"):null)?.querySelector('[role="dialog"][aria-modal="true"]')||e.querySelector('[role="dialog"][aria-modal="true"]'))?.closest("[data-oq-modal]"),a=rp(n);return!n||!a?null:{identity:a,focus:Sv(document.activeElement,n),focusAnchor:kv(document.activeElement,n),scrollPositions:qv(n)}}function sl(e,t){let r=il+1;if(il=r,!e||!t)return;let n=()=>{if(il!==r)return;let l=tp(e,t.identity);Tv(l,t.scrollPositions);let c=op(l,t.focus);Ev(l,c,t.focusAnchor)},a=tp(e,t.identity);n();let i=op(a,t.focus);i&&!i.disabled&&(i.focus({preventScroll:!0}),n()),window.requestAnimationFrame(n)}function Vn(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function ap(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function Cv(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function ip(e=performance.now()){if(!o.root||o.reducedMotion||!Cv()&&ap()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);let t=(e-o.motionStartedAt)/1e3,r=t*Hd%360;return o.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(t*Rd*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function sp(e){if(!ip(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(sp)}function Xo(){if(o.reducedMotion||ap()===0||o.motionFrame)return;let e=performance.now();if(o.motionStartedAt=e,!ip(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(sp)}function Bn(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,Vn()}var lp=null,cp=null;function up({start:e,stop:t}={}){lp=typeof e=="function"?e:null,cp=typeof t=="function"?t:null}function ll(){lp?.()}function dp(){cp?.()}var Ge={};function pp(e={}){Object.keys(Ge).forEach(t=>{delete Ge[t]}),Object.assign(Ge,e)}function mp(e){Ge.handleChange?.(e)}function gp(e){Ge.handleClick?.(e)}function cl(e){Ge.handleFocusChange?.(e)}function fp(e){Ge.handleInput?.(e)}function hp(e){Ge.handleKeyDown?.(e)}function bp(e){Ge.handlePointerDown?.(e)}function wp(e){Ge.handlePointerMove?.(e)}function vp(e){Ge.handlePointerUp?.(e)}function yp(e){Ge.handleSettingsInteractionEnd?.(e)}function Sp(e){Ge.handleSettingsInteractionStart?.(e)}function kp(e){Ge.handleWheel?.(e)}function So(){return"overview"}function Kn(e){return e==="trends"&&(e="diagnosis"),!wd.has(e)||e==="diagnosis"&&!wt()?"":e}function Fr(e){return String(e||"").trim().toLowerCase()}function ul(e){let t=Fr(e);return{actueel:"status",current:"status",status:"status",situatie:"status",tijdlijn:"timeline",timeline:"timeline",log:"timeline",grafiek:"graphs",grafieken:"graphs",graphs:"graphs",graph:"graphs"}[t]||""}function xv(e=o.controlReplayTab){let t={status:"current",timeline:"timeline",graphs:"graphs"};return t[e]||t.status}function dl(e){let t=Fr(e);return{"1h":"last1",last1:"last1","2h":"last2",last2:"last2","4h":"last4",last4:"last4","8h":"last8",last8:"last8","12h":"last12",last12:"last12","24h":"last24",last24:"last24","48h":"last48",last48:"last48","3d":"last3d",last3d:"last3d","7d":"week",week:"week",today:"today",yesterday:"yesterday",custom:"custom"}[t]||""}function Mv(e=o.controlReplayWindow){let t={last1:"1h",last2:"2h",last4:"4h",last8:"8h",last12:"12h",last24:"24h",last48:"48h",last3d:"3d",today:"today",yesterday:"yesterday",week:"7d",custom:"custom"};return t[e]||t.last24}function zn(){try{let e=new URL(window.location.href),t=Fr(e.searchParams.get("view")||""),r=Kn(t);if(r)return r;let n=Fr(e.hash.replace(/^#/,""));return Kn(n)||""}catch{return""}}function pl(){try{let e=new URL(window.location.href);return ul(e.searchParams.get("controlTab")||e.searchParams.get("controlView")||"")}catch{return""}}function ml(){try{let e=new URL(window.location.href);return dl(e.searchParams.get("controlPeriod")||"")}catch{return""}}function gl(){try{let e=new URL(window.location.href);return{start:String(e.searchParams.get("controlStart")||""),end:String(e.searchParams.get("controlEnd")||"")}}catch{return{start:"",end:""}}}function fl(){try{let e=new URL(window.location.href),t=Fr(e.searchParams.get("section")||"");if(Ie.has(t))return t;let r=Fr(e.searchParams.get("group")||"");return Ie.has(r)?r:""}catch{return""}}function er(e="replace"){try{let t=new URL(window.location.href),r=Kn(o.appView)||So();if(t.searchParams.set("view",r),r==="settings"){let a=Ie.has(o.settingsGroup)?o.settingsGroup:ye[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");r==="control"?(t.searchParams.set("controlTab",xv()),t.searchParams.set("controlPeriod",Mv()),o.controlReplayWindow==="custom"&&o.controlReplayCustomStart&&o.controlReplayCustomEnd?(t.searchParams.set("controlStart",o.controlReplayCustomStart),t.searchParams.set("controlEnd",o.controlReplayCustomEnd)):(t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd")),t.searchParams.delete("controlView")):(t.searchParams.delete("controlTab"),t.searchParams.delete("controlPeriod"),t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd"),t.searchParams.delete("controlView")),t.hash&&Kn(t.hash.replace(/^#/,""))&&(t.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?o.settingsGroup:"",oqControlTab:r==="control"?o.controlReplayTab:"",oqControlPeriod:r==="control"?o.controlReplayWindow:""},"",t.toString())}catch{}}function Rt(e,t={}){let r=Kn(e)||So(),n=t.syncMode||"replace",a=o.appView!==r;o.appView=r,(a||t.forceSync)&&er(n)}var $v={debugRecording:e=>e.startsWith("debugRecording"),energyHistory:e=>e.startsWith("energyHistory"),firmware:e=>e==="updateModalOpen"||e.startsWith("update")||e.startsWith("firmware"),mqtt:e=>e.startsWith("mqtt"),webServerLog:e=>e.startsWith("webServerLog")};function Un(e,t){let r=$v[e],n=Object.keys(t).find(a=>!r(a));if(n)throw new Error(`${e} state beheert sleutel ${n} niet.`);Object.assign(o,t)}var li=e=>Un("debugRecording",e),Ht=e=>Un("energyHistory",e),Ae=e=>Un("firmware",e),jr=e=>Un("mqtt",e),tt=e=>Un("webServerLog",e);function ci(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}var _v=new Set(["compressor oil return"]);function ko(e){let t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Av(e){let t=ko(e);return t==="Geen actieve storingen"?[]:t.split(",").map(r=>r.trim()).filter(r=>r&&!_v.has(r.toLowerCase()))}function ui(e){let t=Av(e);return t.length>0?t.join(", "):"Geen actieve storingen"}var di=Object.freeze({normal:0,limited:1,attention:2,fault:3}),pi=Object.freeze({none:{label:"Geen bijzondere systeemactie",copy:"",severity:"normal"},boiler_assist:{label:"CV ondersteunt tijdelijk",copy:"De warmtepomp blijft de basis leveren; de CV-ketel ondersteunt tijdelijk.",severity:"normal"},boiler_fallback:{label:"Ketel neemt verwarming over",copy:"De warmtepomp is niet beschikbaar. De CV-ketel krijgt tijdelijk de verwarmingsopdracht.",severity:"fault"},fallback_blocked:{label:"Ketelfallback niet vrijgegeven",copy:"OpenQuatt kan de ketel niet veilig vrijgeven.",severity:"fault"}}),Cp=[[1,"main_line_current","Netstroombeveiliging"],[2,"compressor_phase_current","Compressorfasestroom"],[3,"ipm_module","IPM-vermogensmodule"],[4,"compressor_oil_return","Olie-retour actief"],[5,"high_pressure_switch","Hogedrukbeveiliging"],[6,"high_pressure_speed_limit","Toerental begrensd door hoge druk"],[7,"first_start_preheat","Eerste-startvoorverwarming"],[8,"gas_discharge_temperature","Persgastemperatuur te hoog"],[9,"evaporator_coil_temperature","Verdampertemperatuur buiten bereik"],[10,"ac_voltage","Netspanning buiten bereik"],[11,"ambient_temperature_range","Buitentemperatuur buiten werkgebied"],[12,"ambient_temperature_frequency_limit","Vermogen begrensd door buitentemperatuur"],[13,"low_pressure_switch","Lagedrukbeveiliging"],[14,"low_pressure_speed_limit","Toerental begrensd door lage druk"],[17,"ambient_temperature_sensor","Buitentemperatuursensor"],[18,"evaporator_coil_temperature_sensor","Verdampertemperatuursensor"],[19,"gas_discharge_temperature_sensor","Persgastemperatuursensor"],[20,"gas_return_temperature_sensor","Zuiggastemperatuursensor"],[21,"evaporator_pressure_sensor_lock","Verdamperdruksensor vergrendeld"],[22,"condenser_pressure_sensor","Condensordruksensor"],[23,"high_pressure_switch_lock","Hogedrukbeveiliging vergrendeld"],[24,"low_pressure_switch_lock","Lagedrukbeveiliging vergrendeld"],[25,"fan","Ventilatorstoring"],[27,"evaporating_pressure_lock","Verdamperdruk vergrendeld"],[28,"condenser_pressure_lock","Condensordruk vergrendeld"],[30,"evi_pressure_sensor","EVI-druksensor"],[31,"evi_inlet_temperature_sensor","EVI-inlaattemperatuursensor"],[32,"evi_outlet_temperature_sensor","EVI-uitlaattemperatuursensor"],[33,"odu_master_slave_communication","Communicatie tussen buitenunits"],[34,"odu_control_pcb_communication","Communicatie met ODU-regelprint"],[35,"compressor_phase_current_failure","Compressorfasestroomstoring"],[36,"compressor_phase_current_overload","Compressorfasestroom overbelast"],[37,"compressor_driver","Compressordriver"],[38,"module_vdc_voltage","DC-tussenkringspanning"],[39,"ac_current","AC-stroommeting"],[40,"eeprom","ODU-geheugen"],[41,"fan_drive_pcb","Ventilatorregelprint"],[42,"inlet_water_temperature_sensor","Inlaatwatertemperatuursensor"],[43,"outlet_water_temperature_sensor","Uitlaatwatertemperatuursensor"],[44,"inner_coil_temperature_sensor","Binnenste-wisselaartemperatuursensor"],[46,"dc_water_pump","Waterpomp in buitenunit"],[1001,"hp_link_loss","Verbinding met warmtepomp bevestigd weg"],[1002,"hp_start_failed","Warmtepompstart niet bevestigd"],[1003,"hp_stop_unconfirmed","Warmtepompstop niet bevestigd"],[1004,"hp_manual_reset_persistence_failure","Opslag van handmatige resetstatus mislukt"]],qp=new Map(Cp.map(([e,,t])=>[e,t])),Tp=Object.freeze(Object.fromEntries(Cp.map(([,e,t])=>[e,t]))),bl=Object.freeze({status:"Status",protection:"Beveiliging",warning:"Waarschuwing",fault:"Storing",unknown:"Technische melding"}),Rv=Object.freeze({limit_capacity:"ODU begrenst het vermogen",block_start:"start blokkeren",stop_compressor:"compressor stoppen",mark_hp_unavailable:"warmtepomp niet beschikbaar",allow_cm4:"CM4 na systeemcontroles toestaan",block_boiler:"ketel blokkeren",require_confirmed_odu_power_cycle:"bevestigde ODU-powercycle vereist",pump_unavailable:"ODU-waterpomp niet beschikbaar"}),Hv=Object.freeze({when_bit_clears:"automatisch zodra de ODU-melding verdwijnt",stable_reads_and_recovery_window:"automatisch na stabiele herstelmetingen",after_stable_reads:"automatisch na meerdere stabiele metingen",preheat_complete:"automatisch zodra de voorverwarming klaar is",confirmed_odu_power_cycle:"na een uitgevoerde en bevestigde ODU-powercycle",stable_telemetry:"automatisch na stabiele telemetrie",explicit_retry_after_safe_stop:"na een veilige stop en expliciete herstart",fresh_stop_confirmation:"na een nieuwe bevestigde stopstatus",review_required:"na technische beoordeling"}),Dv=Object.freeze({none:"",wait_for_automatic_recovery:"Wacht op automatisch herstel.",check_installation:"Controleer de installatie.",contact_installer:"Neem contact op met de installateur."}),mi=Object.freeze({start_failure_cleared:"De startblokkering is vrijgegeven. De normale startvoorwaarden blijven gelden.",no_start_failure:"Er is geen startfout meer om vrij te geven.",stop_not_confirmed:"De warmtepomp is nog niet veilig als gestopt bevestigd.",link_not_healthy:"De verbinding met de warmtepomp is nog niet stabiel genoeg.",hard_fault_active:"Er is nog een actieve warmtepompstoring.",fault_recovery_pending:"Het automatische storingsherstel is nog niet afgerond.",odu_power_cycle_confirmed:"De bevestigde ODU-powercycle is verwerkt.",no_cleared_manual_reset_latch:"Er is geen herstelde powercycle-latch om vrij te geven.",persistence_unavailable:"De resetstatus kan momenteel niet veilig worden opgeslagen.",persistence_write_failed:"Het opslaan van de resetstatus is mislukt; de blokkering blijft actief.",incident_state_changed:"De incidentstatus veranderde tijdens de actie; controleer de actuele melding.",invalid_hp:"De gekozen warmtepomp is ongeldig.",hp_not_configured:"Deze warmtepomp is niet geconfigureerd.",queue_unavailable:"De controller kan de actie momenteel niet in de hoofdloop plaatsen.",forbidden:"De beveiligingscontrole van de actie is mislukt."}),Nv=Object.freeze(["Geen blokkade","Handmatige override actief","Commissioning actief","Koeling actief","Vorstbescherming actief","Geen warmtevraag","Ketelfallback staat uit","Er is nog een warmtepomp beschikbaar","Beschikbaarheid warmtepompen nog niet zeker","Nog geen bevestigde fallbackoorzaak","Stopstatus warmtepomp nog niet veilig bevestigd","Flowmeting niet beschikbaar","Waterflow onvoldoende","Aanvoertemperatuur niet beschikbaar","Ketelbeveiliging geeft niet vrij"]),Zt=e=>!!e&&typeof e=="object"&&!Array.isArray(e),de=(e,t=null)=>{let r=Number(e);return Number.isInteger(r)&&r>=0?r:t},Wr=e=>e===!0,Ov=e=>typeof e=="boolean"?e:null,wl=(...e)=>e.reduce((t,r)=>di[r]>di[t]?r:t,"normal");function Pv(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return null}}function Ep(e){let t=Number(e);return!Number.isInteger(t)||t<1||t>48?"":`R${2119+Math.floor((t-1)/16)}.b${(t-1)%16}`}function Gn(e={}){let t=String(e.displayLabel??e.display_label??"").trim();if(t)return t;let r=Number(e.id),n=String(e.key||"").trim().toLowerCase();if(n==="unclassified_odu_fault"){let i=Ep(r);return i?`Niet-geclassificeerde ODU-melding (${i})`:"Niet-geclassificeerde ODU-melding"}if(Tp[n])return Tp[n];if(qp.has(r))return qp.get(r);if(n){let i=n.replace(/^odu_/,"").replaceAll("_"," ");return`ODU-melding: ${i.charAt(0).toUpperCase()}${i.slice(1)}`}let a=Ep(r);return a?`Niet-geclassificeerde ODU-melding (${a})`:"Niet-geclassificeerde warmtepompmelding"}function xp(e){return bl[String(e||"").toLowerCase()]||bl.unknown}function Mp(e=[]){let t=e.map(n=>String(n).toLowerCase()),r=t.filter(n=>n!=="display").map(n=>Rv[n]||"").filter(Boolean);return r.length?r:t.includes("display")?["alleen tonen"]:[]}function $p(e){return Hv[String(e||"").toLowerCase()]||String(e||"").replaceAll("_"," ")}function vl(e){return Dv[String(e||"").toLowerCase()]??String(e||"").replaceAll("_"," ")}function yl(e,t){let r=Number(e);if(Number.isFinite(r)&&r>=946684800)return new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(r*1e3));let n=Number(t);if(!Number.isFinite(n)||n<0)return"";let a=Math.round(n/6e4);return`${a<60?`${a} min`:`${Math.floor(a/60)}u ${a%60}m`} na controllerstart`}function gi(e){return Nv[Number(e)]||"Onbekende veiligheidsblokkade"}function Sl(e){return pi[String(e||"").toLowerCase()]||pi.none}function _p(e={}){return e.active?{label:"Actief",tone:e.severity==="fault"?"fault":"warning"}:e.recovering?{label:"Herstelt",tone:"warning"}:e.latched&&!e.acknowledged?{label:"Hersteld \xB7 vastgehouden",tone:"warning"}:{label:"Hersteld",tone:"clear"}}function Ap(e={}){let t={bootstrap:"Verbinding wordt opgebouwd",healthy:"Verbinding gezond",suspect:"Korte hapering wordt eerst bevestigd",lost:"Verbinding bevestigd weg",recovering:"Verbinding herstelt",unknown:"Verbindingsstatus onbekend"},r={unknown:"Compressorstatus onbekend",stopped:"Compressor gestopt",start_requested:"Start aangevraagd",wait_mode:"Wacht op bedrijfsmodus",wait_compressor:"Wacht op compressorbevestiging",running:"Compressor draait",stopping:"Stop aangevraagd",stop_unconfirmed:"Stop nog niet bevestigd"},n=`${t[e.linkState]||t.unknown} \xB7 ${r[e.runState]||r.unknown}`;return e.faultActive||e.protectionState==="fault_active"?{label:"Storing actief",note:n,tone:"fault"}:e.linkState==="lost"?{label:"Niet beschikbaar",note:n,tone:"fault"}:e.protectionState==="start_blocked"?{label:"Start tijdelijk geblokkeerd",note:n,tone:"warning"}:e.protectionState==="limited"?{label:"Vermogen begrensd",note:n,tone:"warning"}:e.availability==="recovering"||e.linkState==="recovering"?{label:"Herstel wordt bevestigd",note:n,tone:"warning"}:e.availableForStart||e.availability==="available"?{label:"Beschikbaar",note:n,tone:"clear"}:{label:"Status wordt bepaald",note:n,tone:e.linkState==="suspect"?"clear":"warning"}}function Lv(e,t){if(!Zt(e)||!Zt(e.definition)||!Zt(e.runtime))return null;let r=e.definition,n=e.runtime,a=de(r.id);if(a===null)return null;let i=bl[r.category]?r.category:"unknown",l=r.severity,c=["active","recovering","latched"].includes(n.lifecycle)?n.lifecycle:"cleared",u=c==="latched"?"cleared":c,d=Array.isArray(r.effects)?[...new Set(r.effects.filter(m=>typeof m=="string"))]:[];return{id:String(a),key:String(r.key||"").trim(),displayLabel:String(r.display_label||"").trim(),subject:t,category:i,severity:l==="info"?"normal":l==="fault"?"fault":"attention",lifecycle:u,active:u==="active",recovering:u==="recovering",latched:Wr(n.latched)||c==="latched",acknowledged:Wr(n.acknowledged),effects:d,effectMask:de(r.effect_mask),firstSeenS:de(n.first_seen_s),lastSeenS:de(n.last_seen_s),firstSeenMs:de(n.first_seen_ms),lastSeenMs:de(n.last_seen_ms),occurrenceCount:de(n.occurrence_count,0),register:de(r.register_address),bit:de(r.bit),recoveryCondition:String(r.recovery_condition||"").trim(),userAction:String(r.user_action||"").trim()}}function Iv(e){if(!Zt(e))return null;let t=de(e.index);if(t!==1&&t!==2)return null;let r=String(e.link_state||"unknown"),n=String(e.protection_state||"unknown"),a=Wr(e.available_for_start),i=Wr(e.must_stop),l=String(e.availability||"unknown");l==="unknown"&&(l=a?"available":r==="recovering"||n==="fault_recovery"?"recovering":i||r==="lost"||n==="fault_active"?"unavailable":n==="start_blocked"?"blocked":"unknown");let c=`hp${t}`;return{index:t,subject:c,linkState:r,protectionState:n,runState:String(e.run_state||"unknown"),availability:l,availableForStart:a,mustStop:i,faultActive:Wr(e.fault_active),lastActionResult:Fv(e.last_action_result),incidents:Array.isArray(e.incidents)?e.incidents.map(u=>Lv(u,c)).filter(Boolean):[]}}function Fv(e){if(!Zt(e))return null;let t=de(e.sequence),r=de(e.request_id);return t===null||r===null||r<1?null:{sequence:t,requestId:r,action:String(e.action||"").trim(),ok:e.ok===!0,result:String(e.result||"").trim(),atMs:de(e.at_ms,0)}}function Rp(e){let t=Zt(e)?e:{},r=de(t.control_mode,0),n=pi[t.action]?t.action:"none",a=String(t.boiler_role||"off"),i=r===3?"assist":r===4?"fallback":a,l=String(t.previous_boiler_role||"off"),c=Wr(t.boiler_command_active),u=de(t.fallback_block_reason,0),d=n!=="none"?n:r===3?"boiler_assist":r===4?"boiler_fallback":"none",m=d==="boiler_fallback"&&!c?"fallback_blocked":d==="boiler_assist"&&!c?"none":d,w=Ov(t.boiler_output_continuous);return{controlMode:r,action:m,boilerRole:i,previousBoilerRole:l,boilerCommandActive:c,boilerOutputContinuous:w,boilerTransition:l==="assist"&&i==="fallback"?w===!0?"assist_to_fallback_continuous":w===!1?"assist_to_fallback_interrupted":"assist_to_fallback":"none",fallbackBlockReason:u}}function hl(e,t=null){return{valid:!1,error:e,schemaVersion:t,actionCsrfToken:"",generatedAtS:null,system:Rp({}),heatPumps:[]}}function Hp(e){let t=Pv(e);if(!Zt(t))return hl("invalid_payload");let r=de(t.schema_version);return r===null?hl("missing_schema_version"):r!==1?hl("unsupported_schema_version",r):{valid:!0,error:"",schemaVersion:r,actionCsrfToken:String(t.action_csrf_token||""),generatedAtS:de(t.generated_at_s),system:Rp(t.system),heatPumps:Array.isArray(t.heat_pumps)?t.heat_pumps.map(Iv).filter(Boolean).sort((n,a)=>n.index-a.index):[]}}function Dp(e={},t=null){let r=de(e.hp,0);if(t!==null&&r!==Number(t)||r!==1&&r!==2)return{visible:!1,label:"",copy:"",tone:"clear"};let n=e.kind==="confirm_odu_power_cycle"?"ODU-powercycle":"Startfout";return e.pending?{visible:!0,label:`${n}: verwerking loopt`,copy:"De controller heeft het verzoek geaccepteerd; OpenQuatt wacht op het resultaat met hetzelfde actienummer.",tone:"warning"}:e.ok===!0?{visible:!0,label:`${n}: uitgevoerd`,copy:mi[e.result]||"De controller heeft de actie bevestigd.",tone:"clear"}:e.ok===!1?{visible:!0,label:`${n}: niet uitgevoerd`,copy:mi[e.result]||String(e.message||"De controller heeft de actie geweigerd."),tone:"fault"}:{visible:!1,label:"",copy:"",tone:"clear"}}function jv(e,t){let r=de(t?.requestId,0),n=de(t?.hp,0);if(!t?.pending||r<1||n!==1&&n!==2)return t;let a=e.heatPumps.find(i=>i.index===n)?.lastActionResult;return!a||a.requestId!==r||a.action!==t.kind?t:{...t,pending:!1,ok:a.ok,result:a.result,sequence:a.sequence,completedAtMs:a.atMs}}async function Np(e,t,r,n,a){let i=de(r,0);if(i!==1&&i!==2)throw new Error(mi.invalid_hp);let l=t.endsWith("/retry-start")?"start_failure_retry":t.endsWith("/confirm-odu-power-cycle")?"confirm_odu_power_cycle":"";if(!l)throw new Error("Onbekende incidentactie.");let c=v=>e(t,{method:"POST",credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:new URLSearchParams({hp:String(i),csrf_token:String(v||"")})}),u=String(n||""),d=await c(u);d.status===403&&typeof a=="function"&&(u=String(await a()||""),d=await c(u));let m={};try{m=await d.json()}catch{}if(d.status!==202||m?.accepted!==!0){let v=String(m?.result||"");throw new Error(mi[v]||`Incidentactie HTTP ${d.status}`)}let w=de(m.action_id,0);if(m.hp!==i||m.action!==l||w<1)throw new Error("De controller gaf geen geldige actiebevestiging terug.");return{hp:i,action:l,actionId:w,csrfToken:u}}var Wv=e=>e.active||e.recovering||e.lifecycle==="cleared"&&e.latched&&!e.acknowledged;function Vv(e){let t=Zt(e)&&typeof e.valid=="boolean"&&Array.isArray(e.heatPumps)?e:Hp(e);if(!t.valid)return{available:!1,active:!1,severity:"normal",title:"Geen incidentgegevens",copy:"",problemCount:0,activeIncidentCount:0,recoveredIncidentCount:0,systemAction:"none",systemActionLabel:pi.none.label,boilerRole:"off",boilerTransition:"none",problems:[],snapshot:t};let n=t.heatPumps.flatMap(g=>g.incidents).filter(g=>g.category!=="status"&&Wv(g)),a=n.filter(g=>g.active||g.recovering),i=n.filter(g=>!g.active&&!g.recovering),l=t.system.action,c=Sl(l),u=n.reduce((g,p)=>wl(g,i.includes(p)?"attention":p.severity),"normal"),d=wl(u,c.severity),m=c.severity!=="normal",w=n.map(g=>({key:`incident:${g.subject}:${g.id}`,label:`${g.subject==="hp1"?"Warmtepomp 1":"Warmtepomp 2"}: ${Gn(g)}`,severity:i.includes(g)?"attention":g.severity,incidentId:g.id}));m&&w.unshift({key:`system-action:${l}`,label:c.label,severity:c.severity,incidentId:""});let v="Geen bijzonderheden",f="OpenQuatt ziet op dit moment geen actieve incidenten.";if(l==="boiler_fallback"||l==="fallback_blocked"?(v=c.label,f=c.copy):a.some(g=>g.severity==="fault")?(v="Storing actief",f=`${a.length} actief incident${a.length===1?"":"en"} zichtbaar.`):a.length?(v="Aandacht nodig",f=`${a.length} actief aandachtspunt${a.length===1?"":"en"} zichtbaar.`):i.length&&(v="Eerdere melding nog niet bevestigd",f=`${i.length} hersteld incident${i.length===1?"":"en"} blijft zichtbaar tot bevestiging.`),l==="fallback_blocked"){let g=t.system.fallbackBlockReason;f=`${f} ${g?`Blokkade: ${gi(g)}.`:"Er is geen blokkadereden aangeleverd; de ketelopdracht blijft inactief."}`}return t.system.boilerCommandActive&&t.system.boilerTransition==="assist_to_fallback_continuous"&&(f=`${f} De controller gaf tijdens de rolwisseling geen uit/aan-puls.`),{available:!0,active:n.length>0||m,severity:d,title:v,copy:f,problemCount:w.length,activeIncidentCount:a.length,recoveredIncidentCount:i.length,systemAction:l,systemActionLabel:c.label,boilerRole:t.system.boilerRole,boilerTransition:t.system.boilerTransition,problems:w,snapshot:t}}function Op(e,t){let r=Zt(e)?e:{},n=Vv(t);if(!n.available)return{...r,incidentMonitoring:n};let a=[],i=new Set;for(let d of[...n.problems,...r.problems||[]])d?.key&&!i.has(d.key)&&(i.add(d.key),a.push(d));let l=r.active?"attention":"normal",c=n.active&&di[n.severity]>di[l],u=c?n.copy:r.copy||n.copy;return c&&r.active&&r.problems?.length?u+=` Daarnaast zijn ${r.problems.length} bestaande aandachtspunt${r.problems.length===1?"":"en"} zichtbaar.`:!c&&n.active&&(u+=` Daarnaast zijn ${n.problemCount} incidentmelding${n.problemCount===1?"":"en"} zichtbaar.`),{...r,problems:a,active:!!r.active||n.active,severity:wl(l,n.severity),title:c?n.title:r.title||n.title,copy:u,incidentMonitoring:n}}function Pp(e={},t,r=Date.now()){let n=Hp(t);if(!n.valid)throw new Error(`incident monitoring ${n.error}`);let a=JSON.stringify(n),i=jv(n,e.incidentAction||{});return{changed:e.incidentMonitoringSignature!==a||!!e.incidentMonitoringError||e.incidentMonitoringUnsupported===!0||i!==e.incidentAction,incidentMonitoringSnapshot:n,incidentMonitoringError:"",incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:0,incidentMonitoringSignature:a,incidentMonitoringLastFetchAt:r,incidentAction:i}}function Lp(e={},t,r=Date.now()){let n=Number(e.incidentMonitoringFailureCount||0)+1,a=String(e.incidentMonitoringError||""),i=n>=3?String(t?.message||t||"Incidentgegevens konden niet worden bijgewerkt."):a;return{changed:i!==a,incidentMonitoringSnapshot:e.incidentMonitoringSnapshot||null,incidentMonitoringError:i,incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:n,incidentMonitoringSignature:String(e.incidentMonitoringSignature||""),incidentMonitoringLastFetchAt:r}}function Ip(e={},t=Date.now()){return{changed:!!(e.incidentMonitoringSnapshot||e.incidentMonitoringError||!e.incidentMonitoringUnsupported),incidentMonitoringSnapshot:null,incidentMonitoringError:"",incidentMonitoringUnsupported:!0,incidentMonitoringFailureCount:0,incidentMonitoringSignature:"",incidentMonitoringLastFetchAt:t}}var Bv=["roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"];function Z(e){return S(e)&&C(e)}function Dt(e){return!S(e)||C(e)}function ql(e){return S(e)?ko(F(e,"None")):""}function kl(e){return S(e)?ui(F(e,"None")):""}function Qn(e){let t=kl(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function Nt(){let e=[],t=!!o.incidentMonitoringSnapshot?.valid,r=Z("compressorCyclingWarning2h")||Z("compressorCyclingWarning72h")||Z("alternatingCompressorStartsWarning"),n=Z("compressorCyclingAlertLatched"),a=Dt("cicPollingEnabled"),i=Dt("otEnabled"),c=Bv.some(g=>S(g)&&String(E(g)||"").trim()==="OT thermostat")&&S("otThermostatStatusValid")&&!C("otThermostatStatusValid"),u=(g,p)=>{Z(g)&&e.push({key:g,label:p})};u("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),u("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),u("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),u("lowflowFaultActive","Te lage flow"),u("pt1000ReadProblem","PT1000-aanvoersensor geeft geen geldige meting"),u("waterSupplyTempFallbackActive","Aanvoertemperatuur gebruikt de warmtepompuitlaat als fallback"),u("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),a&&u("cicDataStale","CIC-data is verouderd"),c&&e.push({key:"otThermostatStatusInvalid",label:"Geen actuele OpenTherm-thermostaatstatus"}),i&&(c||u("otLinkProblem","OpenTherm-verbinding meldt een probleem")),!t&&Qn("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${kl("hp1Failures")}`}),!t&&Qn("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${kl("hp2Failures")}`});let d=e.length;n&&!r&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"});let m={problems:e,active:e.length>0,cyclingAlertLatched:n,cyclingAlertActive:r,cyclingAlertRecovered:n&&!r,title:d>0?"Aandacht nodig":n?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:d>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:n?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."},w=t?Op(m,o.incidentMonitoringSnapshot):m;if(!o.incidentMonitoringError)return w;let v={key:"incident-monitoring-stale",label:"Incidentgegevens tijdelijk niet bijgewerkt",severity:"attention",source:"incident_manager"},f=w.problems.some(g=>g.key===v.key)?w.problems:[v,...w.problems];return{...w,active:!0,severity:w.severity==="fault"?"fault":"attention",problems:f,title:w.active?w.title:"Incidentgegevens tijdelijk niet bijgewerkt",copy:w.active?`${w.copy} De HP-incidentstatus is tijdelijk niet ververst.`:"De laatste geldige HP-status blijft behouden; OpenQuatt probeert automatisch opnieuw.",incidentMonitoringStale:!0}}function Vr(e){let t=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}var Kv=1500,zv=1500;function Fp(){let e=o.entities.uptime,t=o.entities.projectVersionText;return[+(e?.value??e?.state)*(String(e?.state||e?.uom).endsWith("s")?1e3:36e5),t?.state||t?.value||""]}function jp(){tr(),o.ota.on=!0,o.ota.base=[...Fp(),performance.now()]}function tr(){let e=o.ota;e.id&&(window.clearTimeout(e.id),e.id=null),e.on=!1,e.ok=0,e.wait=!1,e.base=null}function Br(e=3e5){let t=o.ota;t.on&&(t.id&&window.clearTimeout(t.id),t.wait=!0,t.id=window.setTimeout(()=>{t.id=null,t.wait&&tr()},e))}function Wp(){let e=o.ota;if(!e.on||!e.wait)return;let t=Fp();(t[0]<e.base[0]||isNaN(e.base[0])&&t[0]+1e3<=performance.now()-e.base[2]||e.ok===2||e.base[1]&&t[1]&&t[1]!==e.base[1])&&Kr()}function Kr(e=zv){let t=o.ota;!t.on||t.id&&!t.wait||(t.id&&window.clearTimeout(t.id),t.wait=!1,t.id=window.setTimeout(()=>{t.on&&(tr(),window.location.reload())},e))}function Tl(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function qo(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function Uv(){return qo()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function Vp(){return qo()?"Gegevens verversen":"Wachten op gegevens"}function Bp(){let e=Uv(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return qo()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function El(){if(!o.deviceReconnectMode||qo())return!1;Tl(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;let e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(Cl(),h())},Kv),h(),!0}function To(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),Tl(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",Ae({updateModalOpen:!1}),o.controlError=""}function Cl(){Tl(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function Kp(){return qo()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function zp(){return qo()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}var xl=null,Ml=null;function Up({getSignature:e,patch:t}={}){xl=typeof e=="function"?e:null,Ml=typeof t=="function"?t:null}function Gp(){return xl?xl():""}function $l(){return Ml?Ml():!1}var _l=null;function Qp({patch:e}={}){_l=typeof e=="function"?e:null}function Yp(){return _l?_l():!1}var zr=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],Al=["trendHistoryEnabled","trendHistoryFlashEnabled"];var Rl=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function Xt(){return[...new Set(zr)]}var vt={};function Jp(e={}){vt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function Hl(){return vt.shouldRefreshSettingsStorageForCurrentSurface?vt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function Zp(e={}){return vt.refreshTrendHistoryMetadata?vt.refreshTrendHistoryMetadata(e):!1}async function Xp(e={}){return vt.refreshSettingsStorageState?vt.refreshSettingsStorageState(e):!1}async function Dl(e={}){return vt.refreshTrendHistoryData?vt.refreshTrendHistoryData(e):!1}async function fi(e={}){return vt.refreshEnergyHistoryData?vt.refreshEnergyHistoryData(e):!1}var yt={};function Eo(e={}){Object.entries(e).forEach(([t,r])=>{typeof r=="function"&&(yt[t]=r)})}function em(){return yt.patchEnergyDom?yt.patchEnergyDom():!1}function tm(){return yt.patchResultsDom?yt.patchResultsDom():!1}function om(){return yt.patchOverviewDom?yt.patchOverviewDom():!1}function Nl(){return yt.patchControlReplayDom?yt.patchControlReplayDom():!1}function rm(){return yt.patchDiagnosisDom?yt.patchDiagnosisDom():!1}var or={};function nm(e={}){or={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function Ol(){if(or.closeStream)return or.closeStream();let e=o.webServerLogSource;e&&e.close(),tt({webServerLogSource:null,webServerLogConnected:!1})}function Pl(){if(or.clearOutput)return or.clearOutput();tt({webServerLogEntries:[],webServerLogError:"",webServerLogRaw:"",webServerLogNotice:""})}function Ll(){if(or.resetRecoveryState)return or.resetRecoveryState();Ol(),tt({webServerLogEnabled:null,webServerLogConnected:!1}),Pl()}async function Ur(e,t={},r=0,n=""){if(typeof AbortController!="function"||!Number.isFinite(r)||r<=0)return fetch(e,t);let a=new AbortController,i=window.setTimeout(()=>a.abort(),r);try{return await fetch(e,{...t,signal:a.signal})}catch(l){throw a.signal.aborted?new Error(n||`request timed out after ${r}ms`):l}finally{window.clearTimeout(i)}}async function Gr(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let t=document.activeElement,r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style.position="fixed",r.style.top="-1000px",r.style.opacity="0",document.body.appendChild(r),r.focus({preventScroll:!0}),r.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r),t?.isConnected&&typeof t.focus=="function"&&t.focus({preventScroll:!0})}return n}function Il(e,t){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Fl(e,t,r="text/plain"){Il(new Blob([t],{type:r}),e)}function am(e,t){Fl(e,JSON.stringify(t,null,2),"application/json")}function im(){let e=o.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function sm(){let e=o.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let t=String(e.broker||"").trim(),r=Number(e.port||1883),n=t?`${t}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?t?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":t?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function Gv(e,t=2){let r=R(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(t))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function Qv(e){if(!S(e.valueKey)||!C(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let t=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(C(e.valueKey)?t:r)}</span>`}function Yv(e){return e.kind==="binary"?Qv(e):Gv(e.valueKey)}function Jv(e){let t=R(e);return Number.isFinite(t)?t<60?`${Math.round(t)} s`:t<3600?`${Math.round(t/60)} min`:`${Math.round(t/3600)} u`:"\u2014"}function jl(e){return S(e)?C(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function Wl(e){let t=o.mqttStatus?.input_topics;if(t&&typeof t=="object"){let r=String(t[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(o.mqttStatus?.dew_point_topic||"").trim():""}function hi(e){let t=o.mqttStatus?.input_enabled;return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,e)?t[e]!==!1:!0}function Zv(e){let t=o.mqttStatus?.input_retained;return!!(t&&typeof t=="object"&&t[e])}function Vl(e){let t=o.mqttStatus?.input_accept_retained;return!!(t&&typeof t=="object"&&t[e])}function lm(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"nieuw bericht",stateful:!0,payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een setpoint in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer warmtetoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer koeltoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'}]}function Bl(e=lm()){if(!e.length)return"Geen sensoren";let t=e.filter(i=>hi(i.topicKey)),r=e.length-t.length;if(!t.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=t.filter(i=>C(i.validKey)).length,a=n===t.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${t.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function cm(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=!!o.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=o.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(o.mqttNotice)}</span></div>`:"",i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return te({id:"system",titleId:"oq-mqtt-modal-title",kicker:"Integratie",title:"MQTT brokerconfiguratie",copy:"Stel de broker in waarop OpenQuatt MQTT-inputs beluistert.",closeAction:"close-system-modal",closeLabel:"Sluit MQTT brokerconfiguratie",body:`
          ${a}
          ${i}
          <div class="oq-settings-mqtt-form-grid">
            <label class="oq-settings-mqtt-toggle">
              <input
                type="checkbox"
                data-oq-mqtt-field="enabled"
                ${t?"checked":""}
                ${o.mqttBusy?"disabled":""}
              >
              <span>MQTT inputbronnen inschakelen</span>
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Broker</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="broker"
                value="${s(o.mqttDraftBroker)}"
                placeholder="mqtt.local"
                autocomplete="off"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field oq-settings-mqtt-field--port">
              <span>Poort</span>
              <input
                class="oq-helper-input"
                type="number"
                min="1"
                max="65535"
                step="1"
                inputmode="numeric"
                data-oq-mqtt-field="port"
                value="${s(o.mqttDraftPort)}"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Gebruikersnaam</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="username"
                value="${s(o.mqttDraftUsername)}"
                autocomplete="username"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                data-oq-mqtt-field="password"
                value="${s(o.mqttDraftPassword)}"
                placeholder="${s(n)}"
                autocomplete="current-password"
                ${o.mqttBusy||r?"disabled":""}
              >
            </label>
            ${e.password_set?`
              <label class="oq-settings-mqtt-toggle">
                <input
                  type="checkbox"
                  data-oq-mqtt-field="clear-password"
                  ${r?"checked":""}
                  ${o.mqttBusy?"disabled":""}
                >
                <span>Opgeslagen wachtwoord wissen</span>
              </label>
            `:""}
          </div>`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.mqttBusy?"disabled":""}>Gereed</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${o.mqttBusy||!e.csrf_token?"disabled":""}>${o.mqttBusy?"Opslaan...":"Opslaan"}</button>
      `})}function um(){let e=lm(),t=Math.max(1,Math.round(Number(o.mqttStatus?.non_retained_stateful_timeout_s||1800)/60)),r=e.some(l=>l.topicKey===o.mqttExpandedTopicKey)?o.mqttExpandedTopicKey:"",n=Bl(e),a=e.map(l=>{let c=Wl(l.topicKey),u=c||"Wordt geladen...",d=Jv(l.ageKey),m=hi(l.topicKey),w=C(l.validKey),v=m&&w&&Zv(l.topicKey),f=l.stateful&&Vl(l.topicKey),g=o.mqttCopiedTopicKey===l.topicKey,p=r===l.topicKey,b=o.mqttInputToggleBusyKey===l.topicKey||o.mqttRetainedToggleBusyKey===l.topicKey,y=m?w?"valid":"invalid":"disabled",k=m?w?"geldig":"ongeldig":"uit",q=m?jl(l.validKey):"Uitgeschakeld",T=m?w?l.stateful?f?`Laatste MQTT-publicatie ${d==="\u2014"?"onbekend":`${d} geleden`}. De waarde blijft geldig tot een nieuwe payload, uitschakelen of herstart.`:`Laatste live MQTT-publicatie ${d==="\u2014"?"onbekend":`${d} geleden`}. De waarde blijft maximaal ${t} minuten geldig en vervalt bij een MQTT-disconnect.`:`Laatste MQTT-publicatie ${d==="\u2014"?"onbekend":`${d} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${l.staleCopy} ongeldig.`:d==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${d} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",M=m?"Topic uitschakelen":"Topic gebruiken",A="Retained MQTT-waarde: ontvangen bij verbinden met de broker.",H=f?"Brokerwaarde wordt na reconnect of herstart opnieuw gebruikt.":`Alleen live waarden; maximaal ${t} minuten geldig en direct ongeldig bij disconnect.`,j=l.stateful?`${l.payloadInfo} ${f?"Retained berichten worden geaccepteerd.":`Retained berichten worden genegeerd; live waarden verlopen na ${t} minuten.`}`:l.payloadInfo;return`
        <article class="oq-settings-mqtt-sensor-row${p?" is-open":""}${m?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(l.topicKey)}"
            aria-expanded="${p?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(l.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">
              ${m?Yv(l):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}
            </span>
            <span class="oq-settings-mqtt-sensor-status-cell">
              <em
                class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${y}"
                title="${s(T)}"
                aria-label="${s(q)}: ${s(T)}"
              >${s(k)}</em>
              ${v?`<span class="oq-settings-mqtt-sensor-retained" title="${s(A)}" aria-label="${s(A)}">R</span>`:""}
            </span>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${m?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(l.topicKey)}"
              aria-pressed="${m?"true":"false"}"
              aria-label="${s(`${l.label}: ${M}`)}"
              title="${s(M)}"
              ${b||!o.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${p?`
            <div class="oq-settings-mqtt-sensor-topic">
              ${l.stateful?`
                <div class="oq-settings-mqtt-retained-setting">
                  <span class="oq-settings-mqtt-retained-setting-copy">
                    <strong>Retained waarde gebruiken</strong>
                    <small>${s(H)}</small>
                  </span>
                  <button
                    class="oq-settings-toggle-switch oq-settings-mqtt-retained-toggle${f?" is-on":""}"
                    type="button"
                    data-oq-action="toggle-mqtt-retained"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-pressed="${f?"true":"false"}"
                    aria-label="${s(`${l.label}: retained waarde ${f?"uitschakelen":"gebruiken"}`)}"
                    title="${f?"Retained waarde negeren":"Retained waarde gebruiken"}"
                    ${b||!o.mqttStatus?.csrf_token?"disabled":""}
                  >
                    <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
                  </button>
                </div>
              `:""}
              <div class="oq-settings-mqtt-sensor-topic-head">
                <span class="oq-settings-mqtt-sensor-topic-label">Subscribe-topic</span>
              </div>
              <div class="oq-settings-mqtt-topic-row">
                <div class="oq-settings-mqtt-topic-field${g?" is-copied":""}">
                  <code>${s(u)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-label="${s(g?`MQTT-topic voor ${l.label} gekopieerd`:`Kopieer MQTT-topic voor ${l.label}`)}"
                    title="${g?"Gekopieerd":"Kopieer topic"}"
                    ${c?"":"disabled"}
                  >
                    ${me(g?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
                  </button>
                </div>
                <details class="oq-settings-mqtt-topic-info">
                  <summary aria-label="${s(`Payloadinformatie voor ${l.label}`)}">i</summary>
                  <div class="oq-settings-mqtt-topic-info-popover">
                    <strong>${s(l.payloadInfoTitle||"Payload")}</strong>
                    <p>${s(j||"")}</p>
                  </div>
                </details>
              </div>
            </div>
          `:""}
        </article>
      `}).join(""),i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return te({id:"system",titleId:"oq-mqtt-sensors-modal-title",kicker:"Integratie",title:"MQTT sensoren",className:"oq-helper-modal--mqtt-sensors",headerMarkup:`<div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${Xv("oq-settings-mqtt-modal-logo")}</span>
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-sensors-modal-title">MQTT sensoren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT sensoren">\xD7</button>
          </div>`,body:`
          ${i}
          <div class="oq-settings-mqtt-sensor-table">
            <div class="oq-settings-mqtt-sensor-table-head" aria-hidden="true">
              <span>Sensor</span>
              <span>Waarde</span>
              <span>Status</span>
              <span></span>
              <span></span>
            </div>
            ${a}
          </div>
          <div class="oq-settings-mqtt-sensor-footer">
            <span>${s(n)}</span>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>`})}function Xv(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function Kl(e=o.mqttStatus||{}){let t=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{},n=e.input_retained&&typeof e.input_retained=="object"?e.input_retained:{},a=e.input_accept_retained&&typeof e.input_accept_retained=="object"?e.input_accept_retained:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(t),JSON.stringify(r),JSON.stringify(n),JSON.stringify(a),String(e.non_retained_stateful_timeout_s||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function bi(){return[o.systemModal,o.mqttExpandedTopicKey||"",o.mqttCopiedTopicKey||"",o.mqttInputToggleBusyKey||"",o.mqttRetainedToggleBusyKey||"",o.mqttError||"",Kl(),G("mqttCoolingDewPoint"),G("mqttCoolingDewPointAge"),G("mqttCoolingDewPointValid"),G("mqttOutsideTemperature"),G("mqttOutsideTemperatureAge"),G("mqttOutsideTemperatureValid"),G("mqttRoomTemperature"),G("mqttRoomTemperatureAge"),G("mqttRoomTemperatureValid"),G("mqttRoomSetpoint"),G("mqttRoomSetpointAge"),G("mqttRoomSetpointValid"),G("mqttHeatingEnable"),G("mqttHeatingEnableAge"),G("mqttHeatingEnableValid"),G("mqttCoolingEnable"),G("mqttCoolingEnableAge"),G("mqttCoolingEnableValid")].join("|")}function pm(){let e=o.mqttStatus||{};jr({mqttDraftEnabled:e.enabled===!0,mqttDraftBroker:String(e.broker||""),mqttDraftPort:String(e.port||1883),mqttDraftUsername:String(e.username||""),mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1})}function mm(e){let t=e?.dataset?.oqMqttField;if(!t)return!1;if(jr({mqttNotice:"",mqttError:"",mqttDraftDirty:!0}),t==="enabled")o.mqttDraftEnabled=!!e.checked;else if(t==="broker")o.mqttDraftBroker=String(e.value||"");else if(t==="port")o.mqttDraftPort=String(e.value||"");else if(t==="username")o.mqttDraftUsername=String(e.value||"");else if(t==="password")o.mqttDraftPassword=String(e.value||"");else if(t==="clear-password"){o.mqttDraftClearPassword=!!e.checked,o.mqttDraftClearPassword&&(o.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=o.mqttDraftPassword,r.disabled=o.mqttBusy||o.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function gm(){return o.systemModal==="mqtt"||o.systemModal==="mqtt-sensors"||Gd()}async function rr(e={}){if(!jn(o.lastMqttStatusRefreshAt,e))return!1;o.lastMqttStatusRefreshAt=Date.now();try{let t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([p,b])=>{a[String(p)]=String(b||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([p,b])=>{l[String(p)]=b!==!1&&String(b).toLowerCase()!=="false"});let c=r.input_retained&&typeof r.input_retained=="object"?r.input_retained:{},u={};Object.entries(c).forEach(([p,b])=>{u[String(p)]=b===!0||String(b).toLowerCase()==="true"});let d=r.input_accept_retained&&typeof r.input_accept_retained=="object"?r.input_accept_retained:{},m={cooling_dew_point:!1,outside_temperature:!1,room_temperature:!1,room_setpoint:!0,heating_enable:!0,cooling_enable:!0};Object.entries(d).forEach(([p,b])=>{m[String(p)]=b===!0||String(b).toLowerCase()==="true"});let w=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=w;let v={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:w,input_topics:a,input_enabled:l,input_retained:u,input_accept_retained:m,non_retained_stateful_timeout_s:Number(r.non_retained_stateful_timeout_s||1800),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},f=Kl(),g=Kl(v);return o.mqttStatus=v,f!==g&&(o.systemModal==="mqtt"&&o.mqttDraftDirty||pm(),o.mqttNotice=""),o.mqttError="",f!==g}catch(t){return o.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`,!1}}async function dm(e="cooling_dew_point"){let t=Wl(e);if(!t){o.mqttError="MQTT-topic is nog niet geladen.",o.mqttCopiedTopicKey="",h();return}try{let r=await Gr(t);o.mqttNotice="",o.mqttError=r?"":"Kopi\xEBren is niet gelukt.",o.mqttCopiedTopicKey=r?e:"",o.mqttCopiedTopicTimer&&window.clearTimeout(o.mqttCopiedTopicTimer),r&&(o.mqttCopiedTopicTimer=window.setTimeout(()=>{o.mqttCopiedTopicKey="",o.mqttCopiedTopicTimer=null,o.systemModal==="mqtt-sensors"&&h()},1800))}catch(r){o.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,o.mqttCopiedTopicKey=""}h()}async function ey(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",h();return}o.mqttInputToggleBusyKey=e,o.mqttNotice="",o.mqttError="",h();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",t?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await rr({force:!0})}catch(n){o.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{o.mqttInputToggleBusyKey===e&&(o.mqttInputToggleBusyKey=""),h()}}async function ty(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",h();return}o.mqttRetainedToggleBusyKey=e,o.mqttNotice="",o.mqttError="",h();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("accept_retained",t?"true":"false");let a=await fetch("/mqtt/input/retained/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await rr({force:!0})}catch(n){o.mqttError=`Retained-instelling kon niet worden opgeslagen. ${n.message}`}finally{o.mqttRetainedToggleBusyKey===e&&(o.mqttRetainedToggleBusyKey=""),h()}}async function oy(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=String(o.mqttDraftBroker||"").trim(),n=String(o.mqttDraftPort||"").trim(),a=n?Number(n):t?0:1883,i=!t&&!r,l=i?"":String(o.mqttDraftUsername||"").trim(),c=i||!!o.mqttDraftClearPassword,u=c?"":String(o.mqttDraftPassword||"");if(!e.csrf_token){o.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",h();return}if((t||n)&&(!Number.isInteger(a)||a<1||a>65535)){o.mqttError="Vul een geldige poort in.",h();return}if(t&&!r){o.mqttError="Vul een broker in als je MQTT inschakelt.",h();return}o.mqttBusy=!0,o.mqttNotice="",o.mqttError="",h();try{let d=new URLSearchParams;d.set("csrf_token",e.csrf_token),d.set("enabled",t?"true":"false"),d.set("broker",r),d.set("port",String(a)),d.set("username",l),d.set("password",u),d.set("clear_password",c?"true":"false");let m=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:d.toString()}),w=await m.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!m.ok||!w.ok)throw new Error(w.error||`HTTP ${m.status}`);o.mqttDraftDirty=!1,await rr({force:!0}),o.mqttDraftPassword="",o.mqttDraftClearPassword=!1,o.mqttNotice=t?"MQTT-configuratie opgeslagen. De MQTT-verbinding wordt gestart.":"MQTT-configuratie opgeslagen.",o.mqttError="",h()}catch(d){o.mqttError=`Opslaan is mislukt. ${d.message}`,h()}finally{o.mqttBusy=!1,h()}}var ry={"open-mqtt-modal":()=>(o.systemModal="mqtt",pm(),o.mqttDraftDirty=!1,o.mqttNotice="",o.mqttError="",h(),rr({force:!0})),"open-mqtt-sensors-modal":()=>(o.systemModal="mqtt-sensors",o.mqttNotice="",o.mqttError="",o.mqttCopiedTopicKey="",o.mqttExpandedTopicKey="",o.mqttInputToggleBusyKey="",o.mqttRetainedToggleBusyKey="",h(),rr({force:!0}).then(e=>{e&&o.systemModal==="mqtt-sensors"&&h()})),"toggle-mqtt-sensor-topic":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";o.mqttExpandedTopicKey=o.mqttExpandedTopicKey===t?"":t,o.mqttError="",h()},"toggle-mqtt-input":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";return ey(t,!hi(t))},"toggle-mqtt-retained":e=>{let t=e.dataset?.oqMqttTopicKey||"";if(t)return ty(t,!Vl(t))},"copy-mqtt-topic":e=>dm(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"copy-mqtt-dew-topic":e=>dm(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"save-mqtt-config":()=>oy()};function fm(e,t){return se(ry,e,t)}function Tm(){if(o.nativeOpen||o.appView!=="settings")return;let e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Tm,250);return}qe({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function Em(){if(o.nativeOpen||!Yl()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;let e=Sy();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await z(e,"all",{concurrency:Ut}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&h()}}async function ny(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await z(e,t,{concurrency:t==="all"?Ut:Gt})}finally{o.entitySyncInFlight=!1;let r=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,r&&!o.nativeOpen&&window.setTimeout(()=>{qe(r)},0)}o.mounted&&!o.nativeOpen&&h()}}async function ay(){if(!o.nativeOpen)try{Yl()&&await Em(),(o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis")&&await Dl({force:!0}),o.appView==="results"&&await fi({force:!0}),await Zo({force:!0}),Jt()&&await Promise.all([ai({force:!0}),Xp({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{o.mounted&&!o.nativeOpen&&h(),Tm()}}async function Cm(){if(o.nativeOpen)return;o.loadingEntities=!0,h();let e=sy();e>0&&await new Promise(i=>window.setTimeout(i,e));let t=Gy(),r=Qy(t),n=o.appView==="settings"?"all":"state";try{await Promise.all([z(t,n,{concurrency:n==="all"?Ut:Gt}),Zl()?nr({force:!0}):!1]),o.appView==="settings"?await Ty():await qy()}finally{o.loadingEntities=!1,h()}let a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{ny(r,a)},fy),$m(Gl())}var hm={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Bo,"otbLinkAvailable","otbConnectionMismatch","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","boilerFaultFallbackEnabled","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource","boilerConnection","boilerCommandValid","otbLinkAvailable"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","usageTelemetryInstallationId"]},iy={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Bo,"otbLinkAvailable","otbConnectionMismatch",...at,...Nr,...Uo,...Ks,...Rn,...Hn,"maxWater",...Wa],service:[...Dn,...za,...Rn,...Hn,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...Mt,...zo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...Bs],integrations:[...Is,...js,...Bo,...Ua,...Ga,...Fs,...Ws,...On,...Vs,...Ls],system:["setupComplete",...Qt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","usageTelemetryInstallationId",...zr,"webServerLogHistoryEnabled","debugLevel"]};function ar(){return[...new Set(["setupComplete",...Ja])]}function sy(){return Number.isFinite(0),0}var xm=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","silentModeOverride","totalHeat","totalCoolingPower"],ly=["strategy","controlModeLabel","hpGeneration","coolingEnableEffectiveSource"],cy=["totalPower","flowSelected"],uy=["totalHeat","totalCoolingPower"],dy=2e3,py=250,my=5e3,gy=250;function Ul(e=o.settingsGroup){let t=Ie.has(e)?e:ye[0].id;return[...new Set(["setupComplete","strategy",...it,...iy[t]||[]])]}function Mm(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:ye[0].id;return[...new Set(hm[e]||hm.installation)]}var fy=1200,hy=1800,by=0,wy=3500;function zl(){return["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...it]}function vy(){let e=new Set;return Ya.forEach(t=>{(t.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function Yn(e,t={}){let r=t.forceFast===!0,n=t.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...zl(),...e==="energy"?xm:[],...vy(),...e==="results"?Rl:[]])]:[...new Set([...zl(),...r||!n?zs:Pn,...e==="control"?Sd:[],...e==="diagnosis"?Al:[]])]}function Gl(e=o.appView){return e==="diagnosis"||e==="results"||e==="settings"&&Jt()?by:hy}function $m(e=Gl()){o.nativeOpen||(o.supplementaryPrimeTimer&&window.clearTimeout(o.supplementaryPrimeTimer),o.supplementaryPrimeTimer=window.setTimeout(()=>{o.supplementaryPrimeTimer=null,ay()},e))}function yy(e={}){let t=o.pendingEntitySyncOptions||{},r={...t,...e};t.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(t.forceFast||e.forceFast)&&(r.forceFast=!0),o.pendingEntitySyncOptions=r}function Ql(e){let t=String(E(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function bm(e){return Ql(e)&&Number.isFinite(Ee(E(e)))}function Yl(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function Sy(){return kd.filter(e=>{let t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!L[e]?.optional})}function wm(){return Yl()?ly.every(Ql)&&cy.every(bm)&&uy.some(bm):!0}function ky(){return o.appView==="settings"}function vm(){return ky()?Mm().every(e=>L[e]?.optional&&!o.entities[e]?!0:Ql(e)):!0}async function qy(){if(wm())return;let e=Date.now()+dy;for(;!o.nativeOpen&&!wm()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,py));try{await z(xm,"state")}catch{return}}}async function Ty(){if(vm())return;let e=Date.now()+my;for(;!o.nativeOpen&&!vm()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,gy));try{await z(Mm(),"all")}catch{return}}}var Ey=8e3,_m=3e3,Cy="/openquatt/entities",xy=900,My="/openquatt/service/status",$y="/openquatt/decision-log",_y="/openquatt/incidents",Ay=15e3,Ry=1e4;function wi(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?_m:Ey}function vi(e){let t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}var Hy=300*1e3;function Dy(){if(o.optionalMissingEntities)for(let e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function ym(){let e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,Wp(),!!o.deviceReconnectMode&&typeof El=="function"&&El()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,o.decisionLog=null,o.decisionLogError="",o.decisionLogSignature="",o.decisionLogLastFetchAt=0,o.incidentMonitoringSnapshot=null,o.incidentMonitoringError="",o.incidentMonitoringUnsupported=!1,o.incidentMonitoringFailureCount=0,o.incidentMonitoringSignature="",o.incidentMonitoringLastFetchAt=0,o.incidentAction={hp:0,kind:"",requestId:0,pending:!1,ok:null,result:""},typeof Ll=="function"?Ll():(Ol(),Pl(),tt({webServerLogEnabled:null,webServerLogConnected:!1})),Dy())}function Am(e){if(!vi(e)){o.entitySyncFailureCount=0,Cl();return}o.ota.ok===1&&(o.ota.ok=2),o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.ota.on||o.entitySyncFailureCount>=2)&&To(o.updateInstallBusy||o.updateInstallPhaseHint||o.ota.on?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function Ny(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;let r=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?Ln:Md;return e-r>=n}async function Oy(){let e=L.status||L.setupComplete;if(!e)return{ok:!0,message:""};let t=o.deviceReconnectMode?_m:xd,r=Q(e.domain,e.name);try{let n=await Ur(r,{cache:"no-store"},t,`${e.name} request timed out after ${t}ms`);return o.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function Py(e,t=Date.now()){let r=o.optionalMissingEntities?.[e];return!L[e]?.optional||!r?!1:t-Number(r)<Hy}function Ly(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function Iy(e){let t=L[e];return t?`${e}	${t.domain}	${t.name}`:""}function Sm(e,t){let r=new URLSearchParams;return r.set("detail",t==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function Jl(e,t){let r=[],n=[],a=[],i="";return e.forEach(l=>{let c=Iy(l);if(!c)return;let u=[...a,c],d=Sm(u,t);if(a.length&&d.length>xy){r.push({keys:n,body:i}),n=[l],a=[c],i=Sm(a,t);return}n=[...n,l],a=u,i=d}),a.length&&r.push({keys:n,body:i}),r}async function Fy(e){let t=wi(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body},n=await Ur(Cy,r,t,`bulk entities request timed out after ${t}ms`);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function jy(){let e=wi(),r=await Ur(My,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`service status request timed out after ${e}ms`);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}async function Wy(){let e=wi(),r=await Ur($y,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`decision log request timed out after ${e}ms`);if(!r.ok)throw new Error(`decision log HTTP ${r.status}`);return r.json()}async function Vy(){let e=wi(),t=await Ur(_y,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`incident monitoring request timed out after ${e}ms`);if(t.status===404)return{unsupported:!0,payload:null};if(!t.ok)throw new Error(`incident monitoring HTTP ${t.status}`);return{unsupported:!1,payload:await t.json()}}function Zl(e=o.appView,t=o.settingsGroup){return e==="overview"||e==="settings"&&t==="service"}async function nr(e={}){if(!Zl()&&e.prefetchOverview!==!0)return!1;let t=e.force===!0,r=Date.now();if(o.incidentMonitoringFetchPromise)return o.incidentMonitoringFetchPromise;if(!t&&o.incidentMonitoringUnsupported||!t&&r-Number(o.incidentMonitoringLastFetchAt||0)<Ry)return!1;let n=i=>(Object.assign(o,i),i.changed&&Vr(Nt()),i.changed),a=(async()=>{try{let i=await Vy();return n(i.unsupported?Ip(o):Pp(o,i.payload))}catch(i){return n(Lp(o,i))}})();o.incidentMonitoringFetchPromise=a;try{return await a}finally{o.incidentMonitoringFetchPromise===a&&(o.incidentMonitoringFetchPromise=null)}}function By(e={}){let t=Array.isArray(e.events)?e.events:[],r=Array.isArray(e.buckets)?e.buckets:[],n=t[0]||{},a=t[t.length-1]||{},i=r[r.length-1]||{};return[e?.meta?.event_count??t.length,e?.meta?.dropped_count??0,t.length,n.seq??"",a.seq??"",a.uptime_s??"",e?.meta?.boot_epoch_s??"",n.epoch_s??"",a.epoch_s??"",r.length,i.hour_start_uptime_s??"",i.hour_start_epoch_s??"",i.source??"",i.attention_count??"",e?.meta?.flash_write_count??""].join("|")}async function Ky(e={}){if(o.appView!=="control")return!1;let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogFetchPromise)return o.decisionLogFetchPromise;if(!t&&(o.decisionLog||o.decisionLogError)&&r-Number(o.decisionLogLastFetchAt||0)<Ay)return!1;o.decisionLogFetchPromise=(async()=>{let n=await Wy(),a=Array.isArray(n?.events)?n.events:[];if(!n?.ok||!Array.isArray(n?.events))throw new Error("decision log response mist events");let i=By(n),l=o.decisionLogError!==""||o.decisionLogSignature!==i||!o.decisionLog;return o.decisionLog={...n,events:a,buckets:Array.isArray(n.buckets)?n.buckets:[]},o.decisionLogError="",o.decisionLogSignature=i,o.decisionLogLastFetchAt=Date.now(),l})();try{return await o.decisionLogFetchPromise}catch(n){let a=n.message||String(n),i=!!o.decisionLog||o.decisionLogError!==a;return o.decisionLog=null,o.decisionLogError=a,o.decisionLogSignature="",o.decisionLogLastFetchAt=Date.now(),i}finally{o.decisionLogFetchPromise=null}}function zy(e={}){let t=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(t).forEach(([r,n])=>{Nn.has(r)&&(o.optionalMissingEntities&&delete o.optionalMissingEntities[r],o.entities[r]=Rm(r,o.entities[r],n))})}async function Uy(e){if(!e.length)return{ok:!0,message:""};try{let t=await jy();return zy(t),o.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(t){return{ok:!1,message:t.message||String(t)}}}async function z(e,t="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(b=>a||Nn.has(b)||!Py(b,n));if(!i.length)return;let l=i.filter(b=>Nn.has(b)),c=i.filter(b=>!Nn.has(b)),d=(await Uy(l)).ok?c:[...c,...l];if(!d.length){km(),Vr(Nt()),o.busyAction||(ym(),o.controlError="");return}let m=Number(r.concurrency),w=Number.isFinite(m)&&m>0?Math.floor(m):Ut,v=Jl(d,t),f=Math.max(1,Math.min(w,Ut)),g=[];for(let b=0;b<v.length;b+=f){let y=v.slice(b,b+f),k=await Promise.allSettled(y.map(async q=>({chunk:q,payload:await Fy(q)})));g.push(...k)}g.some(b=>b.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let p="";g.forEach(b=>{if(b.status!=="fulfilled"){let M=b.reason.message||String(b.reason);p||(p=M);return}let{chunk:y,payload:k}=b.value,q=k?.entities&&typeof k.entities=="object"?k.entities:{},T=new Set(Array.isArray(k?.missing)?k.missing:[]);y.keys.forEach(M=>{if(Object.prototype.hasOwnProperty.call(q,M)){o.optionalMissingEntities&&delete o.optionalMissingEntities[M],o.entities[M]=Rm(M,o.entities[M],q[M]);return}let A=L[M];A?.optional?T.has(M)&&Ly(M,n):p||(p=`${A?.name||M} ontbreekt in bulk response`)})}),km(),Vr(Nt()),p?(Am(p),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${p}`):o.busyAction||(ym(),o.controlError="")}function Rm(e,t={},r={}){let n={...t||{},...r||{}};return L[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(t?.state??"").trim()&&(n.state=t.state),!String(r.value??"").trim()&&String(t?.value??"").trim()&&(n.value=t.value),!Array.isArray(r.option)&&Array.isArray(t?.option)&&(n.option=t.option),!Array.isArray(r.options)&&Array.isArray(t?.options)&&(n.options=t.options)),n}function km(){o.complete=ti(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=Vd(),o.appView==="diagnosis"&&!wt()&&Rt(So(),{syncMode:"replace",forceSync:!0}),o.appView||Rt(zn()||So(),{syncMode:"replace",forceSync:!0})}function Gy(){let e=zl();return o.appView==="settings"?[...new Set([...e,...Ul()])]:o.appView==="energy"||o.appView==="results"?Yn(o.appView,{forceFast:!0}):o.appView==="overview"||o.appView==="diagnosis"?Yn(o.appView,{forceFast:!0}):[...new Set(e)]}function Qy(e=[]){let t=new Set(e);return(o.appView==="settings"?Ul():o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis"?[...new Set([...Yn(o.appView,{includeBulk:!0}),...Qt])]:o.appView==="energy"||o.appView==="results"?[...new Set([...Yn(o.appView,{forceFast:!0}),...Qt])]:[...new Set(["setupComplete","strategy",...it])]).filter(n=>!t.has(n))}function qm(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=Ed}async function qe(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||ci()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){yy(e);return}let t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<Ln)return;let r=o.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="control"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!n&&qm(t,e),d=t-Number(o.lastStaticEntitySyncAt||0)>=Cd||o.updateInstallBusy||o.updateInstallPhaseHint?Qt:[],m=o.quickStartModalOpen&&o.currentStep==="flow-source"?bt:[],w=o.quickStartModalOpen&&o.currentStep==="setup"?$t:[],v=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?Ko:[],f=Hl()?Xt():[],g=n?[...zs,...it,"setupComplete",...d]:i?[...Yn(a,{forceFast:l,includeBulk:c}),...d]:r==="settings"?[...new Set([...Ul(),...f,...d])]:c?["setupComplete",...d,...it,"strategy",...Vo,...at,...ie()?Se.map(p=>p.key):Mt]:["setupComplete",...it,"strategy",...d];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{let p=o.deviceReconnectMode,b=Ny(t,e)?await Oy():{ok:!0,message:""};if(!b.ok){Am(b.message),n||h();return}if(await z([...new Set([...g,...o.ota.wait?["uptime","projectVersionText"]:[],...w,...m,...v])],n?"state":r==="settings"||w.length?"all":"state",{concurrency:l&&i?Gt:Ut}),o.lastFastEntitySyncAt=Date.now(),c&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),d.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),n){await nr({prefetchOverview:!0});return}i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&Em();let y=p!==o.deviceReconnectMode,k=Zl(a,o.settingsGroup)?await nr({force:e.forceIncidentMonitoring===!0}):!1,q=l&&i,T=q?!1:a==="overview"||a==="control"||a==="diagnosis"?await Dl():!1,M=q?!1:o.appView==="results"?await fi():!1,A=a==="control"?await Ky({force:e.forceDecisionLog===!0}):!1,H=q?!1:Hl()?(await Promise.all([Zp(),fi({metaOnly:!0})])).some(Boolean):!1,j=q||!Jd()?!1:await Zo(),I=q||!Zd()?!1:await ai(),W=q||!gm()?!1:await rr({force:o.systemModal==="mqtt-sensors"}),x=Gp();if(q&&!o.nativeOpen&&$m(Gl(a)),y){h();return}if(k&&o.appView==="settings"&&o.settingsGroup==="service"){h();return}if(T&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){h();return}if(M&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){h();return}if(A&&o.appView==="control"){Nl()||h();return}if(H&&o.appView==="settings"){h();return}if(j&&(o.systemModal==="login"||Jt())){h();return}if(I&&o.appView==="settings"){h();return}if(o.systemModal==="mqtt-sensors"){bi()!==o.mqttSensorsModalRenderSignature&&h();return}if(W&&o.appView==="settings"){h();return}let O=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(x!==o.headerRenderSignature)if(O&&$l())o.headerRenderSignature=x;else{h();return}else $l();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){Wn()!==o.settingsRenderSignature&&h();return}if(O)return;if(o.appView==="settings"){let D=Wn();if(D!==o.settingsRenderSignature&&!o.focusedField){h();return}if(!Yp()){o.focusedField||h();return}o.focusedField&&(o.settingsRenderSignature=D);return}if(o.appView==="diagnosis"){rm()||h();return}if(o.appView==="control"){Nl()||h();return}if(o.appView==="energy"){em()||h();return}if(o.appView==="results"){tm()||h();return}om()||h()}catch(p){n||(o.controlError=`Helperstatus kon niet worden geladen. ${p.message}`,h())}finally{o.entitySyncInFlight=!1;let p=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,p&&!o.nativeOpen&&window.setTimeout(()=>{qe(p)},0),l&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&!o.nativeOpen&&!p&&qm(Date.now())&&window.setTimeout(()=>{qe({forceBulk:!0})},wy)}}function Ot(){return{}}function Yy(){let e=String(E("hpGeneration")||"").trim();return e||""}function ir(e){let t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function Jy(){if(!Array.isArray(Or))return"";if(Or.some(t=>S(t)))return"duo";let e=o.optionalMissingEntities||{};return Or.every(t=>e[t])?"single":""}function Xl(e){let t=ir(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function Zy(){if(typeof o<"u"&&o&&typeof o=="object"){let e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function oe(){let e=ir(E("installationTopology"));if(e==="single"||e==="duo")return Xl(e);let t=ir(Ot().installation);if(t==="single"||t==="duo")return Xl(t);let r=Jy();return r?Xl(r):Zy()}function Pt(){let e=oe(),t=Yy();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function ot(){return"OpenQuatt"}function Jn(e){let t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function lt(e=ct()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function sr(e=oe()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Qr(){let e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Ot().hardwareProfile||e).trim().toLowerCase()}function ct(){return Jn(E("connectionText")||Ot().connection)}function Hm(){let e=ct();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Dm(){let e=oe();return e==="single"?"duo":e==="duo"?"single":""}function Co(e=oe(),t=ct()){let r=sr(e),n=Qr();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${lt(t)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${lt(t)}`:n==="waveshare"?`Waveshare ${r} ${lt(t)}`:`${ot()} ${r} ${lt(t)}`}function ec(){let e=C("timeValid"),t=String(E("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(S("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function yi(){return S("timeValid")&&!C("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${ec()}`}function Xy(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function eS(e){let t=e?.state;if(t!==""&&t!==null&&t!==void 0){let a=Number(t);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function Yr(){let e=eS(o.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=Xy(o.entities.uptime);if(n==="d")return Jo(e*1440);if(n==="h")return Jo(e*60);if(n==="s")return Jo(e/60)}let t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;let r=Number(Ot().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":Jo((Date.now()-r)/6e4)}function Jr(){let e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;let t=String(Ot().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function xo({getScroller:e,getToken:t,setToken:r,isActive:n=()=>!0,getIdentity:a=null,preserveGrowth:i=!1,stickToBottom:l=!1,nearBottomThreshold:c=48}){function u(){let v=e();if(!v)return null;let f={scrollTop:v.scrollTop};if((i||l)&&(f.scrollHeight=v.scrollHeight),l){let g=v.scrollHeight-v.scrollTop-v.clientHeight;f.stickToBottom=g<c}return a&&(f.identity=a(v)),f}function d(v){if(!v)return;let f=e();if(!f||a&&a(f)!==v.identity)return;if(v.stickToBottom){f.scrollTop=f.scrollHeight;return}let g=i?f.scrollHeight-Number(v.scrollHeight||0):0;f.scrollTop=Math.max(0,Number(v.scrollTop||0)+g)}function m(v,f=!0){if(!v)return;let g=Number(t()||0)+1;r(g);let p=()=>{Number(t()||0)!==g||!n()||d(v)};if(f){window.requestAnimationFrame(p);return}p()}function w(){r(Number(t()||0)+1)}return{capture:u,invalidate:w,queue:m,restore:d}}function Re(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:E(e)}function Mo({key:e,value:t,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
    <label class="${n}">
      <input
        class="${a}"
        type="number"
        data-oq-field="${s(e)}"
        min="${r.min}"
        max="${r.max}"
        step="${r.step}"
        value="${s(t)}"
        ${i}
        ${o.loadingEntities?"disabled":""}
      >
      ${l}
    </label>
  `}function $o(e,t,r){return r?`
    <div class="oq-settings-info${o.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
      <button
        class="oq-settings-info-button"
        type="button"
        data-oq-action="toggle-settings-info"
        data-info-id="${s(e)}"
        aria-label="${s(`Uitleg bij ${t}`)}"
        aria-expanded="${o.settingsInfoOpen===e?"true":"false"}"
      >i</button>
      <div class="oq-settings-info-popover" ${o.settingsInfoOpen===e?"":"hidden"}>
        <p>${s(r)}</p>
      </div>
    </div>
  `:""}function ge(e,t,r,n,a="",i=""){return`<article class="oq-helper-surface oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${$o(e,t,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function Oe(e,t,r,n,a=""){return ge(e,t,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function Fe({label:e,value:t,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let c=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,u=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${c}"${u}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(t)}</strong></div>`:`<div class="${c}"${u}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(t)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function He(e,t={}){let r=typeof t=="number"?{decimals:t}:t||{},n=o.entities[e];if(!n)return"\u2014";let a=Ee(n.value??n.state);if(Number.isFinite(a)){let c=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,u=a.toFixed(Math.max(0,c));return r.trimTrailingZeros&&u.includes(".")&&(u=u.replace(/\.?0+$/,"")),`${u}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function _o(e,t="\u2014"){let r=o.entities[e];if(!r)return t;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?t:n}function eo(e,t="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${t?` ${t}`:""}`:"\u2014"}function Ce(e,t=2){return He(e,{decimals:t})}function lr(e,t="IDLE"){let r=_o(e,t),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?t:n}function Si(){let e=_o("commissioningStatus",""),t=C("cm100Active"),r=String(e||"").trim().toUpperCase();return(t||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":r:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function Te(e){let t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Disabled:"Niet gebruiken","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OT-thermostaat + handmatig","CIC + Manual":"CIC + handmatig","CIC + HA input + Manual":"CIC + HA-invoer + handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Fa]:"Stooklijn",[Ia]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit","Local - PT1000":"Lokaal - PT1000","Local - DS18B20":"Lokaal - DS18B20","HP1 water out (fallback)":"HP1 uitgaand water (fallback)","HP2 water out (fallback)":"HP2 uitgaand water (fallback)",Unavailable:"Niet beschikbaar",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function Zr({key:e,option:t,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:u="",infoCopy:d="",infoId:m=""}){let w=t===r,v=`
    <button
      class="oq-helper-surface oq-settings-choice-card${w?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${d?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(t)}"
      aria-pressed="${w?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(Te(t))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||Te(t))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!d)return v;let f=u||Te(t),g=m||`${e}-${t}`;return`
    <article class="oq-settings-choice-card-shell${w?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${v}
      ${$o(g,f,d)}
    </article>
  `}function Lt(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Ao(e,t,r,n=""){if(!S(e))return"";let a=o.entities[e]||{},i=String(E(e)||""),l=Lt(a);return ge(e,t,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(Te(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function tS(e,t,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(t?r:n)}</span>`}function ut(e,t,r,n,a="Aan",i="Uit",l=!0){let c=r?a:i,u=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?tS(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(u)}"
        data-switch-title="${s(t)}"
        data-on-label="${s(a)}"
        data-off-label="${s(i)}"
        aria-checked="${r?"true":"false"}"
        aria-label="${s(`${t}: ${c}`)}"
        ${n?"disabled":""}
      >
        <span class="oq-settings-toggle-switch-track" aria-hidden="true">
          <span class="oq-settings-toggle-switch-knob"></span>
        </span>
      </button>
    </div>
  `}function tc(e,t,r="",n=""){let a=t?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function Nm(e,t,r,n="",a="",i=""){if(!S(e))return"";let l=!!E(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return ge(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${ut(e,t,l,c)}
        ${tc(e,l,n,a)}
      </div>
    `,i)}function Om(e,t,r,n,a=""){if(!S(e))return"";let i=!!E(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return ge(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${ut(e,t,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function ki(e,t,r){if(!S(e))return"";let n=!!E(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(t)}</h4>
      </div>
      <p>${s(r)}</p>
      ${ut(e,t,n,a)}
    </article>
  `}function Qe(e,t,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(t)}
    </button>
  `}function cr({active:e,startKey:t,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:u=!1}){return Qe(e?r:t,e?a:n,e?l:i,e?u:c)}function Pm(e,t,r,n,a=""){if(!S(e))return"";let i=o.entities[e]||{},l=String(E(e)||""),c=Lt(i),u=o.loadingEntities||o.busyAction===`save-${e}`,d=`
    <div class="oq-settings-choice-grid">
      ${c.map(m=>{let w=n[m]||"",v=typeof w=="string"?w:w.copy||"",f=typeof w=="string"?"":w.image||"",g=typeof w=="string"?"":w.alt||"";return Zr({key:e,option:m,currentValue:l,busy:u,copy:v,image:f,imageAlt:g})}).join("")}
    </div>
  `;return ge(e,t,r,d,a)}function ue(e,t,r,n="",a={}){if(!S(e))return"";let i=Ue(e),l=Re(e),c=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!c,d=u&&a.unitMode!=="outside",m=Mo({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!d?" oq-helper-control--split":""}${d?" oq-helper-control--suffix":""}`,unitMarkup:u?d?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return ge(e,t,r,m,n,a.footerMarkup||"")}function to(e,t,r,n="",a={}){if(!S(e))return"";let i=Ue(e),l=ke(e,E(e)),c=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,d=a.valueLabel||Y(e,l);return ge(e,t,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(d)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,n)}function Xr(e,t,r,n={}){if(!S(e))return"";let a=Ue(e),i=Re(e),l=n.compact===!0,c=n.embedded===!0,u=n.infoId||e,d=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(t)}</h5>
          ${r?$o(u,t,r):""}
        </div>
        ${r&&d?`<p>${s(r)}</p>`:""}
      </div>
      ${Mo({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function oc(e,t,r,n=""){if(!S(e))return"";let a=In(E(e));return ge(e,t,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function re(e,t,r,n,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(r)}</p></div>${n}</section>`}var Lm=250;function Im(){return[]}function dr(){return typeof window>"u"?!1:Im().length>0}function oS(){return`${Ne()}/events`}function rS(){return`${Ne()}/openquatt/logs/recent`}function nS(){return`${Ne()}/openquatt/logs/clear`}function qi(){let e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Ti(){return o.nativeOpen?"Niet beschikbaar":dr()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function aS(e){let t=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Fm(e){let t=Number(e)||0;if(t>9466848e5){let r=e instanceof Date?e:new Date(t),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return aS(t)}function iS(e){let t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(t/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function sS(){return o.nativeOpen?"Niet beschikbaar":dr()?qi()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":qi()?"Buffer aan":"Buffer uit"}function lS(){return qi()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function nc(){return o.entities?.debugLevel||null}function jm(e=nc()){let t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function cS(e=nc()){let t=String(e?.value??e?.state??"").trim(),r=jm(e);return r.includes(t)?t:r.includes("INFO")?"INFO":r[0]||""}function Wm(e,t=null){if(!e||!t)return!1;let r=Number(e.seq),n=Number(t.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function uS(e,t){let r=Number(e.receivedAt??e.ts??0),n=Number(t.receivedAt??t.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function rc(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];r.sort(uS);let n=[];for(let a of r){let i=n[n.length-1]||null;Wm(a,i)||n.push(a)}o.webServerLogEntries=n.slice(-Lm)}function ac(e,t={}){let r=AS(e).trimEnd(),n=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:r,tone:RS(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function dS(e,t){let n=Math.max(0,t-e-1)*9e4;return Date.now()-n}function pS(){let e=Im(),t=e.length;return e.map((r,n)=>ac(r,{receivedAt:dS(n,t),seq:n+1}))}function mS(){let e=pc();e&&(e.scrollTop=e.scrollHeight)}var ic=xo({getScroller:pc,getToken:()=>o.webServerLogScrollRestoreToken,setToken:e=>{o.webServerLogScrollRestoreToken=e},isActive:()=>o.systemModal==="webserver-logs",preserveGrowth:!0,stickToBottom:!0}),oo=ic.capture,ro=ic.queue;function gS(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}var Vm=xo({getScroller:gS,getToken:()=>o.cm100CommissioningScrollRestoreToken,setToken:e=>{o.cm100CommissioningScrollRestoreToken=e},isActive:()=>o.systemModal==="cm100-commissioning",preserveGrowth:!0,stickToBottom:!0}),Bm=Vm.capture,sc=Vm.queue;function fS(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}var Km=xo({getScroller:fS,getToken:()=>o.serviceTaskModalScrollRestoreToken,setToken:e=>{o.serviceTaskModalScrollRestoreToken=e},isActive:()=>String(o.systemModal||"").startsWith("service-task-")}),zm=Km.capture,lc=Km.queue;function hS(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}var Um=xo({getScroller:hS,getToken:()=>o.historyStorageModalScrollRestoreToken,setToken:e=>{o.historyStorageModalScrollRestoreToken=e},isActive:()=>o.systemModal==="history-storage"}),Gm=Um.capture,cc=Um.queue;function bS(){return o.root?o.root.querySelector("[data-oq-settings-backup-restore-scroller]"):null}var Qm=xo({getScroller:bS,getToken:()=>o.settingsBackupRestoreScrollRestoreToken,setToken:e=>{o.settingsBackupRestoreScrollRestoreToken=e},isActive:()=>o.systemModal==="settings-backup-restore"}),Ym=Qm.capture,uc=Qm.queue;async function Ro(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;let t=e.scrollState||oo(),r=e.replaceEntries===!0||o.webServerLogHistoryNeedsReconcile===!0,n=r?new Set(o.webServerLogEntries):null,a=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=a,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{let i=await window.fetch(rS(),{headers:{"Cache-Control":"no-store"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);let l=await i.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==a)return;o.webServerLogCsrfToken=String(l.csrf_token||"");let c=vS(l),u=r?o.webServerLogEntries.filter(d=>!n.has(d)):[];r&&(o.webServerLogEntries=[],o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0),o.webServerLogHistoryLoaded=!0,o.webServerLogHistoryNeedsReconcile=!1,c.length>0&&(rc(c,{prepend:!0}),o.webServerLogRecentTail=c.slice(-4).map(d=>String(d.raw??d.text??"")),o.webServerLogRecentAnchorAt=Date.now()),u.length>0&&rc(u)}catch(i){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryError=i instanceof Error?i.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(h(),ro(t))}}function wS(e,t=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?ac(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function vS(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>wS(r,n+1)).filter(r=>r!==null)}function yS(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?o.webServerLogRecentTail.includes(r):!1}function SS(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(r=>Wm(e,r))}function kS(){dr()&&o.webServerLogEntries.length===0&&tt({webServerLogEntries:pS()}),tt({webServerLogCopyMessage:"",webServerLogCopyError:""}),o.systemModal="webserver-logs",h(),z(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;let e=oo();h(),ro(e)}),mS(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&Ro()}function ur(){tt({webServerLogEntries:[],webServerLogError:"",webServerLogHistoryError:"",webServerLogHistoryLoading:!1,webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1,webServerLogRecentTail:[],webServerLogRecentAnchorAt:0}),ic.invalidate(),o.systemModal==="webserver-logs"&&h()}async function qS(){if(o.busyAction)return!1;if(o.nativeOpen||dr())return ur(),!0;if(typeof window.fetch!="function")return o.webServerLogHistoryError="De RAM-logbuffer kan niet vanuit deze browser worden geleegd.",h(),!1;let e=String(o.webServerLogCsrfToken||"");if(!e)return o.webServerLogHistoryError="De beveiligingstoken voor de RAM-logbuffer ontbreekt. Open het logboek opnieuw.",h(),!1;o.busyAction="clear-webserver-log-history",o.webServerLogHistoryError="",St(),h();let t=!1;try{let n=e,a=!1;for(;;){let i=new URLSearchParams;i.set("csrf_token",n);let l=await window.fetch(nS(),{method:"POST",body:i});if(!(l.status===403&&!a&&(a=!0,tt({webServerLogCsrfToken:"",webServerLogHistoryLoaded:!1,webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1}),await Ro(),n=String(o.webServerLogCsrfToken||""),n))){if(!l.ok)throw new Error(`HTTP ${l.status}`);break}}ur(),t=!0}catch(n){tt({webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!0}),o.webServerLogHistoryError=`De RAM-logbuffer kon niet worden geleegd (${n instanceof Error?n.message:"onbekende fout"}).`}finally{o.busyAction="",o.systemModal==="webserver-logs"&&h()}let r=o.webServerLogHistoryError;return o.systemModal==="webserver-logs"&&(await Ro(),r&&(o.webServerLogHistoryError=r,h())),t}function TS(){let e=oo();St(),tt({webServerLogEnabled:null,webServerLogConnected:!1,webServerLogCsrfToken:""}),ur(),o.systemModal==="webserver-logs"&&Ro({scrollState:e})}function dc(){if(dr()){St();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs"&&o.busyAction!=="clear-webserver-log-history")){St();return}if(o.webServerLogEnabled===!1){St();return}o.webServerLogSource||ES()}function ES(){if(dr()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",h();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",h();return}try{let e=new window.EventSource(oS());o.webServerLogSource=e,e.addEventListener("open",CS),e.addEventListener("ping",xS),e.addEventListener("log",$S),e.onerror=MS}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",St(),h()}}function St(){let e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function CS(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?oo():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",h(),ro(e)}nm({clearOutput:ur,closeStream:St,resetRecoveryState:TS});function xS(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?oo():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",h(),ro(e))}function MS(){if(!o.webServerLogSource)return;let e=o.systemModal==="webserver-logs"?oo():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",St(),h(),ro(e)}function $S(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;let t=oo(),r=_S(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(u=>u.trim()!=="");if(n.length===0)return;let i=n.map(u=>ac(u)).filter(u=>!yS(u)&&!SS(u));if(i.length===0)return;rc(i);let l=DS(),c=pc();HS(l),NS(i,l),o.webServerLogEnabled=!0,c&&t&&ro(t,!1)}function _S(e){let t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";let r=t.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function AS(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function RS(e){let t=String(e??""),r=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){let u=l[c];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}let n=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function HS(e){for(;o.webServerLogEntries.length>Lm;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function DS(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function pc(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function NS(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(let r of e)t.insertAdjacentHTML("beforeend",Jm(r))}}function Jm(e){let t=Fm(e.receivedAt),r=iS(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function OS(e=o.webServerLogEntries){return e.length?e.map(t=>Jm(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function PS(){let e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function LS(){let e=qi(),t=o.loadingEntities||!!o.busyAction,r=sS(),n=lS(),a=IS();return`
    <div class="oq-webserver-log-history-shell">
      ${Fe({dataValue:"webserverLogHistory",label:"RAM log history",value:r,note:n,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${t?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>`})}
      ${a}
    </div>
  `}function IS(){let e=nc();if(!e)return"";let t=jm(e),r=cS(e),n=o.loadingEntities||!!o.busyAction;return`
    ${Fe({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",note:"DEBUG is tijdelijk en wordt na een herstart teruggezet naar INFO. Bij veel Modbusverkeer kan DEBUG zoveel logging produceren dat de web-app en Home Assistant traag of onbereikbaar worden.",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===r?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function FS(){return o.webServerLogEntries.map(e=>{let t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Fm(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function jS(){let e=FS();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",h();return}try{if(!await Gr(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&h()}var WS={"open-webserver-log-modal":()=>kS(),"clear-webserver-log-output":()=>qS(),"copy-webserver-log-output":()=>jS()};function Zm(e){return se(WS,e)}function Xm(){let e=dr(),t=o.busyAction==="clear-webserver-log-history",r=!!o.busyAction||o.webServerLogHistoryLoading||!e&&!o.nativeOpen&&!o.webServerLogCsrfToken;return te({id:"system",titleId:"oq-webserver-log-modal-title",kicker:"Diagnostiek",title:"OpenQuatt log",copy:e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde.",className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal",closeAction:"close-system-modal",closeLabel:"Sluit logboek",body:`
        ${LS()}
        ${PS()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${OS()}
          </div>
        </div>`,actions:`
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output" ${r?"disabled":""}>${t?"Legen...":"Legen"}</button>
      <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
    `})}function VS(){let e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function mc(e){return VS().includes(e)}function Ci(){let e=Qr(),t=oe(),r=ct(),n=Hm();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:S("firmwareUpdateTarget")&&mc("alternate connection")&&S("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:lt(r),targetLabel:lt(n),currentBuildLabel:Co(t,r),targetBuildLabel:Co(t,n)}}function xi(){let e=Qr(),t=oe(),r=Dm(),n=ct(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!r||!a.includes(n)?null:{canSwitch:S("firmwareUpdateTarget")&&mc("alternate topology")&&S("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:sr(t),targetLabel:sr(r),currentBuildLabel:Co(t,n),targetBuildLabel:Co(r,n)}}function Mi(e,t){let r=Qr(),n=oe(),a=ct(),i=ir(e),l=Jn(t),c=i&&i!==n,u=l&&l!==a,d=c&&u?"alternate topology and connection":c?"alternate topology":u?"alternate connection":"current build",m=r==="heatpump_controller_q"&&["single","duo"].includes(n)&&["single","duo"].includes(i)&&["wifi","eth"].includes(a)&&["wifi","eth"].includes(l),w=S("firmwareUpdateTarget"),v=mc(d),f=S("installFirmwareUpdateTarget");return{available:m,canSwitch:m&&d!=="current build"&&w&&v&&f,targetEntityAvailable:w,targetOptionAvailable:v,installActionAvailable:f,currentTopology:n,currentConnection:a,targetTopology:i,targetConnection:l,targetOption:d,currentBuildLabel:Co(n,a),targetBuildLabel:Co(i,l)}}function mr(e=o.updateTestFirmwarePr){let t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function tn(){let e=Qr(),t=oe(),r=ct(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${t}-${r}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${lt(r)}`}}function Zn(e=mr(),t=tn()){if(!e||!t.available)return null;let n=`${`https://github.com/OpenQuatt/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:n,md5Url:`${n}.md5`,releaseApiUrl:`https://api.github.com/repos/OpenQuatt/OpenQuatt/releases/tags/pr-${e}`}}function Do(){if(dt())return"Controleren";let e=kt();if(e)return e.phaseLabel;if(fc())return"Bijgewerkt";if(pr())return"Bezig";if(fr())return"Beschikbaar";let t=ag();if(t!==null&&t<=0)return"Actueel";let r=Ot();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||ng()?"Actueel":ve()?"Nog niet gecontroleerd":"\u2014"}function ve(){return o.entities.firmwareUpdate||null}function $i(){let e=ve();return e?String(e.state??e.value??"").trim().toLowerCase():""}function BS(){let e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Xn(){return BS().toLowerCase()}function og(){let e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function gc(){let e=String(o.updateInstallTargetVersion||"").trim(),t=le();return!e||!t?!1:ea(t,e)>=0}function KS(e=ve()||{}){let t=no(e),r=le(e);return!t||!r?!1:ea(r,t)>=0}function rg(){return(gc()||KS())&&!dt()&&!en()&&!fr()}function zS(){return o.updateInstallMode===""||o.updateInstallMode==="test-firmware"?!!(o.ota.id&&!o.ota.wait):!en()&&!pr()&&gc()}function fc(){return(o.updateInstallCompleted||rg())&&!dt()&&!kt()&&!fr()}function gr(){Ae({updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:""}),ek()}function It(){o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallStatusPollObserved=!1}function xe(){Ae({updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:""})}function rt(e={}){Ae({...e.clearPr?{updateTestFirmwarePr:""}:{},updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null})}function US(){let e=Xn(),t=og(),r=e!=="rebooting"||!o.updateInstallBusy||o.updateInstallStatusPollObserved;if((e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting")&&r){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(o.updateInstallMode==="normal"&&gc()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function en(){let e=Xn();return e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"}function GS(){let e=Xn();return e==="error"?"De firmware-installatie op het device is mislukt. Controleer de netwerkverbinding en probeer opnieuw.":e==="aborted"?"De firmware-installatie is door het device afgebroken. Probeer de installatie opnieuw.":""}function kt(){US();let e=Xn(),t=e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"&&(!o.updateInstallBusy||o.updateInstallStatusPollObserved),r=t?e:o.updateInstallPhaseHint,n=og(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(n)?Math.round(n):a;return!en()&&!o.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="retrying"?{phaseLabel:"Opnieuw proberen",percent:0,copy:"De eerste verbinding voor de firmwaredownload mislukte. OpenQuatt probeert het automatisch nog \xE9\xE9n keer."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${ot()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${lt(o.updateInstallTargetConnection)}-build wordt nu naar ${ot()} verzonden.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`De ${Co(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${ot()} verzonden.`:`Firmware wordt nu naar ${ot()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${ot()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${lt(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`Opstellingswissel naar ${sr(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${ot()}.`}}function no(e=ve()||{}){let t=String(e.latest_version||"").trim();if(t)return t;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function le(e=ve()||{}){let t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function QS(e=ve()||{}){let t=le(e),r=String(e.current_version||"").trim();return!t||!r||t===r?!1:ea(t,r)>0}function hc(e=ve()||{},t=Ho()){let r=String(t||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=no(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function eg(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function ea(e,t){let r=eg(e),n=eg(t);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function pr(){if(rg())return!1;let e=$i();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function dt(){let e=$i();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function fr(){let e=$i();if(!hc())return!1;let t=ag();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Ot().updateAvailable===!0}function ng(){let e=$i();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||QS()}function bc(){let e=ve()||{},t=le(e)||"\u2014",r=hc(e)?no(e):"",n=r?ea(r,t):null;return!dt()&&n!==null&&n<=0&&(r=""),{current:t,latest:r||"\u2014"}}function ag(){let{current:e,latest:t}=bc();return e==="\u2014"||t==="\u2014"?null:ea(t,e)}function ig(e=Ho()){let t=String(e||"").trim().toLowerCase();return Ns[t]||Ns.main}function YS(){let e=String((ve()||{}).release_url||"").trim(),t=ig();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function JS(){return ot()}function Ho(){return String(E("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function ZS(){return bc().latest!=="\u2014"}function tg(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function XS(e,t=ve()||{}){let r=tg(e);return r?tg(`${t.title||""} ${t.summary||""}`).includes(r):!0}function sg(e){return new Promise(t=>window.setTimeout(t,e))}function on(e=vo){let r=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),r),o.pendingEntitySyncOptions=null,dp(),typeof St=="function"&&St(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&ll()},e)}function ek(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||ll()}function lg(){return o.deviceReconnectMode?te({modalId:"reconnect",titleId:"oq-reconnect-modal-title",kicker:"Systeem",title:Kp(),modalClass:"oq-helper-modal--reconnect",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">${s(zp())}</p>
        <div class="oq-helper-reconnect-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>${s(Vp())}</strong>
            <span>${s(Bp())}</span>
          </div>
        </div>
      `}):""}function ta(e=Ho()){let t=ve()||{},r=le(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:ig(e),current_version:r}}async function oa(e={}){let t=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await sg(r===0?900:1200),await z($t,"all",{forceMissing:!0});let n=hc(),a=!t||XS(t),i=ZS(),l=dt(),c=Do();if(n&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function hr(e={}){let t=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await sg(a===0?r:n);try{let i=o.entities.firmwareUpdateStatus,l=o.ota.wait?[...$t,"uptime"]:$t;await z(l,"all",{forceMissing:!0});let c=Xn();o.entities.firmwareUpdateStatus!==i&&(o.updateInstallStatusPollObserved=!0);let u=GS();if(u){let d=new Error(u);throw d.firmwareInstallTerminal=!0,d}if(c==="rebooting"&&o.updateInstallStatusPollObserved&&To("ota"),h(),o.updateInstallMode==="connection-switch"){let d=Jn(o.updateInstallTargetConnection);if(d&&ct()===d&&!en()&&!pr())return Kr(),!0}else if(o.updateInstallMode==="topology-switch"){let d=ir(o.updateInstallTargetTopology);if(d&&oe()===d&&!en()&&!pr())return Kr(),!0}else if(o.updateInstallMode==="build-switch"){let d=ir(o.updateInstallTargetTopology),m=Jn(o.updateInstallTargetConnection);if(d&&m&&oe()===d&&ct()===m&&!en()&&!pr())return Kr(),!0}else if(zS())return Kr(),!0}catch(i){if(i?.firmwareInstallTerminal)throw tr(),i;t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",h(),t=!0)}}return Br(),!1}function tk(){let e=Ho(),t=kt();if(t)return t.copy;if(fc()){let r=o.updateInstallCompletedVersion||le()||Ho();return`${ot()} draait nu op ${r}.`}return pr()?`OTA-update wordt voorbereid voor ${ot()}. Het device kan kort herstarten.`:dt()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:fr()?"Er staat een nieuwere firmware klaar.":ng()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function cg(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function Ei(e,t,r,n,a=!1){return`
      <button
        class="oq-firmware-advanced-option${n?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${n?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </button>
    `}function ok(e,t,r,n){if(!cg())return"";let i=!!(kt()||o.updateInstallBusy||dt());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?Ei("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,o.firmwareConnectionSwitchOpen,i):""}
          ${r?Ei("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,o.firmwareTopologySwitchOpen,i):""}
          ${Ei("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",o.updateManualUploadOpen,i)}
          ${Ei("toggle-firmware-test","Testfirmware","PR-release installeren",o.updateTestFirmwareOpen,i)}
        </div>
        ${rk()}
        ${nk()}
        ${ik()}
        ${ak()}
      </div>
    `}function rk(){let e=Ci();if(!e||!o.firmwareConnectionSwitchOpen)return"";let r=!!(kt()||o.updateInstallBusy||dt()),n=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(Ho())}-build voor de andere netwerkverbinding.</span>
        </div>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${s(l)}</p>
        ${c}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${n?"checked":""} ${r||i?"disabled":""}>
          <span>${s(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${r||i||!n?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function nk(){let e=xi();if(!e||!o.firmwareTopologySwitchOpen)return"";let r=!!(kt()||o.updateInstallBusy||dt()),n=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(Ho())}-build voor de andere Single/Duo-opstelling.</span>
        </div>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${s(l)}</p>
        ${c}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-topology-confirm="true" ${n?"checked":""} ${r||a?"disabled":""}>
          <span>${s(i?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Ik begrijp dat HP2-bediening na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-topology-switch"
            ${r||a||!n?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function ak(){if(!o.updateTestFirmwareOpen)return"";let t=!!(kt()||o.updateInstallBusy||dt()),r=mr(),n=tn(),a=Zn(r,n),i=!!(n.available&&S("firmwareTestOtaUrl")&&S("firmwareTestOtaMd5Url")&&S("installFirmwareTestOta")),l=!!(r&&i),c=o.updateTestFirmwareBuild||null,u=n.available?n.label:n.error,d=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Testfirmware</strong>
          <span>PR-release voor gericht testen. Gebruik dit alleen als iemand je expliciet vraagt om een PR te testen.</span>
        </div>
        <div class="oq-firmware-test-grid">
          <label class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">PR-nummer</span>
            <input
              class="oq-helper-input oq-helper-input--compact-number oq-firmware-test-pr-input"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="244"
              value="${s(o.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${t?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(d)}</strong>
          </div>
          ${c?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(c)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":n.error)}</p>`}
        ${o.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(o.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${o.updateTestFirmwareConfirmed?"checked":""} ${t||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${t||!l||!o.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function ik(){if(!o.updateManualUploadOpen)return"";let t=!!(kt()||o.updateInstallBusy||dt()),r=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Handmatige upload</strong>
          <span>Gebruik dit alleen als je een geschikte OTA-firmware hebt gedownload, bij voorkeur een *.firmware.ota.bin uit de release.</span>
        </div>
        <div class="oq-firmware-advanced-card">
          <span class="oq-helper-modal-label">Firmwarebestand</span>
          <input
            class="oq-settings-backup-input oq-settings-backup-import-input"
            type="file"
            accept=".bin,application/octet-stream"
            data-oq-firmware-upload-file-input="true"
            ${t?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${s(r?`Gekozen bestand: ${r}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${o.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${t||!o.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function ug(){if(!o.updateModalOpen)return"";let e=ve(),t=o.entities.firmwareUpdateChannel||null,{current:r,latest:n}=bc(),a=dt(),i=pr(),l=fr(),c=tk(),u=kt(),d=fc(),m=YS(),w=d?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":JS(),v=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],f=Ci(),g=xi(),p=!!(f&&!d),b=!!(g&&!d);return te({id:"firmware-update",titleId:"oq-update-modal-title",kicker:"OTA-update",title:w,copy:c,backdropClass:a||i||u?"is-busy":"",className:"oq-helper-modal--firmware oq-helper-modal--scrollable",closeAction:"close-update-modal",closeLabel:"Sluit update-popup",body:`
          ${d?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${u?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(u.phaseLabel)}</strong>
                <span>${s(`${u.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,u.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(Do())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${s(Ho())}</strong>
            </div>
          </div>
          ${v.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${v.map(y=>`
                  <option value="${s(y)}" ${String(E("firmwareUpdateChannel")||"")===y?"selected":""}>${s(y)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen. Bestaande OpenQuatt-instellingen blijven behouden.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${d?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${m?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(m)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${cg()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${ok(p,f,b,g)}`})}function Ft(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function jt(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Ai(e=o.debugRecordingDeviceStatus){return jt(e)&&e?.frozen===!0&&!e?.active}function br(e){let t=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function pg(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):mg()}function mg(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;let e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function ra(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Ai()?"Rolling gestopt":o.debugRecordingActive&&jt()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":Ft()>0?"Voltooid":"Niet gestart"}function Ri(){return Ai()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&jt()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Ft()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function gg(){return Ai()?"Gestopt":o.debugRecordingActive&&jt()?`Rolling \xB7 ${br(pg())}`:o.debugRecordingActive?`Loopt \xB7 ${br(fg())}`:Ft()>0?"Klaar":ra()}function sk(){let e=Number(o.debugRecordingSelectedMinutes||15);return Qa.map(r=>Number(r.minutes)).includes(e)?e:Number(Qa[0]?.minutes||15)}function lk(e){o.debugRecordingActive||(li({debugRecordingSelectedMinutes:Math.max(1,Number(e)||15),debugRecordingNotice:"",debugRecordingError:""}),h())}function fg(){return jt()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function ck(){if(o.debugRecordingDeviceStatus){if(jt()){let a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Ft()/a*100))}let r=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&Ft()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return Ft()>0?100:0;let e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function hg(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function bg(e){if(e?.recording?.active)return;let t=hg(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function wc(){let e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";let r=!!e.active;if(!r&&hg(e)===o.debugRecordingAcknowledgedId)return"";let n=jt(e),a=br(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=br(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",c=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${r?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(c)}"
      title="${s(c)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function uk(){if(!o.root)return;if(o.interfacePanelOpen){h();return}let e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let t=e.querySelector(".oq-debug-recording-header-status"),r=wc();if(!r){t?.remove();return}if(t){t.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function dk(){if(!o.root)return;let e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let t=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=ra()),r&&(r.textContent=Ri())}function vc(e){let t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function pk(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${vc(e)}</span>`}function ao(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${vc(e)}</span>`}function mk(){return[...Go]}function gk(){let e=[];return Go.forEach((t,r)=>{let n=o.entities?.[t]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function fk(e){return Array.isArray(e)?e.map((t,r)=>t===null?null:[r,t]).filter(Boolean):[]}function Hi(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function wr(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function No(e){return`${Ne()}/openquatt/debug-recording/${e}`}function rn(e){let t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function yc(){rn({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function hk(){let e=await window.fetch(No("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return rn(t),t}function na(e=2e3){wr(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{Di({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function Di(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",h());try{await hk(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),na()}catch(t){yc(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?h():(uk(),dk())}}async function wg(){let e=Jl(Go,"state"),t=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(No(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);t=await n.json()}if(Number(t?.entity_field_count||0)!==Go.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Go.length})`);return t}async function bk(e){let t=Math.max(1,Number(e)||15);Hi(),wr(),li({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),h();try{await wg();let r=await window.fetch(No(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();rn(n),na()}catch(r){yc(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{o.debugRecordingBusy=!1,h()}}async function wk(){Hi(),wr(),li({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),h();try{await wg();let e=await window.fetch(No("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();rn(t),na()}catch(e){yc(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,h()}}async function vk(){let e=await window.fetch(No("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return rn(t),wr(),t}async function yk(){Hi(),o.debugRecordingBusy=!0,o.debugRecordingError="",h();try{await vk(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,h()}}async function Sk(e={}){Hi(),wr(),o.debugRecordingBusy=!0,o.debugRecordingError="",h();try{let t=await window.fetch(No("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();rn(r),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,h()}}function dg(e={}){let t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(yd/1e3),sample_count:Ft(),column_count:Go.length,storage:"browser"},columns:mk(),units:gk(),initial:fk(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function _i(e){return JSON.stringify(e)}function kk(){let e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([_i(dg())]).size}catch{return _i(dg()).length}}function qk(e){let t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function Tk(e){let t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function Ek(){if(Ft()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",h();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&jt();h();try{let t=await window.fetch(No("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();o.debugRecordingDeviceBundle=r,Fl(Tk(r),_i(r),"application/json"),bg(r),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,h()}}async function Ck(){if(Ft()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",h();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&jt();h();try{let t=await window.fetch(No("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();if(o.debugRecordingDeviceBundle=r,!await Gr(_i(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");bg(r),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,h()}}var xk={"open-debug-recording-modal":()=>(o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",h(),Di()),"start-debug-recording":e=>bk(e.dataset.debugMinutes||15),"start-rolling-debug-recording":()=>wk(),"select-debug-recording-duration":e=>lk(e.dataset.debugMinutes||15),"stop-debug-recording":()=>Sk(),"freeze-debug-recording":()=>yk(),"download-debug-recording":()=>Ek(),"copy-debug-recording":()=>Ck()};function vg(e,t){return se(xk,e,t)}function yg(){let e=o.debugRecordingActive,t=jt(),r=Ai(),n=Ft(),a=o.debugRecordingBusy,i=qk(kk()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,c=sk(),u=fg(),d=pg(),m=ck(),w=n>0,v=`${m.toFixed(1)}%`,f=[{icon:"status",label:"Status",value:ra()},{icon:"clock",label:t?"Retentie":"Duur",value:br(t?d:mg())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],g=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return te({id:"system",titleId:"oq-debug-recording-modal-title",kicker:"Diagnostiek",title:"Debugopname",copy:Ri(),className:"oq-debug-recording-modal",closeAction:"close-system-modal",closeLabel:"Sluit debugopname",body:`
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${vc("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${br(d)} bewaard`:`Nog ${br(u)}`)}</span>
                <strong>${s(t?`${n}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(m)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(v)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${f.map(p=>`
              <div class="oq-debug-recording-stat">
                <dt>${pk(p.icon)}${s(p.label)}</dt>
                <dd>${s(p.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        ${e&&t?`
          <section class="oq-debug-recording-duration" aria-label="Rolling debug">
            <h3>Rolling debug</h3>
            <p class="oq-helper-modal-copy">Download of kopieer maakt een momentopname van de huidige buffer. Stop rolling zet de buffer vast.</p>
          </section>
        `:`
          <section class="oq-debug-recording-duration" aria-label="Duur">
            <h3>Duur</h3>
            <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
              ${Qa.map(p=>{let b=Number(p.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${b?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${p.minutes}"
                    aria-pressed="${b?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(p.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${ao("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${ao("stop")}Stop opname</button>
          `:r?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ao("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ao("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ao("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ao("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!w||a?"disabled":""}>${ao("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!w||a?"disabled":""}>${ao("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${g?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${g.kind}" role="status">
              ${ao(g.icon)}
              <span>${s(g.text)}</span>
            </p>
          `:""}
        </div>`})}function kg(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function aa(e){o.interfacePanelOpen=e===!0}function Sc(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Ni(e,t={}){o.settingsGroup=Ie.has(e)?e:ye[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&er(t.syncMode||"replace")}function qg(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Tg(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function Mk(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){Bn();return}Xo()}function $k(){let e=Qs();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=Mk,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function _k(){return Object.keys(o.entities).length>0}function Ak(){return Gs+Math.floor(Math.random()*(Ad-Gs+1))}function Rk(){return(document.hidden?Ln:Td)+Ak()}function Eg(e=Rk()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||ci()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await qe(),Eg()},e))}function kc(){Eg()}function qc(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}up({start:kc,stop:qc});function Hk(){o.nativeOpen||(qc(),kc(),document.hidden||qe({forceProbe:!0}))}function Oi(e={}){if(ia(),o.nativeOpen){qc(),Bn(),o.nativeFrontendLoaded||Pi();return}if(Xo(),kc(),e.refresh!==!1){if(!_k()){Cm();return}qe({forceFast:!0})}}function Dk(){let e=zn()||So(),t=e==="settings"?fl()||o.settingsGroup:"",r=e==="control"?pl()||"status":o.controlReplayTab,n=e==="control"?ml()||"last24":o.controlReplayWindow,a=e==="control"?gl():null;if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup)&&(e!=="control"||r===o.controlReplayTab&&n===o.controlReplayWindow&&(!a||a.start===o.controlReplayCustomStart&&a.end===o.controlReplayCustomEnd)))){if(o.appView=e,e==="control"&&(o.controlReplayTab=r,o.controlReplayWindow=n,o.controlReplayCustomStart=a?.start||"",o.controlReplayCustomEnd=a?.end||"",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError=""),e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}h(),qe({forceFast:!0})}}function ia(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Cg(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Sg,{once:!0}):Sg(),window.addEventListener("pointermove",wp),window.addEventListener("pointerup",vp),window.addEventListener("popstate",Dk),document.addEventListener("visibilitychange",Hk)}function Sg(){Nk();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===Os),o.mounted||(Ok(e),o.mounted=!0,Oi()),ia(),o.nativeOpen||(qe(),Di({silent:!0}))}function Nk(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Ok(e){let t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",gp),t.addEventListener("change",mp),t.addEventListener("input",fp),t.addEventListener("keydown",hp),t.addEventListener("wheel",kp,{passive:!1}),t.addEventListener("focusin",cl),t.addEventListener("focusout",cl),t.addEventListener("mouseover",Sp),t.addEventListener("mouseout",yp),t.addEventListener("pointerdown",bp),o.root=t,$k();let r=zn()||So(),n=r==="settings"?fl():"",a=r==="control"?pl():"",i=r==="control"?ml():"",l=r==="control"?gl():null;n&&Ni(n,{syncUrl:!1}),a&&(o.controlReplayTab=a),i&&(o.controlReplayWindow=i,o.controlReplayCustomStart=l?.start||"",o.controlReplayCustomEnd=l?.end||""),Rt(r,{syncMode:"replace",forceSync:!0}),Vn(),h()}function Pk(e){return new Promise((t,r)=>{if(!e){t();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",()=>t(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function Pi(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&h();try{await Pk(Os),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,Sc("app"),h(),Oi()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&h()}}}function sa(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Lk(){return"Login"}function Ik(){let e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function la(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function nn(){if(o.apiSecurityError)return"Niet beschikbaar";let e=o.apiSecurityStatus;return e?e.transport_active===!0?"Actief":e.provisioning_closed===!0?"Niet beschikbaar":e.provisioning_pending===!0?"Wacht op koppeling":"Niet beschikbaar":"Laden..."}function an(){if(o.apiSecurityError)return"De beveiligingsstatus kon niet worden opgehaald. Controleer de verbinding met het apparaat en probeer het opnieuw.";let e=o.apiSecurityStatus;return e?e.transport_active===!0?"De beveiliging voor Home Assistant is ingesteld.":e.provisioning_pending===!0?"Dit apparaat is nog niet gekoppeld. Na een opstart kan Home Assistant 10 minuten lang de beveiligde verbinding instellen. Daarna worden nieuwe koppelpogingen geweigerd.":e.provisioning_closed===!0?"De eerste koppeling is niet binnen 10 minuten gelukt. Zet het apparaat kort uit en weer aan om opnieuw te proberen.":"De beveiligde verbinding is tijdelijk niet beschikbaar.":"Beveiligde verbinding wordt gecontroleerd."}function Fk(){return"Beveiligde verbinding met Home Assistant"}function jk(){return"Home Assistant regelt deze beveiliging automatisch. Je hoeft hier niets in te stellen."}function Li(e,t,r="",n=!1){return`
      <div class="oq-helper-modal-row${n?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${n?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(t)}</span>
          </span>
        `:s(t)}</strong>
      ${r?`<span class="oq-helper-modal-subvalue">${s(r)}</span>`:""}
    </div>
    `}function xg(){return te({id:"system",titleId:"oq-api-security-modal-title",kicker:"Toegang",title:Fk(),copy:jk(),className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit API-beveiliging popup",body:`
        <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
          <div class="oq-helper-modal-grid">
            ${Li("Status",nn(),an())}
            ${Li("Beheer","Automatisch door Home Assistant","De beveiligingssleutel wordt automatisch ingesteld en bewaard.")}
          </div>
        </div>`,actions:'<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Gereed</button>'})}function Mg(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=t||r,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",u=n?`
        ${n?`<p class="oq-helper-modal-intro">${t?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${t?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(o.authDraftCurrentPassword)}"
                  ${o.authBusy?"disabled":""}
                >
              </label>
            `:""}
          <label class="oq-helper-modal-auth-field">
            <span>Nieuwe gebruikersnaam</span>
            <input
              class="oq-helper-input"
              type="text"
              autocomplete="username"
              maxlength="32"
              data-oq-auth-field="username"
              value="${s(o.authDraftUsername)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="newPassword"
              value="${s(o.authDraftNewPassword)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Herhaal nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="confirmPassword"
              value="${s(o.authDraftConfirmPassword)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return te({id:"system",titleId:"oq-login-modal-title",kicker:"Systeem",title:Lk(),copy:Ik(),closeAction:"close-system-modal",closeLabel:"Sluit login-popup",body:`
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${Li("Beveiligingsstatus",sa(),la())}
            ${Li("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
        ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
        ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}`})}function ca(e,t,r){let n=R(t),a=R(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=R(e);return Number.isFinite(i)?i:NaN}function Tc(e="oq-settings-grid"){let t=Wk();return`
      <div class="${s(e)}">
        ${ue("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function Wk(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>S(r.offsetKey)&&S(r.finalKey));if(!e.length)return"";let t=r=>{let n=Ue(r.offsetKey),a=ca(r.rawKey,r.finalKey,r.offsetKey),i=Ee(Re(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?eo(a+i,n.uom||"\xB0C",2):Ce(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(Ce(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?eo(a,n.uom||"\xB0C",2):Ce(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Mo({key:r.offsetKey,value:Re(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${s(l)}</strong>
            </div>
          </div>
        </article>
      `};return`
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Water in/out offsets</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>
        <div class="oq-settings-hp-offset-list">
          ${e.map(t).join("")}
        </div>
      </div>
    `}function $g(){return re("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Tc())}function _g(e,t){let r=R(e),n=R(t),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function Vk(e){let t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function Me(e){let t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function vr(e){let t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function sn(e){return Vk(e)&&!vr(e)}function Ii(e="",t=""){let r=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=d=>{let m=String(d||"").trim().toUpperCase();return m?r===m||r.startsWith(`${m}:`)||r.startsWith(`${m} `)||a.includes(m):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let u=(l[n]||[]).find(d=>d.match.some(m=>i(m)));return u||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function ln({taskKey:e,title:t,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:u="",metrics:d="",className:m=""}){return`
      <article class="oq-settings-commissioning-card${m?` ${s(m)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
          </div>
        </div>
        ${c?`<div class="oq-settings-commissioning-card-actions">${c}</div>`:""}
        ${u}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(i)}</p>
            </div>
          </div>
        </div>
        ${d?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${d}</div>`:""}
      </article>
    `}function Bk({status:e,running:t,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){let u=String(e||"").toUpperCase(),d=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),m=u.includes("APPLIED"),w=S("hp2WaterIn")||S("hp2WaterOut")||S("hp2WaterInRaw")||S("hp2WaterOutRaw"),v=R("hpWaterCalibrationStableProgress"),f=R("hpWaterCalibrationStableRequired"),g=R("hpWaterCalibrationRemaining"),p=Math.round(R("hpWaterCalibrationPhase")),b=t&&(p===1||u.includes("MIXING")),y=t&&!b,k=300,q=60,T=Number.isFinite(g)?Math.max(0,k-g):NaN,M=Number.isFinite(T)?Math.max(0,q-T):NaN,A=b&&Number.isFinite(T)?Math.max(0,Math.min(100,T/q*100)):y&&Number.isFinite(v)&&Number.isFinite(f)&&f>0?Math.max(0,Math.min(100,v/f*100)):t&&Number.isFinite(g)?Math.max(0,Math.min(100,100-g/k*100)):r?100:0,H=r&&S("hpWaterCalibrationResultSpreadBefore")?Ce("hpWaterCalibrationResultSpreadBefore",2):Ce("hpWaterCalibrationSpread",2),j=b?"Water mengen":Number.isFinite(v)&&Number.isFinite(f)&&f>0?v>0?`${Math.round(Math.max(0,v))} / ${Math.round(f)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",I=r?3:t?2:1,W=m?"Offsets toegepast":r?`Meting klaar - spreiding ${H}`:t?b?`Water mengen${Number.isFinite(M)&&M>0?` - meting start over ${Math.round(M)} s`:""}`:`Meting bezig - ${Number.isFinite(g)&&g>0?`max. ${Math.round(g)} s resterend`:j}`:d?"Meting niet voltooid":"Voorbereiding",x=m?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":t?b?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":d?_o("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):w?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",O=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>S(P.liveKey)||S(P.rawKey)||S(P.offsetKey)),D=(P,V)=>{let X=I>P;return`
        <div class="oq-settings-hp-calibration-step${X?" is-done":""}${I===P?" is-active":""}">
          <span>${X?"\u2713":P}</span>
          <strong>${s(V)}</strong>
        </div>
      `},N=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(Ce(P.liveKey,2))}</strong>
        </article>
      `,J=P=>{let V=R(P.resultRawKey),X=Number.isFinite(V)?V:ca(P.rawKey,P.liveKey,P.offsetKey),Pe=R(P.suggestedKey),Ct=Number.isFinite(X)&&Number.isFinite(Pe)?eo(X+Pe,o.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(X)?eo(X,o.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(Ce(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(Ce(P.suggestedKey,2))}</span></td>
          <td>${s(Ct)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${D(1,"Voorbereiding")}
          ${D(2,"Meting")}
          ${D(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":t?" is-active":d?" is-warning":""}">
          <div>
            <strong>${s(W)}</strong>
            <p>${s(x)}</p>
          </div>
          ${t||r?`<span>${s(t?j:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${A.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${O.map(N).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(Ce("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(Ce("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(Ce("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(Ce("hpWaterCalibrationSupplyDelta",2))}</span>
            </div>
            <div class="oq-settings-hp-calibration-table-wrap">
              <table class="oq-settings-hp-calibration-table">
                <thead>
                  <tr>
                    <th scope="col">Sensor</th>
                    <th scope="col">Raw gemiddelde</th>
                    <th scope="col">Huidig actief</th>
                    <th scope="col">Voorstel</th>
                    <th scope="col">Na toepassen</th>
                  </tr>
                </thead>
                <tbody>
                  ${O.map(J).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${cr({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?Qe("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function Ag(){let e=S("boilerCvAssistEnabled")&&C("boilerCvAssistEnabled"),t=Si(),r=C("cm100Active"),n=String(t||"").trim().toUpperCase(),a=vr(t),i=!a&&(r||n==="CM100 READY"),l=o.commissioningTaskLock==="cm100",c=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,u=!!o.pendingCommissioningCm100Start,d=c||i||a,m=c||!i,w=lr("boilerPowerTestStatus","IDLE"),v=Ii(w,"boiler"),f=C("boilerPowerTestActive"),g=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",p=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),b=!!o.pendingBoilerPowerTestStart,y=o.commissioningTaskLock==="boiler",k=vr(w),T=!Me(w)&&(f||b||y||sn(w))&&!k,M=He("boilerRatedHeatPower"),A=He("boilerHeatPower"),H=R("boilerHeatPower"),j=H>0?A:T&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:A;H>0&&(o.commissioningBoilerHeatPowerDisplay=A);let I=lr("flowAutotuneStatus","IDLE"),W=Ii(I,"autotune"),x=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",O=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),D=!!o.pendingFlowAutotuneStart,N=o.commissioningTaskLock==="autotune",J=vr(I),V=!Me(I)&&(D||N||sn(I))&&!J,X=lr("airPurgeStatus","IDLE"),Pe=Ii(X,"purge"),Ct=C("airPurgeActive"),ht=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",uo=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),xt=!!o.pendingAirPurgeStart,Le=o.commissioningTaskLock==="purge",pe=!Me(X)&&(Ct||xt||Le||sn(X)),Mn=/DONE/.test(String(X||"").toUpperCase()),Rr=!!(uo||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),$=He("airPurgeRemaining",{decimals:0}),_=R("airPurgePhase"),B=_===1?"Rustig":_===2?"Pulsen":_===3?"Stabiliseren":Pe.phase,K=lr("manualFlowStatus","IDLE"),ee=C("manualFlowActive"),ne=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",fe=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),he=!!o.pendingManualFlowStart,ce=o.commissioningTaskLock==="manual-flow",be=!Me(K)&&(ee||he||ce||sn(K)),Ze=lr("manualHpStatus","IDLE"),po=C("manualHpActive"),De=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",mo=!!(o.entities.manualHpStart||o.entities.manualHpAbort),go=!!o.pendingManualHpStart,Ke=o.commissioningTaskLock==="manual-hp",$e=!Me(Ze)&&(po||go||Ke||sn(Ze)),$n=/SAFETY STOP/.test(String(Ze||"").toUpperCase()),ze=/STOPPING/.test(String(Ze||"").toUpperCase()),ho=lr("hpWaterCalibrationStatus","IDLE"),Cw=Ii(ho,"hp-water-calibration"),sd=C("hpWaterCalibrationActive"),Oa=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",ld=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),Pa=!!o.pendingHpWaterCalibrationStart,bo=o.commissioningTaskLock==="hp-water-calibration",Xe=!Me(ho)&&(sd||Pa||bo||sn(ho)),La=/DONE|APPLIED/.test(String(ho||"").toUpperCase()),cd=/APPLIED/.test(String(ho||"").toUpperCase()),xw=He("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Mw=He("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),ud=/DONE|APPLIED/.test(String(w||"").toUpperCase()),dd=/DONE|APPLIED/.test(String(I||"").toUpperCase()),Rs=i?k?"Wachten op CM100":T?v.phase:ud?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Hs=i?J?"Wachten op CM100":V?W.phase:dd?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Ds=i?pe?Pe.phase:Mn?"Klaar":"Klaar om te starten":"Wachten op CM100",pd=i?be?"Actief":"Klaar om te starten":"Wachten op CM100",md=i?$e?ze?"Bezig met stoppen":$n?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",gd=i?Xe?Cw.phase:cd?"Offsets toegepast":La?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",fd=!i||g||!p||V||pe||be||$e||Xe||T||N||Le||ce||Ke||bo||b,$w=g||!(T||y||b),_w=g||fd||!ud||V||pe||Xe,hd=!i||x||!O||T||pe||be||$e||Xe||V||y||Le||ce||Ke||bo||D,Aw=x||!(V||N||D),Rw=x||hd||!dd||T||pe||Xe,Hw=!i||ht||!uo||T||V||be||$e||Xe||pe||y||N||ce||Ke||bo||xt,Dw=ht||!(pe||Le||xt),Nw=!i||ne||!fe||T||V||pe||$e||Xe||be||y||N||Le||Ke||bo||he,Ow=ne||!(be||ce||he),Pw=!i||De||!mo||T||V||pe||be||Xe||$e||y||N||Le||ce||bo||go,Lw=De||!($e||Ke||go),Iw=!i||Oa||!ld||T||V||pe||be||$e||Xe||y||N||Le||ce||Ke||Pa,Fw=Oa||!(Xe||bo||Pa),jw=Oa||Xe||!La||cd;u&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(o.commissioningTaskLock=""),b&&(f||Me(w))&&(o.pendingBoilerPowerTestStart=!1),y&&Me(w)&&(o.commissioningTaskLock=""),D&&Me(I)&&(o.pendingFlowAutotuneStart=!1),N&&Me(I)&&(o.commissioningTaskLock=""),xt&&(Ct||Me(X))&&(o.pendingAirPurgeStart=!1),Le&&Me(X)&&(o.commissioningTaskLock=""),he&&(ee||Me(K))&&(o.pendingManualFlowStart=!1),ce&&(ee||Me(K))&&(o.commissioningTaskLock=""),go&&(po||Me(Ze))&&(o.pendingManualHpStart=!1),Ke&&(po||Me(Ze))&&(o.commissioningTaskLock=""),Pa&&(sd||Me(ho))&&(o.pendingHpWaterCalibrationStart=!1),bo&&Me(ho)&&(o.commissioningTaskLock="");let Ww=a?"Wachten op CM100":t,Vw=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Bw=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:gd,available:!!(ld||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:ln({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:gd,statusCopy:Xe?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":La?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Bk({status:ho,running:Xe,resultReady:La,startDisabled:Iw,abortDisabled:Fw,applyDisabled:jw,busy:Oa,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:pd,available:!!(fe||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:ln({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:pd,statusCopy:be?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${to("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?cr({active:be,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:ne||Nw,stopDisabled:ne||Ow}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Oe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",He("flowSelected"),"oq-settings-field--compact")}
            ${Oe("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",He("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?Qe("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",ne):""}
          ${o.entities.manualFlowApplyCooling?Qe("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",ne):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:md,available:!!(mo||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:ln({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:md,statusCopy:$e?ze?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":$n?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?cr({active:$e,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:De||Pw,stopDisabled:De||Lw}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Ao("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${to("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${S("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Ao("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${to("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Oe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",He("flowSelected"),"oq-settings-field--compact")}
              ${Oe("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",_g("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${S("hp2Compressor")?Oe("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",_g("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Oe("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Oe("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",ko(F("hp1Failures","None")),"oq-settings-field--compact")}
              ${S("hp2Failures")?Oe("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",ko(F("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Hs,available:!0,openDisabled:vr(Hs),cardMarkup:ln({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Hs,statusCopy:J?"Wacht totdat CM100 actief is voordat je autotune start.":V?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?cr({active:V,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:x||hd,stopDisabled:x||Aw}):""}
            ${o.entities.flowAutotuneApply?Qe("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",x||Rw):""}
          `,metrics:`
            ${Oe("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",xw,"oq-settings-field--compact")}
            ${Oe("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Mw,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:Rs,available:e,openDisabled:vr(Rs),cardMarkup:ln({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(M)}`,status:Rs,statusCopy:k?"Wacht totdat CM100 actief is voordat je de boiler-test start.":T?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?cr({active:T,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:g||fd,stopDisabled:g||$w}):""}
            ${o.entities.boilerPowerTestApply?Qe("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",g||_w):""}
          `,metrics:`
            ${Oe("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",j)}
            ${Oe("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",He("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Ds,available:Rr,openDisabled:vr(Ds),cardMarkup:ln({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Ds,statusCopy:pe?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?cr({active:pe,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ht||Hw,stopDisabled:ht||Dw}):""}
          `,metrics:`
            ${Oe("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",$,"oq-settings-field--compact")}
            ${Oe("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",B,"oq-settings-field--compact")}
            ${Oe("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",He("flowSelected"),"oq-settings-field--compact")}
            ${Om("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(Kw=>Kw.available);return{cm100Status:Ww,cm100StartDisabled:d,cm100StopDisabled:m,serviceStatusCopy:Vw,tasks:Bw}}function Kk(e){return Fe({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function Rg(){let e=Ag();return re("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${o.entities.commissioningCm100Start?Qe("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${o.entities.commissioningCm100Stop?Qe("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>Kk(t)).join("")}
          </div>
        </div>
      `)}function Hg(){let e=String(o.systemModal||"").replace(/^service-task-/,""),r=Ag().tasks.find(n=>n.key===e);return r?te({id:"system",titleId:"oq-service-task-modal-title",kicker:"Service",title:r.title,copy:r.summary,className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task",sectionAttributes:"data-oq-service-task-scroller",closeAction:"close-system-modal",closeLabel:`Sluit ${r.title}`,body:`<div class="oq-settings-service-task-modal-body">${r.cardMarkup}</div>`,actions:`${r.modalActions||""}<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>`}):""}function Fi(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${oc("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${oc("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${to("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${to("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function Dg(){return re("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Fi())}function Ng(){return Fi("oq-settings-grid oq-settings-grid--modal")}var ji=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],zk=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Wi(e){let t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return String(e||"").split(/\r?\n/).forEach(r=>{let n=r.split("|");r.startsWith("@bounds|")?(t.storedDayCount=Number(n[1])||0,t.oldestDateKey=Number(n[2])||null,t.newestDateKey=Number(n[3])||null,t.hourStoredDayCount=Number(n[4])||0,t.hourOldestDateKey=Number(n[5])||null,t.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(t.dayPartitionAvailable=Number(n[1])===1,t.dayStorageKb=Number(n[2])||0,t.dayWriteCount=Number(n[3])||0,t.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(n[1])||0,t.hourSlotCount=Number(n[2])||0,t.hourPartitionAvailable=Number(n[3])===1,t.hourRecordCount=Number(n[4])||0,t.hourWriteCount=Number(n[5])||0,t.hourStorageKb=Number(n[6])||0,t.hourLastWriteTimestampS=Number(n[7])||0)}),t}function je(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Ec(e,t,r){return new Date(e,t-1,r,12,0,0)}function Cc(e,t){return new Date(e,t,0).getDate()}function Og(e){return String(e).padStart(2,"0")}function ae(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/1e4),n=Math.floor(t/100)%100,a=t%100;if(r<2020||n<1||n>12||a<1||a>31)return null;let i=new Date(r,n-1,a,12,0,0);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:{key:t,year:r,month:n,day:a,date:i}}function Vi(e){let t=ae(e);return t?`${t.year}-${Og(t.month)}-${Og(t.day)}`:""}function xc(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;let r=Number(t[1]),n=Number(t[2]),a=Number(t[3]),i=Ec(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:ae(je(i))}function Lg(e,t){return Number(e)*100+Number(t)}function Bi(e){return Lg(e.getFullYear(),e.getMonth()+1)}function yr(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/100),n=t%100;return r<2020||n<1||n>12?null:{key:t,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function Ig(e){let t=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(t);return yr(r?Lg(Number(r[1]),Number(r[2])):t)}function Mc(e,t){let r=yr(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(t||0),1,12,0,0);return String(Bi(n))}function cn(e){let t=new Date(e.getTime()),r=t.getDay(),n=r===0?-6:1-r;return t.setDate(t.getDate()+n),t.setHours(12,0,0,0),t}function Sr(e,t){let r=new Date(e.getTime());return r.setDate(r.getDate()+t),r.setHours(12,0,0,0),r}function Pg(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function $c(e){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-r+3);let n=t.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:n}}function _c(e){return je(cn(e))}function Fg(e){let t=xc(e)||ae(e);return t?ae(je(cn(t.date))):null}function Ac(e){let t=ae(e);if(!t)return"Week";let r=cn(t.date),n=Sr(r,6);return`Week ${$c(r).week} (${Pg(r)} - ${Pg(n)})`}function Wt(e,t="day"){let r=ae(e);return r?t==="weekday"?zk[r.date.getDay()]||"":t==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function Uk(e){let t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function Rc(e,t=0){return Object.fromEntries(ji.map((r,n)=>[r,Uk(e[t+n])]))}function jg(e){let t=String(e||"").trim();if(!t||t.startsWith("@"))return null;let r=t.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=ae(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...Rc(r,3)}}function Hc(e){let t=String(e||"").trim();if(!t.startsWith("@current|"))return null;let r=t.split("|");if(r.length<9)return null;let n=Number(r[1]),a=ae(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...Rc(r,2)}:null}function Wg(e){let t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;let r=t.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=ae(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...Rc(r,4)}}function un(e,t){let r=Number(e?.[t]);return Number.isFinite(r)&&r>=0?r:0}var zi=Object.freeze(["cooling_dew_point","outside_temperature","room_temperature","room_setpoint","heating_enable","cooling_enable"]),Ui=Object.freeze(["room_setpoint","heating_enable","cooling_enable"]),Gk=new Set(["coolingDewPointSource","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"]);function dn(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ki(e,t,r=!1){let n=dn(e)?e:{};return Object.fromEntries(t.map(a=>[a,Object.prototype.hasOwnProperty.call(n,a)?n[a]===!0||String(n[a]).toLowerCase()==="true":r]))}function Vg(e){if(!dn(e))return null;let t=Number(e.port||1883);return{enabled:e.enabled===!0,broker:String(e.broker||"").trim(),port:Number.isInteger(t)&&t>=1&&t<=65535?t:1883,username:String(e.username||"").trim(),password_was_set:e.password_set===!0,input_enabled:Ki(e.input_enabled,zi,!0),input_accept_retained:Ki(e.input_accept_retained,Ui,!0)}}function Bg(e){if(e==null)return null;if(!dn(e))throw new Error("MQTT-configuratie in backup is ongeldig.");let t=String(e.broker||"").trim(),r=String(e.username||"").trim(),n=Number(e.port),a=e.enabled===!0;if(!Number.isInteger(n)||n<1||n>65535)throw new Error("MQTT-poort in backup is ongeldig.");if(t.length>64||a&&!t)throw new Error("MQTT-broker in backup is ongeldig.");if(r.length>64)throw new Error("MQTT-gebruikersnaam in backup is ongeldig.");return{enabled:a,broker:t,port:n,username:r,password_was_set:e.password_was_set===!0,input_enabled:Ki(e.input_enabled,zi,!0),input_accept_retained:Ki(e.input_accept_retained,Ui,!0)}}function ua(e){return!!e?.password_was_set}function Kg(e,t){return Gk.has(e)&&/\bMQTT\b/i.test(String(t||""))}function zg(e,t){let r=new Map((t||[]).map(a=>[a.id,new Set(a.keys||[])])),n=[];return Object.entries(dn(e)?e:{}).forEach(([a,i])=>{let l=r.get(a);if(!l){dn(i)?Object.keys(i).forEach(c=>n.push({section:a,key:c})):n.push({section:a,key:a});return}dn(i)&&Object.keys(i).forEach(c=>{l.has(c)||n.push({section:a,key:c})})}),n}var Dc=null;function Ug(e){Dc=typeof e=="function"?e:null}function da(){return Dc?Dc():"?meta=1"}async function Vt(e,t){let r=L[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=ke(e,t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=At(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=et(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!t,a=n?"turn_on":"turn_off",i=await fetch(Q(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function Qk(e){if(typeof e?.value=="boolean")return e.value;let t=String(e?.state??e?.value??"").trim().toLowerCase();return["on","true","1"].includes(t)?!0:["off","false","0"].includes(t)?!1:null}async function Gg(e,t){let r=L[e];if(!r||r.domain!=="switch")throw new Error(`Onbekende schakelaar ${e}.`);let n=await fetch(Q(r.domain,r.name),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`Controleren mislukt: HTTP ${n.status}`);let a=Qk(await n.json());if(a===null)throw new Error(`${r.name} gaf geen geldige status terug.`);return a===!!t}function Nc(){let e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Yk(){return Nc()?Yo:Yo.filter(e=>e<=168)}function pa(e){let t=Yk(),r=Number(e);return t.includes(r)?r:Number.isFinite(r)&&r>t[t.length-1]?t[t.length-1]:t.includes(_t)?_t:t[0]}function pn(e){o.trendWindowHours=pa(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function Zk(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function Xk(e){return e.some(t=>Zi(t)!==void 0)}function eq(e){let t=new Set;for(let r of e){let n=tf(r.date_key??r.dateKey??r.date??r.from??Zi(r));if(n){if(t.has(n))return!0;t.add(n)}}return!1}function Jg(e){return e.some(Zk)||Xk(e)&&eq(e)}function tq(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function oq(e={}){return{enabled:e?.enabled===!0,available:e?.available===!0,storedEvents:Math.max(0,Number(e?.stored_events)||0),capacityEvents:Math.max(0,Number(e?.capacity_events)||5120),retentionDays:Math.max(0,Number(e?.retention_days)||7),oldestEpochS:Math.max(0,Number(e?.oldest_epoch_s)||0),newestEpochS:Math.max(0,Number(e?.newest_epoch_s)||0),lastFlushEpochS:Math.max(0,Number(e?.last_flush_epoch_s)||0),storageBytes:Math.max(0,Number(e?.storage_bytes)||0),writeCount:Math.max(0,Number(e?.write_count)||0)}}async function rq(e={}){let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogStorageMetadataFetchPromise)return o.decisionLogStorageMetadataFetchPromise;if(!t&&(o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError)&&r-Number(o.decisionLogStorageMetadataLastFetchAt||0)<_n)return!1;o.decisionLogStorageMetadataFetchPromise=(async()=>{let n=await fetch(`${Ne()}/openquatt/decision-log?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(!a?.ok)throw new Error("ongeldig antwoord");let i=JSON.stringify(a),l=i!==o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError!=="";return o.decisionLogStorageMetadata=oq(a),o.decisionLogStorageMetadataError="",o.decisionLogStorageMetadataSignature=i,o.decisionLogStorageMetadataLastFetchAt=Date.now(),l})();try{return await o.decisionLogStorageMetadataFetchPromise}catch(n){let a=`Beslisloghistorie kon niet worden geladen. ${n.message}`,i=o.decisionLogStorageMetadataError!==a;return o.decisionLogStorageMetadata={},o.decisionLogStorageMetadataError=a,o.decisionLogStorageMetadataSignature="",o.decisionLogStorageMetadataLastFetchAt=Date.now(),i}finally{o.decisionLogStorageMetadataFetchPromise=null}}function nq(e){let t=tq();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){t.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");t.available=n[1]||t.available,t.oldest=n[2]||t.oldest,t.newest=n[3]||t.newest,t.lastFlush=n[4]||t.lastFlush,t.sizeKb=Number(n[5])||0,t.writes=Number(n[6])||0}),t}async function Zg(e={}){if(!S("trendHistoryEnabled")&&!gn()){let n=!!(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError);return o.trendHistoryMetadata={},o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=0,n}let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryMetadataFetchPromise)return o.trendHistoryMetadataFetchPromise;if(!t&&(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError)&&r-Number(o.trendHistoryMetadataLastFetchAt||0)<_n)return!1;o.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${Ne()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=nq(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,c=l!==o.trendHistoryMetadataSignature||o.trendHistoryMetadataError!=="";return o.trendHistoryMetadata=i,o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature=l,o.trendHistoryMetadataLastFetchAt=Date.now(),c})();try{return await o.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=o.trendHistoryMetadataError!==a;return o.trendHistoryMetadata={},o.trendHistoryMetadataError=a,o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{o.trendHistoryMetadataFetchPromise=null}}async function Ji(e={}){await z(Xt(),"all",{concurrency:Gt,forceMissing:e.forceMissing===!0}),await Promise.all([Zg({force:e.forceTrendHistory===!0}),rq({force:e.forceDecisionLog===!0}),kr({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Po(e=[250,1e3,2500],t={}){e.forEach(r=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||Ji({forceMissing:r===0,forceTrendHistory:t.forceTrendHistory===!0,forceDecisionLog:t.forceDecisionLog===!0,forceEnergyHistory:t.forceEnergyHistory===!0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&h()})},r)})}var aq="@schema|openquatt.energy_history_import.v1",iq=850,ma=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],sq={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},qt={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function mn(e){let t=String(e||"").trim();return ma.some(r=>r.id===t)?t:"days_and_hours"}function Xg(e){let t=mn(e);return ma.find(r=>r.id===t)||ma[1]}function lq(e){let t=Xg(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${r}.json`}async function cq(){if(o.energyHistoryExportBusy)return;let e=mn(o.energyHistoryExportMode),t=Xg(e);if(Ht({energyHistoryExportMode:e,energyHistoryExportBusy:!0,energyHistoryExportError:"",energyHistoryExportNotice:""}),h(),gn()){o.energyHistoryExportBusy=!1,o.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,h();return}try{let r=await fetch(`${Ne()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();Il(n,lq(e)),o.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(r){o.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{o.energyHistoryExportBusy=!1,h()}}function ef(e=!1){let t=e?o.energyHistoryImportNotice:"";Ht({energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:t})}function tf(e){if(e==null||e==="")return 0;let t=String(e).trim(),r=of(t);if(r)return r.dateKey;let n=t.match(/^\d{8}$/)?.[0]||t.match(/^(\d{4})-(\d{2})-(\d{2})$/)?.slice(1).join(""),a=n?ae(n):null;if(!a){let i=new Date(t);a=Number.isNaN(i.getTime())?null:ae(je(i))}return a&&a.year<=2099?a.key:0}function Qg(e){let t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function Zi(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function of(e){if(e==null||e==="")return null;let t=String(e).trim(),r=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),c=Number(r[4]),u=Number(r[5]||"0"),d=Number(r[6]||"0");if([a,i,l,c,u,d].some(p=>Number.isNaN(p)))return null;let m=n?new Date(t):new Date(a,i-1,l,c,u,d,0);if(Number.isNaN(m.getTime()))return null;let w=m.getFullYear(),v=m.getMonth()+1,f=m.getDate(),g=m.getHours();return w<2020||w>2099||v<1||v>12||f<1||f>31?null:{dateKey:w*1e4+v*100+f,hour:g}}function rf(e){if(e==null||e==="")return null;let t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function Oo(e,t,r=null){for(let n of t){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=rf(e[n]);if(a!==null)return a}return r}function Gi(e,t){return Oo(e,t)!==null}function nf(e){let t=tf(e.date_key??e.dateKey??e.date??e.from??Zi(e));if(!t)return null;let r=Oo(e,qt.electricalInput),n=Oo(e,qt.heatpumpHeatOutput);if(r===null||n===null)return null;let a=Oo(e,qt.heatingInput,r),i=Oo(e,qt.coolingInput,0),l=Oo(e,qt.heatpumpCoolingOutput,0),c=Oo(e,qt.boilerHeatOutput,0),u=Oo(e,qt.systemHeatOutput,n+c),d=Gi(e,qt.heatingInput)||Gi(e,qt.coolingInput)||Gi(e,qt.heatpumpCoolingOutput)||Gi(e,qt.systemHeatOutput);return[a,i,l,c,u].some(m=>m===null)?null:{dateKey:t,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:u,hasFullImportFields:d}}function uq(e){let t=rf(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;let r=Zi(e);if(r){let n=String(r).trim(),a=of(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let c=Number(l[1]);if(c>=0&&c<=23)return c}}return-1}function dq(e){let t=nf(e),r=uq(e);return!t||r<0||r>23?null:{...t,hour:r}}function pq(e){let t=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(u=>String(u).trim()!=="")&&t.push(r),r=[]};for(let u=0;u<e.length;u+=1){let d=e[u];a?d==='"'&&e[u+1]==='"'?(n+='"',u+=1):d==='"'?a=!1:n+=d:d==='"'?a=!0:d===","?i():d===`
`?l():d!=="\r"&&(n+=d)}if((n||r.length)&&l(),!t.length)return[];let c=t.shift().map(u=>String(u||"").trim());return t.map(u=>{let d={};return c.forEach((m,w)=>{m&&(d[m]=u[w]??"")}),d})}function Qi(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function mq(e){let t=[],r=[];if(Array.isArray(e)){let l=e.map(Qi);return Jg(l)?r.push(...l):t.push(...l),{dailyRows:t,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(Qi)),r.push(...i.map(Qi)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{r.push(Qi({...c,date:c.date??l.date}))})}),{dailyRows:t,hourlyRows:r,source:n}}function gq(e,t){let r=String(t||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let g=mq(JSON.parse(r));n=g.dailyRows,a=g.hourlyRows,i=g.source}else{let g=pq(r);Jg(g)||String(e||"").toLowerCase().includes("hour")?a=g:n=g,i="CSV"}let l=new Map,c=new Map,u=0,d=0;n.forEach(g=>{let p=nf(g);if(!p){d+=1;return}l.has(p.dateKey)&&(u+=1),l.set(p.dateKey,p)}),a.forEach(g=>{let p=dq(g);if(!p){d+=1;return}let b=`${p.dateKey}:${p.hour}`;c.has(b)&&(u+=1),c.set(b,p)});let m=[...l.values()].sort((g,p)=>g.dateKey-p.dateKey),w=[...c.values()].sort((g,p)=>g.dateKey-p.dateKey||g.hour-p.hour);if(!m.length&&!w.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let v=[...m.map(g=>g.dateKey),...w.map(g=>g.dateKey)].sort((g,p)=>g-p),f=v.length?`${Qg(v[0])} t/m ${Qg(v[v.length-1])}`:"";return{records:m,hourRecords:w,source:i,range:f,duplicates:u,invalid:d}}function fq(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function hq(e){let t=new Map;return e.forEach(r=>{t.has(r.dateKey)||t.set(r.dateKey,new Map),t.get(r.dateKey).set(r.hour,r)}),[...t.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(c=>c.hasFullImportFields);for(let c=0;c<24;c+=1){let u=n.get(c);u&&(a|=1<<c),l?i.push(u?.electricalInputWh??0,u?.heatingInputWh??0,u?.coolingInputWh??0,u?.heatpumpHeatOutputWh??0,u?.heatpumpCoolingOutputWh??0,u?.boilerHeatOutputWh??0,u?.systemHeatOutputWh??0):i.push(u?.electricalInputWh??0,u?.heatpumpHeatOutputWh??0,u?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function af(e){let t=new URLSearchParams;return t.set("records",[aq,...e].join(`
`)),o.energyHistoryCsrfToken&&t.set("csrf_token",o.energyHistoryCsrfToken),t}function bq(e){let t=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(af(a)).length>iq?(t.push(r),r=[n]):r=a}),r.length&&t.push(r),t}function wq(e){let t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);let r=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function vq(e){let t=await fetch(`${Ne()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:af(e)}),r=await t.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!t.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(sq[a]||a||`HTTP ${t.status}`)}return n}function sf(e){let t=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return t?t.slice(6):""}async function yq(){if(gn())return;let e=await fetch(`${Ne()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=sf(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");o.energyHistoryCsrfToken=t}function Sq(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,h()}async function kq(e){if(ef(),!e){h();return}Ht({energyHistoryImportFileName:e.name||"exportbestand"});try{let t=gq(e.name||"",await e.text());Ht({energyHistoryImportRecords:t.records,energyHistoryImportHourRecords:t.hourRecords,energyHistoryImportSource:t.source,energyHistoryImportRange:t.range,energyHistoryImportDuplicateCount:t.duplicates,energyHistoryImportInvalidCount:t.invalid})}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}h()}function qq(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),kq(t)},{once:!0}),document.body.appendChild(e),e.click()}async function Tq(){if(o.energyHistoryImportBusy)return;let e=[...o.energyHistoryImportRecords.map(fq),...hq(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",h();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,h(),gn()){let n=new Set(o.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,h();return}let t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await yq();let n=bq(e);for(let a of n){let i=await vq(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),r+=a.length,Sq(r,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=wq(t),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await Ji({forceMissing:!0,forceEnergyHistory:!0})}catch(n){o.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,h()}}function Eq(){return Jt()||o.appView==="settings"&&o.systemModal==="history-storage"}function ga(){o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupError="",o.settingsBackupBusy=!1}function Cq(){return{device:ot(),installation:Pt(),topology:typeof oe=="function"?oe():"",firmware_version:le(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function lf(e){let t=L[e];if(!t)return;if(e==="setupComplete")return ti();let r=E(e);if(r===""||r===null||r===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return C(e);if(t.domain==="number"){let a=Ee(r);return Number.isNaN(a)?void 0:a}return t.domain==="time"?At(r)||void 0:t.domain==="datetime"?et(r)||void 0:String(r||"").trim()||void 0}function cf(e=null){let t={};return Yt.forEach(r=>{let n={};r.keys.forEach(a=>{let i=lf(a);i!==void 0&&(n[a]=i)}),t[r.id]=n}),{schema_version:Us,exported_at:new Date().toISOString(),source:Cq(),settings:t,mqtt:e}}async function uf(){let e=await fetch("/mqtt/status",{cache:"no-store"});if(e.status===404)return null;if(!e.ok)throw new Error(`MQTT-status HTTP ${e.status}`);return e.json()}function xq(e=cf()){let t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function Oc(e){let t=L[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function Yg(e,t){if(t==null||t==="")return"\u2014";let r=L[e];return r?r.domain==="number"?Y(e,t):r.domain==="time"?At(t)?.slice(0,5)||"\u2014":r.domain==="datetime"?et(t)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function Mq(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Pc(e){let t=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=qd,a=0,i=0,l=0,c=0,u=0,d=0,m=0,w=0,v=Yt.map(f=>{let g=t[f.id]&&typeof t[f.id]=="object"?t[f.id]:{},p=0,b=0,y=0,k=0,q=0,T=0,M=0,A=f.keys.map(H=>{let I=!!L[H]?.optional,W=Object.prototype.hasOwnProperty.call(g,H),x=W?g[H]:void 0,O=lf(H),D=S(H),N=W?Yg(H,x):I?"Niet op huidige installatie":"Ontbreekt in backup",J=D?Yg(H,O):I?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",P="same";return!W&&I?P="optional-missing":W?D?JSON.stringify(O)!==JSON.stringify(x)&&(P="different"):P=I?"optional-unavailable":"current-missing":P="missing",D&&(M+=1,w+=1),P!=="same"&&(T+=1,m+=1),I?(q+=1,W?(y+=1,l+=1):(k+=1,c+=1)):W?(p+=1,a+=1):(b+=1,i+=1),{key:H,label:Oc(H),optional:I,hasBackupValue:W,backupDisplay:N,currentDisplay:J,status:P,statusLabel:Mq(P)}});return d+=f.keys.filter(H=>!L[H]?.optional).length,{id:f.id,label:f.label,present:p,currentPresent:M,requiredTotal:f.keys.filter(H=>!L[H]?.optional).length,optionalTotal:q,optionalPresent:y,optionalMissing:k,requiredMissing:b,total:f.keys.length,differenceCount:T,rows:A}});return Object.entries(t).forEach(([f,g])=>{if(!Yt.some(p=>p.id===f)){u+=1;return}!g||typeof g!="object"||Object.keys(g).forEach(p=>{n.has(p)||(u+=1)})}),{source:r,sectionSummaries:v,requiredPresent:a,requiredMissing:i,requiredAvailable:d,optionalPresent:l,optionalMissing:c,unknown:u,differenceCount:m,currentPresent:w,requiredTotal:d,total:wo.length}}function $q(e,t=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<1||n>Us)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i=n>=2?Bg(r.mqtt):null,l={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,mqtt:i,file_name:t||""};return l.summary=Pc(l),l}async function _q(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",h();try{await z(wo,"all");let e=await uf();return cf(Vg(e))}finally{o.settingsBackupBusy=!1,h()}}async function Aq(){if(!o.settingsBackupBusy)try{let e=await _q();am(xq(e),e),o.controlNotice="Settings-backup gedownload.",h()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,h()}}async function df(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",h();try{let t=await e.text();await z(wo,"all");let r=$q(t,e.name||"");o.settingsBackupDraft=r,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,h()}}}function We(e,t,r,n="",a="warning"){return{key:e,section:t,label:{"mqtt.config":"MQTT-configuratie"}[e]||(e.startsWith("mqtt.")?e.replace(/^mqtt\./,"MQTT ").replaceAll("_"," "):Oc(e)),reason:r,detail:n,severity:a}}function Rq(e){return zg(e?.settings,Yt).map(({section:t,key:r})=>({key:r,section:t,label:Oc(r),reason:"Onbekend veld",detail:"Deze firmware kent dit veld niet; de waarde is niet toegepast.",severity:"warning"}))}async function Yi(e,t,r){let n=new URLSearchParams;n.set("csrf_token",t),Object.entries(r).forEach(([l,c])=>n.set(l,String(c)));let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`)}async function Hq(e,t){if(!e)return null;if(ua(e)&&!t)throw new Error("MQTT-wachtwoord ontbreekt.");let r=await uf(),n=String(r?.csrf_token||"");if(!r||!n)throw new Error("MQTT-configuratie is niet beschikbaar op deze firmware.");return await Yi("/mqtt/save",n,{enabled:!1,broker:e.broker,port:e.port,username:e.username,password:t||"",clear_password:!e.password_was_set}),{csrfToken:n,mqtt:e}}async function Dq(e,t){if(!e)return;let{csrfToken:r,mqtt:n}=e;for(let a of zi)await Yi("/mqtt/input/save",r,{input:a,enabled:n.input_enabled[a]}),t.push(`mqtt.input_enabled.${a}`);for(let a of Ui)await Yi("/mqtt/input/retained/save",r,{input:a,accept_retained:n.input_accept_retained[a]}),t.push(`mqtt.input_accept_retained.${a}`);n.enabled&&await Yi("/mqtt/save",r,{enabled:!0,broker:n.broker,port:n.port,username:n.username,password:"",clear_password:!1}),t.push("mqtt.config")}function pf(e,t){return e&&!t}function Nq(e,t,r){return!pf(e,t)||r}async function Oq(){let e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;let t=String(o.settingsBackupMqttPassword||"");if(ua(e.mqtt)&&!t){o.settingsBackupError="Vul het MQTT-wachtwoord in om deze backup te herstellen.",h();return}o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",h();let r=[],n=[],a=Rq(e),i=[],l=!1,c=!1,u=!0,d=null,m=!1,w=e.mqtt?"":"Backup bevat geen MQTT-configuratie.";try{if(await z([...wo,"usageTelemetryEnabled"],"all"),c=C("setupComplete"),e.mqtt)try{d=await Hq(e.mqtt,t)}catch(p){w=String(p?.message||p),n.push(We("mqtt.config","mqtt","MQTT niet voorbereid",w,"error"))}for(let p of Yt){let b=e.settings?.[p.id]&&typeof e.settings[p.id]=="object"?e.settings[p.id]:{};for(let y of p.keys){if(!Object.prototype.hasOwnProperty.call(b,y)){n.push(We(y,p.label,"Ontbreekt in backup","De huidige firmwarewaarde of firmware-default is behouden."));continue}let k=b[y];if(y==="setupComplete"){l=k===!0;continue}if(y==="openquattEnabled")continue;if(Kg(y,k)){i.push({key:y,value:k,section:p});continue}if(!L[y]||!S(y)){n.push(We(y,p.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Vt(y,k),r.push(y)}catch(T){n.push(We(y,p.label,"Schrijven mislukt",String(T?.message||T),"error"))}}}if(d)try{await Dq(d,r),m=!0}catch(p){w=String(p?.message||p),n.push(We("mqtt.config","mqtt","MQTT herstellen mislukt",`${w} MQTT blijft uitgeschakeld.`,"error"))}for(let{key:p,value:b,section:y}of i){if(!m){n.push(We(p,y.label,"MQTT-bron niet toegepast",`${w||"MQTT kon niet worden hersteld."} De huidige bronselectie is behouden.`,"error"));continue}if(!L[p]||!S(p)){n.push(We(p,y.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Vt(p,b),r.push(p)}catch(q){n.push(We(p,y.label,"Schrijven mislukt",String(q?.message||q),"error"))}}let v=e.settings?.operation||{};if(Object.prototype.hasOwnProperty.call(v,"openquattEnabled"))if(!S("openquattEnabled"))n.push(We("openquattEnabled","Bediening","Niet beschikbaar","De OpenQuatt-regeling kon niet naar de backupwaarde worden gezet."));else try{await Vt("openquattEnabled",v.openquattEnabled),r.push("openquattEnabled")}catch(p){n.push(We("openquattEnabled","Bediening","Schrijven mislukt",String(p?.message||p),"error"))}let f=pf(l,c),g=S("usageTelemetryEnabled");if(!Nq(l,c,g))u=!1,n.push(We("usageTelemetryEnabled","Installatie","Gebruiksstatistieken niet beschikbaar","Setup kan niet veilig worden afgerond zolang deze instelling ontbreekt.","error"));else if(f)try{if(await Vt("usageTelemetryEnabled",!1),!await Gg("usageTelemetryEnabled",!1))throw new Error("De controller bevestigde niet dat gebruiksstatistieken uitstaan.");r.push("usageTelemetryEnabled")}catch(p){u=!1,n.push(We("usageTelemetryEnabled","Installatie","Gebruiksstatistieken uitschakelen mislukt",String(p?.message||p),"error"))}if(l&&L.apply&&u)try{let p=await fetch(Q("button","Complete setup","press"),{method:"POST"});if(!p.ok)throw new Error(`HTTP ${p.status}`);r.push("setupComplete")}catch(p){n.push(We("setupComplete","Installatie","Setup bevestigen mislukt",String(p?.message||p),"error"))}else l&&!u?n.push(We("setupComplete","Installatie","Setup bewust niet afgerond","Gebruiksstatistieken konden niet veilig worden uitgeschakeld.","error")):Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push(We("setupComplete","Installatie","Bewust niet toegepast","De setup stond in de backup niet als voltooid."));try{await qe()}catch{}o.settingsBackupRestoreResult={applied:r,skipped:n,unknown:a,mqttIncluded:!!e.mqtt,sourceSchemaVersion:e.schema_version},o.systemModal="settings-backup-success",o.controlNotice=`Backup hersteld (${r.length} toegepast${n.length?`, ${n.length} niet toegepast`:""}${a.length?`, ${a.length} onbekend`:""}).`,ga()}catch(v){o.settingsBackupError=`Backup herstellen mislukt. ${v.message}`,o.settingsBackupMqttPassword=""}finally{o.settingsBackupBusy=!1,h()}}function gn(){return!1}async function Lc(e={}){if(!wt()){let n=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,n}if(gn())return!1;let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&r-Number(o.trendHistoryLastFetchAt||0)<_n)return!1;o.trendHistoryFetchPromise=(async()=>{let n=pa(o.trendWindowHours||_t);n!==o.trendWindowHours&&pn(n);let a=await fetch(`${Ne()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),c=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),u=l.slice(1).join(`
`));let d=`${n}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,m=Number.isFinite(o.trendHistoryNowMs),v=Number.isFinite(c)?!m||o.trendHistoryNowMs!==c:m,f=u!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==d||v;return o.trendHistoryRaw=u,o.trendHistoryError="",o.trendHistorySignature=d,o.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),f})();try{return await o.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function kr(e={}){if(!S("lifetimeEnergyHistoryEnabled")&&!gn()){let a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",o.energyHistoryCsrfToken="",a}let t=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof da=="function"?da():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===n)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===n&&(o.energyHistoryRaw||o.energyHistoryError)&&r-Number(o.energyHistoryLastFetchAt||0)<_n)return!1;o.energyHistoryFetchQuery=n,o.energyHistoryFetchPromise=(async()=>{let a=async p=>{let b=await fetch(`${Ne()}/energy/history${p}`,{cache:"no-store"});if(!b.ok)throw new Error(`HTTP ${b.status}`);return b.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof da=="function"){let p=o.energyHistoryRaw;o.energyHistoryRaw=l;let b=da();o.energyHistoryRaw=p,b&&b!==i&&(i=b,l=await a(i))}let c=l.split(/\r?\n/),u=sf(l)||o.energyHistoryCsrfToken,d=Number.NaN;c.forEach(p=>{p.startsWith("@now|")&&(d=Number(p.slice(5)))});let m=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,w=Number.isFinite(o.energyHistoryNowMs),f=Number.isFinite(d)?!w||o.energyHistoryNowMs!==d:w,g=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==m||f||u!==o.energyHistoryCsrfToken;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=m,o.energyHistoryNowMs=Number.isFinite(d)?d:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,o.energyHistoryCsrfToken=u,g})();try{return await o.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=n,o.energyHistoryCsrfToken="",l}finally{o.energyHistoryFetchPromise=null}}Jp({refreshEnergyHistoryData:kr,refreshSettingsStorageState:Ji,refreshTrendHistoryData:Lc,refreshTrendHistoryMetadata:Zg,shouldRefreshSettingsStorageForCurrentSurface:Eq});var Pq={"flush-trend-history":({triggerNamedButton:e})=>e("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:Xt(),refreshDelayMs:500}).then(()=>{Po(void 0,{forceTrendHistory:!0})}),"flush-decision-log-history":({triggerNamedButton:e})=>e("decisionLogHistoryFlush",{successNotice:"Beslisloghistorie is opgeslagen.",errorPrefix:"Beslisloghistorie kon niet worden opgeslagen",refreshKeys:Xt(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Po(void 0,{forceDecisionLog:!0})}),"clear-decision-log-history":({triggerNamedButton:e})=>{if(window.confirm(`Beslisloghistorie wissen?

Alle bewaarde gebeurtenissen worden verwijderd. De actuele beslislog blijft beschikbaar.`))return e("decisionLogHistoryClear",{successNotice:"Beslisloghistorie is gewist.",errorPrefix:"Beslisloghistorie kon niet worden gewist",refreshKeys:Xt(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Po(void 0,{forceDecisionLog:!0})})},"save-lifetime-energy-history":({triggerNamedButton:e})=>e("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:Xt(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Po(),o.appView==="results"&&kr({force:!0}).then(()=>h())}),"clear-lifetime-energy-history":({triggerNamedButton:e})=>{if(window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return e("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:Xt(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Po(),o.appView==="results"&&kr({force:!0}).then(()=>h())})},"select-energy-history-import-file":()=>qq(),"clear-energy-history-import-file":()=>{ef(),h()},"import-energy-history-file":()=>Tq(),"export-energy-history":()=>cq(),"open-history-storage-modal":()=>{o.settingsStoragePage="overview",o.systemModal="history-storage",h();let e=Ji({forceMissing:!0,forceTrendHistory:!0,forceDecisionLog:!0,forceEnergyHistory:!0}).finally(()=>{o.systemModal==="history-storage"&&h()});return Po([1e3,3e3,7e3]),e},"open-storage-diagnosis":()=>{o.settingsStoragePage="diagnosis",h()},"open-storage-decision-log":()=>{o.settingsStoragePage="decision-log",h()},"open-storage-energy":()=>{o.settingsStoragePage="energy",h()},"back-storage-overview":()=>{o.settingsStoragePage="overview",h()},"download-settings-backup":()=>Aq(),"open-settings-backup-import":()=>{o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.systemModal="settings-backup-import",h()},"confirm-settings-backup-restore":()=>Oq()};function mf(e,t){return se(Pq,e,t)}function Ic(e,t,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function ff(e){let t=String(e||"").trim(),r=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:t}function Xi(e,t,r,n="",a="",i=""){if(!S(e))return"";let l=!!E(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${tc(e,l,n,a)}
        </div>
        ${ut(e,t,l,c)}
      </article>
    `}function Lq(e,t,r,n=""){if(!S(e))return"";let a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(E(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${n?`<span>${s(n)}</span>`:""}
          </div>
          <p>${s(r)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(Te(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function Iq(e){return S(e)||!!L[e]&&!o.optionalMissingEntities?.[e]}function fa(e,t,r,n={}){if(!Iq(e))return"";let a=S(e),i=a&&(o.loadingEntities||o.busyAction===e),l=n.disabled===!0||!a,c=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||t)}
      </button>
    `}function Fq(){return o.trendHistoryMetadata&&typeof o.trendHistoryMetadata=="object"?o.trendHistoryMetadata:{}}function fn(){return!!o.trendHistoryMetadataSignature}function hn(){return!!(o.energyHistoryRaw||o.energyHistorySignature)}function pt(e){return e?"Niet geladen":"Laden..."}function Ve(e,t="\u2014"){if(S(e))return He(e);let r=jq(e);return r==null||r===""?t:r}function jq(e){let t=Fq();if(e==="trendHistoryFlashAvailable")return fn()?t.available||"Alleen live":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return fn()?t.oldest||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return fn()?t.newest||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return fn()?t.lastFlush||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return fn()?ts(t.sizeKb):pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return fn()?ha(t.writes):pt(o.trendHistoryMetadataError);let r=vf(),a=String(o.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?hn()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":hf(r.storedDayCount,"Geen data"):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?hn()?gf(r.oldestDateKey):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?hn()?gf(r.newestDateKey):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?hn()?es(r.dayLastWriteTimestampS):pt(o.energyHistoryError):e==="lifetimeEnergyHistorySize"?hn()?ts(r.dayStorageKb):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?hn()?ha(r.dayWriteCount):pt(o.energyHistoryError):null}function hf(e,t="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function bf(e,t="Nog geen historie"){let r=Math.max(0,Math.round(Number(e)||0));return r<=0?t:`${r} ${r===1?"gebeurtenis":"gebeurtenissen"}`}function wf(){return o.decisionLogStorageMetadata&&typeof o.decisionLogStorageMetadata=="object"?o.decisionLogStorageMetadata:{}}function ts(e,t="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} kB`}function ha(e,t="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:String(Math.round(r))}function gf(e){let t=ae(e);return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function es(e,t="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return t;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function vf(){return Wi(o.energyHistoryRaw)}function Wq(e){let t=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${t.map(r=>`
            <div>
              <span>${s(r.label)}</span>
              <strong>${s(r.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function Fc(e){let t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Bewaartermijn, ruimte en opslagmomenten</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(Wq).join("")}
        </div>
      </details>
    `:""}function yf(){if(!S("trendHistoryEnabled")&&!S("decisionLogHistoryEnabled")&&!S("lifetimeEnergyHistoryEnabled"))return"";let e=C("trendHistoryEnabled"),t=e&&C("trendHistoryFlashEnabled"),r=S("lifetimeEnergyHistoryEnabled"),n=r&&C("lifetimeEnergyHistoryEnabled"),a=S("decisionLogHistoryEnabled"),i=a&&C("decisionLogHistoryEnabled"),l=wf(),c=t?Ve("trendHistoryFlashAvailable","Alleen live"):"Alleen live",u=r?ff(Ve("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return re("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${S("trendHistoryEnabled")?Ic("Diagnose",t?c:e?"Alleen live":"Uit",t?"Blijft bewaard na herstart":"Tijdelijk",e):""}
            ${a?Ic("Beslislog",i?bf(l.storedEvents):"Alleen sinds herstart",i?"Maximaal 7 dagen":"Tijdelijk",i):""}
            ${r?Ic("Energie",u,n?"Blijft bewaard na herstart":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function Vq(){if(!S("lifetimeEnergyHistoryEnabled"))return"";let e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),t>0&&r.push(`${t} uurdagen`),o.energyHistoryImportRange&&r.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&r.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&r.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${n?"":`
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          `}
        </div>
        ${n?`
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${s(o.energyHistoryImportFileName)}</strong>
              ${r.length?`<p>${s(r.join(" \xB7 "))}</p>`:""}
              ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
              ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${o.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${o.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
          ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function Bq(){if(!S("lifetimeEnergyHistoryEnabled"))return"";let e=mn(o.energyHistoryExportMode),t=ma.map(n=>`
      <option value="${s(n.id)}" ${n.id===e?"selected":""}>
        ${s(n.label)}
      </option>
    `).join(""),r=o.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${o.energyHistoryExportBusy?"disabled":""}>
              ${t}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${o.energyHistoryExportBusy?"disabled":""}>
              ${s(r)}
            </button>
          </div>
        </div>
        ${o.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryExportNotice)}</p>`:""}
        ${o.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryExportError)}</p>`:""}
      </div>
    `}function Sf(){let e=["diagnosis","decision-log","energy"].includes(o.settingsStoragePage)?o.settingsStoragePage:"overview",t=S("trendHistoryEnabled")&&C("trendHistoryEnabled"),r=t&&S("trendHistoryFlashEnabled")&&C("trendHistoryFlashEnabled"),n=S("decisionLogHistoryEnabled"),a=n&&C("decisionLogHistoryEnabled"),i=wf(),l=bf(i.storedEvents),c=S("lifetimeEnergyHistoryEnabled"),u=c&&C("lifetimeEnergyHistoryEnabled"),d=c?Ve("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",m=ff(d),w=S("lifetimeEnergyHistoryClear")&&!["Geen data","\u2014"].includes(d),v=t&&S("trendHistoryFlush"),f=a&&S("decisionLogHistoryFlush"),g=S("lifetimeEnergyHistoryCapture"),p=vf(),b=String(o.energyHistoryRaw||"").includes("@hour_retention|"),y=b&&!p.hourPartitionAvailable,k=b?y?"Alleen live":hf(p.hourStoredDayCount,"Geen uurdata"):"Laden...",q=b&&!y?ts(p.hourStorageKb):"\u2014",T=b&&!y?ha(p.hourWriteCount):"\u2014",M=b&&!y?es(p.hourLastWriteTimestampS):"Geen data",A=e==="overview"?"":`
      <button class="oq-settings-storage-back" type="button" data-oq-action="back-storage-overview">
        <span aria-hidden="true">\u2190</span> Opslagoverzicht
      </button>`,H=(N,J,P,V,X,Pe)=>`
      <button class="oq-settings-storage-hub-item${Pe?" is-on":""}" type="button" data-oq-action="${s(N)}">
        <span class="oq-settings-storage-hub-copy">
          <span>${s(J)}</span>
          <strong>${s(P)}</strong>
          <em>${s(V)}</em>
        </span>
        <span class="oq-settings-storage-hub-status">
          <strong>${s(X)}</strong>
          <span aria-hidden="true">\u203A</span>
        </span>
      </button>`,j={title:"Diagnosegeschiedenis",meta:"Technische details",shortLabel:"Diagnose",primary:Ve("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${Ve("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:Ve("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:Ve("trendHistoryFlashSize")},{label:"Opslagacties",value:Ve("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:Ve("trendHistoryFlashLastFlush","Geen data")}]},I={title:"Beslisloghistorie",meta:"Technische details",shortLabel:"Beslislog",primary:a?l:"Alleen sinds herstart",note:i.lastFlushEpochS?`Laatst opgeslagen: ${es(i.lastFlushEpochS)}`:"Nog niet opgeslagen",items:[{label:"Aantal",value:ha(i.storedEvents)},{label:"Ruimte",value:ts(Number(i.storageBytes||0)/1024)},{label:"Schrijfacties",value:ha(i.writeCount)},{label:"Laatste opslag",value:es(i.lastFlushEpochS)}]},W=[{title:"Dagtotalen",meta:"Technische details",shortLabel:"Dag",primary:m,note:`${Ve("lifetimeEnergyHistoryOldest","Geen data")} t/m ${Ve("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:m},{label:"Opslagruimte",value:Ve("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:Ve("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:Ve("lifetimeEnergyHistoryLastWrite","Geen data")}]},S("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Technische details",shortLabel:"Uur",primary:k,note:"Detail voor de daggrafiek",items:[{label:"Dagen bewaard",value:k},{label:"Opslagruimte",value:q},{label:"Opslagacties",value:T},{label:"Laatst opgeslagen",value:M}]}:null],x="Gegevens bewaren",O="Kies welk soort historie je wilt bekijken of aanpassen. Dit verandert niets aan de aansturing van je warmtepomp.",D=`
      <div class="oq-settings-storage-hub">
        ${H("open-storage-diagnosis","Diagnose","Technische meetgegevens","Temperaturen, doorstroming en vermogen voor grafieken en support.",r?Ve("trendHistoryFlashAvailable","Historie actief"):t?"Alleen live":"Uit",t)}
        ${n?H("open-storage-decision-log","Beslislog","Keuzes van de controller","Exacte momenten, redenen, bronwissels en bescherming.",a?`${l} \xB7 max. 7 dagen`:"Alleen sinds herstart",a):""}
        ${c?H("open-storage-energy","Resultaten","Energiehistorie","Dagtotalen en uurdetail voor opbrengst, verbruik en rendement.",u?m:"Uit",u):""}
      </div>
      <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> gegevens die worden bewaard, blijven beschikbaar na een herstart. Tijdelijke gegevens bestaan alleen zolang de controller online is.</p>`;return e==="diagnosis"?(x="Diagnosegegevens",O="Beheer technische meetreeksen voor diagnosegrafieken en hulp bij problemen.",D=`${A}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Xi("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Deze gegevens zijn tijdelijk en verdwijnen na een herstart.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
          ${Xi("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat ongeveer ieder uur een blok op.","Bestaande geschiedenis blijft staan.","Blijft bewaard na herstart")}
          ${v?`<div class="oq-settings-storage-inline-action"><div><h4>Diagnose nu opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${fa("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!r,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${Fc([j])}`):e==="decision-log"?(x="Beslisloghistorie",O="Bewaar exacte controllerkeuzes en gebeurtenissen, maximaal zeven dagen.",D=`${A}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Xi("decisionLogHistoryEnabled","Beslisloghistorie bewaren","Bewaar exacte momenten en redenen uit de beslislog.","De laatste zeven dagen blijven beschikbaar na een herstart of update.","De actuele beslislog blijft tijdelijk beschikbaar; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${f?`<div class="oq-settings-storage-inline-action"><div><h4>Beslislog nu opslaan</h4><p>Sla nieuwe gebeurtenissen alvast op v\xF3\xF3r een update of herstart.</p></div>${fa("decisionLogHistoryFlush","Nu opslaan","flush-decision-log-history",{disabled:!a,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${Fc([I])}
      ${S("decisionLogHistoryClear")?`<details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Beslisloghistorie wissen</h4><p>Verwijder alle bewaarde gebeurtenissen. De actuele beslislog blijft staan.</p></div>${fa("decisionLogHistoryClear","Historie wissen","clear-decision-log-history",{disabled:Number(i.storedEvents||0)<=0,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div></details>`:""}`):e==="energy"&&(x="Energiehistorie",O="Beheer dagtotalen en uurdetail voor de Resultatenpagina.",D=`${A}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Xi("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Resultaten blijven beschikbaar na een herstart of update.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${Lq("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur bewaart voor de daggrafiek.","Bewaartermijn")}
          ${g?`<div class="oq-settings-storage-inline-action"><div><h4>Vandaag alvast opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${fa("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!u,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${Fc(W)}
      <details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-advanced-body">${Bq()}${Vq()}${S("lifetimeEnergyHistoryClear")?`<div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Energiehistorie wissen</h4><p>Verwijder alle bewaarde dagtotalen en begin opnieuw.</p></div>${fa("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!w,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div>`:""}</div></details>`),te({id:"system",titleId:"oq-history-storage-modal-title",kicker:e==="overview"?"Gegevens":"Gegevens bewaren",title:x,copy:O,className:"oq-helper-modal--scrollable oq-settings-storage-modal",sectionAttributes:"data-oq-history-storage-scroller",closeAction:"close-system-modal",closeLabel:"Sluit gegevens bewaren",body:D,actions:'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>'})}function kf(){let e=o.settingsBackupBusy,t=wo.length,r=Yt.length;return re("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(t))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(r))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">MQTT</span>
              <strong class="oq-settings-backup-stat-value">Zonder wachtwoord</strong>
            </div>
          </div>
          <div class="oq-settings-backup-actions">
            <button
              class="oq-helper-button oq-helper-button--primary"
              type="button"
              data-oq-action="download-settings-backup"
              ${e?"disabled":""}
            >
              ${e?"Bezig...":"Backup downloaden"}
            </button>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-settings-backup-import"
              ${e?"disabled":""}
            >
              Backup herstellen
            </button>
          </div>
          <p class="oq-settings-action-note">De MQTT-configuratie wordt meegenomen, maar het MQTT-wachtwoord nooit. Ontbrekende en onbekende velden worden na restore benoemd.</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
        </div>
      `)}function qf(){let e=o.settingsBackupBusy;return te({id:"system",titleId:"oq-backup-import-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.",className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit backup import popup",body:`
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Backupbestand</span>
            <input
              class="oq-settings-backup-input oq-settings-backup-import-input"
              type="file"
              accept=".json,application/json"
              data-oq-backup-file-input="true"
              ${e?"disabled":""}
            >
            <span class="oq-helper-modal-subvalue">Na selectie openen we automatisch het vergelijkingsoverzicht.</span>
          </div>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>`})}function Tf(){let e=o.settingsBackupDraft;if(!e)return"";let t=e.summary||Pc(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=Pt(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=le(),u=typeof oe=="function"?oe():"",d=l!=="Onbekend"&&u&&l!==u,m=r!=="Onbekend"&&r!==n,w=e.mqtt,v=ua(w),f=v&&!String(o.settingsBackupMqttPassword||""),g=w?w.enabled?"Ingeschakeld":"Uitgeschakeld":"Niet in backup",p=w?`${w.broker||"Geen broker"}:${w.port} \xB7 ${w.password_was_set?"Wachtwoord niet opgeslagen":"Geen wachtwoord ingesteld"}`:"MQTT-configuratie en MQTT-afhankelijke bronselecties worden niet hersteld.",b=d||m?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return te({id:"system",titleId:"oq-backup-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.",className:"oq-helper-modal--wide oq-helper-modal--scrollable",sectionAttributes:"data-oq-settings-backup-restore-scroller",closeAction:"close-system-modal",closeLabel:"Sluit backup-popup",body:`
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(c||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${s(i)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${s(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${s(`${t.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${s(t.differenceCount?`${t.differenceCount} ${t.differenceCount===1?"verschil":"verschillen"} \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`:`Alles komt overeen \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">MQTT-configuratie</span>
              <strong class="oq-helper-modal-value">${s(g)}</strong>
              <span class="oq-helper-modal-subvalue">${s(p)}</span>
            </div>
          </div>
          ${v?`
            <label class="oq-settings-backup-mqtt-password">
              <span class="oq-helper-modal-label">MQTT-wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                autocomplete="current-password"
                data-oq-backup-mqtt-password="true"
                placeholder="Vul het MQTT-wachtwoord opnieuw in"
                ${o.settingsBackupBusy?"disabled":""}
              >
              <span class="oq-helper-modal-subvalue">Het wachtwoord stond bewust niet in de backup en wordt alleen voor deze restore gebruikt.</span>
            </label>
          `:""}
          <div class="oq-settings-backup-modal-sections">
            ${t.sectionSummaries.map(y=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(y.label)}</strong>
                    <em>${s(`${y.total} ${y.total===1?"instelling":"instellingen"} \xB7 ${y.differenceCount?`${y.differenceCount} ${y.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(y.differenceCount?`${y.differenceCount} instelling${y.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${y.rows.map(k=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(k.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(k.label)}</strong>
                          <span>${s(k.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(k.status)}">
                            <span>Backup</span>
                            <strong>${s(k.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(k.status)}">
                            <span>Nu</span>
                            <strong>${s(k.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||m?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy||f?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":f?"Vul MQTT-wachtwoord in":"Herstellen"}</button>
      `})}function os(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,G("installationTopology"),G("hardwareProfileText"),G("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,G("hpGeneration"),G("projectVersionText"),G("releaseChannelText"),jc()].join("|")}function jc(){let e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?qo()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":S("status")&&!C("status")?"Offline":"Bezig"}function Wc(){return String(E("projectVersionText")||"").trim()||"\u2014"}function Kq(){let e=Wc();return e&&e!=="\u2014"?e:Do()}function rs(){let e=o.entities.espInternalTemp;if(!e)return"\u2014";let t=R("espInternalTemp");return Number.isNaN(t)?F("espInternalTemp"):U(t,1,e.uom||" \xB0C")}function zq(){let e=[["Netwerkstatus",jc()],["IP-adres",Jr()]],t=String(E("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);let r=o.entities.wifiSignal;if(r){let n=R("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",U(n,0,r.uom||" dBm")])}return e}function Ef(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function Cf(){return[["installation","Installatie",Pt()],["uptime","Uptime",Yr()],["connectivity","Connectiviteit",jc()],["time","Tijd",ec()],["version","Versie",Kq(),!!ve()],["debugRecording","Debugopname",gg(),!0],["webserverLog","Logboek",Ti(),!0]]}function xf(){return fr()}function Mf(e){return e==="version"&&xf()}function ba(){return`
      <div class="oq-helper-status-grid">
        ${Cf().map(([t,r,n,a])=>{let i=Ef(t),l=!!(a||i),c=Mf(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${c?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(r)}</span>
            <strong class="oq-helper-status-value">${c?`<span class="oq-helper-status-value-text">${s(n)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(n)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Uq(){if(!o.root)return!1;let e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");let t=Cf();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=ba(),!0;for(let[n,a,i,l]of t){let c=e.querySelector(`[data-oq-header-status="${n}"]`);if(!c)return e.outerHTML=ba(),!0;let u=Ef(n),d=!!(l||u);if(c.tagName.toLowerCase()!==(d?"button":"div"))return e.outerHTML=ba(),!0;let m=c.querySelector(".oq-helper-status-label"),w=c.querySelector(".oq-helper-status-value");if(!m||!w)return e.outerHTML=ba(),!0;m.textContent!==a&&(m.textContent=a);let v=Mf(n),f=v?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);w.innerHTML!==f&&(w.innerHTML=f),d?c.setAttribute("data-oq-action",u):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",d),c.classList.toggle("oq-helper-status-item--attention",v)}return!0}function Gq(){return""}function Vc(){return""}function $f(){let e=o.nativeOpen?"native":"app",t=xf();return o.interfacePanelOpen?`
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle oq-helper-hub-toggle--close"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="true"
              aria-label="Sluit interfacepaneel"
              title="Sluit interfacepaneel"
            >\xD7</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Weergave</p>
          <div class="oq-helper-hub-switches">
            <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
            <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Uiterlijk en overzicht</p>
          <div class="oq-helper-hub-actions">
            <button class="oq-helper-button oq-helper-button--ghost oq-helper-hub-action" type="button" data-oq-action="toggle-overview-theme">
              ${o.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${ba()}
          <div class="oq-helper-hub-actions oq-helper-hub-actions--single">
            <button class="oq-helper-hub-action oq-helper-hub-action--warning" type="button" data-oq-action="open-restart-confirm">
              Herstart OpenQuatt
            </button>
          </div>
        </div>
      </aside>
    `:`
        <aside class="oq-helper-hub oq-helper-hub--collapsed" aria-label="Weergave en systeem">
          <div class="oq-helper-hub-head-actions">
            ${wc()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${me("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function _f(){let e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${s(t)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${r}
        </div>
      </div>
    `}Up({getSignature:os,patch:Uq});function Af(){if(o.systemModal==="login")return Mg();if(o.systemModal==="api-security")return xg();if(o.systemModal==="mqtt")return cm();if(o.systemModal==="mqtt-sensors")return um();if(o.systemModal==="connectivity"){let e=zq();return te({modalId:"system",titleId:"oq-system-modal-title",kicker:"Systeem",title:"Connectiviteit",closeAction:"close-system-modal",closeLabel:"Sluit systeem-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
          <div class="oq-helper-modal-grid">
            ${e.map(([t,r])=>`
              <div class="oq-helper-modal-row">
                <span class="oq-helper-modal-label">${s(t)}</span>
                <strong class="oq-helper-modal-value">${s(r)}</strong>
              </div>
            `).join("")}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `})}if(o.systemModal==="settings-backup-restore")return Tf();if(o.systemModal==="settings-backup-import")return qf();if(o.systemModal==="history-storage")return Sf();if(String(o.systemModal||"").startsWith("service-task-"))return Hg();if(o.systemModal==="settings-backup-success"){let e=o.controlNotice||"Backup hersteld.",t=o.settingsBackupRestoreResult||{applied:[],skipped:[],unknown:[],mqttIncluded:!1},r=[...t.skipped,...t.unknown],n=r.length?`
        <details class="oq-settings-backup-result-details" open>
          <summary>
            <span>
              <strong>Niet toegepast</strong>
              <em>${s(`${t.skipped.length} overgeslagen \xB7 ${t.unknown.length} onbekend`)}</em>
            </span>
          </summary>
          <div class="oq-settings-backup-result-list">
            ${r.map(a=>`
              <div class="oq-settings-backup-result-item oq-settings-backup-result-item--${s(a.severity||"warning")}">
                <div>
                  <strong>${s(a.label||a.key)}</strong>
                  <code>${s(`${a.section||"Onbekend"} \xB7 ${a.key}`)}</code>
                </div>
                <div>
                  <strong>${s(a.reason||"Niet toegepast")}</strong>
                  ${a.detail?`<span>${s(a.detail)}</span>`:""}
                </div>
              </div>
            `).join("")}
          </div>
        </details>
      `:"";return te({modalId:"system",titleId:"oq-backup-success-modal-title",kicker:"Beheer",title:"Backup hersteld",closeAction:"close-system-modal",closeLabel:"Sluit bevestiging",className:"oq-helper-modal--wide oq-helper-modal--scrollable",bodyMarkup:`
          <p class="oq-helper-modal-copy">${s(e)}</p>
          <div class="oq-settings-backup-result-summary">
            <div><span>Toegepast</span><strong>${s(String(t.applied.length))}</strong></div>
            <div><span>Niet toegepast</span><strong>${s(String(t.skipped.length))}</strong></div>
            <div><span>Onbekend</span><strong>${s(String(t.unknown.length))}</strong></div>
          </div>
          ${n}
          ${t.mqttIncluded?"":'<p class="oq-settings-action-note oq-settings-action-note--warning">Deze backup bevatte geen MQTT-configuratie. Bestaande MQTT-instellingen en MQTT-afhankelijke bronselecties zijn behouden.</p>'}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `})}if(o.systemModal==="restart-confirm"){let e=o.busyAction==="restartAction";return te({modalId:"system",titleId:"oq-restart-modal-title",kicker:"Systeem",title:"OpenQuatt herstarten?",closeAction:"close-system-modal",closeLabel:"Sluit herstart-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
          </div>
        `})}if(o.systemModal==="silent-settings")return te({modalId:"system",titleId:"oq-silent-settings-modal-title",kicker:"Stille uren",title:"Stille uren instellen",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit stille-uren-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
          <div class="oq-helper-modal-body">
            ${Ng()}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `});if(o.systemModal==="webserver-logs")return Xm();if(o.systemModal==="debug-recording")return yg();if(o.systemModal==="openquatt-pause"){let e=C("openquattEnabled"),t=o.busyAction==="openquatt-regulation",r=S("openquattResumeAt"),n=o.loadingEntities||o.entitySyncInFlight,a=r||!n,i=Fn(),l=Lr(E("openquattResumeAt")),c=Xa();return te({modalId:"system",titleId:"oq-openquatt-pause-modal-title",kicker:"Bediening",title:"Openquatt regeling",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit regeling-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">${e?"Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief.":"De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."}</p>
          ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                <strong>Hervat nu automatisch</strong>
                <span>${s(l)}</span>
              </div>`:""}
          ${a?r?`
              <div class="oq-helper-modal-presets">
                <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${t?"disabled":""}>2 uur</button>
                <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${t?"disabled":""}>8 uur</button>
                <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${t?"disabled":""}>Tot morgenochtend</button>
              </div>
              <div class="oq-helper-modal-channel oq-helper-modal-channel--datetime">
                <span class="oq-helper-modal-label">Hervatten op</span>
                <div class="oq-helper-modal-inline">
                  <label class="oq-settings-control oq-settings-control--datetime">
                    <input
                      class="oq-helper-input"
                      type="datetime-local"
                      step="60"
                      lang="nl-NL"
                      data-oq-field="openquattPauseDraft"
                      data-oq-pause-draft="resume"
                      value="${s(c)}"
                      ${t?"disabled":""}
                    >
                    <span class="oq-settings-time-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" focusable="false">
                        <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                        <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </label>
                  <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${t?"disabled":""}>Plan moment</button>
                </div>
              </div>
            `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t?"disabled":""}>Annuleren</button>
            ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${t?"disabled":""}>Nu inschakelen</button>`}
            <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${t?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
          </div>
        `})}return""}function Qq(e=!1){let t=ei();return t?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(t.label)}</strong>
          <span>${s(t.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${o.loadingEntities||o.busyAction==="save-curveFallbackSupply"||t.isCurrent?"disabled":""}
        >
          ${t.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function Bc(){return`
      <div class="oq-settings-curve-grid">
        ${Se.map(e=>ue(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ue("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Qq()})}
      </div>
    `}function Kc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Ao("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function zc(e="oq-settings-grid"){let t=[ue("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ue("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${Ao("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Wd()?ue("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function Yq(e="oq-settings-grid"){let t=[ue("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ue("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function Uc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ue("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ue("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${Jq()}
      </div>
    `}function Gc(){let e=ie();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-helper-surface oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Ia)}"
          aria-pressed="${e?"false":"true"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Power House</p>
          <h4>Automatisch op basis van je woning</h4>
          <p>Power House schat hoeveel warmte je woning nodig heeft. Dit is meestal de beste keuze als je zonder veel finetuning wilt starten.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt vooral het geschatte warmteverlies van je woning en de buitentemperatuur waarbij verwarmen meestal niet meer nodig is.</li>
            <li>Reageert meer op het gedrag van je woning dan op een vaste temperatuurcurve.</li>
            <li>Handig als je vooral comfort wilt en zo min mogelijk handmatig wilt instellen.</li>
          </ul>
        </button>
        <button
          class="oq-helper-surface oq-settings-strategy-card${e?" is-active":""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Fa)}"
          aria-pressed="${e?"true":"false"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Stooklijn</p>
          <h4>Regelen met een stooklijn</h4>
          <p>Met een stooklijn kies je per buitentemperatuur welke aanvoertemperatuur nodig is. Handig als je dit bewust zelf wilt instellen.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt de curvepunten van <strong>-20\xB0C t/m 15\xB0C</strong> als basis.</li>
            <li>Voelt herkenbaar voor wie gewend is aan een klassieke stooklijn.</li>
            <li>Handig als je de aanvoertemperatuur per buitentemperatuur zelf wilt finetunen.</li>
          </ul>
        </button>
      </div>
    `}function Jq(){if(!S("phResponseProfile"))return"";let e=String(E("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-helper-surface oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${Xr("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${Xr("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:Zr({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return ge("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function Qc(){if(!S("curveControlProfile"))return"";let e=String(E("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>Zr({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return ge("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function Zq(){let e=(N,J=0)=>{let P=R(N);return Number.isNaN(P)?J:Math.max(0,P)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,c=620,u=184,d=46,m=24,w=18,v=40,f=96,g=c-d-m,p=Math.min(20-1.2,i-.35),b=Math.max(20+1.2,l+.35),y=N=>d+(N-p)/Math.max(.01,b-p)*g,k=y(p),q=y(b),T=y(i),M=y(20),A=y(l),H=Math.abs(i-20)>.001,j=Math.abs(l-20)>.001,I=w+24,W=u-v,x=f-44,O=(N,J,P,V="")=>{let Ct=Math.max(k+4,Math.min(q-110-4,N-55)),ht=N-14,uo=x,xt=28,Le=f-x+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${J} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${ht}" y="${uo}" width="${xt}" height="${Le}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${N}" cy="${f}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${V?` oq-ph-concept-tooltip--${V}`:""}" transform="translate(${Ct} ${x})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(J)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},D=[`M ${k.toFixed(1)} ${I.toFixed(1)}`,`L ${T.toFixed(1)} ${f.toFixed(1)}`,`L ${A.toFixed(1)} ${f.toFixed(1)}`,`L ${q.toFixed(1)} ${W.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(U(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(U(i,1,"\xB0C"))} \u2013 ${s(U(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(U(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${k.toFixed(1)}" y="${w}" width="${Math.max(20,T-k).toFixed(1)}" height="${(u-w-v).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${T.toFixed(1)}" y="${w}" width="${Math.max(20,A-T).toFixed(1)}" height="${(u-w-v).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${A.toFixed(1)}" y="${w}" width="${Math.max(20,q-A).toFixed(1)}" height="${(u-w-v).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${k}" y1="${w}" x2="${k}" y2="${u-v}" class="oq-ph-concept-axis"></line>
            <line x1="${k}" y1="${f}" x2="${q}" y2="${f}" class="oq-ph-concept-axis"></line>
            <line x1="${M}" y1="${w}" x2="${M}" y2="${u-v}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${D}" class="oq-ph-concept-curve"></path>

            ${H?`<line x1="${T}" y1="${f-12}" x2="${T}" y2="${f+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${M}" y1="${f-14}" x2="${M}" y2="${f+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${j?`<line x1="${A}" y1="${f-12}" x2="${A}" y2="${f+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${H?`<circle cx="${T}" cy="${f}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${M}" cy="${f}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${j?`<circle cx="${A}" cy="${f}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${H?O(T,"Comfort onder setpoint",U(i,1,"\xB0C"),"below"):""}
            ${O(M,"Setpoint",U(20,1,"\xB0C"),"setpoint")}
            ${j?O(A,"Comfort boven setpoint",U(l,1,"\xB0C"),"above"):""}

            <text x="${k+8}" y="${w+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${k+8}" y="${u-v-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${k}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${q}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${H?`<text x="${T-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(U(i,1,"\xB0C"))}</text>`:""}
            <text x="${M}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(U(20,1,"\xB0C"))}</text>
            ${j?`<text x="${A+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(U(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(U(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(U(i,1,"\xB0C"))} \u2013 ${s(U(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(U(l,1,"\xB0C"))}</span>
          </span>
        </div>
        <div class="oq-ph-concept-notes">
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfort onder</span>
            <p>Bepaalt wanneer extra opwarming begint onder het setpoint.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfortband</span>
            <p>Binnen deze band blijft de directe temperatuurreactie vlak. Een opgebouwde comfort memory kan hier nog wel even doorwerken en loopt daarna rustig af.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Temperatuurreactie</span>
            <p>Bepaalt hoe sterk Power House buiten de comfortband extra of minder warmtevraag als kamercorrectie toevoegt boven op de berekende huisvraag.</p>
          </article>
        </div>
      </div>
    `}function Yc(){let e=[ue("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ue("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ue("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Zq()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Jc(e,t,r){let n=[Ao(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Ao(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${s(e)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${n}
        </div>
      </article>
    `:""}function Rf(){let e=Yq();return re("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${zc()}
        ${e?`
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Flow afstelling</p>
              <h4>Flow Kp en Ki</h4>
              <p>Deze waarden bepalen hoe stevig de flowregeling corrigeert op afwijkingen. Autotune vult hier later een voorstel voor in.</p>
            </div>
            ${e}
          </div>
        `:""}
      `)}function Hf(){let e=ie()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Qc()}
          </div>
          <div class="oq-settings-curve-shell">
            ${Zc()}
          </div>
          ${Bc()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Uc()}
          ${Yc()}
        </div>
      `;return re("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Kc()}
        ${Gc()}
        ${e}
      `)}function Zc(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=Se[0].outdoor,l=Se[Se.length-1].outdoor,c=f=>r.left+(f-i)/(l-i)*n,u=f=>r.top+(70-f)/50*a,d=[20,30,40,50,60,70].map(f=>{let g=u(f);return`
          <line x1="${r.left}" y1="${g}" x2="${560-r.right}" y2="${g}" class="oq-helper-curve-grid" />
          <text x="8" y="${g+4}" class="oq-helper-curve-axis-label">${f}\xB0</text>
        `}).join(""),m=Se.map(f=>`
        <text x="${c(f.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(f.label)}</text>
      `).join(""),w=Se.map(f=>`${c(f.outdoor)},${u(ke(f.key,E(f.key)))}`).join(" "),v=Se.map(f=>{let g=ke(f.key,E(f.key));return`
          <g>
            <circle
              cx="${c(f.outdoor)}"
              cy="${u(g)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===f.key?"is-dragging":""}"
              data-curve-key="${s(f.key)}"
            />
            <text x="${c(f.outdoor)}" y="${u(g)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${g.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${d}
          <polyline points="${w}" class="oq-helper-curve-line" />
          ${v}
          ${m}
        </svg>
      </div>
    `}var Lo=Object.freeze({UNKNOWN:"unknown",SUPPORTED:"supported",UNSUPPORTED:"unsupported"});function Df({linkEntityPresent:e=!1,linkEntityConfirmedMissing:t=!1}={}){return e?Lo.SUPPORTED:t?Lo.UNSUPPORTED:Lo.UNKNOWN}function Nf(e=[],t=Lo.UNKNOWN){return t===Lo.SUPPORTED?[...e]:e.filter(r=>r!=="OpenTherm")}var Of="Automatische ketelovername bij warmtepompstoring",Xq="Laat de cv-ketel overnemen als alle warmtepompen door een storing uitvallen. Dit gebeurt pas na veilige stop en geldige flow, temperatuur en ketelaansturing. OpenQuatt stelt dit zelf vast; je hoeft niets te bevestigen. Een korte communicatiedip telt niet als storing.";function eT(){return An.filter(e=>S(_e(e,"Status"))||S(_e(e,"Load"))||S(Wo(e,"cooling",0)))}function tT(e){return Ee(Re(e))}function oT(e){let t=[];return ja.forEach(r=>{let n=-1/0;Dr.forEach(a=>{let i=Wo(e,r,a),l=tT(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&t.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:t.length===0,invalid:t}}function rT(e){let t=String(E(`hp${e}Mode`)||"").trim(),r=Ee(E(`hp${e}Freq`)),n=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(t),l=a&&r<=.5,c=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:n?t:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function nT(e){let t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Pf(e,t){return S(e)?Mo({key:e,value:Re(e),meta:Ue(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function aT(e){let t=Dr.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Dr.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${Pf(Wo(e,"cooling",r),r)}</div>
            <div role="cell">${Pf(Wo(e,"heating",r),t+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function Ff(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(t),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function iT(e){let t=_e(e,"Enable"),r=_e(e,"Load"),n=_e(e,"Apply"),a=_e(e,"Status"),i=String(E(a)||"").trim()||"Nog niet geladen",l=oT(e),c=rT(e),u=!!E(t),d=o.loadingEntities||o.busyAction===r||o.busyAction===n,m=d||!u||!l.valid||!c.safe||!S(n),w=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${S(r)?Qe(r,o.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",d):""}
      ${S(t)?ut(t,`HP${e} writes vrijgeven`,u,d,"Enable","Locked"):""}
            ${S(n)?Qe(n,o.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",m):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(nT(i))}</p>
        </div>
        ${aT(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(w)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function jf(){let e=eT();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${o.oduRuntimeFrequencyDetailsOpen?" open":""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-odu-runtime-frequency-details">
          <div class="oq-settings-section-head">
            <div class="oq-settings-section-head-meta">
              <p class="oq-helper-label">Experimenteel</p>
              <div class="oq-settings-section-head-meta-badge">
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Runtime only</span>
              </div>
            </div>
            <h3>ODU runtime frequentietabel</h3>
            <p>Lees en schrijf de ODU frequentietabel alleen runtime; waarden worden niet opgeslagen in EEPROM.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body oq-settings-odu-runtime">
          <div class="oq-settings-odu-runtime-warning" role="alert">
            <strong>Schrijft direct naar ODU runtime registers.</strong>
            <p>Gebruik dit alleen voor gecontroleerde tests. Apply werkt alleen wanneer de HP in standby staat, de compressor uit is en de enable-schakelaar bewust aan staat.</p>
            <p>Verlaag koel-frequenties onder de OEM-ondergrens rond 30 Hz alleen met superheat-bewaking. Bij te lage suction superheat kan natte zuigretour richting compressor ontstaan.</p>
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${e.map(t=>iT(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function io(e,t="Aandacht",r="OK",n="warning"){return`<span class="oq-settings-monitoring-badge is-${s(e?n:"clear")}">${s(e?t:r)}</span>`}function qr({label:e,value:t,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${io(n)}
      </div>
    `}function Wf(e){return(e?.incidents||[]).filter(t=>t.active||t.recovering||t.latched&&!t.acknowledged)}function sT(e){let t=_p(e),r=Mp(e.effects),n=yl(e.firstSeenS,e.firstSeenMs),a=yl(e.lastSeenS,e.lastSeenMs),i=[r.length?["Effect",r.join(", ")]:null,n?["Eerste optreden",n]:null,a?["Laatste optreden",a]:null,e.recoveryCondition?["Herstel",$p(e.recoveryCondition)]:null,vl(e.userAction)?["Gebruikersactie",vl(e.userAction)]:null,e.occurrenceCount>1?["Bevestigd",`${e.occurrenceCount} keer sinds controllerstart`]:null].filter(Boolean);return`
      <div class="oq-settings-monitoring-incident">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>${s(xp(e.category))}</p>
            <strong>${s(Gn(e))}</strong>
          </div>
          ${io(t.tone!=="clear",t.label,t.label,t.tone)}
        </div>
        ${i.length?`<dl>${i.map(([l,c])=>`<div><dt>${s(l)}</dt><dd>${s(c)}</dd></div>`).join("")}</dl>`:""}
      </div>
    `}function lT(e){let t=Ap(e),r=Wf(e),n=r.some(c=>c.id==="1002"&&c.active),a=r.some(c=>!c.active&&!c.recovering&&c.latched&&!c.acknowledged&&c.recoveryCondition==="confirmed_odu_power_cycle"),i=Dp(o.incidentAction,e.index),l=o.incidentAction?.pending===!0;return`
      <div class="oq-settings-monitoring-rows">
        <div class="oq-settings-monitoring-row${t.tone==="clear"?"":" is-warning"}">
          <div>
            <p>Warmtepomp ${s(e.index)}</p>
            <strong>${s(t.label)}</strong>
            <span>${s(t.note)}</span>
          </div>
          ${io(t.tone!=="clear",t.tone==="fault"?"Niet beschikbaar":"Begrensd",t.label,t.tone)}
        </div>
        ${r.map(sT).join("")}
        ${n?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-action">
              <button
                class="oq-helper-button oq-helper-button--warning"
                type="button"
                data-oq-action="retry-hp-start"
                data-oq-hp-index="${e.index}"
                ${l?"disabled":""}
              >${o.incidentAction?.pending&&o.incidentAction.hp===e.index&&o.incidentAction.kind==="start_failure_retry"?"Retry wordt verwerkt...":`Startretry HP${e.index}`}</button>
              <span>Alleen na een bevestigde veilige stop; actieve fouten, verbindingsherstel en andere startblokkades blijven gelden.</span>
            </div>
          </div>
        `:""}
        ${a?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-action">
              <button
                class="oq-helper-button oq-helper-button--warning"
                type="button"
                data-oq-action="confirm-hp-power-cycle"
                data-oq-hp-index="${e.index}"
                ${l?"disabled":""}
              >${o.incidentAction?.pending&&o.incidentAction.hp===e.index&&o.incidentAction.kind==="confirm_odu_power_cycle"?"Bevestiging wordt verwerkt...":`ODU-powercycle HP${e.index} bevestigen`}</button>
              <span>Alleen nadat buitenunit HP${s(e.index)} werkelijk spanningsloos is geweest; dit geeft uitsluitend de herstelde safety-latch van deze HP vrij.</span>
            </div>
          </div>
        `:""}
        ${i.visible?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-head">
              <div>
                <p>Herstelactie</p>
                <strong>${s(i.label)}</strong>
              </div>
              ${io(i.tone!=="clear",i.tone==="fault"?"Geweigerd":"In behandeling","Uitgevoerd",i.tone)}
            </div>
            <span>${s(i.copy)}</span>
          </div>
        `:""}
      </div>
    `}function cT(e){let t=e.incidentMonitoring?.snapshot?.heatPumps||[];if(!t.length)return"";let r=t.flatMap(Wf),a=r.filter(i=>i.latched&&!i.acknowledged&&!i.active&&!i.recovering).filter(i=>i.recoveryCondition!=="confirmed_odu_power_cycle");return`
      <article class="oq-settings-monitoring-card">
        <header>
          <p>Warmtepompen</p>
          ${io(r.some(i=>i.category!=="status"),"Incident","OK","warning")}
        </header>
        <span>Bevestigde status per warmtepomp. Een korte communicatiehapering wordt eerst gecontroleerd voordat OpenQuatt ingrijpt.</span>
        <div class="oq-settings-monitoring-rows">
          ${t.map(lT).join("")}
        </div>
        ${a.length>0&&S("acknowledgeHpIncidents")?`
          <div class="oq-settings-monitoring-incident-action">
            ${Qe("acknowledgeHpIncidents","Herstelde meldingen bevestigen","oq-helper-button oq-helper-button--ghost")}
            <span>Alleen herstelde, vastgehouden meldingen verdwijnen; actieve incidenten blijven staan.</span>
          </div>
        `:""}
      </article>
    `}function uT(e){let t=Number(e?.controlMode)||0,r=!!e?.boilerCommandActive,n=String(e?.action||"none"),a=Sl(n);return t===3?r?{title:"CM3 \xB7 CV ondersteunt",copy:"De warmtepomp blijft de primaire warmtebron; de CV-ketel vult tijdelijk aan.",tone:"clear"}:{title:"CM3 \xB7 ondersteuningsrol niet actief",copy:"CM3 is de regelrol, maar de ketel wordt op dit moment niet aangestuurd.",tone:"warning"}:t===4?r?{title:"CM4 \xB7 ketelfallback aangestuurd",copy:"De warmtepompen zijn niet inzetbaar; de CV-ketel krijgt de verwarmingsopdracht.",tone:"fault"}:{title:"CM4 \xB7 fallback niet actief",copy:e.fallbackBlockReason?`De fallbackrol is gekozen, maar de ketel wordt niet aangestuurd. Blokkade: ${gi(e.fallbackBlockReason)}.`:"De fallbackrol is gekozen, maar de ketel wordt niet aangestuurd; er is geen blokkadereden aangeleverd.",tone:"fault"}:n==="fallback_blocked"?{title:a.label,copy:`${a.copy} Blokkade: ${gi(e.fallbackBlockReason)}.`,tone:"fault"}:{title:t>=0?`CM${t} \xB7 normale regeling`:"Normale regeling",copy:"Er is geen bijzondere ketelreactie voor een warmtepompincident actief.",tone:"clear"}}function dT(e){let t=e.incidentMonitoring?.snapshot?.system;if(!t)return"";let r=uT(t),n=t.boilerCommandActive&&t.boilerTransition==="assist_to_fallback_continuous"&&t.boilerOutputContinuous===!0?"Overgang CM3 \u2192 CM4: de ketelopdracht bleef volgens de controller actief en kreeg geen uit/aan-puls.":"";return`
      <article class="oq-settings-monitoring-card oq-settings-monitoring-system">
        <header>
          <p>Systeemreactie</p>
          ${io(r.tone!=="clear",r.tone==="fault"?"Fallback":"Inactief","Normaal",r.tone==="fault"?"fault":"warning")}
        </header>
        <strong class="oq-settings-monitoring-card-value">${s(r.title)}</strong>
        <span>${s(r.copy)}</span>
        ${n?qr({label:"Overgang CM3 \u2192 CM4",value:"Geen uit/aan-puls",note:n}):""}
      </article>
    `}function Io(e){let t=R(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function pT(e){let t=R(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;let r=Math.floor(t/60),n=Math.round(t%60);return`${r}u ${n}m geleden`}function Lf(e){let t=R(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function mT(e){if(!e.cyclingAlertLatched)return"";let t=Z("compressorCyclingAlertAlternating"),r=Io("compressorCyclingAlertHp1Peak2h"),n=Io("compressorCyclingAlertHp1Peak72h"),a=S("compressorCyclingAlertHp2Peak2h")?Io("compressorCyclingAlertHp2Peak2h"):"",i=S("compressorCyclingAlertHp2Peak72h")?Io("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${io(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Lf("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Lf("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${o.entities.acknowledgeCompressorCyclingAlert?Qe("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function If(e,t){return S(`${t}CompressorStarts2h`)?`<tr><th scope="row">${s(e)}</th>
      <td>${s(pT(`${t}CompressorLastStartAge`))}</td><td class="is-alarm">${s(Io(`${t}CompressorStarts2h`))}</td>
      <td>${s(Io(`${t}CompressorStarts6h`))}</td><td>${s(Io(`${t}CompressorStarts24h`))}</td>
      <td class="is-alarm">${s(Io(`${t}CompressorStarts72h`))}</td></tr>`:""}function Vf(){let e=Nt();Vr(e);let t=!!e.incidentMonitoring?.available,r=Dt("cicPollingEnabled"),n=Dt("otEnabled"),a=[S("lowflowFaultActive")?qr({label:"Flow",value:Z("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:Z("lowflowFaultActive")}):"",S("flowMismatch")?qr({label:"Flowvergelijking duo",value:Z("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:Z("flowMismatch")}):""].filter(Boolean).join(""),i=[S("cicDataStale")?qr({label:"CIC-data",value:r?Z("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:r&&Z("cicDataStale")}):"",S("otLinkProblem")?qr({label:"OpenTherm",value:n?Z("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&Z("otLinkProblem")}):""].filter(Boolean).join(""),l=t?"":[S("hp1Failures")?qr({label:"Warmtepomp 1",value:ql("hp1Failures"),active:Qn("hp1Failures")}):"",S("hp2Failures")?qr({label:"Warmtepomp 2",value:ql("hp2Failures"),active:Qn("hp2Failures")}):""].filter(Boolean).join(""),c=R("compressorStarts2hWarningLimit"),u=R("compressorStarts72hWarningLimit"),d=Z("compressorCyclingWarning2h")||Z("compressorCyclingWarning72h")||Z("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,m=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"",w=l?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${l}</div>
      </article>
    `:"",v=t?cT(e):"",f=t?dT(e):"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"";return re("Bewaking","Installatiebewaking","Lokale diagnose van warmtepompincidenten, systeemreactie, compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.severity==="fault"?" is-fault":e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${io(e.active,e.severity==="fault"?"Storing":"Aandacht nodig","Alles rustig",e.severity==="fault"?"fault":"warning")}
        </div>
        <details class="oq-settings-monitoring-details"${o.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Details en systeemreactie</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(p=>`<span>${s(p.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          ${f}
          ${v}
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${io(d)}
            </header>
            <span>Starts sinds de laatste controllerherstart.</span>
            ${mT(e)}
            <div class="oq-starts-panel">
              <table class="oq-starts"><thead><tr><th scope="col">Warmtepomp</th><th scope="col">Laatste</th><th scope="col" class="is-alarm">2 uur</th><th scope="col">6 uur</th><th scope="col">24 uur</th><th scope="col" class="is-alarm">72 uur</th></tr></thead>
                <tbody>
                  ${If("Warmtepomp 1","hp1")}
                  ${If("Warmtepomp 2","hp2")}
                </tbody>
              </table>
              ${o.compressorLimitsOpen?`
                <div class="oq-start-editor">
                  <strong>Alarmgrenzen</strong>
                  <div class="oq-start-fields" id="oq-start-fields">
                    ${Xr("compressorStarts2hWarningLimit","2 uur","",{compact:!0})}
                    ${Xr("compressorStarts72hWarningLimit","72 uur","",{compact:!0})}
                  </div>
                  <button type="button" class="oq-helper-button oq-helper-button--ghost oq-start-done" data-oq-action="toggle-compressor-limits" aria-expanded="true" aria-controls="oq-start-fields">Gereed</button>
                </div>
              `:`
                <button type="button" class="oq-start-summary" data-oq-action="toggle-compressor-limits" aria-expanded="false">
                  <span><strong>Alarmgrenzen</strong><span>${Number.isNaN(c)?"\u2014":Math.round(c)} / 2 uur \xB7 ${Number.isNaN(u)?"\u2014":Math.round(u)} / 72 uur</span></span>
                  <strong>Aanpassen \u203A</strong>
                </button>
              `}
            </div>
          </article>
          ${w}
          </div>
          <div class="oq-settings-monitoring-column">
            ${m}
            ${g}
          </div>
        </div>
        </details>
      `)}function Xc(){if(!S("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:oi,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:oi,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:tl,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},r=String(E("hpGeneration")||""),n=Lt(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return Zr({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Bf(){let e=Pt(),t=o.entities.hpGeneration||{},r=S("hpGeneration")&&Lt(t).length>0;return!e&&!r?"":re("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${s(e||"Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!r||o.loadingEntities||o.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function eu(e="oq-settings-grid oq-settings-boiler-simple-grid",t=!1){if(!S("boilerCvAssistEnabled"))return"";let r=C("boilerCvAssistEnabled"),n=S("boilerRatedHeatPower"),a=Ue("boilerRatedHeatPower"),i=Re("boilerRatedHeatPower"),l=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",c=S("boilerFaultFallbackEnabled"),u=c&&C("boilerFaultFallbackEnabled"),d=o.loadingEntities||o.busyAction==="switch-boilerFaultFallbackEnabled",m=S("boilerConnection"),w=m?String(E("boilerConnection")||"R1"):"R1",v=Df({linkEntityPresent:S("otbLinkAvailable"),linkEntityConfirmedMissing:!!o.optionalMissingEntities?.otbLinkAvailable}),f=v===Lo.SUPPORTED,g=v!==Lo.UNKNOWN,p=w==="R1"&&C("otbConnectionMismatch"),b=m?Nf(Lt(o.entities.boilerConnection||{}),v):[],y=m&&g?`
      <label class="oq-settings-control oq-settings-control--select">
        <select class="oq-helper-select" data-oq-field="boilerConnection" ${o.loadingEntities?"disabled":""}>
          ${b.map(A=>`
            <option value="${s(A)}" ${A===w?"selected":""}>
              ${s(A==="OpenTherm"?"OpenTherm (OTB)":"Aan/uit (R1)")}
            </option>
          `).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    `:m?`
      <div class="oq-settings-boiler-power-empty" role="status" aria-live="polite">
        <strong>Beschikbaarheid controleren\u2026</strong>
        <p>De aansluitingskeuze is tijdelijk geblokkeerd.</p>
      </div>
    `:"",q=n?Mo({key:"boilerRatedHeatPower",value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,T=r&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"",M=w==="R1"&&f?p?`
          <div class="oq-settings-boiler-connection-note is-warning" role="alert">
            <strong>OpenTherm-ketel gevonden</strong>
            <p>Kies OpenTherm (OTB).</p>
          </div>
        `:`
          <p class="oq-settings-boiler-connection-note">OT-controle bij opstart actief.</p>
        `:"";return`
        <div class="${s(e)}">
          ${ge("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${ut("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",r,l)}
              </div>
            `,"oq-settings-field--compact")}

          ${(r||p)&&m?ge("boilerConnection","Ketelaansluiting",g?f?"Kies de aansluiting die fysiek met de ketel is verbonden. OpenQuatt gebruikt nooit beide routes tegelijk.":"Deze hardware ondersteunt alleen de aan/uit-aansluiting via R1.":"OpenQuatt controleert welke ketelaansluitingen deze hardware ondersteunt.",y,"oq-settings-field--compact",M):""}

          ${r?ge("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${q}
              </div>
            `,r&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",T):""}

          ${r&&t&&c?ge("boilerFaultFallbackEnabled",Of,Xq,`
              <div class="oq-settings-compact-switch-field">
                ${ut("boilerFaultFallbackEnabled",Of,u,d)}
              </div>
            `,"oq-settings-field--compact"):""}
        </div>
      `}function Kf(){if(!S("boilerCvAssistEnabled"))return"";let e=C("boilerCvAssistEnabled");return re("Basis","CV-ketel of boiler",e?"Kies hoe de ketel is aangesloten en hoeveel effectief vermogen OpenQuatt als ondersteuning mag gebruiken.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",eu("oq-settings-grid oq-settings-boiler-simple-grid",!0))}function zf(){let e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return re("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${o.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(t)}</p>
        </div>
      `)}function Uf(){let e=Do(),t=yi(),r=o.busyAction==="restartAction";return re("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${Fe({dataValue:"uptime",label:"Uptime",value:Yr()})}
          ${Fe({dataValue:"ip",label:"IP-adres",value:Jr()})}
          ${Fe({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${Fe({dataValue:"webserverLog",label:"Logboek",value:Ti(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${Fe({dataValue:"debugRecording",label:"Debugopname",value:ra(),note:Ri(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${Fe({dataValue:"datetime",label:"Datum/tijd",value:t})}
          ${Fe({dataValue:"espTemp",label:"ESP-temp",value:rs()})}
          ${Fe({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${S("statusLedsEnabled")?`
            ${Fe({dataValue:"statusLeds",label:"Status-LEDs",value:C("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:ut("statusLedsEnabled","Status-LEDs",C("statusLedsEnabled"),o.loadingEntities||o.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function Gf(){let e=[Jc("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Jc("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return re("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ue("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${S("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}var gT=JSON.stringify({schema_version:1,message_id:"c8272f30-b64d-4af0-a13c-bf8e0cbde842",installation_id:"7df1c1f8-fc47-4ac8-b0d7-94d8c42d772f",timestamp_s:1784527200,uptime_s:86420,firmware_version:"v0.44.0",release_channel:"main",hardware_profile:"heatpump_controller_q",hardware_revision:"1.0 (batch 42)",topology:"duo",connection:"wifi",heap_free_b:178432,heap_min_free_b:151008,heap_largest_block_b:98304,psram_free_b:7023616,loop_time_ms:14,esp_internal_temp_c:47.8,wifi_rssi_dbm:-61,reset_reason:"power_on",cic_polling_enabled:!0,cic_compatibility_enabled:!1,ot_thermostat_enabled:!0,boiler_assist_enabled:!0,boiler_connection:"on_off",mqtt_inputs_enabled:!1,trend_ram_enabled:!0,trend_flash_enabled:!1,decision_log_flash_enabled:!1,energy_history_flash_enabled:!0,ram_log_history_enabled:!0},null,2);function ns({enabled:e,busy:t,settings:r=!1}){let n=r?"Na inschakelen verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.":"Na het afronden verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.",a=r&&e&&S("usageTelemetryInstallationId")?String(E("usageTelemetryInstallationId")||"").trim():"",i=["unknown","unavailable","nan"].includes(a.toLowerCase())?"":a;return`
    <div class="oq-usage-consent${e?" is-enabled":""}${r?" oq-usage-consent--settings":""}">
      <div class="oq-usage-consent-copy">
        <span class="oq-usage-consent-icon" aria-hidden="true">${me("bar-chart","oq-usage-consent-icon-svg")}</span>
        <div>
          <span class="oq-usage-consent-kicker">Vrijwillige keuze</span>
          <h3>Beperkte statistieken delen</h3>
          <p>${n}</p>
          ${i?`<div class="oq-usage-consent-installation-id"><strong>Installatie-ID</strong><code>${s(i)}</code></div>`:""}
        </div>
      </div>
      <div class="oq-usage-consent-action">
        ${ut("usageTelemetryEnabled","Technische gebruiksstatistieken delen",e,t,"Delen","Niet delen")}
      </div>
    </div>
  `}function as({collapsible:e=!1,idPrefix:t="oq-usage",open:r=!1}={}){let n=s(t),a=`${n}-included-title`,i=`${n}-excluded-title`,l=`
    <div class="oq-usage-disclosure-grid">
      <section class="oq-usage-disclosure-column" aria-labelledby="${a}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon is-included" aria-hidden="true">${me("bar-chart","oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${a}">In het bericht</h4>
        </div>
        <ul>
          <li><strong>Installatie</strong><span>Willekeurig ID, tijdstip en uptime</span></li>
          <li><strong>Software</strong><span>Versie en releasekanaal</span></li>
          <li><strong>Platform</strong><span>Hardware, opstelling, verbinding en wifi-signaal</span></li>
          <li><strong>Systeemstatus</strong><span>Geheugen, looptijd, chiptemperatuur en herstartreden</span></li>
          <li><strong>Functies</strong><span>Aan/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie; plus de ketelaansluiting (aan/uit of OpenTherm)</span></li>
        </ul>
      </section>
      <section class="oq-usage-disclosure-column is-excluded" aria-labelledby="${i}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon" aria-hidden="true">${me("shield","oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${i}">Niet in het bericht</h4>
        </div>
        <ul>
          <li><strong>Identiteit</strong><span>Geen MAC-adres of netwerkadres</span></li>
          <li><strong>Wifi en toegang</strong><span>Nooit een wifi-netwerknaam, wifi-wachtwoord, gebruikersnaam, ander wachtwoord of inloggegevens</span></li>
          <li><strong>Installatiegedrag</strong><span>Geen verwarmingsmetingen of regelwaarden</span></li>
          <li><strong>Lokale data</strong><span>Geen ingestelde temperaturen, grenzen, MQTT-topics of logs</span></li>
        </ul>
      </section>
    </div>
    <details class="oq-usage-payload-example">
      <summary>Voorbeeld van het verzonden bericht (JSON)</summary>
      <p>Voorbeeldwaarden; de velden en vorm komen overeen met het werkelijke bericht.</p>
      <pre><code>${s(gT)}</code></pre>
    </details>
    <p class="oq-usage-network-note">${me("server","oq-usage-network-note-icon")} De OpenQuatt-loggingserver kan, zoals iedere internetdienst, technisch wel het bron-IP-adres zien. OpenQuatt slaat dit IP-adres niet op.</p>
  `;return e?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-usage-disclosure oq-usage-disclosure--collapsible"${r?" open":""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-usage-telemetry-details">
          <div class="oq-settings-section-head">
            <h3>Wat gaat er mee?</h3>
            <p>Bekijk precies welke technische gegevens wel en niet worden gedeeld.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body">
          ${l}
        </div>
      </details>
    `:`
    <div class="oq-usage-disclosure">
      <div class="oq-usage-disclosure-head">
        <h3>Wat gaat er mee?</h3>
        <span>Geen verwarmings- of regeldata</span>
      </div>
      ${l}
    </div>
  `}function fT(){let e=oe(),t=ct(),r=`${e}:${t}`,n=o.quickStartSetupDraft||r,[a,i]=n.split(":");return{...Mi(a,i),currentKey:r,selectedKey:n,changes:n!==r,targetIsDuo:a==="duo",targetIsEthernet:i==="eth"}}function hT(){let e=fT(),t=kt(),r=!!(t||o.updateInstallBusy),n=[["single:wifi","Single \xB7 Wi-Fi","E\xE9n warmtepomp via het draadloze netwerk."],["single:eth","Single \xB7 Ethernet","E\xE9n warmtepomp via een vaste netwerkkabel."],["duo:wifi","Duo \xB7 Wi-Fi","Twee warmtepompen via het draadloze netwerk."],["duo:eth","Duo \xB7 Ethernet","Twee warmtepompen via een vaste netwerkkabel."]],a=[e.targetIsDuo?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Deze controller wordt voor \xE9\xE9n warmtepomp gebruikt.",e.targetIsEthernet?"De netwerkkabel is aangesloten.":"De Wi-Fi-gegevens zijn beschikbaar op de controller."];return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("setup"))}</p>
        <h2 class="oq-helper-section-title">Kies je setup</h2>
        <p class="oq-helper-section-copy">De gemarkeerde setup is de configuratie die nu op je Q-edition actief is. Kies alleen een andere setup als je installatie anders is opgebouwd of een andere netwerkverbinding moet gebruiken.</p>
        <div class="oq-helper-fields">
          ${n.map(([i,l,c])=>{let u=e.selectedKey===i,d=e.currentKey===i;return`
              <button
                class="oq-helper-field oq-helper-field--step${u?" is-current":""}"
                type="button"
                data-oq-action="select-quickstart-setup"
                data-setup-target="${s(i)}"
                aria-pressed="${u?"true":"false"}"
                ${r?"disabled":""}
              >
                <div class="oq-helper-field-step-head">
                  <h3>${s(l)}</h3>
                  ${d?'<span class="oq-helper-field-step-state">Actief</span>':""}
                </div>
                <p>${s(c)}</p>
              </button>
            `}).join("")}
        </div>
        ${e.changes?`
          <div class="oq-firmware-advanced-detail">
            ${t?`
              <div class="oq-helper-modal-progress" aria-live="polite">
                <div class="oq-helper-modal-progress-head">
                  <strong>${s(t.phaseLabel)}</strong>
                  <span>${s(`${t.percent}%`)}</span>
                </div>
                <div class="oq-helper-modal-progress-track" aria-hidden="true">
                  <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,t.percent))}%"></span>
                </div>
                <p class="oq-helper-modal-note">${s(t.copy)}</p>
              </div>
            `:""}
            <div class="oq-helper-modal-grid">
              <div class="oq-helper-modal-row"><span class="oq-helper-modal-label">Huidige build</span><strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong></div>
              <div class="oq-helper-modal-row"><span class="oq-helper-modal-label">Nieuwe build</span><strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong></div>
            </div>
            <p class="oq-helper-modal-note">Voor deze wijziging installeert OpenQuatt de passende firmware en start de controller opnieuw op. Bestaande OpenQuatt-instellingen blijven behouden.</p>
            <label class="oq-helper-modal-check">
              <input type="checkbox" data-oq-quickstart-setup-confirm="true" ${o.quickStartSetupConfirmed?"checked":""} ${r?"disabled":""}>
              <span>${s(a.join(" "))}</span>
            </label>
            <div class="oq-firmware-advanced-footer">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="install-quickstart-setup" ${r||!o.quickStartSetupConfirmed||!e.canSwitch?"disabled":""}>
                ${r?"Setupwissel uitvoeren...":"Nieuwe setup installeren"}
              </button>
            </div>
            ${!e.canSwitch&&!r?`<p class="oq-helper-modal-note oq-helper-modal-note--muted">${s(!e.targetEntityAvailable||!e.installActionAvailable?"De firmwarebediening wordt nog geladen. Wacht een moment en probeer opnieuw.":"Deze firmware mist nog het vereiste OTA-target. Werk eerst bij naar een build die setupwissels ondersteunt.")}</p>`:""}
          </div>
        `:Tt()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function Jf(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Xc()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Xc()}
        ${Tt()}
      </section>
    `}function bT(e){let t=String(e||"").trim();if(!t)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function Zf(){let e=String(E("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:bT(t)}}function Xf(e,t){return`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${$o("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--text">
            <input
              class="oq-helper-input oq-settings-integration-url-input"
              type="text"
              data-oq-quickstart-cic-url
              value="${s(e.draftUrl)}"
              placeholder="192.168.2.117"
              autocomplete="off"
              spellcheck="false"
              ${t?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${s(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function Qf(e){let t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function tu(){let e=Qf(E("hardwareProfileText")),t=!1;return e||(e=Qf(Ot().hardwareProfile)),!e&&S("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&S("flowSource")&&S("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function bn(){let e=String(E("hpGeneration")||"").trim(),t=tu(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=t,l=r&&a,c=n?r?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",d=String(E("flowSource")||"").trim(),m=String(E("qFlowSource")||"").trim(),w=C("cicPollingEnabled"),v=C("cicJsonFeedOk"),f=C("cicDataStale"),g=Zf(),p=d===u&&(!c||m===c),b=l?p&&w&&!!g.configuredUrl:p,y=l?"cicFlowrate":n&&r?"controllerFlow":oe()==="duo"?"flowLocal":"hp1Flow",k=R(y),q=Number.isFinite(k),T=C("quickFlowTest"),M=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&b?M=v&&q?k>0?"Geldig":"Bron actief, geen circulatie":f?"Geen actuele CiC-data":v?"Verbonden, wacht op flow":"Verbinding controleren":!l&&b&&(M=q?k>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let A=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",H=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:u,configurationApplied:b,sourceLabel:A,explanation:H,status:M,flowValue:k,flowAvailable:q,flowTestActive:T,canRunFlowTest:b,...g,canApply:i&&S("flowSource")&&(!c||S("qFlowSource"))&&(!l||S("cicPollingEnabled")&&S("cicFeedUrl")&&!!g.normalizedDraftUrl)}}function is(){let e=tu(),{isQEdition:t,isRemoteProfile:r}=e,n=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=Zf(),d=n===l&&a===l&&(l!=="OT thermostat"||C("otEnabled"))&&(l!=="CIC"||C("cicPollingEnabled")&&!!c.configuredUrl),m=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],w=R(m[0]),v=R(m[1]),f=Number.isFinite(w)&&Number.isFinite(v),g=l==="OT thermostat"?C("otEnabled")&&!C("otLinkProblem")&&f:l==="CIC"?C("cicJsonFeedOk")&&!C("cicDataStale")&&f:C("roomTempHaValid")&&C("roomSetpointHaValid")&&f,p=t||r?"Nog activeren":"Hardwareprofiel niet herkend";d&&(p=g?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let b=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",y=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:r,selectedSource:l,sourceLabel:b,explanation:y,configurationApplied:d,status:p,roomTempValue:w,roomSetpointValue:v,valuesAvailable:f,...c,canApply:(t||r)&&S("roomTempSource")&&S("roomSetpointSource")&&(l!=="OT thermostat"||S("otEnabled"))&&(l!=="CIC"||S("cicPollingEnabled")&&S("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function wT(){let e=bn(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",r=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",n=t||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Xf(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ge("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)} \xB7 Quatt ${s(e.generation||"onbekend")}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${a}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Actuele flow</span><strong>${s(i)}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${l}
        </div>
        <div class="oq-helper-actions">
          <button
            class="oq-helper-button oq-helper-button--primary"
            type="button"
            data-oq-action="apply-quickstart-flow-source"
            ${n||!e.canApply?"disabled":""}
          >
            ${o.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${n||!e.configurationApplied?"disabled":""}
          >
            ${o.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${t||r?"disabled":""}
            >
              ${r?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${Tt({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function vT(){let e=is(),t=o.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${$o("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${t?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?Xf(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/OpenQuatt/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ge("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${r}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(e.roomTempValue)?`${e.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(e.roomSetpointValue)?`${e.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${n}
          ${a}
          ${i}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${t||!e.canApply?"disabled":""}>
            ${t?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${Tt({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function eh(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?te({id:"quickstart-forced",titleId:"oq-generation-modal-title",kicker:"Installatie",title:"Quatt Hybrid-versie aanpassen",copy:"Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation",sectionAttributes:'data-oq-quickstart-scroller data-oq-quickstart-step="generation"',closeAction:"close-quickstart-modal",closeLabel:"Sluit versie-popup",body:Jf("picker")}):te({id:"quickstart-forced",titleId:"oq-quickstart-modal-title",kicker:"Quick Start",title:"Rond eerst de Quick Start af",copy:"Controleer eerst je setup en loop daarna stap voor stap door de basisinstellingen.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart",sectionAttributes:`data-oq-quickstart-scroller data-oq-quickstart-step="${s(rh().id)}"`,closeAction:"close-quickstart-modal",closeLabel:"Sluit Quick Start-popup",body:`<div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">${MT()}${AT()}</div>`})}function yT(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}var th=xo({getScroller:yT,getToken:()=>o.quickStartScrollRestoreToken,setToken:e=>{o.quickStartScrollRestoreToken=e},isActive:()=>o.quickStartModalOpen,getIdentity:e=>String(e.dataset.oqQuickstartStep||""),preserveGrowth:!0,stickToBottom:!0}),oh=th.capture,ou=th.queue;function Yf(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${Gc()}
        ${Kc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Tt()}
      </section>
    `}function ST(){let e=C("otbConnectionMismatch");return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of er een ketel aanwezig is, kies de fysieke aansluiting en vul het beschikbare vermogen in.</p>
        ${eu("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${Tt({nextDisabled:e})}
      </section>
    `}function kT(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${zc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Tt()}
      </section>
    `}function qT(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ie()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ie()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ie()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Qc()}</div>
            <div class="oq-settings-curve-shell">
              ${Zc()}
            </div>
            ${Bc()}
          `:`
            ${Uc("oq-settings-grid oq-settings-grid--quickstart")}
            ${Yc()}
          `}
        ${Tt()}
      </section>
    `}function TT(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Tc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Tt()}
      </section>
    `}function ET(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Fi("oq-settings-grid oq-settings-grid--quickstart")}
        ${Tt()}
      </section>
    `}function CT(){let e=C("usageTelemetryEnabled"),t=C("usageTelemetryChoiceConfigured"),r=o.loadingEntities||!!o.busyAction;return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("usage-telemetry"))}</p>
        <h2 class="oq-helper-section-title">Gebruiksstatistieken</h2>
        <p class="oq-helper-section-copy">Bij een nieuwe Quick Start staat het delen van beperkte technische statistieken standaard aan. Wil je dit niet, zet delen hier uit. Je kunt de keuze later altijd wijzigen.</p>
        ${ns({enabled:e,busy:r})}
        ${as()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
        ${o.controlError?`
          <div class="oq-helper-actions">
            <button class="oq-helper-button" type="button" data-oq-action="retry-usage-telemetry-choice" ${r?"disabled":""}>Keuze opnieuw opslaan</button>
          </div>
        `:""}
        ${!t&&!r?`
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="confirm-no-usage-telemetry">Niet delen bevestigen</button>
          </div>
        `:""}
        ${Tt({nextDisabled:r||!t||!!o.controlError,nextDisabledLabel:r||!t?"Keuze opslaan...":"Controleer keuze"})}
      </section>
    `}function xT(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${RT()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${o.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function MT(){let e=rh().id;return e==="setup"?hT():e==="generation"?Jf():e==="boiler"?S("boilerCvAssistEnabled")?ST():Yf():e==="flow-source"?wT():e==="thermostat-source"?vT():e==="flow"?kT():e==="heating"?qT():e==="water"?TT():e==="silent"?ET():e==="usage-telemetry"?CT():e==="confirm"?xT():Yf()}function Tr(){let e=tu().isQEdition;return Hr.filter(t=>(t.id!=="setup"||e)&&(!t.optionalEntity||S(t.optionalEntity)))}function mt(e){let t=Tr().findIndex(r=>r.id===e);return`Stap ${Math.max(0,t)+1}`}function $T(e){let t=ss(),r=e===t,n=o.complete===!0||e<t;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function _T(e=!1){return Tr().map((t,r)=>{let n=$T(r);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${n.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(t.id)}"
          aria-current="${n.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(r+1).padStart(2,"0")}. ${s(t.title)}</h3>
            <span class="oq-helper-field-step-state">${n.label}</span>
          </div>
          <p>${s(t.copy)}</p>
        </button>
      `}).join("")}function rh(){let e=Tr();return e.find(t=>t.id===o.currentStep)||e[0]||Hr[0]}function ss(){return Math.max(0,Tr().findIndex(e=>e.id===o.currentStep))}function nh(e){let t=Tr(),r=Math.min(t.length-1,Math.max(0,ss()+e));o.currentStep=t[r]?.id||Hr[0].id}function Tt(e={}){let t=ss(),r=Tr(),n=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${t+1} van ${r.length}</strong>
          <span>${s(a?`Hierna: ${a.title}`:"Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${n?"":"disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${a&&!e.nextDisabled?"":"disabled"}>
            ${a?e.nextDisabled?e.nextDisabledLabel||"Configureer eerst":"Volgende":"Laatste stap"}
          </button>
        </div>
      </div>
    `}function AT(){let e=ss(),t=Tr();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${_T(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function RT(){let e=Te(F("hpGeneration")),t=ie()?"Stooklijn":"Power House",r=y=>Te(F(y)),n=[],a=ie()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",Y("curveM20")],["Aanvoer bij -10\xB0C",Y("curveM10")],["Aanvoer bij 0\xB0C",Y("curve0")],["Aanvoer bij 5\xB0C",Y("curve5")],["Aanvoer bij 10\xB0C",Y("curve10")],["Aanvoer bij 15\xB0C",Y("curve15")],["Fallback-aanvoer",Y("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",Y("housePower")],["Maximum heating outdoor temperature",Y("houseOutdoorMax")],["Temperatuurreactie",Y("phKp")],["Comfort onder setpoint",Y("phComfortBelow")],["Comfort boven setpoint",Y("phComfortAbove")]],i=String(E("flowControlMode")||""),l=bn(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=is(),d=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],m=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",Y("manualIpwm")]:["Gewenste flow",Y("flowSetpoint")]],w=S("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",C("boilerCvAssistEnabled")?"Ja":"Nee"],...C("boilerCvAssistEnabled")?[...S("boilerConnection")?[["Ketelaansluiting",String(E("boilerConnection")||"R1")==="OpenTherm"?"OpenTherm (OTB)":"Aan/uit (R1)"]]:[],["Ingesteld ketelvermogen",Y("boilerRatedHeatPower")]]:[]]:[],v=[["Maximale watertemperatuur",Y("maxWater")]],f=[["Start stille uren",In(E("silentStartTime"))||"\u2014"],["Einde stille uren",In(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",Y("silentMax")],["Maximaal niveau overdag",Y("dayMax")]],g=S("usageTelemetryEnabled")?[["Technische gebruiksstatistieken",C("usageTelemetryEnabled")?"Delen":"Niet delen"]]:[],p=y=>`
      <div class="oq-helper-review-list">
        ${y.filter(k=>k&&k[1]).map(([k,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(k)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,b=(y,k,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(y)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${p(k)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${b("Quatt Hybrid-versie",n,e)}
        ${b("Flowmeting",c,l.sourceLabel)}
        ${b("Verwarmingsstrategie",a,t)}
        ${b("Watertemperatuur",v)}
        ${b("Thermostaatgegevens",d,u.sourceLabel)}
        ${b("Flowregeling",m)}
        ${w.length?b("CV-ketel / boiler",w):""}
        ${b("Stille uren",f)}
        ${g.length?b("Gebruiksstatistieken",g):""}
      </div>
    `}function wa(e,t){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
      </div>
    `}function ru(e){let t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function ah(){let e=!S("coolingRoomRequestRequired")||C("coolingRoomRequestRequired"),t=[ue("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),to("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${Y("coolingDemandMax")} max`}),ue("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ue("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[S("coolingRoomRequestRequired")?Nm("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?ue("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?ue("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=S("coolingWithoutDewPointMode"),i=[S("coolingGuardMode")?wa("Route",Te(F("coolingGuardMode","Onbekend"))):"",S("coolingEffectiveMinSupplyTemp")?wa("Actieve ondergrens",F("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?ge("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",c=[S("outsideTempSelected")?wa("Actuele buitentemperatuur",F("outsideTempSelected","\u2014")):"",S("coolingFallbackNightMinOutdoorTemp")?wa("Nachtminimum buitentemperatuur",F("coolingFallbackNightMinOutdoorTemp","\u2014")):"",S("coolingFallbackMinSupplyTemp")?wa("Berekende minimum watertemperatuur",F("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),u=c.length?`<div class="oq-settings-cooling-fallback-metrics">${c.join("")}</div>`:"",d=a||c.length>0,w=F("coolingGuardMode","").toLowerCase().includes("fallback");if(!t.length&&!n&&!a&&!l&&!d)return"";let v={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return re("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${t.length?`
          <div class="oq-settings-grid">
            ${t.join("")}
          </div>
        `:""}
        ${n?`
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Koelvraag</p>
              <h4>Kamerthermostaat</h4>
              <p>Bepaalt of koelen pas start bij kamervraag, of dat koeltoestemming direct als koelvraag telt.</p>
            </div>
            <div class="oq-settings-grid">
              ${r.join("")}
            </div>
          </div>
        `:""}
        ${a||l||d?`
          <div class="oq-settings-grid">
            ${a?Pm("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",v,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${d?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${w?" open":""}>
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                ${u}
                <p>Zonder dauwpuntmeting weet OpenQuatt niet zeker hoe koud het water mag worden zonder condensrisico. De dauwpuntsbenadering gebruikt daarom een voorzichtige minimum watertemperatuur.</p>
                <p>Onder de 20\xB0C buiten blijft koeling via deze benadering uit. Daarboven loopt de ondergrens geleidelijk op van 19\xB0C bij 20\xB0C buiten naar 22\xB0C bij 32\xB0C buiten. Warme nachten verhogen die grens nog iets.</p>
                <p>Wordt die grens hoger dan zinvol is voor de kamer, dan verlaagt OpenQuatt hem beperkt: ongeveer 1\xB0C onder de kamertemperatuur, maar nooit lager dan 20\xB0C. Voorbeeld: bij 22\xB0C kamer en een berekende grens van 23,5\xB0C wordt de grens ongeveer 21\xB0C. Zo kan OpenQuatt nog voorzichtig koelen. Een echte dauwpuntmeting blijft veiliger.</p>
                <p>Kies je expliciet toestaan, dan gebruikt OpenQuatt geen dauwpuntgrens: ook een beschikbare dauwpuntmeting wordt genegeerd. Koeling mag dan doorgaan op basis van de ingestelde minimale koel-aanvoer. Dat kan nuttig zijn bij een installatie die je zelf goed bewaakt, maar het condensrisico ligt dan volledig bij jou.</p>
                <div class="oq-settings-rule-groups">
                  <section class="oq-settings-rule-group">
                    <h4>Buitentemperatuur</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 20\xB0C</span>
                        <span class="oq-settings-rule-value">Uit</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">20-32\xB0C</span>
                        <span class="oq-settings-rule-value">19\xB0C \u2192 22\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 32\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 22\xB0C</span>
                      </div>
                    </div>
                  </section>
                  <section class="oq-settings-rule-group">
                    <h4>Nachtcorrectie</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 18\xB0C</span>
                        <span class="oq-settings-rule-value">+0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">18-19\xB0C</span>
                        <span class="oq-settings-rule-value">+0,5\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">19-20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,5\xB0C</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </details>
            `:""}
          </div>
        `:""}
      `)}function ih(){let e=S("otEnabled"),t=S("cicPollingEnabled")||S("cicFeedUrl"),r=S("cicCompatibilityMode"),n=S("otLinkProblem")||S("otbLinkAvailable")||S("boilerCommandValid")||S("cicDataStale")||S("cicJsonFeedOk");if(!e&&!t&&!r&&!n)return"";let a=Dt("cicPollingEnabled"),i=Dt("otEnabled"),c=String(E("boilerConnection")||"R1")==="OpenTherm",u=({label:q,value:T,active:M=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${M?" is-warning":""}">
        <dt>${s(q)}</dt>
        <dd>${s(T)}</dd>
      </div>
    `,d=(q,T,M="Actief",A="Normaal",H={})=>{if(!S(q))return"";let j=Z(q);return u({label:T,value:j?M:A,active:H.warningWhenActive&&j||H.warningWhenInactive&&!j})},m=(q,T,M={})=>{let A=M.fallbackKey||"";return!S(q)&&!(A&&S(A))?"":u({label:T,value:He(S(q)?q:A,M)})},w=(q,T)=>{let M=T.filter(Boolean).join("");return M?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(q)}</h4>
          <dl>${M}</dl>
        </article>
      `:""},v=S("cicFeedUrl")?`
      <article class="oq-settings-integration-card oq-settings-integration-card--wide" data-oq-settings-field="cicFeedUrl">
        <div class="oq-settings-integration-card-head">
          <h4>CIC feed URL</h4>
          <span class="oq-settings-integration-pill">Lokaal</span>
        </div>
        <label class="oq-settings-control oq-settings-control--text">
          <input
            class="oq-helper-input oq-settings-integration-url-input"
            type="url"
            data-oq-field="cicFeedUrl"
            value="${s(String(Re("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${o.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",f=w("OpenTherm thermostaat (OTT)",[S("otLinkProblem")?u({label:"Thermostaatlink",value:i?Z("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&Z("otLinkProblem")}):"",d("otThermostatStatusValid","Status geldig","Ja","Nee"),d("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),d("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),m("otControlSetpoint","Control setpoint"),m("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),m("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),g=w("Ketelregeling",[S("boilerConnection")?u({label:"Aansluiting",value:c?"OpenTherm (OTB)":"Aan/uit (R1)"}):"",d("boilerCommandValid","Commando geldig","Ja","Nee",{warningWhenInactive:!0}),d("boilerCommandActive","Warmtevraag","Actief","Uit"),m("boilerCommandSource","Bron"),m("boilerCommandTargetTemperature","Doeltemperatuur"),m("boilerCommandRequestedPower","Gevraagd vermogen"),m("boilerCommandAge","Commando-ouderdom"),m("boilerBlockReason","Blokkadereden")]),p=[S("otbLinkAvailable")?u({label:"Ketellink",value:c?Z("otbLinkAvailable")?"OK":"Niet verbonden":"Niet geselecteerd",active:c&&!Z("otbLinkAvailable")}):""];c&&p.push(d("otbChCommand","CH-commando","Actief","Uit"),m("otbControlSetpointCommand","TSet-commando"),d("otbChActive","CV actief","Actief","Uit"),d("otbFlameOn","Vlam","Aan","Uit"),d("otbDhwActive","Tapwater actief","Actief","Uit"),m("otbRelativeModulation","Modulatie"),m("otbChPressure","Waterdruk"),m("otbBoilerWaterTemp","Keteltemperatuur"),m("otbReturnWaterTemp","Retourtemperatuur"),m("otbDhwTemp","Tapwatertemperatuur"),d("otbFaultIndication","Ketelfout","Actief","Geen",{warningWhenActive:!0}),d("otbDiagnosticIndication","Diagnosemelding","Actief","Geen",{warningWhenActive:!0}),d("otbServiceRequest","Service gevraagd","Ja","Nee",{warningWhenActive:!0}),d("otbLowWaterPressure","Lage waterdruk","Ja","Nee",{warningWhenActive:!0}),d("otbFlameFault","Vlamstoring","Ja","Nee",{warningWhenActive:!0}),d("otbAirPressureFault","Luchtdrukstoring","Ja","Nee",{warningWhenActive:!0}),d("otbWaterOverTemp","Overtemperatuur","Ja","Nee",{warningWhenActive:!0}),m("otbOemFaultCode","OEM-foutcode"),m("otbOemDiagnosticCode","OEM-diagnosecode"),m("otbLastResponseAge","Laatste response"),m("otbLastResponseId","Laatste message-ID"),m("otbResponseCount","Geldige responses"));let b=w("OpenTherm ketel (OTB)",p),y=w("CIC-feed",[S("cicJsonFeedOk")?u({label:"JSON-feed",value:a?Z("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!Z("cicJsonFeedOk")}):"",S("cicDataStale")?u({label:"Data",value:a?Z("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&Z("cicDataStale")}):"",d("cicChEnabled","CH-vraag","Actief","Normaal"),d("cicCoolingEnabled","Koeling","Actief","Normaal"),m("cicControlSetpoint","Control setpoint"),m("cicRoomSetpoint","Room setpoint"),m("cicRoomTemp","Room temperature"),m("cicFlowrate","Flow"),m("cicLastSuccessAge","Laatste succes")]),k=f||g||b||y?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>Thermostaat-, ketel- en CiC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${f}
          ${g}
          ${b}
          ${y}
        </div>
      </details>
    `:"";return re("Integratie","OpenTherm en CiC","Configureer de thermostaatbus, externe CiC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          <p class="oq-settings-action-note oq-settings-integration-card--wide">
            De aansluiting van de cv-ketel \u2014 OpenTherm of aan/uit via R1 \u2014 stel je in onder <strong>Instellingen \u2192 Installatie</strong>. Daarom wordt deze hier niet apart weergegeven.
          </p>
          ${ki("otEnabled","OpenTherm-thermostaat","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${ki("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${ki("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${v}
        </div>
        ${k}
      `)}function sh(){if(!On.some($=>S($)))return"";let t=Dt("cicPollingEnabled"),r=Dt("otEnabled"),n=($={})=>$.haValueKey||($.haKeys||[]).find(_=>!/valid$/i.test(_))||"",a=($={})=>$.haValidKey||($.haKeys||[]).find(_=>/valid$/i.test(_))||"",i=($="",_="")=>!!$&&!!_&&S($)&&S(_)&&Z(_),l=($={})=>i(n($),a($)),c={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},u=o.mqttStatus?.enabled!==!1,d=($={})=>$.mqttTopicKey||c[$.valueKey]||"",m=($="")=>{if(!u)return!1;if(!$)return!0;let _=o.mqttStatus?.input_enabled;return _&&typeof _=="object"&&Object.prototype.hasOwnProperty.call(_,$)?_[$]!==!1:!0},w=($="")=>u?m($)?"":"MQTT-topic staat uit":"MQTT staat uit",v=$=>/\bMQTT\b/i.test(String($||"")),f=($,_={})=>$==="CIC"?t:$==="OT thermostat"?r:$==="HA input"?l(_):$==="CIC or HA input"?t||l(_):v($)?m(d(_)):$==="Flowmeter HP2"?S("hp2Flow"):$==="Local aggregate HP1/HP2"?S("flowLocal")||S("hp2Flow"):!0,g=($,_={})=>$==="CIC"&&!t?"CIC-polling staat uit":$==="OT thermostat"&&!r?"OpenTherm staat uit":$==="HA input"&&!l(_)?"HA-bron ongeldig":$==="CIC or HA input"&&!t&&!l(_)?"CIC en HA ontbreken":v($)?w(d(_)):$==="Flowmeter HP2"&&!S("hp2Flow")?"HP2-flow ontbreekt":$==="Local aggregate HP1/HP2"&&!S("flowLocal")&&!S("hp2Flow")?"Lokale flow ontbreekt":"",p=($,_="Actief",B="Normaal")=>S($)?Z($)?_:B:"",b=($,_={})=>{let B=String($||"").trim();return B?_.optionLabels?.[B]||Te(B):""},y=($,_={})=>{let B=String(E($)||"").trim();return B?b(B,_):""},k=$=>{let _=_o($,"");return _?Te(_):""},q=$=>{let _=String(_o($,"")||"").trim();return!_||_==="None"?"":Te(_)},T=(...$)=>$.find(_=>String(_||"").trim())||"",M=()=>{let $=_o("waterSupplyTempEffectiveSource","");if($)return Te($);let _=y("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&S("localWaterSupplyTempSource")){let B=y("localWaterSupplyTempSource");return B?`${_} - ${B}`:_}return _},A=()=>{let $=String(E("flowSource")||"").trim();if($==="Outdoor unit"){if(S("qFlowSource")){let _=String(E("qFlowSource")||"").trim(),B=String(E("hpGeneration")||"").trim();return _==="Local"||_==="Auto"&&B==="V1"?_==="Auto"?"Lokaal (auto)":"Lokaal":T(y("outdoorUnitFlowMode"),_==="Auto"?"Buitenunit (auto)":"Buitenunit")}return T(y("outdoorUnitFlowMode"),"Quatt-flow")}return Te($)},H=()=>{let $=String(E("outsideTempSource")||"").trim(),_=w("outside_temperature");if($==="MQTT"&&_)return _;if($!=="Auto")return Te($);let B=R("outsideTempLocalAggregated"),K=R("outsideTempHa"),ee=R("mqttOutsideTemperature"),ne=!Number.isNaN(B),fe=S("outsideTempHaValid")?Z("outsideTempHaValid")&&!Number.isNaN(K):!Number.isNaN(K),he=m("outside_temperature")&&S("mqttOutsideTemperatureValid")&&Z("mqttOutsideTemperatureValid")&&!Number.isNaN(ee),ce=[ne?{label:"Buitenunit",value:B}:null,fe?{label:"HA-invoer",value:K}:null,he?{label:"MQTT",value:ee}:null].filter(Boolean);return ce.length?ce.reduce((Je,be)=>be.value<Je.value?be:Je,ce[0]).label:"Auto"},j=$=>{if(!S($))return NaN;let _=Number(E($));if(Number.isFinite(_))return _;let K=String(o.entities[$]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return K?Number(K[0]):NaN},I=($,_="")=>{if(!S($))return!1;let B=j($);return(_?Z(_):!0)&&Number.isFinite(B)},W=()=>{let $=String(E("coolingDewPointSource")||"").trim();if($==="Home Assistant")return I("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if($==="MQTT"){let K=w("cooling_dew_point");return K||(I("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd")}let _=I("coolingDewPointHa","coolingDewPointHaValid"),B=m("cooling_dew_point")&&I("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(_&&B){let K=j("coolingDewPointHa");return j("mqttCoolingDewPoint")>K?"MQTT":"HA-invoer"}return _?"HA-invoer":B?"MQTT":$?Te($):"Auto"},x=({label:$,value:_="",key:B="",active:K=!1,status:ee="",statusTone:ne="",statusTitle:fe=""})=>{let he=_||(B?He(B):"");if(!he&&!ee)return"";let ce=String(ne||"").replace(/[^a-z0-9_-]/gi,""),Je=fe||ee,be=ee?`<em class="oq-settings-source-status${ce?` oq-settings-source-status--${s(ce)}`:""}" title="${s(Je)}" aria-label="${s(`${ee}: ${Je}`)}">${s(ee)}</em>`:"";return`
        <div class="oq-settings-source-row${K?" is-warning":""}${ee?" has-status":""}">
          <span>${s($)}${be}</span>
          <strong>${s(he)}</strong>
        </div>
      `},O=({label:$="HA-invoer",valueKey:_="",validKey:B="",value:K=""})=>{if(!_||!B||!S(_)||!S(B))return[];let ee=Z(B);return[x({label:$,key:_,value:K,status:ee?"Geldig":"Ongeldig",statusTone:ee?"valid":"invalid",statusTitle:ee?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},D=({label:$="MQTT",valueKey:_="",validKey:B="",value:K="",topicKey:ee=""})=>{if(!_||!B||!S(_)||!S(B))return[];if(!m(ee||c[_]))return[];let ne=Z(B),fe=ne?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[x({label:$,key:_,value:ne?K:"\u2014",status:jl(B),statusTone:ne?"valid":"invalid",statusTitle:fe})]},N=({title:$,icon:_="",content:B="",rows:K=[],copy:ee="",className:ne=""})=>{let fe=K.filter(Boolean).join("");return!B&&!fe&&!ee?"":`
        <section class="oq-settings-source-group${ne?` ${s(ne)}`:""}">
          <h5>
            ${_?`<span class="oq-settings-source-group-icon">${me(_,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s($)}</span>
          </h5>
          ${B?`<div class="oq-settings-source-group-content">${B}</div>`:""}
          ${fe?`<div class="oq-settings-source-rows">${fe}</div>`:""}
          ${ee?`<p class="oq-settings-source-group-copy">${s(ee)}</p>`:""}
        </section>
      `},J=($,_={})=>{if(!S($))return{markup:"",warning:""};let B=o.entities[$]||{},K=String(E($)||""),ee=Lt(B),ne=new Set(_.hiddenOptions||[]),fe=K&&ne.has(K),he=ee.filter(De=>!ne.has(De)&&f(De,_)),ce=K&&!f(K,_),Je=v(K)&&!u||K==="HA input"&&_.keepUnavailableCurrent!==!0,Ze=(fe&&!he.includes(K)?[K,...he]:ce&&!Je&&!he.includes(K)?[K,...he]:he).map(De=>{let mo=b(De,_);return`<option value="${s(De)}" ${De===K?"selected":""}>${s(mo)}</option>`}).join(""),po=ce&&Je?'<option value="" selected disabled>Kies een beschikbare bron</option>':"";return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(_.label||"Bron")}</span>
              ${_.infoCopy?$o(_.infoId||$,_.infoTitle||_.label||"Bron",_.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s($)}" ${o.loadingEntities?"disabled":""}>
              ${po}${Ze}
            </select>
          </label>
        `,warning:fe?"Huidige bron is legacy; kies een nieuwe bron.":ce?`Huidige bron niet beschikbaar: ${g(K,_)}`:""}},P=({key:$,title:_,icon:B="",select:K,secondarySelect:ee=null,secondarySelects:ne=null,activeRows:fe=[],measurementRows:he=[],activeCopy:ce="",rows:Je=[],warning:be=""})=>{let Ze=K&&K.when!==!1?J(K.key,K):{markup:"",warning:""},De=(Array.isArray(ne)?ne:ee?[ee]:[]).filter(ze=>ze&&ze.when!==!1).map(ze=>J(ze.key,ze)).filter(ze=>ze.markup),mo=De.map(ze=>ze.markup).join(""),go=De.map(ze=>ze.warning).find(Boolean)||"",Ke=Je.filter(Boolean).join(""),fo=`${Ze.markup}${mo}`,$e=Ze.warning||go||be,$n=[N({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:fo?`
            <div class="oq-settings-source-controls">
              ${fo}
            </div>
            ${$e?`<p class="oq-settings-source-warning">${s($e)}</p>`:""}
          `:""}),N({title:"Actief",icon:"target",rows:fe,copy:ce,className:"oq-settings-source-group--active"}),N({title:"Metingen",icon:"activity",rows:he,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!$n&&!fo&&!Ke?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s($||K.key)}">
          <div class="oq-settings-source-card-head">
            ${B?`<span class="oq-settings-source-card-icon">${me(B,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(_)}</h4>
          </div>
          ${$n||`
            ${fo?`
              <div class="oq-settings-source-controls">
                ${fo}
              </div>
            `:""}
            ${$e?`<p class="oq-settings-source-warning">${s($e)}</p>`:""}
            ${Ke?`<div class="oq-settings-source-rows">${Ke}</div>`:""}
          `}
        </article>
      `},V=String(E("waterSupplySource")||""),X=String(E("flowSource")||""),Pe=String(E("qFlowSource")||""),Ct=String(E("outsideTempSource")||"").trim(),ht=String(E("heatingEnableSource")||"").trim()==="Disabled",uo=y("heatingEnableSource",{optionLabels:{Disabled:"Niet gebruiken"}}),xt=String(E("coolingEnableSource")||"").trim()==="Disabled",Le={Disabled:"Niet gebruiken / handmatig",CIC:"CIC (legacy)","CIC or HA input":"CIC of HA-invoer (legacy)"},xn=y("coolingEnableSource",{optionLabels:Le}),pe=q("coolingEnableEffectiveSource"),Mn=u?i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron.":i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron van de buitenunit en HA-invoer. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron.",Rr=[P({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[x({label:"Waarde",key:"roomTemp"}),x({label:"Bron",value:k("roomTempEffectiveSource")})],measurementRows:[t?x({label:"CIC",key:"cicRoomTemp"}):"",r?x({label:"OpenTherm",key:"otRoomTemp"}):"",...O({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...D({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),P({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[x({label:"Waarde",key:"roomSetpoint"}),x({label:"Bron",value:k("roomSetpointEffectiveSource")})],measurementRows:[t?x({label:"CIC",key:"cicRoomSetpoint"}):"",r?x({label:"OpenTherm",key:"otRoomSetpoint"}):"",...O({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...D({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),P({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:V==="Local"&&S("localWaterSupplyTempSource")},activeRows:[x({label:"Waarde",key:"supplyTemp"}),x({label:"Bron",value:M()})],measurementRows:[x({label:"Lokale selectie",key:"waterSupplyTempEsp"}),x({label:"PT1000",key:"waterSupplyTempPt1000"}),x({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?x({label:"CIC",key:"cicWaterSupplyTemp"}):"",...O({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),P({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||X==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:X==="Outdoor unit"&&S("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:X==="Outdoor unit"&&S("outdoorUnitFlowMode")&&(!S("qFlowSource")||Pe!=="Local")}],activeRows:[x({label:"OpenQuatt-flow",key:"flowSelected"}),x({label:"Bron",value:A()})],measurementRows:[x({label:"Controller-flowmeter",key:"controllerFlow"}),x({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),x({label:"Flowmeter HP1",key:"hp1Flow"}),x({label:"Flowmeter HP2",key:"hp2Flow"}),t?x({label:"CIC",key:"cicFlowrate"}):""]}),P({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",warning:Ct==="MQTT"?"Na een (her)start is de MQTT-buitentemperatuur pas geldig na een nieuwe live publicatie. Tot die tijd ontbreekt de buitentemperatuur en kan OpenQuatt naar CM98 (antivriescirculatie) gaan. De wachttijd hangt af van het publicatie-interval. Overweeg daarom Auto; dan kan OpenQuatt tijdens het wachten een andere geldige buitentemperatuurbron gebruiken.":"",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:Mn},activeRows:[x({label:"Waarde",key:"outsideTempSelected"}),x({label:"Bron",value:H()})],measurementRows:[x({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...O({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...D({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),P({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[x({label:"Toestemming",value:ht?"Niet gebruikt":p("heatingEnableSelected","Toegestaan","Geblokkeerd")}),ht?"":x({label:"Bron",value:uo})],measurementRows:[r?x({label:"OpenTherm",value:p("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",t?x({label:"CIC",value:p("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...O({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:p("heatingEnableHa","Toegestaan","Geblokkeerd")}),...D({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:p("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",optionLabels:Le,hiddenOptions:["CIC","CIC or HA input"],haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable",keepUnavailableCurrent:!0},activeRows:[x({label:"Toestemming",value:p("coolingEnableSelected","Toegestaan","Geblokkeerd")}),xt?"":x({label:"Bron",value:xn}),pe&&pe!==xn?x({label:"Via",value:pe}):""],measurementRows:[x({label:"Handmatig",value:p("manualCoolingEnable","Aan","Uit")}),r?x({label:"OpenTherm",value:p("otThermostatCoolingEnable","Toegestaan","Geblokkeerd")}):"",...O({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:p("coolingEnableHa","Toegestaan","Geblokkeerd")}),...D({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:p("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:u?"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen.":"Auto gebruikt een geldige Home Assistant-waarde wanneer die beschikbaar is. Kies Home Assistant om die bron expliciet te vereisen."},activeRows:[x({label:"Waarde",key:"coolingDewPointSelected"}),x({label:"Bron",value:W()})],measurementRows:[...O({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...D({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return Rr.length?re("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${Rr.join("")}</div>`):""}function lh(){let e=Bl(),r=o.mqttStatus?.enabled===!0?`
      <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--sensors oq-settings-mqtt-panel--compact">
        <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
          <div>
            <p class="oq-settings-quickstart-status-label">MQTT sensoren</p>
            <strong class="oq-settings-quickstart-status-value">${s(e)}</strong>
          </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-mqtt-sensors-modal"
          >
            Details
          </button>
        </div>
      </section>
    `:"";return re("Integratie","MQTT inputbronnen","Beheer de brokerverbinding voor externe MQTT-bronwaarden.",`
        <div class="oq-settings-mqtt-shell">
          <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--broker">
            <div class="oq-settings-field-head">
              <h3>MQTT brokerconfiguratie</h3>
            </div>
            <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(im())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(sm())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-mqtt-modal"
              >
                Aanpassen
              </button>
            </div>
          </section>
          ${r}
        </div>
      `)}function ch(){if(!S("usageTelemetryEnabled"))return"";let e=C("usageTelemetryEnabled"),t=o.loadingEntities||o.busyAction==="switch-usageTelemetryEnabled";return re("Privacy","Gebruiksstatistieken","Hier kies je of OpenQuatt beperkte technische gebruiksstatistieken deelt. Wifi-netwerknaam, wifi-wachtwoord en andere wachtwoorden of inloggegevens worden nooit meegestuurd. Een niet-bevestigde keuze blijft uit.",`<div class="oq-usage-settings">
      ${ns({enabled:e,busy:t,settings:!0})}
      ${as({collapsible:!0,idPrefix:"oq-settings-usage",open:o.usageTelemetryDetailsOpen})}
    </div>`)}function uh(){let e=[["login","Login",sa(),la(),"open-login-modal"],["api","Beveiligde verbinding met Home Assistant",nn(),an(),"open-api-security-modal"]];return re("Toegang","Toegang & Beveiliging","Beheer hier de web-login en bekijk of Home Assistant veilig verbonden is.",`
        <div class="oq-settings-access-security-shell">
          ${e.map(([t,r,n,a,i])=>`
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="${t}">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">${s(r)}</p>
                <strong class="oq-settings-quickstart-status-value">${s(n)}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(a)}</p>
              </div>
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="${i}">${t==="api"?"Status":"Aanpassen"}</button>
            </div>
          </div>
          `).join("")}
        </div>
      `)}function dh(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:ye[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${ye.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${me(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function ph(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:ye[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Bf(),Kf(),Rf(),Dg(),$g(),Gf(),jf()]:e==="service"?[Vf(),Rg()]:e==="heating"?[Hf()]:e==="cooling"?[ah()]:e==="integrations"?[ih(),lh(),sh()]:[zf(),yf(),uh(),ch(),kf(),Uf()]).filter(Boolean).join("")}
      </div>
    `}function HT(){if(!o.root||o.appView!=="settings")return!1;let e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;let r=Ie.has(o.settingsGroup)?o.settingsGroup:ye[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==ye.length)return!1;n.forEach(g=>{let b=String(g.dataset.groupId||"")===r;g.classList.toggle("is-active",b),g.setAttribute("aria-pressed",b?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(g=>{let p=String(g.dataset.oqSettingsInfo||""),b=o.settingsInfoOpen===p;g.classList.toggle("is-open",b);let y=g.querySelector(".oq-settings-info-popover");y&&(y.hidden=!b);let k=g.querySelector(".oq-settings-info-button");k&&k.setAttribute("aria-expanded",b?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(g=>{let p=String(g.dataset.oqSettingsField||"");if(!p)return;let b=g.querySelector(".oq-settings-static-value");if(b){let q=F(p);b.textContent!==q&&(b.textContent=q)}g.querySelectorAll("select[data-oq-field]").forEach(q=>{let T=String(q.dataset.oqField||p),M=String(E(T)||"");q.value!==M&&(q.value=M)}),g.querySelectorAll("input[data-oq-field]").forEach(q=>{let T=String(q.dataset.oqField||p),M=String(Re(T)||"");q.value!==M&&(q.value=M)});let y=g.querySelector(".oq-helper-slider-meta strong"),k=g.querySelector('input[type="range"][data-oq-field]');if(y&&k){let q=Y(p,ke(p,E(p)));y.textContent!==q&&(y.textContent=q)}}),t.querySelectorAll("[data-select-key]").forEach(g=>{let p=String(g.dataset.selectKey||""),b=String(g.dataset.selectOption||""),y=String(E(p)||""),k=b===y;g.classList.toggle("is-active",k),g.setAttribute("aria-pressed",k?"true":"false"),p==="strategy"?g.disabled=o.loadingEntities||o.busyAction==="save-strategy":p==="hpGeneration"?g.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":p==="curveControlProfile"?g.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":p==="phResponseProfile"&&(g.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");let q=g.closest(".oq-settings-choice-card-shell");q&&q.classList.toggle("is-active",k)});let a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let g=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",g),a.querySelectorAll("input[data-oq-field]").forEach(b=>{let y=String(b.dataset.oqField||""),k=String(Re(y)||"");b.value!==k&&(b.value=k)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(g=>{let p=String(g.dataset.controlKey||""),b=!!E(p),y=String(g.dataset.onLabel||"Aan"),k=String(g.dataset.offLabel||"Uit"),q=String(g.dataset.switchTitle||p),T=b?y:k;g.dataset.controlState=b?"off":"on",g.classList.toggle("is-on",b),g.setAttribute("aria-checked",b?"true":"false"),g.setAttribute("aria-label",`${q}: ${T}`),g.disabled=o.loadingEntities||o.busyAction===`switch-${p}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(g=>{let p=String(g.dataset.oqSwitchPill||""),b=!!E(p),y=String(g.dataset.onLabel||"Aan"),k=String(g.dataset.offLabel||"Uit"),q=b?y:k;g.classList.toggle("is-on",b),g.textContent!==q&&(g.textContent=q)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(g=>{let p=String(g.dataset.oqSwitchCopy||""),b=!!E(p),y=String(g.dataset.onCopy||""),k=String(g.dataset.offCopy||""),q=b?y:k;g.hidden=!q,g.textContent!==q&&(g.textContent=q)});let i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let g=i.querySelector(".oq-settings-quickstart-status-value"),p=i.querySelector(".oq-settings-quickstart-status-copy"),b=i.querySelector('button[data-oq-action="open-generation-modal"]'),y=Pt(),k=o.entities.hpGeneration||{},q=S("hpGeneration")&&Lt(k).length>0;if(g){let T=y||"Onbekend";g.textContent!==T&&(g.textContent=T)}if(p){let T="Pas dit aan als je een andere Quatt Hybrid hebt.";p.textContent!==T&&(p.textContent=T)}b&&(b.disabled=!q||o.loadingEntities||o.busyAction==="save-hpGeneration")}let l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let g=l.querySelector(".oq-settings-quickstart-status-value"),p=l.querySelector(".oq-settings-quickstart-status-copy"),b=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),y=Si(),k=C("cm100Active");g&&g.textContent!==y&&(g.textContent=y);let q=k?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";p&&p.textContent!==q&&(p.textContent=q),b&&(b.disabled=o.loadingEntities)}let c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){let g=c.querySelector(".oq-settings-quickstart-status-value"),p=c.querySelector(".oq-settings-quickstart-status-copy"),b=c.querySelector('button[data-oq-action="reset"]'),y=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",k=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";g&&g.textContent!==y&&(g.textContent=y),p&&p.textContent!==k&&(p.textContent=k),b&&(b.disabled=o.busyAction==="reset")}let u=t.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(g=>{let p=String(g.dataset.oqAccessSecurityItem||""),b=g.querySelector(".oq-settings-quickstart-status-value"),y=g.querySelector(".oq-settings-quickstart-status-copy"),k=g.querySelector("button[data-oq-action]");if(p==="login"){let q=sa(),T=la();b&&b.textContent!==q&&(b.textContent=q),y&&y.textContent!==T&&(y.textContent=T)}else if(p==="api"){let q=nn(),T=an();b&&b.textContent!==q&&(b.textContent=q),y&&y.textContent!==T&&(y.textContent=T)}k&&(k.disabled=!1)});let d=t.querySelector(".oq-settings-system-summary");if(d){let g=d.querySelectorAll(".oq-settings-system-row"),p={uptime:Yr(),ip:Jr(),updates:Do(),datetime:yi(),espTemp:rs(),restart:"Opnieuw opstarten"};g.forEach(k=>{let q=k.querySelector(".oq-settings-system-row-value"),T=k.dataset.oqDiagnosticsRow||"";if(q&&Object.prototype.hasOwnProperty.call(p,T)){let M=p[T];q.textContent!==M&&(q.textContent=M)}});let b=d.querySelector('button[data-oq-action="open-update-modal"]');b&&(b.disabled=!1);let y=d.querySelector('button[data-oq-action="open-restart-confirm"]');if(y){let k=o.busyAction==="restartAction";y.disabled=k,y.textContent=k?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(g=>{let p=String(g.dataset.oqSettingsField||""),b=String(g.dataset.oqHpOffsetRawKey||""),y=String(g.dataset.oqHpOffsetFinalKey||"");if(!p||!b||!y)return;let k=Ue(p),q=ca(b,y,p),T=Ee(Re(p)),M=Number.isFinite(q)&&Number.isFinite(T)?eo(q+T,k.uom||"\xB0C",2):Ce(y,2),A=g.querySelector("[data-oq-hp-offset-active]");if(A){let I=`${Ce(y,2)} actief`;A.textContent!==I&&(A.textContent=I)}let H=g.querySelector("[data-oq-hp-offset-raw]");if(H){let I=Number.isFinite(q)?eo(q,k.uom||"\xB0C",2):Ce(b,2);H.textContent!==I&&(H.textContent=I)}let j=g.querySelector("[data-oq-hp-offset-final]");j&&j.textContent!==M&&(j.textContent=M)});let m=t.querySelector(".oq-settings-curve-shell"),w=ie();if(!!m!==w)return!1;let v=!!a,f=String(E("phResponseProfile")||"")==="Custom";return v===f}Qp({patch:HT});function mh(){return F("controlModeLabel","").toLowerCase().includes("standby")}function Bt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function nt(e,t,r){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=r,!0)}function DT([e,t]){let r=Zs(t);if(!S(t)&&Number.isNaN(r))return"";let n=Js(t)?st(t):F(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function NT(e){let t=e.rows.map(DT).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function OT(e){let t=e.groups.map(NT).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function PT(e){let t=e.categories.map(OT).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function au(){let e=Ya.map(PT).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function fh(e=au()){return we(e)}function hh(e=au()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(fh(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var bh=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],LT=new Set(["day","week","month","year"]);function Be(e){let t=String(e||"").trim();return bh.some(r=>r.id===t)?t:"day"}function wh(e){let t=Be(e);o.energyHistoryView!==t&&(Ht({energyHistoryView:t,energyHistoryLastFetchAt:0}),h(),vh())}function vh(){typeof kr=="function"&&kr({force:!0}).then(e=>{e&&h()})}function vn(e){return LT.has(Be(e))}function us(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function yh(){return Wi(o.energyHistoryRaw)}function iu(){let e=String(o.energyHistoryRaw||""),t=null;return e.split(/\r?\n/).forEach(r=>{let n=Hc(r);n&&(t=n.dateKey)}),t}function IT(e=[],t=!0){let r=iu(),n=yh(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),t&&ds().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):us()}function Er(e){let t=R(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function FT(){let e=iu()||us(),t=ae(e);if(!t)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:Er("electricalEnergyDaily"),heatingInputWh:Er("heatingElectricalEnergyDaily"),coolingInputWh:Er("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:Er("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:Er("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:Er("boilerThermalEnergyDaily"),systemHeatOutputWh:Er("systemThermalEnergyDaily")};return ji.some(n=>Number.isFinite(r[n]))?r:null}function va(){let e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=jg(i)||Hc(i);if(!l)return;let c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});let r=FT();r&&!e.has(r.dateKey)&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return ds().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let c=ae(i.dateKey);if(!c)return;l=Cr({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:Wt(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${Wt(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}xr(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function ds(){let e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=Wg(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function jT(e){return ds().filter(t=>t.dateKey===Number(e))}function wn(e,t){return e.reduce((r,n)=>r+un(n,t),0)}function WT(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,r)=>t+un(e,r),0)}function VT(e){return un(e,"electricalInputWh")+WT(e)}function cs(e,t){let r=Number(e),n=Number(t);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function Ye(e,t=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(t)} kWh`:"\u2014"}function Cr({dateKey:e,year:t,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:u="bucket"}){return{sequence:0,dateKey:e,year:t,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function xr(e,t){return ji.forEach(r=>{e[r]+=un(t,r)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function BT(e){let t=new Map;return e.forEach(r=>{t.set(r.dateKey,r)}),t}function Sh(e,t){let r=Be(e);if(r==="day"){let n=xc(t)||ae(t);return n?String(n.key):""}if(r==="week"){let n=Fg(t);return n?String(n.key):""}if(r==="month"){let n=Ig(t);return n?String(n.key):""}if(r==="year"){let n=Number(t);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function ps(e,t){let r=Be(t),n=ae(IT(e,!0)),a=yh(),i=ds(),l=[...e.map(f=>f.dateKey),...i.map(f=>f.dateKey)].filter(f=>Number.isFinite(Number(f)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let c=l.length?Math.min(...l.map(Number)):n?.key,d=(c?ae(c):n)?.date||n?.date||new Date,m=n?.date||new Date,w=n?.key||us(),v=w;return r==="week"?(w=_c(d),v=_c(m)):r==="month"?(w=Bi(d),v=Bi(m)):r==="year"?(w=d.getFullYear(),v=m.getFullYear()):(w=je(d),v=je(m)),Number(w)>Number(v)&&(w=v),{min:String(w),max:String(v)}}function kh(e,t){let r=Number(e);return Number.isFinite(r)?r<Number(t.min)?String(t.min):r>Number(t.max)?String(t.max):String(e):String(t.max)}function KT(e,t,r=ps(e,t)){let n=Be(t),a=o.energyHistoryPeriodSelection?.[n],i=Sh(n,a);return kh(i||r.max,r)}function zT(e,t){let r=Be(e),n=[],a=0;if(r==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){let l=ae(i);n.push({value:i,label:Ac(i),group:l?String($c(l.date).year):""}),i=l?String(je(Sr(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){let l=yr(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Mc(i,-1),a+=1}return n}if(r==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)n.push({value:String(i),label:String(i)});return n}function ms(e,t){let r=Be(t);if(!vn(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=ps(e,r),a=KT(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:zT(r,n)}}function UT(e,t){let r=Be(t);if(!vn(r))return{from:"",to:"",hours:"0"};let n=ms(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=ae(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=cn(a.date),l=Sr(i,6);return{from:String(je(i)),to:String(je(l)),hours:"0"}}if(r==="month"){let a=yr(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Cc(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function GT(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";let e=va(),t=UT(e,o.energyHistoryView||"day"),r=new URLSearchParams;t.from&&r.set("from",t.from),t.to&&r.set("to",t.to),r.set("hours",t.hours);let n=r.toString();return n?`?${n}`:""}Ug(GT);function ya(e,t){let r=Be(e);if(!vn(r))return;let n=va(),a=ps(n,r),i=Sh(r,t),l=kh(i||a.max,a);Ht({energyHistoryPeriodSelection:{...o.energyHistoryPeriodSelection,[r]:l},energyHistoryLastFetchAt:0}),h(),vh()}function qh(e,t){let r=Be(e);if(!vn(r))return;let n=va(),a=ms(n,r),i=Number(t)<0?-1:1,l=a.selectedValue;if(r==="day"){let c=ae(a.selectedValue);l=c?String(je(Sr(c.date,i))):l}else if(r==="week"){let c=ae(a.selectedValue);l=c?String(je(Sr(c.date,i*7))):l}else r==="month"?l=Mc(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));ya(r,l)}function Th(e){let t=Be(e);if(!vn(t))return;let r=va(),n=ps(r,t);ya(t,n.max)}function QT(e,t,r=ms(e,t)){let n=Be(t),a=BT(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let c=ae(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=jT(c.key);if(u.length){let f=new Map(u.map(p=>[p.hour,p])),g=[];for(let p=0;p<24;p+=1){let b=String(p),y=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(p).padStart(2,"0")}:00 - ${String((p+1)%24).padStart(2,"0")}:00`,k=Cr({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:p,label:b,tooltipLabel:y,sortKey:p,source:"hour"}),q=f.get(p);q&&xr(k,q),g.push(k)}return{buckets:g,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let d=a.get(c.key),m=iu()||us(),w=c.key===m?"Vandaag":Wt(c.key),v=Cr({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:w,sortKey:c.key,source:"day"});return d&&xr(v,d),{buckets:[v],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let c=ae(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=cn(c.date),d=[];for(let m=0;m<7;m+=1){let w=Sr(u,m),v=je(w),f=ae(v),g=Cr({dateKey:v,year:f.year,month:f.month,day:f.day,label:Wt(v,"weekday"),sortKey:v}),p=a.get(v);p&&xr(g,p),d.push(g)}return{buckets:d,title:"Week",detail:Ac(r.selectedValue)}}if(n==="month"){let c=yr(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=Cc(c.year,c.month),d=[];for(let m=1;m<=u;m+=1){let w=Ec(c.year,c.month,m),v=je(w),f=Cr({dateKey:v,year:c.year,month:c.month,day:m,label:String(m),sortKey:v}),g=a.get(v);g&&xr(f,g),d.push(f)}return{buckets:d,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let c=Number(r.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=[];for(let d=1;d<=12;d+=1){let m=c*1e4+d*100+1,w=Cr({dateKey:m,year:c,month:d,day:1,label:Wt(m,"month"),sortKey:d,source:"month"});e.filter(v=>v.year===c&&v.month===d).forEach(v=>xr(w,v)),u.push(w)}return{buckets:u,title:"Jaar",detail:String(c)}}let i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,Cr({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),xr(i.get(c.year),c)});let l=[...i.values()].sort((c,u)=>c.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function YT(e){let t=wn(e,"heatpumpHeatOutputWh"),r=wn(e,"heatpumpCoolingOutputWh"),n=wn(e,"boilerHeatOutputWh");return{electricalInputWh:wn(e,"electricalInputWh"),heatingInputWh:wn(e,"heatingInputWh"),coolingInputWh:wn(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:r,boilerOutputWh:n,outputWh:t+r+n}}function JT(e){let t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=t+r;return!Number.isFinite(n)||n<=0?Number.NaN:t/n*100}function ZT(e){let t=cs(e.heatOutputWh,e.heatingInputWh),r=cs(e.coolingOutputWh,e.coolingInputWh),n=Number(e.heatOutputWh||0)>0&&t!=="\u2014",a=Number(e.coolingOutputWh||0)>0&&r!=="\u2014";return n&&a?{label:"COP / EER",value:`${t} / ${r}`}:a?{label:"Gemiddelde EER",value:r}:{label:"Gemiddelde COP",value:t}}function ls(e,t,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function nu(e,t,r){let n=[];r.forEach(i=>{let l=String(i.group||""),c=n[n.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},n.push(c)),c.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
          <optgroup label="${s(i.label)}">
            ${i.options.map(l=>`
              <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
                ${s(l.label)}
              </option>
            `).join("")}
          </optgroup>
        `:i.options.map(l=>`
          <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
            ${s(l.label)}
          </option>
        `).join("")).join(""):r.map(i=>`
        <option value="${s(i.value)}" ${String(i.value)===String(e.selectedValue)?"selected":""}>
          ${s(i.label)}
        </option>
      `).join("");return`
      <label class="oq-energy-history-period-field">
        <span>${s(t)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${s(e.view)}"
        >
          ${a}
        </select>
      </label>
    `}function gh(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Vi(e.selectedValue))}"
            min="${s(Vi(e.minValue))}"
            max="${s(Vi(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?nu(e,"Week",e.options):e.view==="month"?nu(e,"Maand",e.options):e.view==="year"?nu(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function XT(e){return vn(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${gh(e)}
        <div class="oq-energy-history-period-nav" aria-label="Periode navigatie">
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="-1"
            ${e.canPrevious?"":"disabled"}
          >&lt; Vorige</button>
          <button
            type="button"
            class="oq-energy-history-period-button oq-energy-history-period-button--now"
            data-oq-action="select-energy-history-now"
            ${e.isNow?"disabled":""}
          >Nu</button>
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="1"
            ${e.canNext?"":"disabled"}
          >Volgende &gt;</button>
        </div>
      </div>
    `:`
        <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
          ${gh(e)}
        </div>
      `}function eE(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function tE(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${bh.map(t=>{let r=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function oE(e){let t=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+r+n+a),c=d=>`${Math.max(0,Number(d||0)/l*100).toFixed(2)}%`,u=JT(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Ye(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Ye(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Ye(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Ye(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function rE(e){let t=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(t))),n=t/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function nE(e){let t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function aE(e){return e>=999500?"MWh":"kWh"}function iE(e){let d=Math.max(1e3,...e.map(VT)),m=rE(d),w=e.length?1218/e.length:1218,v=Math.max(6,Math.min(38,w*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:m,barSlot:w,barWidth:v,yOf:g=>26+(1-Math.min(1,Math.max(0,Number(g||0)/m)))*196}}function sE(e){let t=cs(e.heatpumpHeatOutputWh,e.heatingInputWh),r=cs(e.heatpumpCoolingOutputWh,e.coolingInputWh);return[e.tooltipLabel||e.label||Wt(e.dateKey),`Elektrisch totaal: ${Ye(e.electricalInputWh,1)}`,`Elektrisch verwarmen: ${Ye(e.heatingInputWh,1)}`,`Elektrisch koelen: ${Ye(e.coolingInputWh,1)}`,`Warmtepomp warmte: ${Ye(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Ye(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel warmte: ${Ye(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${r}`].join(`
`)}function lE(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=iE(e),n=aE(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,c)=>{let u=r.left+r.barSlot*c+r.barSlot/2,d=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],m=r.height-r.bottom,w=d.map(p=>{let b=un(l,p.key);if(b<=0)return"";let y=b/r.axisMax*r.plotHeight;return m-=y,`
          <rect
            x="${(u-r.barWidth/2).toFixed(1)}"
            y="${m.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,y).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${p.className}"
          >
            <title>${s(`${l.label} \xB7 ${p.label}: ${Ye(b,1)}`)}</title>
          </rect>
        `}).join(""),f=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${u.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Wt(l.dateKey))}</text>`:"",g=sE(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(g)}" tabindex="0">
          <title>${s(g)}</title>
          <rect
            x="${(u-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${w}
        </g>
        ${f}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(Be(t))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let c=r.yOf(l);return`
            <line x1="${r.left}" y1="${c.toFixed(1)}" x2="${r.width-r.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(nE(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function cE(e=null){let t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function uE(e,t,r,n){let a=Be(r)==="day"?Number(n):Number.NaN,i=Number.isFinite(a)?e.find(l=>l.dateKey===a):null;return i?[i]:t}function su(){let e=va(),t=Be(o.energyHistoryView),r=ms(e,t),n=QT(e,t,r),a=uE(e,n.buckets,t,r.selectedValue),i=YT(a);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:i,activeView:t}}function Eh(e=su()){return we({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,summary:e.summary})}function Ch(e=su()){let t=e.summary,r=ZT(t),n=e.buckets[0]?.dateKey?Wt(e.buckets[0].dateKey):"\u2014",a=e.buckets[e.buckets.length-1]?.dateKey?Wt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Eh(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${tE(e.activeView)}
          ${XT(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${ls(r.label,r.value,`${s(n)} - ${s(a)}`)}
          ${ls("Elektrisch",Ye(t.electricalInputWh,1),"verbruikt")}
          ${ls("Warmtepomp",Ye(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${ls("Cv-ketel",Ye(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${oE(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${lE(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${cE(t)}
      </section>
    `}function lu(e){if(o.appView!=="results"||!o.root)return;let t=e.target.closest?.("[data-oq-energy-history-tip]"),r=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!t||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(d=>`<span>${s(d)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${c.toFixed(0)}px, ${u.toFixed(0)}px)`}function xh(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${hh()}
        </div>
      </section>
    `}function Mh(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Ch()}
        </div>
      </section>
    `}function dE(){if(!o.root||o.appView!=="energy")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=au();return nt(t,fh(n),hh(n))}function pE(){if(!o.root||o.appView!=="results")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=su(),a=eE();return(a?!1:nt(t,Eh(n),Ch(n)))||a}Eo({patchEnergyDom:dE,patchResultsDom:pE});var mE=Object.fromEntries([["hp_fault","Warmtepompstoring","Een bevestigde ODU-storing bepaalt beschikbaarheid en systeemreactie."],["hp_protection","Warmtepompbeveiliging","De HP begrenst of blokkeert zichzelf tot de voorwaarde herstelt."],["hp_preheat","Eerste-startvoorverwarming","De compressor wacht op de vereiste voorverwarming."],["hp_link_loss","HP-verbinding bevestigd weg","Een korte hapering is eerst gefilterd; bevestigde uitval wijzigt de beschikbaarheid."],["hp_start_failed","Warmtepompstart niet bevestigd","De start leidde niet op tijd tot een draaiende compressor."],["hp_stop_unconfirmed","Warmtepompstop niet bevestigd","De veilige stopstatus is nog niet bevestigd."],["hp_persistence_failure","Resetstatus niet veilig opgeslagen","OpenQuatt blokkeert start en fallback omdat de handmatige resetstatus niet veilig kon worden opgeslagen."],["hp_recovery_wait","Warmtepompherstel wordt bevestigd","Herstel is gezien, maar moet eerst stabiel blijven."],["hp_recovered","Warmtepomp stabiel hersteld","De warmtepomp is weer inzetbaar; de ketelfallback kan gecontroleerd worden be\xEBindigd."],["boiler_fallback","Ketelfallback (CM4)","CM4 is na controle van de systeemvoorwaarden vrijgegeven."],["fallback_blocked","Ketelfallback geblokkeerd","Een veiligheidsvoorwaarde geeft CM4 nog niet vrij."],["heating_request","Warmtevraag actief","De actie volgt op geldige warmtevraag."],["commissioning","Commissioning heeft voorrang","Een servicetaak beheert de installatie."],["supervisory_override","Handmatige override heeft voorrang","Een override blokkeert automatische fallback."]].map(([e,t,r])=>[e,{label:t,summary:r,checks:[]}])),gE=new Set(["incident_start","incident_clear","incident_acknowledged","hp_availability_change","control_mode_change","boiler_fallback_start","boiler_fallback_stop","hp_start_confirmed","hp_stop_confirmed"]),fE={hp_link_loss:"hp_link_loss",hp_start_failed:"hp_start_failed",hp_stop_unconfirmed:"hp_stop_unconfirmed",hp_persistence_failure:"hp_manual_reset_persistence_failure"},hE={available:["weer beschikbaar","De warmtepomp is stabiel hersteld."],recovering:["herstelt","Herstel wordt eerst stabiel bevestigd."],faulted:["niet beschikbaar door storing","Een bevestigde storing blokkeert een nieuwe start."],offline:["verbinding bevestigd weg","De communicatie bleef na meerdere controles weg."],preheat:["wacht op voorverwarming","De compressorstart is tijdelijk geblokkeerd."],blocked:["tijdelijk niet startklaar","Een technische voorwaarde blokkeert de start."],suspect:["status wordt gecontroleerd","Een korte hapering verandert de beschikbaarheid nog niet."]},bE={label:"Technische statuswijziging",summary:"Een bevestigde statuswijziging is verwerkt.",checks:[]},wE="OpenQuatt beoordeelt de veilige vervolgstap automatisch.",Et=e=>{let t=Number(e);return Number.isInteger(t)&&t>=0&&t<=100?t:null},yn=(e,t,r,n=wE)=>({title:e,summary:t,detail:r.summary,next:n,reasonLabel:r.label,checks:r.checks||[]});function cu(e){return mE[String(e||"")]||null}function $h(e,t="Warmtepomp"){let r=String(e?.event_type||"");if(!gE.has(r))return null;let n=cu(e.reason)||bE,a=Gn({id:e.value_a,key:fE[e.reason]||""});if(r==="incident_start")return yn(Number(e.value_a)>=1e3?a:`${a} actief`,`${t}: de melding is bevestigd en telt mee in de regeling.`,n);if(r==="incident_clear"){let l=(Number(e.flags)&1)!==0;return yn(`${a} hersteld`,l?`${t}: de oorzaak is weg, maar de melding blijft vastgehouden tot bevestiging.`:`${t}: de oorzaak is stabiel hersteld.`,{...n,label:"Incident hersteld"})}if(r==="incident_acknowledged")return yn(`${a} bevestigd`,`${t}: de herstelde, vastgehouden melding is bevestigd.`,{...n,label:"Herstelde melding bevestigd"});if(r==="hp_availability_change"){let l=hE[e.to]||["beschikbaarheid gewijzigd","De beschikbaarheid is opnieuw bepaald."];return yn(`${t} ${l[0]}`,l[1],n)}if(r==="control_mode_change"){let l=Et(e.value_a),c=Et(e.value_b)??Et(e.cm);return yn(l!==null&&c!==null?`CM${l} \u2192 CM${c}`:"Control mode gewijzigd",c===4&&l===3?"De regelrol wijzigt van CV-ondersteuning naar ketelfallback.":"De supervisor heeft een nieuwe regelrol gekozen.",c===4?{...n,label:"Ketelfallbackrol (CM4)"}:n,"De uitvoerstatus toont apart of de gekozen bron wordt aangestuurd.")}let i={boiler_fallback_start:["Ketelfallback gestart (CM4)","Geen warmtepomp is inzetbaar en de voorwaarden geven de ketel vrij.","Ketelfallback actief"],boiler_fallback_stop:["Ketelfallback gestopt","CM4 is niet meer nodig of vrijgegeven.","Ketelfallback be\xEBindigd"],hp_start_confirmed:[`${t} gestart`,"De compressorstart is bevestigd.","Start bevestigd"],hp_stop_confirmed:[`${t} gestopt`,"De stopopdracht is bevestigd.","Stop bevestigd"]}[r];return yn(i[0],i[1],{...n,label:i[2]})}function _h(e){let t=String(e?.event_type||"");return["incident_clear","incident_acknowledged","boiler_fallback_stop","hp_start_confirmed","hp_stop_confirmed"].includes(t)?"normal":t!=="hp_availability_change"?"":e.to==="available"?"normal":["recovering","preheat","blocked","suspect"].includes(e.to)?"limited":["faulted","offline"].includes(e.to)?"fault":""}function uu(e,t){if(e?.event_type==="control_mode_change")return{from:Et(e.value_a)??Et(t),to:Et(e.value_b)??Et(e.cm)};if(e?.event_type==="boiler_fallback_start")return{from:Et(e.value_a)??Et(t),to:4};if(e?.event_type==="boiler_fallback_stop"){let r=Et(e.cm);return{from:4,to:Et(e.value_b)??(r===4?null:r)}}return null}function Ah(e){return uu(e,null)?.to??null}function vE({label:e,value:t,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function qa(e,t=!1){return e.map(r=>vE({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?st(r.key):r.value,status:t})).join("")}function gu(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function fu(){let e=Nt();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(we(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Nh({className:e,title:t,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function Rh(e){let t=String(e||"").trim();return{None:"geen bron",Manual:"handmatig",Disabled:"handmatig","HA input":"HA-invoer",MQTT:"MQTT","OT thermostat":"OpenTherm","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OpenTherm + handmatig"}[t]||t}function Sa(e,t){return!t||t==="geen bron"?e:`${e} Toestemming: ${t}.`}function hu(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function yE(e,t){let r=t?"active":"neutral",n=hu(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function SE(e){return`
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${s(`Waarschuwing: ${e}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${s(e)}</span>
      </span>
    `}function bu(e,t,r,n){return`${r?SE(n):""}${yE(e,t)}`}function Oh(e,t,r,n,a){if(!e)return;let i=we({mode:t,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(Bt(e,bu(t,r,n,a)),e.dataset.renderSignature=i)}function gs(e,t,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||F(t))}</strong>
      </div>
    `}function kE(e,t,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function qE(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}var TE=Jo;function EE(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function CE(e){let t=EE(F("timeNowHhmm",""));if(!Number.isFinite(t))return"";let r=Math.round(e),n=((t-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function xE(e,t){let r=Math.max(0,(Number(t)-Number(e))/6e4),n=TE(r),a=S("timeValid")&&C("timeValid")?CE(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function ME(e){let t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Ph(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>S(e))||""}function $E(){return["hp1WaterIn","hp2WaterIn"].find(e=>S(e))||""}function Lh(e=F("controlModeLabel","")){let t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function Kt(){return Lh()}function Ih(e,t){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:t?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function wu(){return Kt()?"Koeling":ie()?"Stooklijn":"Power House"}function _E(){let e=["phouseReq","strategyRequestedPower"];for(let t of e){let r=R(t);if(!Number.isNaN(r))return r}return Number.NaN}function Fh(){let e=_E(),t=R("phouseHouse"),r=R("totalHeat"),n=R("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:U(e,0,"W"),houseText:U(t,0,"W"),correctionText:ME(a),capacityText:st("hpCapacity"),statusTitle:i,statusCopy:l}}function jh(){let e=R("curveSupplyTarget"),t=R("supplyTemp"),r=Ph(),n=r?R(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:st("curveSupplyTarget"),supplyText:st("supplyTemp"),deltaText:qE(a),capacityText:st("hpCapacity"),statusTitle:l,statusCopy:c}}function Wh(){let e=R("supplyTemp"),t=F("coolingGuardMode",""),r=F("coolingFallbackNightMinOutdoorTemp","\u2014"),n=R("coolingSupplyError"),a=R("coolingDemandRaw"),i=C("coolingPermitted"),l=C("coolingRequestActive"),c=F("coolingBlockReason","Onbekend"),u=ru(c),d=Ih(c,l),m="Wacht op koelvraag",w="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return d?(m="Wacht op koelvraag",w="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(m="Houdt doel vast",w="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(m="Trekt aanvoer omlaag",w="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(m="Benadert koeldoel",w="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(m="Koelt rustig door",w="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(m="Koeling gereed",w="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(m="Koeling geblokkeerd",w=`Blokkade: ${u}.`),{targetText:st("coolingSupplyTarget"),supplyText:st("supplyTemp"),safeFloorText:st("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:r,demandText:st("coolingDemandRaw"),statusTitle:m,statusCopy:w,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:d}}function fs(){if(Kt()){let t=Wh(),r=t.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ie()){let t=jh();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=Fh();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function vu(e){return Nh({className:"oq-overview-system",title:e.title,copy:e.copy,signature:we(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>kE(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function AE(){if(!C("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(Kt()){let n=Wh(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(mh())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let t=(ie()?jh():Fh()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function RE(){return C("openquattEnabled")?Kt()?C("coolingPermitted")?C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:F("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:C("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function yu(e,t){let r=AE(),n=RE();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Su(e,t){let r=yu(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(we(r))}">
        ${gu("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${qa(r,!0)}
        </div>
      </section>
    `}function ku(){let e=Kt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function HE(){let e=C("openquattEnabled"),t=E("openquattResumeAt"),r=Fn(t),n=(o.loadingEntities||o.entitySyncInFlight)&&!S("openquattResumeAt"),a=C("manualCoolingEnable"),i=S("coolingEnableSelected")?C("coolingEnableSelected"):a,l=Rh(F("coolingEnableEffectiveSource","")),c=String(E("coolingEnableSource")||"").trim(),u=Rh(E("coolingEnableSource")),d=String(E("silentModeOverride")||"Schedule"),m=!C("coolingPermitted"),w=C("coolingRequestActive"),v=Lh(),f=F("coolingBlockReason",""),g=Ih(f,w),p="Uit",b=c==="Disabled"?"Koeling is niet toegestaan: handmatig staat uit.":u&&u!=="geen bron"?`Koeling is niet toegestaan: ${u} geeft geen toestemming en handmatig staat uit.`:"Koeling is niet toegestaan.";i&&v?(p="Actief",b=Sa("Koeling draait nu.",l)):i&&g?(p="Aan",b=Sa("Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint.",l)):i&&m?(p="Geblokkeerd",b=Sa(ru(f||"Koeling wacht nog op veilige condities."),l)):i&&w?(p="Start bijna",b=Sa("Er is koelvraag. Koeling start zodra dat kan.",l)):i&&(p="Aan",b=Sa("Koeling is toegestaan en wacht op koelvraag.",l));let y="Uit",k="Stille modus staat uit.",q="neutral";return d==="On"?(y="Aan",k="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",q="orange"):d==="Schedule"&&(y="Schema",C("silentActive")?(k="Stille modus staat nu aan via het tijdvenster.",q="violet"):k="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?Lr(t,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:p,copy:b,buttonLabel:a?"Handmatig uit":"Handmatig aan",nextState:a?"off":"on",tone:i?v?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:y,copy:k,tone:q,kind:"select",selectedOption:d,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(T=>S(T.key))}function DE(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(t=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${s(t.tone||"neutral")}${t.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${s(t.label)}</span>
            <strong>${t.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${s(t.value)}</span>
              </span>
            `:s(t.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function Sn({className:e,action:t,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${n?" is-busy":""}"
        type="button"
        ${t?`data-oq-action="${s(t)}"`:""}
        ${i}
        ${o.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(r)}</span>
        </span>
      `:s(n?"Bezig...":r)}</button>
    `}function NE(e){if(e.kind==="openquatt-control"){let t=o.busyAction==="openquatt-regulation",r=(o.loadingEntities||o.entitySyncInFlight)&&!S("openquattResumeAt");return C("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${Sn({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${Sn({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${Sn(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Fn()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let t=o.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>Sn({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${Sn({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:o.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function qu(){let e=HE();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${gu("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${DE(t.meta)}
            ${NE(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Vh(e){let t=F("controlModeLabel");return`
      <section class="oq-overview-summary-shell">
        <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Overzicht</p>
            <h2 class="oq-helper-section-title">Live regeling</h2>
            <p class="oq-helper-section-copy">Hier zie je in \xE9\xE9n oogopslag hoe OpenQuatt nu werkt.</p>
          </div>
        </div>
        <div class="oq-overview-summary-layout">
          <div class="oq-overview-summary-main">
            <section class="oq-overview-kpis" aria-label="Kerncijfers">
              ${gu("Kerncijfers")}
              <div class="oq-overview-top">
                ${qa(ku())}
              </div>
            </section>
            ${Su(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(ii())}">
            ${qu()}
          </aside>
        </div>
      </section>
    `}function hs(){let e=Ph(),t=$E();return Kt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Tu(e=hs()){return we({...e,values:e.rows.map(t=>t.value||F(t.key))})}function Eu(){let e=hs();return Nh({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Tu(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>gs(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}var Hh=360,OE=100;function so(){let e=pa(o.trendWindowHours||_t);return e!==o.trendWindowHours&&pn(e),e}function Bh(e=so()){return Math.max(1,Number(e)||24)*60*60*1e3}function PE(e=so()){let t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function Cu(e=so()){let t=Number(e)||24;if(t>=72&&t%24===0){let r=t/24;return`${r} ${r===1?"dag":"dagen"}`}return`${t} uur`}function du(e){if(!Number.isFinite(e))return"\u2014";let t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(t)}catch{return t.toLocaleString("nl-NL",r)}}function LE(e){let t=String(e||"").trim().split("|");if(t.length<5)return null;let r=Number(t[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(t[1]),supply:n(t[2]),room:t.length>=8?n(t[3]):null,roomSetpoint:t.length>=8?n(t[4]):null,flow:t.length>=8?n(t[5]):null,input:t.length>=8?n(t[6]):n(t[3]),output:t.length>=8?n(t[7]):n(t[4])}}function mu(){return!1}function pu(e=so()){return[]}function Kh(){let e=Bh(),t=String(o.trendHistoryRaw||"").trim();if(!t)return mu()?pu():[];let r=t.split(/\r?\n/).map(LE).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-Hh):pu();let i=Math.max(0,a-e),l=r.filter(c=>c.t>=i).slice(-Hh);return l.length?l:mu()?pu(windowHours):[]}function xu(){let e=so(),t=Cu(e),r=Kh(),n=mu()&&r.length===0,a=Kt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<OE?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function IE(e){let t=e.samples[e.samples.length-1]||null;return we({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function ka(e,t){if(!e||!t)return Number.NaN;let r=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function FE(e,t){let r=[];return e.forEach(n=>{t.forEach(a=>{let i=ka(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function jE(e){if(!Number.isFinite(e)||e<=0)return 1;let t=Math.floor(Math.log10(e)),r=e/10**t,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**t}function WE(e,t){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(t)?t.map(v=>Number(v?.axisMin)).find(v=>Number.isFinite(v)):Number.NaN,l=Array.isArray(t)?t.map(v=>Number(v?.axisMax)).find(v=>Number.isFinite(v)):Number.NaN,c=Array.isArray(t)?t.map(v=>Number(v?.axisTickStep)).find(v=>Number.isFinite(v)&&v>0):Number.NaN,u=Math.max(1,Number.isFinite(c)?c:jE(a/4)),d=[];if(Number.isFinite(i)||Number.isFinite(l)){let v=Number.isFinite(i)?i:0,f=Number.isFinite(l)?l:Math.ceil(n/u)*u,g=Math.floor(v/u)*u,p=Math.ceil(f/u)*u;for(let b=g;b<=p+u*.5;b+=u)d.push(b)}else{let v=a/u,f=v<=1.8?3:v<=4.25?5:7,g=Math.floor(f/2),p=(r+n)/2,b=Math.round(p/u)*u;for(let y=-g;y<=g;y+=1)d.push(b+y*u)}let m=d[0],w=d[d.length-1];return{ticks:d,axisMin:m,axisMax:w,axisDecimals:0}}function zh(e,t,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:so(),i=Bh(a),l=640,c=220,u=46,d=18,m=18,w=34,v=l-u-d,f=c-m-w,g=e[e.length-1],p=!!r.mockData,b=p?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:g?g.t:0,y=p?0:b-i,k=Math.max(b-y,1),q=k,T=FE(e,t),M=T.min===T.max?{min:T.min-1,max:T.max+1}:{min:T.min-Math.max((T.max-T.min)*.12,1),max:T.max+Math.max((T.max-T.min)*.12,1)},A=WE(T,t),H=N=>u+(N-y)/k*v,j=N=>{if(!Number.isFinite(N))return Number.NaN;let J=(N-M.min)/Math.max(M.max-M.min,1);return m+(1-Math.min(1,Math.max(0,J)))*f},I=[0,.5,1].map(N=>u+v*N),W=A.ticks.map(N=>j(N)),x=A.ticks.map((N,J)=>({x:u-10,y:W[J],text:U(N,A.axisDecimals)})),O=e.map(N=>{let J=H(N.t),P=t.map(V=>{let X=ka(V,N);return Number.isFinite(X)?{seriesId:V.id||V.sampleKey||V.label,tone:V.tone,label:V.label,decimals:V.decimals,unit:V.unit,value:X,x:J,y:j(X)}:null});return{sample:N,x:J,values:P}}),D=t.flatMap(N=>{let J=[],P=[];return e.forEach(V=>{let X=ka(N,V);if(!Number.isFinite(X)){P.length&&(J.push(P),P=[]);return}P.push({x:H(V.t),y:j(X)})}),P.length&&J.push(P),J.map(V=>V.length<2?{tone:N.tone,points:V,path:""}:{tone:N.tone,points:V,path:V.map((X,Pe)=>`${Pe===0?"M":"L"} ${X.x.toFixed(1)} ${X.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:u,right:d,top:m,bottom:w,plotWidth:v,plotHeight:f,latest:g,uptimeMs:q,endTime:b,startTime:y,span:k,windowHours:a,range:T,displayRange:M,gridXs:I,gridYs:W,yAxisLabels:x,points:O,tracks:D,series:t}}function bs(){return we({windowHours:so(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:Kt()})}function VE(e){return xu().find(t=>t.id===e)||null}function BE(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-t);l<n&&(r=i,n=l)}),r}function KE(e,t){let r=Uh(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(U(r,e.decimals,e.unit))}</strong>
      </div>
    `}function Uh(e,t){if(e?.currentKey&&S(e.currentKey)){let r=R(e.currentKey);if(Number.isFinite(r))return r}return ka(e,t)}function Mu(e){e&&xu().forEach(t=>{let r=e.querySelector(`[data-oq-trend-card="${t.id}"]`),n=t.samples[t.samples.length-1]||null;r&&t.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=U(Uh(a,n),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function zE(e,t,r=!1,n=so()){let a=zh(e,t,{mockData:r,windowHours:n}),i=Cu(n),l=du(a.startTime),c=du(a.startTime+a.span/2),u=du(a.endTime),d=a.tracks.flatMap(m=>{if(m.points.length<2){let w=m.points[0];return w?`
          <circle
            cx="${w.x.toFixed(1)}"
            cy="${w.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(m.tone)}"
          ></circle>
        `:[]}return`
        <path d="${m.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(m.tone)}"></path>
        <circle
          cx="${m.points[m.points.length-1].x.toFixed(1)}"
          cy="${m.points[m.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(m.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(m=>`<line x1="${m.toFixed(1)}" y1="${a.top}" x2="${m.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(m=>`<line x1="${a.left}" y1="${m.toFixed(1)}" x2="${a.width-a.right}" y2="${m.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${d}
        ${a.yAxisLabels.map(m=>`
          <text
            x="${m.x}"
            y="${m.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(m.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${t.map(m=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(m.tone)}"
              data-oq-trend-hover-dot="${s(m.id||m.sampleKey||m.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(c)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function UE(e){let t=e.samples[e.samples.length-1]||null,r=Cu(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(IE(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>KE(n,t)).join("")}
            </div>
          </div>
        </div>
        ${zE(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function ws(){let e=xu();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(bs())}">
        <div class="oq-overview-trends-grid">
          ${e.map(UE).join("")}
        </div>
      </section>
    `}function GE(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function QE(){let e=so(),t=Nc();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Yo.map(r=>`
          ${(()=>{let a=r>168&&!t,i=r/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===r?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${r}"
            aria-pressed="${e===r?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(PE(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function YE(){let e="overview-trends-history",t=o.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${t?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s("Uitleg bij Diagnose")}"
          aria-expanded="${t?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${t?"":"hidden"}>
          <p>${s("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function Gh(){let e=wt(),r=Kh().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${YE()}
          </div>
          <div class="oq-overview-head oq-overview-trends-head">
            <div>
              <p class="oq-helper-label">Diagnose</p>
              <h2 class="oq-helper-section-title">Technische trends</h2>
              <p class="oq-helper-section-copy">Analyseer temperaturen, vermogen, flow en statuslijnen voor troubleshooting.</p>
            </div>
            <div class="oq-overview-trends-meta">
              ${e?`
                <div class="oq-overview-trends-window">
                  <span>Venster</span>
                  ${QE()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?ws():GE()}
        </div>
      </section>
    `}function JE(){if(!o.root||o.appView!=="diagnosis")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=e.querySelector(".oq-overview-trends");return t?(nt(t,bs(),ws()),Mu(e),Ta(e),!0):!1}function $u(e){if(!e)return null;let t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function Dh(e,t,r,n=$u(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;let a=Math.max(0,Math.min(t.points.length-1,r)),i=t.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let c=xE(i.sample.t,t.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=c.value,n.hoverNote.textContent=c.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let u=[];t.series.forEach(d=>{let m=ka(d,i.sample),w=d.id||d.sampleKey||d.label,v=n.hoverDots[w];if(!Number.isFinite(m)){v&&v.setAttribute("display","none");return}let f=i.values.find(g=>g.seriesId===w);v&&f&&(v.removeAttribute("display"),v.setAttribute("cx",f.x.toFixed(1)),v.setAttribute("cy",f.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(d.tone)}">
          <span>${s(d.label)}</span>
          <strong>${s(U(m,d.decimals,d.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function ZE(e){if(!e)return;let t=$u(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Ta(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=VE(r.dataset.oqTrendCard);if(!i)return;let l=zh(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let c=$u(r),u=0,d=null,m=()=>{let f=d;d=null,u=0;let g=a.getBoundingClientRect();if(!g.width||!g.height)return;let p=Number(f?.clientX);if(!Number.isFinite(p)){Dh(r,l,l.points.length-1,c);return}let y=Math.min(g.width,Math.max(0,p-g.left))/g.width*l.width,k=BE(l,y);Dh(r,l,k,c)},w=f=>{d=f,u||(u=window.requestAnimationFrame(m))},v=()=>{u&&(window.cancelAnimationFrame(u),u=0),d=null,ZE(r)};a.addEventListener("pointermove",w),a.addEventListener("pointerenter",w),a.addEventListener("pointerleave",v),a.addEventListener("focus",w),a.addEventListener("blur",v),a.addEventListener("touchstart",w,{passive:!0}),r.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),d=null,a.removeEventListener("pointermove",w),a.removeEventListener("pointerenter",w),a.removeEventListener("pointerleave",v),a.removeEventListener("focus",w),a.removeEventListener("blur",v),a.removeEventListener("touchstart",w)}})}Eo({patchDiagnosisDom:JE});function Ou(e,t,r){let n=ys(F(t.mode,"Unknown")),a=C(t.defrost),i=ko(F(t.failures,"None")),l=ui(i),c=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:n==="Koelen"?t.cooling:t.heat,schematic:l1(e,t,r,n,a,l,c)}}function Yh(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${f1(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function Au(e,t,r,n){return`<div class="oq-overview-hp-status">${bu(e,t,r,n)}</div>`}function XE(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Jh(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${XE(ys(F(t.keys.mode,"Unknown")),C(t.keys.defrost))}`).join(", "))}</p>`}function e1(e){let t=o.entities[e];if(!t)return"Positie: \u2014";let r=R(e);return Number.isNaN(r)?`Positie: ${F(e)}`:`Positie: ${U(r,0,t.uom||"")}`}function t1(e){return S(e)?`Positie: ${C(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \u2014"}function ys(e){let t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Ru(e,t,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function o1(e,t,r){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `:e==="pressure"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `:e==="defrost"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `:e==="flow"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `:e==="fan"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `:e==="eev"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `:e==="fourway"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `:`
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${t-10} ${r-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function Ea({bind:e,modifier:t,x:r,y:n,width:a,kicker:i,detail:l,detailBind:c="",icon:u="heater",direction:d="down"}){let w=r+26,v=n+22,f=c?` data-oq-bind="${s(c)}"`:"",g="";if(d==="up"){let p=r+Math.round(a*.52);g=`M${p-6} ${n} L${p} ${n-8} L${p+6} ${n} Z`}else if(d==="left"){let p=n+Math.round(22);g=`M${r} ${p-6} L${r-8} ${p} L${r} ${p+6} Z`}else if(d==="right"){let p=n+Math.round(22);g=`M${r+a} ${p-6} L${r+a+8} ${p} L${r+a} ${p+6} Z`}else{let p=r+Math.round(a*.52);g=`M${p-6} ${n+44} L${p} ${n+44+8} L${p+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${w}" cy="${v}" r="11.5" />
        ${o1(u,w,v)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${f}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${g}" />
      </g>
    `}function Hu({bind:e,x:t,y:r,width:n,value:a,label:i,ariaLabel:l="",align:c="start"}){let u=l||`${i} temperatuur ${a}`,d=c==="end",m=c==="center",w=m?"middle":d?"end":"start",v=m?t+n/2:d?t+n-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${v}" y="${r+13}" text-anchor="${w}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function r1({tooltip:e,...t}){return`${Hu(t)}${Ea({bind:t.bind,...e})}`}function n1({bind:e,ariaLabel:t,x:r,y:n,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${Ea({bind:e,...c})}
    `}function _u({bind:e,className:t,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${Ea({bind:e,...c})}
    `}function a1({label:e,value:t,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function lo(e,t,r=""){let n=R(e);return Number.isNaN(n)?F(e):U(n,t,Ir(e,r))}function i1(e){let r=String(E("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function s1(e){let t=i1(e),r=t.find(n=>S(n))||e;for(let n of t){if(!S(n))continue;let a=R(n);if(!Number.isNaN(a))return{key:n,value:a,text:U(a,0,Ir(n,"L/h"))}}return{key:r,value:Number.NaN,text:F(r)}}function l1(e,t,r,n,a,i,l){let c=R(t.freq),u=Number.isNaN(c)?"\u2014":String(Math.round(c)),d=R(t.power),m=R(t.heat),w=R(t.cooling),v=s1(t.flow),f=v.value,g=n==="Koelen"?w:m,p=l||!Number.isNaN(c)&&c>0||!Number.isNaN(d)&&d>80||!Number.isNaN(m)&&m>150,b=!Number.isNaN(f)&&f>0,y=hu(n,p),k=i==="Geen actieve storingen"?"Geen storingen":i,q=k!=="Geen storingen",T=a?"Actief":"Uit",M=lo(t.waterOut,1,"\xB0C"),A=lo(t.waterIn,1,"\xB0C"),H=v.text,j=lo(t.evaporatorCoilTemp,1,"\xB0C"),I=lo(t.innerCoilTemp,1,"\xB0C"),W=lo(t.outsideTemp,1,"\xB0C"),x=lo(t.condenserPressure,1,"bar"),O=lo(t.dischargeTemp,1,"\xB0C"),D=lo(t.evaporatorPressure,1,"bar"),N=lo(t.returnTemp,1,"\xB0C"),J=C(t.bottomPlate),P=C(t.crankcase),V=e1(t.eev),X=t1(t.fourWay),Pe=U(d,0,"W"),Ct=U(g,0,"W"),ht=n==="Koelen"?!Number.isNaN(d)&&d>=5&&!Number.isNaN(w)?w/d:Number.NaN:R(t.cop),uo=U(ht,1),xt=n==="Koelen"?"COP (EER)":"COP",Le=n==="Koelen"?"Koelafgifte":"Warmteafgifte",xn=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",pe=R(t.fanSpeed),Mn=!Number.isNaN(pe)&&pe>0,Rr=Number.isNaN(pe)?"\u2014":`${Math.round(pe)} rpm`,$=a||n==="Koelen",_=$?"Verdamper":"Condensor",B=$?"Condensor":"Verdamper",K=$?"return":"supply",ee=$?"supply":"return",ne=360,fe=384,he=214,ce="M278 220 C278 228 273 234 266 234",Je="M278 220 C278 228 283 234 290 234",be="M290 234 C284 234 279 240 278 248",Ze="M266 234 C272 234 277 240 278 248",po=$?`M290 234 H${ne} Q372 ${he} ${fe} 234 H436 V134 H480`:"M266 234 H180 V134 H164",De=$?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${fe} Q372 ${he} ${ne} 234 H290`,mo="M296 150 H278 V220",go="M278 248 V268 H372 V150 H356",Ke=$?"M480 294 H337":"M164 294 H315",fo=$?"M315 294 H164":"M337 294 H480",$e=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,p?"is-running":"",b?"is-water-flowing":"",Mn?"is-fan-running":"",$?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:$e,statusText:y,failureText:k,warningActive:q,waterFlowActive:b,defrostActive:a,defrostText:T,mode:n,reverseCycle:$,compressorFreqText:`${u} Hz`,leftExchangerTitle:_,rightExchangerTitle:B,supplyLineTone:K,returnLineTone:ee,waterOutText:M,waterInText:A,flowText:H,evaporatorCoilTempText:j,innerCoilTempText:I,outsideTempText:W,dischargePressureText:x,dischargeTempText:O,suctionPressureText:D,suctionTempText:N,bottomPlateActive:J,crankcaseActive:P,eevPositionText:V,fourWayPositionText:X,powerText:Pe,heatText:Ct,heatLabel:Le,heatDescription:xn,efficiencyText:uo,efficiencyLabel:xt,fanRpmText:Rr,hotgasValveHeat:ce,hotgasValveCool:Je,suctionValveHeat:be,suctionValveCool:Ze,leftValveTone:$?"suction":"hotgas",rightValveTone:$?"hotgas":"suction",pipes:{supply:{tone:K,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:ee,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:mo,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:po,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Ke,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:fo,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:De,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:go,animated:!0,flowVariant:"default"}}}}function c1(e){let t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${t}-cond-water-heat`,n=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${s(e.boardClass)}" data-oq-hp-board="${s(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${s(e.title)} technische schematic">
              <defs>
              <linearGradient id="${s(r)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(n)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(a)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${s(e.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${s(e.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${s(i)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${s(a)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${s(e.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${s(e.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${s(e.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${Object.entries(e.pipes).map(([d,m])=>Ru(d.replace(/[A-Z]/g,w=>`-${w.toLowerCase()}`),m.tone,m.d,m.animated,m.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(r1).join("")}
            ${_u({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${_u({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${_u({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
                <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
                <g class="oq-hp-tech-defrost-icon">
                  <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                  <g class="oq-hp-tech-defrost-drips">
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                  </g>
                  <g class="oq-hp-tech-defrost-mists">
                    <g transform="translate(6 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.18" cy="0.34" r="0.58" />
                        <circle cx="1.16" cy="0.38" r="0.54" />
                      </g>
                    </g>
                    <g transform="translate(12 23.4)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                        <circle cx="0" cy="0" r="1.08" />
                        <circle cx="-1.42" cy="0.42" r="0.66" />
                        <circle cx="1.38" cy="0.46" r="0.62" />
                      </g>
                    </g>
                    <g transform="translate(18 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.16" cy="0.38" r="0.54" />
                        <circle cx="1.18" cy="0.34" r="0.58" />
                      </g>
                    </g>
                  </g>
                </g>
              `,tooltip:{modifier:"return",icon:"defrost",x:398,y:266,width:118,kicker:"Defrost",detail:"Actief",direction:"left"}})}

            ${u.map(n1).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(a1).join("")}
          </div>
        </div>
      </div>
    `}function Zh(e,t,r,n="normal",a=null){if(!S(t.power))return"";let i=Ou(e,t,r),{mode:l,defrostActive:c,running:u,thermalKey:d}=i,m=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${Yh(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Au(l,u,m.warningActive,m.failureText)}
            </div>
          </div>
          ${c1(m)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Au(l,u,m.warningActive,m.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${qa([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:d,label:m.heatLabel,tone:"orange",note:m.heatDescription},{label:m.efficiencyLabel,value:m.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(F(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${c?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${gs("Water in",t.waterIn)}
          ${gs("Water out",t.waterOut)}
        </div>
      </section>
    `}function Pu(){return C("boilerCvAssistEnabled")&&S("boilerHeatPower")}function u1(){return(typeof oe=="function"?oe():"")!=="single"&&S("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function d1(){return S("flowSelected")?"flowSelected":(typeof oe=="function"?oe():"")!=="single"&&S("hp2Flow")?"hp2Flow":"hp1Flow"}function p1({opentherm:e,linkAvailable:t,fault:r,dhwActive:n,flameOn:a,chActive:i,commandActive:l,commandValid:c,requestedPower:u,blockReason:d}){if(e&&r)return{code:"fault",text:"Storing",copy:"Ketel meldt een storing",tone:"danger"};if(e&&!t)return{code:"offline",text:"Geen verbinding",copy:"Geen OpenTherm-reactie",tone:"offline"};if(e&&n)return{code:"dhw",text:"Tapwater",copy:"Ketel verwarmt tapwater",tone:"dhw"};if(e&&a)return{code:"heating",text:"Verwarmt",copy:"Vlam actief voor CV",tone:"active"};if(i)return{code:"heating",text:"CV actief",copy:e?"CV-circulatie actief":"Levert ondersteuning",tone:"active"};if(l)return{code:"starting",text:"Start gevraagd",copy:e?"Wacht op de ketel":"Ketel wordt aangestuurd",tone:"waiting"};let m=String(d||"").trim().toLowerCase();return Number.isFinite(u)&&u>0&&(!c||m&&m!=="no boiler heat request"&&m!=="boiler/cv assist disabled")?{code:"blocked",text:"Wacht",copy:"Warmtevraag is tijdelijk geblokkeerd",tone:"waiting"}:{code:"idle",text:"Uit",copy:"Geen ondersteuning",tone:"neutral"}}function Ss(){let e=String(E("boilerConnection")||"R1")==="OpenTherm",t=!e||C("otbLinkAvailable"),r=R("boilerHeatPower"),n=R(d1()),a=e?t&&C("otbChActive"):S("boilerActive")?C("boilerActive"):!Number.isNaN(r)&&r>20,i=e&&t&&C("otbFlameOn"),l=e&&t&&C("otbDhwActive"),c=e&&t&&["otbFaultIndication","otbFlameFault","otbAirPressureFault","otbWaterOverTemp","otbLowWaterPressure"].some(W=>C(W)),u=e&&t&&C("otbDiagnosticIndication"),d=S("boilerCommandActive")&&C("boilerCommandActive"),m=!S("boilerCommandValid")||C("boilerCommandValid"),w=R("boilerCommandRequestedPower"),v=F("boilerBlockReason",""),f=p1({opentherm:e,linkAvailable:t,fault:c,dhwActive:l,flameOn:i,chActive:a,commandActive:d,commandValid:m,requestedPower:w,blockReason:v}),g=!Number.isNaN(n)&&n>0,p=U(r,0,"W"),b=U(n,0,"L/h"),y=W=>t?R(W):Number.NaN,k=U(e?y("otbReturnWaterTemp"):R(u1()),1,"\xB0C"),q=U(e?y("otbBoilerWaterTemp"):R("supplyTemp"),1,"\xB0C"),T=U(y("otbChPressure"),1,"bar"),M=U(y("boilerCommandTargetTemperature"),1,"\xB0C"),A=U(y("otbRelativeModulation"),0,"%"),H=U(y("otbDhwTemp"),1,"\xB0C"),j=u&&!c?"Diagnostische melding beschikbaar":"",I=["oq-boiler-card",a?"is-running":"is-idle",i?"has-flame":"",`is-${f.code}`].filter(Boolean).join(" ");return{active:a,chActive:a,flameOn:i,dhwActive:l,fault:c,diagnostic:u,opentherm:e,linkAvailable:t,commandActive:d,commandValid:m,blockReason:v,flowActive:g,heatText:p,flowText:b,returnTempText:k,supplyTempText:q,pressureText:T,targetText:M,modulationText:A,dhwTempText:H,returnTempLabel:e?"Ketelretour":"Retour",supplyTempLabel:e?"Ketelwater":"Aanvoer",transportText:e?"OpenTherm":"Aan/uit R1",statusText:f.text,statusCopy:f.copy,statusCode:f.code,statusTone:f.tone,statusDetail:j||(f.code==="blocked"&&v?v:""),boardClass:I,flowPathClass:g?"is-flowing":"is-static"}}function Lu(e=Ss()){return we({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,transport:e.opentherm?"opentherm":"r1",dhwActive:e.dhwActive})}function m1(e,t=Ss()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flameOn?"has-flame":"",`is-${t.statusCode}`,t.flowActive?"is-flowing":"is-static"].filter(Boolean).join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${t.statusTone}`,n.textContent!==t.statusText&&(n.textContent=t.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active),a.dataset.status=t.statusCode);let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(p=>{p.textContent!==t.flowText&&(p.textContent=t.flowText)});let c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);let u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==t.returnTempText&&(u.textContent=t.returnTempText);let d=e.querySelector('[data-oq-bind="boiler-return-reading"]');d&&d.setAttribute("aria-label",`${t.returnTempLabel} ${t.returnTempText}`);let m=e.querySelector('[data-oq-bind="boiler-supply-value"]');m&&m.textContent!==t.supplyTempText&&(m.textContent=t.supplyTempText);let w=e.querySelector('[data-oq-bind="boiler-supply-reading"]');w&&w.setAttribute("aria-label",`${t.supplyTempLabel} ${t.supplyTempText}`);let v=e.querySelector(".oq-boiler-mini-svg");v&&v.setAttribute("aria-label",`CV-ketel: ${t.statusCopy}`);let f=e.querySelector("[data-oq-boiler-status-detail]");f&&(f.hidden=!t.statusDetail,f.textContent!==t.statusDetail&&(f.textContent=t.statusDetail));let g={pressure:t.pressureText,target:t.targetText,modulation:t.modulationText,dhw:t.dhwTempText};Object.entries(g).forEach(([p,b])=>{let y=e.querySelector(`[data-oq-boiler-${p}-value]`);y&&y.textContent!==b&&(y.textContent=b)})}function g1(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Lu(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <span class="oq-boiler-eyebrow">${s(e.transportText)}</span>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.statusTone}">${s(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>${s(e.returnTempLabel)}</p>
            <strong data-oq-bind="boiler-return-value">${s(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>${s(e.supplyTempLabel)}</p>
            <strong data-oq-bind="boiler-supply-value">${s(e.supplyTempText)}</strong>
            <span>${e.opentherm?"gemeten door ketel":"naar het systeem"}</span>
          </article>
        </div>
        ${e.opentherm?Xh(e):""}
        <p class="oq-boiler-status-detail" data-oq-boiler-status-detail${e.statusDetail?"":" hidden"}>${s(e.statusDetail)}</p>
      </section>
    `}function Xh(e){return`
      <div class="oq-boiler-telemetry" aria-label="OpenTherm ketelwaarden">
        <div class="oq-boiler-telemetry-item">
          <span>Druk</span>
          <strong data-oq-boiler-pressure-value>${s(e.pressureText)}</strong>
        </div>
        <div class="oq-boiler-telemetry-item">
          <span>CV-doel</span>
          <strong data-oq-boiler-target-value>${s(e.targetText)}</strong>
        </div>
        <div class="oq-boiler-telemetry-item">
          <span>Modulatie</span>
          <strong data-oq-boiler-modulation-value>${s(e.modulationText)}</strong>
        </div>
        ${e.dhwActive?`
          <div class="oq-boiler-telemetry-item oq-boiler-telemetry-item--dhw">
            <span>Tapwater</span>
            <strong data-oq-boiler-dhw-value>${s(e.dhwTempText)}</strong>
          </div>
        `:""}
      </div>
    `}function Du(){if(!Pu())return"";let e=Ss();return o.hpVisualMode!=="schematic"?g1(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Lu(e))}">
        <div class="${s([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning \xB7 ${s(e.transportText)}</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.statusTone}">${s(e.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">${e.opentherm?"Live ketelstatus en ondersteuning naast de warmtepomp.":"De ketel geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft."}</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="CV-ketel: ${s(e.statusCopy)}">
                <defs>
                  <linearGradient id="oq-boiler-card-body" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#111827"></stop>
                    <stop offset="62%" stop-color="#7f1d1d"></stop>
                    <stop offset="100%" stop-color="#fb923c"></stop>
                  </linearGradient>
                  <linearGradient id="oq-boiler-card-flame" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#f97316"></stop>
                    <stop offset="48%" stop-color="#facc15"></stop>
                    <stop offset="100%" stop-color="#fee2e2"></stop>
                  </linearGradient>
                </defs>
                ${Ru("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Ru("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)" aria-hidden="true">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Hu({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:e.returnTempLabel,ariaLabel:`${e.returnTempLabel} ${e.returnTempText}`,align:"start"})}
                ${Ea({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:e.returnTempLabel,direction:"left"})}
                ${Hu({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:e.supplyTempLabel,ariaLabel:`${e.supplyTempLabel} ${e.supplyTempText}`,align:"end"})}
                ${Ea({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:e.supplyTempLabel,direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}" data-status="${s(e.statusCode)}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${s(e.statusCopy)}</strong>
                </div>
              </div>
              ${e.opentherm?Xh(e):""}
              <p class="oq-boiler-status-detail" data-oq-boiler-status-detail${e.statusDetail?"":" hidden"}>${s(e.statusDetail)}</p>
            </div>
          </div>
        </div>
      </section>
    `}function xa(){let e=typeof oe=="function"?oe():"";return Ka.filter(t=>e==="single"&&t.title==="HP2"?!1:S(t.keys.power))}function Iu(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function vs(e,t,r){return!Array.isArray(t)||t.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function Nu(e,t,r){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:vs(e,t,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function eb(e){return!Array.isArray(e)||e.length!==1?Iu(e):Pu()?"equal":"single"}function f1(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function tb(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Jh(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function h1(e,t){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(Bt(e,tb(t)),!0):(Bt(r,`
      <h3>Warmtepompen</h3>
      ${Jh(t)}
    `),n.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function ob(){let e=wu(),t=xa(),r=Iu(t),n=eb(t),a=tb(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${fu()}
          ${Vh(e)}
          <div class="oq-overview-main">
            ${vu(fs())}
            ${Eu()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${t.map((i,l)=>Zh(i.title,i.keys,i.accent,vs(l,t,r),Nu(l,t,r))).join("")}
            ${Du()}
          </div>
        </div>
      </section>
    `}function b1(e,t,r){if(!e)return;let n=e.querySelector(t);n&&n.textContent!==r&&(n.textContent=r)}function kn(e,t,r){e&&e.getAttribute(t)!==r&&e.setAttribute(t,r)}function w1(e,t){t.forEach(([r,n])=>{b1(e,`[data-oq-bind="${r}"]`,n)})}function v1(e,t){t.forEach(([r,n])=>{kn(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function y1(e,t,r,n=""){let a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",r),kn(a,"tabindex",r?"0":"-1"),!r&&n&&ks(e.querySelector(`[data-oq-bind="${n}"]`)))}function S1(e,t,r){kn(e.querySelector(`[data-oq-bind="${t}"]`),"fill",r)}function Ca(e,t,r,n){if(!e)return;let a=`${t}${r}`;n.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function k1(e,t,r,n){let a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(Ca(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function ks(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Qh(e,t,r){!e||!t||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&ks(n)}),t.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function q1(e,t,r,n){if(!e||!t||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||ks(n)};r.addEventListener("mouseenter",()=>Qh(e,t,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>Qh(e,t,n)),r.addEventListener("blur",a)}function rb(e){if(!e)return;let t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let r=t.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(r)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);q1(e,r,n,i)})}function nb(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{rb(t)})}function T1(e,t,r,n,a=null,i=null){if(!e)return;let l=i||Ou(t,r,n),{mode:c,running:u}=l,d=l.schematic,m=e.querySelector(".oq-overview-hp-head-title");m&&Bt(m,Yh(t,a));let w=e.querySelector(".oq-overview-hp-head-side");if(w){let b=w.querySelector(".oq-overview-hp-status");b||(Bt(w,Au(c,u,d.warningActive,d.failureText)),b=w.querySelector(".oq-overview-hp-status")),Oh(b,c,u,d.warningActive,d.failureText)}let v=e.querySelector("[data-oq-hp-board]");if(!v)return;v.className!==d.boardClass&&(v.className=d.boardClass),w1(v,[["status",d.statusText],["left-exchanger-title",d.leftExchangerTitle],["right-exchanger-title",d.rightExchangerTitle],["compressor-freq",d.compressorFreqText],["flow-value",d.flowText],["inner-coil-temp-value",d.innerCoilTempText],["evaporator-temp-value",d.evaporatorCoilTempText],["outside-temp-value",d.outsideTempText],["discharge-pressure-value",d.dischargePressureText],["discharge-temp-value",d.dischargeTempText],["suction-pressure-value",d.suctionPressureText],["suction-temp-value",d.suctionTempText],["supply-value",d.waterOutText],["return-value",d.waterInText],["footer-mode",d.mode],["footer-power",d.powerText],["footer-heat",d.heatText],["footer-efficiency-label",d.efficiencyLabel],["footer-efficiency",d.efficiencyText],["fan-speed-value",d.fanRpmText],["fourway-detail",d.fourWayPositionText],["eev-detail",d.eevPositionText]]);let f=v.querySelector('[data-oq-bind="footer-heat-label"]');if(f){kn(f,"aria-label",d.heatLabel);let b=d.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";f.innerHTML!==b&&(f.innerHTML=b)}[["bottom-heater",d.bottomPlateActive],["crankcase-heater",d.crankcaseActive]].forEach(([b,y])=>{y1(v,b,y,`${b}-tooltip`)});let g=v.querySelector('[data-oq-bind="defrost-badge"]');g&&(kn(g,"tabindex",d.defrostActive?"0":"-1"),kn(g,"aria-label",d.defrostActive?"Defrost actief":"Defrost uit"),d.defrostActive||ks(v.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",d.supplyLineTone],["return-tooltip",d.returnLineTone]].forEach(([b,y])=>{Ca(v.querySelector(`[data-oq-bind="${b}"]`),"oq-hp-tech-tooltip--",y,["warm","supply","return"])}),v1(v,[["supply-reading",`Aanvoer temperatuur ${d.waterOutText}`],["flow-reading",`Flow ${d.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${d.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${d.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${d.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${d.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${d.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${d.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${d.dischargeTempText}`],["return-reading",`Retour temperatuur ${d.waterInText}`],["suction-pressure-reading",`Zuigdruk ${d.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${d.suctionTempText}`],["fourway-trigger",`4-wegklep, ${d.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${d.eevPositionText}`]]),Ca(v.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",d.returnLineTone,["supply","return"]);let p=String(d.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");S1(v,"cond-water",`url(#${d.reverseCycle?`${p}-cond-water-cool`:`${p}-cond-water-heat`})`),Object.entries(d.pipes).forEach(([b,y])=>{k1(v,b.replace(/[A-Z]/g,k=>`-${k.toLowerCase()}`),y.tone,y.d)}),rb(v),Xo()}function E1(){if(!o.root||o.appView!=="overview")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);let r=wu(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),d=e.querySelector(".oq-overview-hp-grid"),m=e.querySelector("[data-oq-boiler-panel]"),w=xa();if(n){let k=Nt();nt(n,we(k),fu())}if(a){let k=a.querySelector(".oq-overview-top");k&&Bt(k,qa(ku()));let q=a.querySelector(".oq-overview-statuspanel");if(q){let M=F("controlModeLabel");nt(q,we(yu(r,M)),Su(r,M))}let T=a.querySelector(".oq-overview-summary-side");if(T){let M=ii();T.dataset.renderSignature!==M&&(Bt(T,qu()),T.dataset.renderSignature=M)}}if(i&&nt(i,we(fs()),vu(fs())),l){let k=hs();nt(l,Tu(k),Eu())}if(c&&o.appView==="overview"&&(nt(c,bs(),ws()),Mu(e)),Ta(e),!u||!d)return!1;let v=Iu(w),f=eb(w);if(h1(u,w),Ca(d,"oq-overview-hp-grid--",f,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){let k=[...w.map((T,M)=>Zh(T.title,T.keys,T.accent,vs(M,w,v),Nu(M,w,v))),Du()].join(""),q=we({visualMode:o.hpVisualMode,layout:f,markup:k});return d.dataset.renderSignature!==q&&(Bt(d,k),d.dataset.renderSignature=q),!0}let g=Pu()?Ss():null,p=g?Du():"",b=g?Lu(g):"";return!!m!=!!p||(m&&m.dataset.renderSignature!==b?m.outerHTML=p:m&&g&&m1(m,g),d.querySelectorAll("[data-oq-hp-panel]").length!==w.length)?!1:(w.forEach((k,q)=>{let T=e.querySelector(`[data-oq-hp-panel="${k.title}"]`);if(T){let M=Ou(k.title,k.keys,k.accent);Ca(T,"oq-overview-hp--",vs(q,w,v),["normal","focus","muted"]),T1(T,k.title,k.keys,k.accent,Nu(q,w,v),M)}}),!0)}Eo({patchOverviewDom:E1});function ab(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}function C1(e,t="\u2014"){if(!S(e))return t;let r=R(e);return Number.isFinite(r)?String(Math.round(r)):t}function Fo(e,t=1,r="",n="\u2014"){if(!S(e))return n;let a=R(e);return Number.isFinite(a)?`${a.toFixed(t)}${r?` ${r}`:""}`:n}function ib(e,t="\u2014"){if(!S(e))return t;let r=R(e);return Number.isFinite(r)?`${Math.round(r)} u`:t}function ju(e){if(!e||!e.keys)return!1;let t=ys(F(e.keys.mode,"Unknown")),r=R(e.keys.freq);return t==="Verwarmen"||t==="Koelen"||C(e.keys.defrost)||t==="Onbekend"&&Number.isFinite(r)&&r>0}var x1=Object.freeze({0:"inactive",1:"full",2:"projected_floor",3:"simmer",4:"falling_gap",5:"buffer_stop",6:"dew_stop",7:"fallback_floor",8:"restart_wait",9:"room_cap",10:"fallback_cap1",11:"level1_hold",12:"oil_return_hold",13:"oil_return_recovery",14:"capacity_cap"});function xs(e){let t=String(e||"").trim().toLowerCase();if(!t)return"";let r=Number(t);return Number.isInteger(r)?x1[r]||"unknown":t}function M1(e){return["","full","inactive","none","unknown","unavailable"].includes(xs(e))}function Ku(e){return["dew_stop","falling_gap","projected_floor","restart_wait","sensor_fallback","oil_return_recovery","level1_hold"].includes(xs(e))}function $1(e){let t=C("coolingRequestActive"),r=F("coolingLimiterReasonCode",""),n=xs(r),a=t&&n&&!M1(n),i=t&&S("coolingPermitted")&&!C("coolingPermitted"),l=i||a&&Ku(n),c=a&&!l,u=Kt()||t,d=e.filter(ju).length,m=e.some(f=>f.title==="HP2"),w=e.some(f=>C(f.keys.defrost)),v=S("boilerActive")&&C("boilerActive");return{title:"Control mode",copy:"De tab toont dezelfde eventlogica voor elke control mode.",hpRunningCount:d,hp2Available:m,defrostActive:w,boilerActive:v,coolingMode:u,coolingRequest:t,coolingBlocked:i,coolingLimited:l||c,coolingProtection:l,coolingCapped:c,coolingLimiterReason:n||"inactive"}}function gb(e){let t=String(e||"").trim().toLowerCase();return t.includes("cm100")?"cm100":t.includes("cm98")?"cm98":t.includes("cm5")?"cm5":t.includes("cm4")?"cm4":t.includes("cm3")?"cm3":t.includes("cm2")?"cm2":t.includes("cm1")?"cm1":t.includes("cm0")?"cm0":""}function _1(){let e=Math.round(R("strategyActiveCode"));return e===1?"Koeling":e===2?"Stooklijn":e===3?"Power House":F("strategy","\u2014")}function sb(e,t="\u2014"){let r=C1(e,t);return r==="\u2014"?t:r}var A1=Object.freeze([["status","Actueel","shield"],["timeline","Tijdlijn","activity"],["graphs","Grafieken","bar-chart"]].map(([e,t,r])=>Object.freeze({id:e,label:t,icon:r}))),R1=Object.freeze([["last1","Laatste 1 uur","1 uur","Laatste 1 uur","Recente beslismomenten in het afgelopen uur.","De gekozen tijd verbindt grafiek en uitleg over het laatste uur.",{durationMinutes:60}],["last2","Laatste 2 uur","2 uur","Laatste 2 uur","Recente beslismomenten in de afgelopen twee uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste twee uur.",{durationMinutes:120}],["last4","Laatste 4 uur","4 uur","Laatste 4 uur","Recente momenten en periodes voor een gerichte diagnose.","De gekozen tijd verbindt grafiek en uitleg over de laatste vier uur.",{durationMinutes:240,quick:!0}],["last8","Laatste 8 uur","8 uur","Laatste 8 uur","Een compacte terugblik op de laatste acht uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste acht uur.",{durationMinutes:480}],["last12","Laatste 12 uur","12 uur","Laatste 12 uur","Een dagdeel met alle belangrijke beslismomenten.","De gekozen tijd verbindt grafiek en uitleg over de laatste twaalf uur.",{durationMinutes:720}],["last24","Afgelopen 24 uur","24 uur","Afgelopen 24 uur","Gebeurtenissen die verklaren hoe het systeem in de huidige situatie kwam.","De gekozen tijd verbindt grafiek en uitleg over de laatste 24 uur.",{durationMinutes:1440,quick:!0}],["last48","Afgelopen 48 uur","48 uur","Afgelopen 48 uur","Twee dagen met belangrijke momenten en perioden.","De gekozen tijd verbindt grafiek en uitleg over de laatste 48 uur.",{durationMinutes:2880}],["last3d","Afgelopen 3 dagen","3 dagen","Afgelopen 3 dagen","Een terugblik op patronen over drie dagen.","De gekozen tijd verbindt grafiek en uitleg over de laatste drie dagen.",{durationMinutes:4320}],["today","Vandaag","Vandaag","Vandaag","Belangrijke momenten en periodes sinds middernacht.","De gekozen tijd verbindt grafiek en uitleg voor vandaag.",{calendarDay:"today",quick:!0}],["yesterday","Gisteren","Gisteren","Gisteren","Terugkijken naar een volledige kalenderdag.","De gekozen tijd verbindt grafiek en uitleg voor gisteren.",{calendarDay:"yesterday",quick:!0}],["week","7 dagen","7 dagen","Afgelopen 7 dagen","Patronen zoals defrosts, starts/stops en bescherming over meerdere dagen.","De gekozen tijd verbindt grafiek en uitleg binnen de weekselectie.",{durationMinutes:10080,quick:!0}],["custom","Eigen periode","Eigen periode","Eigen periode","Een zelfgekozen begin- en eindmoment.","De gekozen tijd verbindt grafiek en uitleg over de gekozen periode.",{custom:!0}]].map(([e,t,r,n,a,i,l])=>Object.freeze({id:e,label:t,shortLabel:r,eyebrow:n,title:"Tijdlijn",copy:a,graphCopy:i,...l})));function fb(){return A1}function jo(){return R1}function H1(){return jo().filter(e=>e.quick)}function Es(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}function hb(){let e=Es(o.controlReplayCustomStart),t=Es(o.controlReplayCustomEnd);return!Number.isFinite(e)||!Number.isFinite(t)||t<=e?null:{start:e,end:t}}function Wu(e){let t=new Date(e);t.setMinutes(0,0,0);let r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`}function Ma(e){return Wu(e).slice(0,10)}function lb(e){let r=String(e||"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):00$/);return{date:r?.[1]||"",hour:r?.[2]||"00"}}function cb(e){return Array.from({length:24},(t,r)=>{let n=String(r).padStart(2,"0");return`<option value="${n}"${n===e?" selected":""}>${n} uur</option>`}).join("")}function D1(){let e=Date.now();return{start:o.controlReplayCustomStart||Wu(e-1440*60*1e3),end:o.controlReplayCustomEnd||Wu(e)}}function N1(e,t=Date.now()){let n=new Date(t).setMinutes(0,0,0),a=Math.ceil((t-6048e5)/(3600*1e3))*60*60*1e3,i=Es(e.start),l=Number.isFinite(i)?Math.max(a,Math.min(n,i)):n-1440*60*1e3,c=Es(e.end),u=Number.isFinite(c)?Math.max(l,Math.min(n,c)):n;return{earliestDate:Ma(a),latestDate:Ma(n),startMaxDate:Ma(Math.min(n,u)),endMinDate:Ma(l),endMaxDate:Ma(Math.min(n,l+6048e5))}}function Ar(e=ft(),t=Date.now()){let r=jo().find(a=>a.id===e)||jo().find(a=>a.id==="last24");if(r?.calendarDay){let a=new Date(t);return a.setHours(0,0,0,0),r.calendarDay==="yesterday"&&a.setDate(a.getDate()-1),{start:a.getTime(),end:a.getTime()+1440*60*1e3}}if(r?.custom)return hb()||{start:t-1440*60*1e3,end:t};let n=Number(r?.durationMinutes)||1440;return{start:t-n*60*1e3,end:t}}function zu(e=ft(),t=Date.now()){let r=Ar(e,t);return Math.max(1,(r.end-r.start)/(60*1e3))}function O1(e,t=!1){let r=new Date(e),n=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return t?`${r.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${n}`:n}function P1(e=ft(),t=Date.now()){if(e==="today"||e==="yesterday")return["00:00","06:00","12:00","18:00","24:00"];let r=Ar(e,t),a=zu(e,t)>1440||e==="custom";return[0,.25,.5,.75,1].map((i,l)=>l===4&&e!=="custom"?"Nu":O1(r.start+(r.end-r.start)*i,a))}function Uu(){return fb().some(e=>e.id===o.controlReplayTab)?o.controlReplayTab:"status"}function ft(){let e=jo().find(t=>t.id===o.controlReplayWindow);return e?.custom&&!hb()?"last24":e?o.controlReplayWindow:"last24"}function Ra(){let e=ft();return{...jo().find(r=>r.id===e)||jo().find(r=>r.id==="last24"),axis:P1(e)}}var ub=Object.freeze({normal:{label:"Normaal",tone:"normal"},limited:{label:"Bescherming actief",tone:"limited"},attention:{label:"Aandacht",tone:"attention"},fault:{label:"Storing",tone:"fault"}});function Gu(e="normal"){return ub[e]||ub.normal}var L1=Object.freeze({keep_current:{label:"Huidige keuze blijft logisch",summary:"De huidige stand past bij de vraag in huis. Wisselen zou nu weinig voordeel geven.",checks:["Vraag blijft binnen de band","Geen betere keuze nodig","Rustig door laten lopen"]},hold_active:{label:"Wissel bewust uitgesteld",summary:"Het systeem wacht bewust even, zodat warmtepompen niet onnodig vaak starten en stoppen.",checks:["Vraag is nog niet duidelijk anders","Minimale looptijd telt mee","Actieve bron werkt nog goed"]},defrost_hold:{label:"Ontdooien rustig laten verlopen",summary:"Een warmtepomp ontdooit kort. Dat is normaal wintergedrag en herstelt vanzelf.",checks:["Ontdooien actief of net klaar","Warmte kan kort lager zijn","Herstart gebeurt automatisch"]},better_heat:{label:"Twee pompen passen beter",summary:"De warmtevraag blijft hoog. Twee warmtepompen kunnen die vraag rustiger leveren dan \xE9\xE9n pomp op hoge belasting.",checks:["Warmtevraag blijft hoog","Beide warmtepompen beschikbaar","Samen leveren ze rustiger vermogen"]},soft_guard:{label:"Veilige marge bewaakt",summary:"Het systeem begrenst zichzelf om veilig binnen de temperatuur- en flowgrenzen te blijven.",checks:["Veiligheidsmarge bewaakt","Geen storing","Begrenzing verdwijnt vanzelf"]},less_power:{label:"Minder vermogen nodig",summary:"De vraag neemt af. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",checks:["Vraag neemt af","E\xE9n warmtepomp is genoeg","Minder elektrisch vermogen nodig"]},cooling_request_cleared:{label:"Geen koelvraag meer",summary:"De koelvraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Koelvraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},heating_request_cleared:{label:"Geen warmtevraag meer",summary:"De warmtevraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Warmtevraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},no_candidate:{label:"Nog geen veilige start",summary:"Er is vraag, maar een start is nu nog niet verstandig door wachttijd of bescherming.",checks:["Beschikbaarheid gecontroleerd","Bescherming of wachttijd actief","Straks opnieuw beoordelen"]},candidate_in_rest:{label:"Rusttijd loopt nog",summary:"De warmtepomp is kort geleden gestopt en wacht nog even om korte cycli te voorkomen.",checks:["Vorige stop is recent","Start wordt uitgesteld","Bij blijvende vraag opnieuw beoordelen"]},candidate_in_defrost:{label:"Warmtepomp ontdooit",summary:"Deze warmtepomp kan nu niet starten of wisselen omdat ontdooien eerst rustig moet afronden.",checks:["Ontdooien actief","Niet onnodig wisselen","Automatisch opnieuw beoordelen"]},candidate_unavailable:{label:"Warmtepomp niet beschikbaar",summary:"De warmtepomp is nu geen geschikte kandidaat door beschikbaarheid of technische begrenzing.",checks:["Kandidaat gecontroleerd","Voorwaarde niet vrij","Andere keuze blijft mogelijk"]},defrost_boost:{label:"Ontdooien opgevangen",summary:"Een andere bron kan tijdelijk helpen terwijl een warmtepomp ontdooit.",checks:["Ontdooien verlaagt kort vermogen","Andere bron beschikbaar","Comfort blijft beschermd"]},boiler_assist:{label:"CV ondersteunt tijdelijk",summary:"De CV-ketel helpt alleen wanneer de warmtevraag tijdelijk meer vermogen vraagt dan de warmtepompen rustig kunnen leveren.",checks:["Warmtevraag blijft hoog","Warmtepompen leveren maximaal rustig vermogen","CV stopt zodra ondersteuning niet meer nodig is"]},runtime_lead:{label:"Draaiurenbalans",summary:"De warmtepompen zijn gelijkwaardig. Het systeem kiest de pomp die het beste past bij draaiuren, beschikbaarheid en wachttijd.",checks:["Draaiuren vergeleken","Warmtepomp beschikbaar","Wachttijd vrij"]},oil_return_hold:{label:"Compressor beschermen",summary:"De warmtepomp blijft kort doorlopen om de compressor netjes te beschermen.",checks:["Minimale looptijd actief","Stop wordt uitgesteld","Korte cyclus voorkomen"]},single_topology:{label:"E\xE9n warmtepomp aanwezig",summary:"Er is maar \xE9\xE9n warmtepomp beschikbaar. Keuzes met twee warmtepompen zijn dan niet van toepassing.",checks:["Opstelling gecontroleerd","Geen tweede warmtepomp","Keuze blijft beperkt"]},demand_decreased:{label:"Warmtevraag nam af",summary:"De vraag zakte terug. Minder vermogen is genoeg om de woning op temperatuur te houden.",checks:["Vraag is lager","Stopvertraging verlopen","Andere warmtepomp blijft actief"]},min_rest_active:{label:"Minimum rusttijd actief",summary:"De warmtepomp wacht nog even om korte starts en onnodige belasting te voorkomen.",checks:["Vorige stop is recent","Rusttijd loopt","Start volgt als vraag blijft"]},start_stop_rate_high:{label:"Veel starts/stops",summary:"De warmtepomp start vaker dan wenselijk. Dat is niet direct een storing, maar wel nuttig om te bekijken.",checks:["Startteller hoog","Geen acute storing","Nuttig voor support"]},sticky_protection:{label:"Pompbescherming",summary:"De pomp draait kort zodat hij na lange stilstand niet vast gaat zitten. Dit is geen verwarmings- of koelvraag.",checks:["Geen comfortvraag","Dagelijkse bescherming actief","Alleen korte pomprun"]},frost_protection:{label:"Vorstbescherming",summary:"Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",checks:["Geen comfortvraag nodig","Vorstrisico bewaakt","Water blijft circuleren"]},flow_preflow:{label:"Voorloop actief",summary:"De pomp bouwt eerst waterflow op voordat de warmtepomp mag starten.",checks:["Waterflow opbouwen","Warmtepomp nog niet vrij","Start volgt automatisch"]},flow_postflow:{label:"Naloop actief",summary:"De pomp blijft kort nadraaien zodat warmte netjes uit het systeem wordt afgevoerd.",checks:["Warmtepomp stopt","Pomp draait kort door","Daarna standby"]},flow_too_low:{label:"Waterflow blijft te laag",summary:"De normale voorlooptijd is verstreken, maar de waterflow is nog niet voldoende voor een veilige start.",checks:["Voorlooptijd verstreken","Start blijft geblokkeerd","Flow wordt opnieuw beoordeeld"]},startup_inhibit:{label:"Wachttijd na herstart",summary:"Na een herstart blijft de compressor kort uit om een te snelle herstart te voorkomen.",checks:["Comfortvraag is aanwezig","Compressor wacht nog","Start volgt automatisch"]},capacity_cap:{label:"Ingesteld koelmaximum",summary:"Er is koelvraag. Het systeem blijft binnen het maximale koelniveau dat in de software is ingesteld.",checks:["Koelvraag actief","Softwaremaximum actief","Dauwpunt blijft bewaakt"]},falling_gap:{label:"Dauwpuntmarge daalt",summary:"De marge tot het dauwpunt wordt kleiner. Het systeem grijpt vroeg in om condens te voorkomen.",checks:["Marge daalt","Aanvoer blijft veilig","Koeling blijft voorzichtig actief"]},projected_floor:{label:"Aanvoer nadert veilige ondergrens",summary:"De aanvoer dreigt te koud te worden. Het systeem verlaagt de koeling preventief.",checks:["Aanvoer voorspeld","Veilige grens leidend","Geen storing"]},simmer:{label:"Koeling rustig bijgesteld",summary:"De koeling blijft op een laag niveau zodat de temperatuur rustig richting setpoint kan bewegen.",checks:["Lage koelvraag","Geen abrupte stop","Rustige regeling"]},buffer_stop:{label:"Water al koud genoeg",summary:"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",checks:["Koelvraag blijft actief","Water is al koud genoeg","Start volgt automatisch"]},dew_stop:{label:"Dauwpuntstop",summary:"De warmtepomp stopt kort omdat verder koelen te dicht bij het dauwpunt zou komen.",checks:["Condensrisico voorkomen","Koelvraag blijft bestaan","Herstart na veilige marge"]},cooling_limiter:{label:"Softwaremaximum actief",summary:"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum en blijft de veiligheidsmarges bewaken.",checks:["Koelvraag actief","Softwaremaximum actief","Marge blijft bewaakt"]},sensor_fallback:{label:"Sensorwaarde onzeker",summary:"Een meting is tijdelijk minder zeker. Het systeem kiest daarom voorzichtig gedrag.",checks:["Metingen gecontroleerd","Veilige keuze voorrang","Herstel zodra data stabiel is"]},restart_wait:{label:"Koeling wacht op veilige herstart",summary:"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.",checks:["Herstart wacht bewust","Marge moet stabiel blijven","Daarna opnieuw beoordelen"]},level1_hold:{label:"Voorzichtig blijven koelen",summary:"De koeling blijft nog even laag totdat duidelijk is dat de veilige marge terug is.",checks:["Even wachten met opschalen","Geen snelle sprong omhoog","Comfortvraag blijft bewaakt"]},room_cap:{label:"Kamervraag begrenst",summary:"De kamer vraagt koeling, maar niet genoeg om harder te gaan koelen.",checks:["Kamer koelt richting setpoint","Vraag blijft beperkt","Rustige regeling"]},oil_return_recovery:{label:"Compressorherstel",summary:"Het systeem geeft compressorherstel tijdelijk voorrang en blijft de veiligheid bewaken.",checks:["Compressorprotectie actief","Gecontroleerd herstel","Veiligheid blijft bewaakt"]}}),I1=Object.freeze({label:"Keuze van het systeem",summary:"Keuze van het systeem",checks:[]});function $r(e){return L1[e]||cu(e)||I1}function bb(e){return $r(e).label}function db(e,t=!1){let r=Number(e);return Number.isFinite(r)&&(r>0||t&&r===0)?`CM${r}`:""}function $a(e,t){let r=db(e),n=db(t,!0);return r&&n&&r!==n?`${r} \u2192 ${n}`:""}function F1(e,t){let r=String(e?.event_type||""),n=Number(e?.cm)||0,a=Number(e?.value_a);if(r==="boiler_assist_start")return $a(t||2,n===3?3:n);if(r==="boiler_assist_stop")return $a(t===3?3:t,n>0?n:2);if(r==="flow_hold_start"&&n===1)return $a(t,1);if(r==="flow_hold_clear"&&n===1&&Number.isFinite(a))return $a(1,a);let i=uu(e,t);return i?$a(i.from,i.to):""}function j1(e){let t=String(e?.event_type||""),r=Number(e?.cm)||0,n=Number(e?.value_a);if(t==="flow_hold_clear"&&r===1&&Number.isFinite(n))return n;if(t==="frost_protection_clear")return 0;let a=Ah(e);return a!==null?a:r}function wb(e){let t=String(e?.modeTransitionLabel||"").trim();if(t)return t;let r=String(e?.modeLabel||"").trim();return r.includes("\u2192")?r:""}function Vu(){let e=xs(F("coolingLimiterReasonCode",""));return{requestActive:C("coolingRequestActive"),permitted:S("coolingPermitted")?C("coolingPermitted"):!0,reasonCode:e||"inactive",rawDemand:Fo("coolingDemandRaw",0,"","\u2014"),limitedDemand:Fo("coolingLimitedDemand",0,"","\u2014"),allowedMax:Fo("coolingLimiterAllowedMax",0,"","\u2014"),dewPoint:Fo("coolingDewPointSelected",1,"\xB0C","\u2014"),safeSupply:Fo("coolingEffectiveMinSupplyTemp",1,"\xB0C","\u2014"),guardMode:F("coolingGuardMode","Dauwpuntbewaking"),blockReason:F("coolingBlockReason","Ready")}}function vb(e){return{event:"Moment",span:"Periode",aggregate:"Samenvatting"}[e]||"Record"}function _r(e,t="neutral",r=""){let n=r?me(r,"oq-working-pill-icon"):"";return`<span class="oq-working-pill oq-working-pill--${s(t)}">${n}<span>${s(e)}</span></span>`}function W1(e){let t=e?.reasonCode||e?.primaryReason;return gb(e?.modeLabel)==="cm98"&&t==="frost_protection"}function Qu(e){return W1(e)?'<span class="oq-working-mode-badge" aria-label="Technische mode CM98">CM98</span>':""}function yb(e){let t=e?.reasonCode||e?.primaryReason||"keep_current",r=e?.source||"HP1 + HP2";if(t==="better_heat")return{title:"Keuze van het systeem",verdict:"Twee warmtepompen actief",summary:"Omdat de warmtevraag hoog blijft, leveren twee warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.",rows:[{option:"E\xE9n warmtepomp",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef langer hoog dan \xE9\xE9n warmtepomp rustig kan dragen.",tone:"muted"},{option:"Andere losse pomp",result:"Geen voordeel",code:"hold_active",detail:"Wisselen naar de andere pomp zou geen rustiger gedrag geven.",tone:"muted"},{option:"Twee warmtepompen",result:"Gekozen",code:"better_heat",detail:"Samen leveren ze meer reserve en minder belasting per pomp.",tone:"selected"}]};if(t==="demand_decreased"||t==="less_power")return{title:"Keuze van het systeem",verdict:"E\xE9n warmtepomp is genoeg",summary:"De warmtevraag is gezakt. E\xE9n warmtepomp kan de resterende warmte rustiger en zuiniger leveren.",rows:[{option:"Twee warmtepompen",result:"Niet meer nodig",code:"less_power",detail:"Samen leveren ze meer vermogen dan nu nodig is.",tone:"muted"},{option:r,result:"Blijft actief",code:"less_power",detail:"E\xE9n warmtepomp dekt de lagere vraag rustiger.",tone:"selected"}]};if(t==="runtime_lead")return{title:"Keuze van het systeem",verdict:`${r} gestart`,summary:"De warmtepompen zijn gelijkwaardig. De keuze volgt uit draaiuren, beschikbaarheid en wachttijden.",rows:[{option:"HP1",result:r==="HP1"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Past het beste bij de actuele draaiurenbalans.",tone:r==="HP1"?"selected":"muted"},{option:"HP2",result:r==="HP2"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Gelijkwaardige pomp, maar nu minder gunstig in balans of wachttijd.",tone:r==="HP2"?"selected":"muted"}]};if(["min_rest_active","no_candidate","candidate_in_rest","candidate_in_defrost","candidate_unavailable"].includes(t))return{title:"Startcontrole",verdict:"Start uitgesteld",summary:$r(t).summary,rows:[{option:r,result:"Wacht nog",code:t,detail:$r(t).summary,tone:"limited"},{option:"Opnieuw beoordelen",result:"Straks",code:"hold_active",detail:"Het systeem probeert opnieuw zodra starten verstandig is.",tone:"muted"}]};if(["flow_preflow","flow_postflow","flow_too_low"].includes(t)){let a=(e?.realEventType||e?.rawDecisionEvent?.event_type||"")==="flow_hold_clear",i=t==="flow_postflow";if(a)return{title:i?"Waterflow afronden":"Waterflow bevestigd",verdict:i?"Naloop klaar":"Start vrijgegeven",summary:i?"De pompnaloop is afgerond. Het systeem kan terug naar standby.":"De waterflow is voldoende. De regelaar kan doorgaan met de volgende stap.",rows:[{option:"Waterflow",result:"Voldoende",code:t,detail:"De gemeten circulatie is vrijgegeven voor de volgende stap.",tone:"selected"},{option:"Warmtepomp",result:i?"Gestopt":"Vrijgegeven",code:t,detail:i?"De warmtepomp is gestopt; de naloop is nu ook klaar.":"De compressor mag nu volgens de normale regeling starten.",tone:"selected"},{option:"Regelaar",result:"Gaat verder",code:"keep_current",detail:"De controller vervolgt automatisch de normale regeling.",tone:"muted"}]};let l=t==="flow_too_low";return{title:"Waterflow eerst",verdict:i?"Naloop actief":l?"Start geblokkeerd":"Voorloop actief",summary:$r(t).summary,rows:[{option:"Waterflow",result:l?"Blijft te laag":i?"Wordt afgerond":"Wordt opgebouwd",code:t,detail:"De pomp zorgt voor circulatie voordat de volgende stap vrij is.",tone:l?"limited":"selected"},{option:"Warmtepomp",result:i?"Gestopt":l?"Start geblokkeerd":"Wacht op voorloop",code:t,detail:"De compressor start pas als de flowconditie veilig is.",tone:l?"limited":"muted"},{option:"Regelaar",result:l?"Blijft controleren":"Controleert automatisch",code:"keep_current",detail:"De controller beoordeelt de waterflow automatisch opnieuw.",tone:"muted"}]}}if(t==="defrost_hold"||t==="defrost_boost")return{title:"Bescherming",verdict:"Ontdooien krijgt voorrang",summary:"Tijdens ontdooien houdt het systeem de regeling rustig, zodat de warmtepomp vanzelf kan herstellen.",rows:[{option:"Actieve warmtepomp",result:"Rustig laten herstellen",code:"defrost_hold",detail:"Niet wisselen zolang ontdooien of herstel actief is.",tone:"selected"},{option:"Extra bron",result:t==="defrost_boost"?"Helpt mee":"Stand-by",code:t,detail:"Alleen inzetten als comfort of vermogen daarom vraagt.",tone:t==="defrost_boost"?"selected":"muted"}]};if(t==="boiler_assist")return{title:"Bronkeuze",verdict:"CV ondersteunt tijdelijk",summary:"De warmtepompen blijven de basis leveren. CV vult alleen aan zolang extra vermogen nodig is.",rows:[{option:"Alleen warmtepompen",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef hoger dan de warmtepompen rustig konden leveren.",tone:"muted"},{option:"CV-ketel",result:"Tijdelijk bij",code:"boiler_assist",detail:"CV levert extra vermogen en stopt zodra de vraag zakt.",tone:"selected"},{option:"Na piek",result:"Terug naar HP",code:"less_power",detail:"De warmtepompen nemen het weer over als ondersteuning niet meer nodig is.",tone:"muted"}]};if(t==="sticky_protection")return{title:"Pompbescherming",verdict:"Korte pomprun",summary:"Alleen de pomp draait kort. De warmtepompen blijven uit omdat er geen verwarmings- of koelvraag is.",rows:[{option:"Verwarmen",result:"Niet nodig",code:"keep_current",detail:"Geen warmtevraag vanuit kamer of regeling.",tone:"muted"},{option:"Koelen",result:"Niet nodig",code:"keep_current",detail:"Geen koelvraag vanuit de kamer.",tone:"muted"},{option:"Pomp",result:"Kort aan",code:"sticky_protection",detail:"De dagelijkse bescherming laat de pomp ongeveer 1 minuut draaien.",tone:"selected"}]};if(["capacity_cap","room_cap","cooling_limiter"].includes(t)){let n=Vu();return{title:"Koelregeling",verdict:`Maximaal ingesteld niveau ${n.allowedMax}`,summary:"De koelvraag wordt uitgevoerd binnen het ingestelde maximum. Dit is normale regeling, geen aandachtspunt.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat het ingestelde maximum meetelt.",tone:"muted"},{option:"Ingesteld maximum",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat de software nu toestaat.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"normal"}]}}if(t==="buffer_stop")return{title:"Koelregeling",verdict:"Water al koud genoeg",summary:"Er is koelvraag, maar de actuele watertemperatuur vraagt nu geen extra koeling.",rows:[{option:"Koelvraag",result:"Blijft actief",code:"coolingDemandRaw",detail:"De kamer blijft om koeling vragen.",tone:"muted"},{option:"Watertemperatuur",result:"Koud genoeg",code:"buffer_stop",detail:"De aanvoer is al koud genoeg voor dit moment.",tone:"selected"},{option:"Warmtepomp",result:"Wacht",code:"keep_current",detail:"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",tone:"muted"}]};if(["falling_gap","projected_floor","dew_stop","restart_wait","level1_hold","oil_return_recovery","sensor_fallback"].includes(t)){let n=Vu();return{title:"Koelbewaking",verdict:n.permitted?`Maximaal koelniveau ${n.allowedMax}`:"Koeling tijdelijk gepauzeerd",summary:"De koelvraag blijft actief, maar dauwpunt, aanvoer of compressorconditie vraagt tijdelijk voorzichtig gedrag.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat bewaking meetelt.",tone:"muted"},{option:"Maximaal veilig",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat nu veilig is met de huidige dauwpuntmarge.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"limited"}]}}return null}function Sb(e){return e?`
      <div class="oq-working-optimizer">
        <div class="oq-working-optimizer-head">
          <span class="oq-working-eyebrow">${s(e.title)}</span>
          <strong>${s(e.verdict)}</strong>
          <p>${s(e.summary)}</p>
        </div>
        <div class="oq-working-optimizer-options">
          ${e.rows.map(t=>`
            <div class="oq-working-optimizer-option oq-working-optimizer-option--${s(t.tone||"muted")}">
              <span>${s(t.option)}</span>
              <strong>${s(t.result)}</strong>
              <p>${s(t.detail)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `:""}function V1(e=Date.now()){let t=Yu().filter(c=>["startup_inhibit_start","startup_inhibit_refresh","startup_inhibit_clear"].includes(String(c?.event_type||""))).sort(Ju),r=t[t.length-1];if(!r||!["startup_inhibit_start","startup_inhibit_refresh"].includes(String(r.event_type)))return null;let n=co(r),a=Math.max(0,Number(r?.value_b)||0),i=Number.isFinite(n)?Math.max(0,(e-n)/1e3):0,l=Math.max(0,Math.ceil(a-i));return a>0&&l<=0?null:{event:r,subject:String(r?.subject||"SYSTEM").toUpperCase(),targetMode:Number(r?.value_a)||0,remainingS:l,remainingLabel:l>0?`Nog ${Math.max(1,Math.ceil(l/60))} min`:"Wachttijd actief"}}function kb(e){let t=$1(e),r=F("controlModeLabel","\u2014"),n=gb(r),a=n?n.toUpperCase():r,i=e.find(W=>W.title==="HP1")||e[0],l=e.find(W=>W.title==="HP2"),c=ju(i),u=l?ju(l):!1,d=c&&u,m=t.defrostActive,w=Vu(),v=t.coolingProtection,f=t.coolingCapped,g=t.coolingMode||t.coolingRequest,p=S("stickyActive")&&C("stickyActive"),b=t.boilerActive,y=V1(),k="E\xE9n warmtepomp actief",q="De actuele vraag past binnen \xE9\xE9n warmtepomp. De andere warmtepomp blijft beschikbaar als extra capaciteit nodig is.",T="Een extra warmtepomp schakelt bij zodra de vraag lang genoeg hoog blijft en alle wachttijden vrij zijn.",M="normal",A="keep_current",H="Live";if(n==="cm98")k="Vorstbescherming actief",q="Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",T="Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",M="limited",A="frost_protection",H="Bescherming actief";else if(p)k="Pompbescherming actief",q="Er is geen warmte- of koelvraag. De pomp draait kort om vastzitten na lange stilstand te voorkomen.",T="Na ongeveer 1 minuut stopt de pomp en blijft het systeem standby tot er comfortvraag of bescherming nodig is.",A="sticky_protection",H="Dagelijkse run";else if(y){let W=y.targetMode===1;k=W?"Koeling wacht na herstart":"Verwarming wacht na herstart",q=W?"Er is koelvraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.":"Er is warmtevraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.",T=W?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",A="startup_inhibit",H=y.remainingLabel||"Wachttijd actief"}else if(w.reasonCode==="buffer_stop")k="Koeling wacht: water al koud genoeg",q="Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",T="De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",A="buffer_stop",H="Koelvraag actief";else if(v){let W=w.reasonCode&&w.reasonCode!=="inactive"?w.reasonCode:"soft_guard",x=W==="restart_wait";k=x?"Koeling wacht op veilige herstart":w.permitted?"Koeling tijdelijk beperkt":"Koeling tijdelijk gepauzeerd",q=x?"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.":`Er is koelvraag, maar het systeem koelt nu maximaal op niveau ${w.allowedMax} om condens te voorkomen.`,T=x?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":"Koeling neemt stap voor stap toe zodra de dauwpuntmarge veilig en stabiel is.",M="limited",A=W,H="Koelvraag actief"}else if(f){let W=w.allowedMax&&w.allowedMax!=="\u2014"?`niveau ${w.allowedMax}`:"het ingestelde maximum",x=["capacity_cap","room_cap","cooling_limiter"].includes(w.reasonCode)?w.reasonCode:"capacity_cap";k="Koeling actief op ingesteld maximum",q=`Er is koelvraag. Het systeem koelt maximaal op ${W}, zoals ingesteld in de software.`,T="Koeling blijft binnen dit maximum. Dauwpunt, aanvoer en waterflow worden op de achtergrond bewaakt.",A=x,H="Koelvraag actief"}else g?(k="Koeling actief",q="Er is koelvraag en dauwpuntbewaking geeft koeling vrij. Het systeem blijft marge en waterflow bewaken.",T="Koeling blijft actief tot de kamertemperatuur richting setpoint zakt of bescherming ingrijpt.",A="keep_current",H="Koelen"):n==="cm4"?(k=b?"Ketelfallback actief":"Ketelfallbackrol niet actief",q=b?"Geen warmtepomp is inzetbaar; de CV-ketel krijgt in CM4 de verwarmingsopdracht.":"CM4 is als regelrol gekozen, maar de keteluitvoer is op dit moment niet actief.",T=b?"OpenQuatt blijft warmtepompherstel en alle veiligheidsvoorwaarden bewaken.":"De uitvoer blijft uit totdat de benodigde veiligheidsvoorwaarden geldig zijn.",M="fault",A=b?"boiler_fallback":"fallback_blocked",H=b?"Fallback actief":"Uitvoer geblokkeerd"):b?(k="CV-ketel ondersteunt",q="De CV-ketel helpt tijdelijk omdat de warmtevraag meer vermogen vraagt dan de warmtepompen nu leveren.",T="De CV-ketel stopt zodra de warmtepompen de vraag weer zelf kunnen dragen.",M="limited",A="boiler_assist",H="Ondersteuning actief"):m?(k="Ontdooien actief",q="Een warmtepomp ontdooit tijdelijk. Het systeem houdt de keuze rustig zodat het ontdooien vanzelf kan afronden.",T="De warmtepomp hervat automatisch zodra het ontdooien klaar is.",M="limited",A="defrost_hold",H="Tijdelijk"):d?(k="Duo-bedrijf actief",q="Beide warmtepompen draaien omdat de warmtevraag hoog blijft. Dit is normaal winterbedrijf.",T="E\xE9n warmtepomp stopt zodra de warmtevraag voldoende afneemt of single-bedrijf weer effici\xEBnter is.",A="better_heat",H="Actief"):!c&&!u&&(k="Geen warmtepomp actief",q="Er is nu geen warmtepompactie nodig, of het systeem wacht door bescherming of rusttijd.",T="Bij nieuwe vraag kiest het systeem opnieuw de best passende warmtepomp.",A="keep_current",H="Stand-by");let j=y&&["HP1","BOTH"].includes(y.subject),I=y&&["HP2","BOTH"].includes(y.subject);return{title:k,copy:q,expectation:T,severity:M,primaryReason:A,sinceLabel:H,modeLabel:a,strategyLabel:_1(),reasonLabel:bb(A),hp1Running:c,hp2Running:u,hp2Available:!!l,hp1Status:c?"Actief":j?"Wacht":"Beschikbaar",hp2Status:l?u?"Actief":I?"Wacht":"Beschikbaar":"Niet aanwezig",cvStatus:b?n==="cm4"?"Fallback":"Actief":"Uit",outsideTemp:Fo("outsideTempSelected",1,"\xB0C","\u2014"),supplyTemp:Fo("supplyTemp",1,"\xB0C","\u2014"),flow:Fo("flowSelected",0,"L/h","\u2014"),hp1Starts:sb("hp1CompressorStarts24h","\u2014"),hp2Starts:sb("hp2CompressorStarts24h",l?"\u2014":"n.v.t."),hp1Hours:ib("hp1RuntimeHours","\u2014"),hp2Hours:l?ib("hp2RuntimeHours","\u2014"):"n.v.t.",cooling:w,coolingProtection:v,startupInhibit:y,coolingCapped:f}}function Yu(){let e=o.decisionLog;return e?.ok&&Array.isArray(e.events)?e.events:[]}function co(e){let t=Number(e?.epoch_s);if(Number.isFinite(t)&&t>0)return t*1e3;let r=Number(o.decisionLog?.meta?.boot_epoch_s),n=Number(e?.uptime_s);return Number.isFinite(r)&&r>0&&Number.isFinite(n)&&n>=0?(r+n)*1e3:Number.NaN}function Cs(e){let t=co(e);if(Number.isFinite(t))return t/1e3;let r=Number(e?.uptime_s);return Number.isFinite(r)?r:Number(e?.seq)||0}function Ju(e,t){let r=Cs(e)-Cs(t);return r!==0?r:(Number(e?.seq)||0)-(Number(t?.seq)||0)}function qb(e,t=Date.now()){let r=co(e);if(Number.isFinite(r))return Math.max(0,Math.round((t-r)/6e4));let n=Number(o.decisionLog?.meta?.uptime_s),a=Number(e?.uptime_s);return Number.isFinite(n)&&Number.isFinite(a)?Math.max(0,Math.round((n-a)/60)):Number.NaN}function pb(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Mr(e,t=Date.now(),r="auto"){if(!Number.isFinite(e))return"Onbekend";let n=new Date(e),a=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});if(r==="time")return a;if(r==="weekday")return`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`;let i=new Date(t),l=new Date(i);return l.setDate(l.getDate()-1),pb(n,i)?a:pb(n,l)?`gisteren ${a}`:`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`}function qs(e,t=ft(),r=Date.now()){let n=Math.max(0,Math.min(1440,Number(e)||0)),a=Ar(t,r);return a.start+n/1440*(a.end-a.start)}function B1(e,t=ft(),r=Date.now()){let n=co(e),a=(u,d,m)=>!Number.isFinite(u)||u<d||u>m?Number.NaN:(u-d)/Math.max(1,m-d)*1440;if(Number.isFinite(n)){let u=Ar(t,r);return a(n,u.start,u.end)}let i=qb(e,r);if(!Number.isFinite(i))return Number.NaN;let l=jo().find(u=>u.id===t);if(l?.calendarDay||l?.custom)return Number.NaN;let c=zu(t,r);return i<=c?1440-i/c*1440:Number.NaN}function K1(e,t=ft(),r=Date.now()){let n=co(e);if(!Number.isFinite(n)){let a=qb(e,r);return Number.isFinite(a)?r0(a):"Onbekend"}return t==="week"||t==="last48"||t==="last3d"||t==="custom"?Mr(n,r,"weekday"):t.startsWith("last")?Mr(n,r,"auto"):Mr(n,r,"time")}function Tb(e){let t=Math.max(0,Math.round(Number(e)||0));if(!t)return"";if(t<60)return`${t}s`;if(t<3600)return`${Math.round(t/60)} min`;let r=Math.floor(t/3600),n=Math.round(t%3600/60);return n?`${r}u ${n}m`:`${r}u`}function Zu(e){let t=String(e||"").toUpperCase();return{SYSTEM:"Systeem",HP1:"HP1",HP2:"HP2",BOTH:"HP1 + HP2",CV:"CV-ketel",COOLING:"Koeling",PUMP:"Pomp",CONTROLLER:"Regelaar"}[t]||"Systeem"}function gt(e,t){let r=String(e||"").toUpperCase(),n=Zu(e);return r!=="HP1"&&r!=="HP2"&&r!=="BOTH"?n:Number(t)===5?`${n} (koelen)`:Number(t)>0?`${n} (verwarmen)`:n}function z1(e){let t=String(e?._oq_active_cooling_subject||"").toUpperCase();return gt(t==="HP1"||t==="HP2"||t==="BOTH"?t:e?.subject,5)}function Xu(e){let t=String(e?.subject||"").toUpperCase();return t==="HP1"||t==="HP2"?t:""}function U1(e){let t=String(e?.event_type||""),r=Zu(e?.subject),n=String(e?.reason||"unknown"),a=Number(e?._oq_context_cm??e?.cm)===5,i=e?._oq_active_cooling_source||"De warmtepomp",l=e?._oq_active_heating_source||"De warmtepomp",c=String(e?._oq_cooling_stop_reason||(n==="dew_stop"?"dew_stop":"")),u=["less_power","demand_decreased","cooling_request_cleared"].includes(n),d=n==="heating_request_cleared",m=!!e?._oq_cooling_runtime_hold,w=!!e?._oq_heating_runtime_hold,v=Ku(n),f=["soft_guard","sensor_fallback","no_candidate","flow_preflow"].includes(n),g=$r(n),p=n==="flow_preflow",b=n==="flow_too_low",y=$h(e,r);if(y)return y;let k={title:"Keuze van het systeem",summary:"De regelaar heeft een keuze vastgelegd.",detail:g.summary,next:"Het systeem beoordeelt opnieuw zodra vraag, marge of beschikbaarheid verandert."};return{source_start:{title:a?`Koeling gestart (${r})`:`${r} gestart`,reasonLabel:a?"Koeling gestart":"",reasonSummary:a?"Koeling is vrijgegeven en de gekozen warmtepomp start met koelen.":"",summary:a?`${r} is gestart om te koelen. Dauwpunt, waterflow en aanvoertemperatuur blijven bewaakt.`:`${r} is gekozen op basis van beschikbaarheid, wachttijd en draaiurenbalans.`,detail:a?"De koelvraag is vrijgegeven. HP1 en HP2 zijn gelijkwaardig; de regelaar kiest de beschikbare bron die nu het beste past.":"HP1 en HP2 zijn gelijkwaardig. De regelaar kiest de beschikbare bron die op dat moment het beste past.",next:a?"Koeling blijft actief zolang er koelvraag is en de veilige marges vrij blijven.":"Als de vraag hoog blijft, beoordeelt het systeem of extra vermogen nodig is."},source_stop:{title:a?c==="dew_stop"?`${r} gestopt door dauwpunt`:u?"Koeling gestopt: geen koelvraag":`Koeling afgerond (${r})`:d?"Verwarming gestopt: geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp stopt":`${r} gestopt`,reasonLabel:a?c==="dew_stop"?"Dauwpuntstop":u?"Geen koelvraag":"Koeling afgerond":d?"Geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp is genoeg":"",reasonSummary:a?c==="dew_stop"?"De warmtepomp stopte omdat de dauwpuntbewaking koelen pauzeerde.":u?"De koelvraag is weggevallen of voldoende afgenomen.":"De koelactie is afgerond. Een korte pompnaloop kan daarna normaal zijn.":d?"De warmtevraag is weggevallen. Een korte pompnaloop kan daarna normaal zijn.":n==="less_power"?"De warmtevraag is afgenomen; \xE9\xE9n warmtepomp kan de resterende vraag dragen.":"",summary:a?c==="dew_stop"?`${r} stopte omdat verder koelen te dicht bij het dauwpunt kwam.`:u?"Er is geen koelvraag meer; de warmtepomp stopt met koelen.":`${r} is klaar met koelen.`:d?"Er is geen warmtevraag meer; de warmtepomp stopt met verwarmen.":n==="less_power"?"De vraag is lager. E\xE9n warmtepomp kan de resterende warmtevraag rustig dragen.":`${r} is gestopt omdat minder vermogen voldoende is of bescherming voorrang kreeg.`,detail:a?c==="dew_stop"?"Dit is beschermingsgedrag. Het systeem voorkomt condens en kan later opnieuw koelen zodra de marge veilig is.":"De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":d?"De regeling vraagt geen warmte meer. De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":"De regelaar voorkomt onnodig doordraaien en houdt tegelijk wachttijden en bescherming in de gaten.",next:a?c==="dew_stop"?"Bij blijvende koelvraag start koeling opnieuw zodra de dauwpuntmarge veilig genoeg is.":"Het systeem blijft standby of rondt de naloop af totdat er opnieuw koelvraag is.":d?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"Bij stijgende vraag kan dezelfde of de andere warmtepomp opnieuw starten."},topology_change:{title:a?e?.to==="idle"?n==="cooling_request_cleared"?"Koeling gestopt: geen koelvraag":n==="dew_stop"?"Koeling gestopt door dauwpunt":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&d?"Verwarming gestopt: geen warmtevraag":e?.to==="duo"?"Twee warmtepompen verwarmen":"E\xE9n warmtepomp verwarmt",reasonLabel:a?e?.to==="idle"?n==="cooling_request_cleared"?"Geen koelvraag":n==="dew_stop"?"Dauwpuntstop":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&d?"Geen warmtevraag":"",reasonSummary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weggevallen. Eventuele naloop is normaal.":n==="dew_stop"?"Koeling pauzeert om condens te voorkomen. Herstart kan zodra de marge veilig is.":"Er is geen warmtepomp meer actief voor koeling. Eventuele naloop is normaal.":"Koeling is actief. Het systeem bewaakt tegelijk de veilige marges.":e?.to==="idle"&&d?"De warmtevraag is weggevallen. Eventuele naloop is normaal.":"",summary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weg. Er is geen warmtepomp meer actief voor koeling.":n==="dew_stop"?"Koeling stopt tijdelijk omdat verder koelen te dicht bij het dauwpunt komt.":"Er is geen warmtepomp meer actief voor koeling.":`${r} koelt. Het systeem blijft dauwpunt, waterflow en aanvoertemperatuur bewaken.`:e?.to==="duo"?"Samen leveren de warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.":e?.to==="idle"&&d?"Er is geen warmtepomp meer actief voor verwarmen.":"De vraag is lager. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",detail:a?"Koelen gebruikt dezelfde bronkeuze-logica als verwarmen: de warmtepompen zijn gelijkwaardig en de controller kiest de rustigste beschikbare bron.":"De duo-keuze gaat niet over hoofd- en hulppomp. De warmtepompen zijn gelijkwaardig; het systeem kiest de rustigste combinatie.",next:a?"Koeling blijft actief zolang er koelvraag is en bescherming geen beperking vraagt.":e?.to==="duo"?"Duo-bedrijf blijft actief zolang de extra reserve nuttig is.":e?.to==="idle"&&d?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"De tweede warmtepomp blijft beschikbaar als de vraag opnieuw stijgt."},decision_hold:{title:n==="defrost_hold"?"Keuze kort vastgehouden":"Start of wissel uitgesteld",summary:n==="defrost_hold"?"De regelaar laat ontdooien rustig afronden voordat hij opnieuw schakelt.":"De regelaar wacht bewust even om korte cycli en onrustig gedrag te voorkomen.",detail:g.summary,next:"Na de wachttijd beoordeelt het systeem opnieuw wat de rustigste keuze is."},decision_blocked:{title:n==="flow_too_low"?"Start geblokkeerd: waterflow te laag":r==="CV-ketel"?"CV-ketel niet vrijgegeven":"Actie geblokkeerd",reasonLabel:n==="flow_too_low"?"Waterflow blijft te laag":"",reasonSummary:n==="flow_too_low"?"De normale voorlooptijd is verstreken. De warmtepomp blijft veilig uit totdat voldoende water circuleert.":"",summary:n==="flow_too_low"?"De pomp draait, maar na de normale voorlooptijd is nog niet genoeg waterflow gemeten.":r==="CV-ketel"?"Er was een mogelijke hulpvraag, maar de CV-ketel was niet vrijgegeven.":"De gevraagde actie is tijdelijk niet toegestaan door een voorwaarde of bescherming.",detail:n==="flow_too_low"?"Dit is pas een blokkade nadat de normale opbouwtijd is verstreken; een korte lage flow direct na het starten hoort hier niet bij.":g.summary,next:n==="flow_too_low"?"De regelaar blijft de waterflow volgen en geeft de start automatisch vrij zodra de circulatie voldoende en stabiel is.":"De regelaar probeert opnieuw zodra de voorwaarden vrij zijn.",checks:n==="flow_too_low"?["Voorlooptijd verstreken","Warmtepomp blijft veilig uit","Waterflow wordt opnieuw beoordeeld"]:null},candidate_blocked:{title:`${r} wacht nog`,summary:n==="candidate_in_rest"?`${r} zit nog in rusttijd na een vorige stop.`:`${r} is nu nog geen veilige kandidaat om te starten.`,detail:g.summary,next:"De regelaar probeert opnieuw zodra de voorwaarde vrij is en de vraag blijft bestaan."},flow_hold_start:{title:n==="flow_postflow"?m?"Koeling loopt nog kort door":w?"Verwarming loopt nog kort door":a?"Naloop na koelen actief":"Naloop actief":b?"Start wacht op voldoende waterflow":a?"Voorloop voor koelen":"Voorloop voor start",reasonLabel:n==="flow_postflow"?m||w?"Minimale looptijd":a?"Naloop na koelen":"Naloop actief":b?"Waterflow blijft te laag":a?"Voorloop voor koelen":"Voorloop actief",reasonSummary:a?n==="flow_postflow"?m?`${i} staat nog op Cooling terwijl het systeem al in CM1 naloop zit.`:"De pomp draait kort na om het koelbedrijf netjes af te ronden.":"De pomp draait eerst kort zodat de flow stabiel is voordat de warmtepomp met koelen start.":w?`${l} verwarmt nog terwijl de regelaar al in CM1 naloop zit.`:"",summary:a?n==="flow_postflow"?m?`${i} koelt nog kort door door minimale looptijd; het systeem zit al in naloop.`:"De pomp draait kort na zodat het koelbedrijf netjes wordt afgerond.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om veilig met koelen te starten.":"De pomp draait eerst kort voor. Daarna mag de warmtepomp met koelen starten.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om de warmtepomp veilig te starten.":p?"De pomp draait eerst kort voor zodat de flow stabiel is voordat de warmtepomp start.":w?`${l} verwarmt nog kort door door minimale looptijd; het systeem zit al in naloop.`:g.summary,detail:a?m?"De controller vraagt geen nieuwe koelactie meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"Dit is een normale startstap. De pomp krijgt eerst ongeveer 30 seconden om waterflow op te bouwen; daarna wordt de koelactie vrijgegeven.":w?"De regelaar vraagt geen nieuwe warmte meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"CM1 wordt gebruikt als korte flowfase. De pomp krijgt eerst even tijd om waterflow op te bouwen voordat de warmtepomp start of stopt.",next:a?n==="flow_postflow"?m?`${i} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"Daarna blijft het systeem standby of beoordeelt het een nieuwe koelvraag.":"Na de korte voorloop gaat het systeem automatisch door met koelen.":w?`${l} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"De regelaar gaat automatisch verder zodra de flowfase klaar is."},flow_hold_clear:{title:n==="flow_postflow"?a?"Naloop na koelen klaar":"Naloop klaar":b?"Waterflow hersteld":a?"Voorloop voor koelen klaar":"Voorloop klaar",reasonLabel:n==="flow_postflow"?a?"Naloop na koelen":"Naloop actief":b?"Waterflow hersteld":a?"Koelen vrijgegeven":"Voorloop klaar",reasonSummary:n==="flow_postflow"?a?"De korte pompnaloop na koelen is afgerond.":"De korte pompnaloop is afgerond.":b?"De waterflow is hersteld en de tijdelijke startblokkade is opgeheven.":a?"De waterflow is voldoende; de warmtepomp kan met koelen verder.":"De waterflow is voldoende; de warmtepomp is vrijgegeven voor de volgende stap.",summary:a?n==="flow_postflow"?"De pomp heeft kort nagedraaid; het koelbedrijf is afgerond.":"De waterflow is voldoende; koeling kan verder.":n==="flow_postflow"?"De pomp heeft kort nagedraaid; het systeem kan terug naar standby.":"De waterflowfase is afgerond; de normale regeling kan verder.",detail:a?"De flowfase hoort bij het koeltraject. Dit is normaal gedrag rond starten of stoppen van koeling.":n==="flow_postflow"?"De warmtepomp is gestopt en de pomp heeft de korte naloop afgerond.":"De pomp heeft voldoende circulatie opgebouwd. De startvoorwaarde voor waterflow is nu vrij.",next:a?n==="flow_postflow"?"Het systeem blijft standby totdat er opnieuw koelvraag of bescherming nodig is.":"De controller vervolgt met koelen en blijft dauwpunt en aanvoer bewaken.":"De controller vervolgt met verwarmen, koelen, vorstbescherming of standby.",checks:n==="flow_postflow"?["Naloop afgerond","Warmtepomp gestopt","Regeling gaat naar standby"]:b?["Waterflow hersteld","Startblokkade opgeheven","Regeling gaat verder"]:["Waterflow voldoende","Warmtepomp vrijgegeven","Regeling gaat verder"]},startup_inhibit_start:{title:Number(e?.value_a)===1?"Koeling wacht na herstart":"Verwarming wacht na herstart",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor blijft na een herstart kort uit om een te snelle herstart te voorkomen.",summary:Number(e?.value_a)===1?"Er is koelvraag, maar de warmtepomp wacht nog kort na de herstart.":"Er is warmtevraag, maar de warmtepomp wacht nog kort na de herstart.",detail:"De controller kent na een reboot de voorgaande stoptijd niet meer. Daarom houdt hij eenmaal de ingestelde minimale uit-tijd aan voordat een compressor mag starten.",next:Number(e?.value_a)===1?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",checks:["Comfortvraag aanwezig","Compressor blijft nog uit","Start volgt automatisch"]},startup_inhibit_clear:{title:"Wachttijd na herstart voorbij",reasonLabel:"Wachttijd afgerond",reasonSummary:"De compressor mag weer starten als de vraag nog aanwezig is.",summary:"De wachttijd na de herstart is verstreken.",detail:"De minimale uit-tijd na de reboot is afgerond. Alle normale startvoorwaarden blijven van toepassing.",next:"Bij aanhoudende vraag gaat de controller automatisch verder met de gekozen warmtepomp.",checks:["Wachttijd verstreken","Start weer toegestaan","Regeling gaat verder"]},startup_inhibit_refresh:{title:Number(e?.value_a)===1?"Koelvraag tijdens wachttijd gewijzigd":"Warmtevraag tijdens wachttijd gewijzigd",reasonLabel:"Wachttijd blijft actief",reasonSummary:"De gekozen warmtepomp of doelmodus veranderde, maar de wachttijd na de herstart loopt door.",summary:"De controller heeft de actuele vraag opnieuw beoordeeld. De compressor blijft wachten tot dezelfde wachttijd voorbij is.",detail:"Tijdens de wachttijd veranderde welke warmtepomp of doelmodus gewenst is. De blokkering is niet opgeheven; alleen de context van de wachtperiode is bijgewerkt.",next:"Zodra de wachttijd voorbij is, mag de dan gekozen warmtepomp automatisch starten.",checks:["Vraag opnieuw beoordeeld","Wachttijd blijft actief","Start volgt automatisch"]},defrost_seen_start:{title:`Ontdooien gestart (${r})`,summary:`${r} ontdooit kort. Dat is normaal bij koud en vochtig weer.`,detail:"De buitenunit bepaalt zelf hoe lang ontdooien duurt. De regelaar voorkomt ondertussen onnodige wissels.",next:"Na ontdooien levert de warmtepomp automatisch weer normaal mee."},defrost_seen_clear:{title:`Ontdooien klaar (${r})`,summary:`${r} heeft ontdooien afgerond en kan weer normaal vermogen leveren.`,detail:"De regelaar ziet dat de ontdooifase voorbij is en laat de normale regeling weer doorlopen.",next:"Bij aanhoudende vraag blijft de warmtepomp actief of schakelt duo-bedrijf bij."},cooling_limited:{title:n==="dew_stop"?"Koeling gestopt door dauwpunt":n==="restart_wait"?"Koeling wacht op veilige herstart":n==="buffer_stop"?"Koeling wacht: water al koud genoeg":v?"Koeling tijdelijk beperkt":"Koeling op ingesteld maximum",summary:n==="dew_stop"?`${i} stopt omdat verder koelen te dicht bij het dauwpunt komt.`:n==="restart_wait"?"De koelvraag is nog aanwezig. Het systeem wacht met opnieuw starten tot de veilige marge voldoende is hersteld.":n==="buffer_stop"?"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.":v?"Er is koelvraag, maar het systeem houdt het koelvermogen tijdelijk lager.":"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum.",detail:g.summary,next:n==="restart_wait"?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":n==="buffer_stop"?"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.":v?"Koeling wordt vrijgegeven zodra de veilige marge stabiel genoeg is.":"Koeling blijft binnen dit maximum zolang de instelling en koelvraag gelijk blijven."},cooling_released:{title:"Koeling vrijgegeven",summary:"De veilige marge is terug. De warmtepomp mag weer normaal koelen.",detail:"De dauwpunt- en temperatuurmarge is voldoende hersteld om de begrenzing los te laten.",next:"De regelaar blijft koelen zolang de kamer daarom vraagt."},sticky_pump_run:{title:"Pompbescherming uitgevoerd",summary:"De pomp draaide kort na langere stilstand. Dit is geen verwarmings- of koelvraag.",detail:"Deze korte run voorkomt dat de pomp na stilstand vast gaat zitten.",next:"De volgende preventieve run volgt pas na de ingestelde beschermingstijd."},frost_protection_start:{title:"Vorstbescherming actief",summary:"Het systeem laat water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt."},frost_protection_clear:{title:"Vorstbescherming gestopt",summary:"Het systeem verlaat de vorstbescherming en gaat terug naar normale regeling.",detail:"Het watercircuit hoeft niet langer apart beschermd te worden.",next:"Bij nieuw vorstrisico kan de bescherming automatisch opnieuw starten."},boiler_assist_start:{title:"CV-ketel ondersteunt tijdelijk",summary:"De CV-ketel helpt omdat extra capaciteit tijdelijk nuttig is.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen."},boiler_assist_stop:f?{title:n==="sensor_fallback"?"CV-ondersteuning gestopt: meting ontbreekt":n==="no_candidate"?"CV-ondersteuning niet beschikbaar":n==="flow_preflow"?"CV-ondersteuning wacht op voorloop":"CV-ondersteuning veilig gestopt",summary:n==="sensor_fallback"?"De CV-ketel is gestopt omdat een betrouwbare aanvoertemperatuur ontbreekt.":n==="no_candidate"?"De CV-ketel is uitgeschakeld of kan nu niet worden ingezet.":n==="flow_preflow"?"De CV-ketel wacht tijdens de test kort tot de waterflow stabiel is.":"De CV-ketel is gestopt omdat een veiligheidsgrens voor de watertemperatuur actief is.",detail:"Dit is een beschermende of configuratiegebonden keuze, niet een teken dat de warmtevraag vanzelf is afgenomen.",next:"De regelaar beoordeelt automatisch opnieuw zodra de blokkade is opgeheven."}:{title:"CV-ondersteuning gestopt",summary:"De extra ondersteuning is niet meer nodig.",detail:"De warmtevraag is genoeg gedaald of de warmtepompen kunnen het weer zelf dragen.",next:"De CV-ketel blijft beschikbaar als er later opnieuw extra capaciteit nodig is."},attention_pattern:{title:"Aandachtspunt gezien",summary:n==="start_stop_rate_high"?"Er zijn relatief veel starts/stops gezien. Dat is nuttig om te volgen.":"Het systeem ziet een patroon dat extra aandacht verdient.",detail:g.summary,next:"Als het patroon aanhoudt, blijft dit zichtbaar voor support en analyse."}}[t]||k}function G1(e,t,r){let n=Number(t?.duration_s);if(!Number.isFinite(n)||n<=0)return e;let a=Aa(t,r);return Math.max(e,Math.min(1440,e+Math.max(5,a)))}function Q1(e){let t=String(e?.event_type||""),r=String(e?.reason||""),n=_h(e);if(n)return n;if(Eb(e)||r==="buffer_stop")return"normal";if(Ku(r))return"limited";if(t==="flow_hold_start"||t==="flow_hold_clear"){if(r==="flow_preflow"||r==="flow_postflow")return"normal";if(r==="flow_too_low")return t==="flow_hold_start"?"limited":"normal"}return String(e?.severity||"normal")}function Eb(e){if(String(e?.event_type||"")!=="cooling_limited")return!1;let t=String(e?.reason||"");return["capacity_cap","room_cap","cooling_limiter","simmer","falling_gap","level1_hold"].includes(t)?!0:t==="projected_floor"&&Number(e?.value_a)>0}function Y1(e,t,r){let n=String(e?.event_type||""),a=String(e?.reason||"unknown");if(!n||n==="boot_marker"||e?._oq_hidden||(n==="defrost_seen_start"||n==="defrost_seen_clear")&&Number(e?._oq_context_cm??e?.cm)===5||Eb(e)||n==="cooling_released")return null;let i=B1(e,t,r);if(!Number.isFinite(i))return null;let l=U1(e),c=Number(e?._oq_context_cm??e?.cm),u=n==="cooling_limited"||n==="cooling_released"?z1(e):n==="source_start"||n==="source_stop"||n==="topology_change"?gt(e?.subject,c):Zu(e?.subject),d=Tb(e?.duration_s),m=Q1(e);return{id:`fw-${e.seq||e.uptime_s||n}`,kind:"event",severity:m,time:K1(e,t,r),title:l.title,summary:l.summary,detailTitle:"Waarom gebeurde dit?",detail:l.detail,next:l.next,source:u,reasonLabel:l.reasonLabel||"",reasonSummary:l.reasonSummary||"",reasonCode:a,modeLabel:Number(e?.cm)>0?`CM${Number(e.cm)}`:"CM?",modeTransitionLabel:e?._oq_mode_transition||"",duration:d,graphStart:Math.max(0,Math.min(1440,i)),graphEnd:G1(i,e,t),realEventType:n,rawDecisionEvent:e,checks:Array.isArray(l.checks)?l.checks:null,timelineHidden:(n==="source_start"||n==="topology_change")&&c===5||n==="source_stop"&&(e?._oq_cooling_stop_reason==="dew_stop"||a==="dew_stop")||n==="startup_inhibit_start"||n==="startup_inhibit_refresh"||n==="startup_inhibit_clear"}}function J1(e,t,r,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e)return null;let a=Ar(r,n),i=Math.max(e,a.start),l=Math.min(t,a.end);if(l<=i)return null;let c=Math.max(1,a.end-a.start);return{start:(i-a.start)/c*1440,end:(l-a.start)/c*1440,durationS:Math.max(0,Math.round((l-i)/1e3))}}function Z1(e){let t=Number(e?._oq_context_cm??e?.cm);return Number.isFinite(t)&&t>0?`CM${t}`:"CM?"}function _a(e,t,r){let n=J1(e.startEpochMs,e.endEpochMs,t,r);return!n||n.durationS<Number(e.minDurationS||60)?null:{id:e.id,kind:"span",severity:e.severity||"normal",time:xb(n.start,n.end,!!e.isOpen),duration:Tb(n.durationS),title:e.title,summary:e.summary,detailTitle:e.detailTitle||"Waarom liep deze periode?",detail:e.detail,next:e.next,source:e.source||"Systeem",reasonCode:e.reasonCode||"keep_current",reasonLabel:e.reasonLabel||"",reasonSummary:e.reasonSummary||"",modeLabel:e.modeLabel||Z1(e.startEvent),modeTransitionLabel:"",graphStart:Math.max(0,Math.min(1440,n.start)),graphEnd:Math.max(0,Math.min(1440,n.end)),derivedFromDecisionLog:!0}}function X1(e,t,r){let n=Ar(t,r),a={HP1:[],HP2:[],cooling:[],boiler:[],frost:[],startupInhibit:[]},i={HP1:null,HP2:null,cooling:null,boiler:null,frost:null,startupInhibit:null},l=p=>{let b=String(p||"").toUpperCase();return b==="BOTH"?["HP1","HP2"]:b==="HP1"||b==="HP2"?[b]:[]},c=p=>co(p),u=(p,b)=>{let y=c(b);!Number.isFinite(y)||i[p]||(i[p]={key:p,startEvent:b,startEpochMs:y})},d=(p,b)=>{let y=i[p],k=c(b);!y||!Number.isFinite(k)||(k>y.startEpochMs&&a[p].push({...y,endEvent:b,endEpochMs:k}),i[p]=null)},m=p=>{["HP1","HP2"].some(y=>i[y]&&Number(i[y].startEvent?._oq_context_cm??i[y].startEvent?.cm)===5)||d("cooling",p)};e.filter(p=>p&&!p._oq_hidden).sort(Ju).forEach(p=>{let b=String(p?.event_type||""),y=Number(p?._oq_context_cm??p?.cm);if(b==="boot_marker")Object.keys(i).forEach(k=>d(k,p));else if(b==="source_start")l(p.subject).forEach(k=>u(k,p)),y===5&&u("cooling",p);else if(b==="source_stop")l(p.subject).forEach(k=>d(k,p)),(y===5||i.cooling)&&m(p);else if(b==="topology_change")if(p.to==="duo")u("HP1",p),u("HP2",p);else if(p.to==="single"){let k=Xu(p);k?(u(k,p),d(k==="HP1"?"HP2":"HP1",p)):d("HP2",p),m(p)}else p.to==="idle"&&(d("HP1",p),d("HP2",p),d("cooling",p));else b==="boiler_assist_start"||b==="boiler_fallback_start"?u("boiler",p):b==="boiler_assist_stop"||b==="boiler_fallback_stop"?d("boiler",p):b==="frost_protection_start"?u("frost",p):b==="frost_protection_clear"?d("frost",p):b==="startup_inhibit_start"?u("startupInhibit",p):b==="startup_inhibit_refresh"?(d("startupInhibit",p),u("startupInhibit",p)):b==="startup_inhibit_clear"?d("startupInhibit",p):b==="flow_hold_clear"&&p.reason==="flow_postflow"&&d("cooling",p)}),Object.keys(i).forEach(p=>{if(i[p]){let b=t==="today"?Math.min(n.end,r):n.end;a[p].push({...i[p],endEvent:null,endEpochMs:b,isOpen:!0})}});let w=[],v=p=>{p&&w.push(p)},f=(p,b)=>p.startEpochMs<b.endEpochMs&&b.startEpochMs<p.endEpochMs,g=p=>{let b=["HP1","HP2"].filter(y=>a[y].some(k=>Number(k.startEvent?._oq_context_cm??k.startEvent?.cm)===5&&f(k,p)));return b.length===2?gt("BOTH",5):b.length===1?gt(b[0],5):gt(p.startEvent?.subject,5)};return a.startupInhibit.forEach((p,b)=>{let k=(Number(p.startEvent?.value_a)||0)===1,q=String(p.endEvent?.event_type||"")==="startup_inhibit_refresh";v(_a({id:`fw-span-startup-inhibit-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"normal",title:p.isOpen?"Warmtepomp wacht na herstart":"Warmtepomp wachtte na herstart",summary:k?"Er was koelvraag, maar de compressor bleef na de herstart nog kort uit.":"Er was warmtevraag, maar de compressor bleef na de herstart nog kort uit.",detail:"Na een reboot houdt de controller eenmaal de minimale uit-tijd aan. Zo kan een compressor niet te snel opnieuw starten wanneer de vorige stoptijd onbekend is.",next:p.isOpen?k?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.":q?"De gewenste warmtepomp of doelmodus veranderde, maar de wachttijd bleef actief.":"Na deze periode ging de normale regeling automatisch verder.",source:gt(p.startEvent?.subject,k?5:2),reasonCode:"startup_inhibit",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor werd bewust nog niet gestart.",modeLabel:k?"CM5":"CM2",minDurationS:1},t,r))}),a.boiler.forEach((p,b)=>{let y=String(p.startEvent?.event_type||"")==="boiler_fallback_start";v(_a({id:`fw-span-boiler-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:y?"limited":"normal",title:y?"CV-ketel nam verwarming tijdelijk over":"CV-ketel ondersteunde tijdelijk",summary:y?"Geen warmtepomp was veilig inzetbaar; de CV-ketel verwarmde tijdelijk in CM4.":"De CV-ketel hielp tijdelijk mee toen extra vermogen nuttig was.",detail:y?"De foutfallback start pas na bevestigde HP-uitval, verse stopbevestiging en geldige installatiebeveiligingen.":"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:y?"OpenQuatt stopt CM4 zodra een warmtepomp stabiel is hersteld of een veiligheidsvoorwaarde de fallback blokkeert.":"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",source:"CV-ketel",reasonCode:y?"boiler_fallback":"boiler_assist",modeLabel:y?"CM4":"CM3",minDurationS:y?1:120},t,r))}),a.cooling.forEach((p,b)=>{v(_a({id:`fw-span-cooling-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"normal",title:"Koeling actief",summary:"Er was koelvraag en de warmtepomp koelde binnen de normale regeling.",detail:"Tijdens koelen bewaakt de controller continu waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij die normale regeling.",next:"Koeling stopt zodra de koelvraag wegvalt of tijdelijk pauzeert als een veiligheidsmarge daarom vraagt.",source:g(p),reasonCode:"keep_current",reasonLabel:"Koeling gestart",reasonSummary:"De koelrun is gestart en liep binnen de normale regeling.",modeLabel:"CM5",minDurationS:p.isOpen?1:120},t,r))}),a.frost.forEach((p,b)=>{v(_a({id:`fw-span-frost-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"limited",title:"Vorstbescherming actief",summary:"Het systeem liet water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",source:"Systeem",reasonCode:"frost_protection",modeLabel:"CM98",minDurationS:60},t,r))}),a.HP1.forEach((p,b)=>{a.HP2.forEach(y=>{let k=Math.max(p.startEpochMs,y.startEpochMs),q=Math.min(p.endEpochMs,y.endEpochMs),T=p.startEpochMs>=y.startEpochMs?p.startEvent:y.startEvent,M=Number(p.startEvent?._oq_context_cm??p.startEvent?.cm),A=Number(y.startEvent?._oq_context_cm??y.startEvent?.cm);if(Number(T?._oq_context_cm??T?.cm)===5||M===5||A===5)return;let j=!!(p.isOpen&&y.isOpen);v(_a({id:`fw-span-duo-${b}-${p.startEvent?.seq||p.startEpochMs}-${y.startEvent?.seq||y.startEpochMs}`,startEpochMs:k,endEpochMs:q,isOpen:j,startEvent:T,severity:"normal",title:"Twee warmtepompen verwarmen",summary:"HP1 en HP2 draaiden tegelijk omdat extra capaciteit nuttig was.",detail:"De warmtepompen zijn gelijkwaardig. Twee bronnen verdelen de belasting wanneer \xE9\xE9n warmtepomp de vraag minder rustig kan dragen.",next:"Het systeem schakelt terug naar \xE9\xE9n warmtepomp zodra single-bedrijf weer voldoende of rustiger is.",source:gt("BOTH",2),reasonCode:"better_heat",modeLabel:"CM2",minDurationS:300},t,r))})}),w}function Cb(e){let t=[...e].sort(Ju),r={HP1:0,HP2:0},n={HP1:!1,HP2:!1},a=0,i=0,l=0,c="",u=m=>{let w=String(m||"").toUpperCase();return w==="BOTH"?["HP1","HP2"]:w==="HP1"||w==="HP2"?[w]:[]},d=m=>{let w=Cs(t[m]);for(let v=1;v<=6&&m+v<t.length;v+=1){let f=t[m+v],g=Cs(f);if(Number.isFinite(w)&&Number.isFinite(g)&&g-w>300)break;let p=String(f?.event_type||"");if(p==="flow_hold_clear"&&Number(f?.value_a)===5||(p==="source_start"||p==="topology_change"||p==="cooling_limited")&&Number(f?.cm)===5)return 5;if(p==="flow_hold_start")break}return 0};return t.map((m,w)=>{let v={...m},f=String(m?.event_type||""),g=String(m?.subject||"").toUpperCase(),p=String(m?.reason||""),b=Number(m?.cm)||0;f==="boot_marker"&&(r.HP1=0,r.HP2=0,n.HP1=!1,n.HP2=!1,a=0,i=0,l=0,c="");let y=b,k=!1,q="",T="",M=!1,A="",H=!1,j="",I=l,W=()=>["HP1","HP2"].filter(D=>r[D]===5),x=()=>["HP1","HP2"].filter(D=>r[D]>0&&r[D]!==5);if(f==="source_start")y=b||y,u(g).forEach(D=>{r[D]=y});else if(f==="source_stop")y=u(g).map(N=>r[N]).find(N=>N>0)||y,y===5&&c&&(j=c,c=""),u(g).forEach(N=>{r[N]=0});else if(f==="topology_change")m?.to==="idle"?(y=a||y,a=0):(m?.to==="single"||m?.to==="duo")&&(y=b||a||y,a=y);else if(f==="flow_hold_start"){let D=W(),N=x(),J=Number(m?.value_a);y=p==="flow_postflow"?a||y:J||d(w)||y,p==="flow_postflow"&&y===5&&D.length&&(q=D.join(" + "),M=!0),p==="flow_postflow"&&y!==5&&N.length&&(A=N.join(" + "),H=!0),i=y}else if(f==="flow_hold_clear")y=Number(m?.value_a)||i||a||y,i=0;else if(f==="cooling_limited"||f==="cooling_released"){y=5;let D=W();D.length&&(q=D.join(" + "),T=D.length===2?"BOTH":D[0]),f==="cooling_limited"&&p==="dew_stop"&&(c="dew_stop")}if(f==="defrost_seen_start"||f==="defrost_seen_clear"){let D=g==="HP1"||g==="HP2"?g:"HP1";y===5||b===5?k=!0:f==="defrost_seen_start"?n[D]=!0:n[D]?n[D]=!1:k=!0}v._oq_context_cm=y,v._oq_hidden=k,v._oq_active_cooling_source=q,v._oq_active_cooling_subject=T,v._oq_cooling_runtime_hold=M,v._oq_active_heating_source=A,v._oq_heating_runtime_hold=H,v._oq_cooling_stop_reason=j,v._oq_previous_cm=I,v._oq_mode_transition=F1(m,I);let O=j1(m);return Number.isFinite(O)&&(l=O),v})}function e0(){let e=Yu(),t=ft(),r=Date.now(),n=Cb(e),a=n.map(l=>Y1(l,t,r)).filter(Boolean),i=X1(n,t,r);return[...a,...i].sort((l,c)=>{let u=zt(c).start-zt(l).start;if(u!==0)return u;let d={event:0,span:1,aggregate:2};return(d[l.kind]??3)-(d[c.kind]??3)})}function t0(e){let t=e0();return t.length?t:[]}function o0(e){let t=e.filter(r=>!r.timelineHidden);return t.some(r=>r.id===o.controlReplaySelectedEpisode)?t.find(r=>r.id===o.controlReplaySelectedEpisode):t.find(r=>r.kind==="span"&&r.reasonCode==="better_heat")||t.find(r=>r.kind==="span")||t[0]||null}function mb(e){let t=String(e||"").match(/(\d{1,2}):(\d{2})/);if(!t)return Number.NaN;let r=Number.parseInt(t[1],10),n=Number.parseInt(t[2],10);return!Number.isFinite(r)||!Number.isFinite(n)?Number.NaN:Math.max(0,Math.min(1440,r*60+n))}function zt(e){if(Number.isFinite(Number(e?.graphStart))){let a=Math.max(0,Math.min(1440,Number(e.graphStart))),i=Number.isFinite(Number(e?.graphEnd))?Math.max(a,Math.min(1440,Number(e.graphEnd))):a;return{start:a,end:i}}let t=String(e?.time||"").match(/\d{1,2}:\d{2}/g)||[],r=mb(t[0]),n=mb(t[1]);return!Number.isNaN(r)&&!Number.isNaN(n)?{start:r,end:Math.max(r,n)}:Number.isNaN(r)?{start:430,end:430}:{start:r,end:r}}function ed(){let e=Number(o.controlReplayGraphMinute);return Number.isFinite(e)?Math.max(0,Math.min(1440,Math.round(e/5)*5)):430}function r0(e){let t=Math.max(0,Math.round(Number(e)||0));if(t<=5)return"Nu";let r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?n>0?`${r}d ${n}u geleden`:`${r}d geleden`:n>0?a>0?`${n}u ${a}m geleden`:`${n}u geleden`:`${a}m geleden`}function Bu(e,t=Ra()){let r=Math.max(0,Math.min(1440,Number(e)||0));return t.calendarDay==="today"?Mr(qs(r,"today"),Date.now(),"time"):t.calendarDay==="yesterday"?Mr(qs(r,"yesterday"),Date.now(),"time"):t.id==="week"||t.id==="last48"||t.id==="last3d"||t.id==="custom"?Mr(qs(r,t.id),Date.now(),"weekday"):Mr(qs(r,t.id),Date.now(),"auto")}function n0(e,t){let r=Math.max(0,Math.min(1440,Number(t)||0)),n={span:0,aggregate:1,event:2};return e.filter(i=>!i.timelineHidden).map(i=>{let l=a0(i);if(r<l.start||r>l.end)return null;let c=Math.max(1,l.end-l.start);return{item:i,score:c+(n[i.kind]??3)*.1}}).filter(Boolean).sort((i,l)=>i.score-l.score)[0]?.item||null||i0(e,r)}function Aa(e,t=ft()){let r=Number(e?.duration_s);return!Number.isFinite(r)||r<=0?0:r/60*(1440/zu(t))}function a0(e){let t=zt(e),r=String(e?.realEventType||""),n=Aa(e?.rawDecisionEvent);if(r==="defrost_seen_clear"&&n>0){let a=Math.max(5,n);return{start:Math.max(0,t.start-a),end:t.start}}if((r==="flow_hold_clear"||r==="frost_protection_clear")&&n>0){let a=Math.max(1,n);return{start:Math.max(0,t.start-a),end:t.start}}return t.end>t.start?t:e?.kind==="event"?{start:t.start,end:Math.min(1440,t.start+12)}:t}function xb(e,t,r=!1){let n=Ra(),a=Bu(e,n),i=r||t>=1440?"nu":Bu(t,n);return`${a}-${i}`}function Mb(e=ft(),t=Date.now()){if(e!=="today")return 1440;let r=new Date(t);return Math.max(0,Math.min(1440,Math.round(r.getHours()*60+r.getMinutes()+r.getSeconds()/60)))}function i0(e,t){let r=[],n=new Map,a=[...e].filter(x=>x.rawDecisionEvent).sort((x,O)=>zt(x).start-zt(O).start),i=(x,O,D)=>{n.has(x)||n.set(x,{label:x,item:O,start:D})},l=(x,O)=>{let D=n.get(x);D&&(r.push({...D,end:Math.max(D.start,O)}),n.delete(x))},c=x=>{n.has("Koeling")&&!n.has("HP1")&&!n.has("HP2")&&l("Koeling",x)},u=x=>{let O=String(x||"").toUpperCase(),D=[];return(O==="HP1"||O==="BOTH")&&D.push("HP1"),(O==="HP2"||O==="BOTH")&&D.push("HP2"),D},d=_b(),m={reasonCode:"keep_current",severity:"normal",modeLabel:d.sourceModes.HP1||d.sourceModes.HP2?`CM${d.sourceModes.HP1||d.sourceModes.HP2}`:"CM?"};d.HP1&&i("HP1",m,0),d.HP2&&i("HP2",m,0),d.boiler&&i("CV-ketel",m,0),d.cooling&&i("Koeling",m,0),a.forEach(x=>{let O=zt(x),D=String(x.realEventType||""),N=x.rawDecisionEvent||{},J=Number(N._oq_context_cm??N.cm),P=u(N.subject);if(D==="source_start")P.forEach(V=>i(V,x,O.start)),J===5&&i("Koeling",x,O.start);else if(D==="source_stop")P.forEach(V=>l(V,O.start)),(J===5||n.has("Koeling"))&&c(O.start);else if(D==="topology_change")if(N.to==="duo")i("HP1",x,O.start),i("HP2",x,O.start);else if(N.to==="single"){let V=Xu(N);V?(i(V,x,O.start),l(V==="HP1"?"HP2":"HP1",O.start)):l("HP2",O.start),c(O.start)}else N.to==="idle"&&(l("HP1",O.start),l("HP2",O.start),l("Koeling",O.start));else D==="boiler_assist_start"||D==="boiler_fallback_start"?i("CV-ketel",x,O.start):D==="boiler_assist_stop"||D==="boiler_fallback_stop"?l("CV-ketel",O.start):D==="flow_hold_clear"&&N.reason==="flow_postflow"&&l("Koeling",O.start)});let w=Mb();n.forEach(x=>{x.start<=w&&r.push({...x,end:w})});let v=r.filter(x=>t>=x.start&&t<=x.end);if(!v.length)return null;let f=new Set(v.map(x=>x.label)),g=["HP1","HP2"].filter(x=>f.has(x)),p=f.has("CV-ketel"),b=f.has("Koeling"),y=v.filter(x=>g.includes(x.label)||x.label==="CV-ketel"||x.label==="Koeling").sort((x,O)=>x.start-O.start)[0]||v[0],k=Math.max(...v.map(x=>x.start)),q=Math.min(...v.map(x=>x.end)),T=[...g,p?"CV-ketel":"",b?"Koeling":""].filter(Boolean).join(" + "),M="Bron actief",A="Deze bron was op dit tijdstip actief.",H="De grafiek toont hier een lopende periode. De start of stop staat als los beslismoment in de tijdlijn.",j="De controller blijft opnieuw beoordelen of deze bron nodig blijft.",I=y.item?.reasonCode||"keep_current",W="normal";return b?(M="Koeling actief",A=g.length?`${g.join(" en ")} koelde${g.length===1?"":"n"} op dit tijdstip binnen de normale regeling.`:"De koeling was op dit tijdstip actief.",H="De controller bewaakt daarbij waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij de normale regeling.",j="Koeling gaat door zolang er koelvraag is en de veiligheidsmarges vrij blijven.",T=g.length===2?gt("BOTH",5):g.length===1?gt(g[0],5):"Koeling",I=y.item?.reasonCode||"keep_current",W=y.item?.severity||"normal"):g.length===2&&p?(M="Warmtepompen en CV-ketel actief",A="Beide warmtepompen draaiden en de CV-ketel ondersteunde tijdelijk.",H="De warmtepompen leverden de basis. De CV-ketel vulde alleen aan zolang extra vermogen nodig was.",j="CV-ondersteuning stopt zodra de warmtepompen de vraag weer zelf rustig kunnen dragen.",I="boiler_assist",W="limited"):g.length===2?(M="Twee warmtepompen verwarmen",A="HP1 en HP2 verwarmden tegelijk op dit tijdstip.",H="Twee gelijkwaardige warmtepompen kunnen hoge vraag rustiger leveren dan \xE9\xE9n warmtepomp op hoge belasting.",j="E\xE9n warmtepomp stopt zodra single-bedrijf weer voldoende of rustiger is.",T=gt("BOTH",2),I="better_heat"):g.length===1&&p?(M=`${g[0]} en CV-ketel actief`,A="De warmtepomp draaide en de CV-ketel ondersteunde tijdelijk.",H="De CV-ketel vult alleen aan wanneer de warmtepomp de actuele vraag niet rustig genoeg kan dragen.",j="De CV-ketel stopt zodra aanvullende ondersteuning niet meer nodig is.",I="boiler_assist",W="limited"):g.length===1?(M=`${g[0]} verwarmt`,A=`${g[0]} leverde op dit tijdstip warmte.`,H="De andere warmtepomp blijft beschikbaar. De controller schakelt pas bij of wisselt pas wanneer dat rustiger of nuttiger is.",j="Bij stijgende vraag kan een tweede warmtepomp bijschakelen; bij dalende vraag stopt deze bron.",T=gt(g[0],2),I=y.item?.reasonCode||"runtime_lead"):p&&(M="CV-ketel ondersteunt",A="De CV-ketel leverde op dit tijdstip extra vermogen.",H="CV-ondersteuning is aanvullend op de warmtepompen en blijft tijdelijk.",j="De CV-ketel stopt zodra de extra capaciteit niet meer nodig is.",I="boiler_assist",W="limited"),{id:`graph-context-${Math.round(t)}-${Array.from(f).join("-")}`,kind:"span",severity:W,time:xb(k,q),duration:"",title:M,summary:A,detailTitle:"Wat gebeurt hier?",detail:H,next:j,source:T||"Systeem",reasonCode:I,modeLabel:y.item?.modeLabel||"CM?",graphStart:k,graphEnd:q}}function s0(){let e=Uu();return`
      <div class="oq-working-control-group">
        <span class="oq-working-control-label">Weergave</span>
        <div class="oq-working-tabs" role="tablist" aria-label="Beslislog weergave">
          ${fb().map(t=>`
            <button
              class="oq-working-tab${e===t.id?" is-active":""}"
              type="button"
              role="tab"
              aria-selected="${e===t.id?"true":"false"}"
              data-oq-action="select-control-replay-tab"
              data-replay-tab="${s(t.id)}"
            >
              ${me(t.icon,"oq-working-tab-icon")}
              <span>${s(t.label)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `}function l0(){let e=ft(),t=Ra(),r=H1(),n=jo().filter(m=>!m.quick&&!m.custom),a=D1(),i=N1(a),l=lb(a.start),c=lb(a.end),u=o.controlReplayPeriodMenuOpen,d=e==="custom"?"Eigen periode":r.some(m=>m.id===e)?"Kies periode":t.shortLabel;return`
      <div class="oq-working-control-group oq-working-control-group--period">
        <span class="oq-working-control-label">Periode</span>
        <div class="oq-working-window-controls" role="group" aria-label="Periode">
          <div class="oq-working-window-choices" aria-label="Snelle periodekeuzes">
          ${r.map(m=>`
            <button
              class="oq-working-window-choice${e===m.id?" is-active":""}"
              type="button"
              data-oq-action="select-control-replay-window"
              data-replay-window="${s(m.id)}"
              aria-pressed="${e===m.id?"true":"false"}"
              aria-label="${s(m.label)}"
            >
              ${s(m.shortLabel)}
            </button>
          `).join("")}
          </div>
          <div class="oq-working-period-menu" data-oq-control-replay-period-menu>
            <button
              class="oq-working-period-menu-toggle${u||!r.some(m=>m.id===e)?" is-active":""}"
              type="button"
              aria-expanded="${u?"true":"false"}"
              aria-haspopup="dialog"
              data-oq-action="toggle-control-replay-period-menu"
            >
              <span>${s(d)}</span>
              <span class="oq-working-period-menu-chevron" aria-hidden="true"></span>
            </button>
            ${u?`
              <section class="oq-working-period-popover" role="dialog" aria-label="Kies periode">
                <div class="oq-working-period-popover-head">
                  <strong>Ander tijdvenster</strong>
                </div>
                <div class="oq-working-period-option-grid">
                  ${n.map(m=>`
                    <button
                      class="oq-working-period-option${e===m.id?" is-active":""}"
                      type="button"
                      data-oq-action="select-control-replay-window"
                      data-replay-window="${s(m.id)}"
                      aria-pressed="${e===m.id?"true":"false"}"
                    >${s(m.shortLabel)}</button>
                  `).join("")}
                </div>
                <div class="oq-working-period-custom">
                  <button
                    class="oq-working-period-custom-toggle${o.controlReplayCustomPeriodOpen||e==="custom"?" is-active":""}"
                    type="button"
                    aria-expanded="${o.controlReplayCustomPeriodOpen?"true":"false"}"
                    data-oq-action="toggle-control-replay-custom-period"
                  >
                    <span>Eigen periode</span>
                    <span class="oq-working-period-custom-toggle-copy">Datum en uur</span>
                  </button>
                  ${o.controlReplayCustomPeriodOpen?`
                    <div class="oq-working-period-custom-fields">
                      <label>
                        <span>Van</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.earliestDate)}" max="${s(i.startMaxDate)}" value="${s(l.date)}" data-oq-control-replay-custom-start-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur van" data-oq-control-replay-custom-start-hour data-oq-control-replay-custom-input>
                            ${cb(l.hour)}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span>Tot</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.endMinDate)}" max="${s(i.endMaxDate)}" value="${s(c.date)}" data-oq-control-replay-custom-end-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur tot" data-oq-control-replay-custom-end-hour data-oq-control-replay-custom-input>
                            ${cb(c.hour)}
                          </select>
                        </div>
                      </label>
                    </div>
                    <div class="oq-working-period-custom-actions">
                      <span>Maximaal 7 dagen</span>
                      <button class="oq-working-period-apply" type="button" data-oq-action="apply-control-replay-custom-period">Toepassen</button>
                    </div>
                    ${o.controlReplayCustomPeriodError?`<p class="oq-working-period-error" role="alert">${s(o.controlReplayCustomPeriodError)}</p>`:""}
                  `:""}
                </div>
              </section>
            `:""}
          </div>
        </div>
      </div>
    `}function c0(e){let t=Gu(e.severity);return`
      <section class="oq-working-now oq-working-now--${s(t.tone)}">
        <div class="oq-working-now-main">
          <span class="oq-working-eyebrow">Actuele situatie</span>
          <h2>${s(e.title)}${Qu(e)}</h2>
          <p>${s(e.copy)}</p>
          <div class="oq-working-pill-row">
            ${_r(t.label,t.tone,"shield")}
            ${_r(e.reasonLabel,"info","target")}
            ${_r(e.sinceLabel,"context")}
          </div>
        </div>
        <div class="oq-working-now-next">
          <span>Wat doet het systeem daarna?</span>
          <strong>${s(e.expectation)}</strong>
          <div class="oq-working-source-strip">
            <span>HP1 \xB7 ${s(e.hp1Status)}</span>
            <span>HP2 \xB7 ${s(e.hp2Status)}</span>
            <span>CV \xB7 ${s(e.cvStatus)}</span>
          </div>
        </div>
      </section>
    `}function u0(e,t){let r=Gu(e.severity),n=t&&t.id===e.id,a=vb(e.kind),i=wb(e);return`
      <button
        class="oq-working-entry oq-working-entry--${s(e.kind)} oq-working-entry--${s(r.tone)}${n?" is-active":""}"
        type="button"
        data-oq-action="select-control-replay-episode"
        data-replay-episode="${s(e.id)}"
      >
        <span class="oq-working-entry-time">
          <strong>${s(e.time)}</strong>
          <small>${s(a)}</small>
        </span>
        <span class="oq-working-entry-rail" aria-hidden="true"></span>
        <span class="oq-working-entry-body">
          <span class="oq-working-entry-title">
            <strong>${s(e.title)}</strong>
            ${Qu(e)}
            ${e.count?`<em>${s(e.count)}</em>`:""}
          </span>
          <span class="oq-working-entry-summary">${s(e.summary)}</span>
          <span class="oq-working-entry-meta">
            <span>${s(e.source)}</span>
            ${i?`<span class="oq-working-entry-meta-mode">${s(i)}</span>`:""}
            <span>${s(e.reasonLabel||bb(e.reasonCode))}</span>
            ${e.duration?`<span>Duur: ${s(e.duration)}</span>`:""}
          </span>
        </span>
        <span class="oq-working-entry-status">${s(r.label)}</span>
      </button>
    `}function $b(e){if(!e)return"";let t=Gu(e.severity),r=$r(e.reasonCode),n=e.reasonLabel||r.label,a=e.reasonSummary||r.summary,i=yb(e),l=wb(e),c=Array.isArray(e.checks)?e.checks:r.checks;return`
      <aside class="oq-working-detail oq-working-detail--${s(t.tone)}">
        <div>
          <span class="oq-working-eyebrow">Geselecteerd</span>
          <h3>${s(e.title)}${Qu(e)}</h3>
          <p>${s(e.summary)}</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Waarom?</strong>
          <span>${s(e.detail)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Is dit normaal?</strong>
          <span>${s(a)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat gebeurt daarna?</strong>
          <span>${s(e.next)}</span>
        </div>
        ${Sb(i)}
        ${c.length?`
          <div class="oq-working-checks" aria-label="Beslisfactoren">
            ${c.map(u=>`<span>${me("shield","oq-working-reason-icon")} ${s(u)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-working-pill-row">
          ${_r(t.label,t.tone,"shield")}
          ${_r(n,"info","target")}
          ${_r(e.source,"context")}
        </div>
        <details class="oq-working-support" data-replay-support-item="${s(e.id)}"${o.controlReplaySupportDetailsItemId===e.id?" open":""}>
          <summary data-oq-action="toggle-control-replay-support-details">Details voor support</summary>
          <dl>
            <div><dt>Record</dt><dd>${s(vb(e.kind))}</dd></div>
            <div><dt>Bron</dt><dd>${s(e.source)}</dd></div>
            <div><dt>Control mode</dt><dd>${s(e.modeLabel)}</dd></div>
            ${l?`<div><dt>CM wijziging</dt><dd>${s(l)}</dd></div>`:""}
            <div><dt>Reason code</dt><dd>${s(e.reasonCode)}</dd></div>
          </dl>
        </details>
      </aside>
    `}function d0(e){return`
      <aside class="oq-working-detail">
        <div>
          <span class="oq-working-eyebrow">Tussen beslismomenten</span>
          <h3>Geen nieuw beslismoment om ${s(e)}</h3>
          <p>Op dit moment veranderde de controller niets. De laatst gekozen situatie blijft gelden.</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat betekent dit?</strong>
          <span>In deze grafiek worden alleen controllerkeuzes, bescherming en bronwissels toegelicht. Tussen die momenten blijft de laatste keuze gewoon gelden.</span>
        </div>
      </aside>
    `}function Ts(e,t){return`
      <div class="oq-working-empty">
        <strong>${s(e)}</strong>
        <span>${s(t)}</span>
      </div>
    `}function p0(e,t){let r=Ra(),a=e.filter(c=>!c.timelineHidden).slice(0,80),i=String(o.decisionLogError||"").trim(),l=!a.length&&!o.decisionLog&&!i;return`
      <div class="oq-working-split">
        <section class="oq-working-list" aria-label="${s(r.eyebrow)}">
          <div class="oq-working-list-head">
            <div>
              <span class="oq-working-eyebrow">${s(r.eyebrow)}</span>
              <h3>${s(r.title)}</h3>
            </div>
            <p>${s(r.copy)}</p>
          </div>
          ${a.length?`<div class="oq-working-timeline">
                ${a.map(c=>u0(c,t)).join("")}
              </div>`:i?Ts("Beslislog niet beschikbaar",`De firmwarelog kon niet worden geladen (${i}). Dit betekent niet dat deze periode leeg is.`):l?Ts("Beslislog laden","De controllerkeuzes worden opgehaald. Dit duurt meestal maar heel kort."):Ts("Nog geen gebeurtenissen","De beslislog is leeg voor deze periode. Nieuwe controllerkeuzes verschijnen hier zodra de firmware ze vastlegt.")}
        </section>
        ${t?$b(t):""}
      </div>
    `}function Fu(e,t,r,n,a,i=""){return`
      <article class="oq-working-source-card${a?" is-active":""}">
        <div>
          <span>${s(e)}</span>
          <strong>${s(t)}</strong>
        </div>
        ${i?`<p class="oq-working-source-card-note">${s(i)}</p>`:`<dl>
          <div><dt>Starts 24u</dt><dd>${s(r)}</dd></div>
          <div><dt>Draaiuren</dt><dd>${s(n)}</dd></div>
        </dl>`}
      </article>
    `}function m0(e){let t=$r(e.primaryReason),r=yb({primaryReason:e.primaryReason,source:e.hp1Running&&e.hp2Running?"HP1 + HP2":e.hp1Running?"HP1":e.hp2Running?"HP2":"Geen bron"}),n=!!e.coolingProtection,a=!!e.coolingCapped,i=e.primaryReason==="restart_wait",l=e.primaryReason==="buffer_stop",c=e.primaryReason==="startup_inhibit",u=e.primaryReason==="sticky_protection",d=c?"Startvoorwaarde":l?"Koelregeling":"Bescherming",m=c?"Wacht na herstart":l?"Water al koud genoeg":n?i?"Wacht op veilige herstart":"Koeling tijdelijk beperkt":a?"Koeling met ingesteld maximum":u?"Geen comfortvraag actief":"Geen beperking actief",w=c?"Na een reboot blijft de compressor eenmaal de minimale uit-tijd uit. Bij aanhoudende vraag start de gekozen warmtepomp daarna automatisch.":l?"Dit is normale regeling. De koelvraag blijft actief, maar de warmtepomp hoeft nu geen extra koude aan het water toe te voegen.":n?i?"De koelvraag blijft aanwezig. De warmtepomp start opnieuw zodra de veilige marge voldoende is hersteld.":"De aanvoer blijft boven de veilige grens. Daarom koelt het systeem tijdelijk minder hard.":a?"Dit is normale koeling binnen de ingestelde softwaregrens. Dauwpunt en waterflow blijven wel gewoon bewaakt.":u?"Alleen de pomp draait kort. De warmtepompen blijven uit en er worden geen compressorstarts geteld.":"Ontdooien, minimum rusttijd, dauwpunt en waterflow blijven bewaakt. Ze verschijnen hier zodra ze gedrag begrenzen.",v=c?[["Vraag actief","info","activity"],[e.startupInhibit?.remainingLabel||"Wachttijd actief","normal","clock"],["Automatische start","context","play"]]:l?[["Koelvraag actief","info","snowflake"],["Water koud genoeg","normal","droplet"],["Automatische herstart","context","activity"]]:n?[["Dauwpunt bewaakt","limited","droplet"],[`Max. niveau ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"context","bar-chart"]]:a?[[`Ingesteld max. ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"normal","bar-chart"],["Marge bewaakt","context","shield"]]:u?[["Korte pomprun","normal","shield"],["Geen koelvraag","context","snowflake"],["Geen warmtepompstart","info","activity"]]:[["Ontdooien vrij","normal","snowflake"],["Rusttijd vrij","normal","activity"],["Waterflow bewaakt","info","waves"]],f=e.cooling.requestActive||n||a||e.strategyLabel==="Koeling",g=[["Aanvoer",e.supplyTemp],["Buiten",e.outsideTemp],["Flow",e.flow]];return f||g.push(["Strategie",e.strategyLabel]),f&&(g.push(["Dauwpunt",e.cooling.dewPoint]),g.push(["Veilige min.",e.cooling.safeSupply])),`
      <div class="oq-working-status">
        ${c0(e)}
        <div class="oq-working-status-grid">
          <section class="oq-working-status-main${r?"":" oq-working-status-main--wide"}">
            <span class="oq-working-eyebrow">Waarom deze keuze?</span>
            <h3>${s(t.label)}</h3>
            <p>${s(t.summary)}</p>
            <div class="oq-working-reason-list">
              ${t.checks.map(p=>`<span>${me("target","oq-working-reason-icon")} ${s(p)}</span>`).join("")}
            </div>
          </section>
          ${r?`
            <section class="oq-working-optimizer-panel">
              ${Sb(r)}
            </section>
          `:""}
          <section class="oq-working-source-grid" aria-label="Bronnen">
            ${Fu("HP1",e.hp1Status,e.hp1Starts,e.hp1Hours,e.hp1Running)}
            ${Fu("HP2",e.hp2Status,e.hp2Starts,e.hp2Hours,e.hp2Running)}
            ${Fu("CV",e.cvStatus,"","",e.cvStatus==="Actief",f?"Geen rol bij koelen.":"Tijdelijke ondersteuning bij extra warmtevraag.")}
          </section>
          <section class="oq-working-guard-panel">
            <span class="oq-working-eyebrow">${s(d)}</span>
            <h3>${s(m)}</h3>
            <p>${s(w)}</p>
            <div class="oq-working-pill-row">
              ${v.map(([p,b,y])=>_r(p,b,y)).join("")}
            </div>
          </section>
          <section class="oq-working-telemetry">
            <span class="oq-working-eyebrow">Context</span>
            <dl>
              ${g.map(([p,b])=>`<div><dt>${s(p)}</dt><dd>${s(b)}</dd></div>`).join("")}
            </dl>
          </section>
        </div>
      </div>
    `}function g0(e,t,r){return`
      <div class="oq-working-chart-lane">
        <span>${s(e)}</span>
        <div class="oq-working-chart-track">
          ${r.map(n=>`
            <i class="oq-working-chart-segment oq-working-chart-segment--${s(n.tone||t)}" style="--oq-chart-left:${ab(n.start)}%;--oq-chart-width:${ab(n.width)}%;"></i>
          `).join("")}
        </div>
      </div>
    `}function _b(){let e=Ar(),t={HP1:!1,HP2:!1,boiler:!1,cooling:!1},r={HP1:0,HP2:0},n=i=>{let l=String(i||"").toUpperCase();return l==="BOTH"?["HP1","HP2"]:l==="HP1"||l==="HP2"?[l]:[]};return Cb(Yu()).filter(i=>i&&!i._oq_hidden).sort((i,l)=>{let c=co(i),u=co(l);return(Number.isFinite(c)?c:Number.POSITIVE_INFINITY)-(Number.isFinite(u)?u:Number.POSITIVE_INFINITY)}).forEach(i=>{let l=co(i);if(!Number.isFinite(l)||l>e.start)return;let c=String(i.event_type||""),u=Number(i._oq_context_cm??i.cm);c==="source_start"?n(i.subject).forEach(d=>{t[d]=!0,r[d]=u}):c==="source_stop"?n(i.subject).forEach(d=>{t[d]=!1,r[d]=0}):c==="boiler_assist_start"||c==="boiler_fallback_start"?t.boiler=!0:(c==="boiler_assist_stop"||c==="boiler_fallback_stop")&&(t.boiler=!1)}),t.cooling=["HP1","HP2"].some(i=>t[i]&&r[i]===5),{...t,sourceModes:r}}function f0(e){if(!e.some(f=>f.rawDecisionEvent))return null;let t=[{label:"HP1",tone:"running",segments:[]},{label:"HP2",tone:"running",segments:[]},{label:"CV-ketel",tone:"assist",segments:[]},{label:"Koeling",tone:"cooling",segments:[]},{label:"Ontdooien",tone:"defrost",segments:[]},{label:"Bescherming",tone:"limited",segments:[]}],r=Object.fromEntries(t.map(f=>[f.label,f])),n=(f,g,p,b,y=.5)=>{if(!r[f]||!Number.isFinite(g))return;let k=Math.max(0,Math.min(1440,Number(g))),q=Number.isFinite(p)?Math.max(k,Math.min(1440,Number(p))):k,T=Math.max(y,(q-k)/1440*100);r[f].segments.push({start:k/1440*100,width:T,tone:b})},a=(f,g,p,b=.5)=>{let y=zt(g);n(f,y.start,y.end,p,b)},i=[...e].filter(f=>f.rawDecisionEvent).sort((f,g)=>zt(f).start-zt(g).start),l={HP1:null,HP2:null,"CV-ketel":null,Koeling:null},c=(f,g)=>{l[f]==null&&(l[f]=g)},u=(f,g,p="running",b=.8)=>l[f]==null?!1:(n(f,l[f],g,p,b),l[f]=null,!0),d=f=>{l.Koeling!=null&&l.HP1==null&&l.HP2==null&&u("Koeling",f,"cooling",.8)},m={},w=_b();w.HP1&&c("HP1",0),w.HP2&&c("HP2",0),w.boiler&&c("CV-ketel",0),w.cooling&&c("Koeling",0),i.forEach(f=>{let g=zt(f),p=String(f.realEventType||""),b=String(f.rawDecisionEvent?.subject||"").toUpperCase(),y=Number(f.rawDecisionEvent?._oq_context_cm??f.rawDecisionEvent?.cm),k=[];if((b==="HP1"||b==="BOTH")&&k.push("HP1"),(b==="HP2"||b==="BOTH")&&k.push("HP2"),p==="source_start")k.forEach(T=>c(T,g.start)),y===5&&c("Koeling",g.start);else if(p==="source_stop")k.forEach(T=>{u(T,g.start,"running")||a(T,f,"standby",.55)}),(y===5||l.Koeling!=null)&&d(g.start);else if(p==="topology_change")if(f.rawDecisionEvent?.to==="duo")c("HP1",g.start),c("HP2",g.start);else if(f.rawDecisionEvent?.to==="single"){let T=Xu(f.rawDecisionEvent);T?(c(T,g.start),u(T==="HP1"?"HP2":"HP1",g.start,"running",.8)):u("HP2",g.start,"running",.8),d(g.start)}else f.rawDecisionEvent?.to==="idle"&&(u("HP1",g.start,"running",.8),u("HP2",g.start,"running",.8),u("Koeling",g.start,"cooling",.8));else if(p==="boiler_assist_start"||p==="boiler_fallback_start")c("CV-ketel",g.start);else if(p==="boiler_assist_stop"||p==="boiler_fallback_stop")u("CV-ketel",g.start,"assist",.65)||a("CV-ketel",f,"standby",.65);else if(p==="candidate_blocked"||p==="flow_hold_start")a("Bescherming",f,"limited",.7);else if(p==="flow_hold_clear"){let T=Math.max(1,Aa(f.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-T),g.start,"limited",.7),f.rawDecisionEvent?.reason==="flow_postflow"&&u("Koeling",g.start,"cooling",.8)}if(p==="defrost_seen_start")m[b||"SYSTEM"]=g.start;else if(p==="defrost_seen_clear"&&m[b||"SYSTEM"]!=null)n("Ontdooien",m[b||"SYSTEM"],g.start,"defrost",.7),m[b||"SYSTEM"]=null;else if(p==="defrost_seen_clear"&&Number(f.rawDecisionEvent?.duration_s)>0){let T=Math.max(5,Aa(f.rawDecisionEvent));n("Ontdooien",Math.max(0,g.start-T),g.start,"defrost",.7)}if(!(p==="candidate_blocked"||p==="flow_hold_start"||p==="flow_hold_clear")&&(f.severity==="limited"||f.severity==="attention"||p==="decision_blocked"||p==="decision_hold")&&a("Bescherming",f,f.severity==="attention"?"assist":"limited",.7),p==="sticky_pump_run"&&a("Bescherming",f,"safe",.6),p==="frost_protection_start")a("Bescherming",f,"limited",.8);else if(p==="frost_protection_clear"){let T=Math.max(1,Aa(f.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-T),g.start,"limited",.8)}});let v=Mb();return Object.entries(l).forEach(([f,g])=>{g!=null&&g<=v&&n(f,g,v,f==="CV-ketel"?"assist":f==="Koeling"?"cooling":"running",.8)}),Object.values(m).forEach(f=>{f!=null&&n("Ontdooien",f,Math.min(1440,f+7),"defrost",.7)}),t.filter(f=>f.segments.length)}function h0(e){let t=f0(e);return t||[]}function b0(e,t){let r=ed(),n=r/1440*100,a=Ra(),i=Bu(r,a),l=h0(t),c=l.length?l.map(u=>g0(u.label,u.tone,u.segments)).join(""):Ts("Nog geen grafiekdata","De grafiek gebruikt alleen echte beslislog-records. Nieuwe bronwissels, defrosts of begrenzingen verschijnen hier vanzelf.");return`
      <div class="oq-working-graphs">
        <section class="oq-working-chart-panel">
          <div class="oq-working-chart-head">
            <div>
              <span class="oq-working-eyebrow">${s(a.eyebrow)}</span>
              <h3>Grafieken met beslismomenten</h3>
            </div>
            <p>${s(a.graphCopy)}</p>
          </div>
          <div class="oq-working-chart-axis" aria-hidden="true">
            ${a.axis.map(u=>`<span>${s(u)}</span>`).join("")}
          </div>
          <div class="oq-working-chart-body">
            <div class="oq-working-chart-control" data-oq-control-replay-scrub="true">
              <input
                class="oq-working-time-slider"
                type="range"
                min="0"
                max="1440"
                step="5"
                value="${s(String(r))}"
                aria-label="Tijd in grafiek"
                data-oq-control-replay-time="true"
              >
              <span class="oq-working-chart-cursor" style="--oq-chart-left:${s(String(n))}%;">
                <strong>${s(i)}</strong>
              </span>
            </div>
            ${c}
          </div>
        </section>
        ${e?$b(e):d0(i)}
      </div>
    `}function Ab(e){let t=kb(e);return we({tab:Uu(),window:ft(),periodMenuOpen:o.controlReplayPeriodMenuOpen,customPeriodOpen:o.controlReplayCustomPeriodOpen,customStart:o.controlReplayCustomStart,customEnd:o.controlReplayCustomEnd,customPeriodError:o.controlReplayCustomPeriodError,selected:o.controlReplaySelectedEpisode,supportDetailsItem:o.controlReplaySupportDetailsItemId,graphMinute:ed(),mode:t.modeLabel,title:t.title,reason:t.primaryReason,hp1Running:t.hp1Running,hp2Running:t.hp2Running,hp1Starts:t.hp1Starts,hp2Starts:t.hp2Starts,hp1Hours:t.hp1Hours,hp2Hours:t.hp2Hours,cvStatus:t.cvStatus,strategy:t.strategyLabel,outside:t.outsideTemp,supply:t.supplyTemp,flow:t.flow,cooling:t.cooling,coolingProtection:t.coolingProtection,coolingCapped:t.coolingCapped,decisionLog:o.decisionLogSignature,decisionLogError:o.decisionLogError,theme:o.overviewTheme})}function Rb(e){let t=kb(e),r=t0(e),n=o0(r),a=Uu(),i=a==="graphs"?n0(r,ed()):n,l=a==="status"?m0(t):a==="graphs"?b0(i,r):p0(r,i),c=a==="status"?"":l0();return`
      <section class="oq-working" data-render-signature="${s(Ab(e))}">
        <header class="oq-working-head">
          <div class="oq-working-head-copy">
            <span class="oq-working-kicker">
              <span class="oq-working-eyebrow">Beslislog</span>
              <span class="oq-working-beta">BETA</span>
            </span>
            <h2>Keuzes van de controller, uitgelegd</h2>
            <p>Actueel toont wat het systeem nu doet. Tijdlijn toont hoe het zover kwam. Grafieken tonen het verloop.</p>
          </div>
          <div class="oq-working-head-actions">
            ${s0()}
            ${c}
          </div>
        </header>
        ${l}
      </section>
    `}function Hb(){let e=xa();return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Rb(e)}
        </div>
      </section>
    `}function w0(){if(!o.root||o.appView!=="control")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-working"):null;if(!e||!t)return!1;let r=document.activeElement;if(r&&r.closest("[data-oq-control-replay-period-menu]")&&r.matches("[data-oq-control-replay-custom-input]"))return!0;let n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);let a=xa();return nt(t,Ab(a),Rb(a))||!0}Eo({patchControlReplayDom:w0});function v0(){let e=document.activeElement;return o.appView!=="settings"||!o.root?.contains(e)||!e?.dataset?.oqField?null:{field:e.dataset.oqField,modalId:e.closest("[data-oq-modal]")?.dataset.oqModal||"",selectionStart:e.selectionStart,selectionEnd:e.selectionEnd}}function y0(e){if(!e||!o.root)return;let t=document.activeElement.closest("[data-oq-modal]");if((t?.dataset.oqModal||"")!==e.modalId)return;let r=(t||o.root).querySelector(`[data-oq-field="${e.field}"]`);!r||r.disabled||(r.focus({preventScroll:!0}),typeof e.selectionStart=="number"&&typeof r.setSelectionRange=="function"&&r.setSelectionRange(e.selectionStart,e.selectionEnd))}function S0(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${dh()}
        ${ph()}
      </section>
    `}function k0(){return te({modalId:"initial-load",titleId:"oq-loading-modal-title",kicker:"OpenQuatt",title:"OpenQuatt laden",backdropClass:"oq-helper-modal-backdrop--loading",modalClass:"oq-helper-modal--reconnect oq-helper-modal--loading",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
        <div class="oq-helper-reconnect-status oq-helper-loading-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>Eerste synchronisatie</strong>
            <span>De velden op dit scherm worden compleet klaargezet.</span>
          </div>
        </div>
      `})}function q0(){return o.appView==="overview"?ob():o.appView==="control"?Hb():o.appView==="energy"?xh():o.appView==="diagnosis"?Gh():o.appView==="results"?Mh():S0()}function T0(){let e=Wc();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${s(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://openquatt.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/OpenQuatt/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function E0(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function C0(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;let t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>Db(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function x0(){if(o.nativeOpen||o.appView!=="settings"||o.renderedAppView!=="settings"||o.renderedSettingsGroup!==o.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,t=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(t)||t<=0?null:{group:o.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:t}}function M0(e){if(!e)return;let t=(o.settingsPageScrollRestoreToken||0)+1;o.settingsPageScrollRestoreToken=t;let r=()=>{if(t!==o.settingsPageScrollRestoreToken||o.nativeOpen||o.appView!=="settings"||o.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function Db(){if(!o.root)return;let e=E0();if(e){C0(e);return}let t=v0(),r=np(o.root),n=o.systemModal==="webserver-logs"?oo():null,a=o.systemModal==="cm100-commissioning"?Bm():null,i=String(o.systemModal||"").startsWith("service-task-")?zm():null,l=o.systemModal==="history-storage"?Gm():null,c=o.systemModal==="settings-backup-restore"?Ym():null,u=o.quickStartModalOpen?oh():null,d=x0();if(o.nativeOpen){o.root.innerHTML=`
        ${Vc()}
        ${_f()}
      `,al(o.root),sl(o.root,r),o.renderedAppView="native",o.renderedSettingsGroup="",o.settingsRenderSignature="",o.headerRenderSignature=os(),jr({mqttSensorsModalRenderSignature:""}),Bn(),ia(),dc(),el(),Xs(),ro(n),sc(a),lc(i),cc(l),uc(c),ou(u);return}let m=q0(),w=o.loadingEntities?`${m}${k0()}`:m,v=o.appView==="overview"||o.appView==="control"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${Vc()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${v?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${ol}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${$f()}
          </div>
      ${Bd()}
      ${w}
      ${T0()}
        </div>
      </div>
      ${eh()}
      ${ug()}
      ${Af()}
      ${lg()}
    `,al(o.root),sl(o.root,r),y0(t),o.renderedAppView=o.appView,o.renderedSettingsGroup=o.appView==="settings"?o.settingsGroup:"",o.settingsRenderSignature=o.appView==="settings"?Wn():"",o.headerRenderSignature=os(),jr({mqttSensorsModalRenderSignature:o.systemModal==="mqtt-sensors"?bi():""}),Vn(),nb(),dc(),Xo(),Ta(),ia(),el(),Xs(),ro(n),sc(a),lc(i),cc(l),uc(c),ou(u),M0(d)}Kd(Db);function Ob({stepId:e,telemetryAvailable:t,choiceAvailable:r,choiceValue:n}){let a=n===!1||["off","false","0"].includes(String(n).trim().toLowerCase());return e==="usage-telemetry"&&t&&r&&a}function Nb(e){return e===!0||["on","true","1"].includes(String(e).trim().toLowerCase())?!0:e===!1||["off","false","0"].includes(String(e).trim().toLowerCase())?!1:null}function qn({telemetryValue:e,choiceValue:t,expectedEnabled:r}){let n=Nb(e);return Nb(t)===!0&&n!==null&&n===r}async function $0(e,t){let r="usageTelemetryEnabled",n=o.entities[r]?{...o.entities[r]}:null;o.busyAction=`switch-${r}`,o.controlNotice="",o.controlError="",h();try{let a=t?"turn_on":"turn_off",i=await fetch(Q(e.domain,e.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);if(await z([r,"usageTelemetryChoiceConfigured","usageTelemetryInstallationId"],"all"),!qn({telemetryValue:E(r),choiceValue:E("usageTelemetryChoiceConfigured"),expectedEnabled:t}))throw new Error("de controller heeft de opgeslagen keuze niet bevestigd");o.controlNotice=`${e.name} ${t?"ingeschakeld":"uitgeschakeld"}.`}catch(a){let i=!1;try{let l=await fetch(Q(e.domain,e.name,"turn_off"),{method:"POST"});if(!l.ok)throw new Error(`HTTP ${l.status}`);await z([r,"usageTelemetryChoiceConfigured","usageTelemetryInstallationId"],"all"),i=qn({telemetryValue:E(r),choiceValue:E("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}i?o.controlNotice=t?"Inschakelen kon niet worden bevestigd. Delen is veilig uitgeschakeld.":"Delen is uitgeschakeld.":(n?o.entities[r]=n:delete o.entities[r],o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw (${a.message}).`)}finally{o.busyAction="",h()}}async function Ha(e,t){let r=L[e];o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.entities[e]={...o.entities[e]||{},state:t,value:t},h();try{let n=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(Ae({updateInstallCompleted:!1,updateInstallCompletedVersion:""}),o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},ta(t),h(),await oa(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&Ro()):e==="webServerLogHistoryEnabled"?(["1","on","true"].includes(String(t).toLowerCase())?(o.webServerLogHistoryLoaded=!1,Ro()):ur(),o.systemModal==="webserver-logs"&&h()):o.appView==="settings"?await z(ar(),"all"):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...at,...Vo],"state"),e==="strategy"&&o.appView!=="settings"&&await z(ie(t)?Se.map(a=>a.key):Mt,"state")}catch(n){o.controlError=`${r.name} kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",h()}}async function Ms(e,t){let r=L[e];if(r){if(e==="usageTelemetryEnabled"){await $0(r,t);return}o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",h();try{let n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${r.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await z([...Pn,...it,"setupComplete",...Qt],"state"):o.appView==="settings"?(await z(ar(),"all"),zr.includes(e)&&Po()):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...at,...Vo],"state"),e==="webServerLogHistoryEnabled"&&(t?(o.webServerLogHistoryLoaded=!1,Ro()):ur(),o.systemModal==="webserver-logs"&&h()),h()}catch(n){o.controlError=`${r.name} aanpassen mislukt (${n.message}).`,h()}finally{o.busyAction="",h()}}}async function Da(e,t,r=""){let n=L[e],a=ke(e,t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,h();try{let i=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=r||`${n.name} bijgewerkt.`,await z(o.appView==="settings"?ar():[...new Set([e,"setupComplete","strategy",...at,...Vo])],"state")}catch(i){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${n.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",h()}}async function Pb(e,t){let r=L[e],n=At(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",h();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?ar():[e,"setupComplete"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function Lb(e,t){let r=L[e],n=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=n,h();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:n,state:n},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?ar():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=n,o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function td(e,t){let r=L[e],n=et(t)||Qo,a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:n,state:n},n}async function Ib(e,t){let r=L[e],n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function Fb(){await z([...new Set([...Pn,...it,"setupComplete",...Qt])],"state")}async function jb(e,t){let r=L[e],n=et(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",h();try{await td(e,n),o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?ar():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function $s(e){let t=et(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",h();return}if(t&&!S("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",h();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",h();let r=!1;try{S("openquattResumeAt")&&(await td("openquattResumeAt",t||Qo),r=!!t),await Ib("openquattEnabled",!1),o.pauseResumeDraft=t?Za(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Lr(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Fb()}catch(n){if(r&&S("openquattResumeAt"))try{await td("openquattResumeAt",Qo)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",h()}}async function Wb(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",h();try{await Ib("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await Fb()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",h()}}async function od(e){let t=L[e];o.busyAction=e,o.controlError="",o.controlNotice="",h();try{let r=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await z(["setupComplete"],"state"),e==="reset"&&(o.currentStep=Hr[0].id,o.quickStartSetupDraft="",o.quickStartSetupConfirmed=!1,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",Rt("overview",{syncMode:"replace"}),qe({forceFast:!0})}catch(r){o.controlError=`Actie mislukt voor "${t.name}". ${r.message}`}finally{o.busyAction="",h()}}function _0(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;let e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;let r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function Vb(e,t){let r=t==="start_failure_retry"?"/openquatt/incidents/retry-start":t==="confirm_odu_power_cycle"?"/openquatt/incidents/confirm-odu-power-cycle":"";if(!(!r||e!==1&&e!==2)){o.busyAction=`incident-${t}-hp${e}`,o.controlError="",o.controlNotice="",o.incidentAction={hp:e,kind:t,requestId:0,pending:!1,ok:null,result:""},h();try{let n=await Np(fetch,r,e,o.incidentMonitoringSnapshot?.actionCsrfToken||"",async()=>(await nr({force:!0}),o.incidentMonitoringSnapshot?.actionCsrfToken||""));o.incidentAction={hp:e,kind:t,requestId:n.actionId,pending:!0,ok:null,result:""},o.controlNotice=`Actie voor HP${e} geaccepteerd; resultaat wordt gecontroleerd.`,h();for(let a of[0,500]){if(!o.incidentAction.pending)break;a&&await new Promise(i=>window.setTimeout(i,a)),await nr({force:!0})}}catch(n){o.incidentAction={hp:e,kind:t,requestId:0,pending:!1,ok:!1,result:"",message:n.message||String(n)},o.controlError=`Actie voor HP${e} niet uitgevoerd. ${n.message||n}`}finally{o.busyAction="",h()}}}async function Tn(e,t={}){let r=L[e];if(r){o.busyAction=e,o.controlError="",o.controlNotice="",h();try{let n=await fetch(Q(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Va.has(e)||(yo(),o.systemModal=""),o.controlNotice=t.successNotice||`${r.name} gestart.`,t.reconnectMode&&To(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){let i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await z(t.refreshKeys,"state")}t.refreshIncidentMonitoring===!0&&await nr({force:!0})}catch(n){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{o.busyAction="",h(),e==="hpWaterCalibrationApply"&&_0()}}}function rd(e){let t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;let r=t.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,c=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,u=ke(o.draggingCurveKey,c);String(E(o.draggingCurveKey))!==String(u)&&(o.drafts[o.draggingCurveKey]=u,h())}var A0={"select-settings-option":e=>{let t=e.dataset.selectKey||"",r=e.dataset.selectOption||"";t&&r&&String(E(t)||"")!==r&&Ha(t,r)},"toggle-overview-control":e=>{let t=e.dataset.controlKey||"",r=(e.dataset.controlState||"").toLowerCase();t&&(r==="on"||r==="off")&&Ms(t,r==="on")},"select-overview-control-option":e=>{let t=e.dataset.controlKey||"",r=e.dataset.controlOption||"";t&&r&&String(E(t)||"")!==r&&Ha(t,r)},"suggest-curve-fallback":()=>{let e=ei();e&&Da("curveFallbackSupply",e.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.")},apply:()=>od("apply"),reset:()=>od("reset")};function Bb(e,t){return se(A0,e,t)}var R0=[{actions:["commissioningCm100Start","commissioningCm100Stop"],keys:["commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive"]},{actions:["boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply"],keys:["commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower"]},{actions:["flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply"],keys:["commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi"]},{actions:["airPurgeStart","airPurgeAbort"],keys:["commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode"]},{actions:["hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply"],keys:["commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode"]},{actions:["manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling"],keys:["commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint"]},{actions:["manualHpStart","manualHpAbort"],keys:["commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"]}];function H0(e){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):e==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestAbort"||e==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):e==="flowAutotuneAbort"||e==="flowAutotuneApply"?o.commissioningTaskLock="autotune":e==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):e==="airPurgeAbort"?o.commissioningTaskLock="purge":e==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):e==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":e==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):e==="manualHpAbort"?o.commissioningTaskLock="manual-hp":e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):(e==="hpWaterCalibrationAbort"||e==="hpWaterCalibrationApply")&&(o.commissioningTaskLock="hp-water-calibration")}function D0(e){if(e==="acknowledgeCompressorCyclingAlert")return{refreshKeys:[...Dn]};if(e==="acknowledgeHpIncidents")return{refreshIncidentMonitoring:!0};let t=R0.find(({actions:r})=>r.includes(e));if(t)return{refreshKeys:[...t.keys]};if(Va.has(e)){let r=bd(e);if(r){let n=e.endsWith("Load");return{refreshKeys:Ps(r),refreshDelayMs:n?1200:3200,successNotice:n?`HP${r} ODU runtime tabel lezen aangevraagd.`:`HP${r} ODU runtime write aangevraagd; controleer status/readback.`,errorPrefix:`ODU runtime actie mislukt voor HP${r}`}}}return{}}function Kb(e,t){if(e==="retry-hp-start"||e==="confirm-hp-power-cycle"){let n=Number(t.dataset.oqHpIndex||0);if(n!==1&&n!==2)return!0;let a=e==="retry-hp-start"?"start_failure_retry":"confirm_odu_power_cycle";return a==="confirm_odu_power_cycle"&&!window.confirm(`HP${n} ODU-powercycle bevestigen?

Bevestig alleen als deze buitenunit werkelijk spanningsloos is geweest. Hiermee geef je uitsluitend de herstelde safety-latch van HP${n} vrij; een actieve fout blijft staan.`)||Vb(n,a),!0}if(e!=="press-named-button")return!1;let r=String(t.dataset.oqButtonKey||t.dataset.buttonKey||t.getAttribute("data-oq-button-key")||"").trim();return r&&(H0(r),Tn(r,D0(r))),!0}var zb=10080*60*1e3;function Ub(e){o.controlReplayGraphMinute=e==="week"?1230:e==="today"||e==="yesterday"?720:1e3}function Gb(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}var N0={"select-control-replay-tab":({button:e})=>{let t=e.dataset.replayTab||"status";o.controlReplayTab=ul(t)||"status",o.appView==="control"&&er("push"),h()},"select-control-replay-window":({button:e})=>{let t=dl(e.dataset.replayWindow||"")||"last24";t!=="custom"&&(o.controlReplayWindow=t,o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError="",Ub(t),o.appView==="control"&&er("push")),h()},"toggle-control-replay-period-menu":()=>{o.controlReplayPeriodMenuOpen=!o.controlReplayPeriodMenuOpen,o.controlReplayCustomPeriodOpen=o.controlReplayPeriodMenuOpen&&o.controlReplayWindow==="custom",o.controlReplayCustomPeriodError="",h()},"toggle-control-replay-custom-period":()=>{o.controlReplayCustomPeriodOpen=!o.controlReplayCustomPeriodOpen,o.controlReplayCustomPeriodError="",h()},"apply-control-replay-custom-period":({button:e})=>{let t=e.closest("[data-oq-control-replay-period-menu]"),r=String(t?.querySelector("[data-oq-control-replay-custom-start-date]")?.value||""),n=String(t?.querySelector("[data-oq-control-replay-custom-start-hour]")?.value||""),a=String(t?.querySelector("[data-oq-control-replay-custom-end-date]")?.value||""),i=String(t?.querySelector("[data-oq-control-replay-custom-end-hour]")?.value||""),l=`${r}T${n}:00`,c=`${a}T${i}:00`,u=Gb(l),d=Gb(c);if(!Number.isFinite(u)||!Number.isFinite(d)||d<=u){o.controlReplayCustomPeriodError="Kies een eindtijd na de starttijd.",h();return}if(d-u>zb){o.controlReplayCustomPeriodError="Een eigen periode mag maximaal 7 dagen beslaan.",h();return}let m=Date.now();if(u<m-zb||d>m+60*1e3){o.controlReplayCustomPeriodError="Kies een periode binnen de laatste 7 dagen.",h();return}o.controlReplayCustomStart=l,o.controlReplayCustomEnd=c,o.controlReplayCustomPeriodError="",o.controlReplayWindow="custom",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,Ub("custom"),o.appView==="control"&&er("push"),h()},"select-control-replay-episode":({button:e})=>{o.controlReplaySelectedEpisode=e.dataset.replayEpisode||"",h()},"toggle-control-replay-support-details":({button:e,event:t})=>{t.preventDefault();let r=e.closest(".oq-working-support"),n=r?.dataset.replaySupportItem||"";o.controlReplaySupportDetailsItemId=r&&r.hasAttribute("open")?"":n,h()}};function Qb(e,t,r){return se(N0,e,{button:t,event:r})}async function En(e,t){jp();try{let r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP ${r.status}`);o.ota.ok=1}catch(r){throw vi(r.message)?(Br(),To("ota",r.message)):tr(),r}}async function O0(){let e=L.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",h();try{await Na("current build",{poll:!1,force:!0}),ta();let t=await fetch(Q(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await oa(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,h()}}}async function P0(){try{await z($t,"all",{concurrency:Ut,forceMissing:!0}),o.updateModalOpen&&h()}catch{}}async function Na(e,t={}){let r=L.firmwareUpdateTarget;if(!r||!S("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!t.force&&String(E("firmwareUpdateTarget")||"").trim()===n)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(ta(),await oa({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function L0(){let e=ve();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),rt(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=no(e),It(),o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",h();try{await Na("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=no(ve()||{})||o.updateInstallTargetVersion,on();let t=L.installFirmwareUpdateTarget,r=t&&S("installFirmwareUpdateTarget")?Q(t.domain,t.name,"press"):Q("update","Firmware Update","install");await En(r,{method:"POST"}),await hr({initialDelayMs:vo,pollDelayMs:Pr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update is mislukt. ${t.message}`}finally{gr(),h()}}}async function Jb(){let e=Ci(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",h();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=oe(),o.updateInstallTargetVersion=le()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Na("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");if(o.updateInstallTargetVersion=no(ve()||{})||le()||"",It(),h(),on(),await En(Q(t.domain,t.name,"press"),{method:"POST"}),await hr({initialDelayMs:vo,pollDelayMs:Pr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{let a=lt(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${a} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){o.controlError=`Verbindingswissel is mislukt. ${r.message}`}finally{gr(),h()}}}async function Zb(){let e=xi(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",h();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=le()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Na("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");if(o.updateInstallTargetVersion=no(ve()||{})||le()||"",It(),h(),on(),await En(Q(t.domain,t.name,"press"),{method:"POST"}),await hr({initialDelayMs:vo,pollDelayMs:Pr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{let a=sr(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${a} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){o.controlError=`Opstellingswissel is mislukt. ${r.message}`}finally{gr(),h()}}}async function I0(e){let t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,xe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="build-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=le()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Na(e.targetOption,{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=no(ve()||{})||le()||"",It(),h(),on(),await En(Q(t.domain,t.name,"press"),{method:"POST"}),await hr({initialDelayMs:vo,pollDelayMs:Pr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice=`Setupwissel naar ${e.targetBuildLabel} is gestart. Wacht tot het device opnieuw bereikbaar is.`}catch(r){o.controlError=`Setupwissel is mislukt. ${r.message}`}finally{gr(),h()}}}async function Xb(){let[e,t]=String(o.quickStartSetupDraft||"").split(":"),r=Mi(e,t);if(!r.available||r.targetOption==="current build"){o.currentStep="generation",h();return}if(!o.quickStartSetupConfirmed){o.controlError="Bevestig eerst dat de gekozen setup klaar is voor gebruik.",h();return}if(!r.canSwitch){o.controlError="Deze firmware kan de gekozen setup nog niet direct installeren. Werk de firmware eerst bij.",h();return}r.targetOption==="alternate connection"?(o.firmwareConnectionSwitchConfirmed=!0,await Jb()):r.targetOption==="alternate topology"?(o.firmwareTopologySwitchConfirmed=!0,await Zb()):await I0(r)}async function F0(e,t){let r=Zn(e,t);if(!r)throw new Error("Geen geldig PR-target gevonden.");let n=await fetch(r.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(n.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!n.ok)throw new Error(`GitHub API gaf HTTP ${n.status}`);let a=await n.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(m=>m&&m.name===t.otaFileName),c=i.find(m=>m&&m.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!c||!c.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);let u=String(a.name||a.tag_name||`PR ${e}`).trim(),d=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:c.browser_download_url,label:d?`${u} \xB7 ${d.replace("T"," ").replace("Z"," UTC")}`:u}}async function Yb(e,t){if(!S(e))throw new Error(`${L[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await Vt(e,t);o.entities[e]={...o.entities[e]||{},state:r,value:r}}async function j0(){let e=mr(),t=tn(),r=L.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",h();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",h();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",h();return}if(!r||!S("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",h();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",It(),o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,h();let n=!1;try{let a=await F0(e,t);o.updateTestFirmwareBuild=a.label,h(),await Yb("firmwareTestOtaUrl",a.otaUrl),await Yb("firmwareTestOtaMd5Url",a.md5Url),n=!0,on(),await En(Q(r.domain,r.name,"press"),{method:"POST"}),Br(),await hr({initialDelayMs:vo,pollDelayMs:Pr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||`PR ${e}`,o.updateTestFirmwareOpen=!1,rt(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&vi(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{gr(),h()}}async function W0(){let e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",h();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=le()||"",It(),o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",h();try{let t=new FormData;t.append("update",e,e.name||"firmware.bin"),await En("/update",{method:"POST",body:t}),Br(),o.updateManualUploadOpen=!1,xe(),await hr()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{gr(),h()}}var V0={"open-update-modal":()=>(o.updateModalOpen=!0,h(),P0()),"close-update-modal":()=>{o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),rt(),h()},"run-firmware-check":()=>O0(),"install-firmware-update":()=>L0(),"install-firmware-connection-switch":()=>Jb(),"install-firmware-topology-switch":()=>Zb(),"toggle-firmware-advanced":()=>{o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,xe(),rt()):o.firmwareAdvancedOpen=!0,h()},"toggle-firmware-connection-switch":()=>{o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,xe(),rt()),h()},"toggle-firmware-topology-switch":()=>{o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,xe(),rt()),h()},"toggle-firmware-upload":()=>{o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,xe()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,rt(),o.updateManualUploadError=""),h()},"upload-firmware-file":()=>W0(),"toggle-firmware-test":()=>{o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,rt()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,xe(),o.updateTestFirmwareError=""),h()},"install-firmware-test":()=>j0()};function ew(e){return se(V0,e)}function B0(e=o.currentStep){let t=["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...it];return e==="setup"?[...new Set([...t,...$t])]:e==="generation"?[...new Set([...t,"installationTopology",...Or,"hpGeneration"])]:e==="flow-source"?[...new Set([...t,"hpGeneration",...bt])]:e==="thermostat-source"?[...new Set([...t,...Ko])]:e==="boiler"?[...new Set([...t,"boilerCvAssistEnabled","boilerConnection","boilerRatedHeatPower","otbLinkAvailable"])]:e==="strategy"?[...new Set([...t,"strategy"])]:e==="heating"?[...new Set([...t,...Mt,...zo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...t,...at,...Nr])]:e==="water"?[...new Set([...t,"maxWater"])]:e==="silent"?[...new Set([...t,...Uo])]:e==="usage-telemetry"?[...new Set([...t,"usageTelemetryEnabled","usageTelemetryChoiceConfigured"])]:e==="confirm"?[...new Set([...t,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerConnection","boilerRatedHeatPower",...bt,...Ko,...at,...Nr,...Mt,...zo,"maxWater",...Uo])]:t}async function nd(e=o.currentStep){let t=B0(e);try{await z(t,"all",{concurrency:Gt}),o.quickStartModalOpen&&o.currentStep===e&&!o.nativeOpen&&h()}catch{}}async function tw(){if(Ob({stepId:o.currentStep,telemetryAvailable:S("usageTelemetryEnabled"),choiceAvailable:S("usageTelemetryChoiceConfigured"),choiceValue:E("usageTelemetryChoiceConfigured")})){o.busyAction="switch-usageTelemetryEnabled",o.controlNotice="",o.controlError="",h();try{if(await _s("usageTelemetryEnabled",!0),await z(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),!qn({telemetryValue:E("usageTelemetryEnabled"),choiceValue:E("usageTelemetryChoiceConfigured"),expectedEnabled:!0}))throw new Error("De controller heeft de keuze niet bevestigd.")}catch(e){let t=!1;try{await _s("usageTelemetryEnabled",!1),await z(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),t=qn({telemetryValue:E("usageTelemetryEnabled"),choiceValue:E("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}t?o.controlNotice="De standaardkeuze kon niet worden ingeschakeld. Delen is bevestigd uitgeschakeld; je kunt doorgaan of het opnieuw inschakelen.":o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw. ${e.message}`}finally{o.busyAction="",h()}}}async function ow(){let e=bn();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",h();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",h();let t=async(r,n)=>{if(!S(r))return;let a=E(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Vt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await z(bt,"all")}catch(r){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",h()}}async function rw(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",h();try{await z(bt,"all");let e=bn();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",h()}}async function _s(e,t){let r=L[e];if(!r||!S(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(Q(r.domain,r.name,t?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function K0(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[r],delete o.entities[r]}),await z(e,"all");let t=e.filter(r=>!o.entities[r]);if(t.length){let r=t.map(n=>L[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function z0(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await z(bt,"state")}catch{return}if(!C("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),h();return}}}async function nw(){if(!bn().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",h();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",h();let t=!1;try{if(await K0(),!C("cm100Active")){let a=L.commissioningCm100Start,i=await fetch(Q(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let r=C("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await z(["commissioningStatus","cm100Active"],"state"),r=C("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await _s("quickFlowTest",!0),await z(bt,"all");let n=String(E("commissioningStatus")||"").trim();if(!C("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",z0()}catch(r){if(t&&!C("quickFlowTest"))try{let n=L.commissioningCm100Stop;await fetch(Q(n.domain,n.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{o.busyAction="",h()}}async function aw(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",h();try{await _s("quickFlowTest",!1),await z(bt,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",h()}}async function iw(){let e=is();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",h();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",h();let t=async(r,n)=>{if(!S(r))return;let a=E(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Vt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await z(Ko,"all")}catch(r){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",h()}}var As="quickstart-usage-telemetry-prepare",ad=0;async function id(e){let t=++ad,r=e==="usage-telemetry";if(r){if(o.busyAction&&o.busyAction!==As)return;o.busyAction=As,h()}else o.busyAction===As&&(o.busyAction="",h());try{if(await nd(e),t!==ad||o.currentStep!==e)return;r&&await tw()}finally{t===ad&&o.busyAction===As&&(o.busyAction="",h())}}function sw(e){nh(e),o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),h(),id(o.currentStep)}var U0={"close-quickstart-modal":()=>{o.quickStartModalOpen=!1,h()},"open-quickstart-modal":()=>{o.currentStep="setup",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,h()},"open-generation-modal":()=>{o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,h()},"select-step":e=>{o.currentStep=e.dataset.stepId||"generation",o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),h(),id(o.currentStep)},"select-quickstart-setup":e=>{o.quickStartSetupDraft=e.dataset.setupTarget||"",o.quickStartSetupConfirmed=!1,o.controlError="",o.controlNotice="",h(),nd("setup")},"install-quickstart-setup":()=>Xb(),"apply-quickstart-flow-source":()=>ow(),"refresh-quickstart-flow-signal":()=>rw(),"start-quickstart-flow-test":()=>nw(),"abort-quickstart-flow-test":()=>aw(),"apply-quickstart-thermostat-source":()=>iw(),"retry-usage-telemetry-choice":()=>id("usage-telemetry"),"confirm-no-usage-telemetry":()=>Ms("usageTelemetryEnabled",!1),"previous-step":()=>sw(-1),"next-step":()=>sw(1)};function lw(e,t){return se(U0,e,t)}function G0(){yo(),wr(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",ga(),h(),na()}var Q0={"open-connectivity-modal":()=>{o.systemModal="connectivity",h()},"open-restart-confirm":()=>{o.systemModal="restart-confirm",h()},"open-silent-settings-modal":()=>{o.systemModal="silent-settings",h()},"open-openquatt-pause-modal":()=>{o.pauseResumeDraft=Xa(),o.systemModal="openquatt-pause",h()},"enable-openquatt-now":()=>Wb(),"apply-openquatt-preset":e=>{let t=Ys(e.dataset.pausePreset||"");o.pauseResumeDraft=t,$s(t)},"apply-openquatt-indefinite":()=>$s(""),"apply-openquatt-custom-pause":()=>{if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",h();return}$s(o.pauseResumeDraft||"")},"close-system-modal":()=>G0(),"confirm-restart":()=>Tn("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})};function cw(e,t){return se(Q0,e,t)}function Y0(e){let t=e.dataset.surface==="native";if(o.nativeOpen===t)return o.nativeOpen?Pi():void 0;o.nativeOpen=t,Sc(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",Ae({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),xe(),rt(),yo(),o.systemModal="";let r=o.nativeOpen?Pi():void 0;return h(),Oi(),window.requestAnimationFrame(()=>{o.nativeOpen&&o.nativeApp?o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):o.nativeOpen||window.scrollTo({top:0,behavior:"smooth"})}),r}var J0={"toggle-interface-panel":()=>{aa(!o.interfacePanelOpen),h()},"select-surface":e=>Y0(e)};function uw(e,t){return se(J0,e,t)}function dw(){o.systemModal="",Rt("settings"),Ni("service"),h(),qe({forceFast:!0})}function Z0(e){let t=String(e.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(t)&&(o.systemModal=`service-task-${t}`,h(),qe({forceFast:!0}))}function Cn(e,t,r,n){e.preventDefault();let a=t.closest(r);o[n]=!(a&&a.hasAttribute("open")),h()}var X0={"select-view":e=>{if((e.dataset.viewId||"")==="diagnosis"&&!wt())return;let t=e.dataset.viewId||"overview";Rt(t,{syncMode:"push"}),h(),qe({forceFast:!0})},"select-trend-window":e=>{e.disabled||(pn(Number(e.dataset.trendHours||24)),h(),Lc({force:!0}).then(t=>{t&&h()}))},"select-energy-history-view":e=>{e.disabled||wh(e.dataset.energyHistoryView||"day")},"shift-energy-history-period":e=>{e.disabled||qh(o.energyHistoryView||"day",e.dataset.energyHistoryDirection||"1")},"select-energy-history-now":e=>{e.disabled||Th(o.energyHistoryView||"day")},"select-settings-group":e=>{Ni(e.dataset.groupId||ye[0].id),h(),qe({forceFast:!0})},"toggle-overview-theme":()=>{kg(o.overviewTheme==="light"?"dark":"light"),h()},"select-hp-visual":e=>{qg(e.dataset.hpVisual==="compact"?"compact":"schematic"),h()},"select-hp-layout":e=>{Tg(e.dataset.hpLayout||"equal"),h()},"toggle-installation-monitoring-details":(e,t)=>{Cn(t,e,".oq-settings-monitoring-details","installationMonitoringDetailsOpen")},"toggle-compressor-limits":()=>{o.compressorLimitsOpen=!o.compressorLimitsOpen,h()},"toggle-integration-diagnostics":(e,t)=>{Cn(t,e,".oq-settings-integration-diagnostics","integrationDiagnosticsOpen")},"toggle-odu-runtime-frequency-details":(e,t)=>{Cn(t,e,".oq-settings-odu-runtime-details","oduRuntimeFrequencyDetailsOpen")},"toggle-usage-telemetry-details":(e,t)=>{Cn(t,e,".oq-usage-disclosure--collapsible","usageTelemetryDetailsOpen")},"toggle-storage-technical-details":(e,t)=>{Cn(t,e,".oq-settings-storage-technical","settingsStorageDetailsOpen")},"toggle-storage-advanced":(e,t)=>{Cn(t,e,".oq-settings-storage-advanced","settingsStorageAdvancedOpen")},"open-cm100-commissioning-modal":()=>dw(),"open-installation-monitoring":()=>dw(),"open-service-task-modal":e=>Z0(e)};function pw(e,t,r){return se(X0,e,t,r)}var eC=[pw,Qb,lw,vg,ep,fm,e=>mf(e,{triggerNamedButton:Tn}),ew,Bb,Zm,cw,Kb,uw];function gw(){window.setTimeout(()=>{let e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function fw(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function hw(e){let t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;let r=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(r||n)}function bw(e){if(e.target.dataset.oqQuickstartSetupConfirm){o.quickStartSetupConfirmed=!!e.target.checked,h();return}if(e.target.dataset.oqFirmwareConnectionConfirm){Ae({firmwareConnectionSwitchConfirmed:!!e.target.checked}),h();return}if(e.target.dataset.oqFirmwareTopologyConfirm){Ae({firmwareTopologySwitchConfirmed:!!e.target.checked}),h();return}if(e.target.dataset.oqFirmwareTestConfirm){Ae({updateTestFirmwareConfirmed:!!e.target.checked,updateTestFirmwareError:""});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!o.updateTestFirmwareConfirmed||!mr()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){Ae({updateTestFirmwarePr:String(e.target.value||""),updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=tn(),c=Zn(mr(),l),u=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');u&&(u.textContent=c?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){mm(e.target);return}if(e.target.dataset.oqBackupMqttPassword!==void 0){o.settingsBackupMqttPassword=String(e.target.value||""),o.settingsBackupError="";let n=e.target.closest(".oq-helper-modal")?.querySelector('[data-oq-action="confirm-settings-backup-restore"]');n&&(n.disabled=!o.settingsBackupMqttPassword,n.textContent=o.settingsBackupMqttPassword?"Herstellen":"Vul MQTT-wachtwoord in"),e.target.closest(".oq-helper-modal")?.querySelector(".oq-settings-backup-error")?.remove();return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),h();return}let n=e.target.dataset.oqAuthField;if(n){o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(L[r]?.domain==="text"){o.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[r]=e.target.value);let n=Ee(e.target.value);if(!Number.isNaN(n)){let a=ke(r,e.target.value);if(o.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=Y(r,a))}}}}function ww(e){Ff(e)}function mw(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function tC(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){let r=window.getComputedStyle(t),n=/(auto|scroll)/.test(r.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&t.scrollWidth>t.clientWidth;if(n||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function vw(e){let t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();let r=tC(t);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:mw(e,e.deltaX||0),top:mw(e,e.deltaY||0),behavior:"auto"})}function yw(e){if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",df(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?Ae({firmwareAdvancedOpen:!0,updateManualUploadOpen:!0,updateManualUploadFile:n,updateManualUploadFileName:n.name||"",updateManualUploadError:""}):xe(),h();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof ya=="function"&&ya(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){Ht({energyHistoryExportMode:mn(e.target.value),energyHistoryExportError:"",energyHistoryExportNotice:""}),h();return}let t=e.target.dataset.oqField;if(!t)return;let r=L[t];if(r){if(r.domain==="select"){Ha(t,String(e.target.value));return}if(r.domain==="number"){Da(t,e.target.value);return}if(r.domain==="text"){Lb(t,e.target.value);return}if(r.domain==="time"){let n=At(e.target.value);if(!n){o.controlError=`${r.name} verwacht tijd als HH:MM.`,h();return}Pb(t,n);return}if(r.domain==="datetime"){let n=et(e.target.value);if(!n){o.controlError=`${r.name} verwacht datum en tijd.`,h();return}jb(t,n);return}}}function Sw(e){let t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){let m=t.querySelector("input[data-oq-field]");if(m&&(m.type==="time"||m.type==="datetime-local")&&typeof m.showPicker=="function")try{m.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-control-replay-period-menu]"),l=e.target.closest("[data-oq-modal]");if(r){let m=r.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===m?"":m,h();return}let c=e.target.closest("[data-oq-action]"),u=o.interfacePanelOpen&&!a;if(!c){let m=!1;if(o.settingsInfoOpen&&!n&&(o.settingsInfoOpen="",m=!0),u&&(aa(!1),m=!0),o.controlReplayPeriodMenuOpen&&!i&&(o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,m=!0),l&&e.target===l){if(l.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(Ae({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),xe(),rt(),m=!0),o.systemModal&&(ga(),yo(),o.systemModal="",m=!0)}m&&h();return}u&&c.dataset.oqAction!=="toggle-interface-panel"&&aa(!1);let d=c.dataset.oqAction;eC.some(m=>m(d,c,e))||Ud(d,c)}function oC(e){let t=Math.max(0,Math.min(1440,Math.round(e/5)*5));!Number.isNaN(t)&&o.controlReplayGraphMinute!==t&&(o.controlReplayGraphMinute=t,h())}function kw(e,t){let r=t||o.root?.querySelector("[data-oq-control-replay-scrub]");if(!r)return;let n=r.getBoundingClientRect();if(!n.width)return;let a=Math.max(0,Math.min(1,(e-n.left)/n.width));oC(a*1440)}function qw(e){let t=e.target.closest("[data-oq-control-replay-scrub]");if(t){o.controlReplayScrubbing=!0,e.preventDefault(),kw(e.clientX,t);return}let r=e.target.closest("[data-curve-key]");!r||!ie()||(o.draggingCurveKey=r.dataset.curveKey||"",rd(e.clientY))}function Tw(e){if(typeof lu=="function"&&lu(e),o.controlReplayScrubbing){e.preventDefault(),kw(e.clientX);return}o.draggingCurveKey&&rd(e.clientY)}function Ew(){if(o.controlReplayScrubbing){o.controlReplayScrubbing=!1;return}if(!o.draggingCurveKey)return;let e=o.draggingCurveKey,t=ke(e,E(e));o.draggingCurveKey="",Da(e,t,"Curvepunt bijgewerkt.")}pp({handleChange:yw,handleClick:Sw,handleFocusChange:gw,handleInput:bw,handleKeyDown:ww,handlePointerDown:qw,handlePointerMove:Tw,handlePointerUp:Ew,handleSettingsInteractionEnd:hw,handleSettingsInteractionStart:fw,handleWheel:vw});Cg();})();
