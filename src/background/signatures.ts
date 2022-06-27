
function getFingerprintingScore(src:string):number{
let score = 0;
//Audio
if(src.includes("webkitOfflineAudioContext")){score +=500;}
if(src.includes("OfflineAudioContext")){score +=500;}
//Canvas
if(src.includes("getContext('bitmaprenderer'")){score +=125;}
if(src.includes("getContext('2d'")){score +=125;}
if(src.includes("getContext('webgl'")){score +=125;}
if(src.includes('getContext("webgl2"')){score +=125;}
if(src.includes('getContext("bitmaprenderer"')){score +=125;}
if(src.includes("getContext('webgl2'")){score +=125;}
if(src.includes('getContext("2d"')){score +=125;}
if(src.includes('getContext("webgl"')){score +=125;}
//ColorDepth
if(src.includes("colorDepth")){score +=1000;}
//ColorGamut
if(src.includes("matchMedia")){score +=200;}
if(src.includes("srgb")){score +=200;}
if(src.includes("rec2020")){score +=200;}
if(src.includes("color-gamut:")){score +=200;}
if(src.includes("p3")){score +=200;}
//Contrast
if(src.includes("matchMedia")){score +=500;}
if(src.includes("prefers-contrast:")){score +=500;}
//CookiesEnabled
if(src.includes("indexOf")){score +=500;}
if(src.includes("cookie")){score +=500;}
//CpuClass
if(src.includes("cpuClass")){score +=1000;}
//DeviceMemory
if(src.includes("deviceMemory")){score +=1000;}
//DomBlockers
//FontPreferences
//Fonts
//ForcedColors
if(src.includes("matchMedia")){score +=500;}
if(src.includes("forced-colors:")){score +=500;}
//HardwareConcurrency
if(src.includes("hardwareConcurrency")){score +=1000;}
//Hdr
if(src.includes("matchMedia")){score +=500;}
if(src.includes("dynamic-range:")){score +=500;}
//IndexedDb
if(src.includes("indexedDB")){score +=1000;}
//InvertedColors
if(src.includes("matchMedia")){score +=500;}
if(src.includes("inverted-colors:")){score +=500;}
//Languages
if(src.includes("systemLanguage")){score +=250;}
if(src.includes("userLanguage")){score +=250;}
if(src.includes("browserLanguage")){score +=250;}
if(src.includes("languages")){score +=250;}
//LocalStorage
if(src.includes("localStorage")){score +=1000;}
//Math
//Monochrome
if(src.includes("matchMedia")){score +=333;}
if(src.includes("max-monochrome:")){score +=333;}
if(src.includes("min-monochrome:")){score +=333;}
//OpenDatabase
if(src.includes("openDatabase")){score +=1000;}
//OsCpu
if(src.includes("oscpu")){score +=1000;}
//Platform
//Plugins
if(src.includes("plugins")){score +=1000;}
//ReducedMotion
if(src.includes("matchMedia")){score +=500;}
if(src.includes("prefers-reduced-motion:")){score +=500;}
//ScreenFrame
if(src.includes("availTop")){score +=200;}
if(src.includes("availWidth")){score +=200;}
if(src.includes("screen")){score +=200;}
if(src.includes("availHeight")){score +=200;}
if(src.includes("availLeft")){score +=200;}
//ScreenResolution
if(src.includes("screen")){score +=333;}
if(src.includes("height")){score +=333;}
if(src.includes("width")){score +=333;}
//SessionStorage
if(src.includes("sessionStorage")){score +=1000;}
//Timezone
if(src.includes("timeZone")){score +=333;}
if(src.includes("resolvedOptions")){score +=333;}
if(src.includes("DateTimeFormat")){score +=333;}
//TouchSupport
if(src.includes("msMaxTouchPoints")){score +=250;}
if(src.includes("TouchEvent")){score +=250;}
if(src.includes("maxTouchPoints")){score +=250;}
if(src.includes("ontouchstart")){score +=250;}
//Vendor
if(src.includes("vendor")){score +=1000;}
//VendorFlavors
return score;}