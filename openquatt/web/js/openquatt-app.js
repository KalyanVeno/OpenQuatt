/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var pc=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,li={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},ci="https://oi.esphome.io/v3/www.js",Et=2,Ct=4,Ln=6e4,Fn="Power House",In="Water Temperature Control (heating curve)",Vo=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],xr=[1,2],Bo=Array.from({length:11},(e,o)=>o),_n=["cooling","heating"];function fh(e){return e==="cooling"?"cooling":"heating"}function bh(e){return e==="cooling"?"Cooling":"Heating"}function mo(e,o,r){return`hp${e}OduRuntime${bh(o)}F${r}`}function ve(e,o){return`hp${e}OduRuntimeFrequency${o}`}function ui(e){return[ve(e,"Enable"),ve(e,"Load"),ve(e,"Apply"),ve(e,"Status"),..._n.flatMap(o=>Bo.map(r=>mo(e,o,r)))]}function dc(e){let o=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return o?Number(o[1]):0}var Wn=xr.flatMap(ui),pi=new Set(xr.flatMap(e=>[ve(e,"Load"),ve(e,"Apply")])),R={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1SuctionSuperheat:{domain:"sensor",name:"HP1 - Suction superheat",optional:!0},hp1DischargeSuperheat:{domain:"sensor",name:"HP1 - Discharge superheat",optional:!0},hp1SuctionSuperheatStatus:{domain:"text_sensor",name:"HP1 - Suction superheat status",optional:!0},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2SuctionSuperheat:{domain:"sensor",name:"HP2 - Suction superheat",optional:!0},hp2DischargeSuperheat:{domain:"sensor",name:"HP2 - Discharge superheat",optional:!0},hp2SuctionSuperheatStatus:{domain:"text_sensor",name:"HP2 - Suction superheat status",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};xr.forEach(e=>{let o=`HP${e} - EXPERIMENTAL`;R[ve(e,"Enable")]={domain:"switch",name:`${o} ODU runtime frequency write enable`,optional:!0},R[ve(e,"Load")]={domain:"button",name:`${o} load ODU runtime frequency table`,optional:!0},R[ve(e,"Apply")]={domain:"button",name:`${o} apply ODU runtime frequency table`,optional:!0},R[ve(e,"Status")]={domain:"text_sensor",name:`${o} ODU runtime frequency status`,optional:!0},_n.forEach(r=>{Bo.forEach(n=>{R[mo(e,r,n)]={domain:"number",name:`${o} ${fh(r)} F${n} runtime Hz`,optional:!0}})})});var Vn=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"settings",label:"Instellingen",icon:"settings"}],mc=new Set(Vn.map(e=>e.id)),yh={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function tt(e,o=""){let r=yh[e];return r?`<svg${o?` class="${vh(o)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function vh(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var de=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],xe=new Set(de.map(e=>e.id)),gc=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",suctionSuperheat:"hp1SuctionSuperheat",dischargeSuperheat:"hp1DischargeSuperheat",suctionSuperheatStatus:"hp1SuctionSuperheatStatus",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",suctionSuperheat:"hp2SuctionSuperheat",dischargeSuperheat:"hp2DischargeSuperheat",suctionSuperheatStatus:"hp2SuctionSuperheatStatus",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],me=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],pt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],go=["dayMax","silentMax","maxWater"],Be=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Ko=["flowKp","flowKi"],$r=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Ar=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],Hr=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],wh=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Bn=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Ar,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Mr=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),di=["cicCompatibilityMode"],mi=["otEnabled","otLinkProblem"],gi=["cicPollingEnabled","cicFeedUrl","cicDataStale"],hi=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],fi=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],Rr=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],bi=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],ot=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],ho=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],yi=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],fo=[...me.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],vi=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],bo=["silentStartTime","silentEndTime","silentMax","dayMax"],hc=1e4;var Kn=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],yo=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],kt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Sh=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Pr=[...kt,...Sh,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],jo=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Ke=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Nr=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],wi=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...wh],fc=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...pt,...fo,...Be,"maxWater",...bo,...ot,...ho,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut"],jn=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Un=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Bn,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...di,...mi,...hi,...gi,...fi,...Rr,...bi,...Be,...Ko,...$r,...Ar,...Hr,...yi,...go,...pt,...fo,...vi,...bo,...Wn];var WS=new Set(["installationTopology",...Bn,...Wn,"cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled"]),Bt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...$r]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...me.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Si=1,Kt=[...new Set(Bt.flatMap(e=>e.keys))],bc=new Set(Kt),yc=5e3,vc=3e4,wc=6e4,vo=12e3,Or=4e3,Sc=1500,qc=3e4,Tc=3e4,Ec=1e3,Dr=3e4,qi=250,Cc=750,qh=22,kc=qh/1.7,xc=360/3.2,wo="2000-01-01 00:00:00";function Th(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var dt=24,So=[3,12,24,72,168,336,720],t={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Ch(),devPanelOpen:xh(),nativeOpen:kh()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:$h(),appView:"",overviewTheme:Eh(),hpVisualMode:Ah(),hpLayoutMode:Hh(),trendWindowHours:Mh(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Th(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttSensorsModalRenderSignature:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:Rh(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Eh(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Ch(){return!1}function kh(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function xh(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function $h(){try{let e=window.localStorage.getItem("oq-settings-group");return xe.has(e)?e:de[0].id}catch{return de[0].id}}function Ah(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function Hh(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Mh(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return So.includes(e)?e:dt}catch{return dt}}function Ti(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function Rh(){return!!Ti()?.matches}function h(e){return!!t.entities[e]}function E(e){if(Object.prototype.hasOwnProperty.call(t.drafts,e))return t.drafts[e];let o=t.entities[e];return o?o.value??o.state??"":""}function Me(e){let o=t.entities[e]||{};return{min:Number(o.min_value??0),max:Number(o.max_value??100),step:Number(o.step??1),uom:o.uom||""}}function we(e){return Object.prototype.hasOwnProperty.call(t.inputDrafts,e)?t.inputDrafts[e]:E(e)}function Ee(e){if(typeof e=="number")return e;let o=String(e??"").trim().replace(",",".");return!o||o==="-"||o==="."||o==="-."?Number.NaN:Number(o)}function xt(e){let o=String(e||"").trim();if(!o)return"";let r=o.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Lr(e){let o=xt(e);return o?o.slice(0,5):""}function je(e){let o=String(e||"").trim();if(!o)return"";let r=o.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),p=Number(r[5]),u=Number(r[6]||"0");return[n,a,i,l,p,u].some(c=>Number.isNaN(c))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||p<0||p>59||u<0||u>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function Gn(e){let o=je(e);return!o||o===wo?"":o.slice(0,16).replace(" ","T")}function Ac(e){let o=je(e);if(!o||o===wo)return null;let r=o.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),p=Number(r[5]),u=Number(r[6]),c=new Date(n,a-1,i,l,p,u,0);return Number.isNaN(c.getTime())?null:c}function Fr(e=E("openquattResumeAt")){return!!Ac(e)}function Uo(e,o=!1){let r=Ac(e);return r?new Intl.DateTimeFormat("nl-NL",o?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function $c(e){let o=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${o}-${r}-${n}T${a}:${i}`}function Ph(e){let o=new Date(e.getTime());o.setSeconds(0,0);let r=o.getMinutes(),n=r%15;return n!==0&&o.setMinutes(r+(15-n)),o}function Ei(e){let o=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=Ph(new Date(o.getTime()+r*3600*1e3));return $c(n)}if(e==="tomorrow-morning"){let r=new Date(o);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),$c(r)}return""}function zn(){let e=Gn(t.pauseResumeDraft);if(e)return e;let o=Gn(E("openquattResumeAt"));return o||Ei("2h")}function j(e,o=E(e)){if(o===""||o===null||Number.isNaN(Number(o)))return"\u2014";let r=Me(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(o).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function fe(e,o){let r=Me(e),n=Ee(o);if(Number.isNaN(n)){let u=Ee(t.entities[e]?.value??t.entities[e]?.state??"");return Number.isNaN(u)?r.min:u}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,p=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(p))}function Qn(){let e=me[Math.floor(me.length/2-1)],o=me[Math.floor(me.length/2)];if(!e||!o||!h("curveFallbackSupply"))return null;let r=fe(e.key,E(e.key)),n=fe(o.key,E(o.key)),a=(r+n)/2,i=fe("curveFallbackSupply",a);return{value:i,label:j("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${o.label}).`,isCurrent:fe("curveFallbackSupply",E("curveFallbackSupply"))===i}}function Nh(e){let o=String(e||"").replace(/\/$/,"");if(!o)return"";let r=o.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?o.slice(0,-r.length).replace(/\/$/,"")||"":o}function Re(){return Nh(window.location.pathname)}function U(e,o,r=""){let n=r?`/${r}`:"";return`${Re()}/${e}/${encodeURIComponent(o)}${n}`}function ae(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function Hc(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function _(e,o,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(o)}${r?` ${r}`:""}`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Mc(){let e=[];e.push(ae()?"Stooklijn":"Power House");let o=String(E(ae()?"curveControlProfile":"phResponseProfile")||"").trim();o&&e.push(`profiel ${o}`);let r=String(E("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&h("manualIpwm")?e.push(`iPWM ${j("manualIpwm")}`):h("flowSetpoint")&&e.push(`flow ${j("flowSetpoint")}`),h("dayMax")&&e.push(`dag ${j("dayMax")}`),h("silentMax")&&e.push(`silent ${j("silentMax")}`),h("maxWater")&&e.push(`max water ${j("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function O(e,o="\u2014"){let r=t.entities[e];if(!r)return o;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?o:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function A(e){let o=Number(E(e));return Number.isNaN(o)?NaN:o}function Ci(e){let o=String(e||"").toLowerCase();return o.includes("cop")||o.includes("eer")}function ki(e){let o=String(e||"");if(o==="totalEer"){let r=A("totalCoolingPower"),n=A("coolingPowerInput"),a=Number.isNaN(n)?A("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(o==="totalCop"){let r=A("totalHeat"),n=A("heatingPowerInput"),a=Number.isNaN(n)?A("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function Go(e,o=""){let r=String(t.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1SuctionSuperheat:"K",hp1DischargeSuperheat:"K",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2SuctionSuperheat:"K",hp2DischargeSuperheat:"K",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||o}function Ue(e){let o=t.entities[e],r=ki(e);if(!o)return Number.isNaN(r)?"\u2014":_(r,1,Go(e));let n=A(e);if(Number.isNaN(n))return Number.isNaN(r)?O(e):_(r,1,Go(e));let a=n>0||Number.isNaN(r)?n:r,i=Ci(e)?1:0;return _(a,i,Go(e))}function k(e){let o=t.entities[e];if(!o)return!1;if(typeof o.value=="boolean")return o.value;let r=String(o.state??o.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function rt(){return!h("trendHistoryEnabled")||k("trendHistoryEnabled")}function Yn(){let e=t.entities.setupComplete;if(!e)return null;let o=String(e.state??e.value??"").trim().toLowerCase();return!o||o==="unknown"||o==="unavailable"?null:o==="on"||o==="true"||o==="1"?!0:o==="off"||o==="false"||o==="0"?!1:null}function Rc(){return`
      <div class="oq-helper-app-nav">
        ${Vn.filter(e=>e.id!=="diagnosis"||rt()).map(e=>`
          <button
            class="oq-helper-app-tab ${t.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${tt(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function Oh(e=t.appView){return Vn.find(o=>o.id===e)?.label||"OpenQuatt"}function xi(){if(typeof document>"u")return;if(t.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=Oh();document.title=`${e} \u2022 OpenQuatt`}function $i(){if(typeof document>"u")return;if(t.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=t.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}async function jt(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(o)}return r}function Ai(e,o){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=o,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Hi(e,o,r="text/plain"){Ai(new Blob([o],{type:r}),e)}function Pc(e,o){Hi(e,JSON.stringify(o,null,2),"application/json")}var Mi=null;function Nc(e){Mi=typeof e=="function"?e:null}function d(){Mi&&Mi()}var Dh=1500;function Ri(){t.deviceReconnectRecoveryTimer&&(window.clearTimeout(t.deviceReconnectRecoveryTimer),t.deviceReconnectRecoveryTimer=null)}function Ut(){return Number(t.deviceReconnectRecoveryStartedAt||0)>0}function Lh(){return Ut()?Number(t.deviceReconnectRecoveryStartedAt||0):Number(t.deviceReconnectStartedAt||0)}function Oc(){return Ut()?"Gegevens verversen":"Wachten op gegevens"}function Dc(){let e=Lh(),o=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Ut()?o>0?`${o}s aan het verversen`:"Net weer online":o>0?`${o}s bezig`:"Net gestart"}function Pi(){if(!t.deviceReconnectMode||Ut())return!1;Ri(),t.deviceReconnectRecoveryStartedAt=Date.now(),t.deviceReconnectLastError="",t.entitySyncFailureCount=0;let e=t.deviceReconnectRecoveryStartedAt;return t.deviceReconnectRecoveryTimer=window.setTimeout(()=>{t.deviceReconnectMode&&Number(t.deviceReconnectRecoveryStartedAt||0)===e&&(Ni(),d())},Dh),d(),!0}function Gt(e="reconnect",o=""){t.deviceReconnectMode||(t.deviceReconnectStartedAt=Date.now()),Ri(),t.deviceReconnectMode=e,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError=o?String(o):t.deviceReconnectLastError,t.systemModal="",t.updateModalOpen=!1,t.controlError=""}function Ni(){Ri(),!(!t.deviceReconnectMode&&!t.entitySyncFailureCount)&&(t.deviceReconnectMode="",t.deviceReconnectStartedAt=0,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError="",t.entitySyncFailureCount=0)}function Lc(){return Ut()?"OpenQuatt is weer online":t.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":t.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function Fc(){return Ut()?t.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":t.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":t.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function Ir(e,o={},r=Tc){if(o.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function $t(){return t.appView==="settings"&&t.settingsGroup==="system"}function Ic(){return t.appView==="settings"&&t.settingsGroup==="integrations"}function _c(e=t.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Oi(){let e=t.authStatus||{};t.authDraftUsername=e.enabled?String(e.username||"").trim():"",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword=""}function Jn(e=t.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",e.key_present?"has-key":"no-key",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Wc(){return t.systemModal==="login"||t.systemModal==="api-security"||$t()}function Vc(){return t.systemModal==="api-security"||$t()}async function qo(e={}){if(!Ir(t.lastAuthStatusRefreshAt,e))return!1;t.lastAuthStatusRefreshAt=Date.now();try{let o=await fetch("/auth/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=_c(),i=_c(n);return t.authStatus=n,a!==i&&Oi(),t.systemModal==="login"&&(t.authError=""),a!==i}catch(o){return t.systemModal==="login"&&(t.authError=`Loginstatus kon niet worden geladen. ${o.message}`),!1}}function Zn(){return t.nativeOpen||t.systemModal!=="login"?!1:(t.authStatus||{}).setup_window_active!==!0}function zo(){t.loginAuthStatusPollTimer&&(window.clearTimeout(t.loginAuthStatusPollTimer),t.loginAuthStatusPollTimer=null)}function Bc(e=Ec){t.loginAuthStatusPollTimer||!Zn()||(t.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(t.loginAuthStatusPollTimer=null,!Zn())return;let o=t.authError;(await qo({force:!0})||t.authError!==o)&&t.systemModal==="login"&&d(),Zn()&&Bc()},Math.max(0,Number(e)||0)))}async function Kc(e={}){if(t.systemModal!=="login")return!1;let o=t.authError,r=await qo({force:!0});return(r||t.authError!==o)&&t.systemModal==="login"&&d(),e.poll!==!1&&Zn()&&Bc(),r}async function zt(e={}){if(!Ir(t.lastApiSecurityStatusRefreshAt,e))return!1;t.lastApiSecurityStatusRefreshAt=Date.now();try{let o=await fetch("/api-security/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n={enabled:!!r.enabled,transport_active:!!r.transport_active,pending_restart:!!r.pending_restart,key_present:!!(r.key_present||r.key),key:String(r.key||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=Jn(),i=Jn(n);return t.apiSecurityStatus=n,t.apiSecurityError="",a!==i&&(t.apiSecurityNotice=""),a!==i}catch(o){return t.apiSecurityError=`API-beveiliging kon niet worden geladen. ${o.message}`,!1}}async function jc(){let e=R.restartAction;if(e){t.busyAction="restartAction",t.controlError="",t.controlNotice="",d();try{let o=await fetch(U(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);zo(),t.systemModal="",t.controlNotice="OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",Gt("restart")}catch(o){t.controlError=`Herstart mislukt. ${o.message}`}finally{t.busyAction="",d()}}}async function Uc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await zt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Inschakelen is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function Gc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await zt({force:!0}),t.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Roteren is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function zc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}if(!e.enabled){t.apiSecurityNotice="API-encryptie staat al uit.",t.apiSecurityError="",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await zt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Uitzetten is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function Qc(){let e=String(t.apiSecurityStatus?.key||"").trim();if(!e){t.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",d();return}try{if(!await jt(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.apiSecurityNotice="API-sleutel gekopieerd.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Kopi\xEBren is mislukt. ${o.message}`,d()}}async function Yc(){let e=t.authStatus||{},o=e.enabled===!0,r=e.setup_window_active===!0,n=String(t.authDraftCurrentPassword||""),a=String(t.authDraftUsername||"").trim(),i=String(t.authDraftNewPassword||""),l=String(t.authDraftConfirmPassword||"");if(!a||!i){t.authError="Vul een gebruikersnaam en wachtwoord in.",d();return}if(i!==l){t.authError="De twee wachtwoorden zijn niet gelijk.",d();return}if(o&&!n){t.authError="Vul je huidige wachtwoord in.",d();return}if(!o&&!r){t.authError="Houd de herstelknop 5 seconden vast.",d();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",d();return}t.authBusy=!0,t.authError="",t.authNotice="",d();try{let p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("current_password",n),p.set("new_username",a),p.set("new_password",i);let u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);await qo({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername=String(t.authStatus?.username||a).trim(),t.authNotice=o?"Login aangepast.":"Login staat nu aan.",t.authError="",d()}catch(p){t.authError=`Opslaan is mislukt. ${p.message}`,d()}finally{t.authBusy=!1,d()}}async function Zc(){let e=t.authStatus||{};if(!e.enabled){t.authNotice="Login staat al uit.",t.authError="",d();return}let o=String(t.authDraftCurrentPassword||"");if(!o){t.authError="Vul je huidige wachtwoord in.",d();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",d();return}t.authBusy=!0,t.authError="",t.authNotice="",d();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",o);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await qo({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername="",t.authNotice="Login staat nu uit.",t.authError="",d()}catch(r){t.authError=`Uitzetten is mislukt. ${r.message}`,d()}finally{t.authBusy=!1,d()}}function K(e){let o=t.entities[e];if(!o)return t.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=o.state??o.value??"",n=Array.isArray(o.option)?o.option.join(","):Array.isArray(o.options)?o.options.join(","):"",a=[o.min_value??"",o.max_value??"",o.step??"",o.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function Se(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function _r(){return[t.appView,t.settingsGroup,t.busyAction,t.loadingEntities?"loading":"ready",Jn(),K("setupComplete"),...Un.map(e=>K(e))].join("|")}function Xn(){return[t.appView,t.busyAction,K("openquattEnabled"),K("openquattResumeAt"),K("manualCoolingEnable"),K("silentModeOverride"),K("controlModeLabel"),K("coolingPermitted"),K("coolingRequestActive"),K("coolingBlockReason"),K("silentActive")].join("|")}function Wr(){t.root&&(t.root.style.removeProperty("--oq-flow-offset"),t.root.style.removeProperty("--oq-flow-offset-reverse"),t.root.style.removeProperty("--oq-fan-rotation"),t.root.getAttribute("style")||t.root.removeAttribute("style"))}function ea(){return t.motionTargets={pipeFlows:[],fanBlades:[]},t.root?(t.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{t.motionTargets.fanBlades.push(a)})}),t.motionTargets.pipeFlows.length+t.motionTargets.fanBlades.length):0}function Fh(){return t.motionTargets.pipeFlows.length>0||t.motionTargets.fanBlades.length>0}function Jc(e=performance.now()){if(!t.root||t.reducedMotion||!Fh()&&ea()===0)return!1;t.motionStartedAt||(t.motionStartedAt=e);let o=(e-t.motionStartedAt)/1e3,r=o*xc%360;return t.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(o*kc*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),t.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function Xc(e){if(!Jc(e)){t.motionFrame=0,t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(Xc)}function Vr(){if(t.motionFrame||t.reducedMotion||ea()===0)return;let e=performance.now();if(t.motionStartedAt=e,!Jc(e)){t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(Xc)}function Br(){t.motionFrame&&(window.cancelAnimationFrame(t.motionFrame),t.motionFrame=0),t.motionStartedAt=0,Wr()}var eu=null,tu=null;function ou({start:e,stop:o}={}){eu=typeof e=="function"?e:null,tu=typeof o=="function"?o:null}function Di(){eu?.()}function ru(){tu?.()}var Pe={};function nu(e={}){Object.keys(Pe).forEach(o=>{delete Pe[o]}),Object.assign(Pe,e)}function au(e){Pe.handleChange?.(e)}function iu(e){Pe.handleClick?.(e)}function Li(e){Pe.handleFocusChange?.(e)}function su(e){Pe.handleInput?.(e)}function lu(e){Pe.handleKeyDown?.(e)}function cu(e){Pe.handlePointerDown?.(e)}function uu(e){Pe.handlePointerMove?.(e)}function pu(e){Pe.handlePointerUp?.(e)}function du(e){Pe.handleSettingsInteractionEnd?.(e)}function mu(e){Pe.handleSettingsInteractionStart?.(e)}function gu(e){Pe.handleWheel?.(e)}function Qt(){return"overview"}function Kr(e){return e==="trends"&&(e="diagnosis"),!mc.has(e)||e==="diagnosis"&&!rt()?"":e}function ta(e){return String(e||"").trim().toLowerCase()}function jr(){try{let e=new URL(window.location.href),o=ta(e.searchParams.get("view")||""),r=Kr(o);if(r)return r;let n=ta(e.hash.replace(/^#/,""));return Kr(n)||""}catch{return""}}function Fi(){try{let e=new URL(window.location.href),o=ta(e.searchParams.get("section")||"");if(xe.has(o))return o;let r=ta(e.searchParams.get("group")||"");return xe.has(r)?r:""}catch{return""}}function Ii(e="replace"){try{let o=new URL(window.location.href),r=Kr(t.appView)||Qt();if(o.searchParams.set("view",r),r==="settings"){let a=xe.has(t.settingsGroup)?t.settingsGroup:de[0].id;o.searchParams.set("section",a),o.searchParams.delete("group")}else o.searchParams.delete("section"),o.searchParams.delete("group");o.hash&&Kr(o.hash.replace(/^#/,""))&&(o.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?t.settingsGroup:""},"",o.toString())}catch{}}function mt(e,o={}){let r=Kr(e)||Qt(),n=o.syncMode||"replace",a=t.appView!==r;t.appView=r,(a||o.forceSync)&&Ii(n)}function oa(e=Date.now()){return Number(t.firmwareOtaQuietUntil||0)>e}var Ih=new Set(["compressor oil return"]);function Yt(e){let o=String(e||"").trim();return!o||o==="None"?"Geen actieve storingen":o}function _h(e){let o=Yt(e);return o==="Geen actieve storingen"?[]:o.split(",").map(r=>r.trim()).filter(r=>r&&!Ih.has(r.toLowerCase()))}function ra(e){let o=_h(e);return o.length>0?o.join(", "):"Geen actieve storingen"}function G(e){return h(e)&&k(e)}function gt(e){return!h(e)||k(e)}function Wi(e){return h(e)?Yt(O(e,"None")):""}function _i(e){return h(e)?ra(O(e,"None")):""}function Ur(e){let o=_i(e).trim().toLowerCase();return!!o&&o!=="geen actieve storingen"}function At(){let e=[],o=G("compressorCyclingWarning2h")||G("compressorCyclingWarning72h")||G("alternatingCompressorStartsWarning"),r=G("compressorCyclingAlertLatched"),n=gt("cicPollingEnabled"),a=gt("otEnabled"),i=(p,u)=>{G(p)&&e.push({key:p,label:u})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),n&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Ur("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${_i("hp1Failures")}`}),Ur("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${_i("hp2Failures")}`});let l=e.length;return r&&!o&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:r,cyclingAlertActive:o,cyclingAlertRecovered:r&&!o,title:l>0?"Aandacht nodig":r?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:r?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Gr(e){let o=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!o){t.installationMonitoringProblemSignature="";return}o!==t.installationMonitoringProblemSignature&&(t.installationMonitoringProblemSignature=o,t.installationMonitoringDetailsOpen=!0)}var Vi=null,Bi=null;function hu({getSignature:e,patch:o}={}){Vi=typeof e=="function"?e:null,Bi=typeof o=="function"?o:null}function fu(){return Vi?Vi():""}function Ki(){return Bi?Bi():!1}var ji=null;function bu({patch:e}={}){ji=typeof e=="function"?e:null}function yu(){return ji?ji():!1}var Qo=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],Ui=["trendHistoryEnabled","trendHistoryFlashEnabled"],Gi=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function Zt(){return[...new Set(Qo)]}var nt={};function vu(e={}){nt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function zi(){return nt.shouldRefreshSettingsStorageForCurrentSurface?nt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function wu(e={}){return nt.refreshTrendHistoryMetadata?nt.refreshTrendHistoryMetadata(e):!1}async function Su(e={}){return nt.refreshSettingsStorageState?nt.refreshSettingsStorageState(e):!1}async function Qi(e={}){return nt.refreshTrendHistoryData?nt.refreshTrendHistoryData(e):!1}async function na(e={}){return nt.refreshEnergyHistoryData?nt.refreshEnergyHistoryData(e):!1}var Ht={};function Yo(e={}){Object.entries(e).forEach(([o,r])=>{typeof r=="function"&&(Ht[o]=r)})}function qu(){return Ht.patchEnergyDom?Ht.patchEnergyDom():!1}function Tu(){return Ht.patchResultsDom?Ht.patchResultsDom():!1}function Eu(){return Ht.patchOverviewDom?Ht.patchOverviewDom():!1}function Cu(){return Ht.patchDiagnosisDom?Ht.patchDiagnosisDom():!1}var To={};function ku(e={}){To={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function Yi(){if(To.closeStream)return To.closeStream();let e=t.webServerLogSource;e&&e.close(),t.webServerLogSource=null,t.webServerLogConnected=!1}function Zi(){if(To.clearOutput)return To.clearOutput();t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogRaw="",t.webServerLogNotice=""}function Ji(){if(To.resetRecoveryState)return To.resetRecoveryState();Yi(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,Zi()}function xu(){let e=t.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function $u(){let e=t.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let o=String(e.broker||"").trim(),r=Number(e.port||1883),n=o?`${o}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?o?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":o?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function Wh(e,o=2){let r=A(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(o))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function Vh(e){if(!h(e.valueKey)||!k(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let o=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(k(e.valueKey)?o:r)}</span>`}function Bh(e){return e.kind==="binary"?Vh(e):Wh(e.valueKey)}function Kh(e){let o=A(e);return Number.isFinite(o)?o<60?`${Math.round(o)} s`:o<3600?`${Math.round(o/60)} min`:`${Math.round(o/3600)} u`:"\u2014"}function Xi(e){return h(e)?k(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function es(e){let o=t.mqttStatus?.input_topics;if(o&&typeof o=="object"){let r=String(o[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(t.mqttStatus?.dew_point_topic||"").trim():""}function aa(e){let o=t.mqttStatus?.input_enabled;return o&&typeof o=="object"&&Object.prototype.hasOwnProperty.call(o,e)?o[e]!==!1:!0}function Au(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden genegeerd.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden genegeerd.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden genegeerd.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een temperatuur in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C. Retained berichten worden genegeerd.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"10 minuten",kind:"binary",payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer toestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Zonder nieuwe publicatie wordt dit signaal na 10 minuten ongeldig. Retained berichten worden genegeerd.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"10 minuten",kind:"binary",payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer toestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Zonder nieuwe publicatie wordt dit signaal na 10 minuten ongeldig. Retained berichten worden genegeerd.'}]}function ts(e=Au()){if(!e.length)return"Geen sensoren";let o=e.filter(i=>aa(i.topicKey)),r=e.length-o.length;if(!o.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=o.filter(i=>k(i.validKey)).length,a=n===o.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${o.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function Hu(){let e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,r=!!t.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=t.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(t.mqttNotice)}</span></div>`:"",i=t.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-modal-title">MQTT brokerconfiguratie</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT brokerconfiguratie">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Stel de broker in waarop OpenQuatt MQTT-inputs beluistert.</p>
          ${a}
          ${i}
          <div class="oq-settings-mqtt-form-grid">
            <label class="oq-settings-mqtt-toggle">
              <input
                type="checkbox"
                data-oq-mqtt-field="enabled"
                ${o?"checked":""}
                ${t.mqttBusy?"disabled":""}
              >
              <span>MQTT inputbronnen inschakelen</span>
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Broker</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="broker"
                value="${s(t.mqttDraftBroker)}"
                placeholder="mqtt.local"
                autocomplete="off"
                ${t.mqttBusy?"disabled":""}
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
                value="${s(t.mqttDraftPort)}"
                ${t.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Gebruikersnaam</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="username"
                value="${s(t.mqttDraftUsername)}"
                autocomplete="username"
                ${t.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                data-oq-mqtt-field="password"
                value="${s(t.mqttDraftPassword)}"
                placeholder="${s(n)}"
                autocomplete="current-password"
                ${t.mqttBusy||r?"disabled":""}
              >
            </label>
            ${e.password_set?`
              <label class="oq-settings-mqtt-toggle">
                <input
                  type="checkbox"
                  data-oq-mqtt-field="clear-password"
                  ${r?"checked":""}
                  ${t.mqttBusy?"disabled":""}
                >
                <span>Opgeslagen wachtwoord wissen</span>
              </label>
            `:""}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.mqttBusy?"disabled":""}>Gereed</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${t.mqttBusy||!e.csrf_token?"disabled":""}>
              ${t.mqttBusy?"Opslaan...":"Opslaan"}
            </button>
          </div>
        </section>
      </div>
    `}function Mu(){let e=Au(),o=e.some(i=>i.topicKey===t.mqttExpandedTopicKey)?t.mqttExpandedTopicKey:"",r=ts(e),n=e.map(i=>{let l=es(i.topicKey),p=l||"Wordt geladen...",u=Kh(i.ageKey),c=aa(i.topicKey),m=k(i.validKey),b=t.mqttCopiedTopicKey===i.topicKey,y=o===i.topicKey,v=t.mqttInputToggleBusyKey===i.topicKey,g=c?m?"valid":"invalid":"disabled",f=c?m?"geldig":"ongeldig":"uit",w=c?Xi(i.validKey):"Uitgeschakeld",S=c?m?`Laatste MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${i.staleCopy} ongeldig.`:u==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${u} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",q=c?"Topic uitschakelen":"Topic gebruiken";return`
        <article class="oq-settings-mqtt-sensor-row${y?" is-open":""}${c?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(i.topicKey)}"
            aria-expanded="${y?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(i.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">${c?Bh(i):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}</span>
            <em
              class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${g}"
              title="${s(S)}"
              aria-label="${s(w)}: ${s(S)}"
            >${s(f)}</em>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${c?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(i.topicKey)}"
              aria-pressed="${c?"true":"false"}"
              aria-label="${s(`${i.label}: ${q}`)}"
              title="${s(q)}"
              ${v||!t.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${y?`
            <div class="oq-settings-mqtt-sensor-topic">
              <div class="oq-settings-mqtt-sensor-topic-head">
                <span class="oq-settings-mqtt-sensor-topic-label">Subscribe-topic</span>
              </div>
              <div class="oq-settings-mqtt-topic-row">
                <div class="oq-settings-mqtt-topic-field${b?" is-copied":""}">
                  <code>${s(p)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(i.topicKey)}"
                    aria-label="${s(b?`MQTT-topic voor ${i.label} gekopieerd`:`Kopieer MQTT-topic voor ${i.label}`)}"
                    title="${b?"Gekopieerd":"Kopieer topic"}"
                    ${l?"":"disabled"}
                  >
                    ${tt(b?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
                  </button>
                </div>
                <details class="oq-settings-mqtt-topic-info">
                  <summary aria-label="${s(`Payloadinformatie voor ${i.label}`)}">i</summary>
                  <div class="oq-settings-mqtt-topic-info-popover">
                    <strong>${s(i.payloadInfoTitle||"Payload")}</strong>
                    <p>${s(i.payloadInfo||"")}</p>
                  </div>
                </details>
              </div>
            </div>
          `:""}
        </article>
      `}).join(""),a=t.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--mqtt-sensors" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-sensors-modal-title">
          <div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${jh("oq-settings-mqtt-modal-logo")}</span>
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-sensors-modal-title">MQTT sensoren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT sensoren">\xD7</button>
          </div>
          ${a}
          <div class="oq-settings-mqtt-sensor-table">
            <div class="oq-settings-mqtt-sensor-table-head" aria-hidden="true">
              <span>Sensor</span>
              <span>Waarde</span>
              <span>Status</span>
              <span></span>
              <span></span>
            </div>
            ${n}
          </div>
          <div class="oq-settings-mqtt-sensor-footer">
            <span>${s(r)}</span>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function jh(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function os(e=t.mqttStatus||{}){let o=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(o),JSON.stringify(r),String(e.source||""),String(e.csrf_token||"")].join(":")}function ia(){return[t.systemModal,t.mqttExpandedTopicKey||"",t.mqttCopiedTopicKey||"",t.mqttInputToggleBusyKey||"",t.mqttError||"",os(),K("mqttCoolingDewPoint"),K("mqttCoolingDewPointAge"),K("mqttCoolingDewPointValid"),K("mqttOutsideTemperature"),K("mqttOutsideTemperatureAge"),K("mqttOutsideTemperatureValid"),K("mqttRoomTemperature"),K("mqttRoomTemperatureAge"),K("mqttRoomTemperatureValid"),K("mqttRoomSetpoint"),K("mqttRoomSetpointAge"),K("mqttRoomSetpointValid"),K("mqttHeatingEnable"),K("mqttHeatingEnableAge"),K("mqttHeatingEnableValid"),K("mqttCoolingEnable"),K("mqttCoolingEnableAge"),K("mqttCoolingEnableValid")].join("|")}function rs(){let e=t.mqttStatus||{};t.mqttDraftEnabled=e.enabled===!0,t.mqttDraftBroker=String(e.broker||""),t.mqttDraftPort=String(e.port||1883),t.mqttDraftUsername=String(e.username||""),t.mqttDraftPassword="",t.mqttDraftClearPassword=!1,t.mqttDraftDirty=!1}function Ru(e){let o=e?.dataset?.oqMqttField;if(!o)return!1;if(t.mqttNotice="",t.mqttError="",t.mqttDraftDirty=!0,o==="enabled")t.mqttDraftEnabled=!!e.checked;else if(o==="broker")t.mqttDraftBroker=String(e.value||"");else if(o==="port")t.mqttDraftPort=String(e.value||"");else if(o==="username")t.mqttDraftUsername=String(e.value||"");else if(o==="password")t.mqttDraftPassword=String(e.value||"");else if(o==="clear-password"){t.mqttDraftClearPassword=!!e.checked,t.mqttDraftClearPassword&&(t.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=t.mqttDraftPassword,r.disabled=t.mqttBusy||t.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function Pu(){return t.systemModal==="mqtt"||t.systemModal==="mqtt-sensors"||Ic()}async function Eo(e={}){if(!Ir(t.lastMqttStatusRefreshAt,e))return!1;t.lastMqttStatusRefreshAt=Date.now();try{let o=await fetch("/mqtt/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([b,y])=>{a[String(b)]=String(y||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([b,y])=>{l[String(b)]=y!==!1&&String(y).toLowerCase()!=="false"});let p=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=p;let u={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:p,input_topics:a,input_enabled:l,source:String(r.source||""),csrf_token:String(r.csrf_token||"")},c=os(),m=os(u);return t.mqttStatus=u,c!==m&&(t.systemModal==="mqtt"&&t.mqttDraftDirty||rs(),t.mqttNotice=""),t.mqttError="",c!==m}catch(o){return t.mqttError=`MQTT-status kon niet worden geladen. ${o.message}`,!1}}async function Nu(e="cooling_dew_point"){let o=es(e);if(!o){t.mqttError="MQTT-topic is nog niet geladen.",t.mqttCopiedTopicKey="",d();return}try{let r=await jt(o);t.mqttNotice="",t.mqttError=r?"":"Kopi\xEBren is niet gelukt.",t.mqttCopiedTopicKey=r?e:"",t.mqttCopiedTopicTimer&&window.clearTimeout(t.mqttCopiedTopicTimer),r&&(t.mqttCopiedTopicTimer=window.setTimeout(()=>{t.mqttCopiedTopicKey="",t.mqttCopiedTopicTimer=null,t.systemModal==="mqtt-sensors"&&d()},1800))}catch(r){t.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,t.mqttCopiedTopicKey=""}d()}async function Ou(e,o){let r=t.mqttStatus||{};if(!r.csrf_token){t.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",d();return}t.mqttInputToggleBusyKey=e,t.mqttNotice="",t.mqttError="",d();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",o?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);t.lastMqttStatusRefreshAt=0,await Eo({force:!0})}catch(n){t.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{t.mqttInputToggleBusyKey===e&&(t.mqttInputToggleBusyKey=""),d()}}async function Du(){let e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,r=String(t.mqttDraftBroker||"").trim(),n=Number(String(t.mqttDraftPort||"").trim()),a=String(t.mqttDraftUsername||"").trim(),i=!!t.mqttDraftClearPassword,l=i?"":String(t.mqttDraftPassword||"");if(!e.csrf_token){t.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",d();return}if(!Number.isInteger(n)||n<1||n>65535){t.mqttError="Vul een geldige poort in.",d();return}if(o&&!r){t.mqttError="Vul een broker in als je MQTT inschakelt.",d();return}t.mqttBusy=!0,t.mqttNotice="",t.mqttError="",d();try{let p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("enabled",o?"true":"false"),p.set("broker",r),p.set("port",String(n)),p.set("username",a),p.set("password",l),p.set("clear_password",i?"true":"false");let u=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);t.mqttDraftDirty=!1,await Eo({force:!0}),t.mqttDraftPassword="",t.mqttDraftClearPassword=!1,t.mqttNotice=o?"MQTT inputbronnen staan aan.":"MQTT-configuratie opgeslagen.",t.mqttError="",d()}catch(p){t.mqttError=`Opslaan is mislukt. ${p.message}`,d()}finally{t.mqttBusy=!1,d()}}function Gu(){if(t.nativeOpen||t.appView!=="settings")return;let e=()=>{if(!(t.nativeOpen||t.appView!=="settings")){if(t.loadingEntities||t.focusedField||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock){window.setTimeout(Gu,250);return}ue({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function zu(){if(t.nativeOpen||!ls()||t.overviewMetadataHydrated||t.overviewMetadataHydrating)return!1;let e=uf();if(!e.length)return t.overviewMetadataHydrated=!0,!1;t.overviewMetadataHydrating=!0;try{return await L(e,"all",{concurrency:Et}),t.overviewMetadataHydrated=!0,!0}catch{return!1}finally{t.overviewMetadataHydrating=!1,t.mounted&&!t.nativeOpen&&d()}}async function Uh(e,o="state"){if(!(!e.length||t.nativeOpen)){t.entitySyncInFlight=!0;try{await L(e,o,{concurrency:o==="all"?Et:Ct})}finally{t.entitySyncInFlight=!1;let r=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,r&&!t.nativeOpen&&window.setTimeout(()=>{ue(r)},0)}t.mounted&&!t.nativeOpen&&d()}}async function Gh(){if(!t.nativeOpen)try{ls()&&await zu(),(t.appView==="overview"||t.appView==="diagnosis")&&await Qi({force:!0}),t.appView==="results"&&await na({force:!0}),await qo({force:!0}),$t()&&await Promise.all([zt({force:!0}),Su({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{t.mounted&&!t.nativeOpen&&d(),Gu()}}async function Qu(){if(t.nativeOpen)return;t.loadingEntities=!0,d();let e=Qh();e>0&&await new Promise(i=>window.setTimeout(i,e));let o=xf(),r=$f(o),n=t.appView==="settings"?"all":"state";try{await L(o,n,{concurrency:n==="all"?Et:Ct}),t.appView==="settings"?await mf():await df()}finally{t.loadingEntities=!1,d()}let a=t.appView==="settings"?"all":"state";window.setTimeout(()=>{Uh(r,a)},rf),Ju(is())}var Lu={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled"]},zh={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Be,...Ko,...bo,...vi,...$r,...Ar,"maxWater",...Wn],service:[...Hr,...Bn,...$r,...Ar,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...pt,...fo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...yi],integrations:[...mi,...hi,...gi,...fi,...Rr,...bi,...di],system:["setupComplete",...kt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled",...Qo,"webServerLogHistoryEnabled","debugLevel"]};function Co(){return[...new Set(["setupComplete",...Un])]}function Qh(){let e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}var Yu=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],Yh=["strategy","controlModeLabel","hpGeneration"],Zh=["totalPower","flowSelected"],Jh=["totalHeat","totalCoolingPower"],Xh=2e3,ef=250,tf=5e3,of=250;function as(e=t.settingsGroup){let o=xe.has(e)?e:de[0].id;return[...new Set(["setupComplete","strategy",...Ke,...zh[o]||[]])]}function Zu(){let e=xe.has(t.settingsGroup)?t.settingsGroup:de[0].id;return[...new Set(Lu[e]||Lu.installation)]}var rf=1200,nf=1800,af=0,sf=3500;function ns(){return["setupComplete","strategy",...Ke]}function lf(){let e=new Set;return jn.forEach(o=>{(o.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function zr(e,o={}){let r=o.forceFast===!0,n=o.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...ns(),...e==="energy"?Yu:[],...lf(),...e==="results"?Gi:[]])]:[...new Set([...ns(),...r||!n?wi:Nr,...e==="diagnosis"?Ui:[]])]}function is(e=t.appView){return e==="diagnosis"||e==="results"||e==="settings"&&$t()?af:nf}function Ju(e=is()){t.nativeOpen||(t.supplementaryPrimeTimer&&window.clearTimeout(t.supplementaryPrimeTimer),t.supplementaryPrimeTimer=window.setTimeout(()=>{t.supplementaryPrimeTimer=null,Gh()},e))}function cf(e={}){let o=t.pendingEntitySyncOptions||{},r={...o,...e};o.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(o.forceFast||e.forceFast)&&(r.forceFast=!0),t.pendingEntitySyncOptions=r}function ss(e){let o=String(E(e)??"").trim().toLowerCase();return o!==""&&o!=="unknown"&&o!=="unavailable"&&o!=="nan"}function Fu(e){return ss(e)&&Number.isFinite(Ee(E(e)))}function ls(){return t.appView==="overview"||t.appView==="diagnosis"||t.appView==="energy"}function uf(){return fc.filter(e=>{let o=t.entities[e];return o?!String(o.uom??o.unit_of_measurement??"").trim():!R[e]?.optional})}function Iu(){return ls()?Yh.every(ss)&&Zh.every(Fu)&&Jh.some(Fu):!0}function pf(){return t.appView==="settings"}function _u(){return pf()?Zu().every(e=>R[e]?.optional&&!t.entities[e]?!0:ss(e)):!0}async function df(){if(Iu())return;let e=Date.now()+Xh;for(;!t.nativeOpen&&!Iu()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,ef));try{await L(Yu,"state")}catch{return}}}async function mf(){if(_u())return;let e=Date.now()+tf;for(;!t.nativeOpen&&!_u()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,of));try{await L(Zu(),"all")}catch{return}}}var gf=8e3,Xu=3e3,Wu="/openquatt/entities",hf=900,Vu="/openquatt/service/status";function ep(){return t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint?Xu:gf}function cs(e){let o=String(e||"").toLowerCase();return o.includes("failed to fetch")||o.includes("load failed")||o.includes("networkerror")||o.includes("network request failed")||o.includes("connection refused")||o.includes("connection reset")||o.includes("err_connection")||o.includes("timeout")}var ff=300*1e3;function bf(){if(t.optionalMissingEntities)for(let e of Object.keys(t.optionalMissingEntities))delete t.optionalMissingEntities[e]}function Bu(){let e=Date.now();t.lastEntitySyncAt=e,t.lastEntitySyncSuccessAt=e,t.entitySyncFailureCount=0,!!t.deviceReconnectMode&&typeof Pi=="function"&&Pi()&&(t.lastFastEntitySyncAt=0,t.lastBulkEntitySyncAt=0,t.lastStaticEntitySyncAt=0,t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,typeof Ji=="function"?Ji():(Yi(),Zi(),t.webServerLogEnabled=null,t.webServerLogConnected=!1),bf())}function tp(e){if(!cs(e)){t.entitySyncFailureCount=0,Ni();return}t.entitySyncFailureCount=Number(t.entitySyncFailureCount||0)+1,t.deviceReconnectLastError=String(e||""),(t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||t.entitySyncFailureCount>=2)&&Gt(t.updateInstallBusy||t.updateInstallPhaseHint?"ota":t.busyAction==="restartAction"?"restart":"reconnect",e)}function yf(e=Date.now(),o={}){if(o.forceProbe===!0||t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||Number(t.entitySyncFailureCount||0)>0)return!0;let r=Number(t.lastEntitySyncSuccessAt||t.lastEntitySyncAt||t.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?Dr:qc;return e-r>=n}async function vf(){let e=R.status||R.setupComplete;if(!e)return{ok:!0,message:""};let o=t.deviceReconnectMode?Xu:Sc,r=U(e.domain,e.name);if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),o);try{let i=await fetch(r,{cache:"no-store",signal:n.signal});return t.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:n.signal.aborted?`${e.name} request timed out after ${o}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{let n=await fetch(r,{cache:"no-store"});return t.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function wf(e,o=Date.now()){let r=t.optionalMissingEntities?.[e];return!R[e]?.optional||!r?!1:o-Number(r)<ff}function Sf(e,o=Date.now()){t.optionalMissingEntities&&(t.optionalMissingEntities[e]=o)}function qf(e){let o=R[e];return o?`${e}	${o.domain}	${o.name}`:""}function Ku(e,o){let r=new URLSearchParams;return r.set("detail",o==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function us(e,o){let r=[],n=[],a=[],i="";return e.forEach(l=>{let p=qf(l);if(!p)return;let u=[...a,p],c=Ku(u,o);if(a.length&&c.length>hf){r.push({keys:n,body:i}),n=[l],a=[p],i=Ku(a,o);return}n=[...n,l],a=u,i=c}),a.length&&r.push({keys:n,body:i}),r}async function Tf(e){let o=ep(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){let a=new AbortController,i=window.setTimeout(()=>a.abort(),o);try{let l=await fetch(Wu,{...r,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${o}ms`):l}finally{window.clearTimeout(i)}}let n=await fetch(Wu,r);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function Ef(){let e=ep(),o={cache:"no-store",headers:{"Cache-Control":"no-store"}};if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),e);try{let i=await fetch(Vu,{...o,signal:n.signal});if(!i.ok)throw new Error(`service status HTTP ${i.status}`);return i.json()}catch(i){throw n.signal.aborted?new Error(`service status request timed out after ${e}ms`):i}finally{window.clearTimeout(a)}}let r=await fetch(Vu,o);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}function Cf(e={}){let o=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(o).forEach(([r,n])=>{Mr.has(r)&&(t.optionalMissingEntities&&delete t.optionalMissingEntities[r],t.entities[r]=op(r,t.entities[r],n))})}async function kf(e){if(!e.length)return{ok:!0,message:""};try{let o=await Ef();return Cf(o),t.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(o){return{ok:!1,message:o.message||String(o)}}}async function L(e,o="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(w=>a||Mr.has(w)||!wf(w,n));if(!i.length)return;let l=i.filter(w=>Mr.has(w)),p=i.filter(w=>!Mr.has(w)),c=(await kf(l)).ok?p:[...p,...l];if(!c.length){ju(),Gr(At()),t.busyAction||(Bu(),t.controlError="");return}let m=Number(r.concurrency),b=Number.isFinite(m)&&m>0?Math.floor(m):Et,y=us(c,o),v=Math.max(1,Math.min(b,Et)),g=[];for(let w=0;w<y.length;w+=v){let S=y.slice(w,w+v),q=await Promise.allSettled(S.map(async C=>({chunk:C,payload:await Tf(C)})));g.push(...q)}g.some(w=>w.status==="fulfilled")&&(t.lastEntityResponseAt=Date.now());let f="";g.forEach(w=>{if(w.status!=="fulfilled"){let H=w.reason.message||String(w.reason);f||(f=H);return}let{chunk:S,payload:q}=w.value,C=q?.entities&&typeof q.entities=="object"?q.entities:{},$=new Set(Array.isArray(q?.missing)?q.missing:[]);S.keys.forEach(H=>{if(Object.prototype.hasOwnProperty.call(C,H)){t.optionalMissingEntities&&delete t.optionalMissingEntities[H],t.entities[H]=op(H,t.entities[H],C[H]);return}let W=R[H];W?.optional?$.has(H)&&Sf(H,n):f||(f=`${W?.name||H} ontbreekt in bulk response`)})}),ju(),Gr(At()),f?(tp(f),t.deviceReconnectMode?t.controlError="":t.controlError=`Niet alle helpervelden konden worden ververst. ${f}`):t.busyAction||(Bu(),t.controlError="")}function op(e,o={},r={}){let n={...o||{},...r||{}};return R[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(o?.state??"").trim()&&(n.state=o.state),!String(r.value??"").trim()&&String(o?.value??"").trim()&&(n.value=o.value),!Array.isArray(r.option)&&Array.isArray(o?.option)&&(n.option=o.option),!Array.isArray(r.options)&&Array.isArray(o?.options)&&(n.options=o.options)),n}function ju(){t.complete=Yn(),t.stage=t.complete===!0?"Gereed":t.complete===!1?"Quick Start":"Laden...",t.summary=Mc(),t.appView==="diagnosis"&&!rt()&&mt(Qt(),{syncMode:"replace",forceSync:!0}),t.appView||mt(jr()||Qt(),{syncMode:"replace",forceSync:!0})}function xf(){let e=ns();return t.appView==="settings"?[...new Set([...e,...as()])]:t.appView==="energy"||t.appView==="results"?zr(t.appView,{forceFast:!0}):t.appView==="overview"||t.appView==="diagnosis"?zr(t.appView,{forceFast:!0}):[...new Set(e)]}function $f(e=[]){let o=new Set(e);return(t.appView==="settings"?as():t.appView==="overview"||t.appView==="diagnosis"?[...new Set([...zr(t.appView,{includeBulk:!0}),...kt])]:t.appView==="energy"||t.appView==="results"?[...new Set([...zr(t.appView,{forceFast:!0}),...kt])]:[...new Set(["setupComplete","strategy",...Ke])]).filter(n=>!o.has(n))}function Uu(e=Date.now(),o={}){return o.forceBulk===!0?!0:e-Number(t.lastBulkEntitySyncAt||0)>=vc}async function ue(e={}){if(t.nativeOpen||t.loadingEntities||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock)return;if(t.updateInstallBusy||oa()){t.pendingEntitySyncOptions=null;return}if(t.focusedField&&t.appView!=="settings")return;if(t.entitySyncInFlight){cf(e);return}let o=Date.now();if(document.hidden&&o-Number(t.lastEntitySyncAttemptAt||0)<Dr)return;let r=t.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,p=!l&&!n&&Uu(o,e),c=o-Number(t.lastStaticEntitySyncAt||0)>=wc||t.updateInstallBusy||t.updateInstallPhaseHint?kt:[],m=t.quickStartModalOpen&&t.currentStep==="flow-source"?ot:[],b=t.quickStartModalOpen&&t.currentStep==="thermostat-source"?ho:[],y=zi()?Zt():[],v=n?[...wi,...Ke,"setupComplete",...c]:i?[...zr(a,{forceFast:l,includeBulk:p}),...c]:r==="settings"?[...new Set([...as(),...y,...c])]:p?["setupComplete",...c,...Ke,"strategy",...go,...Be,...ae()?me.map(g=>g.key):pt]:["setupComplete",...Ke,"strategy",...c];t.entitySyncInFlight=!0,t.lastEntitySyncAttemptAt=o;try{let g=t.deviceReconnectMode,f=yf(o,e)?await vf():{ok:!0,message:""};if(!f.ok){tp(f.message),n||d();return}if(await L([...new Set([...v,...m,...b])],n?"state":r==="settings"?"all":"state",{concurrency:l&&i?Ct:Et}),t.lastFastEntitySyncAt=Date.now(),p&&(a==="overview"||a==="diagnosis")&&!n&&(t.lastBulkEntitySyncAt=t.lastFastEntitySyncAt),c.length&&(t.lastStaticEntitySyncAt=t.lastFastEntitySyncAt),n)return;i&&!t.overviewMetadataHydrated&&!t.overviewMetadataHydrating&&zu();let w=g!==t.deviceReconnectMode,S=l&&i,q=S?!1:a==="overview"||a==="diagnosis"?await Qi():!1,C=S?!1:t.appView==="results"?await na():!1,$=S?!1:zi()?(await Promise.all([wu(),na({metaOnly:!0})])).some(Boolean):!1,H=S||!Wc()?!1:await qo(),W=S||!Vc()?!1:await zt(),B=S||!Pu()?!1:await Eo(),M=fu();if(S&&!t.nativeOpen&&Ju(is(a)),w){d();return}if(q&&t.appView==="diagnosis"&&!t.root?.querySelector(".oq-overview-trends")){d();return}if(C&&t.appView==="results"&&!t.root?.querySelector(".oq-energy-history")){d();return}if($&&t.appView==="settings"){d();return}if(H&&(t.systemModal==="login"||$t())){d();return}if(W&&t.appView==="settings"){d();return}if(t.systemModal==="mqtt-sensors"){ia()!==t.mqttSensorsModalRenderSignature&&d();return}if(B&&t.appView==="settings"){d();return}let I=!!(t.updateModalOpen||t.systemModal||t.interfacePanelOpen);if(M!==t.headerRenderSignature)if(I&&Ki())t.headerRenderSignature=M;else{d();return}else Ki();if(t.appView==="settings"&&String(t.systemModal||"").startsWith("service-task-")){_r()!==t.settingsRenderSignature&&d();return}if(I)return;if(t.appView==="settings"){let z=_r();if(z!==t.settingsRenderSignature&&!t.focusedField){d();return}if(!yu()){t.focusedField||d();return}t.focusedField&&(t.settingsRenderSignature=z);return}if(t.appView==="diagnosis"){Cu()||d();return}if(t.appView==="energy"){qu()||d();return}if(t.appView==="results"){Tu()||d();return}Eu()||d()}catch(g){n||(t.controlError=`Helperstatus kon niet worden geladen. ${g.message}`,d())}finally{t.entitySyncInFlight=!1;let g=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,g&&!t.nativeOpen&&window.setTimeout(()=>{ue(g)},0),l&&(a==="overview"||a==="diagnosis")&&!n&&!t.nativeOpen&&!g&&Uu(Date.now())&&window.setTimeout(()=>{ue({forceBulk:!0})},sf)}}function ht(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function Af(){let e=String(E("hpGeneration")||"").trim();return e||""}function Qr(e){let o=String(e||"").trim().toLowerCase();return o==="single"||o.includes("quatt single")||o.includes("openquatt single")?"single":o==="duo"||o.includes("quatt duo")||o.includes("openquatt duo")?"duo":""}function Hf(){if(!Array.isArray(jo))return"";if(jo.some(o=>h(o)))return"duo";let e=t.optionalMissingEntities||{};return jo.every(o=>e[o])?"single":""}function ps(e){let o=Qr(e);return(o==="single"||o==="duo")&&typeof t<"u"&&t&&typeof t=="object"&&(t.lastKnownInstallationTopology=o),o}function Mf(){if(typeof t<"u"&&t&&typeof t=="object"){let e=String(t.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function ee(){let e=Qr(E("installationTopology"));if(e==="single"||e==="duo")return ps(e);let o=Qr(ht().installation);if(o==="single"||o==="duo")return ps(o);let r=Hf();return r?ps(r):Mf()}function at(){let e=ee(),o=Af();return e==="single"?o?`Quatt Single ${o}`:"Quatt Single":e==="duo"?o?`Quatt Duo ${o}`:"Quatt Duo":o?`Quatt Hybrid ${o}`:"Quatt Hybrid"}function Ne(){return"OpenQuatt"}function ds(e){let o=String(e||"").trim().toLowerCase();return o==="wifi"||o==="wi-fi"||o.includes("wifi")||o.includes("wi-fi")?"wifi":o==="eth"||o==="ethernet"||o.includes("ethernet")?"eth":""}function Ge(e=Jt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function ko(e=ee()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Yr(){let e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(ht().hardwareProfile||e).trim().toLowerCase()}function Jt(){return ds(E("connectionText")||ht().connection)}function rp(){let e=Jt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function np(){let e=ee();return e==="single"?"duo":e==="duo"?"single":""}function Zo(e=ee(),o=Jt()){let r=ko(e),n=Yr();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${Ge(o)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${Ge(o)}`:n==="waveshare"?`Waveshare ${r} ${Ge(o)}`:`${Ne()} ${r} ${Ge(o)}`}function ms(){let e=k("timeValid"),o=String(E("timeNowHhmm")||"").trim();if(o&&o!=="invalid")return o;if(h("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function la(){return h("timeValid")&&!k("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${ms()}`}function sa(e){if(!Number.isFinite(e)||e<0)return"\u2014";let o=Math.floor(e),r=Math.floor(o/1440),n=Math.floor(o%1440/60),a=o%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function Rf(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function Pf(e){let o=e?.state;if(o!==""&&o!==null&&o!==void 0){let a=Number(o);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function Jo(){let e=Pf(t.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=Rf(t.entities.uptime);if(n==="d")return sa(e*1440);if(n==="h")return sa(e*60);if(n==="s")return sa(e/60)}let o=String(t.entities.uptimeReadable?.state??t.entities.uptimeReadable?.value??"").trim();if(o&&o.toLowerCase()!=="unknown")return o;let r=Number(ht().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":sa((Date.now()-r)/6e4)}function Xo(){let e=String(t.entities.ipAddress?.state??t.entities.ipAddress?.value??"").trim();if(e)return e;let o=String(ht().ipAddress||"").trim();return o||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function Xt({key:e,value:o,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
    <label class="${n}">
      <input
        class="${a}"
        type="number"
        data-oq-field="${s(e)}"
        min="${r.min}"
        max="${r.max}"
        step="${r.step}"
        value="${s(o)}"
        ${i}
        ${t.loadingEntities?"disabled":""}
      >
      ${l}
    </label>
  `}function eo(e,o,r){return r?`
    <div class="oq-settings-info${t.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
      <button
        class="oq-settings-info-button"
        type="button"
        data-oq-action="toggle-settings-info"
        data-info-id="${s(e)}"
        aria-label="${s(`Uitleg bij ${o}`)}"
        aria-expanded="${t.settingsInfoOpen===e?"true":"false"}"
      >i</button>
      <div class="oq-settings-info-popover" ${t.settingsInfoOpen===e?"":"hidden"}>
        <p>${s(r)}</p>
      </div>
    </div>
  `:""}function pe(e,o,r,n,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(o)}</h3>${eo(e,o,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function Ce(e,o,r,n,a=""){return pe(e,o,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function $e({label:e,value:o,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let p=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,u=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${p}"${u}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(o)}</strong></div>`:`<div class="${p}"${u}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(o)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function Te(e,o={}){let r=typeof o=="number"?{decimals:o}:o||{},n=t.entities[e];if(!n)return"\u2014";let a=Number(n.value);if(!Number.isNaN(a)){let p=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,u=a.toFixed(Math.max(0,p));return r.trimTrailingZeros&&u.includes(".")&&(u=u.replace(/\.?0+$/,"")),`${u}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function er(e,o="\u2014"){let r=t.entities[e];if(!r)return o;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?o:n}function Mt(e,o="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${o?` ${o}`:""}`:"\u2014"}function be(e,o=2){return Te(e,{decimals:o})}function xo(e,o="IDLE"){let r=er(e,o),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?o:n}function ca(){let e=er("commissioningStatus",""),o=k("cm100Active"),r=String(e||"").trim().toUpperCase();return(o||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(t.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&t.pendingCommissioningCm100Start?"CM100 REQUESTED":r:t.pendingCommissioningCm100Start?"CM100 REQUESTED":o?"CM100 READY":"IDLE"}function qe(e){let o=String(e||"").trim();return o?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[In]:"Stooklijn",[Fn]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[o]||o:""}function tr({key:e,option:o,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:p="",infoTitle:u="",infoCopy:c="",infoId:m=""}){let b=o===r,y=`
    <button
      class="oq-settings-choice-card${b?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${c?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(o)}"
      aria-pressed="${b?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(qe(o))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(p||qe(o))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!c)return y;let v=u||qe(o),g=m||`${e}-${o}`;return`
    <article class="oq-settings-choice-card-shell${b?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${y}
      ${eo(g,v,c)}
    </article>
  `}function Rt(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function to(e,o,r,n=""){if(!h(e))return"";let a=t.entities[e]||{},i=String(E(e)||""),l=Rt(a);return pe(e,o,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${t.loadingEntities?"disabled":""}>${l.map(p=>`<option value="${s(p)}" ${p===i?"selected":""}>${s(qe(p))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function Nf(e,o,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${o?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(o?r:n)}</span>`}function Pt(e,o,r,n,a="Aan",i="Uit",l=!0){let p=r?a:i,u=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?Nf(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(u)}"
        data-switch-title="${s(o)}"
        data-on-label="${s(a)}"
        data-off-label="${s(i)}"
        aria-checked="${r?"true":"false"}"
        aria-label="${s(`${o}: ${p}`)}"
        ${n?"disabled":""}
      >
        <span class="oq-settings-toggle-switch-track" aria-hidden="true">
          <span class="oq-settings-toggle-switch-knob"></span>
        </span>
      </button>
    </div>
  `}function gs(e,o,r="",n=""){let a=o?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function ap(e,o,r,n="",a="",i=""){if(!h(e))return"";let l=!!E(e),p=t.loadingEntities||t.busyAction===`switch-${e}`;return pe(e,o,r,`
      <div class="oq-settings-compact-switch-field">
        ${Pt(e,o,l,p)}
        ${gs(e,l,n,a)}
      </div>
    `,i)}function ip(e,o,r,n,a=""){if(!h(e))return"";let i=!!E(e),l=t.loadingEntities||t.busyAction===`switch-${e}`;return pe(e,o,r,`
      <div class="oq-settings-compact-switch-field">
        ${Pt(e,o,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function ua(e,o,r){if(!h(e))return"";let n=!!E(e),a=t.loadingEntities||t.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(o)}</h4>
      </div>
      <p>${s(r)}</p>
      ${Pt(e,o,n,a)}
    </article>
  `}function We(e,o,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(o)}
    </button>
  `}function $o({active:e,startKey:o,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:p=!1,stopDisabled:u=!1}){return We(e?r:o,e?a:n,e?l:i,e?u:p)}function sp(e,o,r,n,a=""){if(!h(e))return"";let i=t.entities[e]||{},l=String(E(e)||""),p=Rt(i),u=t.loadingEntities||t.busyAction===`save-${e}`,c=`
    <div class="oq-settings-choice-grid">
      ${p.map(m=>{let b=n[m]||"",y=typeof b=="string"?b:b.copy||"",v=typeof b=="string"?"":b.image||"",g=typeof b=="string"?"":b.alt||"";return tr({key:e,option:m,currentValue:l,busy:u,copy:y,image:v,imageAlt:g})}).join("")}
    </div>
  `;return pe(e,o,r,c,a)}function ie(e,o,r,n="",a={}){if(!h(e))return"";let i=Me(e),l=we(e),p=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!p,c=u&&a.unitMode!=="outside",m=Xt({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!c?" oq-helper-control--split":""}${c?" oq-helper-control--suffix":""}`,unitMarkup:u?c?`<span class="oq-helper-unit-chip">${s(p)}</span>`:`<span class="oq-helper-unit">${s(p)}</span>`:""});return pe(e,o,r,m,n,a.footerMarkup||"")}function ze(e,o,r,n="",a={}){if(!h(e))return"";let i=Me(e),l=fe(e,E(e)),p=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,c=a.valueLabel||j(e,l);return pe(e,o,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(p)}</span><strong>${s(c)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${t.loadingEntities?"disabled":""}></label>`,n)}function hs(e,o,r,n={}){if(!h(e))return"";let a=Me(e),i=we(e),l=n.compact===!0,p=n.embedded===!0,u=n.infoId||e,c=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${p?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(o)}</h5>
          ${r?eo(u,o,r):""}
        </div>
        ${r&&c?`<p>${s(r)}</p>`:""}
      </div>
      ${Xt({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function fs(e,o,r,n=""){if(!h(e))return"";let a=Lr(E(e));return pe(e,o,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${t.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function te(e,o,r,n,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(o)}</h3><p>${s(r)}</p></div>${n}</section>`}var lp=250;function cp(){if(typeof window>"u")return[];let e=window.__OQ_DEV_WEBSERVER_LOGS__,o=typeof e=="function"?e():e;return Array.isArray(o)?o.map(r=>String(r||"")).filter(r=>r.trim()!==""):[]}function or(){return typeof window>"u"?!1:cp().length>0}function Of(){return`${Re()}/events`}function Df(){return`${Re()}/openquatt/logs/recent`}function pa(){let e=t.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function da(){return t.nativeOpen?"Niet beschikbaar":or()?"Voorbeeld":t.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function Lf(e){let o=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(o/3600),n=Math.floor(o%3600/60),a=o%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function up(e){let o=Number(e)||0;if(o>9466848e5){let r=e instanceof Date?e:new Date(o),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return Lf(o)}function Ff(e){let o=Number(e)||0;if(o>9466848e5)return new Date(o).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(o/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function If(){return t.nativeOpen?"Niet beschikbaar":or()?pa()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":pa()?"Buffer aan":"Buffer uit"}function _f(){return pa()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function bs(){return t.entities?.debugLevel||null}function pp(e=bs()){let o=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return o.length?o:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function Wf(e=bs()){let o=String(e?.value??e?.state??"").trim(),r=pp(e);return r.includes(o)?o:r.includes("INFO")?"INFO":r[0]||""}function dp(e,o=null){if(!e||!o)return!1;let r=Number(e.seq),n=Number(o.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(o.raw??o.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),p=Number(o.receivedAt??o.ts??0);return Math.abs(l-p)<=2e3}function Vf(e,o){let r=Number(e.receivedAt??e.ts??0),n=Number(o.receivedAt??o.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(o.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(o.raw??""))}function mp(e,{prepend:o=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=o?[...e,...t.webServerLogEntries]:[...t.webServerLogEntries,...e];r.sort(Vf);let n=[];for(let a of r){let i=n[n.length-1]||null;dp(a,i)||n.push(a)}t.webServerLogEntries=n.slice(-lp)}function ys(e,o={}){let r=sb(e).trimEnd(),n=Number(o.receivedAt),a=Number(o.seq);return{raw:e,text:r,tone:lb(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Bf(e,o){let n=Math.max(0,o-e-1)*9e4;return Date.now()-n}function Kf(){let e=cp(),o=e.length;return e.map((r,n)=>ys(r,{receivedAt:Bf(n,o),seq:n+1}))}function jf(){let e=ma();e&&(e.scrollTop=e.scrollHeight)}function Nt(){let e=ma();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ga(e)}:null}function Uf(e){if(!e)return;let o=ma();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function Ot(e,o=!0){if(!e)return;let r=Number(t.webServerLogScrollRestoreToken||0)+1;t.webServerLogScrollRestoreToken=r;let n=()=>{t.webServerLogScrollRestoreToken!==r||t.systemModal!=="webserver-logs"||Uf(e)};if(o){window.requestAnimationFrame(n);return}n()}function gp(){return t.root?t.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function hp(){let e=gp();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ga(e)}:null}function Gf(e){if(!e)return;let o=gp();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function vs(e,o=!0){if(!e)return;let r=Number(t.cm100CommissioningScrollRestoreToken||0)+1;t.cm100CommissioningScrollRestoreToken=r;let n=()=>{t.cm100CommissioningScrollRestoreToken!==r||t.systemModal!=="cm100-commissioning"||Gf(e)};if(o){window.requestAnimationFrame(n);return}n()}function fp(){return t.root?t.root.querySelector("[data-oq-service-task-scroller]"):null}function bp(){let e=fp();return e?{scrollTop:e.scrollTop}:null}function zf(e){if(!e)return;let o=fp();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function ws(e,o=!0){if(!e)return;let r=Number(t.serviceTaskModalScrollRestoreToken||0)+1;t.serviceTaskModalScrollRestoreToken=r;let n=()=>{t.serviceTaskModalScrollRestoreToken!==r||!String(t.systemModal||"").startsWith("service-task-")||zf(e)};if(o){window.requestAnimationFrame(n);return}n()}function yp(){return t.root?t.root.querySelector("[data-oq-history-storage-scroller]"):null}function vp(){let e=yp();return e?{scrollTop:e.scrollTop}:null}function Qf(e){if(!e)return;let o=yp();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function Ss(e,o=!0){if(!e)return;let r=Number(t.historyStorageModalScrollRestoreToken||0)+1;t.historyStorageModalScrollRestoreToken=r;let n=()=>{t.historyStorageModalScrollRestoreToken!==r||t.systemModal!=="history-storage"||Qf(e)};if(o){window.requestAnimationFrame(n);return}n()}async function Zr(e={}){if(t.nativeOpen||typeof window.fetch!="function")return;let o=e.scrollState||Nt(),r=Number(t.webServerLogHistoryRequestToken||0)+1;t.webServerLogHistoryRequestToken=r,t.webServerLogHistoryLoading=!0,t.webServerLogHistoryError="";try{let n=await window.fetch(Df(),{headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(t.systemModal!=="webserver-logs"||t.webServerLogHistoryRequestToken!==r)return;let i=Zf(a);t.webServerLogHistoryLoaded=!0,i.length>0&&(mp(i,{prepend:!0}),t.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),t.webServerLogRecentAnchorAt=Date.now())}catch(n){t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===r&&(t.webServerLogHistoryError=n instanceof Error?n.message:"Recente logs konden niet worden opgehaald.")}finally{t.webServerLogHistoryRequestToken===r&&(t.webServerLogHistoryLoading=!1),t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===r&&(d(),Ot(o))}}function Yf(e,o=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?ys(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??o)}):null}function Zf(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>Yf(r,n+1)).filter(r=>r!==null)}function Jf(e){if(!e||!Array.isArray(t.webServerLogRecentTail)||t.webServerLogRecentTail.length===0||Date.now()-Number(t.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?t.webServerLogRecentTail.includes(r):!1}function Xf(e,o=t.webServerLogEntries){return!e||!Array.isArray(o)||o.length===0?!1:o.some(r=>dp(e,r))}function wp(){or()&&t.webServerLogEntries.length===0&&(t.webServerLogEntries=Kf()),t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.systemModal="webserver-logs",d(),L(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(t.systemModal!=="webserver-logs")return;let e=Nt();d(),Ot(e)}),jf(),(!t.webServerLogHistoryLoaded||t.webServerLogEntries.length===0)&&Zr()}function Jr(){t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogHistoryError="",t.webServerLogHistoryLoading=!1,t.webServerLogHistoryLoaded=!1,t.webServerLogScrollRestoreToken=Number(t.webServerLogScrollRestoreToken||0)+1,t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.webServerLogHistoryRequestToken+=1,t.webServerLogRecentTail=[],t.webServerLogRecentAnchorAt=0,t.systemModal==="webserver-logs"&&d()}function eb(){let e=Nt();ft(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,Jr(),t.systemModal==="webserver-logs"&&Zr({scrollState:e})}function qs(){if(or()){ft();return}if(!(t.mounted&&!t.nativeOpen&&t.systemModal==="webserver-logs")){ft();return}if(t.webServerLogEnabled===!1){ft();return}t.webServerLogSource||tb()}function tb(){if(or()){t.webServerLogEnabled=!0,t.webServerLogConnected=!1,t.webServerLogError="",d();return}if(typeof window.EventSource!="function"){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="Deze browser ondersteunt geen live logstream.",d();return}try{let e=new window.EventSource(Of());t.webServerLogSource=e,e.addEventListener("open",ob),e.addEventListener("ping",rb),e.addEventListener("log",ab),e.onerror=nb}catch(e){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",ft(),d()}}function ft(){let e=t.webServerLogSource;if(e)try{e.close()}catch{}t.webServerLogSource=null,t.webServerLogConnected=!1}function ob(){if(!t.webServerLogSource||t.nativeOpen)return;let e=t.systemModal==="webserver-logs"?Nt():null;t.webServerLogEnabled=!0,t.webServerLogConnected=!0,t.webServerLogError="",d(),Ot(e)}ku({clearOutput:Jr,closeStream:ft,resetRecoveryState:eb});function rb(){if(!t.webServerLogSource||t.nativeOpen)return;let e=t.systemModal==="webserver-logs"?Nt():null;t.webServerLogEnabled=!0,t.webServerLogConnected||(t.webServerLogConnected=!0,t.webServerLogError="",d(),Ot(e))}function nb(){if(!t.webServerLogSource)return;let e=t.systemModal==="webserver-logs"?Nt():null;t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="De live logstream kon niet worden geopend.",ft(),d(),Ot(e)}function ab(e){if(!t.webServerLogSource||!e||typeof e.data!="string")return;let o=Nt(),r=ib(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(u=>u.trim()!=="");if(n.length===0)return;let i=n.map(u=>ys(u)).filter(u=>!Jf(u)&&!Xf(u));if(i.length===0)return;mp(i);let l=ub(),p=ma();cb(l),pb(i,l),t.webServerLogEnabled=!0,p&&o&&Ot(o,!1)}function ib(e){let o=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!o)return"";let r=o.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return o}function sb(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function lb(e){let o=String(e??""),r=Array.from(o.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(p=>Number(p)).filter(p=>Number.isFinite(p));for(let p=l.length-1;p>=0;p-=1){let u=l[p];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}let n=o.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function cb(e){for(;t.webServerLogEntries.length>lp;)t.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function ub(){return t.root?t.root.querySelector("[data-oq-webserver-log-output]"):null}function ma(){return t.root?t.root.querySelector("[data-oq-webserver-log-scroller]"):null}function ga(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function pb(e,o){if(!(!o||e.length===0)){o.dataset.webServerLogEmpty==="true"&&(o.dataset.webServerLogEmpty="false",o.innerHTML="");for(let r of e)o.insertAdjacentHTML("beforeend",Sp(r))}}function Sp(e){let o=up(e.receivedAt),r=Ff(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(o)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function db(e=t.webServerLogEntries){return e.length?e.map(o=>Sp(o)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function mb(){let e=[];return t.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),t.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(t.webServerLogCopyMessage)}</span>
      </div>
    `),t.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogCopyError)}</p>`),t.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogHistoryError)}</p>`),t.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogError)}</p>`),e.length?e.join(""):""}function gb(){let e=pa(),o=t.loadingEntities||t.busyAction==="switch-webServerLogHistoryEnabled",r=If(),n=_f(),a=hb();return`
    <div class="oq-webserver-log-history-shell">
      ${$e({dataValue:"webserverLogHistory",label:"RAM log history",value:r,note:n,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${o?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>`})}
      ${a}
    </div>
  `}function hb(){let e=bs();if(!e)return"";let o=pp(e),r=Wf(e),n=t.loadingEntities||t.busyAction==="save-debugLevel";return`
    ${$e({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",note:"Past het runtime logniveau aan voor nieuwe firmwaremeldingen.",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${o.map(a=>`<option value="${s(a)}" ${a===r?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function fb(){return t.webServerLogEntries.map(e=>{let o=String(e.raw??e.text??"").trimEnd();return o.trim()?`${up(e.receivedAt)} ${o}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function qp(){let e=fb();if(t.webServerLogCopyMessage="",t.webServerLogCopyError="",!e){t.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",d();return}try{if(!await jt(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.webServerLogCopyMessage=`${t.webServerLogEntries.length} logregel${t.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(o){t.webServerLogCopyError=o instanceof Error?o.message:"Kopi\xEBren naar het klembord is niet gelukt."}t.systemModal==="webserver-logs"&&d()}function Tp(){let e=or();return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${gb()}
        ${mb()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${t.webServerLogEntries.length===0?"true":"false"}">
            ${db()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${t.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function bb(){let e=t.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function kp(e){return bb().includes(e)}function fa(){let e=Yr(),o=ee(),r=Jt(),n=rp();return e!=="heatpump_controller_q"||o!=="single"&&o!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:h("firmwareUpdateTarget")&&kp("alternate connection")&&h("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:Ge(r),targetLabel:Ge(n),currentBuildLabel:Zo(o,r),targetBuildLabel:Zo(o,n)}}function ba(){let e=Yr(),o=ee(),r=np(),n=Jt(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||o!=="single"&&o!=="duo"||!r||!a.includes(n)?null:{canSwitch:h("firmwareUpdateTarget")&&kp("alternate topology")&&h("installFirmwareUpdateTarget"),currentTopology:o,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:ko(o),targetLabel:ko(r),currentBuildLabel:Zo(o,n),targetBuildLabel:Zo(r,n)}}function Ao(e=t.updateTestFirmwarePr){let o=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(o)?o:""}function nr(){let e=Yr(),o=ee(),r=Jt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||o!=="single"&&o!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${o}-${r}`,l=o==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${Ge(r)}`}}function en(e=Ao(),o=nr()){if(!e||!o.available)return null;let n=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${o.otaFileName}`;return{otaUrl:n,md5Url:`${n}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function ro(){if(Ye())return"Controleren";let e=Dt();if(e)return e.phaseLabel;if(Cs())return"Bijgewerkt";if(rr())return"Bezig";if(Ho())return"Beschikbaar";let o=$p();if(o!==null&&o<=0)return"Actueel";let r=ht();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||xs()?"Actueel":ge()?"Nog niet gecontroleerd":"\u2014"}function ge(){return t.entities.firmwareUpdate||null}function ya(){let e=ge();return e?String(e.state??e.value??"").trim().toLowerCase():""}function yb(){let e=t.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function va(){return yb().toLowerCase()}function xp(){let e=t.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let o=Number(e.value??e.state);return Number.isNaN(o)?Number.NaN:Math.max(0,Math.min(100,o))}function Ts(){let e=String(t.updateInstallTargetVersion||"").trim(),o=le();return!e||!o?!1:tn(o,e)>=0}function vb(e=ge()||{}){let o=no(e),r=le(e);return!o||!r?!1:tn(r,o)>=0}function Es(){return(Ts()||vb())&&!Ye()&&!Xr()&&!Ho()}function Cs(){return(t.updateInstallCompleted||Es())&&!Ye()&&!Dt()&&!Ho()}function ar(){t.updateInstallBusy=!1,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="",t.updateInstallProgressHint=Number.NaN,t.updateInstallMode="",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",kb()}function ke(){t.updateManualUploadFile=null,t.updateManualUploadFileName="",t.updateManualUploadError=""}function Qe(e={}){e.clearPr&&(t.updateTestFirmwarePr=""),t.updateTestFirmwareConfirmed=!1,t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null}function wb(){let e=va(),o=xp();if(e==="starting"||e==="uploading"||e==="rebooting"){t.updateInstallPhaseHint=e,Number.isNaN(o)||(t.updateInstallProgressHint=e==="rebooting"?Math.max(o,100):o);return}if(t.updateInstallBusy){if(Ts()){t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100;return}t.controlNotice.includes("opnieuw is opgestart")&&(t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100)}}function Xr(){let e=va();return e==="starting"||e==="uploading"||e==="rebooting"}function Dt(){wb();let e=va(),o=e==="starting"||e==="uploading"||e==="rebooting",r=o?e:t.updateInstallPhaseHint,n=xp(),a=Number.isNaN(t.updateInstallProgressHint)?0:Math.round(t.updateInstallProgressHint),i=o&&!Number.isNaN(n)?Math.round(n):a;return!Xr()&&!t.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:t.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":t.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":t.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:t.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Ne()} gedownload en ge\xEFnstalleerd.`:t.updateInstallMode==="connection-switch"?`De ${Ge(t.updateInstallTargetConnection)}-build wordt nu naar ${Ne()} verzonden.`:t.updateInstallMode==="topology-switch"?`De ${Zo(t.updateInstallTargetTopology,t.updateInstallTargetConnection)}-build wordt nu naar ${Ne()} verzonden.`:`Firmware wordt nu naar ${Ne()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:t.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Ne()}.`:t.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${Ge(t.updateInstallTargetConnection)} is gestart.`:t.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${ko(t.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Ne()}.`}}function no(e=ge()||{}){let o=String(e.latest_version||"").trim();if(o)return o;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function le(e=ge()||{}){let o=String(t.entities.projectVersionText?.state||t.entities.projectVersionText?.value||"").trim();return o||String(e.current_version||"").trim()}function Sb(e=ge()||{}){let o=le(e),r=String(e.current_version||"").trim();return!o||!r||o===r?!1:tn(o,r)>0}function ks(e=ge()||{},o=oo()){let r=String(o||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=no(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function Ep(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function tn(e,o){let r=Ep(e),n=Ep(o);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function rr(){if(Es())return!1;let e=ya();return t.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function Ye(){let e=ya();return t.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function Ho(){let e=ya();if(!ks())return!1;let o=$p();return o!==null?o>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:ht().updateAvailable===!0}function xs(){let e=ya();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||Sb()}function $s(){let e=ge()||{},o=le(e)||"\u2014",r=ks(e)?no(e):"",n=r?tn(r,o):null;return!Ye()&&n!==null&&n<=0&&(r=""),{current:o,latest:r||"\u2014"}}function $p(){let{current:e,latest:o}=$s();return e==="\u2014"||o==="\u2014"?null:tn(o,e)}function Ap(e=oo()){let o=String(e||"").trim().toLowerCase();return li[o]||li.main}function qb(){let e=String((ge()||{}).release_url||"").trim(),o=Ap();return!e||o.includes("/dev-latest")&&!e.includes("/dev-latest")||!o.includes("/dev-latest")&&e.includes("/dev-latest")?o:e}function Tb(){return Ne()}function oo(){return String(E("firmwareUpdateChannel")||t.entities.releaseChannelText?.state||t.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function Eb(){return $s().latest!=="\u2014"}function Cp(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function Cb(e,o=ge()||{}){let r=Cp(e);return r?Cp(`${o.title||""} ${o.summary||""}`).includes(r):!0}function Hp(e){return new Promise(o=>window.setTimeout(o,e))}function on(e=vo){let r=Date.now()+e;t.firmwareOtaQuietUntil=Math.max(Number(t.firmwareOtaQuietUntil||0),r),t.pendingEntitySyncOptions=null,ru(),typeof ft=="function"&&ft(),t.firmwareOtaQuietTimer&&window.clearTimeout(t.firmwareOtaQuietTimer),t.firmwareOtaQuietTimer=window.setTimeout(()=>{t.firmwareOtaQuietTimer=null,t.firmwareOtaQuietUntil=0,!t.updateInstallBusy&&!t.nativeOpen&&Di()},e)}function kb(){t.firmwareOtaQuietTimer&&(window.clearTimeout(t.firmwareOtaQuietTimer),t.firmwareOtaQuietTimer=null),t.firmwareOtaQuietUntil=0,t.nativeOpen||Di()}function Mp(){return t.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Lc())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(Fc())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(Oc())}</strong>
              <span>${s(Dc())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function rn(e=oo()){let o=ge()||{},r=le(o);t.entities.firmwareUpdate={...o,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:Ap(e),current_version:r}}async function nn(e={}){let o=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await Hp(r===0?900:1200),await L(Pr,"all",{forceMissing:!0});let n=ks(),a=!o||Cb(o),i=Eb(),l=Ye(),p=ro();if(n&&a&&(i||!l&&p!=="Nog niet gecontroleerd"))return!0}return!1}async function ir(e={}){let o=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await Hp(a===0?r:n);try{if(await L(Pr,"all",{forceMissing:!0}),va()==="rebooting"&&Gt("ota"),d(),t.updateInstallMode==="connection-switch"){let i=ds(t.updateInstallTargetConnection);if(i&&Jt()===i&&!Xr()&&!rr())return!0}else if(t.updateInstallMode==="topology-switch"){let i=Qr(t.updateInstallTargetTopology);if(i&&ee()===i&&!Xr()&&!rr())return!0}else if(Ts()||Es()||xs()&&!Xr()&&!rr())return!0}catch{o||(t.controlNotice="Wachten tot het device opnieuw is opgestart...",d(),o=!0)}}return!1}function xb(){let e=oo(),o=Dt();if(o)return o.copy;if(Cs()){let r=t.updateInstallCompletedVersion||le()||oo();return`${Ne()} draait nu op ${r}.`}return rr()?`OTA-update wordt voorbereid voor ${Ne()}. Het device kan kort herstarten.`:Ye()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:Ho()?"Er staat een nieuwere firmware klaar.":xs()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Rp(){return!!(t.firmwareAdvancedOpen||t.firmwareConnectionSwitchOpen||t.firmwareTopologySwitchOpen||t.updateManualUploadOpen||t.updateTestFirmwareOpen)}function ha(e,o,r,n,a=!1){return`
      <button
        class="oq-firmware-advanced-option${n?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${n?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(o)}</strong>
        <span>${s(r)}</span>
      </button>
    `}function $b(e,o,r,n){if(!Rp())return"";let i=!!(Dt()||t.updateInstallBusy||Ye());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?ha("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${o.targetLabel}`,t.firmwareConnectionSwitchOpen,i):""}
          ${r?ha("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,t.firmwareTopologySwitchOpen,i):""}
          ${ha("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",t.updateManualUploadOpen,i)}
          ${ha("toggle-firmware-test","Testfirmware","PR-release installeren",t.updateTestFirmwareOpen,i)}
        </div>
        ${Ab()}
        ${Hb()}
        ${Rb()}
        ${Mb()}
      </div>
    `}function Ab(){let e=fa();if(!e||!t.firmwareConnectionSwitchOpen)return"";let r=!!(Dt()||t.updateInstallBusy||Ye()),n=!!t.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",p=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(oo())}-build voor de andere netwerkverbinding.</span>
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
        ${p}
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
    `}function Hb(){let e=ba();if(!e||!t.firmwareTopologySwitchOpen)return"";let r=!!(Dt()||t.updateInstallBusy||Ye()),n=!!t.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",p=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(oo())}-build voor de andere Single/Duo-opstelling.</span>
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
        ${p}
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
    `}function Mb(){if(!t.updateTestFirmwareOpen)return"";let o=!!(Dt()||t.updateInstallBusy||Ye()),r=Ao(),n=nr(),a=en(r,n),i=!!(n.available&&h("firmwareTestOtaUrl")&&h("firmwareTestOtaMd5Url")&&h("installFirmwareTestOta")),l=!!(r&&i),p=t.updateTestFirmwareBuild||null,u=n.available?n.label:n.error,c=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
              value="${s(t.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${o?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(c)}</strong>
          </div>
          ${p?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(p)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":n.error)}</p>`}
        ${t.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(t.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${t.updateTestFirmwareConfirmed?"checked":""} ${o||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${o||!l||!t.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function Rb(){if(!t.updateManualUploadOpen)return"";let o=!!(Dt()||t.updateInstallBusy||Ye()),r=String(t.updateManualUploadFileName||t.updateManualUploadFile?.name||"").trim();return`
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
            ${o?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${s(r?`Gekozen bestand: ${r}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${t.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${o||!t.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function Pp(){if(!t.updateModalOpen)return"";let e=ge(),o=t.entities.firmwareUpdateChannel||null,{current:r,latest:n}=$s(),a=Ye(),i=rr(),l=Ho(),p=xb(),u=Dt(),c=Cs(),m=qb(),b=c?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":Tb(),y=o?Array.isArray(o.option)?o.option:Array.isArray(o.options)?o.options:[]:[],v=fa(),g=ba(),f=!!(v&&!c),w=!!(g&&!c);return`
      <div class="oq-helper-modal-backdrop${a||i||u?" is-busy":""}${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(b)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(p)}</p>
          ${c?`
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
              <strong class="oq-helper-modal-value">${s(ro())}</strong>
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
              <strong class="oq-helper-modal-value">${s(oo())}</strong>
            </div>
          </div>
          ${y.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${y.map(S=>`
                  <option value="${s(S)}" ${String(E("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${c?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${m?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(m)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${Rp()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${$b(f,v,w,g)}
        </section>
      </div>
    `}function bt(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(t.debugRecordingSamples)?t.debugRecordingSamples.length:0}function yt(e=t.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Sa(e=t.debugRecordingDeviceStatus){return yt(e)&&e?.frozen===!0&&!e?.active}function Mo(e){let o=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(o/3600),n=Math.floor(o%3600/60),a=o%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function Op(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):Dp()}function Dp(){if(t.debugRecordingDeviceStatus)return Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!t.debugRecordingStartedAt)return 0;let e=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(t.debugRecordingStartedAt||e))}function an(){return t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Sa()?"Rolling gestopt":t.debugRecordingActive&&yt()?"Rolling actief":t.debugRecordingActive?"Bezig met opnemen":bt()>0?"Voltooid":"Niet gestart"}function qa(){return Sa()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":t.debugRecordingActive&&yt()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":t.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":bt()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Lp(){return Sa()?"Gestopt":t.debugRecordingActive&&yt()?`Rolling \xB7 ${Mo(Op())}`:t.debugRecordingActive?`Loopt \xB7 ${Mo(Ip())}`:bt()>0?"Klaar":an()}function Pb(){let e=Number(t.debugRecordingSelectedMinutes||15);return Kn.map(r=>Number(r.minutes)).includes(e)?e:Number(Kn[0]?.minutes||15)}function Fp(e){t.debugRecordingActive||(t.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),t.debugRecordingNotice="",t.debugRecordingError="",d())}function Ip(){return yt()?0:t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.remaining_s||0)*1e3):t.debugRecordingActive?Math.max(0,Number(t.debugRecordingEndsAt||0)-Date.now()):0}function Nb(){if(t.debugRecordingDeviceStatus){if(yt()){let a=Math.max(1,Number(t.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,bt()/a*100))}let r=Math.max(1,Number(t.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0));return!t.debugRecordingActive&&bt()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!t.debugRecordingActive||!t.debugRecordingStartedAt||!t.debugRecordingEndsAt)return bt()>0?100:0;let e=Math.max(1,Number(t.debugRecordingEndsAt)-Number(t.debugRecordingStartedAt)),o=Math.max(0,Date.now()-Number(t.debugRecordingStartedAt));return Math.max(0,Math.min(100,o/e*100))}function _p(e=t.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Wp(e){if(e?.recording?.active)return;let o=_p(e);if(o){t.debugRecordingAcknowledgedId=o;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",o)}catch{}}}function As(){let e=t.debugRecordingDeviceStatus,o=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&o===0)return"";let r=!!e.active;if(!r&&_p(e)===t.debugRecordingAcknowledgedId)return"";let n=yt(e),a=Mo(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=Mo(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",p=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${r?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(p)}"
      title="${s(p)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function Ob(){if(!t.root)return;if(t.interfacePanelOpen){d();return}let e=t.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let o=e.querySelector(".oq-debug-recording-header-status"),r=As();if(!r){o?.remove();return}if(o){o.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function Db(){if(!t.root)return;let e=t.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let o=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");o&&(o.textContent=an()),r&&(r.textContent=qa())}function Hs(e){let o={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return o[e]||o.status}function Lb(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Hs(e)}</span>`}function Lt(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Hs(e)}</span>`}function Fb(){return[...yo]}function Ib(){let e=[];return yo.forEach((o,r)=>{let n=t.entities?.[o]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function _b(e){return Array.isArray(e)?e.map((o,r)=>o===null?null:[r,o]).filter(Boolean):[]}function Ta(){t.debugRecordingTimer&&(window.clearTimeout(t.debugRecordingTimer),t.debugRecordingTimer=null)}function Ro(){t.debugRecordingDevicePollTimer&&(window.clearTimeout(t.debugRecordingDevicePollTimer),t.debugRecordingDevicePollTimer=null)}function ao(e){return`${Re()}/openquatt/debug-recording/${e}`}function sr(e){let o=e&&typeof e=="object"?e:{};t.debugRecordingDeviceStatus=o,t.debugRecordingActive=!!o.active,t.debugRecordingStartedAt=o.active||Number(o.sample_count||0)>0?Date.now()-Math.max(0,Number(o.elapsed_s||0)*1e3):0,t.debugRecordingEndsAt=o.active?Date.now()+Math.max(0,Number(o.remaining_s||0)*1e3):0,t.debugRecordingLastSampleAt=Number(o.sample_count||0)>0?Date.now():0}function Ms(){sr({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function Wb(){let e=await window.fetch(ao("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();return sr(o),o}function sn(e=2e3){Ro(),t.debugRecordingActive&&(t.debugRecordingDevicePollTimer=window.setTimeout(()=>{ln({silent:!0})},Math.max(0,Number(t.systemModal==="debug-recording"?e:5e3)||0)))}async function ln(e={}){e.silent||(t.debugRecordingBusy=!0,t.debugRecordingError="",d());try{await Wb(),!t.debugRecordingActive&&e.silent&&(t.debugRecordingNotice="Debugopname is afgerond."),sn()}catch(o){Ms(),t.debugRecordingError=`Status kon niet worden opgehaald. ${o.message||String(o)}`}finally{e.silent||(t.debugRecordingBusy=!1),!e.silent||t.systemModal==="debug-recording"?d():(Ob(),Db())}}async function Vp(){let e=us(yo,"state"),o=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(ao(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);o=await n.json()}if(Number(o?.entity_field_count||0)!==yo.length)throw new Error(`onvolledige debugset (${Number(o?.entity_field_count||0)}/${yo.length})`);return o}async function Bp(e){let o=Math.max(1,Number(e)||15);Ta(),Ro(),t.debugRecordingBusy=!0,t.debugRecordingError="",t.debugRecordingNotice="",t.debugRecordingSamples=[],t.debugRecordingEvents=[],t.debugRecordingInitialValues=null,t.debugRecordingLastValues=null,t.debugRecordingDeviceBundle=null,t.debugRecordingLastSampleAt=0,t.debugRecordingSequence=0,d();try{await Vp();let r=await window.fetch(ao(`start?duration_s=${encodeURIComponent(o*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();sr(n),sn()}catch(r){Ms(),t.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{t.debugRecordingBusy=!1,d()}}async function Kp(){Ta(),Ro(),t.debugRecordingBusy=!0,t.debugRecordingError="",t.debugRecordingNotice="",t.debugRecordingSamples=[],t.debugRecordingEvents=[],t.debugRecordingInitialValues=null,t.debugRecordingLastValues=null,t.debugRecordingDeviceBundle=null,t.debugRecordingLastSampleAt=0,t.debugRecordingSequence=0,d();try{await Vp();let e=await window.fetch(ao("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();sr(o),sn()}catch(e){Ms(),t.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{t.debugRecordingBusy=!1,d()}}async function Vb(){let e=await window.fetch(ao("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();return sr(o),Ro(),o}async function jp(){Ta(),t.debugRecordingBusy=!0,t.debugRecordingError="",d();try{await Vb(),t.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){t.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{t.debugRecordingBusy=!1,d()}}async function Up(e={}){Ta(),Ro(),t.debugRecordingBusy=!0,t.debugRecordingError="",d();try{let o=await window.fetch(ao("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();sr(r),t.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(o){t.debugRecordingError=`Debugopname kon niet worden gestopt. ${o.message||String(o)}`}finally{t.debugRecordingBusy=!1,d()}}function Np(e={}){let o=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:t.debugRecordingStartedAt?new Date(Number(t.debugRecordingStartedAt)).toISOString():"",ended_at:o?new Date(o).toISOString():"",active:!!t.debugRecordingActive,duration_s:t.debugRecordingStartedAt?Math.round(Math.max(0,o-Number(t.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(hc/1e3),sample_count:bt(),column_count:yo.length,storage:"browser"},columns:Fb(),units:Ib(),initial:_b(t.debugRecordingInitialValues),samples:t.debugRecordingSamples||[],events:t.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function wa(e){return JSON.stringify(e)}function Bb(){let e=Number(t.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([wa(Np())]).size}catch{return wa(Np()).length}}function Kb(e){let o=Math.max(0,Number(e)||0);return o>=1024*1024?`${(o/1024/1024).toFixed(1)} MB`:o>=1024?`${(o/1024).toFixed(1)} kB`:`${Math.round(o)} B`}function jb(e){let o=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(o).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function Gp(){if(bt()===0){t.debugRecordingError="Er is nog geen debugopname om te downloaden.",d();return}t.debugRecordingBusy=!0,t.debugRecordingError="";let e=t.debugRecordingActive&&yt();d();try{let o=await window.fetch(ao("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();t.debugRecordingDeviceBundle=r,Hi(jb(r),wa(r),"application/json"),Wp(r),t.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{t.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{t.debugRecordingBusy=!1,d()}}async function zp(){if(bt()===0){t.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",d();return}t.debugRecordingBusy=!0,t.debugRecordingError="";let e=t.debugRecordingActive&&yt();d();try{let o=await window.fetch(ao("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();if(t.debugRecordingDeviceBundle=r,!await jt(wa(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");Wp(r),t.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{t.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{t.debugRecordingBusy=!1,d()}}function Qp(){let e=t.debugRecordingActive,o=yt(),r=Sa(),n=bt(),a=t.debugRecordingBusy,i=Kb(Bb()),l=Array.isArray(t.debugRecordingDeviceBundle?.events)?t.debugRecordingDeviceBundle.events.length:Array.isArray(t.debugRecordingEvents)?t.debugRecordingEvents.length:0,p=Pb(),u=Ip(),c=Op(),m=Nb(),b=n>0,y=`${m.toFixed(1)}%`,v=[{icon:"status",label:"Status",value:an()},{icon:"clock",label:o?"Retentie":"Duur",value:Mo(o?c:Dp())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:t.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],g=t.debugRecordingError?{kind:"error",icon:"alert",text:t.debugRecordingError}:t.debugRecordingNotice?{kind:"success",icon:"check",text:t.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(qa())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Hs("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(o?`Laatste ${Mo(c)} bewaard`:`Nog ${Mo(u)}`)}</span>
                <strong>${s(o?`${n}/${Number(t.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(m)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(y)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${v.map(f=>`
              <div class="oq-debug-recording-stat">
                <dt>${Lb(f.icon)}${s(f.label)}</dt>
                <dd>${s(f.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        ${e&&o?`
          <section class="oq-debug-recording-duration" aria-label="Rolling debug">
            <h3>Rolling debug</h3>
            <p class="oq-helper-modal-copy">Download of kopieer maakt een momentopname van de huidige buffer. Stop rolling zet de buffer vast.</p>
          </section>
        `:`
          <section class="oq-debug-recording-duration" aria-label="Duur">
            <h3>Duur</h3>
            <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
              ${Kn.map(f=>{let w=Number(f.minutes)===p;return`
                  <button
                    class="oq-debug-recording-segment${w?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${f.minutes}"
                    aria-pressed="${w?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(f.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&o?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${Lt("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${Lt("stop")}Stop opname</button>
          `:r?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${p}" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Lt("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Lt("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${p}" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Lt("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Lt("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!b||a?"disabled":""}>${Lt("download")}${e&&o?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!b||a?"disabled":""}>${Lt("copy")}${e&&o?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${g?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${g.kind}" role="status">
              ${Lt(g.icon)}
              <span>${s(g.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function Zp(e){t.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",t.overviewTheme)}catch{}}function Ea(e){t.interfacePanelOpen=e===!0}function Rs(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function cn(e,o={}){t.settingsGroup=xe.has(e)?e:de[0].id;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}o.syncUrl!==!1&&t.appView==="settings"&&Ii(o.syncMode||"replace")}function Jp(e){t.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",t.devPanelOpen?"true":"false")}catch{}}function Xp(e){t.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",t.hpVisualMode)}catch{}}function ed(e){t.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",t.hpLayoutMode)}catch{}}function Ub(e){if(t.reducedMotion=!!e?.matches,t.reducedMotion){Br();return}Vr()}function Gb(){let e=Ti();!e||t.motionPreferenceMedia===e||(t.motionPreferenceMedia=e,t.motionPreferenceListener=Ub,typeof e.addEventListener=="function"?e.addEventListener("change",t.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(t.motionPreferenceListener),t.reducedMotion=!!e.matches)}function zb(){return Object.keys(t.entities).length>0}function Qb(){return qi+Math.floor(Math.random()*(Cc-qi+1))}function Yb(){return(document.hidden?Dr:yc)+Qb()}function td(e=Yb()){t.pollTimer||t.nativeOpen||t.updateInstallBusy||oa()||(t.pollTimer=window.setTimeout(async()=>{t.pollTimer=null,await ue(),td()},e))}function Ps(){td()}function Ns(){t.pollTimer&&(window.clearTimeout(t.pollTimer),t.pollTimer=null)}ou({start:Ps,stop:Ns});function Zb(){t.nativeOpen||(Ns(),Ps(),document.hidden||ue({forceProbe:!0}))}function Ca(e={}){if(un(),t.nativeOpen){Ns(),Br(),t.nativeFrontendLoaded||ka();return}if(Vr(),Ps(),e.refresh!==!1){if(!zb()){Qu();return}ue({forceFast:!0})}}function Jb(){let e=jr()||Qt(),o=e==="settings"?Fi()||t.settingsGroup:"";if(!(e===t.appView&&(e!=="settings"||o===t.settingsGroup))){if(t.appView=e,e==="settings"&&o){t.settingsGroup=o;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}}d(),ue({forceFast:!0})}}function un(){t.nativeApp&&(t.nativeApp.classList.add("oq-native-app"),t.nativeApp.classList.toggle("oq-native-app--collapsed",!t.nativeOpen),t.nativeApp.setAttribute("aria-hidden",t.nativeOpen?"false":"true"))}function od(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yp,{once:!0}):Yp(),window.addEventListener("pointermove",uu),window.addEventListener("pointerup",pu),window.addEventListener("popstate",Jb),window.addEventListener("oq-mock-updated",Xb),window.addEventListener("oq-dev-controls-changed",ey),document.addEventListener("visibilitychange",Zb)}function Xb(){t.mounted&&ue()}function ey(){t.mounted&&d()}function Yp(){ty();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),t.nativeApp=e,t.nativeFrontendLoaded=Array.from(document.scripts).some(o=>o.src===ci),t.mounted||(oy(e),t.mounted=!0,Ca()),un(),t.nativeOpen||(ue(),ln({silent:!0}))}function ty(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function oy(e){let o=document.createElement("section");o.id="oq-helper-root",o.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(o,e),o.addEventListener("click",iu),o.addEventListener("change",au),o.addEventListener("input",su),o.addEventListener("keydown",lu),o.addEventListener("wheel",gu,{passive:!1}),o.addEventListener("focusin",Li),o.addEventListener("focusout",Li),o.addEventListener("mouseover",mu),o.addEventListener("mouseout",du),o.addEventListener("pointerdown",cu),t.root=o,Gb();let r=jr()||Qt(),n=r==="settings"?Fi():"";n&&cn(n,{syncUrl:!1}),mt(r,{syncMode:"replace",forceSync:!0}),Wr(),d()}function ry(e){return new Promise((o,r)=>{if(!e){o();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){o();return}n.addEventListener("load",()=>o(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",o()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function ka(){if(!(t.nativeFrontendLoaded||t.nativeFrontendLoading)){t.nativeFrontendLoading=!0,t.nativeOpen&&d();try{await ry(ci),t.nativeFrontendLoaded=!0}catch(e){t.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,t.nativeOpen=!1,Rs("app"),d(),Ca()}finally{t.nativeFrontendLoading=!1,t.nativeOpen&&d()}}}function Os(){if(!t.root)return;let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(t.root)}function pn(){let e=t.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function ny(){return"Login"}function ay(){let e=t.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function dn(){let e=t.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function lr(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function cr(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API beveiligd.":e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":"De native API staat nu open op je lokale netwerk.":"API-encryptie wordt geladen."}function iy(){return"ESPHome API encryption"}function sy(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu alvast voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API nog beveiligd.":"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":"API-encryptie staat uit. Schakel in om een sleutel te bekijken, kopi\xEBren of vernieuwen.":"We halen de huidige API-beveiliging op."}function ly(){let e=t.apiSecurityStatus;if(!e)return"Laden...";let o=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active);return o&&e.enabled===!0&&e.transport_active===!1?"Annuleer inschakelen":o&&e.enabled===!1&&e.transport_active===!0?"Annuleer uitschakelen":e.enabled?"Uitschakelen":"Inschakelen"}function cy(){let e=t.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function rd(e,o,r="",n=!1){return`
      <div class="oq-helper-modal-row${n?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${n?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(o)}</span>
          </span>
        `:s(o)}</strong>
      ${r?`<span class="oq-helper-modal-subvalue">${s(r)}</span>`:""}
    </div>
    `}function nd(){let e=t.apiSecurityStatus||{},o=e.enabled===!0,r=!!e.key,n=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active),a=r||e.transport_active===!0||n,i=t.apiSecurityNotice,l=t.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(iy())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(sy())}</p>
          ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(i)}</span></div>`:""}
          ${l}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(lr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(cr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${o?"disable-api-security":"enable-api-security"}"
                ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(ly())}
              </button>
            </div>
            ${a?`
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${s(n?r?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"Bewaar deze sleutel voor later gebruik of kopieer hem nu.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${r?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${s(e.key)}</div></div>`:""}
              ${r?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(cy())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${t.apiSecurityBusy?"disabled":""}
                    >
                      Kopieer sleutel
                    </button>
                  </div>
                `:""}
            </div>
            `:""}
          </div>
          <div class="oq-helper-modal-actions">
            ${n?`
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="restart-api-security"
                ${t.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function ad(){let e=t.authStatus||{},o=e.enabled===!0,r=e.setup_window_active===!0,n=o||r,a=o?String(e.username||"").trim():"",i=t.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(t.authNotice)}</span></div>`:"",l=t.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.authError)}</div>`:"",u=n?`
        ${n?`<p class="oq-helper-modal-intro">${o?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${o?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(t.authDraftCurrentPassword)}"
                  ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftUsername)}"
              ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftNewPassword)}"
              ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftConfirmPassword)}"
              ${t.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(ny())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(ay())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${rd("Beveiligingsstatus",pn(),dn())}
            ${rd("Gebruiker",o?a||"Geen naam":"Geen login",o?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.authBusy?"disabled":""}>Gereed</button>
            ${o?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${t.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${t.authBusy?"disabled":""}>${o?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function mn(e,o,r){let n=A(o),a=A(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=A(e);return Number.isFinite(i)?i:NaN}function Ds(e="oq-settings-grid"){let o=uy();return`
      <div class="${s(e)}">
        ${ie("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${o}
    `}function uy(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>h(r.offsetKey)&&h(r.finalKey));if(!e.length)return"";let o=r=>{let n=Me(r.offsetKey),a=mn(r.rawKey,r.finalKey,r.offsetKey),i=Ee(we(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?Mt(a+i,n.uom||"\xB0C",2):be(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(be(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?Mt(a,n.uom||"\xB0C",2):be(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Xt({key:r.offsetKey,value:we(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
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
          ${e.map(o).join("")}
        </div>
      </div>
    `}function id(){return te("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Ds())}function sd(e,o){let r=A(e),n=A(o),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function py(e){let o=String(e||"").trim().toUpperCase();return!o||o==="0"||o==="IDLE"||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED")?!1:o.includes("REQUESTED")||o.includes("WAITING")||o.includes("WACHTEN")||o.includes("SETTLING")||o.includes("MEASUR")||o.includes("COOLDOWN")||o.includes("RUNNING")||o.includes("VALIDATING")||o.includes("STARTED")||o.includes("RECOVER")||o.includes("PHASE")||o.includes("STEADY")||o.includes("PULSE")||o.includes("STABILIZE")||o.includes("STEP")}function ye(e){let o=String(e||"").trim().toUpperCase();return o?o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"):!1}function Po(e){let o=String(e||"").trim().toUpperCase();return o.includes("WAITING_FOR_CM100")||o.includes("CM100 REQUESTED")||o.includes("WACHTEN OP CM100")||o==="WACHTEN"}function ur(e){return py(e)&&!Po(e)}function xa(e="",o=""){let r=String(e||"").trim().toUpperCase(),n=String(o||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=c=>{let m=String(c||"").trim().toUpperCase();return m?r===m||r.startsWith(`${m}:`)||r.startsWith(`${m} `)||a.includes(m):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let u=(l[n]||[]).find(c=>c.match.some(m=>i(m)));return u||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function pr({taskKey:e,title:o,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:p="",controls:u="",metrics:c="",className:m=""}){return`
      <article class="oq-settings-commissioning-card${m?` ${s(m)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(o)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
          </div>
        </div>
        ${p?`<div class="oq-settings-commissioning-card-actions">${p}</div>`:""}
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
        ${c?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${c}</div>`:""}
      </article>
    `}function dy({status:e,running:o,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:p}){let u=String(e||"").toUpperCase(),c=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),m=u.includes("APPLIED"),b=h("hp2WaterIn")||h("hp2WaterOut")||h("hp2WaterInRaw")||h("hp2WaterOutRaw"),y=A("hpWaterCalibrationStableProgress"),v=A("hpWaterCalibrationStableRequired"),g=A("hpWaterCalibrationRemaining"),f=Math.round(A("hpWaterCalibrationPhase")),w=o&&(f===1||u.includes("MIXING")),S=o&&!w,q=300,C=60,$=Number.isFinite(g)?Math.max(0,q-g):NaN,H=Number.isFinite($)?Math.max(0,C-$):NaN,W=w&&Number.isFinite($)?Math.max(0,Math.min(100,$/C*100)):S&&Number.isFinite(y)&&Number.isFinite(v)&&v>0?Math.max(0,Math.min(100,y/v*100)):o&&Number.isFinite(g)?Math.max(0,Math.min(100,100-g/q*100)):r?100:0,B=r&&h("hpWaterCalibrationResultSpreadBefore")?be("hpWaterCalibrationResultSpreadBefore",2):be("hpWaterCalibrationSpread",2),M=w?"Water mengen":Number.isFinite(y)&&Number.isFinite(v)&&v>0?y>0?`${Math.round(Math.max(0,y))} / ${Math.round(v)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",I=r?3:o?2:1,z=m?"Offsets toegepast":r?`Meting klaar - spreiding ${B}`:o?w?`Water mengen${Number.isFinite(H)&&H>0?` - meting start over ${Math.round(H)} s`:""}`:`Meting bezig - ${Number.isFinite(g)&&g>0?`max. ${Math.round(g)} s resterend`:M}`:c?"Meting niet voltooid":"Voorbereiding",re=m?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":o?w?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":c?er("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):b?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",he=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(N=>h(N.liveKey)||h(N.rawKey)||h(N.offsetKey)),Z=(N,F)=>{let T=I>N;return`
        <div class="oq-settings-hp-calibration-step${T?" is-done":""}${I===N?" is-active":""}">
          <span>${T?"\u2713":N}</span>
          <strong>${s(F)}</strong>
        </div>
      `},D=N=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(N.label)}</span>
          <strong>${s(be(N.liveKey,2))}</strong>
        </article>
      `,Y=N=>{let F=A(N.resultRawKey),T=Number.isFinite(F)?F:mn(N.rawKey,N.liveKey,N.offsetKey),x=A(N.suggestedKey),P=Number.isFinite(T)&&Number.isFinite(x)?Mt(T+x,t.entities[N.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(N.label)}</th>
          <td>${s(Number.isFinite(T)?Mt(T,t.entities[N.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(be(N.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(be(N.suggestedKey,2))}</span></td>
          <td>${s(P)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${Z(1,"Voorbereiding")}
          ${Z(2,"Meting")}
          ${Z(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":o?" is-active":c?" is-warning":""}">
          <div>
            <strong>${s(z)}</strong>
            <p>${s(re)}</p>
          </div>
          ${o||r?`<span>${s(o?M:"Resultaat beschikbaar")}</span>`:""}
          ${o?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${W.toFixed(0)}%"></i></div>`:""}
        </div>

        ${o?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${he.map(D).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(be("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(be("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(be("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(be("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${he.map(Y).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${p?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${$o({active:o,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${t.entities.hpWaterCalibrationApply?We("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function ld(){let e=h("boilerCvAssistEnabled")&&k("boilerCvAssistEnabled"),o=ca(),r=k("cm100Active"),n=String(o||"").trim().toUpperCase(),a=Po(o),i=!a&&(r||n==="CM100 READY"),l=t.commissioningTaskLock==="cm100",p=t.loadingEntities||t.busyAction==="commissioningCm100Start"||t.busyAction==="commissioningCm100Stop"||l,u=!!t.pendingCommissioningCm100Start,c=p||i||a,m=p||!i,b=xo("boilerPowerTestStatus","IDLE"),y=xa(b,"boiler"),v=k("boilerPowerTestActive"),g=t.loadingEntities||t.busyAction==="boilerPowerTestStart"||t.busyAction==="boilerPowerTestAbort"||t.busyAction==="boilerPowerTestApply",f=!!(t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort||t.entities.boilerPowerTestApply),w=!!t.pendingBoilerPowerTestStart,S=t.commissioningTaskLock==="boiler",q=Po(b),$=!ye(b)&&(v||w||S||ur(b))&&!q,H=Te("boilerRatedHeatPower"),W=Te("boilerHeatPower"),B=A("boilerHeatPower"),M=B>0?W:$&&t.commissioningBoilerHeatPowerDisplay?t.commissioningBoilerHeatPowerDisplay:W;B>0&&(t.commissioningBoilerHeatPowerDisplay=W);let I=xo("flowAutotuneStatus","IDLE"),z=xa(I,"autotune"),re=t.loadingEntities||t.busyAction==="flowAutotuneStart"||t.busyAction==="flowAutotuneAbort"||t.busyAction==="flowAutotuneApply",he=!!(t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort||t.entities.flowAutotuneApply),Z=!!t.pendingFlowAutotuneStart,D=t.commissioningTaskLock==="autotune",Y=Po(I),F=!ye(I)&&(Z||D||ur(I))&&!Y,T=xo("airPurgeStatus","IDLE"),x=xa(T,"purge"),P=k("airPurgeActive"),V=t.loadingEntities||t.busyAction==="airPurgeStart"||t.busyAction==="airPurgeAbort",Q=!!(t.entities.airPurgeStart||t.entities.airPurgeAbort),J=!!t.pendingAirPurgeStart,X=t.commissioningTaskLock==="purge",ne=!ye(T)&&(P||J||X||ur(T)),Fe=/DONE/.test(String(T||"").toUpperCase()),Ae=!!(Q||t.entities.airPurgeStatus||t.entities.airPurgeReturnToAuto),Fo=Te("airPurgeRemaining",{decimals:0}),Wt=A("airPurgePhase"),kr=Wt===1?"Rustig":Wt===2?"Pulsen":Wt===3?"Stabiliseren":x.phase,et=xo("manualFlowStatus","IDLE"),St=k("manualFlowActive"),He=t.loadingEntities||t.busyAction==="manualFlowStart"||t.busyAction==="manualFlowAbort",ce=!!(t.entities.manualFlowStart||t.entities.manualFlowAbort),qt=!!t.pendingManualFlowStart,se=t.commissioningTaskLock==="manual-flow",Ie=!ye(et)&&(St||qt||se||ur(et)),Tt=xo("manualHpStatus","IDLE"),Io=k("manualHpActive"),po=t.loadingEntities||t.busyAction==="manualHpStart"||t.busyAction==="manualHpAbort",Mn=!!(t.entities.manualHpStart||t.entities.manualHpAbort),_o=!!t.pendingManualHpStart,ct=t.commissioningTaskLock==="manual-hp",Ve=!ye(Tt)&&(Io||_o||ct||ur(Tt)),Rn=/SAFETY STOP/.test(String(Tt||"").toUpperCase()),Pn=/STOPPING/.test(String(Tt||"").toUpperCase()),ut=xo("hpWaterCalibrationStatus","IDLE"),ni=xa(ut,"hp-water-calibration"),Nn=k("hpWaterCalibrationActive"),Wo=t.loadingEntities||t.busyAction==="hpWaterCalibrationStart"||t.busyAction==="hpWaterCalibrationAbort"||t.busyAction==="hpWaterCalibrationApply",oc=!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort||t.entities.hpWaterCalibrationApply),On=!!t.pendingHpWaterCalibrationStart,Vt=t.commissioningTaskLock==="hp-water-calibration",_e=!ye(ut)&&(Nn||On||Vt||ur(ut)),Dn=/DONE|APPLIED/.test(String(ut||"").toUpperCase()),rc=/APPLIED/.test(String(ut||"").toUpperCase()),Zg=Te("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Jg=Te("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),nc=/DONE|APPLIED/.test(String(b||"").toUpperCase()),ac=/DONE|APPLIED/.test(String(I||"").toUpperCase()),ai=i?q?"Wachten op CM100":$?y.phase:nc?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",ii=i?Y?"Wachten op CM100":F?z.phase:ac?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",si=i?ne?x.phase:Fe?"Klaar":"Klaar om te starten":"Wachten op CM100",ic=i?Ie?"Actief":"Klaar om te starten":"Wachten op CM100",sc=i?Ve?Pn?"Bezig met stoppen":Rn?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",lc=i?_e?ni.phase:rc?"Offsets toegepast":Dn?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",cc=!i||g||!f||F||ne||Ie||Ve||_e||$||D||X||se||ct||Vt||w,Xg=g||!($||S||w),eh=g||cc||!nc||F||ne||_e,uc=!i||re||!he||$||ne||Ie||Ve||_e||F||S||X||se||ct||Vt||Z,th=re||!(F||D||Z),oh=re||uc||!ac||$||ne||_e,rh=!i||V||!Q||$||F||Ie||Ve||_e||ne||S||D||se||ct||Vt||J,nh=V||!(ne||X||J),ah=!i||He||!ce||$||F||ne||Ve||_e||Ie||S||D||X||ct||Vt||qt,ih=He||!(Ie||se||qt),sh=!i||po||!Mn||$||F||ne||Ie||_e||Ve||S||D||X||se||Vt||_o,lh=po||!(Ve||ct||_o),ch=!i||Wo||!oc||$||F||ne||Ie||Ve||_e||S||D||X||se||ct||On,uh=Wo||!(_e||Vt||On),ph=Wo||_e||!Dn||rc;u&&i&&(t.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(t.commissioningTaskLock=""),w&&(v||ye(b))&&(t.pendingBoilerPowerTestStart=!1),S&&ye(b)&&(t.commissioningTaskLock=""),Z&&ye(I)&&(t.pendingFlowAutotuneStart=!1),D&&ye(I)&&(t.commissioningTaskLock=""),J&&(P||ye(T))&&(t.pendingAirPurgeStart=!1),X&&ye(T)&&(t.commissioningTaskLock=""),qt&&(St||ye(et))&&(t.pendingManualFlowStart=!1),se&&(St||ye(et))&&(t.commissioningTaskLock=""),_o&&(Io||ye(Tt))&&(t.pendingManualHpStart=!1),ct&&(Io||ye(Tt))&&(t.commissioningTaskLock=""),On&&(Nn||ye(ut))&&(t.pendingHpWaterCalibrationStart=!1),Vt&&ye(ut)&&(t.commissioningTaskLock="");let dh=a?"Wachten op CM100":o,mh=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",gh=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:lc,available:!!(oc||t.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:pr({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:lc,statusCopy:_e?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":Dn?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:dy({status:ut,running:_e,resultReady:Dn,startDisabled:ch,abortDisabled:uh,applyDisabled:ph,busy:Wo,controlsAvailable:!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:ic,available:!!(ce||t.entities.manualFlowStatus),openDisabled:!i,cardMarkup:pr({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:ic,statusCopy:Ie?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${ze("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${t.entities.manualFlowStart||t.entities.manualFlowAbort?$o({active:Ie,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:He||ah,stopDisabled:He||ih}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Ce("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Te("flowSelected"),"oq-settings-field--compact")}
            ${Ce("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",Te("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${t.entities.manualFlowApplyHeating?We("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",He):""}
          ${t.entities.manualFlowApplyCooling?We("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",He):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:sc,available:!!(Mn||t.entities.manualHpStatus),openDisabled:!i,cardMarkup:pr({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:sc,statusCopy:Ve?Pn?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Rn?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${t.entities.manualHpStart||t.entities.manualHpAbort?$o({active:Ve,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:po||sh,stopDisabled:po||lh}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${to("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${ze("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${h("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${to("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${ze("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Ce("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Te("flowSelected"),"oq-settings-field--compact")}
              ${Ce("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",sd("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${h("hp2Compressor")?Ce("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",sd("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Ce("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Ce("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Yt(O("hp1Failures","None")),"oq-settings-field--compact")}
              ${h("hp2Failures")?Ce("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Yt(O("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:ii,available:!0,openDisabled:Po(ii),cardMarkup:pr({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:ii,statusCopy:Y?"Wacht totdat CM100 actief is voordat je autotune start.":F?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort?$o({active:F,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:re||uc,stopDisabled:re||th}):""}
            ${t.entities.flowAutotuneApply?We("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",re||oh):""}
          `,metrics:`
            ${Ce("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Zg,"oq-settings-field--compact")}
            ${Ce("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Jg,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:ai,available:e,openDisabled:Po(ai),cardMarkup:pr({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(H)}`,status:ai,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":$?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort?$o({active:$,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:g||cc,stopDisabled:g||Xg}):""}
            ${t.entities.boilerPowerTestApply?We("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",g||eh):""}
          `,metrics:`
            ${Ce("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",M)}
            ${Ce("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",Te("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:si,available:Ae,openDisabled:Po(si),cardMarkup:pr({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:si,statusCopy:ne?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${t.entities.airPurgeStart||t.entities.airPurgeAbort?$o({active:ne,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:V||rh,stopDisabled:V||nh}):""}
          `,metrics:`
            ${Ce("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",Fo,"oq-settings-field--compact")}
            ${Ce("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",kr,"oq-settings-field--compact")}
            ${Ce("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",Te("flowSelected"),"oq-settings-field--compact")}
            ${ip("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(hh=>hh.available);return{cm100Status:dh,cm100StartDisabled:c,cm100StopDisabled:m,serviceStatusCopy:mh,tasks:gh}}function my(e){return $e({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function cd(){let e=ld();return te("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${t.entities.commissioningCm100Start?We("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${t.entities.commissioningCm100Stop?We("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(o=>my(o)).join("")}
          </div>
        </div>
      `)}function ud(){let e=String(t.systemModal||"").replace(/^service-task-/,""),r=ld().tasks.find(n=>n.key===e);return r?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${s(r.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${s(r.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(r.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${r.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${r.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function $a(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${fs("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${fs("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${ze("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${ze("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function pd(){return te("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",$a())}function dd(){return $a("oq-settings-grid oq-settings-grid--modal")}var Ls=null;function md(e){Ls=typeof e=="function"?e:null}function gn(){return Ls?Ls():"?meta=1"}async function io(e,o){let r=R[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(o||"").trim(),a=await fetch(`${U(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=fe(e,o),a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=xt(o),a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=je(o),a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(o||"").trim(),a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!o,a=n?"turn_on":"turn_off",i=await fetch(U(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function Fs(){let e=t.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function gy(){return Fs()?So:So.filter(e=>e<=168)}function hn(e){let o=gy(),r=Number(e);return o.includes(r)?r:Number.isFinite(r)&&r>o[o.length-1]?o[o.length-1]:o.includes(dt)?dt:o[0]}function dr(e){t.trendWindowHours=hn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(t.trendWindowHours))}catch{}}function hy(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function fy(e){return e.some(o=>Ma(o)!==void 0)}function by(e){let o=new Set;for(let r of e){let n=wd(r.date_key??r.dateKey??r.date??r.from??Ma(r));if(n){if(o.has(n))return!0;o.add(n)}}return!1}function fd(e){return e.some(hy)||fy(e)&&by(e)}function yy(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function vy(e){let o=yy();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){o.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");o.available=n[1]||o.available,o.oldest=n[2]||o.oldest,o.newest=n[3]||o.newest,o.lastFlush=n[4]||o.lastFlush,o.sizeKb=Number(n[5])||0,o.writes=Number(n[6])||0}),o}async function bd(e={}){if(!h("trendHistoryEnabled")&&!hr()){let n=!!(t.trendHistoryMetadataSignature||t.trendHistoryMetadataError);return t.trendHistoryMetadata={},t.trendHistoryMetadataError="",t.trendHistoryMetadataSignature="",t.trendHistoryMetadataLastFetchAt=0,n}let o=e.force===!0,r=Date.now();if(!o&&t.trendHistoryMetadataFetchPromise)return t.trendHistoryMetadataFetchPromise;if(!o&&(t.trendHistoryMetadataSignature||t.trendHistoryMetadataError)&&r-Number(t.trendHistoryMetadataLastFetchAt||0)<Ln)return!1;t.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${Re()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=vy(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,p=l!==t.trendHistoryMetadataSignature||t.trendHistoryMetadataError!=="";return t.trendHistoryMetadata=i,t.trendHistoryMetadataError="",t.trendHistoryMetadataSignature=l,t.trendHistoryMetadataLastFetchAt=Date.now(),p})();try{return await t.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=t.trendHistoryMetadataError!==a;return t.trendHistoryMetadata={},t.trendHistoryMetadataError=a,t.trendHistoryMetadataSignature="",t.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{t.trendHistoryMetadataFetchPromise=null}}async function bn(e={}){await L(Zt(),"all",{concurrency:Ct,forceMissing:e.forceMissing===!0}),await Promise.all([bd({force:e.forceTrendHistory===!0}),lo({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function mr(e=[250,1e3,2500],o={}){e.forEach(r=>{window.setTimeout(()=>{t.nativeOpen||t.appView!=="settings"||bn({forceMissing:r===0,forceTrendHistory:o.forceTrendHistory===!0,forceEnergyHistory:o.forceEnergyHistory===!0}).finally(()=>{t.appView==="settings"&&t.mounted&&!t.nativeOpen&&d()})},r)})}var wy="@schema|openquatt.energy_history_import.v1",Sy=850,fn=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],qy={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},it={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function gr(e){let o=String(e||"").trim();return fn.some(r=>r.id===o)?o:"days_and_hours"}function yd(e){let o=gr(e);return fn.find(r=>r.id===o)||fn[1]}function Ty(e){let o=yd(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${o.fileLabel}-${r}.json`}async function vd(){if(t.energyHistoryExportBusy)return;let e=gr(t.energyHistoryExportMode),o=yd(e);if(t.energyHistoryExportMode=e,t.energyHistoryExportBusy=!0,t.energyHistoryExportError="",t.energyHistoryExportNotice="",d(),hr()){t.energyHistoryExportBusy=!1,t.energyHistoryExportNotice=`Preview: ${o.label.toLowerCase()} zou als JSON worden gedownload.`,d();return}try{let r=await fetch(`${Re()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();Ai(n,Ty(e)),t.energyHistoryExportNotice=`${o.label} ge\xEBxporteerd.`}catch(r){t.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{t.energyHistoryExportBusy=!1,d()}}function Is(e=!1){let o=e?t.energyHistoryImportNotice:"";t.energyHistoryImportFileName="",t.energyHistoryImportSource="",t.energyHistoryImportRange="",t.energyHistoryImportRecords=[],t.energyHistoryImportHourRecords=[],t.energyHistoryImportDuplicateCount=0,t.energyHistoryImportSkippedCount=0,t.energyHistoryImportInvalidCount=0,t.energyHistoryImportUnsupportedCount=0,t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,t.energyHistoryImportError="",t.energyHistoryImportNotice=o}function wd(e){if(e==null||e==="")return 0;let o=String(e).trim(),r=0,n=0,a=0,i=o.match(/^(\d{4})(\d{2})(\d{2})$/),l=Sd(o),p=o.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)r=Number(i[1]),n=Number(i[2]),a=Number(i[3]);else{if(l)return l.dateKey;if(p)r=Number(p[1]),n=Number(p[2]),a=Number(p[3]);else{let c=new Date(o);if(Number.isNaN(c.getTime()))return 0;r=c.getFullYear(),n=c.getMonth()+1,a=c.getDate()}}if(r<2020||r>2099||n<1||n>12||a<1||a>31)return 0;let u=new Date(Date.UTC(r,n-1,a));return u.getUTCFullYear()!==r||u.getUTCMonth()!==n-1||u.getUTCDate()!==a?0:r*1e4+n*100+a}function gd(e){let o=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(o)?`${o.slice(6,8)}-${o.slice(4,6)}-${o.slice(0,4)}`:""}function Ma(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function Sd(e){if(e==null||e==="")return null;let o=String(e).trim(),r=o.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(o),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),p=Number(r[4]),u=Number(r[5]||"0"),c=Number(r[6]||"0");if([a,i,l,p,u,c].some(f=>Number.isNaN(f)))return null;let m=n?new Date(o):new Date(a,i-1,l,p,u,c,0);if(Number.isNaN(m.getTime()))return null;let b=m.getFullYear(),y=m.getMonth()+1,v=m.getDate(),g=m.getHours();return b<2020||b>2099||y<1||y>12||v<1||v>31?null:{dateKey:b*1e4+y*100+v,hour:g}}function qd(e){if(e==null||e==="")return null;let o=Number(String(e).trim().replace(",","."));return!Number.isFinite(o)||o<0||o>=4294967295?null:Math.round(o)}function so(e,o,r=null){for(let n of o){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=qd(e[n]);if(a!==null)return a}return r}function Aa(e,o){return so(e,o)!==null}function Td(e){let o=wd(e.date_key??e.dateKey??e.date??e.from??Ma(e));if(!o)return null;let r=so(e,it.electricalInput),n=so(e,it.heatpumpHeatOutput);if(r===null||n===null)return null;let a=so(e,it.heatingInput,r),i=so(e,it.coolingInput,0),l=so(e,it.heatpumpCoolingOutput,0),p=so(e,it.boilerHeatOutput,0),u=so(e,it.systemHeatOutput,n+p),c=Aa(e,it.heatingInput)||Aa(e,it.coolingInput)||Aa(e,it.heatpumpCoolingOutput)||Aa(e,it.systemHeatOutput);return[a,i,l,p,u].some(m=>m===null)?null:{dateKey:o,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:p,systemHeatOutputWh:u,hasFullImportFields:c}}function Ey(e){let o=qd(e.hour??e.hour_of_day??e.hourOfDay);if(o!==null&&o>=0&&o<=23)return o;let r=Ma(e);if(r){let n=String(r).trim(),a=Sd(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let p=Number(l[1]);if(p>=0&&p<=23)return p}}return-1}function Cy(e){let o=Td(e),r=Ey(e);return!o||r<0||r>23?null:{...o,hour:r}}function ky(e){let o=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(u=>String(u).trim()!=="")&&o.push(r),r=[]};for(let u=0;u<e.length;u+=1){let c=e[u];a?c==='"'&&e[u+1]==='"'?(n+='"',u+=1):c==='"'?a=!1:n+=c:c==='"'?a=!0:c===","?i():c===`
`?l():c!=="\r"&&(n+=c)}if((n||r.length)&&l(),!o.length)return[];let p=o.shift().map(u=>String(u||"").trim());return o.map(u=>{let c={};return p.forEach((m,b)=>{m&&(c[m]=u[b]??"")}),c})}function Ha(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function xy(e){let o=[],r=[];if(Array.isArray(e)){let l=e.map(Ha);return fd(l)?r.push(...l):o.push(...l),{dailyRows:o,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return o.push(...a.map(Ha)),r.push(...i.map(Ha)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(p=>{r.push(Ha({...p,date:p.date??l.date}))})}),{dailyRows:o,hourlyRows:r,source:n}}function $y(e,o){let r=String(o||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let g=xy(JSON.parse(r));n=g.dailyRows,a=g.hourlyRows,i=g.source}else{let g=ky(r);fd(g)||String(e||"").toLowerCase().includes("hour")?a=g:n=g,i="CSV"}let l=new Map,p=new Map,u=0,c=0;n.forEach(g=>{let f=Td(g);if(!f){c+=1;return}l.has(f.dateKey)&&(u+=1),l.set(f.dateKey,f)}),a.forEach(g=>{let f=Cy(g);if(!f){c+=1;return}let w=`${f.dateKey}:${f.hour}`;p.has(w)&&(u+=1),p.set(w,f)});let m=[...l.values()].sort((g,f)=>g.dateKey-f.dateKey),b=[...p.values()].sort((g,f)=>g.dateKey-f.dateKey||g.hour-f.hour);if(!m.length&&!b.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let y=[...m.map(g=>g.dateKey),...b.map(g=>g.dateKey)].sort((g,f)=>g-f),v=y.length?`${gd(y[0])} t/m ${gd(y[y.length-1])}`:"";return{records:m,hourRecords:b,source:i,range:v,duplicates:u,invalid:c}}function Ay(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function Hy(e){let o=new Map;return e.forEach(r=>{o.has(r.dateKey)||o.set(r.dateKey,new Map),o.get(r.dateKey).set(r.hour,r)}),[...o.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(p=>p.hasFullImportFields);for(let p=0;p<24;p+=1){let u=n.get(p);u&&(a|=1<<p),l?i.push(u?.electricalInputWh??0,u?.heatingInputWh??0,u?.coolingInputWh??0,u?.heatpumpHeatOutputWh??0,u?.heatpumpCoolingOutputWh??0,u?.boilerHeatOutputWh??0,u?.systemHeatOutputWh??0):i.push(u?.electricalInputWh??0,u?.heatpumpHeatOutputWh??0,u?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function Ed(e){let o=new URLSearchParams;return o.set("records",[wy,...e].join(`
`)),t.energyHistoryCsrfToken&&o.set("csrf_token",t.energyHistoryCsrfToken),o}function My(e){let o=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(Ed(a)).length>Sy?(o.push(r),r=[n]):r=a}),r.length&&o.push(r),o}function Ry(e){let o=[];e.written>0&&o.push(`${e.written} dagrecords`),e.hourWritten>0&&o.push(`${e.hourWritten} uurdagen`);let r=o.length?`${o.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function Py(e){let o=await fetch(`${Re()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Ed(e)}),r=await o.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!o.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(qy[a]||a||`HTTP ${o.status}`)}return n}function Cd(e){let o=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return o?o.slice(6):""}async function Ny(){if(hr())return;let e=await fetch(`${Re()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=Cd(await e.text());if(!o)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");t.energyHistoryCsrfToken=o}function Oy(e,o){t.energyHistoryImportProgressPercent=o>0?Math.min(99,Math.max(1,Math.round(e/o*100))):0,d()}async function Dy(e){if(Is(),!e){d();return}t.energyHistoryImportFileName=e.name||"exportbestand";try{let o=$y(e.name||"",await e.text());t.energyHistoryImportRecords=o.records,t.energyHistoryImportHourRecords=o.hourRecords,t.energyHistoryImportSource=o.source,t.energyHistoryImportRange=o.range,t.energyHistoryImportDuplicateCount=o.duplicates,t.energyHistoryImportInvalidCount=o.invalid}catch(o){t.energyHistoryImportError=`Bestand kon niet worden gelezen. ${o.message}`}d()}function kd(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let o=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),Dy(o)},{once:!0}),document.body.appendChild(e),e.click()}async function xd(){if(t.energyHistoryImportBusy)return;let e=[...t.energyHistoryImportRecords.map(Ay),...Hy(t.energyHistoryImportHourRecords)];if(!e.length){t.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",d();return}if(t.energyHistoryImportBusy=!0,t.energyHistoryImportError="",t.energyHistoryImportNotice="",t.energyHistoryImportProgressPercent=1,d(),hr()){let n=new Set(t.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,t.energyHistoryImportNotice=`Preview: ${t.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,d();return}let o={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await Ny();let n=My(e);for(let a of n){let i=await Py(a);o.written+=Number(i.written||0),o.hourWritten+=Number(i.hour_written||0),o.duplicates+=Number(i.duplicates||0),o.skipped+=Number(i.skipped||0),o.invalid+=Number(i.invalid||0),o.unsupported+=Number(i.unsupported||0),r+=a.length,Oy(r,e.length)}t.energyHistoryImportProgressPercent=100,t.energyHistoryImportNotice=Ry(o),t.energyHistoryImportError="",t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,await bn({forceMissing:!0,forceEnergyHistory:!0})}catch(n){t.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,d()}}function Ly(){return $t()||t.appView==="settings"&&t.systemModal==="history-storage"}function Ra(){t.settingsBackupDraft=null,t.settingsBackupError="",t.settingsBackupBusy=!1}function Fy(){return{device:Ne(),installation:at(),topology:typeof ee=="function"?ee():"",firmware_version:le(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function $d(e){let o=R[e];if(!o)return;if(e==="setupComplete")return Yn();let r=E(e);if(r===""||r===null||r===void 0)return;if(o.domain==="switch"||o.domain==="binary_sensor")return k(e);if(o.domain==="number"){let a=Ee(r);return Number.isNaN(a)?void 0:a}return o.domain==="time"?xt(r)||void 0:o.domain==="datetime"?je(r)||void 0:String(r||"").trim()||void 0}function Ad(){let e={};return Bt.forEach(o=>{let r={};o.keys.forEach(n=>{let a=$d(n);a!==void 0&&(r[n]=a)}),e[o.id]=r}),{schema_version:Si,exported_at:new Date().toISOString(),source:Fy(),settings:e}}function Iy(e=Ad()){let o=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${o}.json`}function _y(e){let o=R[e];return o?.name?o.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function hd(e,o){if(o==null||o==="")return"\u2014";let r=R[e];return r?r.domain==="number"?j(e,o):r.domain==="time"?xt(o)?.slice(0,5)||"\u2014":r.domain==="datetime"?je(o)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?o?"Aan":"Uit":String(o).trim()||"\u2014":String(o).trim()||"\u2014"}function Wy(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function _s(e){let o=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=bc,a=0,i=0,l=0,p=0,u=0,c=0,m=0,b=0,y=Bt.map(v=>{let g=o[v.id]&&typeof o[v.id]=="object"?o[v.id]:{},f=0,w=0,S=0,q=0,C=0,$=0,H=0,W=v.keys.map(B=>{let I=!!R[B]?.optional,z=Object.prototype.hasOwnProperty.call(g,B),re=z?g[B]:void 0,he=$d(B),Z=h(B),D=z?hd(B,re):I?"Niet op huidige installatie":"Ontbreekt in backup",Y=Z?hd(B,he):I?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",N="same";return!z&&I?N="optional-missing":z?Z?JSON.stringify(he)!==JSON.stringify(re)&&(N="different"):N=I?"optional-unavailable":"current-missing":N="missing",Z&&(H+=1,b+=1),N!=="same"&&($+=1,m+=1),I?(C+=1,z?(S+=1,l+=1):(q+=1,p+=1)):z?(f+=1,a+=1):(w+=1,i+=1),{key:B,label:_y(B),optional:I,hasBackupValue:z,backupDisplay:D,currentDisplay:Y,status:N,statusLabel:Wy(N)}});return c+=v.keys.filter(B=>!R[B]?.optional).length,{id:v.id,label:v.label,present:f,currentPresent:H,requiredTotal:v.keys.filter(B=>!R[B]?.optional).length,optionalTotal:C,optionalPresent:S,optionalMissing:q,requiredMissing:w,total:v.keys.length,differenceCount:$,rows:W}});return Object.entries(o).forEach(([v,g])=>{if(!Bt.some(f=>f.id===v)){u+=1;return}!g||typeof g!="object"||Object.keys(g).forEach(f=>{n.has(f)||(u+=1)})}),{source:r,sectionSummaries:y,requiredPresent:a,requiredMissing:i,requiredAvailable:c,optionalPresent:l,optionalMissing:p,unknown:u,differenceCount:m,currentPresent:b,requiredTotal:c,total:Kt.length}}function Vy(e,o=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<Si)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,file_name:o||""};return i.summary=_s(i),i}async function By(){t.settingsBackupBusy=!0,t.controlError="",t.controlNotice="",d();try{return await L(Kt,"all"),Ad()}finally{t.settingsBackupBusy=!1,d()}}async function Hd(){if(!t.settingsBackupBusy)try{let e=await By();Pc(Iy(e),e),t.controlNotice="Settings-backup gedownload.",d()}catch(e){t.controlError=`Backup exporteren mislukt. ${e.message}`,d()}}async function Md(e){if(!(!e||t.settingsBackupBusy)){t.settingsBackupBusy=!0,t.settingsBackupDraft=null,t.settingsBackupError="",t.controlError="",t.controlNotice="",d();try{let o=await e.text();await L(Kt,"all");let r=Vy(o,e.name||"");t.settingsBackupDraft=r,t.systemModal="settings-backup-restore"}catch(o){t.settingsBackupDraft=null,t.settingsBackupError=`Backupbestand kon niet worden gelezen. ${o.message}`}finally{t.settingsBackupBusy=!1,d()}}}async function Rd(){let e=t.settingsBackupDraft;if(!e||t.settingsBackupBusy)return;t.settingsBackupBusy=!0,t.settingsBackupError="",t.controlError="",t.controlNotice="",d();let o=[],r=[],n=!1;try{await L(Kt,"all");for(let i of Bt){let l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(let p of i.keys){if(!Object.prototype.hasOwnProperty.call(l,p)){r.push(p);continue}let u=l[p];if(p==="setupComplete"){n=u===!0;continue}if(p==="openquattEnabled")continue;if(!R[p]||!h(p)){r.push(p);continue}try{await io(p,u),o.push(p)}catch{r.push(p)}}}let a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&h("openquattEnabled")&&(await io("openquattEnabled",a),o.push("openquattEnabled")),n&&R.apply){let i=await fetch(U("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);o.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&r.push("setupComplete");t.systemModal="settings-backup-success",Ra(),t.controlNotice=`Backup hersteld (${o.length} toegepast${r.length?`, ${r.length} overgeslagen`:""}).`,await ue()}catch(a){t.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{t.settingsBackupBusy=!1,d()}}function hr(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function Ws(e={}){if(!rt()){let n=!!(t.trendHistoryRaw||t.trendHistoryError);return t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,n}if(hr())return!1;let o=e.force===!0,r=Date.now();if(!o&&t.trendHistoryFetchPromise)return t.trendHistoryFetchPromise;if(!o&&(t.trendHistoryRaw||t.trendHistoryError)&&r-Number(t.trendHistoryLastFetchAt||0)<Ln)return!1;t.trendHistoryFetchPromise=(async()=>{let n=hn(t.trendWindowHours||dt);n!==t.trendWindowHours&&dr(n);let a=await fetch(`${Re()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),p=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(p=Number(l[0].slice(5)),u=l.slice(1).join(`
`));let c=`${n}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,m=Number.isFinite(t.trendHistoryNowMs),y=Number.isFinite(p)?!m||t.trendHistoryNowMs!==p:m,v=u!==t.trendHistoryRaw||t.trendHistoryError!==""||t.trendHistorySignature!==c||y;return t.trendHistoryRaw=u,t.trendHistoryError="",t.trendHistorySignature=c,t.trendHistoryNowMs=Number.isFinite(p)?p:Number.NaN,t.trendHistoryLastFetchAt=Date.now(),v})();try{return await t.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=t.trendHistoryError!==a;return t.trendHistoryError=a,t.trendHistoryRaw="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=Date.now(),i}finally{t.trendHistoryFetchPromise=null}}async function lo(e={}){if(!h("lifetimeEnergyHistoryEnabled")&&!hr()){let a=!!(t.energyHistoryRaw||t.energyHistoryError);return t.energyHistoryRaw="",t.energyHistoryError="",t.energyHistorySignature="",t.energyHistoryNowMs=Number.NaN,t.energyHistoryLastFetchAt=0,t.energyHistoryRequestQuery="",t.energyHistoryFetchQuery="",t.energyHistoryCsrfToken="",a}let o=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof gn=="function"?gn():"";if(!o&&t.energyHistoryFetchPromise&&t.energyHistoryFetchQuery===n)return t.energyHistoryFetchPromise;if(!o&&t.energyHistoryRequestQuery===n&&(t.energyHistoryRaw||t.energyHistoryError)&&r-Number(t.energyHistoryLastFetchAt||0)<Ln)return!1;t.energyHistoryFetchQuery=n,t.energyHistoryFetchPromise=(async()=>{let a=async f=>{let w=await fetch(`${Re()}/energy/history${f}`,{cache:"no-store"});if(!w.ok)throw new Error(`HTTP ${w.status}`);return w.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof gn=="function"){let f=t.energyHistoryRaw;t.energyHistoryRaw=l;let w=gn();t.energyHistoryRaw=f,w&&w!==i&&(i=w,l=await a(i))}let p=l.split(/\r?\n/),u=Cd(l)||t.energyHistoryCsrfToken,c=Number.NaN;p.forEach(f=>{f.startsWith("@now|")&&(c=Number(f.slice(5)))});let m=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,b=Number.isFinite(t.energyHistoryNowMs),v=Number.isFinite(c)?!b||t.energyHistoryNowMs!==c:b,g=l!==t.energyHistoryRaw||t.energyHistoryError!==""||t.energyHistorySignature!==m||v||u!==t.energyHistoryCsrfToken;return t.energyHistoryRaw=l,t.energyHistoryError="",t.energyHistorySignature=m,t.energyHistoryNowMs=Number.isFinite(c)?c:Number.NaN,t.energyHistoryLastFetchAt=Date.now(),t.energyHistoryRequestQuery=i,t.energyHistoryCsrfToken=u,g})();try{return await t.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=t.energyHistoryError!==i;return t.energyHistoryError=i,t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryNowMs=Number.NaN,t.energyHistoryLastFetchAt=Date.now(),t.energyHistoryRequestQuery=n,t.energyHistoryCsrfToken="",l}finally{t.energyHistoryFetchPromise=null}}vu({refreshEnergyHistoryData:lo,refreshSettingsStorageState:bn,refreshTrendHistoryData:Ws,refreshTrendHistoryMetadata:bd,shouldRefreshSettingsStorageForCurrentSurface:Ly});function Pd(){return O("controlModeLabel","").toLowerCase().includes("standby")}function vt(e,o){e&&e.innerHTML!==o&&(e.innerHTML=o)}function st(e,o,r){return!e||e.dataset.renderSignature===o?!1:(e.outerHTML=r,!0)}function Ky([e,o]){let r=ki(o);if(!h(o)&&Number.isNaN(r))return"";let n=Ci(o)?Ue(o):O(o);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function jy(e){let o=e.rows.map(Ky).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${o}
        </div>
      </section>
    `:""}function Uy(e){let o=e.groups.map(jy).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${o}
        </div>
      </section>
    `:""}function Gy(e){let o=e.categories.map(Uy).filter(Boolean).join("");return o?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${o}
        </div>
      </article>
    `:""}function js(){let e=jn.map(Gy).filter(Boolean),o=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:o}}function Fd(e=js()){return Se(e)}function Id(e=js()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(Fd(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var Oa=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],_d=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],zy=new Set(["day","week","month","year"]),Qy=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Oe(e){let o=String(e||"").trim();return _d.some(r=>r.id===o)?o:"day"}function Us(e){let o=Oe(e);t.energyHistoryView!==o&&(t.energyHistoryView=o,t.energyHistoryLastFetchAt=0,d(),Wd())}function Wd(){typeof lo=="function"&&lo({force:!0}).then(e=>{e&&d()})}function vr(e){return zy.has(Oe(e))}function Da(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function yn(){let e=String(t.energyHistoryRaw||""),o={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(r=>{if(!r.startsWith("@bounds|")&&!r.startsWith("@day_retention|")&&!r.startsWith("@hour_retention|"))return;let n=r.split("|");r.startsWith("@bounds|")?(o.storedDayCount=Number(n[1])||0,o.oldestDateKey=Number(n[2])||null,o.newestDateKey=Number(n[3])||null,o.hourStoredDayCount=Number(n[4])||0,o.hourOldestDateKey=Number(n[5])||null,o.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(o.dayPartitionAvailable=Number(n[1])===1,o.dayStorageKb=Number(n[2])||0,o.dayWriteCount=Number(n[3])||0,o.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(o.hourRequestedRetentionDays=Number(n[1])||0,o.hourSlotCount=Number(n[2])||0,o.hourPartitionAvailable=Number(n[3])===1,o.hourRecordCount=Number(n[4])||0,o.hourWriteCount=Number(n[5])||0,o.hourStorageKb=Number(n[6])||0,o.hourLastWriteTimestampS=Number(n[7])||0)}),o}function Gs(){let e=String(t.energyHistoryRaw||""),o=null;return e.split(/\r?\n/).forEach(r=>{let n=Qd(r);n&&(o=n.dateKey)}),o}function Yy(e=[],o=!0){let r=Gs(),n=yn(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),o&&La().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):Da()}function Je(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Vd(e,o,r){return new Date(e,o-1,r,12,0,0)}function Bd(e,o){return new Date(e,o,0).getDate()}function Nd(e){return String(e).padStart(2,"0")}function Vs(e){let o=oe(e);return o?`${o.year}-${Nd(o.month)}-${Nd(o.day)}`:""}function Kd(e){let o=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!o)return null;let r=Number(o[1]),n=Number(o[2]),a=Number(o[3]),i=Vd(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:oe(Je(i))}function jd(e,o){return Number(e)*100+Number(o)}function Ks(e){return jd(e.getFullYear(),e.getMonth()+1)}function br(e){let o=Number(e);if(!Number.isFinite(o)||o<=0)return null;let r=Math.floor(o/100),n=o%100;return r<2020||n<1||n>12?null:{key:o,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function Zy(e){let o=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(o);return br(r?jd(Number(r[1]),Number(r[2])):o)}function Ud(e,o){let r=br(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(o||0),1,12,0,0);return String(Ks(n))}function vn(e){let o=new Date(e.getTime()),r=o.getDay(),n=r===0?-6:1-r;return o.setDate(o.getDate()+n),o.setHours(12,0,0,0),o}function yr(e,o){let r=new Date(e.getTime());return r.setDate(r.getDate()+o),r.setHours(12,0,0,0),r}function Od(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function Gd(e){let o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(o.getUTCDay()+6)%7;o.setUTCDate(o.getUTCDate()-r+3);let n=o.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((o-a)/(10080*60*1e3)),year:n}}function Dd(e){return Je(vn(e))}function Jy(e){let r=Kd(e)||oe(e);if(!r)return null;let n=vn(r.date);return oe(Je(n))}function zd(e){let o=oe(e);if(!o)return"Week";let r=vn(o.date),n=yr(r,6);return`Week ${Gd(r).week} (${Od(r)} - ${Od(n)})`}function oe(e){let o=Number(e);if(!Number.isFinite(o)||o<=0)return null;let r=Math.floor(o/1e4),n=Math.floor(o/100)%100,a=o%100;return r<2020||n<1||n>12||a<1||a>31?null:{key:o,year:r,month:n,day:a,date:new Date(r,n-1,a,12,0,0)}}function Ft(e,o="day"){let r=oe(e);return r?o==="weekday"?Qy[r.date.getDay()]||"":o==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):o==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function No(e){let o=A(e);return!Number.isFinite(o)||o<0?null:Math.round(o*1e3)}function Xy(e){let o=Number(e);return Number.isFinite(o)&&o>=0?o:null}function zs(e,o=0){let r={};return Oa.forEach((n,a)=>{r[n]=Xy(e[o+a])}),r}function ev(e){let o=String(e||"").trim();if(!o||o.startsWith("@"))return null;let r=o.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=oe(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...zs(r,3)}}function Qd(e){let o=String(e||"").trim();if(!o.startsWith("@current|"))return null;let r=o.split("|");if(r.length<9)return null;let n=Number(r[1]),a=oe(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...zs(r,2)}:null}function tv(e){let o=String(e||"").trim();if(!o.startsWith("@hour|"))return null;let r=o.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=oe(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...zs(r,4)}}function ov(){let e=Gs()||Da(),o=oe(e);if(!o)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:o.year,month:o.month,day:o.day,partial:!0,source:"sensors",electricalInputWh:No("electricalEnergyDaily"),heatingInputWh:No("heatingElectricalEnergyDaily"),coolingInputWh:No("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:No("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:No("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:No("boilerThermalEnergyDaily"),systemHeatOutputWh:No("systemThermalEnergyDaily")};return Oa.some(n=>Number.isFinite(r[n]))?r:null}function wn(e,o){let r=Number(e?.[o]);return Number.isFinite(r)&&r>=0?r:0}function Sn(){let e=new Map;String(t.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=ev(i)||Qd(i);if(!l)return;let p=e.get(l.dateKey);(!p||l.sequence>=p.sequence)&&e.set(l.dateKey,l)});let r=ov();r&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return La().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let p=oe(i.dateKey);if(!p)return;l=Oo({dateKey:p.key,year:p.year,month:p.month,day:p.day,label:Ft(p.key),sortKey:p.key,source:"hour-summary"}),l.tooltipLabel=`${Ft(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Do(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function La(){let e=new Map;return String(t.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=tv(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function rv(e){return La().filter(o=>o.dateKey===Number(e))}function fr(e,o){return e.reduce((r,n)=>r+wn(n,o),0)}function Yd(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((o,r)=>o+wn(e,r),0)}function nv(e){return wn(e,"electricalInputWh")+Yd(e)}function Na(e,o){let r=Number(e),n=Number(o);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function Ze(e,o=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(o)} kWh`:"\u2014"}function Oo({dateKey:e,year:o,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:p,source:u="bucket"}){return{sequence:0,dateKey:e,year:o,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:p??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Do(e,o){return Oa.forEach(r=>{e[r]+=wn(o,r)}),e.partial=e.partial||!!o?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(o?.sequence||0)),e}function av(e){let o=new Map;return e.forEach(r=>{o.set(r.dateKey,r)}),o}function Zd(e,o){let r=Oe(e);if(r==="day"){let n=Kd(o)||oe(o);return n?String(n.key):""}if(r==="week"){let n=Jy(o);return n?String(n.key):""}if(r==="month"){let n=Zy(o);return n?String(n.key):""}if(r==="year"){let n=Number(o);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function Fa(e,o){let r=Oe(o),n=oe(Yy(e,!0)),a=yn(),i=La(),l=[...e.map(v=>v.dateKey),...i.map(v=>v.dateKey)].filter(v=>Number.isFinite(Number(v)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let p=l.length?Math.min(...l.map(Number)):n?.key,c=(p?oe(p):n)?.date||n?.date||new Date,m=n?.date||new Date,b=n?.key||Da(),y=b;return r==="week"?(b=Dd(c),y=Dd(m)):r==="month"?(b=Ks(c),y=Ks(m)):r==="year"?(b=c.getFullYear(),y=m.getFullYear()):(b=Je(c),y=Je(m)),Number(b)>Number(y)&&(b=y),{min:String(b),max:String(y)}}function Jd(e,o){let r=Number(e);return Number.isFinite(r)?r<Number(o.min)?String(o.min):r>Number(o.max)?String(o.max):String(e):String(o.max)}function iv(e,o,r=Fa(e,o)){let n=Oe(o),a=t.energyHistoryPeriodSelection?.[n],i=Zd(n,a);return Jd(i||r.max,r)}function sv(e,o){let r=Oe(e),n=[],a=0;if(r==="week"){let i=String(o.max);for(;Number(i)>=Number(o.min)&&a<6e3;){let l=oe(i);n.push({value:i,label:zd(i),group:l?String(Gd(l.date).year):""}),i=l?String(Je(yr(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(o.max);for(;Number(i)>=Number(o.min)&&a<1200;){let l=br(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Ud(i,-1),a+=1}return n}if(r==="year")for(let i=Number(o.max);i>=Number(o.min);i-=1)n.push({value:String(i),label:String(i)});return n}function Ia(e,o){let r=Oe(o);if(!vr(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=Fa(e,r),a=iv(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:sv(r,n)}}function lv(e,o){let r=Oe(o);if(!vr(r))return{from:"",to:"",hours:"0"};let n=Ia(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=oe(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=vn(a.date),l=yr(i,6);return{from:String(Je(i)),to:String(Je(l)),hours:"0"}}if(r==="month"){let a=br(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Bd(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function cv(){if(!String(t.energyHistoryRaw||"").trim())return"?meta=1";let e=Sn(),o=lv(e,t.energyHistoryView||"day"),r=new URLSearchParams;o.from&&r.set("from",o.from),o.to&&r.set("to",o.to),r.set("hours",o.hours);let n=r.toString();return n?`?${n}`:""}md(cv);function qn(e,o){let r=Oe(e);if(!vr(r))return;let n=Sn(),a=Fa(n,r),i=Zd(r,o),l=Jd(i||a.max,a);t.energyHistoryPeriodSelection={...t.energyHistoryPeriodSelection,[r]:l},t.energyHistoryLastFetchAt=0,d(),Wd()}function Qs(e,o){let r=Oe(e);if(!vr(r))return;let n=Sn(),a=Ia(n,r),i=Number(o)<0?-1:1,l=a.selectedValue;if(r==="day"){let p=oe(a.selectedValue);l=p?String(Je(yr(p.date,i))):l}else if(r==="week"){let p=oe(a.selectedValue);l=p?String(Je(yr(p.date,i*7))):l}else r==="month"?l=Ud(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));qn(r,l)}function Ys(e){let o=Oe(e);if(!vr(o))return;let r=Sn(),n=Fa(r,o);qn(o,n.max)}function uv(e,o,r=Ia(e,o)){let n=Oe(o),a=av(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let p=oe(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=rv(p.key);if(u.length){let v=new Map(u.map(f=>[f.hour,f])),g=[];for(let f=0;f<24;f+=1){let w=String(f),S=`${p.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(f).padStart(2,"0")}:00 - ${String((f+1)%24).padStart(2,"0")}:00`,q=Oo({dateKey:p.key,year:p.year,month:p.month,day:p.day,hour:f,label:w,tooltipLabel:S,sortKey:f,source:"hour"}),C=v.get(f);C&&Do(q,C),g.push(q)}return{buckets:g,title:"Dag",detail:`${p.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let c=a.get(p.key),m=Gs()||Da(),b=p.key===m?"Vandaag":Ft(p.key),y=Oo({dateKey:p.key,year:p.year,month:p.month,day:p.day,label:b,sortKey:p.key,source:"day"});return c&&Do(y,c),{buckets:[y],title:"Dag",detail:`${p.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let p=oe(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=vn(p.date),c=[];for(let m=0;m<7;m+=1){let b=yr(u,m),y=Je(b),v=oe(y),g=Oo({dateKey:y,year:v.year,month:v.month,day:v.day,label:Ft(y,"weekday"),sortKey:y}),f=a.get(y);f&&Do(g,f),c.push(g)}return{buckets:c,title:"Week",detail:zd(r.selectedValue)}}if(n==="month"){let p=br(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=Bd(p.year,p.month),c=[];for(let m=1;m<=u;m+=1){let b=Vd(p.year,p.month,m),y=Je(b),v=Oo({dateKey:y,year:p.year,month:p.month,day:m,label:String(m),sortKey:y}),g=a.get(y);g&&Do(v,g),c.push(v)}return{buckets:c,title:"Maand",detail:p.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let p=Number(r.selectedValue);if(!Number.isInteger(p))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=[];for(let c=1;c<=12;c+=1){let m=p*1e4+c*100+1,b=Oo({dateKey:m,year:p,month:c,day:1,label:Ft(m,"month"),sortKey:c,source:"month"});e.filter(y=>y.year===p&&y.month===c).forEach(y=>Do(b,y)),u.push(b)}return{buckets:u,title:"Jaar",detail:String(p)}}let i=new Map;e.forEach(p=>{i.has(p.year)||i.set(p.year,Oo({dateKey:p.year*1e4+101,year:p.year,month:1,day:1,label:String(p.year),sortKey:p.year,source:"year"})),Do(i.get(p.year),p)});let l=[...i.values()].sort((p,u)=>p.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function pv(e){let o=fr(e,"heatpumpHeatOutputWh"),r=fr(e,"heatpumpCoolingOutputWh"),n=fr(e,"boilerHeatOutputWh");return{electricalInputWh:fr(e,"electricalInputWh"),heatingInputWh:fr(e,"heatingInputWh"),coolingInputWh:fr(e,"coolingInputWh"),heatOutputWh:o,coolingOutputWh:r,boilerOutputWh:n,outputWh:o+r+n}}function dv(e){let o=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=o+r;return!Number.isFinite(n)||n<=0?Number.NaN:o/n*100}function Pa(e,o,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function Bs(e,o,r){let n=[];r.forEach(i=>{let l=String(i.group||""),p=n[n.length-1];(!p||p.label!==l)&&(p={label:l,options:[]},n.push(p)),p.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
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
        <span>${s(o)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${s(e.view)}"
        >
          ${a}
        </select>
      </label>
    `}function Ld(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Vs(e.selectedValue))}"
            min="${s(Vs(e.minValue))}"
            max="${s(Vs(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?Bs(e,"Week",e.options):e.view==="month"?Bs(e,"Maand",e.options):e.view==="year"?Bs(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function mv(e){return vr(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Ld(e)}
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
          ${Ld(e)}
        </div>
      `}function gv(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function hv(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${_d.map(o=>{let r=o.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(o.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(o.label)}</button>
          `}).join("")}
      </div>
    `}function fv(e){let o=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,o+r+n+a),p=c=>`${Math.max(0,Number(c||0)/l*100).toFixed(2)}%`,u=dv(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${p(o)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${p(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${p(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${p(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Ze(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Ze(o,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Ze(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Ze(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function bv(e){let o=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(o))),n=o/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function yv(e){let o=Number(e);return Number.isFinite(o)?o>=999500?`${Number((o/1e6).toFixed(1))}`:`${Number((o/1e3).toFixed(1))}`:""}function vv(e){return e>=999500?"MWh":"kWh"}function wv(e){let c=Math.max(1e3,...e.map(nv)),m=bv(c),b=e.length?1218/e.length:1218,y=Math.max(6,Math.min(38,b*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:m,barSlot:b,barWidth:y,yOf:g=>26+(1-Math.min(1,Math.max(0,Number(g||0)/m)))*196}}function Sv(e){let o=Na(e.heatpumpHeatOutputWh,e.heatingInputWh),r=Na(e.heatpumpCoolingOutputWh,e.coolingInputWh),n=Na(Yd(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Ft(e.dateKey),`Elektrisch: ${Ze(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${Ze(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Ze(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${Ze(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${o}`,`EER koelen: ${r}`,`Output / elektrisch: ${n}`].join(`
`)}function qv(e,o=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=wv(e),n=vv(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,p)=>{let u=r.left+r.barSlot*p+r.barSlot/2,c=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],m=r.height-r.bottom,b=c.map(f=>{let w=wn(l,f.key);if(w<=0)return"";let S=w/r.axisMax*r.plotHeight;return m-=S,`
          <rect
            x="${(u-r.barWidth/2).toFixed(1)}"
            y="${m.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${f.className}"
          >
            <title>${s(`${l.label} \xB7 ${f.label}: ${Ze(w,1)}`)}</title>
          </rect>
        `}).join(""),v=e.length<=12||p===0||p===e.length-1||p%3===0?`<text x="${u.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Ft(l.dateKey))}</text>`:"",g=Sv(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(g)}" tabindex="0">
          <title>${s(g)}</title>
          <rect
            x="${(u-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${b}
        </g>
        ${v}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(Oe(o))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let p=r.yOf(l);return`
            <line x1="${r.left}" y1="${p.toFixed(1)}" x2="${r.width-r.right}" y2="${p.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${p.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(yv(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function Tv(e=null){let o=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[o,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function Zs(){let e=Sn(),o=Oe(t.energyHistoryView),r=Ia(e,o),n=uv(e,o,r),a=pv(n.buckets);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:a,activeView:o}}function Xd(e=Zs()){return Se({energyHistorySignature:t.energyHistorySignature||"",energyHistoryError:t.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:Oa.map(o=>e.buckets[e.buckets.length-1]?.[o]??null)})}function em(e=Zs()){let o=e.summary,r=e.buckets[0]?.dateKey?Ft(e.buckets[0].dateKey):"\u2014",n=e.buckets[e.buckets.length-1]?.dateKey?Ft(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Xd(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${hv(e.activeView)}
          ${mv(e.periodControl)}
        </div>
        ${t.energyHistoryError?`<p class="oq-energy-history-error">${s(t.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${Pa("Gemiddelde COP",Na(o.heatOutputWh,o.heatingInputWh),`${s(r)} - ${s(n)}`)}
          ${Pa("Elektrisch",Ze(o.electricalInputWh,1),"verbruikt")}
          ${Pa("Warmtepomp",Ze(o.heatOutputWh+o.coolingOutputWh,1),"warmte en koeling")}
          ${Pa("Cv-ketel",Ze(o.boilerOutputWh,1),"thermisch")}
        </div>
        ${fv(o)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${qv(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Tv(o)}
      </section>
    `}function Js(e){if(t.appView!=="results"||!t.root)return;let o=e.target.closest?.("[data-oq-energy-history-tip]"),r=o?.closest?.(".oq-energy-history-chart-wrap")||t.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!o||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(o.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(c=>`<span>${s(c)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),p=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${p.toFixed(0)}px, ${u.toFixed(0)}px)`}function tm(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${Id()}
        </div>
      </section>
    `}function om(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${em()}
        </div>
      </section>
    `}function Ev(){if(!t.root||t.appView!=="energy")return!1;let e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-overview-energy"):null;if(!e||!o)return!1;let r=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==r&&(e.className=r);let n=js();return st(o,Fd(n),Id(n))}function Cv(){if(!t.root||t.appView!=="results")return!1;let e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-energy-history"):null;if(!e||!o)return!1;let r=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==r&&(e.className=r);let n=Zs(),a=gv();return(a?!1:st(o,Xd(n),em(n)))||a}Yo({patchEnergyDom:Ev,patchResultsDom:Cv});function Xs(e,o,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function rm(e){let o=String(e||"").trim(),r=o.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:o}function el(e,o,r,n="",a="",i=""){if(!h(e))return"";let l=!!E(e),p=t.loadingEntities||t.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(o)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${gs(e,l,n,a)}
        </div>
        ${Pt(e,o,l,p)}
      </article>
    `}function kv(e,o,r,n=""){if(!h(e))return"";let a=t.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(E(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(o)}</h4>
            ${n?`<span>${s(n)}</span>`:""}
          </div>
          <p>${s(r)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${t.loadingEntities?"disabled":""}>
            ${i.map(p=>`<option value="${s(p)}" ${p===l?"selected":""}>${s(qe(p))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function xv(e){return h(e)||!!R[e]&&!t.optionalMissingEntities?.[e]}function tl(e,o,r,n={}){if(!xv(e))return"";let a=h(e),i=a&&(t.loadingEntities||t.busyAction===e),l=n.disabled===!0||!a,p=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(p)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||o)}
      </button>
    `}function $v(){return t.trendHistoryMetadata&&typeof t.trendHistoryMetadata=="object"?t.trendHistoryMetadata:{}}function wr(){return!!t.trendHistoryMetadataSignature}function Sr(){return!!(t.energyHistoryRaw||t.energyHistorySignature)}function Xe(e){return e?"Niet geladen":"Laden..."}function De(e,o="\u2014"){if(h(e))return Te(e);let r=Av(e);return r==null||r===""?o:r}function Av(e){let o=$v();if(e==="trendHistoryFlashAvailable")return wr()?o.available||"Alleen live":Xe(t.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return wr()?o.oldest||"Geen data":Xe(t.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return wr()?o.newest||"Geen data":Xe(t.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return wr()?o.lastFlush||"Geen data":Xe(t.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return wr()?ol(o.sizeKb):Xe(t.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return wr()?rl(o.writes):Xe(t.trendHistoryMetadataError);let r=im(),a=String(t.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?Sr()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":nm(r.storedDayCount,"Geen data"):Xe(t.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?Sr()?_a(r.oldestDateKey):Xe(t.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?Sr()?_a(r.newestDateKey):Xe(t.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?Sr()?am(r.dayLastWriteTimestampS):Xe(t.energyHistoryError):e==="lifetimeEnergyHistorySize"?Sr()?ol(r.dayStorageKb):Xe(t.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?Sr()?rl(r.dayWriteCount):Xe(t.energyHistoryError):null}function nm(e,o="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function ol(e,o="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:`${Math.round(r)} kB`}function rl(e,o="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:String(Math.round(r))}function _a(e){let o=typeof oe=="function"?oe(e):null;return o?o.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function am(e,o="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return o;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function im(){return typeof yn!="function"?{}:yn()}function Hv(e){let o=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${o.map(r=>`
            <div>
              <span>${s(r.label)}</span>
              <strong>${s(r.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function Mv(e){let o=e.filter(Boolean);return o.length?`
      <details class="oq-settings-storage-technical"${t.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(o.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${o.map(Hv).join("")}
        </div>
      </details>
    `:""}function sm(){if(!h("trendHistoryEnabled")&&!h("lifetimeEnergyHistoryEnabled"))return"";let e=k("trendHistoryEnabled"),o=e&&k("trendHistoryFlashEnabled"),r=h("lifetimeEnergyHistoryEnabled"),n=r&&k("lifetimeEnergyHistoryEnabled"),a=o?De("trendHistoryFlashAvailable","Alleen live"):"Alleen live",i=r?rm(De("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return te("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${h("trendHistoryEnabled")?Xs("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${h("trendHistoryFlashEnabled")?Xs("Diagnosehistorie",a,o?"Permanent geheugen":"Uit",o):""}
            ${r?Xs("Energiehistorie",i,n?"Permanent geheugen":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function Rv(){if(!h("lifetimeEnergyHistoryEnabled"))return"";let e=t.energyHistoryImportRecords.length,o=new Set(t.energyHistoryImportHourRecords.map(p=>p.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),o>0&&r.push(`${o} uurdagen`),t.energyHistoryImportRange&&r.push(t.energyHistoryImportRange),t.energyHistoryImportSource&&r.push(t.energyHistoryImportSource),t.energyHistoryImportInvalidCount>0&&r.push(`${t.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!t.energyHistoryImportFileName,a=e>0||o>0,i=Number(t.energyHistoryImportProgressPercent||0),l=t.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
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
              <strong>${s(t.energyHistoryImportFileName)}</strong>
              ${r.length?`<p>${s(r.join(" \xB7 "))}</p>`:""}
              ${t.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryImportNotice)}</p>`:""}
              ${t.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${t.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${t.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${t.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryImportNotice)}</p>`:""}
          ${t.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function Pv(){if(!h("lifetimeEnergyHistoryEnabled"))return"";let e=gr(t.energyHistoryExportMode),o=fn.map(n=>`
      <option value="${s(n.id)}" ${n.id===e?"selected":""}>
        ${s(n.label)}
      </option>
    `).join(""),r=t.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${t.energyHistoryExportBusy?"disabled":""}>
              ${o}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${t.energyHistoryExportBusy?"disabled":""}>
              ${s(r)}
            </button>
          </div>
        </div>
        ${t.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryExportNotice)}</p>`:""}
        ${t.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryExportError)}</p>`:""}
      </div>
    `}function lm(){let e=h("trendHistoryEnabled")&&k("trendHistoryEnabled"),o=e&&h("trendHistoryFlashEnabled")&&k("trendHistoryFlashEnabled"),r=h("lifetimeEnergyHistoryEnabled"),n=r&&k("lifetimeEnergyHistoryEnabled"),a=r?De("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",i=h("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=rm(a),p=e&&h("trendHistoryFlush"),u=h("lifetimeEnergyHistoryCapture"),c=im(),m=String(t.energyHistoryRaw||"").includes("@hour_retention|"),b=m&&!c.hourPartitionAvailable,y=m?b?"Alleen live":nm(c.hourStoredDayCount,"Geen uurdata"):"Laden...",v=m?b?"Niet beschikbaar":ol(c.hourStorageKb):"Laden...",g=m?b?"Niet beschikbaar":rl(c.hourWriteCount):"Laden...",f=m?b?"Niet beschikbaar":am(c.hourLastWriteTimestampS):"Laden...",w=_a(c.hourOldestDateKey),S=_a(c.hourNewestDateKey),q=m?c.hourPartitionAvailable?`${w} t/m ${S}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",C=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:De("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${De("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:De("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:De("trendHistoryFlashSize")},{label:"Opslagacties",value:De("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:De("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${De("lifetimeEnergyHistoryOldest","Geen data")} t/m ${De("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:De("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:De("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:De("lifetimeEnergyHistoryLastWrite","Geen data")}]},h("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:y,note:q,items:[{label:"Dagen bewaard",value:y},{label:"Opslagruimte",value:v},{label:"Opslagacties",value:g},{label:"Laatst opgeslagen",value:f}]}:null];return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal" data-oq-history-storage-scroller role="dialog" aria-modal="true" aria-labelledby="oq-history-storage-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Gegevens</p>
              <h2 class="oq-helper-modal-title" id="oq-history-storage-modal-title">Gegevens bewaren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit gegevens bewaren">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen. Dit scherm verandert niets aan de werking of aansturing van je warmtepomp.</p>
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Diagnose</p>
                <h3>Diagnosegegevens</h3>
                <p>Technische metingen zoals temperatuur, doorstroming en vermogen. Deze gegevens zijn vooral bedoeld voor diagnosegrafieken en hulp bij problemen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${el("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${el("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${p?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${tl("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!o,busyLabel:"Opslaan..."})}
                  </div>
                `:""}
              </div>
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Resultaten</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor de Resultatenpagina, zoals opbrengst, verbruik, rendement en besparing. Hiermee kun je prestaties over langere tijd terugkijken.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${el("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${kv("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${u?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${tl("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!n,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                `:""}
                ${Pv()}
                ${Rv()}
                ${h("lifetimeEnergyHistoryClear")?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${tl("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${Mv(C)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function cm(){let e=t.settingsBackupBusy,o=Kt.length,r=Bt.length;return te("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(o))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(r))}</strong>
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
          <p class="oq-settings-action-note">Ontbrekende velden houden hun firmware-default. Onbekende velden uit een backup worden overgeslagen.</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
        </div>
      `)}function um(){let e=t.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-backup-import-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-import-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup import popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.</p>
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
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function pm(){let e=t.settingsBackupDraft;if(!e)return"";let o=e.summary||_s(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=at(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",p=le(),u=typeof ee=="function"?ee():"",c=l!=="Onbekend"&&u&&l!==u,m=r!=="Onbekend"&&r!==n,b=c||m?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":o.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-backup-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.</p>
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(p||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${s(i)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${s(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${s(`${o.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${s(o.differenceCount?`${o.differenceCount} ${o.differenceCount===1?"verschil":"verschillen"} \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`:`Alles komt overeen \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${o.sectionSummaries.map(y=>`
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
                    ${y.rows.map(v=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(v.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(v.label)}</strong>
                          <span>${s(v.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Backup</span>
                            <strong>${s(v.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Nu</span>
                            <strong>${s(v.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${o.unknown||o.requiredMissing||m?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${t.settingsBackupBusy?"disabled":""}>${t.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function Wa(){return[t.interfacePanelOpen?"open":"closed",t.nativeOpen?"native":"app",t.appView,t.complete?"complete":"incomplete",t.overviewTheme,t.hpVisualMode,K("installationTopology"),K("hardwareProfileText"),K("connectionText"),t.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",t.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",t.firmwareTopologySwitchOpen?"topology-open":"topology-closed",t.updateManualUploadOpen?"upload-open":"upload-closed",t.updateTestFirmwareOpen?"test-open":"test-closed",t.updateTestFirmwareError,K("hpGeneration"),K("projectVersionText"),K("releaseChannelText"),nl()].join("|")}function nl(){let e=Math.max(Number(t.lastEntityResponseAt||0),Number(t.lastEntitySyncAt||0)),o=Number(t.deviceReconnectStartedAt||0);return t.entitySyncFailureCount>0&&!t.deviceReconnectMode?"Bezig":e>0&&(!t.deviceReconnectMode||e>=o)?"Verbonden":t.deviceReconnectMode?Ut()?"Verbonden":t.deviceReconnectMode==="reconnect"?"Offline":"Bezig":h("status")&&!k("status")?"Offline":"Bezig"}function al(){return String(E("projectVersionText")||"").trim()||"\u2014"}function Nv(){let e=al();return e&&e!=="\u2014"?e:ro()}function Va(){let e=t.entities.espInternalTemp;if(!e)return"\u2014";let o=A("espInternalTemp");return Number.isNaN(o)?O("espInternalTemp"):_(o,1,e.uom||" \xB0C")}function Ov(){let e=[["Netwerkstatus",nl()],["IP-adres",Xo()]],o=String(E("wifiSsid")||"").trim();o&&e.push(["WiFi SSID",o]);let r=t.entities.wifiSignal;if(r){let n=A("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",_(n,0,r.uom||" dBm")])}return e}function dm(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function mm(){return[["installation","Installatie",at()],["uptime","Uptime",Jo()],["connectivity","Connectiviteit",nl()],["time","Tijd",ms()],["version","Versie",Nv(),!!ge()],["debugRecording","Debugopname",Lp(),!0],["webserverLog","Logboek",da(),!0]]}function gm(){return Ho()}function hm(e){return e==="version"&&gm()}function Tn(){return`
      <div class="oq-helper-status-grid">
        ${mm().map(([o,r,n,a])=>{let i=dm(o),l=!!(a||i),p=hm(o);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${p?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(o)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(r)}</span>
            <strong class="oq-helper-status-value">${p?`<span class="oq-helper-status-value-text">${s(n)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(n)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Dv(){if(!t.root)return!1;let e=t.root.querySelector(".oq-helper-status-grid");if(!e)return!!t.root.querySelector(".oq-helper-hub");let o=mm();if(e.querySelectorAll("[data-oq-header-status]").length!==o.length)return e.outerHTML=Tn(),!0;for(let[n,a,i,l]of o){let p=e.querySelector(`[data-oq-header-status="${n}"]`);if(!p)return e.outerHTML=Tn(),!0;let u=dm(n),c=!!(l||u);if(p.tagName.toLowerCase()!==(c?"button":"div"))return e.outerHTML=Tn(),!0;let m=p.querySelector(".oq-helper-status-label"),b=p.querySelector(".oq-helper-status-value");if(!m||!b)return e.outerHTML=Tn(),!0;m.textContent!==a&&(m.textContent=a);let y=hm(n),v=y?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);b.innerHTML!==v&&(b.innerHTML=v),c?p.setAttribute("data-oq-action",u):p.removeAttribute("data-oq-action"),p.classList.toggle("oq-helper-status-item--button",c),p.classList.toggle("oq-helper-status-item--attention",y)}return!0}function Lv(){let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function il(){let e=Lv();return e?t.devPanelOpen?`
      <aside class="oq-helper-devdock" aria-label="Preview en test">
        <div class="oq-helper-devdock-head">
          <div>
            <p class="oq-helper-devdock-kicker">Preview en test</p>
            <h2 class="oq-helper-devdock-title">Mockbediening</h2>
          </div>
          <button
            class="oq-helper-devdock-toggle oq-helper-devdock-toggle--close"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="true"
            aria-label="Sluit previewpaneel"
          >\xD7</button>
        </div>
        ${e}
      </aside>
    `:`
        <aside class="oq-helper-devdock oq-helper-devdock--collapsed" aria-label="Preview en test">
          <button
            class="oq-helper-devdock-toggle"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="false"
            aria-label="Open previewpaneel"
          >Preview</button>
        </aside>
      `:""}function fm(){let e=t.nativeOpen?"native":"app",o=gm();return t.interfacePanelOpen?`
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
              ${t.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${Tn()}
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
            ${As()}
            <button
              class="oq-helper-hub-toggle${o?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${tt("more-horizontal","oq-helper-hub-toggle-icon")}${o?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function bm(){let e=t.nativeOpen?"native":"app",o=t.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=t.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(t.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${s(o)}</p>
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
    `}hu({getSignature:Wa,patch:Dv});function ym(){if(t.systemModal==="login")return ad();if(t.systemModal==="api-security")return nd();if(t.systemModal==="mqtt")return Hu();if(t.systemModal==="mqtt-sensors")return Mu();if(t.systemModal==="connectivity"){let e=Ov();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-system-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-system-modal-title">Connectiviteit</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit systeem-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
            <div class="oq-helper-modal-grid">
              ${e.map(([o,r])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(o)}</span>
                  <strong class="oq-helper-modal-value">${s(r)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="settings-backup-restore")return pm();if(t.systemModal==="settings-backup-import")return um();if(t.systemModal==="history-storage")return lm();if(String(t.systemModal||"").startsWith("service-task-"))return ud();if(t.systemModal==="settings-backup-success"){let e=t.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-backup-success-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Beheer</p>
                <h2 class="oq-helper-modal-title" id="oq-backup-success-modal-title">Backup hersteld</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit bevestiging">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${s(e)}</p>
            <p class="oq-helper-modal-copy">Je kunt nu terug naar het overzicht of OpenQuatt gewoon verder gebruiken.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="restart-confirm"){let e=t.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-restart-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-restart-modal-title">OpenQuatt herstarten?</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit herstart-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-silent-settings-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Stille uren</p>
                <h2 class="oq-helper-modal-title" id="oq-silent-settings-modal-title">Stille uren instellen</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit stille-uren-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
            <div class="oq-helper-modal-body">
              ${dd()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(t.systemModal==="webserver-logs")return Tp();if(t.systemModal==="debug-recording")return Qp();if(t.systemModal==="openquatt-pause"){let e=k("openquattEnabled"),o=t.busyAction==="openquatt-regulation",r=h("openquattResumeAt"),n=t.loadingEntities||t.entitySyncInFlight,a=r||!n,i=Fr(),l=Uo(E("openquattResumeAt")),p=zn();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${e?"Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief.":"De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."}</p>
            ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${s(l)}</span>
                </div>`:""}
            ${a?r?`
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${o?"disabled":""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${o?"disabled":""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${o?"disabled":""}>Tot morgenochtend</button>
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
                        value="${s(p)}"
                        ${o?"disabled":""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${o?"disabled":""}>Plan moment</button>
                  </div>
                </div>
              `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o?"disabled":""}>Annuleren</button>
              ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${o?"disabled":""}>Nu inschakelen</button>`}
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${o?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `}return""}function Fv(e=!1){let o=Qn();return o?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(o.label)}</strong>
          <span>${s(o.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${t.loadingEntities||t.busyAction==="save-curveFallbackSupply"||o.isCurrent?"disabled":""}
        >
          ${o.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function sl(){return`
      <div class="oq-settings-curve-grid">
        ${me.map(e=>ie(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ie("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Fv()})}
      </div>
    `}function ll(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${to("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function cl(e="oq-settings-grid"){let o=[ie("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ie("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${to("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Hc()?ie("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):o}
      </div>
    `}function Iv(e="oq-settings-grid"){let o=[ie("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ie("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return o.length?`
      <div class="${s(e)}">
        ${o.join("")}
      </div>
    `:""}function ul(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ie("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ie("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${_v()}
      </div>
    `}function pl(){let e=ae();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Fn)}"
          aria-pressed="${e?"false":"true"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
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
          class="oq-settings-strategy-card${e?" is-active":""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(In)}"
          aria-pressed="${e?"true":"false"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
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
    `}function _v(){if(!h("phResponseProfile"))return"";let e=String(E("phResponseProfile")||""),o=t.loadingEntities||t.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${hs("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${hs("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:tr({key:"phResponseProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return pe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function dl(){if(!h("curveControlProfile"))return"";let e=String(E("curveControlProfile")||""),o=t.loadingEntities||t.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>tr({key:"curveControlProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return pe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function Wv(){let e=(D,Y=0)=>{let N=A(D);return Number.isNaN(N)?Y:Math.max(0,N)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,p=620,u=184,c=46,m=24,b=18,y=40,v=96,g=p-c-m,f=Math.min(20-1.2,i-.35),w=Math.max(20+1.2,l+.35),S=D=>c+(D-f)/Math.max(.01,w-f)*g,q=S(f),C=S(w),$=S(i),H=S(20),W=S(l),B=Math.abs(i-20)>.001,M=Math.abs(l-20)>.001,I=b+24,z=u-y,re=v-44,he=(D,Y,N,F="")=>{let P=Math.max(q+4,Math.min(C-110-4,D-55)),V=D-14,Q=re,J=28,X=v-re+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${Y} ${N}`)}">
          <rect class="oq-ph-concept-hit" x="${V}" y="${Q}" width="${J}" height="${X}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${D}" cy="${v}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${F?` oq-ph-concept-tooltip--${F}`:""}" transform="translate(${P} ${re})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(Y)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(N)}</text>
          </g>
        </g>
      `},Z=[`M ${q.toFixed(1)} ${I.toFixed(1)}`,`L ${$.toFixed(1)} ${v.toFixed(1)}`,`L ${W.toFixed(1)} ${v.toFixed(1)}`,`L ${C.toFixed(1)} ${z.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(_(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(_(i,1,"\xB0C"))} \u2013 ${s(_(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(_(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${p} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${b}" width="${Math.max(20,$-q).toFixed(1)}" height="${(u-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${$.toFixed(1)}" y="${b}" width="${Math.max(20,W-$).toFixed(1)}" height="${(u-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${W.toFixed(1)}" y="${b}" width="${Math.max(20,C-W).toFixed(1)}" height="${(u-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${b}" x2="${q}" y2="${u-y}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${v}" x2="${C}" y2="${v}" class="oq-ph-concept-axis"></line>
            <line x1="${H}" y1="${b}" x2="${H}" y2="${u-y}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${Z}" class="oq-ph-concept-curve"></path>

            ${B?`<line x1="${$}" y1="${v-12}" x2="${$}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${H}" y1="${v-14}" x2="${H}" y2="${v+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${M?`<line x1="${W}" y1="${v-12}" x2="${W}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${B?`<circle cx="${$}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${H}" cy="${v}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${M?`<circle cx="${W}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${B?he($,"Comfort onder setpoint",_(i,1,"\xB0C"),"below"):""}
            ${he(H,"Setpoint",_(20,1,"\xB0C"),"setpoint")}
            ${M?he(W,"Comfort boven setpoint",_(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${b+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${u-y-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${C}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${B?`<text x="${$-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(_(i,1,"\xB0C"))}</text>`:""}
            <text x="${H}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(_(20,1,"\xB0C"))}</text>
            ${M?`<text x="${W+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(_(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(_(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(_(i,1,"\xB0C"))} \u2013 ${s(_(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(_(l,1,"\xB0C"))}</span>
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
    `}function ml(){let e=[ie("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ie("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ie("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Wv()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function gl(e,o,r){let n=[to(o,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),to(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
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
    `:""}function vm(){let e=Iv();return te("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${cl()}
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
      `)}function wm(){let e=ae()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${dl()}
          </div>
          <div class="oq-settings-curve-shell">
            ${hl()}
          </div>
          ${sl()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${ul()}
          ${ml()}
        </div>
      `;return te("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${ll()}
        ${pl()}
        ${e}
      `)}function hl(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=me[0].outdoor,l=me[me.length-1].outdoor,p=v=>r.left+(v-i)/(l-i)*n,u=v=>r.top+(70-v)/50*a,c=[20,30,40,50,60,70].map(v=>{let g=u(v);return`
          <line x1="${r.left}" y1="${g}" x2="${560-r.right}" y2="${g}" class="oq-helper-curve-grid" />
          <text x="8" y="${g+4}" class="oq-helper-curve-axis-label">${v}\xB0</text>
        `}).join(""),m=me.map(v=>`
        <text x="${p(v.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(v.label)}</text>
      `).join(""),b=me.map(v=>`${p(v.outdoor)},${u(fe(v.key,E(v.key)))}`).join(" "),y=me.map(v=>{let g=fe(v.key,E(v.key));return`
          <g>
            <circle
              cx="${p(v.outdoor)}"
              cy="${u(g)}"
              r="7"
              class="oq-helper-curve-point ${t.draggingCurveKey===v.key?"is-dragging":""}"
              data-curve-key="${s(v.key)}"
            />
            <text x="${p(v.outdoor)}" y="${u(g)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${g.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${c}
          <polyline points="${b}" class="oq-helper-curve-line" />
          ${y}
          ${m}
        </svg>
      </div>
    `}var Ba="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",fl="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==";function Vv(){return xr.filter(e=>h(ve(e,"Status"))||h(ve(e,"Load"))||h(mo(e,"cooling",0)))}function Bv(e){return Ee(we(e))}function Kv(e){let o=[];return _n.forEach(r=>{let n=-1/0;Bo.forEach(a=>{let i=mo(e,r,a),l=Bv(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&o.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:o.length===0,invalid:o}}function jv(e){let o=String(E(`hp${e}Mode`)||"").trim(),r=Ee(E(`hp${e}Freq`)),n=o&&o!=="Onbekend"&&o!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(o),l=a&&r<=.5,p=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${o}.`:"ODU status is onbekend.";return{mode:n?o:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:p}}function Uv(e){let o=String(e||"").toUpperCase();return!e||o==="UNKNOWN"||o==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":o.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":o.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":o.includes("WRITE_QUEUED")||o.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":o.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":o.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":o.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":o.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Sm(e,o){return h(e)?Xt({key:e,value:we(e),meta:Me(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${o}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function Gv(e){let o=Bo.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Bo.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${Sm(mo(e,"cooling",r),r)}</div>
            <div role="cell">${Sm(mo(e,"heating",r),o+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function Em(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let o=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=o?o.closest(".oq-settings-odu-runtime-table"):null;if(!o||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,p)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(p.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(o),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function zv(e){let o=ve(e,"Enable"),r=ve(e,"Load"),n=ve(e,"Apply"),a=ve(e,"Status"),i=String(E(a)||"").trim()||"Nog niet geladen",l=Kv(e),p=jv(e),u=!!E(o),c=t.loadingEntities||t.busyAction===r||t.busyAction===n,m=c||!u||!l.valid||!p.safe||!h(n),b=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(p.reason)} Laatste compressorfrequentie: ${s(p.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${h(r)?We(r,t.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",c):""}
      ${h(o)?Pt(o,`HP${e} writes vrijgeven`,u,c,"Enable","Locked"):""}
            ${h(n)?We(n,t.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",m):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(Uv(i))}</p>
        </div>
        ${Gv(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&p.safe?" is-ok":" is-warning"}">${s(b)} ${s(p.safe?"":p.reason)}</p>
      </article>
    `}function Cm(){let e=Vv();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${t.oduRuntimeFrequencyDetailsOpen?" open":""}>
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
            ${e.map(o=>zv(o)).join("")}
          </div>
        </div>
      </details>
    `:""}function Ka(e,o="Aandacht",r="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?o:r)}</span>`}function qr({label:e,value:o,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(o)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${Ka(n)}
      </div>
    `}function co(e){let o=A(e);return Number.isNaN(o)?"\u2014":String(Math.max(0,Math.round(o)))}function Qv(e){let o=A(e);if(Number.isNaN(o))return"Nog niet gemeten";if(o<1)return"Zojuist";if(o<60)return`${Math.round(o)} min geleden`;let r=Math.floor(o/60),n=Math.round(o%60);return`${r}u ${n}m geleden`}function qm(e){let o=A(e);return Number.isNaN(o)||o<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(o*1e3))}function Yv(e){if(!e.cyclingAlertLatched)return"";let o=G("compressorCyclingAlertAlternating"),r=co("compressorCyclingAlertHp1Peak2h"),n=co("compressorCyclingAlertHp1Peak72h"),a=h("compressorCyclingAlertHp2Peak2h")?co("compressorCyclingAlertHp2Peak2h"):"",i=h("compressorCyclingAlertHp2Peak72h")?co("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Ka(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(qm("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(qm("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${o?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${t.entities.acknowledgeCompressorCyclingAlert?We("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Tm(e,o){return h(`${o}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(Qv(`${o}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(co(`${o}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(co(`${o}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(co(`${o}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(co(`${o}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function km(){let e=At();Gr(e);let o=gt("cicPollingEnabled"),r=gt("otEnabled"),n=[h("lowflowFaultActive")?qr({label:"Flow",value:G("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:G("lowflowFaultActive")}):"",h("flowMismatch")?qr({label:"Flowvergelijking duo",value:G("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:G("flowMismatch")}):""].filter(Boolean).join(""),a=[h("cicDataStale")?qr({label:"CIC-data",value:o?G("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:o&&G("cicDataStale")}):"",h("otLinkProblem")?qr({label:"OpenTherm",value:r?G("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:r&&G("otLinkProblem")}):""].filter(Boolean).join(""),i=[h("hp1Failures")?qr({label:"Warmtepomp 1",value:Wi("hp1Failures"),active:Ur("hp1Failures")}):"",h("hp2Failures")?qr({label:"Warmtepomp 2",value:Wi("hp2Failures"),active:Ur("hp2Failures")}):""].filter(Boolean).join(""),l=A("compressorStarts2hWarningLimit"),p=A("compressorStarts72hWarningLimit"),u=G("compressorCyclingWarning2h")||G("compressorCyclingWarning72h")||G("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,c=n?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${n}</div>
      </article>
    `:"",m=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",b=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return te("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${Ka(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${t.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(y=>`<span>${s(y.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${Ka(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${Yv(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${Tm("Warmtepomp 1","hp1")}
              ${Tm("Warmtepomp 2","hp2")}
            </div>
            ${ze("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${ze("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(p)?"\u2014":`${Math.round(p)} starts / 72 uur`})}
          </article>
          ${m}
          </div>
          <div class="oq-settings-monitoring-column">
            ${c}
            ${b}
          </div>
        </div>
        </details>
      `)}function bl(){if(!h("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:Ba,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:Ba,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:fl,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},o=t.entities.hpGeneration||{},r=String(E("hpGeneration")||""),n=Rt(o),a=t.loadingEntities||t.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return tr({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function xm(){let e=at(),o=t.entities.hpGeneration||{},r=h("hpGeneration")&&Rt(o).length>0;return!e&&!r?"":te("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
            ${!r||t.loadingEntities||t.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function yl(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!h("boilerCvAssistEnabled"))return"";let o=k("boilerCvAssistEnabled"),r=h("boilerRatedHeatPower"),n=Me("boilerRatedHeatPower"),a=we("boilerRatedHeatPower"),i=t.loadingEntities||t.busyAction==="switch-boilerCvAssistEnabled",p=r?Xt({key:"boilerRatedHeatPower",value:a,meta:n,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=o&&r?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${pe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Pt("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",o,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${o?pe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${p}
              </div>
            `,o&&r?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function $m(){if(!h("boilerCvAssistEnabled"))return"";let e=k("boilerCvAssistEnabled");return te("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",yl())}function Am(){let e=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",o=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return te("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
              ${t.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(o)}</p>
        </div>
      `)}function Hm(){let e=ro(),o=la(),r=t.busyAction==="restartAction";return te("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${$e({dataValue:"uptime",label:"Uptime",value:Jo()})}
          ${$e({dataValue:"ip",label:"IP-adres",value:Xo()})}
          ${$e({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${$e({dataValue:"webserverLog",label:"Logboek",value:da(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${$e({dataValue:"debugRecording",label:"Debugopname",value:an(),note:qa(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${$e({dataValue:"datetime",label:"Datum/tijd",value:o})}
          ${$e({dataValue:"espTemp",label:"ESP-temp",value:Va()})}
          ${$e({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${h("statusLedsEnabled")?`
            ${$e({dataValue:"statusLeds",label:"Status-LEDs",value:k("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:Pt("statusLedsEnabled","Status-LEDs",k("statusLedsEnabled"),t.loadingEntities||t.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function Mm(){let e=[gl("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),gl("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return te("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ie("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${h("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function Nm(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${bl()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${bl()}
        ${It()}
      </section>
    `}function Zv(e){let o=String(e||"").trim();if(!o)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(o)?o:`http://${o}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function Om(){let e=String(E("cicFeedUrl")||"").trim(),o=t.quickStartCicFeedUrlDraft===null?e:String(t.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:o,normalizedDraftUrl:Zv(o)}}function Dm(e,o){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${eo("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
              ${o?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${s(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function Rm(e){let o=String(e||"").trim().toLowerCase();return o==="heatpump_controller_q"||o.includes("q-edition")||o.includes("controller q")?"heatpump_controller_q":o==="heatpump_listener"||o.includes("listener")?"heatpump_listener":o==="waveshare"||o.includes("waveshare")?"waveshare":""}function Lm(){let e=Rm(E("hardwareProfileText")),o=!1;return e||(e=Rm(ht().hardwareProfile)),!e&&h("qFlowSource")?(e="heatpump_controller_q",o=!0):!e&&h("flowSource")&&h("cicPollingEnabled")&&(e="remote",o=!0),{profile:e,inferred:o,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function Tr(){let e=String(E("hpGeneration")||"").trim(),o=Lm(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=o,l=r&&a,p=n?r?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",c=String(E("flowSource")||"").trim(),m=String(E("qFlowSource")||"").trim(),b=k("cicPollingEnabled"),y=k("cicJsonFeedOk"),v=k("cicDataStale"),g=Om(),f=c===u&&(!p||m===p),w=l?f&&b&&!!g.configuredUrl:f,S=l?"cicFlowrate":n&&r?"controllerFlow":ee()==="duo"?"flowLocal":"hp1Flow",q=A(S),C=Number.isFinite(q),$=k("quickFlowTest"),H=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&w?H=y&&C?q>0?"Geldig":"Bron actief, geen circulatie":v?"Geen actuele CiC-data":y?"Verbonden, wacht op flow":"Verbinding controleren":!l&&w&&(H=C?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let W=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",B=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:o.hardwareLabel,requiresCic:l,qFlowTarget:p,flowSourceTarget:u,configurationApplied:w,sourceLabel:W,explanation:B,status:H,flowValue:q,flowAvailable:C,flowTestActive:$,canRunFlowTest:w,...g,canApply:i&&h("flowSource")&&(!p||h("qFlowSource"))&&(!l||h("cicPollingEnabled")&&h("cicFeedUrl")&&!!g.normalizedDraftUrl)}}function ja(){let e=Lm(),{isQEdition:o,isRemoteProfile:r}=e,n=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=o?"OT thermostat":t.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),p=Om(),c=n===l&&a===l&&(l!=="OT thermostat"||k("otEnabled"))&&(l!=="CIC"||k("cicPollingEnabled")&&!!p.configuredUrl),m=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],b=A(m[0]),y=A(m[1]),v=Number.isFinite(b)&&Number.isFinite(y),g=l==="OT thermostat"?k("otEnabled")&&!k("otLinkProblem")&&v:l==="CIC"?k("cicJsonFeedOk")&&!k("cicDataStale")&&v:k("roomTempHaValid")&&k("roomSetpointHaValid")&&v,f=o||r?"Nog activeren":"Hardwareprofiel niet herkend";c&&(f=g?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let w=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=o?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:o,isRemoteProfile:r,selectedSource:l,sourceLabel:w,explanation:S,configurationApplied:c,status:f,roomTempValue:b,roomSetpointValue:y,valuesAvailable:v,...p,canApply:(o||r)&&h("roomTempSource")&&h("roomSetpointSource")&&(l!=="OT thermostat"||h("otEnabled"))&&(l!=="CIC"||h("cicPollingEnabled")&&h("cicFeedUrl")&&!!p.normalizedDraftUrl)}}function Jv(){let e=Tr(),o=t.busyAction==="quickstart-flow-source"||t.busyAction==="quickstart-flow-refresh",r=t.busyAction==="quickstart-flow-test-start"||t.busyAction==="quickstart-flow-test-abort",n=o||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Dm(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${pe("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
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
            ${t.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${n||!e.configurationApplied?"disabled":""}
          >
            ${t.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${o||r?"disabled":""}
            >
              ${r?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${It({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function Xv(){let e=ja(),o=t.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${eo("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${o?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?Dm(e,o):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${pe("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
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
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${o||!e.canApply?"disabled":""}>
            ${o?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${It({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function Fm(){return!t.quickStartModalOpen||t.loadingEntities||t.complete===null||t.complete&&t.quickStartModalMode!=="generation"?"":t.quickStartModalMode==="generation"?`
        <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
          <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation" data-oq-quickstart-scroller data-oq-quickstart-step="generation" role="dialog" aria-modal="true" aria-labelledby="oq-generation-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Installatie</p>
                <h2 class="oq-helper-modal-title" id="oq-generation-modal-title">Quatt Hybrid-versie aanpassen</h2>
                <p class="oq-helper-modal-copy">Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.</p>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit versie-popup">\xD7</button>
            </div>
            ${Nm("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(uw().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${sw()}
            ${pw()}
          </div>
        </section>
      </div>
    `}function Im(){return t.root?t.root.querySelector("[data-oq-quickstart-scroller]"):null}function _m(){let e=Im();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ga(e)}:null}function ew(e){if(!e)return;let o=Im();if(!o||String(o.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function vl(e,o=!0){if(!e)return;let r=Number(t.quickStartScrollRestoreToken||0)+1;t.quickStartScrollRestoreToken=r;let n=()=>{t.quickStartScrollRestoreToken!==r||!t.quickStartModalOpen||ew(e)};if(o){window.requestAnimationFrame(n);return}n()}function Pm(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${pl()}
        ${ll("oq-settings-grid oq-settings-grid--quickstart")}
        ${It()}
      </section>
    `}function tw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${yl("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${It()}
      </section>
    `}function ow(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${cl("oq-settings-grid oq-settings-grid--quickstart")}
        ${It()}
      </section>
    `}function rw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ae()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ae()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ae()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${dl()}</div>
            <div class="oq-settings-curve-shell">
              ${hl()}
            </div>
            ${sl()}
          `:`
            ${ul("oq-settings-grid oq-settings-grid--quickstart")}
            ${ml()}
          `}
        ${It()}
      </section>
    `}function nw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Ds("oq-settings-grid oq-settings-grid--quickstart")}
        ${It()}
      </section>
    `}function aw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${$a("oq-settings-grid oq-settings-grid--quickstart")}
        ${It()}
      </section>
    `}function iw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(wt("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${dw()}
        ${t.controlNotice?`<p class="oq-helper-notice">${s(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${s(t.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${t.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function sw(){return t.currentStep==="generation"?Nm():t.currentStep==="boiler"?h("boilerCvAssistEnabled")?tw():Pm():t.currentStep==="flow-source"?Jv():t.currentStep==="thermostat-source"?Xv():t.currentStep==="flow"?ow():t.currentStep==="heating"?rw():t.currentStep==="water"?nw():t.currentStep==="silent"?aw():t.currentStep==="confirm"?iw():Pm()}function Lo(){return Vo.filter(e=>!e.optionalEntity||h(e.optionalEntity))}function wt(e){let o=Lo().findIndex(r=>r.id===e);return`Stap ${Math.max(0,o)+1}`}function lw(e){let o=Ua(),r=e===o,n=t.complete===!0||e<o;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function cw(e=!1){return Lo().map((o,r)=>{let n=lw(r);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${n.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(o.id)}"
          aria-current="${n.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(r+1).padStart(2,"0")}. ${s(o.title)}</h3>
            <span class="oq-helper-field-step-state">${n.label}</span>
          </div>
          <p>${s(o.copy)}</p>
        </button>
      `}).join("")}function uw(){let e=Lo();return e.find(o=>o.id===t.currentStep)||e[0]||Vo[0]}function Ua(){return Math.max(0,Lo().findIndex(e=>e.id===t.currentStep))}function wl(e){let o=Lo(),r=Math.min(o.length-1,Math.max(0,Ua()+e));t.currentStep=o[r]?.id||Vo[0].id}function It(e={}){let o=Ua(),r=Lo(),n=o>0?r[o-1]:null,a=o<r.length-1?r[o+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${o+1} van ${r.length}</strong>
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
    `}function pw(){let e=Ua(),o=Lo();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${o.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${cw(!0)}
        </div>
        ${t.controlNotice?`<p class="oq-helper-notice">${s(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${s(t.controlError)}</p>`:""}
      </section>
    `}function dw(){let e=qe(O("hpGeneration")),o=ae()?"Stooklijn":"Power House",r=w=>qe(O(w)),n=[],a=ae()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",j("curveM20")],["Aanvoer bij -10\xB0C",j("curveM10")],["Aanvoer bij 0\xB0C",j("curve0")],["Aanvoer bij 5\xB0C",j("curve5")],["Aanvoer bij 10\xB0C",j("curve10")],["Aanvoer bij 15\xB0C",j("curve15")],["Fallback-aanvoer",j("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",j("housePower")],["Maximum heating outdoor temperature",j("houseOutdoorMax")],["Temperatuurreactie",j("phKp")],["Comfort onder setpoint",j("phComfortBelow")],["Comfort boven setpoint",j("phComfortAbove")]],i=String(E("flowControlMode")||""),l=Tr(),p=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=ja(),c=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],m=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",j("manualIpwm")]:["Gewenste flow",j("flowSetpoint")]],b=h("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",k("boilerCvAssistEnabled")?"Ja":"Nee"],...k("boilerCvAssistEnabled")?[["Boiler rated heat power",j("boilerRatedHeatPower")]]:[]]:[],y=[["Maximale watertemperatuur",j("maxWater")]],v=[["Start stille uren",Lr(E("silentStartTime"))||"\u2014"],["Einde stille uren",Lr(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",j("silentMax")],["Maximaal niveau overdag",j("dayMax")]],g=w=>`
      <div class="oq-helper-review-list">
        ${w.filter(S=>S&&S[1]).map(([S,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(S)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,f=(w,S,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(w)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${g(S)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${f("Quatt Hybrid-versie",n,e)}
        ${f("Flowmeting",p,l.sourceLabel)}
        ${f("Verwarmingsstrategie",a,o)}
        ${f("Watertemperatuur",y)}
        ${f("Thermostaatgegevens",c,u.sourceLabel)}
        ${f("Flowregeling",m)}
        ${b.length?f("CV-ketel / boiler",b):""}
        ${f("Stille uren",v)}
      </div>
    `}function En(e,o){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
      </div>
    `}function Sl(e){let o=String(e||"").trim();return o?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[o]||o:""}function Wm(){let e=!h("coolingRoomRequestRequired")||k("coolingRoomRequestRequired"),o=[ie("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),ze("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${j("coolingDemandMax")} max`}),ie("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ie("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[h("coolingRoomRequestRequired")?ap("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?ie("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?ie("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=h("coolingWithoutDewPointMode"),i=[h("coolingGuardMode")?En("Route",qe(O("coolingGuardMode","Onbekend"))):"",h("coolingEffectiveMinSupplyTemp")?En("Actieve ondergrens",O("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?pe("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",p=[h("outsideTempSelected")?En("Actuele buitentemperatuur",O("outsideTempSelected","\u2014")):"",h("coolingFallbackNightMinOutdoorTemp")?En("Nachtminimum buitentemperatuur",O("coolingFallbackNightMinOutdoorTemp","\u2014")):"",h("coolingFallbackMinSupplyTemp")?En("Berekende minimum watertemperatuur",O("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),u=p.length?`<div class="oq-settings-cooling-fallback-metrics">${p.join("")}</div>`:"",c=a||p.length>0,b=O("coolingGuardMode","").toLowerCase().includes("fallback");if(!o.length&&!n&&!a&&!l&&!c)return"";let y={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return te("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${o.length?`
          <div class="oq-settings-grid">
            ${o.join("")}
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
        ${a||l||c?`
          <div class="oq-settings-grid">
            ${a?sp("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",y,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${c?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${b?" open":""}>
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
      `)}function Vm(){let e=h("otEnabled"),o=h("cicPollingEnabled")||h("cicFeedUrl"),r=h("cicCompatibilityMode"),n=h("otLinkProblem")||h("cicDataStale")||h("cicJsonFeedOk");if(!e&&!o&&!r&&!n)return"";let a=gt("cicPollingEnabled"),i=gt("otEnabled"),l=({label:g,value:f,active:w=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${w?" is-warning":""}">
        <dt>${s(g)}</dt>
        <dd>${s(f)}</dd>
      </div>
    `,p=(g,f,w="Actief",S="Normaal",q={})=>{if(!h(g))return"";let C=G(g);return l({label:f,value:C?w:S,active:q.warningWhenActive?C:!1})},u=(g,f,w={})=>{let S=w.fallbackKey||"";return!h(g)&&!(S&&h(S))?"":l({label:f,value:Te(h(g)?g:S,w)})},c=(g,f)=>{let w=f.filter(Boolean).join("");return w?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(g)}</h4>
          <dl>${w}</dl>
        </article>
      `:""},m=h("cicFeedUrl")?`
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
            value="${s(String(we("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${t.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",b=c("OpenTherm",[h("otLinkProblem")?l({label:"OT-link",value:i?G("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&G("otLinkProblem")}):"",p("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),p("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),y=c("CIC-feed",[h("cicJsonFeedOk")?l({label:"JSON-feed",value:a?G("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!G("cicJsonFeedOk")}):"",h("cicDataStale")?l({label:"Data",value:a?G("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&G("cicDataStale")}):"",p("cicChEnabled","CH-vraag","Actief","Normaal"),p("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),v=b||y?`
      <details class="oq-settings-integration-diagnostics"${t.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${b}
          ${y}
        </div>
      </details>
    `:"";return te("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${ua("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${ua("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${ua("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${m}
        </div>
        ${v}
      `)}function Bm(){if(!Rr.some(T=>h(T)))return"";let o=gt("cicPollingEnabled"),r=gt("otEnabled"),n=(T={})=>T.haValueKey||(T.haKeys||[]).find(x=>!/valid$/i.test(x))||"",a=(T={})=>T.haValidKey||(T.haKeys||[]).find(x=>/valid$/i.test(x))||"",i=(T="",x="")=>!!T&&!!x&&h(T)&&h(x)&&G(x),l=(T={})=>i(n(T),a(T)),p={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},u=(T={})=>T.mqttTopicKey||p[T.valueKey]||"",c=(T="")=>{if(!T)return!0;let x=t.mqttStatus?.input_enabled;return x&&typeof x=="object"&&Object.prototype.hasOwnProperty.call(x,T)?x[T]!==!1:!0},m=T=>/\bMQTT\b/i.test(String(T||"")),b=(T,x={})=>T==="CIC"?o:T==="OT thermostat"?r:T==="HA input"?l(x):T==="CIC or HA input"?o||l(x):m(T)?c(u(x)):T==="Flowmeter HP2"?h("hp2Flow"):T==="Local aggregate HP1/HP2"?h("flowLocal")||h("hp2Flow"):!0,y=(T,x={})=>T==="CIC"&&!o?"CIC-polling staat uit":T==="OT thermostat"&&!r?"OpenTherm staat uit":T==="HA input"&&!l(x)?"HA-bron ongeldig":T==="CIC or HA input"&&!o&&!l(x)?"CIC en HA ontbreken":m(T)&&!c(u(x))?"MQTT-topic staat uit":T==="Flowmeter HP2"&&!h("hp2Flow")?"HP2-flow ontbreekt":T==="Local aggregate HP1/HP2"&&!h("flowLocal")&&!h("hp2Flow")?"Lokale flow ontbreekt":"",v=(T,x="Actief",P="Normaal")=>h(T)?G(T)?x:P:"",g=(T,x={})=>{let P=String(T||"").trim();return P?x.optionLabels?.[P]||qe(P):""},f=(T,x={})=>{let P=String(E(T)||"").trim();return P?g(P,x):""},w=T=>{let x=er(T,"");return x?qe(x):""},S=(...T)=>T.find(x=>String(x||"").trim())||"",q=()=>{let T=f("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&h("localWaterSupplyTempSource")){let x=f("localWaterSupplyTempSource");return x?`${T} - ${x}`:T}return T},C=()=>{let T=String(E("flowSource")||"").trim();if(T==="Outdoor unit"){if(h("qFlowSource")){let x=String(E("qFlowSource")||"").trim(),P=String(E("hpGeneration")||"").trim();return x==="Local"||x==="Auto"&&P==="V1"?x==="Auto"?"Lokaal (auto)":"Lokaal":S(f("outdoorUnitFlowMode"),x==="Auto"?"Buitenunit (auto)":"Buitenunit")}return S(f("outdoorUnitFlowMode"),"Quatt-flow")}return qe(T)},$=()=>{let T=String(E("outsideTempSource")||"").trim();if(T==="MQTT"&&!c("outside_temperature"))return"MQTT-topic staat uit";if(T!=="Auto")return qe(T);let x=A("outsideTempLocalAggregated"),P=A("outsideTempHa"),V=A("mqttOutsideTemperature"),Q=!Number.isNaN(x),J=h("outsideTempHaValid")?G("outsideTempHaValid")&&!Number.isNaN(P):!Number.isNaN(P),X=c("outside_temperature")&&h("mqttOutsideTemperatureValid")&&G("mqttOutsideTemperatureValid")&&!Number.isNaN(V),Le=[Q?{label:"Buitenunit",value:x}:null,J?{label:"HA-invoer",value:P}:null,X?{label:"MQTT",value:V}:null].filter(Boolean);return Le.length?Le.reduce((ne,Fe)=>Fe.value<ne.value?Fe:ne,Le[0]).label:"Auto"},H=T=>{if(!h(T))return NaN;let x=Number(E(T));if(Number.isFinite(x))return x;let V=String(t.entities[T]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return V?Number(V[0]):NaN},W=(T,x="")=>{if(!h(T))return!1;let P=H(T);return(x?G(x):!0)&&Number.isFinite(P)},B=()=>{let T=String(E("coolingDewPointSource")||"").trim();if(T==="Home Assistant")return W("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if(T==="MQTT")return c("cooling_dew_point")?W("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd":"MQTT-topic staat uit";let x=W("coolingDewPointHa","coolingDewPointHaValid"),P=c("cooling_dew_point")&&W("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(x&&P){let V=H("coolingDewPointHa");return H("mqttCoolingDewPoint")>V?"MQTT":"HA-invoer"}return x?"HA-invoer":P?"MQTT":T?qe(T):"Auto"},M=({label:T,value:x="",key:P="",active:V=!1,status:Q="",statusTone:J="",statusTitle:X=""})=>{let Le=x||(P?Te(P):"");if(!Le&&!Q)return"";let ne=String(J||"").replace(/[^a-z0-9_-]/gi,""),Fe=X||Q,Ae=Q?`<em class="oq-settings-source-status${ne?` oq-settings-source-status--${s(ne)}`:""}" title="${s(Fe)}" aria-label="${s(`${Q}: ${Fe}`)}">${s(Q)}</em>`:"";return`
        <div class="oq-settings-source-row${V?" is-warning":""}${Q?" has-status":""}">
          <span>${s(T)}${Ae}</span>
          <strong>${s(Le)}</strong>
        </div>
      `},I=({label:T="HA-invoer",valueKey:x="",validKey:P="",value:V=""})=>{if(!x||!P||!h(x)||!h(P))return[];let Q=G(P);return[M({label:T,key:x,value:V,status:Q?"Geldig":"Ongeldig",statusTone:Q?"valid":"invalid",statusTitle:Q?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},z=({label:T="MQTT",valueKey:x="",validKey:P="",value:V="",topicKey:Q=""})=>{if(!x||!P||!h(x)||!h(P))return[];if(!c(Q||p[x]))return[];let J=G(P),X=J?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[M({label:T,key:x,value:J?V:"\u2014",status:Xi(P),statusTone:J?"valid":"invalid",statusTitle:X})]},re=({title:T,icon:x="",content:P="",rows:V=[],copy:Q="",className:J=""})=>{let X=V.filter(Boolean).join("");return!P&&!X&&!Q?"":`
        <section class="oq-settings-source-group${J?` ${s(J)}`:""}">
          <h5>
            ${x?`<span class="oq-settings-source-group-icon">${tt(x,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s(T)}</span>
          </h5>
          ${P?`<div class="oq-settings-source-group-content">${P}</div>`:""}
          ${X?`<div class="oq-settings-source-rows">${X}</div>`:""}
          ${Q?`<p class="oq-settings-source-group-copy">${s(Q)}</p>`:""}
        </section>
      `},he=(T,x={})=>{if(!h(T))return{markup:"",warning:""};let P=t.entities[T]||{},V=String(E(T)||""),J=Rt(P).filter(Ae=>b(Ae,x)),X=V&&!b(V,x),Le=V==="HA input"&&x.keepUnavailableCurrent!==!0,Fe=(X&&!Le&&!J.includes(V)?[V,...J]:J).map(Ae=>{let Fo=g(Ae,x);return`<option value="${s(Ae)}" ${Ae===V?"selected":""}>${s(Fo)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(x.label||"Bron")}</span>
              ${x.infoCopy?eo(x.infoId||T,x.infoTitle||x.label||"Bron",x.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(T)}" ${t.loadingEntities?"disabled":""}>
              ${Fe}
            </select>
          </label>
        `,warning:X?`Huidige bron niet beschikbaar: ${y(V,x)}`:""}},Z=({key:T,title:x,icon:P="",select:V,secondarySelect:Q=null,secondarySelects:J=null,activeRows:X=[],measurementRows:Le=[],activeCopy:ne="",rows:Fe=[]})=>{let Ae=V&&V.when!==!1?he(V.key,V):{markup:"",warning:""},Wt=(Array.isArray(J)?J:Q?[Q]:[]).filter(se=>se&&se.when!==!1).map(se=>he(se.key,se)).filter(se=>se.markup),kr=Wt.map(se=>se.markup).join(""),et=Wt.map(se=>se.warning).find(Boolean)||"",St=Fe.filter(Boolean).join(""),He=`${Ae.markup}${kr}`,ce=Ae.warning||et,qt=[re({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:He?`
            <div class="oq-settings-source-controls">
              ${He}
            </div>
            ${ce?`<p class="oq-settings-source-warning">${s(ce)}</p>`:""}
          `:""}),re({title:"Actief",icon:"target",rows:X,copy:ne,className:"oq-settings-source-group--active"}),re({title:"Metingen",icon:"activity",rows:Le,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!qt&&!He&&!St?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(T||V.key)}">
          <div class="oq-settings-source-card-head">
            ${P?`<span class="oq-settings-source-card-icon">${tt(P,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(x)}</h4>
          </div>
          ${qt||`
            ${He?`
              <div class="oq-settings-source-controls">
                ${He}
              </div>
            `:""}
            ${ce?`<p class="oq-settings-source-warning">${s(ce)}</p>`:""}
            ${St?`<div class="oq-settings-source-rows">${St}</div>`:""}
          `}
        </article>
      `},D=String(E("waterSupplySource")||""),Y=String(E("flowSource")||""),N=String(E("qFlowSource")||""),F=[Z({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[M({label:"Waarde",key:"roomTemp"}),M({label:"Bron",value:w("roomTempEffectiveSource")})],measurementRows:[o?M({label:"CIC",key:"cicRoomTemp"}):"",r?M({label:"OpenTherm",key:"otRoomTemp"}):"",...I({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...z({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),Z({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[M({label:"Waarde",key:"roomSetpoint"}),M({label:"Bron",value:w("roomSetpointEffectiveSource")})],measurementRows:[o?M({label:"CIC",key:"cicRoomSetpoint"}):"",r?M({label:"OpenTherm",key:"otRoomSetpoint"}):"",...I({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...z({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),Z({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:D==="Local"&&h("localWaterSupplyTempSource")},activeRows:[M({label:"Waarde",key:"supplyTemp"}),M({label:"Bron",value:q()})],measurementRows:[M({label:"Lokale selectie",key:"waterSupplyTempEsp"}),M({label:"PT1000",key:"waterSupplyTempPt1000"}),M({label:"DS18B20",key:"waterSupplyTempDs18b20"}),o?M({label:"CIC",key:"cicWaterSupplyTemp"}):"",...I({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),Z({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:o||Y==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:Y==="Outdoor unit"&&h("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:Y==="Outdoor unit"&&h("outdoorUnitFlowMode")&&(!h("qFlowSource")||N!=="Local")}],activeRows:[M({label:"OpenQuatt-flow",key:"flowSelected"}),M({label:"Bron",value:C()})],measurementRows:[M({label:"Controller-flowmeter",key:"controllerFlow"}),M({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),M({label:"Flowmeter HP1",key:"hp1Flow"}),M({label:"Flowmeter HP2",key:"hp2Flow"}),o?M({label:"CIC",key:"cicFlowrate"}):""]}),Z({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron."},activeRows:[M({label:"Waarde",key:"outsideTempSelected"}),M({label:"Bron",value:$()})],measurementRows:[M({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...I({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...z({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),Z({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[M({label:"Waarde",value:v("heatingEnableSelected","Toegestaan","Geblokkeerd")}),M({label:"Bron",value:w("heatingEnableEffectiveSource")})],measurementRows:[M({label:"Bronselectie",value:v("heatingEnableValid","Geldig","Ongeldig")}),r?M({label:"OpenTherm",value:v("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",o?M({label:"CIC",value:v("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...I({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:v("heatingEnableHa","Toegestaan","Geblokkeerd")}),...z({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:v("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),Z({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable"},activeRows:[M({label:"Waarde",value:v("coolingEnableSelected","Toegestaan","Geblokkeerd")}),M({label:"Bron",value:w("coolingEnableEffectiveSource")})],measurementRows:[M({label:"Handmatig",value:v("manualCoolingEnable","Aan","Uit")}),o?M({label:"CIC",value:v("cicCoolingEnabled","Toegestaan","Geblokkeerd")}):"",...I({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:v("coolingEnableHa","Toegestaan","Geblokkeerd")}),...z({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:v("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),Z({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen."},activeRows:[M({label:"Waarde",key:"coolingDewPointSelected"}),M({label:"Bron",value:B()})],measurementRows:[...I({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...z({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return F.length?te("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${F.join("")}</div>`):""}function Km(){let e=ts(),r=t.mqttStatus?.enabled===!0?`
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
    `:"";return te("Integratie","MQTT inputbronnen","Beheer de brokerverbinding voor externe MQTT-bronwaarden.",`
        <div class="oq-settings-mqtt-shell">
          <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--broker">
            <div class="oq-settings-field-head">
              <h3>MQTT brokerconfiguratie</h3>
            </div>
            <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(xu())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s($u())}</p>
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
      `)}function jm(){return te("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(pn())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(dn())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-login-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="api">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">ESPHome API encryption</p>
                <strong class="oq-settings-quickstart-status-value">${s(lr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(cr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-api-security-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      `)}function Um(){let e=xe.has(t.settingsGroup)?t.settingsGroup:de[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${de.map(o=>`
          <button
            class="oq-settings-group-button${o.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(o.id)}"
            aria-pressed="${o.id===e?"true":"false"}"
          >
            ${tt(o.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(o.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Gm(){let e=xe.has(t.settingsGroup)?t.settingsGroup:de[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[xm(),$m(),vm(),pd(),id(),Mm(),Cm()]:e==="service"?[km(),cd()]:e==="heating"?[wm()]:e==="cooling"?[Wm()]:e==="integrations"?[Vm(),Km(),Bm()]:[Am(),sm(),jm(),cm(),Hm()]).filter(Boolean).join("")}
      </div>
    `}function mw(){if(!t.root||t.appView!=="settings")return!1;let e=t.root.querySelector(".oq-settings-group-nav"),o=t.root.querySelector(".oq-settings-group-stack");if(!e||!o)return!1;let r=xe.has(t.settingsGroup)?t.settingsGroup:de[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==de.length)return!1;n.forEach(g=>{let w=String(g.dataset.groupId||"")===r;g.classList.toggle("is-active",w),g.setAttribute("aria-pressed",w?"true":"false")}),o.querySelectorAll(".oq-settings-info").forEach(g=>{let f=String(g.dataset.oqSettingsInfo||""),w=t.settingsInfoOpen===f;g.classList.toggle("is-open",w);let S=g.querySelector(".oq-settings-info-popover");S&&(S.hidden=!w);let q=g.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",w?"true":"false")}),o.querySelectorAll("[data-oq-settings-field]").forEach(g=>{let f=String(g.dataset.oqSettingsField||"");if(!f)return;let w=g.querySelector(".oq-settings-static-value");if(w){let C=O(f);w.textContent!==C&&(w.textContent=C)}g.querySelectorAll("select[data-oq-field]").forEach(C=>{let $=String(C.dataset.oqField||f),H=String(E($)||"");C.value!==H&&(C.value=H)}),g.querySelectorAll("input[data-oq-field]").forEach(C=>{let $=String(C.dataset.oqField||f),H=String(we($)||"");C.value!==H&&(C.value=H)});let S=g.querySelector(".oq-helper-slider-meta strong"),q=g.querySelector('input[type="range"][data-oq-field]');if(S&&q){let C=j(f,fe(f,E(f)));S.textContent!==C&&(S.textContent=C)}}),o.querySelectorAll("[data-select-key]").forEach(g=>{let f=String(g.dataset.selectKey||""),w=String(g.dataset.selectOption||""),S=String(E(f)||""),q=w===S;g.classList.toggle("is-active",q),g.setAttribute("aria-pressed",q?"true":"false"),f==="strategy"?g.disabled=t.loadingEntities||t.busyAction==="save-strategy":f==="hpGeneration"?g.disabled=t.loadingEntities||t.busyAction==="save-hpGeneration":f==="curveControlProfile"?g.disabled=t.loadingEntities||t.busyAction==="save-curveControlProfile":f==="phResponseProfile"&&(g.disabled=t.loadingEntities||t.busyAction==="save-phResponseProfile");let C=g.closest(".oq-settings-choice-card-shell");C&&C.classList.toggle("is-active",q)});let a=o.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let g=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",g),a.querySelectorAll("input[data-oq-field]").forEach(w=>{let S=String(w.dataset.oqField||""),q=String(we(S)||"");w.value!==q&&(w.value=q)})}o.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(g=>{let f=String(g.dataset.controlKey||""),w=!!E(f),S=String(g.dataset.onLabel||"Aan"),q=String(g.dataset.offLabel||"Uit"),C=String(g.dataset.switchTitle||f),$=w?S:q;g.dataset.controlState=w?"off":"on",g.classList.toggle("is-on",w),g.setAttribute("aria-checked",w?"true":"false"),g.setAttribute("aria-label",`${C}: ${$}`),g.disabled=t.loadingEntities||t.busyAction===`switch-${f}`}),o.querySelectorAll("[data-oq-switch-pill]").forEach(g=>{let f=String(g.dataset.oqSwitchPill||""),w=!!E(f),S=String(g.dataset.onLabel||"Aan"),q=String(g.dataset.offLabel||"Uit"),C=w?S:q;g.classList.toggle("is-on",w),g.textContent!==C&&(g.textContent=C)}),o.querySelectorAll("[data-oq-switch-copy]").forEach(g=>{let f=String(g.dataset.oqSwitchCopy||""),w=!!E(f),S=String(g.dataset.onCopy||""),q=String(g.dataset.offCopy||""),C=w?S:q;g.hidden=!C,g.textContent!==C&&(g.textContent=C)});let i=o.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let g=i.querySelector(".oq-settings-quickstart-status-value"),f=i.querySelector(".oq-settings-quickstart-status-copy"),w=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=at(),q=t.entities.hpGeneration||{},C=h("hpGeneration")&&Rt(q).length>0;if(g){let $=S||"Onbekend";g.textContent!==$&&(g.textContent=$)}if(f){let $="Pas dit aan als je een andere Quatt Hybrid hebt.";f.textContent!==$&&(f.textContent=$)}w&&(w.disabled=!C||t.loadingEntities||t.busyAction==="save-hpGeneration")}let l=o.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let g=l.querySelector(".oq-settings-quickstart-status-value"),f=l.querySelector(".oq-settings-quickstart-status-copy"),w=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=ca(),q=k("cm100Active");g&&g.textContent!==S&&(g.textContent=S);let C=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";f&&f.textContent!==C&&(f.textContent=C),w&&(w.disabled=t.loadingEntities)}let p=o.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(p){let g=p.querySelector(".oq-settings-quickstart-status-value"),f=p.querySelector(".oq-settings-quickstart-status-copy"),w=p.querySelector('button[data-oq-action="reset"]'),S=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",q=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";g&&g.textContent!==S&&(g.textContent=S),f&&f.textContent!==q&&(f.textContent=q),w&&(w.disabled=t.busyAction==="reset")}let u=o.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(g=>{let f=String(g.dataset.oqAccessSecurityItem||""),w=g.querySelector(".oq-settings-quickstart-status-value"),S=g.querySelector(".oq-settings-quickstart-status-copy"),q=g.querySelector("button[data-oq-action]");if(f==="login"){let C=pn(),$=dn();w&&w.textContent!==C&&(w.textContent=C),S&&S.textContent!==$&&(S.textContent=$)}else if(f==="api"){let C=lr(),$=cr();w&&w.textContent!==C&&(w.textContent=C),S&&S.textContent!==$&&(S.textContent=$)}q&&(q.disabled=!1)});let c=o.querySelector(".oq-settings-system-summary");if(c){let g=c.querySelectorAll(".oq-settings-system-row"),f={uptime:Jo(),ip:Xo(),updates:ro(),datetime:la(),espTemp:Va(),restart:"Opnieuw opstarten"};g.forEach(q=>{let C=q.querySelector(".oq-settings-system-row-value"),$=q.dataset.oqDiagnosticsRow||"";if(C&&Object.prototype.hasOwnProperty.call(f,$)){let H=f[$];C.textContent!==H&&(C.textContent=H)}});let w=c.querySelector('button[data-oq-action="open-update-modal"]');w&&(w.disabled=!1);let S=c.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){let q=t.busyAction==="restartAction";S.disabled=q,S.textContent=q?"Herstarten...":"Herstarten"}}o.querySelectorAll(".oq-settings-hp-offset-row").forEach(g=>{let f=String(g.dataset.oqSettingsField||""),w=String(g.dataset.oqHpOffsetRawKey||""),S=String(g.dataset.oqHpOffsetFinalKey||"");if(!f||!w||!S)return;let q=Me(f),C=mn(w,S,f),$=Ee(we(f)),H=Number.isFinite(C)&&Number.isFinite($)?Mt(C+$,q.uom||"\xB0C",2):be(S,2),W=g.querySelector("[data-oq-hp-offset-active]");if(W){let I=`${be(S,2)} actief`;W.textContent!==I&&(W.textContent=I)}let B=g.querySelector("[data-oq-hp-offset-raw]");if(B){let I=Number.isFinite(C)?Mt(C,q.uom||"\xB0C",2):be(w,2);B.textContent!==I&&(B.textContent=I)}let M=g.querySelector("[data-oq-hp-offset-final]");M&&M.textContent!==H&&(M.textContent=H)});let m=o.querySelector(".oq-settings-curve-shell"),b=ae();if(!!m!==b)return!1;let y=!!a,v=String(E("phResponseProfile")||"")==="Custom";return y===v}bu({patch:mw});function gw({label:e,value:o,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(o)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function kn(e,o=!1){return e.map(r=>gw({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?Ue(r.key):r.value,status:o})).join("")}function Cl(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function kl(){let e=At();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(Se(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(o=>o.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Ym({className:e,title:o,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${o?`<div class="oq-overview-system-copy"><h3>${s(o)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function xl(e,o){return o?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function hw(e,o){let r=o?"active":"neutral",n=xl(e,o);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function fw(e){return`
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
    `}function $l(e,o,r,n){return`${r?fw(n):""}${hw(e,o)}`}function Zm(e,o,r,n,a){if(!e)return;let i=Se({mode:o,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(vt(e,$l(o,r,n,a)),e.dataset.renderSignature=i)}function Ga(e,o,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||O(o))}</strong>
      </div>
    `}function bw(e,o,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function yw(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function vw(e){if(!Number.isFinite(e)||e<0)return"\u2014";let o=Math.floor(e),r=Math.floor(o/1440),n=Math.floor(o%1440/60),a=o%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function ww(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function Sw(e){let o=ww(O("timeNowHhmm",""));if(!Number.isFinite(o))return"";let r=Math.round(e),n=((o-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function qw(e,o){let r=Math.max(0,(Number(o)-Number(e))/6e4),n=vw(r),a=h("timeValid")&&k("timeValid")?Sw(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function Tw(e){let o=Number(e);return Number.isNaN(o)?"\u2014":`${o>0?"+":o<0?"-":""}${Math.abs(o).toFixed(0)} W`}function Jm(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>h(e))||""}function Ew(){return["hp1WaterIn","hp2WaterIn"].find(e=>h(e))||""}function Xm(e=O("controlModeLabel","")){let o=String(e||"").toLowerCase();return o.includes("cm5")||o.includes("cooling")||o.includes("koeling")}function uo(){return Xm()}function eg(e,o){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:o?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function Al(){return uo()?"Koeling":ae()?"Stooklijn":"Power House"}function Cw(){let e=["phouseReq","strategyRequestedPower"];for(let o of e){let r=A(o);if(!Number.isNaN(r))return r}return Number.NaN}function tg(){let e=Cw(),o=A("phouseHouse"),r=A("totalHeat"),n=A("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:e-o,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:_(e,0,"W"),houseText:_(o,0,"W"),correctionText:Tw(a),capacityText:Ue("hpCapacity"),statusTitle:i,statusCopy:l}}function og(){let e=A("curveSupplyTarget"),o=A("supplyTemp"),r=Jm(),n=r?A(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:o-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",p="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",p="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",p="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",p="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",p="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:Ue("curveSupplyTarget"),supplyText:Ue("supplyTemp"),deltaText:yw(a),capacityText:Ue("hpCapacity"),statusTitle:l,statusCopy:p}}function rg(){let e=A("supplyTemp"),o=O("coolingGuardMode",""),r=O("coolingFallbackNightMinOutdoorTemp","\u2014"),n=A("coolingSupplyError"),a=A("coolingDemandRaw"),i=k("coolingPermitted"),l=k("coolingRequestActive"),p=O("coolingBlockReason","Onbekend"),u=Sl(p),c=eg(p,l),m="Wacht op koelvraag",b="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return c?(m="Wacht op koelvraag",b="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(m="Houdt doel vast",b="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(m="Trekt aanvoer omlaag",b="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(m="Benadert koeldoel",b="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(m="Koelt rustig door",b="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(m="Koeling gereed",b="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(m="Koeling geblokkeerd",b=`Blokkade: ${u}.`),{targetText:Ue("coolingSupplyTarget"),supplyText:Ue("supplyTemp"),safeFloorText:Ue("coolingEffectiveMinSupplyTemp"),guardMode:o,fallbackNightMin:r,demandText:Ue("coolingDemandRaw"),statusTitle:m,statusCopy:b,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:c}}function za(){if(uo()){let o=rg(),r=o.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:o.targetText,focusCopy:o.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:o.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${o.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:o.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ae()){let o=og();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:o.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:o.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:o.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=tg();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Hl(e){return Ym({className:"oq-overview-system",title:e.title,copy:e.copy,signature:Se(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(o=>bw(o.label,o.value,o.tone,o.note)).join("")}
        </div>
      `})}function kw(){if(!k("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(uo()){let n=rg(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(Pd())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let o=(ae()?og():tg()).statusTitle;return{label:"Regeling nu",value:o,tone:o==="In balans"||o==="Dicht bij doel"?"green":o==="Nog aan het opbouwen"||o==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function xw(){return k("openquattEnabled")?uo()?k("coolingPermitted")?k("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:O("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:k("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:k("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Ml(e,o){let r=kw(),n=xw();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:o,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Rl(e,o){let r=Ml(e,o);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(Se(r))}">
        ${Cl("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${kn(r,!0)}
        </div>
      </section>
    `}function Pl(){let e=uo();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function $w(){let e=k("openquattEnabled"),o=E("openquattResumeAt"),r=Fr(o),n=(t.loadingEntities||t.entitySyncInFlight)&&!h("openquattResumeAt"),a=k("manualCoolingEnable"),i=String(E("silentModeOverride")||"Schedule"),l=!k("coolingPermitted"),p=k("coolingRequestActive"),u=Xm(),c=O("coolingBlockReason",""),m=eg(c,p),b="Uit",y="Koeling staat uit.";a&&u?(b="Actief",y="Koeling draait nu."):a&&m?(b="Aan",y="Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint."):a&&l?(b="Geblokkeerd",y=Sl(c||"Koeling wacht nog op veilige condities.")):a&&p?(b="Start bijna",y="Er is koelvraag. Koeling start zodra dat kan."):a&&(b="Aan",y="Koeling staat aan en wacht op koelvraag.");let v="Uit",g="Stille modus staat uit.",f="neutral";return i==="On"?(v="Aan",g="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",f="orange"):i==="Schedule"&&(v="Schema",k("silentActive")?(g="Stille modus staat nu aan via het tijdvenster.",f="violet"):g="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?Uo(o,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:b,copy:y,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?u?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:v,copy:g,tone:f,kind:"select",selectedOption:i,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(w=>h(w.key))}function Aw(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(o=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${s(o.tone||"neutral")}${o.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${s(o.label)}</span>
            <strong>${o.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${s(o.value)}</span>
              </span>
            `:s(o.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function Er({className:e,action:o,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${n?" is-busy":""}"
        type="button"
        ${o?`data-oq-action="${s(o)}"`:""}
        ${i}
        ${t.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(r)}</span>
        </span>
      `:s(n?"Bezig...":r)}</button>
    `}function Hw(e){if(e.kind==="openquatt-control"){let o=t.busyAction==="openquatt-regulation",r=(t.loadingEntities||t.entitySyncInFlight)&&!h("openquattResumeAt");return k("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${Er({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:o})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${Er({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:o})}
            ${Er(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Fr()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let o=t.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>Er({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:o,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${Er({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:t.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function Nl(){let e=$w();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${Cl("Bediening")}
        ${e.map(o=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(o.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(o.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(o.tone)}">${s(o.status)}</strong>
            </div>
            <p>${s(o.copy)}</p>
            ${Aw(o.meta)}
            ${Hw(o)}
          </article>
        `).join("")}
      </section>
    `:""}function ng(e){let o=O("controlModeLabel");return`
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
              ${Cl("Kerncijfers")}
              <div class="oq-overview-top">
                ${kn(Pl())}
              </div>
            </section>
            ${Rl(e,o)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(Xn())}">
            ${Nl()}
          </aside>
        </div>
      </section>
    `}function Qa(){let e=Jm(),o=Ew();return uo()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...o?[{label:"Retourtemperatuur",key:o}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Ol(e=Qa()){return Se({...e,values:e.rows.map(o=>o.value||O(o.key))})}function Dl(){let e=Qa();return Ym({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Ol(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(o=>Ga(o.label,o.key,o.value||"")).join("")}
        </div>
      `})}var zm=360,Mw=100;function _t(){let e=hn(t.trendWindowHours||dt);return e!==t.trendWindowHours&&dr(e),e}function ag(e=_t()){return Math.max(1,Number(e)||24)*60*60*1e3}function Rw(e=_t()){let o=Number(e)||24;return o>=72&&o%24===0?`${o/24}d`:`${o}u`}function Ll(e=_t()){let o=Number(e)||24;if(o>=72&&o%24===0){let r=o/24;return`${r} ${r===1?"dag":"dagen"}`}return`${o} uur`}function ql(e){if(!Number.isFinite(e))return"\u2014";let o=new Date(e);if(Number.isNaN(o.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(o)}catch{return o.toLocaleString("nl-NL",r)}}function Pw(e){let o=String(e||"").trim().split("|");if(o.length<5)return null;let r=Number(o[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(o[1]),supply:n(o[2]),room:o.length>=8?n(o[3]):null,roomSetpoint:o.length>=8?n(o[4]):null,flow:o.length>=8?n(o[5]):null,input:o.length>=8?n(o[6]):n(o[3]),output:o.length>=8?n(o[7]):n(o[4])}}function El(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function Tl(e=_t()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function ig(){let e=ag(),o=String(t.trendHistoryRaw||"").trim();if(!o)return El()?Tl():[];let r=o.split(/\r?\n/).map(Pw).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-zm):Tl();let i=Math.max(0,a-e),l=r.filter(p=>p.t>=i).slice(-zm);return l.length?l:El()?Tl(windowHours):[]}function Fl(){let e=_t(),o=Ll(e),r=ig(),n=El()&&r.length===0,a=uo();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${o}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${o}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${o}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),p=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(p)||l<Mw?Number.NaN:p/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${o}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${o}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function Nw(e){let o=e.samples[e.samples.length-1]||null;return Se({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:o?.t||0,trendSignature:t.trendHistorySignature||"",latestValues:o?[o.outside,o.supply,o.room,o.roomSetpoint,o.flow,o.input,o.output]:[]})}function Cn(e,o){if(!e||!o)return Number.NaN;let r=typeof e.derive=="function"?e.derive(o):o?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function Ow(e,o){let r=[];return e.forEach(n=>{o.forEach(a=>{let i=Cn(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function Dw(e){if(!Number.isFinite(e)||e<=0)return 1;let o=Math.floor(Math.log10(e)),r=e/10**o,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**o}function Lw(e,o){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(o)?o.map(y=>Number(y?.axisMin)).find(y=>Number.isFinite(y)):Number.NaN,l=Array.isArray(o)?o.map(y=>Number(y?.axisMax)).find(y=>Number.isFinite(y)):Number.NaN,p=Array.isArray(o)?o.map(y=>Number(y?.axisTickStep)).find(y=>Number.isFinite(y)&&y>0):Number.NaN,u=Math.max(1,Number.isFinite(p)?p:Dw(a/4)),c=[];if(Number.isFinite(i)||Number.isFinite(l)){let y=Number.isFinite(i)?i:0,v=Number.isFinite(l)?l:Math.ceil(n/u)*u,g=Math.floor(y/u)*u,f=Math.ceil(v/u)*u;for(let w=g;w<=f+u*.5;w+=u)c.push(w)}else{let y=a/u,v=y<=1.8?3:y<=4.25?5:7,g=Math.floor(v/2),f=(r+n)/2,w=Math.round(f/u)*u;for(let S=-g;S<=g;S+=1)c.push(w+S*u)}let m=c[0],b=c[c.length-1];return{ticks:c,axisMin:m,axisMax:b,axisDecimals:0}}function sg(e,o,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:_t(),i=ag(a),l=640,p=220,u=46,c=18,m=18,b=34,y=l-u-c,v=p-m-b,g=e[e.length-1],f=!!r.mockData,w=f?i:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:g?g.t:0,S=f?0:w-i,q=Math.max(w-S,1),C=q,$=Ow(e,o),H=$.min===$.max?{min:$.min-1,max:$.max+1}:{min:$.min-Math.max(($.max-$.min)*.12,1),max:$.max+Math.max(($.max-$.min)*.12,1)},W=Lw($,o),B=D=>u+(D-S)/q*y,M=D=>{if(!Number.isFinite(D))return Number.NaN;let Y=(D-H.min)/Math.max(H.max-H.min,1);return m+(1-Math.min(1,Math.max(0,Y)))*v},I=[0,.5,1].map(D=>u+y*D),z=W.ticks.map(D=>M(D)),re=W.ticks.map((D,Y)=>({x:u-10,y:z[Y],text:_(D,W.axisDecimals)})),he=e.map(D=>{let Y=B(D.t),N=o.map(F=>{let T=Cn(F,D);return Number.isFinite(T)?{seriesId:F.id||F.sampleKey||F.label,tone:F.tone,label:F.label,decimals:F.decimals,unit:F.unit,value:T,x:Y,y:M(T)}:null});return{sample:D,x:Y,values:N}}),Z=o.flatMap(D=>{let Y=[],N=[];return e.forEach(F=>{let T=Cn(D,F);if(!Number.isFinite(T)){N.length&&(Y.push(N),N=[]);return}N.push({x:B(F.t),y:M(T)})}),N.length&&Y.push(N),Y.map(F=>F.length<2?{tone:D.tone,points:F,path:""}:{tone:D.tone,points:F,path:F.map((T,x)=>`${x===0?"M":"L"} ${T.x.toFixed(1)} ${T.y.toFixed(1)}`).join(" ")})});return{width:l,height:p,left:u,right:c,top:m,bottom:b,plotWidth:y,plotHeight:v,latest:g,uptimeMs:C,endTime:w,startTime:S,span:q,windowHours:a,range:$,displayRange:H,gridXs:I,gridYs:z,yAxisLabels:re,points:he,tracks:Z,series:o}}function Ya(){return Se({windowHours:_t(),trendSignature:t.trendHistorySignature||"",trendNowMs:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:0,coolingActive:uo()})}function Fw(e){return Fl().find(o=>o.id===e)||null}function Iw(e,o){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-o);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-o);l<n&&(r=i,n=l)}),r}function _w(e,o){let r=lg(e,o);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(_(r,e.decimals,e.unit))}</strong>
      </div>
    `}function lg(e,o){if(e?.currentKey&&h(e.currentKey)){let r=A(e.currentKey);if(Number.isFinite(r))return r}return Cn(e,o)}function Il(e){e&&Fl().forEach(o=>{let r=e.querySelector(`[data-oq-trend-card="${o.id}"]`),n=o.samples[o.samples.length-1]||null;r&&o.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),p=_(lg(a,n),a.decimals,a.unit);l&&l.textContent!==p&&(l.textContent=p)})})}function Ww(e,o,r=!1,n=_t()){let a=sg(e,o,{mockData:r,windowHours:n}),i=Ll(n),l=ql(a.startTime),p=ql(a.startTime+a.span/2),u=ql(a.endTime),c=a.tracks.flatMap(m=>{if(m.points.length<2){let b=m.points[0];return b?`
          <circle
            cx="${b.x.toFixed(1)}"
            cy="${b.y.toFixed(1)}"
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
        ${c}
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
          ${o.map(m=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(m.tone)}"
              data-oq-trend-hover-dot="${s(m.id||m.sampleKey||m.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(p)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function Vw(e){let o=e.samples[e.samples.length-1]||null,r=Ll(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(Nw(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>_w(n,o)).join("")}
            </div>
          </div>
        </div>
        ${Ww(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function Za(){let e=Fl();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(Ya())}">
        <div class="oq-overview-trends-grid">
          ${e.map(Vw).join("")}
        </div>
      </section>
    `}function Bw(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function Kw(){let e=_t(),o=Fs();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${So.map(r=>`
          ${(()=>{let a=r>168&&!o,i=r/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===r?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${r}"
            aria-pressed="${e===r?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(Rw(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function jw(){let e="overview-trends-history",o=t.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${o?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s("Uitleg bij Diagnose")}"
          aria-expanded="${o?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${o?"":"hidden"}>
          <p>${s("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function cg(){let e=rt(),r=ig().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${jw()}
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
                  ${Kw()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?Za():Bw()}
        </div>
      </section>
    `}function Uw(){if(!t.root||t.appView!=="diagnosis")return!1;let e=t.root.querySelector(".oq-overview-board");if(!e)return!1;let o=e.querySelector(".oq-overview-trends");return o?(st(o,Ya(),Za()),Il(e),xn(e),!0):!1}function _l(e){if(!e)return null;let o=e.__oqTrendHoverNodes;if(o&&o.chart&&o.hoverLayer&&o.hoverPanel)return o;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function Qm(e,o,r,n=_l(e)){if(!e||!o||!Array.isArray(o.points)||o.points.length===0)return;let a=Math.max(0,Math.min(o.points.length-1,r)),i=o.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let p=qw(i.sample.t,o.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=p.value,n.hoverNote.textContent=p.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let u=[];o.series.forEach(c=>{let m=Cn(c,i.sample),b=c.id||c.sampleKey||c.label,y=n.hoverDots[b];if(!Number.isFinite(m)){y&&y.setAttribute("display","none");return}let v=i.values.find(g=>g.seriesId===b);y&&v&&(y.removeAttribute("display"),y.setAttribute("cx",v.x.toFixed(1)),y.setAttribute("cy",v.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(c.tone)}">
          <span>${s(c.label)}</span>
          <strong>${s(_(m,c.decimals,c.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function Gw(e){if(!e)return;let o=_l(e);o?.hoverPanel&&(o.hoverPanel.hidden=!0),o?.hoverLayer&&o.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function xn(e=t.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=Fw(r.dataset.oqTrendCard);if(!i)return;let l=sg(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let p=_l(r),u=0,c=null,m=()=>{let v=c;c=null,u=0;let g=a.getBoundingClientRect();if(!g.width||!g.height)return;let f=Number(v?.clientX);if(!Number.isFinite(f)){Qm(r,l,l.points.length-1,p);return}let S=Math.min(g.width,Math.max(0,f-g.left))/g.width*l.width,q=Iw(l,S);Qm(r,l,q,p)},b=v=>{c=v,u||(u=window.requestAnimationFrame(m))},y=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,Gw(r)};a.addEventListener("pointermove",b),a.addEventListener("pointerenter",b),a.addEventListener("pointerleave",y),a.addEventListener("focus",b),a.addEventListener("blur",y),a.addEventListener("touchstart",b,{passive:!0}),r.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,a.removeEventListener("pointermove",b),a.removeEventListener("pointerenter",b),a.removeEventListener("pointerleave",y),a.removeEventListener("focus",b),a.removeEventListener("blur",y),a.removeEventListener("touchstart",b)}})}Yo({patchDiagnosisDom:Uw});function Gl(e,o,r){let n=mg(O(o.mode,"Unknown")),a=k(o.defrost),i=Yt(O(o.failures,"None")),l=ra(i),p=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:p,thermalKey:n==="Koelen"?o.cooling:o.heat,schematic:rS(e,o,r,n,a,l,p)}}function pg(e,o=null){return`<h3>${s(e)}</h3>${o?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(o.layout)}">${cS(o.layout==="equal"?"minus":"plus")}<span>${s(o.label)}</span></button>`:""}`}function Vl(e,o,r,n){return`<div class="oq-overview-hp-status">${$l(e,o,r,n)}</div>`}function zw(e,o){return o?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function dg(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(o=>`${o.title} ${zw(mg(O(o.keys.mode,"Unknown")),k(o.keys.defrost))}`).join(", "))}</p>`}function Qw(e){let o=t.entities[e];if(!o)return"Positie: \xE2\u20AC\u201D";let r=A(e);return Number.isNaN(r)?`Positie: ${O(e)}`:`Positie: ${_(r,0,o.uom||"")}`}function Yw(e){return h(e)?`Positie: ${k(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function mg(e){let o=String(e||"").trim();return!o||o==="Unknown"?"Onbekend":o==="Standby"?"Stand-by":o==="Heating"?"Verwarmen":o==="Cooling"?"Koelen":o}function Bl(e,o,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(o)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function Zw(e,o,r){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${o-10} ${r-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function $n({bind:e,modifier:o,x:r,y:n,width:a,kicker:i,detail:l,detailBind:p="",icon:u="heater",direction:c="down"}){let b=r+26,y=n+22,v=p?` data-oq-bind="${s(p)}"`:"",g="";if(c==="up"){let f=r+Math.round(a*.52);g=`M${f-6} ${n} L${f} ${n-8} L${f+6} ${n} Z`}else if(c==="left"){let f=n+Math.round(22);g=`M${r} ${f-6} L${r-8} ${f} L${r} ${f+6} Z`}else if(c==="right"){let f=n+Math.round(22);g=`M${r+a} ${f-6} L${r+a+8} ${f} L${r+a} ${f+6} Z`}else{let f=r+Math.round(a*.52);g=`M${f-6} ${n+44} L${f} ${n+44+8} L${f+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(o)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${b}" cy="${y}" r="11.5" />
        ${Zw(u,b,y)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${v}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${g}" />
      </g>
    `}function Kl({bind:e,x:o,y:r,width:n,value:a,label:i,ariaLabel:l="",align:p="start"}){let u=l||`${i} temperatuur ${a}`,c=p==="end",m=p==="center",b=m?"middle":c?"end":"start",y=m?o+n/2:c?o+n-2:o+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${o}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${y}" y="${r+13}" text-anchor="${b}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function Jw({tooltip:e,...o}){return`${Kl(o)}${$n({bind:o.bind,...e})}`}function Xw({bind:e,ariaLabel:o,x:r,y:n,width:a,height:i,rx:l,tooltip:p}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(o)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${$n({bind:e,...p})}
    `}function Wl({bind:e,className:o,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:p}){return`
      <g class="${[o,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${$n({bind:e,...p})}
    `}function eS({label:e,value:o,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(o)}</strong>
      </div>
    `}function lt(e,o,r=""){let n=A(e);return Number.isNaN(n)?O(e):_(n,o,Go(e,r))}function tS(e){let r=String(E("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function oS(e){let o=tS(e),r=o.find(n=>h(n))||e;for(let n of o){if(!h(n))continue;let a=A(n);if(!Number.isNaN(a))return{key:n,value:a,text:_(a,0,Go(n,"L/h"))}}return{key:r,value:Number.NaN,text:O(r)}}function rS(e,o,r,n,a,i,l){let p=A(o.freq),u=Number.isNaN(p)?"\u2014":String(Math.round(p)),c=A(o.power),m=A(o.heat),b=A(o.cooling),y=oS(o.flow),v=y.value,g=n==="Koelen"?b:m,f=l||!Number.isNaN(p)&&p>0||!Number.isNaN(c)&&c>80||!Number.isNaN(m)&&m>150,w=!Number.isNaN(v)&&v>0,S=xl(n,f),q=h(o.suctionSuperheatStatus)?O(o.suctionSuperheatStatus,""):"",C=q==="Low - floodback risk"||q==="Critical low - wet suction likely",H=i==="Geen actieve storingen"?(q==="Critical low - wet suction likely"?"Superheat kritisch laag":q==="Low - floodback risk"?"Superheat laag":"")||"Geen storingen":i,W=H!=="Geen storingen"||C,B=a?"Actief":"Uit",M=lt(o.waterOut,1,"\xB0C"),I=lt(o.waterIn,1,"\xB0C"),z=y.text,re=lt(o.evaporatorCoilTemp,1,"\xB0C"),he=lt(o.innerCoilTemp,1,"\xB0C"),Z=lt(o.outsideTemp,1,"\xB0C"),D=lt(o.condenserPressure,1,"bar"),Y=lt(o.dischargeTemp,1,"\xB0C"),N=lt(o.evaporatorPressure,1,"bar"),F=lt(o.returnTemp,1,"\xB0C"),T=lt(o.suctionSuperheat,1,"K"),x=lt(o.dischargeSuperheat,1,"K"),P=q||"\u2014",V=k(o.bottomPlate),Q=k(o.crankcase),J=Qw(o.eev),X=Yw(o.fourWay),Le=_(c,0,"W"),ne=_(g,0,"W"),Fe=n==="Koelen"?!Number.isNaN(c)&&c>=5&&!Number.isNaN(b)?b/c:Number.NaN:A(o.cop),Ae=_(Fe,1),Fo=n==="Koelen"?"COP (EER)":"COP",Wt=n==="Koelen"?"Koelafgifte":"Warmteafgifte",kr=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",et=A(o.fanSpeed),St=!Number.isNaN(et)&&et>0,He=Number.isNaN(et)?"\u2014":`${Math.round(et)} rpm`,ce=a||n==="Koelen",qt=ce?"Verdamper":"Condensor",se=ce?"Condensor":"Verdamper",ri=ce?"return":"supply",Ie=ce?"supply":"return",Tt=360,Io=384,po=214,Mn="M278 220 C278 228 273 234 266 234",_o="M278 220 C278 228 283 234 290 234",ct="M290 234 C284 234 279 240 278 248",tc="M266 234 C272 234 277 240 278 248",Ve=ce?`M290 234 H${Tt} Q372 ${po} ${Io} 234 H436 V134 H480`:"M266 234 H180 V134 H164",Rn=ce?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Io} Q372 ${po} ${Tt} 234 H290`,Pn="M296 150 H278 V220",ut="M278 248 V268 H372 V150 H356",ni=ce?"M480 294 H337":"M164 294 H315",Nn=ce?"M315 294 H164":"M337 294 H480",Wo=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,f?"is-running":"",w?"is-water-flowing":"",St?"is-fan-running":"",ce?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:Wo,statusText:S,failureText:H,warningActive:W,waterFlowActive:w,defrostActive:a,defrostText:B,mode:n,reverseCycle:ce,compressorFreqText:`${u} Hz`,leftExchangerTitle:qt,rightExchangerTitle:se,supplyLineTone:ri,returnLineTone:Ie,waterOutText:M,waterInText:I,flowText:z,evaporatorCoilTempText:re,innerCoilTempText:he,outsideTempText:Z,dischargePressureText:D,dischargeTempText:Y,suctionPressureText:N,suctionTempText:F,suctionSuperheatText:T,dischargeSuperheatText:x,suctionSuperheatStatusText:P,bottomPlateActive:V,crankcaseActive:Q,eevPositionText:J,fourWayPositionText:X,powerText:Le,heatText:ne,heatLabel:Wt,heatDescription:kr,efficiencyText:Ae,efficiencyLabel:Fo,fanRpmText:He,hotgasValveHeat:Mn,hotgasValveCool:_o,suctionValveHeat:ct,suctionValveCool:tc,leftValveTone:ce?"suction":"hotgas",rightValveTone:ce?"hotgas":"suction",pipes:{supply:{tone:ri,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:Ie,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:Pn,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Ve,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:ni,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Nn,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:Rn,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:ut,animated:!0,flowVariant:"default"}}}}function nS(e){let o=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${o}-cond-water-heat`,n=`${o}-cond-water-cool`,a=`${o}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],p=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([c,m])=>Bl(c.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`),m.tone,m.d,m.animated,m.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${p.map(Jw).join("")}
            ${Wl({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${Wl({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${Wl({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${u.map(Xw).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(eS).join("")}
          </div>
        </div>
      </div>
    `}function gg(e,o,r,n="normal",a=null){if(!h(o.power))return"";let i=Gl(e,o,r),{mode:l,defrostActive:p,running:u,thermalKey:c}=i,m=i.schematic;return t.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${pg(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Vl(l,u,m.warningActive,m.failureText)}
            </div>
          </div>
          ${nS(m)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Vl(l,u,m.warningActive,m.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${kn([{key:o.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:c,label:m.heatLabel,tone:"orange",note:m.heatDescription},{label:m.efficiencyLabel,value:m.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(O(o.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${p?"Actief":"Uit"}</strong>
          </div>
          ${h(o.suctionSuperheat)?`
            <div class="oq-overview-hp-meta-chip">
              <span>Suction SH</span>
              <strong>${s(m.suctionSuperheatText)}</strong>
            </div>
          `:""}
          ${h(o.suctionSuperheatStatus)?`
            <div class="oq-overview-hp-meta-chip">
              <span>SH status</span>
              <strong>${s(m.suctionSuperheatStatusText)}</strong>
            </div>
          `:""}
        </div>
        <div class="oq-overview-temps-list">
          ${Ga("Water in",o.waterIn)}
          ${Ga("Water out",o.waterOut)}
        </div>
      </section>
    `}function zl(){return k("boilerCvAssistEnabled")&&h("boilerHeatPower")}function aS(){return(typeof ee=="function"?ee():"")!=="single"&&h("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function iS(){return(typeof ee=="function"?ee():"")!=="single"&&h("hp2Flow")?"hp2Flow":"hp1Flow"}function Xa(){let e=A("boilerHeatPower"),o=A(iS()),r=h("boilerActive")?k("boilerActive"):!Number.isNaN(e)&&e>20,n=!Number.isNaN(o)&&o>0,a=_(e,0,"W"),i=_(o,0,"L/h"),l=_(A(aS()),1,"\xB0C"),p=_(A("supplyTemp"),1,"\xB0C"),u=r?"Aan":"Uit",c=r?"Levert ondersteuning":"Geen ondersteuning",m=["oq-boiler-card",r?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:r,flowActive:n,heatText:a,flowText:i,returnTempText:l,supplyTempText:p,statusText:u,statusCopy:c,boardClass:m,flowPathClass:n?"is-flowing":"is-static"}}function Ql(e=Xa()){return Se({version:"boiler-visual-mode-v1",visualMode:t.hpVisualMode,boardClass:"oq-boiler-card"})}function sS(e,o=Xa()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",o.active?"is-running":"is-idle",o.flowActive?"is-flowing":"is-static"].join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${o.active?"active":"neutral"}`,n.textContent!==o.statusText&&(n.textContent=o.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",o.active),a.classList.toggle("is-idle",!o.active));let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==o.statusCopy&&(i.textContent=o.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==o.heatText&&(l.textContent=o.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(m=>{m.textContent!==o.flowText&&(m.textContent=o.flowText)});let p=e.querySelector("[data-oq-boiler-status-value]");p&&p.textContent!==o.statusCopy&&(p.textContent=o.statusCopy);let u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==o.returnTempText&&(u.textContent=o.returnTempText);let c=e.querySelector('[data-oq-bind="boiler-supply-value"]');c&&c.textContent!==o.supplyTempText&&(c.textContent=o.supplyTempText)}function lS(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Ql(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>Water in</p>
            <strong data-oq-bind="boiler-return-value">${s(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>Water out</p>
            <strong data-oq-bind="boiler-supply-value">${s(e.supplyTempText)}</strong>
            <span>naar het systeem</span>
          </article>
        </div>
      </section>
    `}function jl(){if(!zl())return"";let e=Xa();return t.hpVisualMode!=="schematic"?lS(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Ql(e))}">
        <div class="${s([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">De boiler geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft.</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="Schematische weergave CV-ketel of boiler">
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
                ${Bl("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Bl("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Kl({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${$n({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${Kl({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${$n({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${s(e.statusCopy)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}function hg(){let e=typeof ee=="function"?ee():"";return gc.filter(o=>e==="single"&&o.title==="HP2"?!1:h(o.keys.power))}function Yl(e){return!Array.isArray(e)||e.length<2||t.hpVisualMode!=="schematic"?"equal":t.hpLayoutMode==="focus-hp1"||t.hpLayoutMode==="focus-hp2"?t.hpLayoutMode:"equal"}function Ja(e,o,r){return!Array.isArray(o)||o.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function Ul(e,o,r){return!Array.isArray(o)||o.length<2||t.hpVisualMode!=="schematic"?null:Ja(e,o,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function fg(e){return!Array.isArray(e)||e.length!==1?Yl(e):zl()?"equal":"single"}function cS(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function bg(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${dg(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function uS(e,o){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(vt(e,bg(o)),!0):(vt(r,`
      <h3>Warmtepompen</h3>
      ${dg(o)}
    `),n.classList.toggle("is-active",t.hpVisualMode==="schematic"),a.classList.toggle("is-active",t.hpVisualMode==="compact"),!0)}function yg(){let e=Al(),o=hg(),r=Yl(o),n=fg(o),a=bg(o);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          ${kl()}
          ${ng(e)}
          <div class="oq-overview-main">
            ${Hl(za())}
            ${Dl()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${o.map((i,l)=>gg(i.title,i.keys,i.accent,Ja(l,o,r),Ul(l,o,r))).join("")}
            ${jl()}
          </div>
        </div>
      </section>
    `}function pS(e,o,r){if(!e)return;let n=e.querySelector(o);n&&n.textContent!==r&&(n.textContent=r)}function Cr(e,o,r){e&&e.getAttribute(o)!==r&&e.setAttribute(o,r)}function dS(e,o){o.forEach(([r,n])=>{pS(e,`[data-oq-bind="${r}"]`,n)})}function mS(e,o){o.forEach(([r,n])=>{Cr(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function gS(e,o,r,n=""){let a=e.querySelector(`[data-oq-bind="${o}"]`);a&&(a.classList.toggle("is-active",r),Cr(a,"tabindex",r?"0":"-1"),!r&&n&&ei(e.querySelector(`[data-oq-bind="${n}"]`)))}function hS(e,o,r){Cr(e.querySelector(`[data-oq-bind="${o}"]`),"fill",r)}function An(e,o,r,n){if(!e)return;let a=`${o}${r}`;n.map(l=>`${o}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${o}${l}`)),e.classList.add(a))}function fS(e,o,r,n){let a=e.querySelector(`[data-oq-pipe="${o}"]`);a&&(An(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function ei(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function ug(e,o,r){!e||!o||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&ei(n)}),o.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function bS(e,o,r,n){if(!e||!o||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||ei(n)};r.addEventListener("mouseenter",()=>ug(e,o,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>ug(e,o,n)),r.addEventListener("blur",a)}function vg(e){if(!e)return;let o=e.querySelector(".oq-hp-tech-svg");if(!o)return;let r=o.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),o.appendChild(r)),Array.from(o.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);bS(e,r,n,i)})}function wg(e=t.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(o=>{vg(o)})}function yS(e,o,r,n,a=null,i=null){if(!e)return;let l=i||Gl(o,r,n),{mode:p,running:u}=l,c=l.schematic,m=e.querySelector(".oq-overview-hp-head-title");m&&vt(m,pg(o,a));let b=e.querySelector(".oq-overview-hp-head-side");if(b){let w=b.querySelector(".oq-overview-hp-status");w||(vt(b,Vl(p,u,c.warningActive,c.failureText)),w=b.querySelector(".oq-overview-hp-status")),Zm(w,p,u,c.warningActive,c.failureText)}let y=e.querySelector("[data-oq-hp-board]");if(!y)return;y.className!==c.boardClass&&(y.className=c.boardClass),dS(y,[["status",c.statusText],["left-exchanger-title",c.leftExchangerTitle],["right-exchanger-title",c.rightExchangerTitle],["compressor-freq",c.compressorFreqText],["flow-value",c.flowText],["inner-coil-temp-value",c.innerCoilTempText],["evaporator-temp-value",c.evaporatorCoilTempText],["outside-temp-value",c.outsideTempText],["discharge-pressure-value",c.dischargePressureText],["discharge-temp-value",c.dischargeTempText],["suction-pressure-value",c.suctionPressureText],["suction-temp-value",c.suctionTempText],["supply-value",c.waterOutText],["return-value",c.waterInText],["footer-mode",c.mode],["footer-power",c.powerText],["footer-heat",c.heatText],["footer-efficiency-label",c.efficiencyLabel],["footer-efficiency",c.efficiencyText],["fan-speed-value",c.fanRpmText],["fourway-detail",c.fourWayPositionText],["eev-detail",c.eevPositionText]]);let v=y.querySelector('[data-oq-bind="footer-heat-label"]');if(v){Cr(v,"aria-label",c.heatLabel);let w=c.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";v.innerHTML!==w&&(v.innerHTML=w)}[["bottom-heater",c.bottomPlateActive],["crankcase-heater",c.crankcaseActive]].forEach(([w,S])=>{gS(y,w,S,`${w}-tooltip`)});let g=y.querySelector('[data-oq-bind="defrost-badge"]');g&&(Cr(g,"tabindex",c.defrostActive?"0":"-1"),Cr(g,"aria-label",c.defrostActive?"Defrost actief":"Defrost uit"),c.defrostActive||ei(y.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",c.supplyLineTone],["return-tooltip",c.returnLineTone]].forEach(([w,S])=>{An(y.querySelector(`[data-oq-bind="${w}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),mS(y,[["supply-reading",`Aanvoer temperatuur ${c.waterOutText}`],["flow-reading",`Flow ${c.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${c.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${c.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${c.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${c.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${c.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${c.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${c.dischargeTempText}`],["return-reading",`Retour temperatuur ${c.waterInText}`],["suction-pressure-reading",`Zuigdruk ${c.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${c.suctionTempText}`],["fourway-trigger",`4-wegklep, ${c.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${c.eevPositionText}`]]),An(y.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",c.returnLineTone,["supply","return"]);let f=String(c.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");hS(y,"cond-water",`url(#${c.reverseCycle?`${f}-cond-water-cool`:`${f}-cond-water-heat`})`),Object.entries(c.pipes).forEach(([w,S])=>{fS(y,w.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),S.tone,S.d)}),vg(y),ea()}function vS(){if(!t.root||t.appView!=="overview")return!1;let e=t.root.querySelector(".oq-overview-board");if(!e)return!1;let o=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==o&&(e.className=o);let r=Al(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),p=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),c=e.querySelector(".oq-overview-hp-grid"),m=e.querySelector("[data-oq-boiler-panel]"),b=hg();if(n){let q=At();st(n,Se(q),kl())}if(a){let q=a.querySelector(".oq-overview-top");q&&vt(q,kn(Pl()));let C=a.querySelector(".oq-overview-statuspanel");if(C){let H=O("controlModeLabel");st(C,Se(Ml(r,H)),Rl(r,H))}let $=a.querySelector(".oq-overview-summary-side");if($){let H=Xn();$.dataset.renderSignature!==H&&(vt($,Nl()),$.dataset.renderSignature=H)}}if(i&&st(i,Se(za()),Hl(za())),l){let q=Qa();st(l,Ol(q),Dl())}if(p&&t.appView==="overview"&&(st(p,Ya(),Za()),Il(e)),xn(e),!u||!c)return!1;let y=Yl(b),v=fg(b);if(uS(u,b),An(c,"oq-overview-hp-grid--",v,["single","equal","focus-hp1","focus-hp2"]),t.hpVisualMode!=="schematic"){let q=[...b.map(($,H)=>gg($.title,$.keys,$.accent,Ja(H,b,y),Ul(H,b,y))),jl()].join(""),C=Se({visualMode:t.hpVisualMode,layout:v,markup:q});return c.dataset.renderSignature!==C&&(vt(c,q),c.dataset.renderSignature=C),!0}let g=zl()?Xa():null,f=g?jl():"",w=g?Ql(g):"";return!!m!=!!f||(m&&m.dataset.renderSignature!==w?m.outerHTML=f:m&&g&&sS(m,g),c.querySelectorAll("[data-oq-hp-panel]").length!==b.length)?!1:(b.forEach((q,C)=>{let $=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if($){let H=Gl(q.title,q.keys,q.accent);An($,"oq-overview-hp--",Ja(C,b,y),["normal","focus","muted"]),yS($,q.title,q.keys,q.accent,Ul(C,b,y),H)}}),!0)}Yo({patchOverviewDom:vS});function wS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${Um()}
        ${Gm()}
      </section>
    `}function SS(){return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
        <section class="oq-helper-modal oq-helper-modal--reconnect oq-helper-modal--loading" role="status" aria-live="polite" aria-labelledby="oq-loading-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OpenQuatt</p>
              <h2 class="oq-helper-modal-title" id="oq-loading-modal-title">OpenQuatt laden</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
          <div class="oq-helper-reconnect-status oq-helper-loading-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>Eerste synchronisatie</strong>
              <span>De velden op dit scherm worden compleet klaargezet.</span>
            </div>
          </div>
        </section>
      </div>
    `}function qS(){return t.appView==="overview"?yg():t.appView==="energy"?tm():t.appView==="diagnosis"?cg():t.appView==="results"?om():wS()}function TS(){let e=al();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${s(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://jeroen85.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/jeroen85/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function ES(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function CS(e){if(!e||t.deferDevControlSelectRender)return;t.deferDevControlSelectRender=!0;let o=()=>{e.removeEventListener("blur",o),e.removeEventListener("change",o),t.deferDevControlSelectRender=!1,window.setTimeout(()=>Sg(),0)};e.addEventListener("blur",o,{once:!0}),e.addEventListener("change",o,{once:!0})}function kS(){if(t.nativeOpen||t.appView!=="settings"||t.renderedAppView!=="settings"||t.renderedSettingsGroup!==t.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,o=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(o)||o<=0?null:{group:t.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:o}}function xS(e){if(!e)return;let o=(t.settingsPageScrollRestoreToken||0)+1;t.settingsPageScrollRestoreToken=o;let r=()=>{if(o!==t.settingsPageScrollRestoreToken||t.nativeOpen||t.appView!=="settings"||t.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function Sg(){if(!t.root)return;let e=ES();if(e){CS(e);return}let o=t.systemModal==="webserver-logs"?Nt():null,r=t.systemModal==="cm100-commissioning"?hp():null,n=String(t.systemModal||"").startsWith("service-task-")?bp():null,a=t.systemModal==="history-storage"?vp():null,i=t.quickStartModalOpen?_m():null,l=kS();if(t.nativeOpen){t.root.innerHTML=`
        ${il()}
        ${bm()}
      `,t.renderedAppView="native",t.renderedSettingsGroup="",t.settingsRenderSignature="",t.headerRenderSignature=Wa(),t.mqttSensorsModalRenderSignature="",Br(),un(),qs(),Os(),$i(),xi(),Ot(o),vs(r),ws(n),Ss(a),vl(i);return}let p=qS(),u=t.loadingEntities?`${p}${SS()}`:p,c=t.appView==="overview"||t.appView==="energy"||t.appView==="diagnosis"||t.appView==="results";t.root.innerHTML=`
      ${il()}
      <div class="oq-helper-shell${t.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${c?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${pc}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${fm()}
          </div>
      ${Rc()}
      ${u}
      ${TS()}
        </div>
      </div>
      ${Fm()}
      ${Pp()}
      ${ym()}
      ${Mp()}
    `,t.renderedAppView=t.appView,t.renderedSettingsGroup=t.appView==="settings"?t.settingsGroup:"",t.settingsRenderSignature=t.appView==="settings"?_r():"",t.headerRenderSignature=Wa(),t.mqttSensorsModalRenderSignature=t.systemModal==="mqtt-sensors"?ia():"",Wr(),wg(),qs(),Vr(),xn(),un(),Os(),$i(),xi(),Ot(o),vs(r),ws(n),Ss(a),vl(i),xS(l)}Nc(Sg);async function Tg(){let e=R.checkFirmwareUpdates;if(e){t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateCheckBusy=!0,t.controlError="",t.controlNotice="",d();try{await ti("current build",{poll:!1,force:!0}),rn();let o=await fetch(U(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await nn(),t.controlNotice="Firmwarecontrole bijgewerkt."}catch(o){t.controlError=`Firmwarecontrole mislukte. ${o.message}`}finally{t.updateCheckBusy=!1,d()}}}async function Eg(){try{await L(Pr,"all",{concurrency:Et,forceMissing:!0}),t.updateModalOpen&&d()}catch{}}async function ti(e,o={}){let r=R.firmwareUpdateTarget;if(!r||!h("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!o.force&&String(E("firmwareUpdateTarget")||"").trim()===n)return!0;t.entities.firmwareUpdateTarget={...t.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${U(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.poll!==!1?(rn(),await nn({expectedBuildLabel:o.expectedBuildLabel||""})):!0}async function Cg(){let e=ge();if(e){t.firmwareAdvancedOpen=!1,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),Qe(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=no(e),t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="normal",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",d();try{await ti("current build",{poll:!1,force:!0}),t.updateInstallTargetVersion=no(ge()||{})||t.updateInstallTargetVersion,on();let o=R.installFirmwareUpdateTarget,r=o&&h("installFirmwareUpdateTarget")?U(o.domain,o.name,"press"):U("update","Firmware Update","install"),n=await fetch(r,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);await ir({initialDelayMs:vo,pollDelayMs:Or})?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=le()||t.updateInstallTargetVersion,t.controlNotice=""):t.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(o){t.controlError=`OTA-update kon niet worden gestart. ${o.message}`}finally{ar(),d()}}}async function kg(){let e=fa(),o=R.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareConnectionSwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",d();return}t.updateManualUploadOpen=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="connection-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetTopology=ee(),t.updateInstallTargetVersion=le()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",d();try{if(!await ti("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");t.updateInstallTargetVersion=no(ge()||{})||le()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,d(),on();let n=await fetch(U(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await ir({initialDelayMs:vo,pollDelayMs:Or}))t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=le()||t.updateInstallTargetVersion||"",t.firmwareConnectionSwitchConfirmed=!1,t.controlNotice="";else{let i=Ge(e.targetConnection);t.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){t.controlError=`Verbindingswissel kon niet worden gestart. ${r.message}`}finally{ar(),d()}}}async function xg(){let e=ba(),o=R.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareTopologySwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",d();return}t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="topology-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetTopology=e.targetTopology,t.updateInstallTargetVersion=le()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",d();try{if(!await ti("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");t.updateInstallTargetVersion=no(ge()||{})||le()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,d(),on();let n=await fetch(U(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await ir({initialDelayMs:vo,pollDelayMs:Or}))t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=le()||t.updateInstallTargetVersion||"",t.firmwareTopologySwitchConfirmed=!1,t.controlNotice="";else{let i=ko(e.targetTopology);t.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){t.controlError=`Opstellingswissel kon niet worden gestart. ${r.message}`}finally{ar(),d()}}}async function $S(e,o){let r=en(e,o);if(!r)throw new Error("Geen geldig PR-target gevonden.");let n=await fetch(r.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(n.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!n.ok)throw new Error(`GitHub API gaf HTTP ${n.status}`);let a=await n.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(m=>m&&m.name===o.otaFileName),p=i.find(m=>m&&m.name===o.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${o.label}.`);if(!p||!p.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${o.label}.`);let u=String(a.name||a.tag_name||`PR ${e}`).trim(),c=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:p.browser_download_url,label:c?`${u} \xB7 ${c.replace("T"," ").replace("Z"," UTC")}`:u}}async function qg(e,o){if(!h(e))throw new Error(`${R[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await io(e,o);t.entities[e]={...t.entities[e]||{},state:r,value:r}}async function $g(){let e=Ao(),o=nr(),r=R.installFirmwareTestOta;if(!e){t.updateTestFirmwareError="Vul een geldig PR-nummer in.",d();return}if(!o.available){t.updateTestFirmwareError=o.error||"Dit firmwaretarget wordt niet herkend.",d();return}if(!t.updateTestFirmwareConfirmed){t.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",d();return}if(!r||!h("installFirmwareTestOta")){t.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",d();return}t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="test-firmware",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null,d();let n=!1;try{let a=await $S(e,o);t.updateTestFirmwareBuild=a.label,d(),await qg("firmwareTestOtaUrl",a.otaUrl),await qg("firmwareTestOtaMd5Url",a.md5Url),n=!0,on();let i=await fetch(U(r.domain,r.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await ir({initialDelayMs:vo,pollDelayMs:Or})?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=le()||`PR ${e}`,t.updateTestFirmwareOpen=!1,Qe(),t.controlNotice=""):t.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&cs(a.message)?t.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:t.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{ar(),d()}}async function Ag(){let e=t.updateManualUploadFile;if(!e){t.updateManualUploadError="Kies eerst een firmwarebestand.",d();return}t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=le()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",t.updateManualUploadError="",d();try{let o=new FormData;o.append("update",e,e.name||"firmware.bin");let r=await fetch("/update",{method:"POST",body:o});if(!r.ok)throw new Error(`HTTP ${r.status}`);t.updateManualUploadOpen=!1,ke(),await ir()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=le()||t.updateInstallTargetVersion||"",t.controlNotice=""):t.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(o){t.updateManualUploadError=`Handmatige upload mislukte. ${o.message}`}finally{ar(),d()}}function AS(e=t.currentStep){let o=["setupComplete","strategy",...Ke];return e==="generation"?[...new Set([...o,"installationTopology",...jo,"hpGeneration"])]:e==="flow-source"?[...new Set([...o,"hpGeneration",...ot])]:e==="thermostat-source"?[...new Set([...o,...ho])]:e==="boiler"?[...new Set([...o,"boilerCvAssistEnabled","boilerRatedHeatPower"])]:e==="strategy"?[...new Set([...o,"strategy"])]:e==="heating"?[...new Set([...o,...pt,...fo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...o,...Be,...Ko])]:e==="water"?[...new Set([...o,"maxWater"])]:e==="silent"?[...new Set([...o,...bo])]:e==="confirm"?[...new Set([...o,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...ot,...ho,...Be,...Ko,...pt,...fo,"maxWater",...bo])]:o}async function oi(e=t.currentStep){let o=AS(e);try{await L(o,"all",{concurrency:Ct}),t.quickStartModalOpen&&t.currentStep===e&&!t.nativeOpen&&d()}catch{}}async function Hg(){let e=Tr();if(!e.canApply){t.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",d();return}t.busyAction="quickstart-flow-source",t.controlNotice="",t.controlError="",d();let o=async(r,n)=>{if(!h(r))return;let a=E(r);if(typeof n=="boolean"&&k(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await io(r,n);t.entities[r]={...t.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),await o("flowSource","CIC"),t.quickStartCicFeedUrlDraft=null,t.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await o("qFlowSource",e.qFlowTarget),await o("flowSource","Outdoor unit"),t.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await L(ot,"all")}catch(r){t.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{t.busyAction="",d()}}async function Mg(){t.busyAction="quickstart-flow-refresh",t.controlNotice="",t.controlError="",d();try{await L(ot,"all");let e=Tr();t.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){t.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{t.busyAction="",d()}}async function Rg(e,o){let r=R[e];if(!r||!h(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(U(r.domain,r.name,o?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function HS(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{t.optionalMissingEntities&&delete t.optionalMissingEntities[r],delete t.entities[r]}),await L(e,"all");let o=e.filter(r=>!t.entities[r]);if(o.length){let r=o.map(n=>R[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function MS(){for(let e=0;e<40;e+=1){await new Promise(o=>window.setTimeout(o,1e3));try{await L(ot,"state")}catch{return}if(!k("quickFlowTest")){t.busyAction!=="quickstart-flow-test-abort"&&(t.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),d();return}}}async function Pg(){if(!Tr().canRunFlowTest){t.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",d();return}t.busyAction="quickstart-flow-test-start",t.controlNotice="",t.controlError="",d();let o=!1;try{if(await HS(),!k("cm100Active")){let a=R.commissioningCm100Start,i=await fetch(U(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);o=!0}let r=k("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await L(["commissioningStatus","cm100Active"],"state"),r=k("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await Rg("quickFlowTest",!0),await L(ot,"all");let n=String(E("commissioningStatus")||"").trim();if(!k("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");t.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",MS()}catch(r){if(o&&!k("quickFlowTest"))try{let n=R.commissioningCm100Stop;await fetch(U(n.domain,n.name,"press"),{method:"POST"})}catch{}t.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{t.busyAction="",d()}}async function Ng(){t.busyAction="quickstart-flow-test-abort",t.controlNotice="",t.controlError="",d();try{await Rg("quickFlowTest",!1),await L(ot,"all"),t.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){t.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{t.busyAction="",d()}}async function Og(){let e=ja();if(!e.canApply){t.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",d();return}t.busyAction="quickstart-thermostat-source",t.controlNotice="",t.controlError="",d();let o=async(r,n)=>{if(!h(r))return;let a=E(r);if(typeof n=="boolean"&&k(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await io(r,n);t.entities[r]={...t.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await o("otEnabled",!0):e.selectedSource==="CIC"&&(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),t.quickStartCicFeedUrlDraft=null),await o("roomTempSource",e.selectedSource),await o("roomSetpointSource",e.selectedSource),t.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await L(ho,"all")}catch(r){t.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{t.busyAction="",d()}}function Lg(){window.setTimeout(()=>{let e=document.activeElement;t.focusedField=e&&e.dataset&&e.dataset.oqField||"",t.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function Fg(e){e.target.closest(".oq-ph-concept-hotspot")&&(t.settingsInteractionLock=!0)}function Ig(e){let o=e.target.closest(".oq-ph-concept-hotspot");if(!o||e.relatedTarget&&o.contains(e.relatedTarget))return;let r=t.root&&t.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;t.settingsInteractionLock=!!(r||n)}function _g(e){if(e.target.dataset.oqFirmwareConnectionConfirm){t.firmwareConnectionSwitchConfirmed=!!e.target.checked,d();return}if(e.target.dataset.oqFirmwareTopologyConfirm){t.firmwareTopologySwitchConfirmed=!!e.target.checked,d();return}if(e.target.dataset.oqFirmwareTestConfirm){t.updateTestFirmwareConfirmed=!!e.target.checked,t.updateTestFirmwareError="";let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!t.updateTestFirmwareConfirmed||!Ao()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){t.updateTestFirmwarePr=String(e.target.value||""),t.updateTestFirmwareConfirmed=!1,t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null;let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=nr(),p=en(Ao(),l),u=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');u&&(u.textContent=p?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){Ru(e.target);return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){t.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){t.quickStartThermostatSourceDraft=String(e.target.value||""),d();return}let n=e.target.dataset.oqAuthField;if(n){t.authNotice="",t.authError="",n==="username"?t.authDraftUsername=String(e.target.value||""):n==="currentPassword"?t.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?t.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(t.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){t.pauseResumeDraft=String(e.target.value||"");return}if(R[r]?.domain==="text"){t.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(t.inputDrafts[r]=e.target.value);let n=Ee(e.target.value);if(!Number.isNaN(n)){let a=fe(r,e.target.value);if(t.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=j(r,a))}}}}function Wg(e){Em(e)}function Dg(e,o){return e.deltaMode===1?o*16:e.deltaMode===2?o*window.innerHeight:o}function RS(e){let o=e?e.parentElement:null;for(;o&&o!==document.body&&o!==document.documentElement;){let r=window.getComputedStyle(o),n=/(auto|scroll)/.test(r.overflowY)&&o.scrollHeight>o.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&o.scrollWidth>o.clientWidth;if(n||a)return o;o=o.parentElement}return document.scrollingElement||document.documentElement}function Vg(e){let o=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!o||!t.root||!t.root.contains(o)||document.activeElement!==o)return;e.preventDefault(),o.blur();let r=RS(o);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:Dg(e,e.deltaX||0),top:Dg(e,e.deltaY||0),behavior:"auto"})}function Bg(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",Md(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?(t.firmwareAdvancedOpen=!0,t.updateManualUploadOpen=!0,t.updateManualUploadFile=n,t.updateManualUploadFileName=n.name||"",t.updateManualUploadError=""):ke(),d();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof qn=="function"&&qn(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){t.energyHistoryExportMode=gr(e.target.value),t.energyHistoryExportError="",t.energyHistoryExportNotice="",d();return}let o=e.target.dataset.oqField;if(!o)return;let r=R[o];if(r){if(r.domain==="select"){Jl(o,String(e.target.value));return}if(r.domain==="number"){ec(o,e.target.value);return}if(r.domain==="text"){OS(o,e.target.value);return}if(r.domain==="time"){let n=xt(e.target.value);if(!n){t.controlError=`${r.name} verwacht tijd als HH:MM.`,d();return}NS(o,n);return}if(r.domain==="datetime"){let n=je(e.target.value);if(!n){t.controlError=`${r.name} verwacht datum en tijd.`,d();return}DS(o,n);return}}}function Kg(e){let o=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(o){let c=o.querySelector("input[data-oq-field]");if(c&&(c.type==="time"||c.type==="datetime-local")&&typeof c.showPicker=="function")try{c.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(r){let c=r.dataset.infoId||"";t.settingsInfoOpen=t.settingsInfoOpen===c?"":c,d();return}let l=e.target.closest("[data-oq-action]"),p=t.interfacePanelOpen&&!a;if(!l){let c=!1;if(t.settingsInfoOpen&&!n&&(t.settingsInfoOpen="",c=!0),p&&(Ea(!1),c=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;t.updateModalOpen&&(t.updateModalOpen=!1,t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),Qe(),c=!0),t.systemModal&&(Ra(),zo(),t.systemModal="",c=!0)}c&&d();return}p&&l.dataset.oqAction!=="toggle-interface-panel"&&Ea(!1);let u=l.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){Ea(!t.interfacePanelOpen),d();return}if(u==="toggle-dev-panel"){Jp(!t.devPanelOpen),d();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();let c=l.closest(".oq-settings-monitoring-details");t.installationMonitoringDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();let c=l.closest(".oq-settings-integration-diagnostics");t.integrationDiagnosticsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-odu-runtime-frequency-details"){e.preventDefault();let c=l.closest(".oq-settings-odu-runtime-details");t.oduRuntimeFrequencyDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-storage-technical-details"){e.preventDefault();let c=l.closest(".oq-settings-storage-technical");t.settingsStorageDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!rt())return;let c=l.dataset.viewId||"overview";mt(c,{syncMode:"push"}),d(),ue({forceFast:!0});return}if(u==="select-trend-window"){if(l.disabled)return;dr(Number(l.dataset.trendHours||24)),d(),Ws({force:!0}).then(c=>{c&&d()});return}if(u==="select-energy-history-view"){if(l.disabled||typeof Us!="function")return;Us(l.dataset.energyHistoryView||"day");return}if(u==="shift-energy-history-period"){if(l.disabled||typeof Qs!="function")return;Qs(t.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(u==="select-energy-history-now"){if(l.disabled||typeof Ys!="function")return;Ys(t.energyHistoryView||"day");return}if(u==="select-settings-group"){cn(l.dataset.groupId||de[0].id),d(),ue({forceFast:!0});return}if(u==="open-update-modal"){t.updateModalOpen=!0,d(),Eg();return}if(u==="open-webserver-log-modal"){wp();return}if(u==="open-debug-recording-modal"){t.systemModal="debug-recording",t.debugRecordingError="",t.debugRecordingNotice="",d(),ln();return}if(u==="open-login-modal"){t.systemModal="login",Oi(),t.authNotice="",t.authError="",d(),Kc({poll:!0});return}if(u==="open-api-security-modal"){t.systemModal="api-security",t.apiSecurityNotice="",t.apiSecurityError="",d(),zt({force:!0});return}if(u==="open-mqtt-modal"){t.systemModal="mqtt",rs(),t.mqttDraftDirty=!1,t.mqttNotice="",t.mqttError="",d(),Eo({force:!0});return}if(u==="open-mqtt-sensors-modal"){t.systemModal="mqtt-sensors",t.mqttNotice="",t.mqttError="",t.mqttCopiedTopicKey="",t.mqttExpandedTopicKey="",t.mqttInputToggleBusyKey="",d(),Eo({force:!0}).then(c=>{c&&t.systemModal==="mqtt-sensors"&&d()});return}if(u==="toggle-mqtt-sensor-topic"){let c=l.dataset?.oqMqttTopicKey||"cooling_dew_point";t.mqttExpandedTopicKey=t.mqttExpandedTopicKey===c?"":c,t.mqttError="",d();return}if(u==="toggle-mqtt-input"){let c=l.dataset?.oqMqttTopicKey||"cooling_dew_point";Ou(c,!aa(c));return}if(u==="copy-mqtt-topic"||u==="copy-mqtt-dew-topic"){Nu(l.dataset?.oqMqttTopicKey||"cooling_dew_point");return}if(u==="save-mqtt-config"){Du();return}if(u==="copy-api-security-key"){Qc();return}if(u==="enable-api-security"){Uc();return}if(u==="rotate-api-security"){Gc();return}if(u==="disable-api-security"){zc();return}if(u==="restart-api-security"){jc();return}if(u==="flush-trend-history"){Hn("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:Zt(),refreshDelayMs:500}).then(()=>{mr(void 0,{forceTrendHistory:!0})});return}if(u==="save-lifetime-energy-history"){Hn("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:Zt(),refreshDelayMs:500}).then(()=>{t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,mr(),t.appView==="results"&&lo({force:!0}).then(()=>d())});return}if(u==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Hn("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:Zt(),refreshDelayMs:500}).then(()=>{t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,mr(),t.appView==="results"&&lo({force:!0}).then(()=>d())});return}if(u==="select-energy-history-import-file"){kd();return}if(u==="clear-energy-history-import-file"){Is(),d();return}if(u==="import-energy-history-file"){xd();return}if(u==="export-energy-history"){vd();return}if(u==="open-history-storage-modal"){t.systemModal="history-storage",d(),bn({forceMissing:!0,forceTrendHistory:!0,forceEnergyHistory:!0}).finally(()=>{t.systemModal==="history-storage"&&d()}),mr([1e3,3e3,7e3]);return}if(u==="open-connectivity-modal"){t.systemModal="connectivity",d();return}if(u==="open-restart-confirm"){t.systemModal="restart-confirm",d();return}if(u==="download-settings-backup"){Hd();return}if(u==="open-settings-backup-import"){t.systemModal="settings-backup-import",d();return}if(u==="open-silent-settings-modal"){t.systemModal="silent-settings",d();return}if(u==="open-openquatt-pause-modal"){t.pauseResumeDraft=zn(),t.systemModal="openquatt-pause",d();return}if(u==="enable-openquatt-now"){LS();return}if(u==="apply-openquatt-preset"){let c=Ei(l.dataset.pausePreset||"");t.pauseResumeDraft=c,Zl(c);return}if(u==="apply-openquatt-indefinite"){Zl("");return}if(u==="apply-openquatt-custom-pause"){if(!String(t.pauseResumeDraft||"").trim()){t.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",d();return}Zl(t.pauseResumeDraft||"");return}if(u==="close-update-modal"){t.updateModalOpen=!1,t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),Qe(),d();return}if(u==="close-quickstart-modal"){t.quickStartModalOpen=!1,d();return}if(u==="open-quickstart-modal"){t.currentStep="generation",t.quickStartModalMode="wizard",t.quickStartModalOpen=!0,d();return}if(u==="open-generation-modal"){t.currentStep="generation",t.quickStartModalMode="generation",t.quickStartModalOpen=!0,d();return}if(u==="open-cm100-commissioning-modal"){t.systemModal="",mt("settings"),cn("service"),d(),ue({forceFast:!0});return}if(u==="open-installation-monitoring"){t.systemModal="",mt("settings"),cn("service"),d(),ue({forceFast:!0});return}if(u==="open-service-task-modal"){let c=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(c)&&(t.systemModal=`service-task-${c}`,d(),ue({forceFast:!0}));return}if(u==="press-named-button"){let c=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(c){c==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!0,t.commissioningTaskLock="cm100",t.commissioningBoilerHeatPowerDisplay=""):c==="commissioningCm100Stop"?(t.pendingCommissioningCm100Start=!1,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!0,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="boiler",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?t.commissioningTaskLock="boiler":c==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="autotune"):c==="flowAutotuneAbort"||c==="flowAutotuneApply"?t.commissioningTaskLock="autotune":c==="airPurgeStart"?(t.pendingAirPurgeStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="purge"):c==="airPurgeAbort"?t.commissioningTaskLock="purge":c==="manualFlowStart"?(t.pendingManualFlowStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-flow"):c==="manualFlowAbort"?t.commissioningTaskLock="manual-flow":c==="manualHpStart"?(t.pendingManualHpStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-hp"):c==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.commissioningTaskLock="hp-water-calibration"):c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?t.commissioningTaskLock="hp-water-calibration":c==="manualHpAbort"&&(t.commissioningTaskLock="manual-hp");let m=[],b=0,y="",v="";if(c==="acknowledgeCompressorCyclingAlert")m.push(...Hr);else if(c==="commissioningCm100Start"||c==="commissioningCm100Stop")m.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(c==="boilerPowerTestStart"||c==="boilerPowerTestAbort"||c==="boilerPowerTestApply")m.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(c==="flowAutotuneStart"||c==="flowAutotuneAbort"||c==="flowAutotuneApply")m.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(c==="airPurgeStart"||c==="airPurgeAbort")m.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(c==="hpWaterCalibrationStart"||c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply")m.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(c==="manualFlowStart"||c==="manualFlowAbort"||c==="manualFlowApplyHeating"||c==="manualFlowApplyCooling")m.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(c==="manualHpStart"||c==="manualHpAbort")m.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(pi.has(c)){let g=dc(c);g&&(m.push(...ui(g)),b=c.endsWith("Load")?1200:3200,y=c.endsWith("Load")?`HP${g} ODU runtime tabel lezen aangevraagd.`:`HP${g} ODU runtime write aangevraagd; controleer status/readback.`,v=`ODU runtime actie mislukt voor HP${g}`)}Hn(c,{...m.length?{refreshKeys:m}:{},...b?{refreshDelayMs:b}:{},...y?{successNotice:y}:{},...v?{errorPrefix:v}:{}})}return}if(u==="close-system-modal"){zo(),Ro(),t.systemModal="",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authNotice="",t.authError="",t.apiSecurityNotice="",t.apiSecurityError="",Ra(),d(),sn();return}if(u==="clear-webserver-log-output"){Jr();return}if(u==="copy-webserver-log-output"){qp();return}if(u==="start-debug-recording"){Bp(l.dataset.debugMinutes||15);return}if(u==="start-rolling-debug-recording"){Kp();return}if(u==="select-debug-recording-duration"){Fp(l.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){Up();return}if(u==="freeze-debug-recording"){jp();return}if(u==="download-debug-recording"){Gp();return}if(u==="copy-debug-recording"){zp();return}if(u==="confirm-settings-backup-restore"){Rd();return}if(u==="confirm-restart"){Hn("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){let c=l.dataset.surface==="native";if(t.nativeOpen===c){t.nativeOpen&&ka();return}t.nativeOpen=c,Rs(t.nativeOpen?"native":"app"),t.controlError="",t.controlNotice="",t.settingsInfoOpen="",t.updateModalOpen=!1,t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),Qe(),zo(),t.systemModal="",t.nativeOpen&&ka(),d(),Ca(),window.requestAnimationFrame(()=>{t.nativeOpen?t.nativeApp&&t.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){Zp(t.overviewTheme==="light"?"dark":"light"),d();return}if(u==="select-hp-visual"){Xp(l.dataset.hpVisual==="compact"?"compact":"schematic"),d();return}if(u==="select-hp-layout"){ed(l.dataset.hpLayout||"equal"),d();return}if(u==="select-step"){t.currentStep=l.dataset.stepId||"generation",d(),oi(t.currentStep);return}if(u==="apply-quickstart-flow-source"){Hg();return}if(u==="refresh-quickstart-flow-signal"){Mg();return}if(u==="start-quickstart-flow-test"){Pg();return}if(u==="abort-quickstart-flow-test"){Ng();return}if(u==="apply-quickstart-thermostat-source"){Og();return}if(u==="previous-step"){wl(-1),d(),oi(t.currentStep);return}if(u==="next-step"){wl(1),d(),oi(t.currentStep);return}if(u==="select-settings-option"){let c=l.dataset.selectKey||"",m=l.dataset.selectOption||"";c&&m&&String(E(c)||"")!==m&&Jl(c,m);return}if(u==="toggle-overview-control"){let c=l.dataset.controlKey||"",m=(l.dataset.controlState||"").toLowerCase();c&&(m==="on"||m==="off")&&PS(c,m==="on");return}if(u==="select-overview-control-option"){let c=l.dataset.controlKey||"",m=l.dataset.controlOption||"";c&&m&&String(E(c)||"")!==m&&Jl(c,m);return}if(u==="suggest-curve-fallback"){let c=Qn();c&&ec("curveFallbackSupply",c.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){FS(u);return}if(u==="run-firmware-check"){Tg();return}if(u==="install-firmware-update"){Cg();return}if(u==="install-firmware-connection-switch"){kg();return}if(u==="install-firmware-topology-switch"){xg();return}if(u==="toggle-firmware-advanced"){t.firmwareAdvancedOpen||t.firmwareConnectionSwitchOpen||t.firmwareTopologySwitchOpen||t.updateManualUploadOpen||t.updateTestFirmwareOpen?(t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,ke(),Qe()):t.firmwareAdvancedOpen=!0,d();return}if(u==="toggle-firmware-connection-switch"){t.firmwareConnectionSwitchOpen=!t.firmwareConnectionSwitchOpen,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareConnectionSwitchOpen&&(t.firmwareAdvancedOpen=!0,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,ke(),Qe()),d();return}if(u==="toggle-firmware-topology-switch"){t.firmwareTopologySwitchOpen=!t.firmwareTopologySwitchOpen,t.firmwareTopologySwitchConfirmed=!1,t.firmwareTopologySwitchOpen&&(t.firmwareAdvancedOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,ke(),Qe()),d();return}if(u==="toggle-firmware-upload"){t.updateManualUploadOpen?(t.updateManualUploadOpen=!1,ke()):(t.firmwareAdvancedOpen=!0,t.updateManualUploadOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateTestFirmwareOpen=!1,Qe(),t.updateManualUploadError=""),d();return}if(u==="upload-firmware-file"){Ag();return}if(u==="toggle-firmware-test"){t.updateTestFirmwareOpen?(t.updateTestFirmwareOpen=!1,Qe()):(t.firmwareAdvancedOpen=!0,t.updateTestFirmwareOpen=!0,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,ke(),t.updateTestFirmwareError=""),d();return}if(u==="install-firmware-test"){$g();return}if(u==="save-web-auth"){Yc();return}if(u==="disable-web-auth"){Zc();return}}function jg(e){let o=e.target.closest("[data-curve-key]");!o||!ae()||(t.draggingCurveKey=o.dataset.curveKey||"",Yg(e.clientY))}function Ug(e){typeof Js=="function"&&Js(e),t.draggingCurveKey&&Yg(e.clientY)}function Gg(){if(!t.draggingCurveKey)return;let e=t.draggingCurveKey,o=fe(e,E(e));t.draggingCurveKey="",ec(e,o,"Curvepunt bijgewerkt.")}async function Jl(e,o){let r=R[e];t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.entities[e]={...t.entities[e]||{},state:o,value:o},d();try{let n=await fetch(`${U(r.domain,r.name,"set")}?option=${encodeURIComponent(o)}`,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.entities.firmwareUpdateChannel={...t.entities.firmwareUpdateChannel||{},state:o,value:o},rn(o),d(),await nn(),t.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(t.controlNotice="Logger level bijgewerkt.",t.systemModal==="webserver-logs"&&Zr()):e==="webServerLogHistoryEnabled"?(enabled?(t.webServerLogHistoryLoaded=!1,Zr()):Jr(),t.systemModal==="webserver-logs"&&d()):t.appView==="settings"?await L(Co(),"all"):await L(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Be,...go],"state"),e==="strategy"&&t.appView!=="settings"&&await L(ae(o)?me.map(a=>a.key):pt,"state")}catch(n){t.controlError=`${r.name} kon niet worden bijgewerkt. ${n.message}`}finally{t.busyAction="",d()}}async function PS(e,o){let r=R[e];if(r){t.busyAction=`switch-${e}`,t.controlNotice="",t.controlError="",d();try{let n=o?"turn_on":"turn_off",a=await fetch(U(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:o,state:o},t.controlNotice=`${r.name} ${o?"ingeschakeld":"uitgeschakeld"}.`,t.busyAction="",t.appView==="overview"?await L([...Nr,...Ke,"setupComplete",...kt],"state"):t.appView==="settings"?(await L(Co(),"all"),Qo.includes(e)&&mr()):await L(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Be,...go],"state"),d()}catch(n){t.controlError=`${r.name} aanpassen mislukt (${n.message}).`,d()}finally{t.busyAction="",d()}}}async function ec(e,o,r=""){let n=R[e],a=fe(e,o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=a,d();try{let i=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=r||`${n.name} bijgewerkt.`,await L(t.appView==="settings"?Co():[...new Set([e,"setupComplete","strategy",...Be,...go])],"state")}catch(i){t.inputDrafts[e]=String(a).replace(".",","),t.controlError=`${n.name} kon niet worden bijgewerkt. ${i.message}`}finally{t.busyAction="",d()}}async function NS(e,o){let r=R[e],n=xt(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",d();try{let a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Co():[e,"setupComplete"],"state")}catch(a){t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function OS(e,o){let r=R[e],n=String(o||"").trim();t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=n,d();try{let a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:n,state:n},delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Co():[e,"setupComplete"],"state")}catch(a){t.inputDrafts[e]=n,t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function Xl(e,o){let r=R[e],n=je(o)||wo,a=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:n,state:n},n}async function zg(e,o){let r=R[e],n=o?"turn_on":"turn_off",a=await fetch(U(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:o,state:o},o}async function Qg(){await L([...new Set([...Nr,...Ke,"setupComplete",...kt])],"state")}async function DS(e,o){let r=R[e],n=je(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",d();try{await Xl(e,n),t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Co():[e,"setupComplete","openquattEnabled"],"state")}catch(a){t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function Zl(e){let o=je(e);if(e&&!o){t.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",d();return}if(o&&!h("openquattResumeAt")){t.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",d();return}t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",d();let r=!1;try{h("openquattResumeAt")&&(await Xl("openquattResumeAt",o||wo),r=!!o),await zg("openquattEnabled",!1),t.pauseResumeDraft=o?Gn(o):"",t.systemModal="",t.controlNotice=o?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Uo(o)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Qg()}catch(n){if(r&&h("openquattResumeAt"))try{await Xl("openquattResumeAt",wo)}catch{}t.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{t.busyAction="",d()}}async function LS(){t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",d();try{await zg("openquattEnabled",!0),t.pauseResumeDraft="",t.systemModal="",t.controlNotice="Openquatt regeling is weer actief.",await Qg()}catch(e){t.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{t.busyAction="",d()}}async function FS(e){let o=R[e];t.busyAction=e,t.controlError="",t.controlNotice="",d();try{let r=await fetch(U(o.domain,o.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);t.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await L(["setupComplete"],"state"),e==="reset"&&(t.currentStep=Vo[0].id,t.quickStartModalMode="wizard",t.quickStartModalOpen=!0),t.quickStartModalOpen=e!=="apply",mt("overview",{syncMode:"replace"}),ue({forceFast:!0})}catch(r){t.controlError=`Actie mislukt voor "${o.name}". ${r.message}`}finally{t.busyAction="",d()}}function IS(){window.requestAnimationFrame(()=>{if(!t.root||t.systemModal!=="service-task-hp-water-calibration")return;let e=t.root.querySelector("[data-oq-service-task-scroller]"),o=t.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!o)return;let r=e.getBoundingClientRect(),n=o.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function Hn(e,o={}){let r=R[e];if(r){t.busyAction=e,t.controlError="",t.controlNotice="",d();try{let n=await fetch(U(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||pi.has(e)||(zo(),t.systemModal=""),t.controlNotice=o.successNotice||`${r.name} gestart.`,o.reconnectMode&&Gt(o.reconnectMode),Array.isArray(o.refreshKeys)&&o.refreshKeys.length){let i=Number(o.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await L(o.refreshKeys,"state")}}catch(n){e==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!1,t.commissioningTaskLock=""):e==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!1,t.commissioningTaskLock=""):e==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!1,t.commissioningTaskLock=""):e==="airPurgeStart"?(t.pendingAirPurgeStart=!1,t.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock=""):e==="manualFlowStart"?(t.pendingManualFlowStart=!1,t.commissioningTaskLock=""):e==="manualHpStart"&&(t.pendingManualHpStart=!1,t.commissioningTaskLock=""),t.controlError=`${o.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{t.busyAction="",d(),e==="hpWaterCalibrationApply"&&IS()}}}function Yg(e){let o=t.root?t.root.querySelector(".oq-helper-curve-svg"):null;if(!o||!t.draggingCurveKey)return;let r=o.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,p=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,u=fe(t.draggingCurveKey,p);String(E(t.draggingCurveKey))!==String(u)&&(t.drafts[t.draggingCurveKey]=u,d())}nu({handleChange:Bg,handleClick:Kg,handleFocusChange:Lg,handleInput:_g,handleKeyDown:Wg,handlePointerDown:jg,handlePointerMove:Ug,handlePointerUp:Gg,handleSettingsInteractionEnd:Ig,handleSettingsInteractionStart:Fg,handleWheel:Vg});od();})();
