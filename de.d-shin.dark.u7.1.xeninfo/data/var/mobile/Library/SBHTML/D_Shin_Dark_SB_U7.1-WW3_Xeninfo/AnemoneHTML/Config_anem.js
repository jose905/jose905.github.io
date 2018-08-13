/* ------ UniAW7.1 from Ian Nicoll & Dacal ------ */
/* ------ Modded for WW3 MultiAPI by NewD --------*/

var useDoubleTap = true; 
var iPhoneType = "auto"; // "auto" (normal use), "iPh4", iPh5", "iPh6", "iPh6Plus", "iPhX" or "editMode" (bigger preview).

/*  LANGUAGES: */
var lang = "ge"; // en English, fr French, ge German, it Italian, sp Spanish, nl Dutch, fi Finland, no Norweigan, tr Turkish, gr Greek, ru Russian, cn Chinese, am for US date format.

/*  D-SHIN DARK UNIQUE OPTIONS: */
var MyWall = true; // if you dont like with dock & shelves! Set to 'false'. 
var SlideCalendar = true; // by Marmoul
var LineCalendar = false; // by Oldster, Special thanks to Oldster, Eric, Uhoffi and NewD

/* MULTI WEATHER API OPTION *///Choose main Weather source for Description, Temp and High/Low, Weather Icon and 5 Day (at bottom-MANY more WW3 extra data options)
var weatherAPI = "default"; // "accu" = Accuweather (USA only), "yahoo" = Yahoo, "fio" = Forecast.io/DarkSky, "wu" = WeatherUnderground, "default" = Weather.com - Apple's FIO and WU require free API keys downloaded from their sites

/* MAIN OPTIONS */
var GroovyPlus = false; // true for use only with GroovyAPI+, GroovyLock+ & GroovyBoard+ in iOS8
var ShowAddress = true; // true to display street address
var PreferGoogle = false; // true to use Google for location data, false for WW (Google only activates when WW API is down).
var UseExtraLocation = "auto"; // city, neighborhood or auto (used for cityname).
var superLiteMode = false; // minimal option.
var noAnimationsOnStartup = false; // only works if superLiteMode = false, true to start the widget without animations running.
var font_color_day = "#c1c1c3"; // font color for day.
var font_color_night = "#808081"; // font color for night.
var Wallpaper_options = "weatherwalls"; // weatherwalls, userdaynight, user or none.
var userset = ""; // for multiple "user" or "userdaynight" walls - add a '1,2,etc', to each different one you add. The default "user" wall is black. The default "userdaynight" wall pair are by MMi's own -Boots-

/* CLOCK AND LAYOUT OPTIONS */
var ClockType = "analog"; // analog, digital or none.
var Seconds_LightRing_Color = ""; // leave blank for day/night font colors, use any Hex color code, or any compatible color name (see included pdf file).
var ShowSecondhand = true; // show second hand in analog clock.
var ShowSecondsLightRing = true; // only works if superLiteMode = false, animated colored ring effect around clockfaces.

/* ANIMATION OPTIONS */
var Dacals_Sun = false; // Use Dacals sun.
var twilight = true; // twilight effects around sunset times.
var frost_effect = false; // frost effect when temp hits 0C or 32F.
var Strong_Wind = 30; // wind speed required to activate wind effect. Use 1000 to deactivate all wind effects.
var Wind_Type = "leaves"; // specify wind type you want displayed "leaves", "dandelion" or "windmill"
var Sun_Moon_from_right_to_left = false; // sun & moon will travel from right to left throughout the day/night.
var Show_Birds = false; // only works if superLiteMode = false, show the birds in certain daytime weather conditions (animated gif - iOS8 may have issues!).
var ShowAstronaut = false; // only works if superLiteMode = false, show the astronaut in certain weather conditions at night.
var Homer_is_astronaut = false; // Homer Simpson is astronaut.
var FullScreenFogHaze = true; // fog & have from top of your screen to bottom of your screen.
var FullScreenClouds = false; // clouds from top of your screen to bottom of your sreen.
var ShowWiper = true; // show wiper in wet weather conditions.
var ShowRainbow = true; // show rainbow in certain daytime weather conditions
var Use_Dacals_Dandelion = true; // true or false.
var ShowBigBalloons = false; // show big balloons in certain daytime weather conditions.
var ShowMediumBalloons = true; // show medium balloons in certain daytime weather conditions.
var ShowSmallBalloons = true; // show small balloons in certain daytime weather conditions.
var Ians_Meteors = true; // meteors fall in a straighter angle.

// RAIN EFFECT - CHOOSE AT LEAST ONE EFFECT FOR RAIN
var ClassicRain = true; // true for classic rain drops.
var WireRain = true; // true for wire rain effect.

/* ADDITIONAL WW3 DATA OPTIONS */ //WU and FIO xtra data need FREE API keys placed in WW3 Extras Page
var ShowAllWW3Data = false; // true to display all WW3 data available
var wuCurrentExtras = false; // Elevation, Nearest Weather Station, Current Weather Summary, Wind Text
var fioCurrentExtras = false; // % Cloud Cover, Ozone, Storm Distance & Bearing, Hourly/Daily/Weekly Summaries
var accuCurrentExtras = false; // Current Precip Amount, Rain/Snow totals expected, Thunderstorm Chance %, Current Weather Summaries Short & Long
var accuAllergyExtras = false; // Air Quality and Pollen Count Data
var accuPlanetExtras = false; // Planet Rising and Setting Data
var ForecastDays = 10; // choose # forecast days up limits listed below for each API
var DayOnly = false; // 'false' allows for Daily and Nightly for WU and DEFAULT, 'true' for daily only
var defForecastExtras = true; // Up to 10 days of Daily & Nightly Forecast Summaries
var wuForecastExtras = false; // Up to 10 days of Daily & Nightly Forecast Summaries
var fioForecastExtras = false; // Up to 7 days of Daily Forecast Summaries
var accuForecastExtras = true; // Up to 7 days of Daily Forecast Summaries
var yahooForecastExtras = true; // Up to 10 days of Daily Forecast Summaries
var Use_Forecast_Header = true; // Use a title header for Summaries ("WU Day/Night Summaries"),etc
var showForecastExtras_on_startup = false; // true to show the forecast summaries on start
var useScrollOnForecastExtras = false; // LS only - true to allow scrolling; false to have only tap touch fadein/out
