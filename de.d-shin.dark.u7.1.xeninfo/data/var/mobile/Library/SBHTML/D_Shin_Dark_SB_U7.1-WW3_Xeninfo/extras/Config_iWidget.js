/* ------ UniAW7.1 from Ian Nicoll & Dacal ------ */
/* -------Modded for WW3 MultiAPI by NewD --------*/

var useDoubleTap = false;

var font_color_day = "#d9e0b9"; // font color for day.
var font_color_night = "#00FFFF"; // font color for night.

var iPhoneType = "auto"; // DON'T TOUCH!
var GroovyPlus = false; // DON'T TOUCH!

var ShowAllWW3Data = false; //true to show all WW3 data available

/* MAIN OPTIONS */
var Wallpaper_options = "none"; // DON'T TOUCH!
var userset = ""; // DON'T TOUCH!
var useWindArrow = true; //false to use cardinal directions (ESE, SW, etc)

/* NEW MODDER'S OPTIONS */
var Use_Date_with_Weekday = false; // true to use date number after weekday in 5-day forecast
var Forecast_Date_Suffix = false; // only works if Use_Date_with_Weekday = true, to use number suffixes ('st', 'nd', etc) with date number in 5-day forecast

/* ADDITIONAL WW3 DATA OPTIONS */ //WU and FIO xtra data need FREE API keys placed in WW3 Extras Page
var wuCurrentExtras = false; // Elevation, Nearest Weather Station, Current Weather Summary, Wind Text
var fioCurrentExtras = false; // % Cloud Cover, Ozone, Storm Distance & Bearing, Hourly/Daily/Weekly Summaries
var accuCurrentExtras = false; // Current Precip Amount, Rain/Snow totals expected, Thunderstorm Chance %, Current Weather Summaries Short & Long
var accuAllergyExtras = false; // Air Quality and Pollen Count Data
var accuPlanetExtras = false; // Planet Rising and Setting Data
///////
var ForecastDays = 10; // choose # forecast days up limits listed below for each API
var DayOnly = false; // 'false' allows for Daily and Nightly for WU and DEFAULT, 'true' for daily only
var defForecastExtras = true; // Up to 10 days of Daily & Nightly Forecast Summaries
var wuForecastExtras = false; // Up to 10 days of Daily & Nightly Forecast Summaries
var fioForecastExtras = false; // Up to 7 days of Daily Forecast Summaries
var accuForecastExtras = false; // Up to 7 days of Daily Forecast Summaries
var yahooForecastExtras = true; // Up to 10 days of Daily Forecast Summaries
var Use_Forecast_Header = true; // Use a title header for Summaries ("WU Day/Night Summaries"),etc
var showForecastExtras_on_startup = false; // true to show the forecast summaries on start
var useScrollOnForecastExtras = false; // LS only - true to allow scrolling; false to have tap touch fadein/fadeout



