// UniAW7.1 from Ian Nicoll & Dacal
// Modded for MultiAPI by NewD

// GLOBAL VARIABLES
var updateFileTimer = "";
var updateDateText = "";
var updateTimer = 0;
var meteorTimer;
var lightningTimer;
var refreshTimer;
var obj = {};
var nbwalls = [];
var NUMBER_OF_WALLS = 3;
var prevnumber;
var ShowBackground = false;
var where = "";
var whereOld = "";
var filename = "";
var time_to_change_wall;
var dayhour;
var nighthour;
var ShowMoon = false;
var ShowMoonOld = false;
var moonrisehour;
var moonsethour;
var MoonOffset = 0;
var SecondsLightRingColor = "second_color_day";
var Start_wind_effects = false;
var Show_Wind_Effects = false;
var Start_frost = false;
var Show_frost = false;
var rain_effect;
var ShowSunOrMoon = false;
var wpidx = "-1";
var special_condition = "";
var current_condition = "";
var ReverseWind = false;
var ReverseWindOld = false;
var Wallpaper_options_old = "";
var Prev_ShowSegment = 100; // Wrong value for initialization.
var xmlnumber = "";
var UTC = 0;
var GMT = 0;
var noAnimations = noAnimationsOnStartup;
if (Sun_Moon_from_right_to_left == true) { var reversemove = 1; } else { var reversemove = 0; }
var href = document.location.href;
var currentDoc = href.substr(href.lastIndexOf('/') + 1);
var exitRamp = "";
var Wind_Type;

//EXTRA OPTIONS ORIGINALLY IN CONFIG.JS
var statusBar = true; // display a status bar.
var WeatherInfoBG_Hidden = false; // hide the weatherInfo background.
var ForecastBG_Hidden = false; // hide the forecast background.
var HourlyForecastBG_Hidden = false; // hide the hourly forecast background.
var MoonInfoBG_Hidden = false; // hide the moonInfo background.
var background_filter = false; // apply a slight grey tint on the backgrounds.
var CircleRain = false; // true for circle rain effect.
var iconSetForForecast = "YahooWeatherIconsSm";
var iconSetForCurrentCondition = "YahooWeatherIconsSm"; 
var useRealFeel = false; // for main temperature.
var ShowTempUnit = true; // true to display F or C after main & feelslike temperatures.
var Show_Degree = true; // true to display degree symbol after main & feelslike temperatures.
var Show_Degree_Forecast = true; // true to display degree mark after forecast temperatures.
var ShowTempUnit_HiLo = true; // true to display F or C after high/low temperatures.
var Show_Degree_HiLo = true; // true to display degree mark for high/low temperatures.
var Show_Wind_Description = false; // true to show wind description after city name.
var Hi_Lo_Reversed = false; // Hi temp's first in the 5 day forecast.
var ShowForecast = true; // false will disable forecast, hourly forecast, live forecast and moon phases.
var No_Forecast_On_Start = false; // only works if superLiteMode = false & ShowForecast is set to true, no forecast below the clock on start.
var No_Reverse_Animation = false; // true to disable the animation direction with wind direction.
var useWindArrow = true; // false to use cardinal directions (ESE, SW, etc)
var WindArrow_Shows_Direction_Wind_Is_Blowing = true; // false, & it will point to direction wind is coming from.
var AnimationOnly = false; // true to display ONLY the weather animations (noAnimationsOnStartup should be set to false).
var realMoon = true; // only works if superLiteMode = false & only working with GPS & WindgetWeather feeds. Moon will fit to the real moonset/moonrise times, be it day or night!
var No_Moon_On_Day_Condition = false; // only when realMoon is set to true, when set to true this will hide the moon in daytime hours.
var Clock_Logo = true; // true or false to display UniAW logo on clocks.
var SecDisplay = true; // only works if superLiteMode = false & only for digital Clock.
var ShowYear = true; // true to show the year on clock face (ShowDate must be set to true).
var ShowDate = false; // true to display the current date on clock face.
var OptionalClockCalendar = false; // reverse month & day on the analog/digital clock.
var ShowCurrentConditionIcon = true; // show icon for current weather along with animations.
var Single_Line_Date_My_Format = false; // display order = month.
var Single_Line_Date = true; // show extra date in single line.
var Single_Line_Date_Optional_Format = true; // display order = day, date, month.
var Single_Line_Date_Suffix = false; // true or false.
var Use_Date_with_Weekday = false; // true to use date number after weekday in 5-day forecast
var Forecast_Date_Suffix = false; // only works if Use_Date_with_Weekday = true, to use number suffixes ('st', 'nd', etc) with date number in 5-day forecast

//SET IMAGES PATH
var dualP = (currentDoc == "index.html") ? "" : "AnemoneHTML/";

// GET THE CURRENT WIDTH & HEIGHT
if (iPhoneType == "auto") {
	if (screen.height == 480) { iPhoneType = "iPh4"; }
	else if (screen.height == 568) { iPhoneType = "iPh5"; }
	else if (screen.height == 667) { iPhoneType = "iPh6"; }
	else if (screen.height == 736) { iPhoneType = "iPh6Plus"; }
	else if (screen.height == 1024) { iPhoneType = "iPad"; }
	else { iPhoneType = "iPhX"; }
}

// RESIZE THE BODY
window.addEventListener("load", function() { 
	switch(iPhoneType) {
		case "iPh4":
			document.body.style.width='320px';
			document.body.style.height='568px'; // Keep at 568px (not 480px).
		break;
		case "iPh5":
			document.body.style.width='320px';
			document.body.style.height='568px';
		break;
		case "iPh6":
			document.body.style.width='375px';
			document.body.style.height='667px';
		break;
		case "iPh6Plus":
			document.body.style.width='414px';
			document.body.style.height='736px';
		break;
		case "iPhX":
			document.body.style.width='375px';
			document.body.style.height='667px'; // Keep at 667px (not 812px). Just add a 375x812 overlay called 'homeX.png' in Images/Classic for iPhone X screens.
//			document.getElementById("background").style.height = "812px"; // to make full height walls fill height on X. Comment out (//) for 1/3rd size walls
		break;
		case "iPad":
			document.body.style.width='768px'; 
			document.body.style.height='1364px'; // Keep at 1364px (not 1024px) for 16:9 ratio.
		break;
		case "editMode":
			document.body.style.width='563px';
    		document.body.style.height='1000px';
		break;
	}
}, false);

// ANIMATIONS ONLY
if (AnimationOnly == true) { ClockType = "none"; }

// SET A TIME OUT FOR ALL AJAX REQUEST AND DEACTIVATE THE CACHE
$.ajaxSetup({timeout: 8000, cache: false}); 

// WEATHER CONDITIONS
var Conditions = [
	"thunderstorm", // 0 tornado
	"thunderstorm", // 1 tropical storm
	"thunderstorm", // 2 hurricane
	"thunderstorm", // 3 severe thunderstorms
	"thunderstorm", // 4 thunderstorms
	"sleet", // 5 mixed rain and snow
	"sleet", // 6 mixed rain and sleet
	"sleet", // 7 mixed snow and sleet
	"sleet", // 8 freezing drizzle
	"showers", // 9 drizzle
	"sleet", // 10 freezing rain
	"showers", // 11 showers
	"rain", // 12 rain
	"lightsnow", // 13 snow flurries
	"lightsnow", // 14 light snow showers
    "snow", // 15 blowing snow
    "snow", // 16 snow
    "hail", // 17 hail
    "sleet", // 18 sleet
    "fog", // 19 dust
    "fog", // 20 foggy
    "haze", // 21 haze
    "fog", // 22 smoky
	"wind", // 23 blustery
	"wind", // 24 windy
    "frost", // 25 cold
    "cloud", // 26 cloudy
    "mostlycloudy", // 27 mostly cloudy (night)
    "mostlycloudy", // 28 mostly cloudy (day)
    "partlycloudy", // 29 partly cloudy (night)
    "partlycloudy", // 30 partly cloudy (day) (Partly Sunny)
    "clear", // 31 clear (night)
    "clear", // 32 sunny
    "fair", // 33 fair (night) (Mostly Clear)
    "fair", // 34 fair (day) (Mostly Sunny)
    "sleet", // 35 mixed rain and hail
    "clear", // 36 hot
	"scattered_thunderstorms", // 37 isolated thunderstorms
	"scattered_thunderstorms", // 38 scattered thunderstorms
	"scattered_thunderstorms", // 39 scattered thunderstorms
	"showers", // 40 scattered showers
	"heavysnow", // 41 heavy snow
	"lightsnow", // 42 scattered snow showers
	"heavysnow", // 43 heavy snow
    "partlycloudy", // 44 partly cloudy
    "thunderstorm", // 45 thundershowers
	"lightsnow", // 46 snow showers
	"thunderstorm", // 47 isolated thundershowers
	"blank"]; // 3200 not available

// CALENDAR WEEK FUCTION BY ERIC
function getWeek(year,month,day) {
    //let's calc weeknumber the cruel and hard way :D
    //Find JulianDay 
    month += 1; //use 1-12
    var a = Math.floor((14-(month))/12);
    var y = year+4800-a;
    var m = (month)+(12*a)-3;
	var jd = day + Math.floor(((153*m)+2)/5) + (365*y) + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) - 32045; // (gregorian calendar)
//	var jd = (day+1)+Math.Round(((153*m)+2)/5)+(365+y) + Math.round(y/4)-32083; // (julian calendar)
    
    //now calc weeknumber according to JD
    var d4 = (jd+31741-(jd%7))%146097%36524%1461;
    var L = Math.floor(d4/1460);
    var d1 = ((d4-L)%365)+L;
    NumberOfWeek = Math.floor(d1/7) + 1;
    return NumberOfWeek;        
}	

// IANS 12 MINUTE SCROLLING TIMEDWALLS
 function LaunchTimedWalls() {
	var h = currentTime.getMinutes();
	var dummy = '-48';
	if (h <= 47) { dummy = '-36'; }
	if (h <= 35) { dummy = '-24'; }
	if (h <= 23) { dummy =	'-12'; }
	if (h <= 11) { dummy =	'-0'; }
	h = currentTime.getHours() + dummy;

	if (h != wpidx) {
		wpidx = h;

		WPmove_inTW.src = dualP + "Images/Wallpapers/Timed/" + wpidx + ".jpg";

		var WPmove_tmpTW = WPmove_inTW;
		WPmove_inTW = WPmove_outTW;
		WPmove_outTW = WPmove_tmpTW;
	
		var WPfade_tmpTW = WPfade_inTW;
		WPfade_inTW = WPfade_outTW;
		WPfade_outTW = WPfade_tmpTW;
	
		WPfade_inTW.className = 'fade-out';
		WPfade_outTW.className = 'fade-in';
		WPmove_outTW.style.webkitAnimationName = 'move';
		setTimeout(function () { WPmove_inTW.style.webkitAnimationName = ''; }, 2000);
	}
}

function TimedWallStop() {
	wpidx = "-1";
    WPfade_inTW.className = 'fade-out';
    WPfade_outTW.className = 'fade-out';
}

function init() {

	// SECONDS LIGHT RING
	$("<style>\
	.FontColorNight { color: " + font_color_night + "; }\
	.FontColorDay { color: " + font_color_day +"; }\
	.second_color_day { box-shadow: 0 0 0 " + "3.125vw " + ((Seconds_LightRing_Color == "") ? font_color_day : Seconds_LightRing_Color) + " inset; }\
	.second_color_night { box-shadow: 0 0 0 " + "3.125vw " + ((Seconds_LightRing_Color == "") ? font_color_night : Seconds_LightRing_Color) + " inset; }\
	</style>").appendTo( "body" );
	
	// SHOWCASE ALL NEW WW3 DATA (new for WW3)
	if (ShowAllWW3Data == true) {
		if (iPhoneType == "iPhX") {$$("background").style.height = "812px";}
		ClockType = "none";
		ShowCurrentConditionIcon = false;
		wuCurrentExtras = true;
		fioCurrentExtras = true;
		accuCurrentExtras = true;
		accuAllergyExtras = true;
		accuPlanetExtras = true;
		statusBar = false;
		Single_Line_Date = false;
		SlideCalendar = false;
        LineCalendar = false;
		background_filter = false;
		Wallpaper_options = "daynightwalls";		
		$$("APIName").style.display = "none";
		$$("touch1").style.display = "none";
		$$("touch2").style.display = "none";
		$$("touch3").style.display = "none";
		$$("touch4").style.display = "none";
		$$("TouchSumm").style.marginTop = "117%";
		$$("defSumm").style.marginTop = "117%";
		$$("defSumm").style.backgroundColor = "transparent";
		$$("defSumm").style.border = "none";
		$$("defSumm").style.boxShadow = "none";
		$$("StatusBaruser").style.display = "none";
		$$("Overlay").style.display = "none";
		$$("led1").style.display = "none";
		$$("city").style.display = "none";
		$$("Day0Temp").style.display = "none";
		$$("Day0desc").style.display = "none";
		$$("Day0HiLo").style.display = "none";
		$$("Day0Icon").style.opacity= "0";
		$$("Kalendershow").style.display = "none";
		$$("SingleLineDate").style.display = "none";
		$$("Charging").style.display = "none";
		$$("battery").style.display = "none";
		$$("BatteryImage").style.display = "none";
		$$("BatteryCharging").style.display = "none";
	}
	
//	if (currentDoc != "LockBackground.html") {No_Forecast_On_Start = true; } //(new for WW3)
		
	// FULL SCREEEN HAZE/FOG OR CLOUDS
	if (FullScreenFogHaze == true) {
		fog_height = document.body.offsetHeight - 100;
		haze_height = document.body.offsetHeight - 100;
	} else {
		fog_height = 300; haze_height = 200;
	}

	if (FullScreenClouds == true) { cloud_height = document.body.offsetHeight - 100; } else { cloud_height = 70; }
	
	// BACKGROUND FILTER
	if (background_filter == true) { $("#background").addClass("gray_bkg"); }
	
	// STATUSBAR
	if (statusBar == true) { document.getElementById("statusBar").style.display = "block"; }
		
	// iWIDGET OR LOCKSCREEN
	if ((location.pathname.indexOf("Widget") != -1) && (iOS == true)) {
		Wallpaper_options = "none";
		document.body.style.position = "absolute";
	}
	
	// SUPERLITEMODE
	if (superLiteMode == true) {
		ShowSecondsLightRing = false;
		SecDisplay = false;
		noAnimationsOnStartup = true;
		realMoon = false;
	}
	
    // TIMEDWALLS
    WPfade_inTW = document.getElementById("WPoneTWContainer");
    WPfade_outTW = document.getElementById("WPtwoTWContainer");
    WPmove_inTW = document.getElementById("WPoneTW");
    WPmove_outTW = document.getElementById("WPtwoTW");
	
	// WALLPAPER OPTIONS
	switch (Wallpaper_options) {
		case "user":
			document.getElementById("LayerBack").src = dualP + "Images/Wallpapers/User/Default" +userset+ ".png";	
		break;
		case "none":
			document.getElementById("background").style.display = "none";
		break;
	}
	
	// SPECIAL CSS POSITIONING FOR iPAD & iPHONE X
	
	$('head').removeAttr('Style');
	if (iPhoneType == 'iPad') {
		$ ('head').append('<link rel="stylesheet" media="screen" href="' + dualP + 'Css/Style_iPad.css" type="text/css" >');
	}
	else if (iPhoneType == 'iPhX') {
		$ ('head').append('<link rel="stylesheet" media="screen" href="' + dualP + 'Css/StyleX.css" type="text/css" >');
	}
	else {
		$ ('head').append('<link rel="stylesheet" media="screen" href="' + dualP + 'Css/Style.css" type="text/css" >');
	}
	
	
	// FOR TALLER OVERLAY iPHONE X
	
	if (iPhoneType == "iPhX") {
		if (MyWall == true) {
	    	$$("Overlay").style.backgroundImage = "url('" + dualP + "Images/Classic/homeX.png')";
    	} else {
			$$("Overlay").style.backgroundImage = "url('" + dualP + "Images/Classic/homeXbase.png')";         
		}
		$$("Overlay").style.height = "812px";
		$$("StatusBaruser").style.backgroundImage = "url('" + dualP + "Images/Classic/statusbarX.png')";
		$$("StatusBaruser").style.height = "812px";
	} else {
		if (MyWall == true) {
	    	$$("Overlay").style.backgroundImage = "url('" + dualP + "Images/Classic/home.png')";
    	} else {
			$$("Overlay").style.backgroundImage = "url('" + dualP + "Images/Classic/homebase.png')";         
		}
		$$("StatusBaruser").style.backgroundImage = "url('" + dualP + "Images/Classic/statusbar.png')";
	}
	
	// CLOCK OPTIONS
	switch (ClockType) {
		case "none":
			document.getElementById("Clock").style.display = "none";
			ShowSecondsLightRing = false;
		break;
		case "digital":
			if (ShowSecondsLightRing == true) { createSegment(); }
			if (SecDisplay == false) { document.getElementById("second").style.display = "none"; }
			document.getElementById("clockhands").style.display = "none";
			document.getElementById("clockface").style.backgroundImage = "url('" + dualP + "Images/Clock/digitalclockface.png')";
			document.getElementById("digitalClockFrame").style.backgroundImage = "url('" + dualP + "Images/Clock/digitalclockframe.png')";
		break;
		case "analog":
			if (ShowSecondsLightRing == true) { createSegment(); }
			if (ShowSecondhand == false) { document.getElementById("sechand").style.display = "none"; }
			document.getElementById("clockface").style.backgroundImage = "url('" + dualP + "Images/Clock/analogclockface.png')";
			document.getElementById("analogClockFrame").style.backgroundImage = "url('" + dualP + "Images/Clock/analogclockframe.png')";
		break;
	}
	
	// CLOCK LOGO
	if ((Clock_Logo == false) || (ShowCurrentConditionIcon == true)) { document.getElementById("clocklogo").style.display = "none"; }
	
	if (ShowCurrentConditionIcon == true) { document.getElementById("Day0Icon").style.display = "block"; }
	if (WeatherInfoBG_Hidden == true) { document.getElementById("WeatherInfoBG").style.display = "none"; }
	if (ForecastBG_Hidden == true) { document.getElementById("forecastBG").style.display = "none"; }
	if (HourlyForecastBG_Hidden == true) { document.getElementById("hourlyforecastBG").style.display = "none"; }
	if (MoonInfoBG_Hidden == true) { document.getElementById("mooninfoBG").style.display = "none"; }

    if (ShowForecast == false) {
		document.getElementById("forecast_hourlyforecast_Container").style.display = "none";
		document.getElementById("Moonphase").style.display = "none";
		forecastdisplay = false;
    }

	updateClock();
    setInterval(updateClock, 1000);	
	updateDate();
	setInterval(updateDate, 1000);

	
	document.getElementById("touch1").innerHTML = touch1text;
	document.getElementById("touch2").innerHTML = touch2text;
	document.getElementById("touch3").innerHTML = touch3text;
	document.getElementById("touch4").innerHTML = "player";
	
	// ANIMATION ONLY
	if (AnimationOnly == true) {
		document.getElementById("WeatherContainer").style.display = "none";
	}
//	else if (location.pathname.indexOf("Wallpaper") == -1) { StartTouch(); } **since XenHTML SB Touch allowed
	else { StartTouch(); }

	updateWeather();

	for (var i = 1; i<6; i++) {
		document.getElementById("Day" + i + "Pop").style.opacity = "1.0";
		document.getElementById("Day" + i + "Icon").style.left = 4 +  20*(i-1) + "%";
		document.getElementById("Day" + i).style.left = 2 +  20*(i-1) + "%";
		document.getElementById("Day" + i + "HiLo").style.left = 2.2 +	20*(i-1) + "%";
	}	
	
	ForecastTouch(); //summaries touch stuff in touch.js at bottom
	
} // End of init function

// Thanks to Uhoffi and Eric
// Start LineCalendar
function updateDate() {
	var this_weekday_name_array = sdays,
	this_date_timestamp = new Date(),
	this_weekday = this_date_timestamp.getDay(),
	this_date = this_date_timestamp.getDate(),
	this_month = this_date_timestamp.getMonth(),
	this_year = this_date_timestamp.getFullYear(),
	dim = [31,0,31,30,31,30,31,31,30,31,30,31],
	oD = new Date(this_year, this_date-1, 1);
	oD.od = oD.getDay()+1;
	
	// eric. hier week function abrufen
	var weekNumber =getWeek(this_year,this_month,this_date);
	document.getElementById("week").innerHTML = "KW"+"."+weekNumber;
	document.getElementById("status").innerHTML = "od ="+ oD.od;    
	
	dim[1]=((this_year%100 != 0) && (this_year%4 == 0) || (this_year%400 == 0)) ? 29 : 28;
	var t = '',
	k = 0,
	days_TM = dim[this_month],
	days_PM = (this_month == 0) ? dim[11] : dim[this_month-1],
	days_NM = (this_month == 11) ? dim[0] : dim[this_month+1];
	count = this_weekday - 1;
	
	document.getElementById("status").innerHTML = "od =" + days_TM;		
	
	if(count == -1) { count = 6; }
	do {
	  var k2 = this_date-k,
	  wkstart = (k2<=0) ? days_PM+k2 : k2;
	  k++;
	} 
	while(k <= count);
	  
	document.getElementById("status").innerHTML = " wkstart = " + wkstart + " days_PM = " + days_PM;
	  
	for (s=1;s<7;s++) {
		t += (s == this_weekday) ? '<span class="linetoday">' + this_weekday_name_array[s] +
		'</span>' : '<span class="linedaysofweek">' + this_weekday_name_array[s] + '</span>';
	}
	
	for (s=0;s<1;s++) {
		t += (s == this_weekday) ? '<span class="linetoday">' + this_weekday_name_array[s] +
		'</span>' : '<span class="linedaysofweek">' + this_weekday_name_array[s] + '</span>';
	}
	
	t += '<span class="linedaysofweek"<span style= color:silver >&#xF8FF</span>';
	  
	if (this_date>= wkstart) {
		var wkstartmonth = this_month;
	} else {
		var wkstartmonth = (this_month == 0) ? 11 : (this_month-1);
	}
	  
	for (L=0;L<count;L++) {
		var L2 = L+wkstart;
		if (wkstartmonth==this_month) {
			 
		} else {
	 		if (L2>days_PM)  { L2 = L2-days_PM; }
		}
		t += (L2 == this_date) ? '<span class="linetoday">' + L2 + '</span>' : '<span class="linedaysofweek">' + L2 + '</span>';
	}
	  
	for (M=0;M<=6-count;M++) {
		var M2 = M+this_date;
		if(M2 > days_TM) { M2 = M2-days_TM; }
		t += (M2 == this_date) ? '<span class="linetoday">' + M2 + '</span>' : '<span class="linedaysofweek">' + M2 + '</span>';
	}
	   	  
	if (LineCalendar == true) {
		Single_Line_Date_My_Format = true;
		Single_Line_Date = false;
		$$("linecalendar").innerHTML = t;
		$$("linecalbg").style.display = "block";
		$$("week").style.display = "block";
		$$("calendar").style.display = "none";
	} else {	 
		$$("linecalbg").style.display = "none";	
	}	
}

// End LineCalendar


function createSegment() {
	delelement("secondhand_light");
	for (var i=0; i < 60; i++) {
		var secDiv = document.createElement("div");
		var secDiv2 = document.createElement("div");
		var secDiv3 = document.createElement("div");
		secDiv.className = "sec_right-mask";
		secDiv2.className = "sec_left-mask";
		secDiv3.className = "sec " + SecondsLightRingColor;
		secDiv.id = "sec" + i;
		secDiv2.appendChild(secDiv3);
		secDiv.appendChild(secDiv2);
		document.getElementById("secondhand_light").appendChild(secDiv);
		$("#sec" + i).addClass("fade-out");
		$("#sec" + i).css({"transform" : "rotateZ(" + i*6 + "deg)"});
	}
}

function updateClock() {
	currentTime = new Date();
	if (UTC != 0) { currentTime = new Date(currentTime.getTime() + UTC*3600*1000); }
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
	var currentDate = currentTime.getDate();
	time_to_change_wall = currentHours + currentMinutes/60;
	timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

	if (ampm == false) {
		timeOfDay = "";
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes;
	} else {
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
	}
        
      
	    //day of week    
        var dayoftheweek = currentTime.getDay();
        //var dayofweek = 6;

        var day1 = 1;  
        var day2 = 2;  
        var day3 = 3;  
        var day4 = 4;    
        var day5 = 5;  
        var day6 = 6;    
        var day7 = 0; 
	    
        document.getElementById("WeekDay1").innerHTML = sdays[day1].substring(0, 3); 
        document.getElementById("WeekDay2").innerHTML = sdays[day2].substring(0, 3); 
        document.getElementById("WeekDay3").innerHTML = sdays[day3].substring(0, 3); 
        document.getElementById("WeekDay4").innerHTML = sdays[day4].substring(0, 3); 
        document.getElementById("WeekDay5").innerHTML = sdays[day5].substring(0, 3); 
        document.getElementById("WeekDay6").innerHTML = sdays[day6].substring(0, 3); 
        document.getElementById("WeekDay7").innerHTML = sdays[day7].substring(0, 3);
	    
	
        switch (dayoftheweek) {
            case 1:
				document.getElementById("WeekDay1").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,-49%,0)";
       			document.getElementById("Kalendershow").src = dualP + "Images/slide/1.png";
            break;
            case 2:
				document.getElementById("WeekDay2").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,-16%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/2.png";
            break;
            case 3:
				document.getElementById("WeekDay3").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,17%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/3.png";
            break;
            case 4:
				document.getElementById("WeekDay4").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,48.5%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/4.png";
            break;
            case 5:
				document.getElementById("WeekDay5").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,82%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/5.png";  
            break;
            case 6:
				document.getElementById("WeekDay6").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,114%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/6.png";
            break;
            case 0:
				document.getElementById("WeekDay7").className = "Weektoday";
                document.getElementById("SlideLeft").style.webkitTransform = "translate3d(0,146%,0)";
                document.getElementById("Kalendershow").src = dualP + "Images/slide/7.png";
            break;
            default: 
            break; 
			}
	       
	 if (SlideCalendar == true) {
	   Single_Line_Date_My_Format = true;
	   Single_Line_Date = false;
	   $$("Datel").innerHTML = currentDate;
	   $$("week").style.display = "block";
	   $$("calendar").style.display = "none";
      }else{
	   $$('SlideCalWrap').style.display = "none";
	   $$('applelogo').style.display = "none";           
	  }
	     
	if (ClockType == "analog") {
		if (ShowSecondhand == true) {
			var sdegree = currentSeconds * 6;
			var srotate = "rotate(" + sdegree + "deg)";
			$("#sechand").css("-webkit-transform", srotate);
		}
		var mdegree = currentMinutes * 6;
		var mrotate = "rotate(" + mdegree + "deg)";
		$("#minhand").css("-webkit-transform", mrotate);
		var hdegree = currentHours * 30 + (currentMinutes / 2);
		var hrotate = "rotate(" + hdegree + "deg)";
		$("#hourhand").css("-webkit-transform", hrotate);

		// TO NOT UPDATE DATE EACH SECOND
	if ((updateDateText !=	currentDate + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear()) && (ShowDate == true)) {
			if (OptionalClockCalendar == true) {
		if (ShowYear == true) {
			$("#day").html(months[currentTime.getMonth()]);
					document.getElementById("year").innerHTML = currentTime.getFullYear();
		} else {
			$("#day").html(months[currentTime.getMonth()]);
		}
		document.getElementById("month").innerHTML = days[currentTime.getDay()];
		document.getElementById("number").innerHTML = currentDate;
			} else {
		$("#day").html(days[currentTime.getDay()]);
		if (ShowYear == true) { document.getElementById("year").innerHTML = currentTime.getFullYear(); }
		document.getElementById("month").innerHTML = months[currentTime.getMonth()];
		document.getElementById("number").innerHTML = currentDate;
	    }
	    updateDateText = currentDate + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear();	
	}
    } else {
	if (ClockType == "digital") {
			if ((updateDateText !=	currentDate + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear()) && (ShowDate == true)) {
				if (OptionalClockCalendar == true) {
					if (ShowYear == true) {
						$("#day").html(((months[currentTime.getMonth()].length > 6) ? months[currentTime.getMonth()].substring(0,3) + "." : months[currentTime.getMonth()]) + " " + currentTime.getFullYear());
					} else {
						$("#day").html(months[currentTime.getMonth()]);
					}
					if ((lang == "am") || (lang == "en")) {
						document.getElementById("month").innerHTML = days[currentTime.getDay()] + " " + Suffix(currentDate);
					} else {
						document.getElementById("month").innerHTML =  days[currentTime.getDay()] + " " + currentDate;
					}
				} else {
					$("#day").html(days[currentTime.getDay()]);
					if (ShowYear == true) { document.getElementById("year").innerHTML = currentTime.getFullYear(); }
					if (lang == "am") { document.getElementById("month").innerHTML = months[currentTime.getMonth()] + " " + Suffix(currentDate); }
					else if (lang == "en") { document.getElementById("month").innerHTML =  Suffix(currentDate) + " " + months[currentTime.getMonth()]; }
					else { document.getElementById("month").innerHTML =  currentDate + " " + months[currentTime.getMonth()]; }
				}
				updateDateText = currentDate + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear();	
			}
			document.getElementById("hours_minutes").innerHTML = currentHours + ":" + currentMinutes;
	        document.getElementById("ampm").innerHTML = timeOfDay;
	        document.getElementById("second").innerHTML = currentSeconds;
	        }
           }
	if (ShowDate == true) {
	  Single_Line_Date_My_Format = true;
	  Single_Line_Date = false;
	  $$('month').style.display = "none";
	}

		     // SINGLE LINE DATE
	
	if (Single_Line_Date_My_Format == true) {
		document.getElementById("SingleLineDate").innerHTML =   months[currentTime.getMonth()] + ", " + currentTime.getFullYear() + ".";
	    } else {
		document.getElementById("SingleLineDate").innerHTML =   months[currentTime.getMonth()] + ", " + currentTime.getFullYear() + ".";
	    }
	  
	
    if (Single_Line_Date_Optional_Format == true) {
	if (Single_Line_Date == true) {
	    if (Single_Line_Date_Suffix == true) {
		document.getElementById("SingleLineDate").innerHTML =  Suffix(currentDate) + " " + months[currentTime.getMonth()] + ", " + currentTime.getFullYear() + ".";
	    } else {
		document.getElementById("SingleLineDate").innerHTML =  currentDate + " " + months[currentTime.getMonth()] + ", " + currentTime.getFullYear() + ".";
	    }
	}
    } else {
	if (Single_Line_Date == true) {
	    if (Single_Line_Date_Suffix == true) {
		document.getElementById("SingleLineDate").innerHTML =  months[currentTime.getMonth()] + " " + Suffix(currentDate) + ", " + currentTime.getFullYear() + ".";
	    } else {
		document.getElementById("SingleLineDate").innerHTML =  months[currentTime.getMonth()] + " " + currentDate + ", " + currentTime.getFullYear() + ".";
	    }
	}
    }

	if (ShowSecondsLightRing == true) {
		ShowSegment = currentTime.getSeconds();
		if (ShowSegment != Prev_ShowSegment) {
			if (ShowSegment == 0) {
				createSegment();
			} else {
				diff_Segment = ShowSegment - Prev_ShowSegment;
				if (diff_Segment == 1) {
					$("#sec" + Prev_ShowSegment).removeClass("fade-out");
				} else { 
					createSegment();
					for (var s=0; s <= ShowSegment-1; s++) { $("#sec" + s).removeClass("fade-out"); }
				}
			}
			Prev_ShowSegment = ShowSegment;
		}
	}

    // LAUNCH TIMED WALL
    if (Wallpaper_options == 'timedwalls') { LaunchTimedWalls(); }

} // End of updateClock function

function Suffix(tmpDate) {
	switch (tmpDate) {
		case 1:
		case 21:
		case 31:
			return tmpDate + "st";
		break;
		case 2: 
		case 22:
			return tmpDate + "nd";
		break;
		case 3:
		case 23:
			return tmpDate + "rd";
		break;
		default:
			return tmpDate + "th";
		break;
	}
}

function dealWithWeather(obj) {
	
	// INITIALIZE ANIMATION SWITCH (HERE TO BE SURE THE FUNCTION WILL BE LAUNCHED ONLY IF WE HAVE SOME WEATHER INFOMATION)
	if (dayhour == null) { StartAnimationTouch(); }
	
	// MAKE SURE ONLY SNOW IF RAIN/SNOW BOTH REPORTED (new for WW3)
	if (obj.wuSnow[0] > 0) { obj.wuRain[0] = 0; }
	if (obj.accuSnow[0] > 0) { obj.accuRain[0] = 0; }

	// ADDITIONAL INFORMATION FOR UNITS
	if (obj.unitsspeed == "mph") {
		convertS = 0.621371; //kilometers per hour to miles per hour
	} else {
		convertS = 1;
	}
	
	if (obj.unitsdistance == "mile") {
		convertD = 0.621371; //kilometers to miles
		convertM = (obj.accuSnow[0] == 0) ? 0.03937007874 : 0.3937007874; //millimeters to inches (for rain) unless snowing
		convertC = 0.3937007874; //centimeters to inches (for snow)
		convertF = 1;
		visibilityunit = "mi.";
		measureunit = "in.";
		feetunit = "ft.";
		windspeedunit = wsutextimp;
	} else {
		convertD = 1;
		convertM = 1;
		convertC = 1; 
		convertF = 3.2808; //feet to meters - for WU elevation which only comes in feet from feed
		visibilityunit = "km.";
		measureunit = (obj.accuSnow[0] == 0) ? "mm." : "cm.";
		feetunit = "m.";
		windspeedunit = wsutextmet;
	}

	if (obj.unitspressure == "InHg") {
		convertP = 33.8638864;
		pressureunit = "inHg";
	} else {
		convertP = 1;
		pressureunit = "mb";
	}
	
	if (obj.celsius == "YES") { var Unit = "C" } else { var Unit = "F" }
				
	if (Show_Degree == true) {
		if (ShowTempUnit == true) { var tempUnit = "&#176;" + Unit; } else { var tempUnit =  "&#176;"; }
	} else {
		if (ShowTempUnit == true) { var tempUnit = " " + Unit; } else { var tempUnit =  ""; }	
	}
	
	if (Show_Degree_Forecast == true) { var tempUnit_Forecast = "&#176;" + Unit; } else { var tempUnit_Forecast =  ""; }

	if (Show_Degree_HiLo == true) {
		if (ShowTempUnit_HiLo == true) { var tempUnit_HiLo = "&#176;" + Unit; } else { var tempUnit_HiLo =  "&#176;"; }
	} else {
		if (ShowTempUnit_HiLo == true) { var tempUnit_HiLo = " " + Unit; } else { var tempUnit_HiLo =  ""; }	
	}
	
	// COORDINATES
	if (obj.latitude < 0) { textLat = obj.latitude.toFixed(2) + "\u00B0" + "S"; }
	else if (obj.latitude > 0){ textLat = obj.latitude.toFixed(2) + "\u00B0" + "N"; }
	else { textLat = obj.latitude.toFixed(2) + "\u00B0"; }
	if (obj.longitude < 0) { textLong = obj.longitude.toFixed(2) + "\u00B0" + "W"; }
	else if (obj.longitude > 0) { textLong = obj.longitude.toFixed(2) + "\u00B0" + "E"; }
	else { textLong = obj.longitude.toFixed(2) + "\u00B0"; }
	document.getElementById("coordinates").innerHTML = textLat + " " + textLong;
		
	// MOONSET/MOONRISE FORMAT
	ComputeMoonInfo(obj.daydate[0]);

	var moonriseh = obj.moonrise.replace("*","").split(":")[0]*1;
	var moonrisem = obj.moonrise.replace("*","").split(":")[1];
	var moonseth = obj.moonset.replace("*","").split(":")[0]*1;
	var moonsetm = obj.moonset.replace("*","").split(":")[1];
	
	if (isNaN(moonseth) && isNaN(moonriseh)) {
		ShowMoon = false;
		document.getElementById("Moonrise").innerHTML =  moonrisetext + "<BR>" + obj.moonrise;
		document.getElementById("Moonset").innerHTML =	 moonsettext + "<BR>" + obj.moonset;
	} else {
		moonrisehour = moonriseh + parseInt(moonrisem)/60;
		moonsethour = moonseth + parseInt(moonsetm)/60;
				
		if (moonsethour < moonrisehour) {
			DurationOfMoon = moonsethour + 24 - moonrisehour + MoonOffset;
			if ((time_to_change_wall >= moonrisehour) || (time_to_change_wall < moonsethour)) { ShowMoon = true; } else { ShowMoon = false; }		
		} else {
			DurationOfMoon = moonsethour - moonrisehour + MoonOffset;
			if ((time_to_change_wall < moonrisehour) || (time_to_change_wall >= moonsethour)) { ShowMoon = false; } else { ShowMoon = true; }
		}

		if (ampm == false) {
			moonriseh = (moonriseh < 10 ? "0" : "") + moonriseh;
			moonseth = (moonseth < 10 ? "0" : "") + moonseth;
			var moonrise = moonriseh + ":" + moonrisem;
			var moonset = moonseth + ":" + moonsetm;
		} else {
			var timeOfMoonset = (moonseth < 12) ? "am" : "pm";
			var timeOfMoonrise = (moonriseh < 12) ? "am" : "pm";
			moonriseh = (moonriseh > 12) ? moonriseh - 12 : moonriseh;
			moonriseh = (moonriseh == 0) ? 12 : moonriseh;
			moonseth = (moonseth > 12) ? moonseth - 12 : moonseth;
			moonseth = (moonseth == 0) ? 12 : moonseth;
			var moonrise = moonriseh + ":" + moonrisem + " " + timeOfMoonrise;
			var moonset = moonseth + ":" + moonsetm + " " + timeOfMoonset;
		}
				
		document.getElementById("Moonrise").innerHTML = (obj.moonrise.indexOf("*") != -1) ? moonrisetext + "  &nbsp " + moonrise + "*" : moonrisetext +  "  &nbsp " + moonrise;
		document.getElementById("Moonset").innerHTML = (obj.moonset.indexOf("*") != -1) ? moonset + "*" + "  &nbsp " + moonsettext : moonset + "  &nbsp " + moonsettext;
	}
	
	// MOONPHASE
	for (var i=0; i < 4; i++) {
		if (lang == "am") {	
			$("#Moondate" + i).html(days[obj.quarterdate[i].getDay()].substring(0,3) + " " + months[obj.quarterdate[i].getMonth()].substring(0,3) + " " + Suffix(obj.quarterdate[i].getDate()));
		} else if (lang == "en") { 
			$("#Moondate" + i).html(days[obj.quarterdate[i].getDay()].substring(0,3) + " " + Suffix(obj.quarterdate[i].getDate()) + " " + months[obj.quarterdate[i].getMonth()].substring(0,3));
		} else if (lang == "ge") { $("#Moondate" + i).html(days[obj.quarterdate[i].getDay()].substring(0,2) + ", " + (obj.quarterdate[i].getDate()) + ". " + months[obj.quarterdate[i].getMonth()].substring(0,3));
		} else { $("#Moondate" + i).html(days[obj.quarterdate[i].getDay()].substring(0,3) + "<BR>" + obj.quarterdate[i].getDate() + " " + months[obj.quarterdate[i].getMonth()].substring(0,3));
		}
		$("#MoondateIcon" + i).attr("src", dualP + "Images/Moonphase/" + obj.quarter[i] + ".png");
	}
	
	// SUNRISE & SUNSET
	var sunriseh = parseInt(obj.sunrise[0].split(':')[0]);
	var sunrisem = obj.sunrise[0].split(':')[1];
	var sunseth = parseInt(obj.sunset[0].split(':')[0]);
	var sunsetm = obj.sunset[0].split(':')[1];
	dayhour = sunriseh + parseInt(sunrisem)/60;
	nighthour = sunseth + parseInt(sunsetm)/60;
	DurationOfDay = nighthour - dayhour;
	DurationOfNight = 24 - DurationOfDay;
		
	if (ampm == false) {
		var sunriseh = ( sunriseh < 10 ? "0" : "" ) + sunriseh;
		var sunseth = ( sunseth < 10 ? "0" : "" ) + sunseth;
		var sunrise = sunriseh + ":" + sunrisem;		
		var sunset = sunseth + ":" + sunsetm;
	} else {
		var timeOfSunset = ( sunseth < 12 ) ? "am" : "pm";
		var timeOfSunrise = ( sunriseh < 12 ) ? "am" : "pm";
		sunriseh = ( sunriseh > 12 ) ? sunriseh - 12 : sunriseh;
		sunriseh = ( sunriseh == 0 ) ? 12 : sunriseh;
		sunseth = ( sunseth > 12 ) ? sunseth - 12 : sunseth;
		sunseth = ( sunseth == 0 ) ? 12 : sunseth;
		var sunrise = sunriseh + ":" + sunrisem + " " + timeOfSunrise;	
		var sunset = sunseth + ":" + sunsetm + " " + timeOfSunset;
	}
		
	document.getElementById("Sunrise").innerHTML = sunrisetext + " &nbsp " + sunrise;
	document.getElementById("Sunset").innerHTML = sunset + " &nbsp " + sunsettext;
		
	// DAY OR NIGHT ?
	if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) {
		SecondsLightRingColor = "second_color_night";
		document.body.style.color=font_color_night;
		where = "night";
		} else {
		SecondsLightRingColor = "second_color_day";
		document.body.style.color=font_color_day;
		where = "day";
		if (No_Moon_On_Day_Condition == true) { ShowMoon = false; }
	}

	// UPDATE CLOCKHANDS IF ANALOG
	if ((ClockType == "analog") && (where != whereOld)) {
		document.getElementById("hourhand").style.backgroundImage = "url('" + dualP + "Images/Clock/" + where + "_hourhand.png')";	
		document.getElementById("minhand").style.backgroundImage = "url('" + dualP + "Images/Clock/" + where + "_minhand.png')";
		document.getElementById("analogClockFrame").style.backgroundImage = "url('" + dualP + "Images/Clock/" + where + "_analogclockframe.png')";
	}
	
	// UPDATE CLOCK IF Digital
	if ((ClockType == "digital") && (where != whereOld)) {
		document.getElementById("digitalClockFrame").style.backgroundImage = "url('" + dualP + "Images/Clock/" + where + "_digitalclockframe.png')";
	} 
    // UPDATE SECONDS LIGHT RING COLOR
	if ((ShowSecondsLightRing == true) && (where != whereOld) && (Seconds_LightRing_Color == "")) {
		$(".sec").removeClass("second_color_night").removeClass("second_color_day").addClass(SecondsLightRingColor);
	}
	// EXIT RAMP INFO
	if ((/\d/.test(obj.extraLocLine1) ) &&
		(obj.extraLocLine1.length <=4) &&
		(obj.extraLocLine1.indexOf("-") == -1))
		{ exitRamp = "Exit " + obj.extraLocLine1 + " Ramp"; }
	else { exitRamp = ""; }

	// CITY INFORMATION
	if ((PreferGoogle == true) || (!obj.woeid)) {
		Gcity();
	} else {
		var cityname = obj.city;
		switch (UseExtraLocation) {
			case "city":
				if (obj.city) { cityname = obj.city; }
				else if (obj.extraLocCity) { cityname = obj.extraLocCity; }
				else { cityname = "--no City available--"; }
			break;
			case "neighborhood":
				if (obj.extraLocNeighborhood) { cityname = obj.extraLocNeighborhood; }
				else if (obj.extraLocCounty) { cityname = obj.extraLocCounty; } // county as last resort
				else { cityname = "--no Neigh available--"; }
			break;
			case "auto": 
				if (obj.extraLocNeighborhood) { cityname = obj.extraLocNeighborhood; } //look for a Yahoo neighborhood first
				else if (obj.city) { cityname = obj.city; } //then look for city
				else if (obj.extraLocCity) { cityname = obj.extraLocCity; }
				else if (obj.extraLocCounty) { cityname = obj.extraLocCounty; } // find county as last resort
				else { cityname = "--no Data available--"; }
			break;
		}

		// IF YAHOO GETS YOUR CITY NAME WRONG YOU CAN CORRECT IT HERE!
		if ((cityname == "Tawid") || (cityname == "Cabulihan") || (cityname == "Libagon") || (cityname == "Panan-Awan")) {cityname = "Guadalupe";}

		// MAIN INFORMATION
		if (obj.offline == false) { document.getElementById("city").className = ""; }
		document.getElementById("city").innerHTML = cityname;

		if (ShowAddress == true){
			if (obj.extraLocLine1) {
				if (exitRamp) { document.getElementById("address").innerHTML = exitRamp; }
				else { document.getElementById("address").innerHTML = obj.extraLocLine1; }
			} else {
				obj.extraLocLine1 = "Address not available!";
				document.getElementById("address").innerHTML = obj.extraLocLine1;    
			}
		}
	} //closes new 'else'
	
	// WEATHER ICON & DAY HI/LO COLOR
	document.getElementById("Day0Icon").src = dualP + "Icon Sets/"+iconSetForCurrentCondition+"/"+AdjustIcon(obj.code[0], where)+".png";
	$("#Day0Lo").html(lowtext + '<span style= color:' + tempColor(obj.low[0]) + ';>' + obj.low[0] + tempUnit_HiLo + '</span>');
	$("#Day0Hi").html(hightext + '<span style= color:' + tempColor(obj.high[0]) + ';>' + obj.high[0] + tempUnit_HiLo + '</span>');

	// UVINDEX & COLOR CODE
	var uvindexColorCode = "";
	if (obj.UVindex[0]  >= 11) { uvindexColorCode = "#998cff;"; }
	if (obj.UVindex[0] <= 10) { uvindexColorCode = "#ff0000;"; }
	if (obj.UVindex[0] <= 7) { uvindexColorCode = "#ff9000;"; }
	if (obj.UVindex[0] <= 5) { uvindexColorCode = "#f7e400;"; }
	if (obj.UVindex[0] <= 2) { uvindexColorCode = "#4eb400;"; }
	if (where == "night") { uvindexColorCode = "#4eb400;";}
	
	if (obj.UVindex[0]) { document.getElementById("UVindex").innerHTML = UVIndextext + '<span style="font-size: 4vw; color: ' + uvindexColorCode + '">' + " &nbsp " + ((where == "day") ? obj.UVindex[0] : 0) + '</span>'; }
   
	// WIND DESCRIPTION
	var wind_description = "";
	if ((Show_Wind_Description == true) && (Math.round(obj.windspeed) != 0)) { var wind_description = ", " + WindDescription(); }
	
	//DEW POINT
	if (obj.dewpt) { document.getElementById("dewpt").innerHTML = Dewpointtext + obj.dewpt + tempUnit_Forecast; }
	
	// TEMP
	if (useRealFeel == false) {
		var tempValue = obj.temp;
		document.getElementById("feelslike").innerHTML = feelsliketext + '<span style= color:' + tempColor(obj.realFeel) + ';>' + " &nbsp " + obj.realFeel + tempUnit + '</span>';	
	} else {
		var tempValue = obj.realFeel;
	}
	
	document.getElementById("Day0Temp").style.color = tempColor(tempValue);
	document.getElementById("Day0Temp").innerHTML = tempValue + tempUnit;
	
	// VISIBILITY & HUMIDITY
	document.getElementById("visibility").innerHTML = visibilitytext  + " " + Math.round(obj.visibility*convertD) + " " + visibilityunit;
	document.getElementById("humidity").innerHTML = humiditytext + obj.humidity + "%";

	// WINDSPEED
	var windspeed = Math.round(obj.windspeed*convertD);
	    if (windspeed == 0) {
		    document.getElementById("windspeed").innerHTML = nowindtext;
		    document.getElementById("windArrow").style.display = 'none';
	} else {
		if (useWindArrow == true) {
			if (WindArrow_Shows_Direction_Wind_Is_Blowing == true) {
				document.getElementById("windArrow").innerHTML = "&#x2193;";
			} else {
				document.getElementById("windArrow").innerHTML = "&#x2191;";
			}	
			document.getElementById("windArrow").style.webkitTransform = "rotateZ(" + obj.direction + "deg)";	
			document.getElementById("windspeed").innerHTML = windtext + " - " + windspeed + " " + windspeedunit;
			document.getElementById("windspeed").innerHTML = windtext + " - "  + " " + windspeed +  windspeedunit + " &nbsp" + translateCardinal(obj.cardinal);		
		} else {
			document.getElementById("windspeed").innerHTML = windtext + " - " + translateCardinal(obj.cardinal) + " " + windspeed + windspeedunit;
			document.getElementById("windInfoContainer").style.top = 33.4 + '%';			
		}
	}
	
	// PRESSURE
	if (obj.rising == 0) { document.getElementById("rising").innerHTML = "&larr;&rarr;"; }
	else if (obj.rising == 1) { document.getElementById("rising").innerHTML = "&uarr;"; }
	else { document.getElementById("rising").innerHTML = "&darr;"; }
		
//	if (Inches_Of_Mercury == true) {
//		var pressure = Math.round(obj.pressure*100/convertP)/100;
		document.getElementById("pressure").innerHTML = pressuretext + (Math.round(obj.pressure*100/convertP)/100).toFixed(2) + " " + pressureunit;
//	} else {
//		document.getElementById("pressure").innerHTML = pressuretext + Math.round(obj.pressure/convertP) + " " + pressureunit;
//	}
	// WEATHER DESCRIPTION (& NO SUNNY DESCRIPTION FOR NIGHT CONDITION)
	if ((lang != "am") && (lang != "en")) {
		if ((obj.code[0] == 32) && (where == "night")) { document.getElementById("Day0desc").innerHTML = WeatherDesc[31] + wind_description; }
		else if ((obj.code[0] == 34) && (where == "night")) { document.getElementById("Day0desc").innerHTML = WeatherDesc[33] + wind_description; }
		else { document.getElementById("Day0desc").innerHTML = WeatherDesc[obj.code[0]] + wind_description; }
	} else {
		if ((obj.code[0] == 32) && (where == "night")) { document.getElementById("Day0desc").innerHTML = "Clear" + wind_description; }
		else if ((obj.code[0] == 34) && (where == "night")) { document.getElementById("Day0desc").innerHTML = "Mostly clear" + wind_description; }
		else { document.getElementById("Day0desc").innerHTML = obj.desc + wind_description; }
	}	
	
	// XML LAST UPDATE
	if ((obj.lastupdate.length > 2) && ((obj.lastupdate[2] == "PM") || (obj.lastupdate[2] == "AM"))) {
		document.getElementById("xmlupdate").innerHTML = lastupdatetext + obj.lastupdate[1].split(":")[0]*1 + ":" + obj.lastupdate[1].split(":")[1] + " " + obj.lastupdate[2].toLowerCase();
		} else {
		document.getElementById("xmlupdate").innerHTML = lastupdatetext + obj.lastupdate[1].split(":")[0] + ":" + obj.lastupdate[1].split(":")[1];
	}

	// HOURLY FORECAST
	for (var i=0; i < 12; i++) {
		if ((parseInt(obj.time24hour[i].split(':')[0]) < dayhour) || (parseInt(obj.time24hour[i].split(':')[0]) >= nighthour)) {
			obj.hwhere[i] = "night";
		} else {
			obj.hwhere[i] = "day";
		}
	}

    for (var i=0; i < 5; i++) {
	$("#Hour" + i).html(TwelveHourForecast(obj.time24hour[i]));
	$("#Hpop" + i).html(obj.hpop[i] + "%");
	$("#Htemp" + i).html(obj.htemp[i] +  tempUnit_Forecast);
	$("#Htemp" + i).css("color", tempColor(obj.htemp[i]));
	$("#Hicon" + i).attr("src", dualP + "Icon Sets/"+iconSetForForecast+"/" + AdjustIcon(obj.hcode[i], obj.hwhere[i]) + ".png");
    }
	
	// CREATE FORECAST DATES ARRAY /* new for WW3; credit to Morkino & Jm26200 */
	var DayNum = currentTime.getDate(); /* adding the number of the day */	
	var Today = currentTime.getDate();
	var Tomorrow = 0;
	if (currentTime.getHours() == 0 ||currentTime.getHours() < 3) { DayNum = DayNum - 1; Today = Today -1; } /* workaround for API's not updating between 12am and 3am */
	var Leap = 27; /* factoring in Leap years */
	if (currentTime.getFullYear() % 4 == 0 && currentTime.getFullYear() % 100 != 0) { Leap = 28; }
	else if (currentTime.getFullYear() % 400 == 0) { Leap = 28; }
	var dates = []; /* create an array to hold the date series */
	for (var i=1; i < 11; i++) {
		switch(currentTime.getMonth()+1) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				if (Today > 30) { DayNum = 0; }
				else if (Tomorrow > 30) { DayNum = 1-i; }
				Tomorrow = DayNum+i;
			break;
			case 2:
				if (Today > Leap) { DayNum = 0; }
				else if (Tomorrow > Leap) { DayNum = 1-i; }
				Tomorrow = DayNum + i;
			break;
			case 4:
			case 6:
			case 9:
			case 11:
				if(Today > 29) { DayNum = 0; }
				else if (Tomorrow > 29) { DayNum = 1-i; }
				Tomorrow = DayNum+i;
			break;
		}
		dates.push(Tomorrow); //push each successive date to the array
	}
	dates.splice(0, 0, Today); //splice Today's date into array position [0];
	
	// GRAB WW3 STUFF (set to true bottom of config.js)
	if (AnimationOnly == false) { newWW3Stuff(Unit,where,dates); }
	
	// DAY FORECAST
	for (var i=1; i < 6; i++) {
		$("#Day" + i).removeClass();
		if (lang == "ge") {
			$("#Day" + i).html(days[obj.dayofweek[i]-1].substring(0) + " " + ( Use_Date_with_Weekday == true ? ( Forecast_Date_Suffix == true ? Suffix(dates[i]) : dates[i] ) : "" ) );
		} else {
			$("#Day" + i).html(days[obj.dayofweek[i]-1].substring(0) + " " + ( Use_Date_with_Weekday == true ? ( Forecast_Date_Suffix == true ? Suffix(dates[i]) : dates[i] ) : "" ) );
		}
		$("#Day" + i + "Pop").html(obj.pop[i] + "%");
		$("#Day" + i + "Icon").attr("src", dualP + "Icon Sets/" + iconSetForForecast+ "/" + AdjustIcon(obj.code[i], "day") + ".png");
		if (Hi_Lo_Reversed == false) {
			$("#Day" + i + "HiLo").html('<span style= color:' + tempColor(obj.low[i]) + ';>' + obj.low[i]  +  tempUnit_Forecast + " / " + '<span style= color:' + tempColor(obj.high[i]) + ';>' + obj.high[i] + tempUnit_Forecast) + '</span>';
		} else {
			$("#Day" + i + "HiLo").html('<span style= color:' + tempColor(obj.high[i]) + ';>' + obj.high[i] +  tempUnit_Forecast + " / " + '<span style= color:' + tempColor(obj.low[i]) + ';>' + obj.low[i] + tempUnit_Forecast) + '</span>';		
		}
	}
	for (var i = 1; i<6; i++) {
		document.getElementById("Day" + i + "Icon").style.left = 43 +	0*(i-1) + "%";
		document.getElementById("Day" + i + "Pop").style.left = 50.25 +  0*(i-1) + "%";
		document.getElementById("Day" + i).style.left = 8.5 +  0*(i-1) + "%";
		document.getElementById("Day" + i + "HiLo").style.left = 75 +	0*(i-1) + "%";
	}
	for (var i = 0; i<12; i++) {
		document.getElementById("Hicon" + i).style.left = 2 +  20*i + "%";
		document.getElementById("Hpop" + i).style.left = 11 +	20*i + "%";
		document.getElementById("Hour" + i).style.left = 1.5 +  20*i + "%";
		document.getElementById("Htemp" + i).style.left = 11 +  20*i + "%";
	}
	for (var i = 0; i<4; i++) {
		document.getElementById("MoondateIcon" + i).style.left = 8.3 +  25*i + "%";
		document.getElementById("Moondate" + i).style.left = 1.6 +  25*i + "%";
	}
	
	// SPECIAL DAY...
	if ((currentTime.getDate() == 24) && (currentTime.getMonth() == 11) && (lang == "ge")) { special_condition = "christmas"; }
	else if ((currentTime.getDate() == 25) && (currentTime.getMonth() == 11) && (lang != "ge")) { special_condition = "christmas"; }
	else if ((currentTime.getDate() == 1) && (currentTime.getMonth() == 0)) { special_condition = "newyear"; }
	else { special_condition = "";}
	
	switch(special_condition) {
		case "christmas" :
			current_condition = special_condition;
			if (Wallpaper_options !=  "none") {
				Wallpaper_options_old = Wallpaper_options;
				if (Wallpaper_options == "timedwalls") { TimedWallStop(); }
				Wallpaper_options = "weatherwalls";
			}
			document.getElementById("city").innerHTML = Weihnacht;
			document.getElementById("Day0desc").innerHTML = von;
		break;
		case "newyear" :
			current_condition = Conditions[obj.code[0]];
			document.getElementById("city").innerHTML = neuesJahr;
			document.getElementById("Day0desc").innerHTML = von;	
		break;
		default:
			if (current_condition == "christmas") {
				if (Wallpaper_options_old !=  "") { Wallpaper_options = Wallpaper_options_old; }
				if ((Wallpaper_options != "weatherwalls") && (Wallpaper_options != "daynightwalls")) { 
		    		document.getElementById("Now").className = "fade-out"; 
				}
			}
			current_condition = Conditions[obj.code[0]];
		break;
	}
		
	
	// ANIMATIONS ON OR OFF
	if ((noAnimations == false) && (ShowAllWW3Data == false)) {
		LaunchAnimations();
	} else {
		filename = "";
		document.getElementById("twilightBG").className = "fade-out";
		document.getElementById("animationsOn").style.display = 'none';
		document.getElementById("animationsOff").style.display = 'block';
		document.getElementById("Day0Icon").style.display = "block";
		document.getElementById("year").style.display = "none";
		if ((Clock_Logo == true) || (ShowCurrentConditionIcon == true)) { document.getElementById("clocklogo").style.display = "none"; }
	}
	
	if ((OptionalClockCalendar == false) && (ShowYear == true) && (ShowCurrentConditionIcon == true)) { document.getElementById("year").style.display = "none"; }
	
	// CHANGE WALLPAPER IF NECESSARY
	if ((Wallpaper_options == "weatherwalls") || (Wallpaper_options == "daynightwalls"))  {
		document.getElementById("Now").addEventListener("webkitTransitionEnd", ChangeWallpaper, false);
		if (ShowBackground == true) { ShowBackground = false; document.getElementById("Now").className = "fade-out"; }
		else { ChangeWallpaper(); }
	}

	// ADJUST CERTAIN ITEMS UP WHERE NECESSARY (new for WW3)
	if ((ShowForecast == false) || (forecastdisplay == false )) {
		document.getElementById("APIName").style.top = 0 + '%';
		document.getElementById("address").style.top = 35.7 + '%';
	}
	
	// ADD USERDAYNIGHT CODE (new for WW3)
	if (Wallpaper_options == "userdaynight") {
		if (where == "day") {	
			document.getElementById("LayerBack").src = dualP + "Images/Wallpapers/User/Default_day" + userset + ".png";
			$$("Kalendershow").style.display = "none";
		} else {
			document.getElementById("LayerBack").src = dualP + "Images/Wallpapers/User/Default_night" + userset + ".png";
			$$("Kalendershow").style.display = "none";
		}	
	}
	
	// CSS OPTIONS FOR FORECAST SUMMARIES (new for WW3)
	$("#wuSumm,#defSumm,#fioSumm,#accuDayShortSumm,#accuDayLongSumm,#yahooSumm").addClass('AllSumms');

	if (ShowAllWW3Data == true) {
		$(".AllSumms").css({ "top":"68%", "height":"32%" });
		$(".AllSumms").addClass('fade-in');
	}
	
	if ((useScrollOnForecastExtras == true) && (currentDoc == "LockBackground.html")) {
		$(".AllSumms").css({ 'overflowY':'scroll','-webkit-overflow-scrolling':'touch' });
	}
	
	if (showForecastExtras_on_startup == true) {
		$(".AllSumms").addClass('fade-in');
		$("#APIName").addClass('fade-in');
	} else {
		$(".AllSumms").addClass('fade-out');
		$("#APIName").addClass('fade-out');
	}
	
	if ((currentDoc == "Wallpaper.html") || (currentDoc == "index.html")) {
		if (iPhoneType == "iPadMini") {
			$(".AllSumms,#TouchSumm").css({ "top":"4.5%", "lineHeight":"120%", "height":"27.2%" });
		} else if (iPhoneType == "iPh5") { /* iPh4->5 & SE */
			$(".AllSumms,#TouchSumm").css({ "top":"4.5%", "lineHeight":"110%","height":"27.2%" });
		} else { /* iPh6 and beyond */
			$(".AllSumms,#TouchSumm").css({"top":"4.5%", "lineHeight":"124%","height":"26.8%" });
		}
	}
	
} // End of dealWithWeather function

function Gcity() {
	
	//PREVENT DUPLICATION OF DATA
	if (obj.city.indexOf(obj.extraLocNeighborhood) > -1) { obj.extraLocNeighborhood = ""; }
	if (obj.gNeigh3.indexOf(obj.extraLocNeighborhood) > -1) { obj.extraLocNeighborhood = ""; }
	if (obj.gNeigh2.indexOf(obj.extraLocNeighborhood) > -1) { obj.extraLocNeighborhood = ""; }
	if (obj.gCity.indexOf(obj.extraLocNeighborhood) > -1) { obj.extraLocNeighborhood = ""; }
	if (obj.gNeigh.indexOf(obj.extraLocNeighborhood) > -1) { obj.extraLocNeighborhood = ""; }
	if (obj.gNeigh3.indexOf(obj.gNeigh) > -1) { obj.gNeigh = ""; }
	if (obj.gNeigh2.indexOf(obj.gNeigh) > -1) { obj.gNeigh = ""; }
	if (obj.gCity.indexOf(obj.gNeigh) > -1) { obj.gNeigh = ""; }
	
	// NEW CITY INFORMATION from Google
	var cityname = obj.gCity;
	switch (UseExtraLocation) {
		case "city":
			if (obj.gCity) { cityname = obj.gCity; }
			else if (obj.extraLocCity) { cityname = obj.extraLocCity; } // find Yahoo city last resort
			else { cityname = "--no City available--"; }
		break;
		case "neighborhood":
			if (obj.gNeigh) { cityname = obj.gNeigh; } //if a neighborhood
			else if (obj.gNeigh3) { cityname = obj.gNeigh3; } //if a sublocality
			else if (obj.gNeigh2) { cityname = obj.gNeigh2; } //if an admin3 township/borough
			else if (obj.extraLocNeighborhood) { cityname = obj.extraLocNeighborhood; } //look for a Yahoo neighborhood
			else if (obj.gCounty) { cityname = obj.gCounty; } // county as last resort
			else { cityname = "--no Neighborhood available--"; }
		break;
		case "auto":
			if (obj.gNeigh) { cityname = obj.gNeigh; } //if a neighborhood		 
			else if (obj.gNeigh3) { cityname = obj.gNeigh3; } //if a sublocality
			else if (obj.extraLocNeighborhood) { cityname = obj.extraLocNeighborhood; } //look for a Yahoo neighborhood
			else if (obj.gNeigh2) { cityname = obj.gNeigh2; } //if an admin3 township/borough
			else if (obj.gCity) { cityname = obj.gCity; } // then find Google city first
			else if (obj.extraLocCity) { cityname = obj.extraLocCity; } // find Yahoo city last resort
			else if (obj.extraLocCounty) { cityname = obj.extraLocCounty; } // find Yahoo county last last resort
			else { cityname = "--no City available--"; }
		break;
	}
	
	// IF GOOGLE GETS YOUR CITY NAME WRONG YOU CAN CORRECT IT HERE!
	if (cityname == "Maasin City") { cityname = "Guadalupe"; }

	// NEW GOOGLE MAIN INFORMATION
	if (!obj.woeid) {document.getElementById("city").className = "FontColorLime";}
	else if (obj.offline == false) { document.getElementById("city").className = ""; }
	document.getElementById("city").innerHTML = cityname

	if (ShowAddress == true){
		document.getElementById("address").innerHTML = obj.gHouse + "" + obj.gStreet;
	}
}

function tempColor(temp) {
	if (obj.celsius == "YES") {
		if (temp <= 8) { var color = "#80d0d0"; }
		else if (temp >= 9 && temp <= 15) { var color = "#fdee00"; }
		else if (temp >= 16 && temp <= 22) { var color = "#7eff00"; }
		else if (temp >= 23 && temp <= 27) { var color = "#ffad11"; }
		else  { var color = "#ff4f32"; }
	} else {
		if (temp <= 46) { var color = "#80d0d0"; }
		else if (temp >= 47 && temp <= 59) { var color = "#fdee00"; }
		else if (temp >= 60 && temp <= 71) { var color = "#7eff00"; }
		else if (temp >= 72 && temp <= 80) { var color = "#ffad11"; }
		else  { var color = "#ff4f32"; }
	}
	return color
}

function ChangeWallpaper() {
	document.getElementById("Now").removeEventListener("webkitTransitionEnd", ChangeWallpaper, false);
	if (Wallpaper_options == "weatherwalls") { document.getElementById("Layer").src = dualP + "Images/Wallpapers/Weather/" + current_condition + "/" + where + randomWall() + ".jpg"; }
	else { document.getElementById("Layer").src = dualP + "Images/Wallpapers/DayNight/" + where + ".jpg"; }
	document.getElementById("Now").className = "fade-in";
	ShowBackground = true;
}

// WORKAROUND FOR CORRECT ICONS IN ALL SITUATIONS AND TWELVE HOUR FORMAT

function AdjustIcon(icon, whereTmp) {
	switch(whereTmp) {
		case "day":
			if (icon == 27) { icon = 28; }
			if (icon == 29) { icon = 30; }	
			if (icon == 31) { icon = 32; }	
			if (icon == 33) { icon = 34; }
			if (icon == 39) { icon = 38; }
		break;
		case "night":
			if (icon == 28) { icon = 27; }
			if (icon == 30) { icon = 29; }	
			if (icon == 32) { icon = 31; }	
			if (icon == 34) { icon = 33; }
			if (icon == 38) { icon = 39; }
		break;
	}
	return icon;
}

function TwelveHourForecast(hour) {
	if (ampm == true) {
		hour = parseInt(hour.split(':')[0]);
		var timeOfhour = ( hour < 12 ) ? "AM" : "PM";
		hour = ( hour > 12 ) ? hour - 12 : hour;
		hour = ( hour == 0 ) ? 12 : hour;
		hour = hour + " " + timeOfhour;
	}
	return hour;
}

function LaunchAnimations() {

	// WIND DIRECTION
	if ((obj.direction < 180) && (No_Reverse_Animation == false)) { ReverseWind = true; } else {  ReverseWind = false; }
	
	// WIND EFFECT
	if (Math.round(obj.windspeed*convertD) >= Strong_Wind) { Start_wind_effects = true; } else { Start_wind_effects = false; }
		
	// RAIN EFFECT, NOT CONVERTED TO HAVE SAME ANGLE FOR MILES & KMH
	if (Math.round(obj.windspeed) >= 25)  { rain_effect = 25; } else { rain_effect = Math.round(obj.windspeed); } // MAX ANGLE FOR DROPS
	if (ReverseWind == true) { rain_effect = rain_effect; } else { rain_effect = -1*rain_effect; }
	
	// FROST EFFECT
	if (obj.celsius == "YES") {
				if ((obj.temp <= 0) && (frost_effect == true)) { Start_frost = true; } else { Start_frost = false; }
	} else {
			if ((obj.temp <= 32) && (frost_effect == true)) { Start_frost = true; } else { Start_frost = false; }
	}

	if (filename == "") {
		filename = current_condition;
		whereOld = where;
		ShowMoonOld = ShowMoon;
		ReverseWindOld = ReverseWind;
		LoadAnimations(filename);
	} else {
		if ((current_condition != filename ) || (where != whereOld) || (ShowMoonOld != ShowMoon) || (Start_wind_effects != Show_Wind_Effects) || (Start_frost != Show_frost) || (ReverseWind != ReverseWindOld)) {
			document.getElementById("twilightBG").className = "fade-out";
			filename = current_condition;
			whereOld = where;
			ShowMoonOld = ShowMoon;
			ReverseWindOld = ReverseWind;
			clearTimeout(meteorTimer);
			clearTimeout(lightningTimer);
			ShowSunOrMoon = false;
			Show_Wind_Effects = false;
			Show_frost = false;
			delelement("sun_moonContainer");		
			delelement("starContainer");
			delelement("meteorContainer");
			delelement("wiperContainer");
			delelement("dandelionContainer");
			delelement("leafContainer");
			delelement("windmillContainer");
			delelement("frameContainer");
			delelement("cloudContainer");
			delelement("fogContainer");
			delelement("dropContainer");
			delelement("wireContainer");
			delelement("circleContainer");
			delelement("rainbowContainer");
			delelement("birdsContainer");
			delelement("astronautContainer");
			delelement("small_balloonContainer");
			delelement("medium_balloonContainer");
			delelement("big_balloonContainer");		
			LoadAnimations(filename);
		}
	}
}

function delelement(elem) {
	var element = document.getElementById(elem);
	while (element.firstChild) { element.removeChild(element.firstChild); }
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

// SIMPLE FUNCTION TO NOT REPEAT THE SAME WALL TOO OFTEN...
function randomWall() {
	if (nbwalls.length == 0) { for (var i=0; i < NUMBER_OF_WALLS; i++) { nbwalls[i] = i+1; }} // INITIALIZE THE ARRAY
	do {
		var nb = Math.floor(Math.random() * nbwalls.length);
		var picnumber = nbwalls[nb];
	} while (picnumber == prevnumber);
	prevnumber = picnumber;
	nbwalls.splice(nb,1);
	return picnumber;
}

function pixelValue(value) {
    return value + "px";
}

function durationValue(value) {
    return value + "s";
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function updateWeather() {
	var files = "widgetweather" + xmlnumber + ".xml";
	if ((currentDoc == "index.html") && (iOS == true)) {
		url = "/var/mobile/Documents/" + files; 
		anemone.loadFileString(url, function(data) { weatherHandler(data);
		}).fail(noInfo);
	} else if (GroovyPlus == true)  {
		groovyAPI.do ({ read: files }, function(data) { weatherHandler(data);
		});
	} else { 
		if (iOS != true) { url = dualP + "test_files/" + files; } else { url = "file:///private/var/mobile/Documents/" + files; }
		jQuery.get(url, function(data) { weatherHandler(data);
		}).fail(noInfo);
	 } 
	// REINITIALIZE THE TIMER TO NOT LAUNCH MULTIPLE INSTANCES OF THE FUNCTION  
	clearTimeout(refreshTimer); 
	refreshTimer = setTimeout(updateWeather, 30*1000);
}

function noInfo(){
	  document.getElementById("Day0desc").innerHTML = "No widgetweather.xml file !";
	  document.getElementById("WeatherInfoBG").style.display = "none";
	  document.getElementById("forecastBG").style.display = "none";
	  document.getElementById("hourlyforecastBG").style.display = "none";
	  document.getElementById("mooninfoBG").style.display = "none";   		
}

function weatherHandler(data) {

/////////////WORKAROUND CODE ONLY/////////
	if (xmlDown == false) {
		obj.updatetimestring = $(data).find('updatetimestring').text();
	} else { getLiveUpdate (); }
/////////////END WORKAROUND///////////////

	if (!obj.updatetimestring) { /* if weather.com doesn't report a timestring */
		d=new Date();
		var year=d.getFullYear();
		var month=d.getMonth();
		month =month+1; //month are displayed from 0 to 11, hence the +1
		var day=d.getDate();
		var hour=d.getHours();
		var minute=d.getMinutes();
		var second=d.getSeconds();
		var timeOfDay = ( hour < 12 ) ? "AM" : "PM";
		if (hour>12) hour=hour-12;
		if (hour<10) hour="0"+hour;
		if (minute<10) minute="0"+minute;
		if (second<10) second="0"+second;
		if (month<10) month="0"+month;
		if (day<10) day="0"+day;
		obj.updatetimestring =(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second+" "+timeOfDay);
	}
	
	if (updateFileTimer != obj.updatetimestring) {
		obj.high = [];
		obj.low  = [];
		obj.code = [];
		obj.pop = [];
		obj.daydate = [];	
		obj.dayofweek = [];
		obj.time24hour = [];
		obj.htemp = [];
		obj.hcode = [];
		obj.hdesc = [];
		obj.hpop = [];
		obj.hvisibility = [];
		obj.hwhere = [];
		obj.sunset = [];
		obj.sunrise = [];
		obj.moonphase = [];
		obj.moondesc = [];
		obj.UVindex = [];
		obj.UVdesc = [];
		obj.day_direction = [];
		obj.day_speed = [];
		obj.day_desc = [];
		obj.day_humidity = [];
		///////New WW3 stuff////////
		obj.accuLong = [];
		obj.accuTStormProb = [];
		obj.wuSumm = [];
		obj.wuSummMetric = [];
		obj.wuSummNight = [];
		obj.wuSummNightMetric = [];
		obj.wuRain = []; //new 1.1.17
		obj.wuSnow = []; //new 1.1.17
		obj.fioSummDay = [];
		obj.accuShortSummDay = [];
		obj.accuLongSummDay = [];
		obj.yahooSumm = [];
		obj.yahooHighDay = [];
		obj.yahooLowDay = [];
		obj.accuRain = [];
		obj.accuSnow = [];
		obj.dayname = [];
		obj.day_cardinal = [];
		obj.ncode = [];
		obj.npop = [];
		obj.ncard = [];
		obj.ndir = [];
		obj.nspeed = [];
		obj.ndesc = []; 	
		obj.nhum = [];
		///////End WW3 stuff///////
		updateFileTimer = obj.updatetimestring;
		obj.lastupdate = updateFileTimer.split(' ');
		
		$(data).find('currentcondition').each( function() {
			obj.city = $(this).find('city').text();
			obj.celsius = $(this).find('celsius').text();
			obj.woeid = $(this).find('woeid').text();
			obj.temp = $(this).find('temp').text()*1; 
			obj.icon = $(this).find('code').text();
			obj.desc = $(this).find('description').text();
			obj.observationtime = $(this).find('observationtime').text();
			obj.timezone = $(this).find('timezone').text().replace("GMT","")*1;
			obj.moonphase[0] = $(this).find('moonphase').text()*1;
			obj.moondesc = $(this).find('moondesc').text();
			obj.sunrise[0] = ConvertHours($(this).find('sunrisetime').text());	
			obj.sunset[0] = ConvertHours($(this).find('sunsettime').text());
			obj.pressure = $(this).find('pressure').text();
			obj.humidity = $(this).find('humidity').text(); 
			obj.rising = $(this).find('rising').text()*1;		
			obj.visibility = $(this).find('visibility').text();
			obj.realFeel = ($(this).find('chill').text() == "") ? obj.temp : $(this).find('chill').text()*1;
			obj.direction = $(this).find('direction').text()*1;
			obj.windspeed = $(this).find('speed').text()*1;
			obj.gustspeed = $(this).find('gust').text()*1;
			obj.cardinal = $(this).find('cardinal').text();
			obj.unitsdistance = $(this).find('unitsdistance').text();
			obj.unitspressure = $(this).find('unitspressure').text();
			obj.unitsspeed = $(this).find('unitsspeed').text();
			obj.unitstemperature = $(this).find('unitstemperature').text();
			obj.latitude = $(this).find('latitude').text()*1;
			obj.longitude = $(this).find('longitude').text()*1;
			obj.extraLocLine1 = $(this).find('extraLocLine1').text();
			obj.extraLocHouse = $(this).find('extraLocHouse').text();
			obj.extraLocStreet = $(this).find('extraLocStreet').text();
			obj.extraLocName = $(this).find('extraLocName').text().replace(" ","");
			obj.extraLocCity = $(this).find('extraLocCity').text();
			obj.extraLocNeighborhood = $(this).find('extraLocNeighborhood').text();
			obj.extraLocCounty = $(this).find('extraLocCounty').text();
			obj.extraLocState = $(this).find('extraLocState').text();
			obj.extraLocStateCode = $(this).find('extraLocStateCode').text();
			obj.extraLocCountry = $(this).find('extraLocCountry').text();
			obj.extraLocCountryCode = $(this).find('extraLocCountryCode').text();
			obj.extraLocUzip = $(this).find('extraLocUzip').text();
			obj.dewpt = $(this).find('dewpt').text();
			obj.UVdesc[0] = $(this).find('uvdesc').text();
			obj.UVindex[0] = $(this).find('uvindex').text();
			////////////New WW3 Stuff//////////
			obj.sunrH = parseInt($(this).find('sunrisetime').text().split(':')[0]);
			obj.sunsH = parseInt($(this).find('sunsettime').text().split(':')[0]);
			obj.wuCity = $(this).find('wuCity').text();
			obj.wuWeatherStation = $(this).find('wuWeatherStation').text();
			obj.wuElevation = $(this).find('wuElevation').text().split(" ")[0];
			obj.wuForecast = $(this).find('wuForecast').text();
			obj.wuForecastMetric = $(this).find('wuForecastMetric').text();
			obj.wuWindText = $(this).find('wuWindText').text();
			obj.wuPrecip = $(this).find('wuPrecip').text()*1; //new 1.1.17
			obj.wuPrecipIntensity = $(this).find('wuPrecipIntensity').text()*1;//new 1.1.17
			obj.fioAPICalls = $(this).find('fioAPICalls').text();
			obj.fioCloudCover = $(this).find('fioCloudCover').text()*100;
			obj.fioOzone = $(this).find('fioOzone').text()*1;
			obj.fioStormDistance = $(this).find('fioStormDistance').text()*1;
			obj.fioMinutely = $(this).find('fioMinuteSummary').text();
			obj.fioHourly = $(this).find('fioHourlySummary').text();
			obj.fioDaily = $(this).find('fioDailySummary').text();
			obj.fioPrecipIntensity = $(this).find('fioPrecipIntensity').text();
			obj.fioStormBearing = $(this).find('fioStormBearing').text()*1;
			obj.accuUV = $(this).find('accuUV').text()*1;
//			obj.accuCity = $(this).find('accuCity').text();
			obj.accuPrecip = Math.round($(this).find('accuPrecip').text()*100)/100;
			obj.accuShortSumm = $(this).find('accuShortSumm').text();
			obj.accuLongSumm = $(this).find('accuLongSumm').text();
			////////////End WW3 Stuff//////////
//			Distance_In_Miles = (obj.unitsdistance == "km") ? false : true;
//			Inches_Of_Mercury = (obj.unitspressure == "mb") ? false : true;
		});
		
		$(data).find('multicurrentcondition').each( function() {
			obj.wuCode = convertWuIcon($(this).find('wuCode').text());
			obj.wuDesc = $(this).find('wuDesc').text();
			obj.wuHigh = $(this).find('wuHigh').text();
			obj.wuLow = $(this).find('wuLow').text();
			obj.wuTemp = $(this).find('wuTemp').text();
			obj.wuChill = $(this).find('wuChill').text()*1;
			obj.fioCode = convertFioIcon($(this).find('fioCode').text());
			obj.fioDesc = $(this).find('fioDesc').text();
			obj.fioHigh = $(this).find('fioHigh').text();
			obj.fioLow = $(this).find('fioLow').text();
			obj.fioTemp = $(this).find('fioTemp').text();
			obj.fioChill = $(this).find('fioChill').text()*1;
			obj.accuCode = convertAccuIcon($(this).find('accuCode').text()*1);
			obj.accuDesc = $(this).find('accuDesc').text();
			obj.accuHigh = $(this).find('accuHigh').text()*1;
			obj.accuLow = $(this).find('accuLow').text()*1;
			obj.accuTemp = $(this).find('accuTemp').text()*1;
			obj.accuChill = $(this).find('accuChill').text()*1;
			obj.yahooCode = $(this).find('yahooCode').text()*1;
			obj.yahooDesc = $(this).find('yahooDesc').text();
			obj.yahooHigh = $(this).find('yahooHigh').text();
			obj.yahooLow = $(this).find('yahooLow').text();
			obj.yahooTemp = $(this).find('yahooTemp').text();
			//Yahoo doesn't report a 'chill' item
		});
		
		$(data).find('environment').each( function() {
			obj.accuAirQuality = $(this).find('accuAirQuality').text();
			obj.accuAirQualityType = $(this).find('accuAirQualityType').text();
			obj.accuWeeds = $(this).find('accuWeeds').text();
			obj.accuMold = $(this).find('accuMold').text();
			obj.accuGrass = $(this).find('accuGrass').text();
			obj.accuTree = $(this).find('accuTree').text();
			obj.accuMercury = $(this).find('accuMercuryRise').text() + " / " + $(this).find('accuMercurySet').text();
			obj.accuVenus = $(this).find('accuVenusRise').text() + " / " + $(this).find('accuVenusSet').text();
			obj.accuMars = $(this).find('accuMarsRise').text() + " / " + $(this).find('accuMarsSet').text();
			obj.accuJupiter = $(this).find('accuJupiterRise').text() + " / " + $(this).find('accuJupiterSet').text();
			obj.accuSaturn = $(this).find('accuSaturnRise').text() + " / " + $(this).find('accuSaturnSet').text();
			obj.accuUranus = $(this).find('accuUranusRise').text() + " / " + $(this).find('accuUranusSet').text();
			obj.accuNeptune = $(this).find('accuNeptuneRise').text() + " / " + $(this).find('accuNeptuneSet').text();
			obj.accuPluto = $(this).find('accuPlutoRise').text() + " / " + $(this).find('accuPlutoSet').text();
		});
			
		$(data).find('googlelocation').each( function() {
			obj.gCity = $(this).find('gCity').text();
			obj.gNeigh = $(this).find('gNeigh').text();
			obj.gNeigh2 = $(this).find('gNeigh2').text();
			obj.gNeigh3 = $(this).find('gNeigh3').text();
			obj.gCounty = $(this).find('gCounty').text();
			obj.gState = $(this).find('gStateCode').text();
			obj.gCountryCode = $(this).find('gCountryCode').text();
			obj.gCountry = $(this).find('gCountry').text();
			obj.gStreet = $(this).find('gStreet').text();
			obj.gHouse = $(this).find('gHouse').text();
			obj.gPlace = $(this).find('gPlace').text();
			obj.gFull0 = $(this).find('gFullAddr0').text();
			obj.gFull1 = $(this).find('gFullAddr1').text();
			obj.gFull2 = $(this).find('gFullAddr2').text();
			obj.gFull3 = $(this).find('gFullAddr3').text();
		});
					
		obj.location = [99]; // FAKE NUMBER FOR CURRENT LOCATION
		$(data).find('settings').each( function() {
			obj.interval = $(this).find('interval').text();
			obj.timehour = $(this).find('timehour').text();
			obj.extraweather = $(this).find('extraweather').text();
			obj.extralocation = $(this).find('extralocation').text();
			obj.location[1] = $(this).find('location1').text()*1;
			obj.location[2] = $(this).find('location2').text()*2;
			obj.location[3] = $(this).find('location3').text()*3;
			obj.location[4] = $(this).find('location4').text()*4;
			obj.location[5] = $(this).find('location5').text()*5;
			obj.fioOn = $(this).find('darksky').text()*1; // For NewD Mod
			obj.wuOn = $(this).find('weatherunderground').text()*1; // For NewD Mod
			obj.accuOn = $(this).find('accuweather').text()*1; // For NewD Mod
			obj.yahooOn = $(this).find('yahoo').text()*1; // For NewD Mod
			ampm = (obj.timehour == "24h") ? false : true;	
		});
	
		// REDUCE THE ARRAY TO KEEP ONLY VALID XML OPTIONS (REMOVE NULL, NAN AND ZERO VALUES)
		obj.location = jQuery.grep(obj.location, function(val) {
			if (isNaN(val) || val == 0 || val == "") { return false; }
			return true;
		});
		obj.location[0] = ""; // REMOVE THE FAKE NUMBER
		for (var i=1; i < obj.location.length; i++) { obj.location[i] = "-" +  obj.location[i]; }
	
		// LOOK FOR UTC/GMT CORRECTION AND FORCE THE CLOCK TO UPDATE
		UTC = obj.timezone + currentTime.getTimezoneOffset()/60;
		updateClock();
			
		if ((obj.lastupdate.length > 2) && ((obj.lastupdate[2] == "PM") || (obj.lastupdate[2] == "AM"))) {
			updateTimer = new Date([obj.lastupdate[0].split('-')[1], obj.lastupdate[0].split('-')[2], obj.lastupdate[0].split('-')[0]].join('/') + " " + obj.lastupdate[1] + " " + obj.lastupdate[2]);
		} else {
			updateTimer = new Date([obj.lastupdate[0].split('-')[1], obj.lastupdate[0].split('-')[2], obj.lastupdate[0].split('-')[0]].join('/') + " " + obj.lastupdate[1]);
		}
	
		if ( currentTime.getTime() - UTC*3600*1000 - updateTimer.getTime() > obj.interval*60*1000 ) {
			obj.offline = true;
			document.getElementById("city").className = "FontColorRed";
		} else {
			obj.offline = false;
		}

		var i=0;
		$(data).find('day').each( function() {	
			switch (weatherAPI) {
				default:
					obj.code[i] = $(this).find('code').text(); 
					obj.high[i] = $(this).find('high').text()*1;
					obj.low[i] = $(this).find('low').text()*1;
					obj.day_desc[i] = $(this).find('description').text();		
				break;
				case "fio": /* if FIO doesn't report data here - use Weather.com */
					obj.code[i] = convertFioIcon($(this).find('fioCode').text());
					if (!obj.code[i]) { obj.code[i] = $(this).find('code').text(); }	 
					obj.high[i] = $(this).find('fioHigh').text()*1;
					if (!obj.high[i]) { obj.high[i] = $(this).find('high').text()*1; }
					obj.low[i] = $(this).find('fioLow').text()*1;
					if (!obj.low[i]) { obj.low[i] = $(this).find('low').text()*1; }
					obj.day_desc[i] = $(this).find('fioDesc').text();
					if (!obj.day_desc[i]) { obj.day_desc[i] = $(this).find('description').text(); }	
				break;
				case "wu": /* if WU doesn't report data here - use Weather.com */
					obj.code[i] = convertWuIcon($(this).find('wuCode').text());
					if (!obj.code[i]) { obj.code[i] = $(this).find('code').text(); }
					obj.high[i] = $(this).find('wuHigh').text()*1;
					if (!obj.high[i]) { obj.high[i] = $(this).find('high').text()*1; }
					obj.low[i] = $(this).find('wuLow').text()*1;
					if (!obj.low[i]) { obj.low[i] = $(this).find('low').text()*1; }
					obj.day_desc[i] = $(this).find('wuDesc').text();
					if (!obj.day_desc[i]) { obj.day_desc[i] = $(this).find('description').text(); }
				break;
				case "accu": /* if ACCU doesn't report data here - use Yahoo.com */
					obj.code[i] = convertAccuIcon($(this).find('accuCode').text()*1);
					if (!obj.code[i]) { obj.code[i] = $(this).find('yahooCode').text(); }
					obj.high[i] = $(this).find('accuHigh').text()*1;
					if (!obj.high[i]) { obj.high[i] = $(this).find('yahooHigh').text()*1; }
					obj.low[i] = $(this).find('accuLow').text()*1;
					if (!obj.low[i]) { obj.low[i] = $(this).find('yahooLow').text()*1; }
					obj.day_desc[i] = $(this).find('accuDesc').text();
					if (!obj.day_desc[i]) { obj.day_desc[i] = $(this).find('yahooDesc').text(); }
				break;
				case "yahoo":
					obj.code[i] = $(this).find('yahooCode').text()*1;	
					obj.high[i] = $(this).find('yahooHigh').text()*1;
					obj.low[i] = $(this).find('yahooLow').text()*1;
					obj.day_desc[i] = $(this).find('yahooDesc').text();
				break;
			}
			obj.pop[i] = $(this).find('pop').text();
			obj.dayofweek[i] = $(this).find('dayofweek').text()*1;
			obj.day_desc[i] = $(this).find('description').text();		
			obj.day_direction[i] = $(this).find('direction').text()*1;
			obj.day_humidity[i] = $(this).find('humidity').text();
			obj.day_speed[i] = $(this).find('speed').text()*1;
			obj.day_cardinal[i] = $(this).find('cardinal').text();// added back to 7.1 for WW3
			if (i != 0) {
				obj.UVdesc[i] = $(this).find('uvdesc').text();
				obj.UVindex[i] = $(this).find('uvindex').text();
			}
			if (updateTimer.getDate() == currentTime.getDate()) {
				if (currentTime.getDay() == obj.dayofweek[0]-1) { obj.daydate[i] = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000 * i)); }
				else { obj.daydate[i] = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000 * (i-1))); }
			} else {
				if (updateTimer.getDay() == obj.dayofweek[0]-1) { obj.daydate[i] = new Date(updateTimer.getTime() + (24 * 60 * 60 * 1000 * i)); }
				else { obj.daydate[i] = new Date(updateTimer.getTime() + (24 * 60 * 60 * 1000 * (i-1))); }			
			}
			///////New WW3 stuff////////
			if ((iOS == true) && (0 == currentTime.getHours() || currentTime.getHours() <= 4)) { var b=1; var c=-6; } else { var b=0; var c=0; } //for dayofweek not advancing until 4am from API
			obj.dayname[i] =$(this).find('dayofweek').text()
			.replace("1",days[0+b])
			.replace("2",days[1+b])
			.replace("3",days[2+b])
			.replace("4",days[3+b])
			.replace("5",days[4+b])
			.replace("6",days[5+b])
			.replace("7",days[6+c]);
			obj.accuLong[i] = $(this).find('accuLongSumm').text();
			obj.accuTStormProb[i] = $(this).find('accuTStormProb').text();
			obj.wuSumm[i] = $(this).find('wuSumm').text();
			obj.wuSummMetric[i] = $(this).find('wuSummMetric').text();
			obj.wuRain[i] = $(this).find('wuRain').text()*1;
			obj.wuSnow[i] = $(this).find('wuSnow').text()*1;
			obj.fioSummDay[i] = $(this).find('fioSumm').text();
			obj.accuShortSummDay[i] = $(this).find('accuShortSumm').text();
			obj.accuLongSummDay[i] = $(this).find('accuLongSumm').text();
			obj.yahooSumm[i] = $(this).find('yahooSumm').text();
			obj.yahooHighDay[i] = $(this).find('yahooHigh').text();
			obj.yahooLowDay[i] = $(this).find('yahooLow').text();
			obj.accuRain[i] = $(this).find('accuRainAmount').text();
			obj.accuSnow[i] = $(this).find('accuSnowAmount').text();
			///////End WW3 stuff////////
			i++;
		});
	
		var h=0;
		$(data).find('hour').each( function() {
			obj.htemp[h] = $(this).find('temp').text();
			obj.hcode[h] = $(this).find('code').text();
			obj.hdesc[h] = $(this).find('description').text();
			obj.hpop[h] = Math.round($(this).find('percentprecipitation').text());
			obj.hvisibility[h] = $(this).find('visibility').text();
			obj.time24hour[h] = ConvertHours($(this).find('time24hour').text());
			h++;
		});
		/////New WW3 Stuff/////
		var j=0;
		$(data).find('night').each( function() {
			obj.wuSummNight[j] = $(this).find('wuSumm').text();
			obj.wuSummNightMetric[j] = $(this).find('wuSummMetric').text();
			obj.ncode[j] = $(this).find('code').text(); //weather.com
			obj.npop[j] = $(this).find('pop').text(); //weather.com
			obj.ncard[j] = $(this).find('cardinal').text(); //weather.com
			obj.ndir[j] = $(this).find('direction').text(); //weather.com
			obj.nspeed[j] = $(this).find('speed').text(); //weather.com
			obj.ndesc[j] =	$(this).find('description').text(); //weather.com
			obj.nhum[j] = $(this).find('humidity').text(); //weather.com					
			j++;
		});
		/////End WW3 Stuff/////
		
		// GET MULTIAPI DATA
		switch (weatherAPI) {
			default: 
				obj.icon = obj.icon;
				obj.desc = obj.desc;	
				obj.temp = obj.temp;
				obj.realFeel = obj.realFeel;
				document.getElementById("APIName").innerHTML = datatext + ": Weather.com" + "\u2122";
				document.getElementById("defSumm").style.display = "block";							
			break;
			case "fio":
				obj.icon = obj.fioCode;
				obj.desc = obj.fioDesc; 
				obj.temp = Math.round(obj.fioTemp);
				obj.realFeel = (obj.fioChill) ? Math.round(obj.fioChill) : Math.round(obj.fioTemp);
				document.getElementById("APIName").innerHTML = datatext + ": DarkSky" + "\u2122";
				if (!obj.fioTemp) { document.getElementById("APIName").className = "FontColorRed" ;}
				else {document.getElementById("APIName").className = ""; }
				document.getElementById("fioSumm").style.display = "block";					
			break;
			case "wu":
				obj.icon = (obj.wuCode != 'unknown') ? obj.wuCode : obj.code[0];
				obj.desc = (obj.wuDesc) ? obj.wuDesc : obj.day_desc[0]; 
				obj.temp = (obj.wuTemp) ? Math.round(obj.wuTemp) : obj.temp;	
//				obj.realFeel = (obj.wuChill) ? Math.round(obj.wuChill) : Math.round(obj.wuTemp);   //summer WU is 'reliabe' use this line
				obj.realFeel = (obj.realFeel) ? Math.round(obj.realFeel) : Math.round(obj.wuTemp); //winter WU is 'unreliabe' use this line
				document.getElementById("APIName").innerHTML = datatext + ": WeatherUnderground" + "\u2122";
				if (!obj.wuTemp) { document.getElementById("APIName").className = "FontColorRed" ;}
				else {document.getElementById("APIName").className = ""; }
				document.getElementById("wuSumm").style.display = "block";		
			break;
			case "accu":
				obj.icon = (obj.accuCode) ? obj.accuCode : obj.yahooCode ;
				obj.desc = (obj.accuDesc) ? obj.accuDesc : obj.yahooDesc ;	
				obj.temp = (obj.accuTemp) ? obj.accuTemp : obj.yahooTemp ;	
				obj.realFeel = (obj.accuChill) ? obj.accuChill : obj.yahooTemp;
				document.getElementById("APIName").innerHTML = datatext + ": Accuweather" + "\u2122";
				if (!obj.accuTemp) { document.getElementById("APIName").className = "FontColorRed" ;}
				else {document.getElementById("APIName").className = ""; }
//				document.getElementById("accuDayShortSumm").style.display = "block"; //use one or the other-not both
				document.getElementById("accuDayLongSumm").style.display = "block"; //use one or the other-not both
			break;
			case "yahoo":
				obj.icon = obj.yahooCode;
				obj.desc = obj.yahooDesc;	
				obj.temp = obj.yahooTemp;
				obj.realFeel = obj.realFeel = obj.realFeel;; //Yahoo API offers no realFeel temp, so use Weather.com
				document.getElementById("APIName").innerHTML = datatext + ": YahooWeather" + "\u2122";
				document.getElementById("yahooSumm").style.display = "block";
			break;
		}
		
		//INITIALIZE PAGES AT FIRST START
		if (dayhour == null && obj.location.length > 1 /* && AnimationOnly == false */) { StartLocationTouch(); }

		// WORKAROUND FOR NULL TEMP
		if (obj.high[0] == "null") { obj.high[0] = "--"; }
			
		// WORKAROUND FOR CURRENT CODE IS NULL
		if (!obj.icon || obj.icon == "unknown" || obj.icon == 3200) {
			obj.icon = obj.hcode[0];
			obj.desc = obj.hdesc[0];
		}
		
		// WORKAROUND FOR CURRENT DESC/CODE IS "UNKNOWN" or DESC IS NULL (new WW3)
//		if (obj.desc == "Unknown" || !obj.desc || obj.icon == "unknown") {
//			obj.desc = obj.hdesc[0];
//			obj.icon = obj.hcode[0];
//		}
		
		// WORKAROUND FOR VISIBILITY
		if (!obj.visibility) { obj.visibility = obj.hvisibility[0]; }
		
		// WORKAROUND FOR OTHER Day[0] NULL STUFF (new for WW3)
		if (!obj.day_humidity[0]) { obj.day_humidity[0] = obj.humidity; }
		if (!obj.day_cardinal[0]) { obj.day_cardinal[0] = obj.cardinal; }
		if (!obj.day_speed[0]) { obj.day_speed[0] = obj.windspeed; }
		if (!obj.pop[0]) { obj.pop[0] = obj.hpop[0]; }	
	
		// FOR LIVE FORECAST VIEW
		obj.code[0] = obj.icon;
		obj.day_desc[0] = obj.desc;
		
		// Get additionnal sunrise/sunset information.
		var TZ = -1*Math.round((currentTime.getTimezoneOffset()-GMT*60)/60 - UTC);
		for (var i = 1; i < obj.daydate.length; i++) {
			var suntimes = SunRiseSet(obj.daydate[i].getFullYear(), obj.daydate[i].getMonth()+ 1, obj.daydate[i].getDate(), obj.latitude, obj.longitude);
			obj.sunrise[i] = hmstring(suntimes[0]+TZ);
			obj.sunset[i] = hmstring(suntimes[1]+TZ);
		}
	
		// Get moonphase
		for (var i=1; i<6; i++) {
			var moonphase_day =  new Date(currentTime.getTime() + (24 * 60 * 60 * 1000 * i));
			obj.moonphase[i] = Math.floor(28-(MoonPhase(moonphase_day.getFullYear(),moonphase_day.getMonth()+1,moonphase_day.getDate(),23.99)-180)/(360/28));
			if (obj.moonphase[i] >= 28) { obj.moonphase[i] = obj.moonphase[i] - 28; }
		}
		
		// WeatherCondition Test (must be "commented out" for normal use)
		 //obj.code[0] = 30;
		 //obj.direction = 324;

/////////////WORKAROUND CODE ONLY///////////////	
		if (xmlDown == true) {
			doWorkaround ();
		} else {
			dealWithWeather(obj);
		}	
//////////////END WORKAROUND///////////////		
	
	} else { //closes if (updateFileTimer....)
	
		// CHECK IF ONLINE OR OFFLINE
		if ( currentTime.getTime() - UTC*3600*1000 - updateTimer.getTime() > obj.interval*60*1000 ) {
			obj.offline = true;
			document.getElementById("city").className = "FontColorRed";
		}
	
		// CONDITION CHANGE
		CheckCondition();
		
	} //closes final else
	
} // End of weatherHandler function

function convertFioIcon(icon) {
	switch (icon) {
		case 'clear-day': { return 32; }
		case 'clear-night': { return 31; }
		case 'partly-cloudy-day': { return 30; }
		case 'partly-cloudy-night': { return 29; }
		case 'mostly-clear-day': { return 34; }
		case 'mostly-clear-night': { return 33; }
		case 'mostly-cloudy-day': { return 28; }
		case 'mostly-cloudy-night': { return 27; }
		case 'cloudy': { return 26; }
		case 'rain': { return 12; }
		case 'fog': { return 20; }
		case 'snow': { return 16; }
		case 'wind': { return 24; }
		case 'thunderstorm': { return 4; }
		case 'hail': { return 17; }
		case 'sleet': { return 18; }
		case 'tornado': { return 0; }
	}
}
function convertWuIcon(icon) {
    switch (icon) {
		case 'clear': { return 32; }
		case 'sunny': { return 32; }
		case 'mostlysunny': { return 34; }
		case 'partlycloudy': { return 30; }
		case 'partlysunny': { return 30; }
		case 'mostlycloudy': { return 28; }
		case 'cloudy': { return 26; }
		case 'rain': { return 12; }
		case 'fog': { return 20; }
		case 'hazy': { return 20; }
		case 'snow': { return 16; }
		case 'sleet': { return 18; }
		case 'flurries': { return 13; }
		case 'wind': { return 24; }
		case 'tstorms': { return 45; }
		case 'chancerain': { return 12; }
		case 'chanceflurries': { return 13; }
		case 'chancesleet': { return 18; }
		case 'chancesnow': { return 16; }
		case 'chancetstorms': { return 45; }
	}
}

function convertAccuIcon(icon) {
    switch (icon) {
	    case 1:
		{ return 32; }
	    case 2:
		{ return 34; }
	    case 3:
		{ return 30; }
	    case 4:
		{ return 30; }
	    case 5:
		{ return 21; }
	    case 6:
		{ return 28; }
	    case 7:
		{ return 26; }
	    case 8:
		{ return 26; }
	    case 9:
		{ return 48; }
	    case 10:
		{ return 48; }
	    case 11:
		{ return 20; }
	    case 12:
		{ return 11; }
	    case 13:
		{ return 39; }
	    case 14:
		{ return 39; }
	    case 15:
		{ return 38; }
	    case 16:
		{ return 37; }
	    case 17:
		{ return 37; }
	    case 18:
		{ return 40; }
	    case 19:
		{ return 13; }
	    case 20:
		{ return 14; }
	    case 21:
		{ return 14; }
	    case 22:
		{ return 16; }
	    case 23:
		{ return 16; }
	    case 24:
		{ return 8; }
	    case 25:
		{ return 18; }
	    case 26:
		{ return 10; }
	    case 27:
		{ return 48; }
	    case 28:
		{ return 48; }
	    case 29:
		{ return 5; }
	    case 30:
		{ return 36; }
	    case 31:
		{ return 25; }
	    case 32:
		{ return 24; }
	    case 33:
		{ return 31; }
	    case 34:
		{ return 33; }
	    case 35:
		{ return 29; }
	    case 36:
		{ return 29; }
	    case 37:
		{ return 21; }
	    case 38:
		{ return 27; }
	    case 39:
		{ return 45; }
	    case 40:
		{ return 45; }
	    case 41:
		{ return 47; }
	    case 42:
		{ return 47; }
	    case 43:
		{ return 46; }
	    case 44:
		{ return 46; }
    }
}

function dayofweektonumber(dayofweek) {
	switch (dayofweek) {
		case "Sun": { return 1; }
		case "Mon": { return 2; }
		case "Tue":	{ return 3; }
		case "Wed":	{ return 4; }
		case "Thu":	{ return 5; }
		case "Fri":	{ return 6; }
		case "Sat":	{ return 7; }
	}
}

// CONDITION CHANGE
function CheckCondition() {

	var whereTmp = where;
	var ShowMoonTmp = ShowMoon;
	var special_condition_Tmp = special_condition;

	if ((moonrisehour != null) && (realMoon == true)) {
		if (moonsethour < moonrisehour) {
			if ((time_to_change_wall >= moonrisehour) || (time_to_change_wall < moonsethour)) { ShowMoonTmp = true; } else { ShowMoonTmp = false; }
		} else {
			if ((time_to_change_wall < moonrisehour) || (time_to_change_wall >= moonsethour)) { ShowMoonTmp = false; } else { ShowMoonTmp = true; }
		}
	}
	
	if (dayhour != null) {
		if ((time_to_change_wall < dayhour) || (time_to_change_wall >= nighthour)) {
			whereTmp = "night";
			} else {
			whereTmp = "day";
			if (No_Moon_On_Day_Condition == true) { ShowMoonTmp = false; }		
		}
	}

	if ((currentTime.getDate() == 25) && (currentTime.getMonth() == 11)) { special_condition_Tmp = "christmas"; }
	else if ((currentTime.getDate() == 1) && (currentTime.getMonth() == 0)) { special_condition_Tmp = "newyear"; }
	else { special_condition_Tmp = ""; }
	
	if ((whereTmp != where) || (ShowMoonTmp != ShowMoon) || (special_condition_Tmp != special_condition)) { dealWithWeather(obj); } // Refresh the weather for condition change.
	else { if (ShowSunOrMoon == true) { moveSunOrMoon(); } }
}

function ConvertHours(isostr) {
	var parts = isostr.split(":");
	return hmstring(parts[0]*1 + parts[1]/60 + GMT);
}

function ComputeMoonInfo(today)  {
	MoonOffset = 0;
	var yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
	var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
	TZ = -1*Math.round((today.getTimezoneOffset() - GMT*60)/60 - UTC);
	
	var mrs = MoonRise(today.getFullYear(),today.getMonth()+1,today.getDate(),TZ,obj.latitude,obj.longitude);
	var mrs_next = MoonRise(tomorrow.getFullYear(),tomorrow.getMonth()+1,tomorrow.getDate(),TZ,obj.latitude,obj.longitude);
	var mrs_prev = MoonRise(yesterday.getFullYear(),yesterday.getMonth()+1,yesterday.getDate(),TZ,obj.latitude,obj.longitude);

	if ((mrs[0] < 0) && (mrs[1] < 0)) {
	  if (mrs[0] == -1) {
		// Always down
		obj.moonrise = "--:--";
		obj.moonset = "--:--";
	  } else {
		// Always up, need to find moonrise at D-1 and moonset at D+1 for uniaw
		obj.moonrise = "*" + hmstring(mrs_prev[0]);
		obj.moonset = hmstring(mrs_next[1]) + "*";
		MoonOffset = 24; // BE CAREFULL ! NEED TO ADD A VAR FOR A +24H FOR THE DURATION OF MOON TRANSIT...
	  }
	} else {
	  if (mrs[1] <= mrs[0]) {
		// MOONSET IS INFERIOR OR EQUAL TO MOON RISE
		if (mrs[1] >= 0) { // LOOK IF THERE IS A VALID MOONSET TIME FOR CURRENT DAY
			if  (time_to_change_wall < mrs[1]) { // IF CURRENT TIME IS INFERIOR TO MOONSET, SEARCH FOR MOONRISE
				obj.moonrise = "*" + hmstring(mrs_prev[0]);
				obj.moonset = hmstring(mrs[1]);
			} else { // CURRENT TIME IS SUPERIOR, CHECK FOR NEXT CYCLE EVEN IF MOONRISE IS THE NEXT DAY
				obj.moonrise = hmstring(mrs[0]);
				obj.moonset = hmstring(mrs_next[1]) + "*";	
			}
		} else { // NO MOONSET TIME THIS DAY, BUT THERE IS A MOONSET TIME TOMORROW (PROBABLY...) !
			obj.moonrise = hmstring(mrs[0]);
			obj.moonset = hmstring(mrs_next[1]) + "*";
		}
	  } else {
		if (mrs[0] >= 0) { // MOONSET IS ABOVE 0 TOO
			obj.moonrise = hmstring(mrs[0]);
			obj.moonset = hmstring(mrs[1]); 			
		} else { // MOONSET IS ABOVE 0 TOO..
				obj.moonrise = "*" + hmstring(mrs_prev[0]);
				obj.moonset = hmstring(mrs[1]);
		}
	  }
	}
	
	// Moon phase
	// Table of the new, moon first quarter, full mon and last quarter
	var JDE = MoonQuarters(today.getFullYear(),today.getMonth()+1,today.getDate());
	var JDE_tmp = JDE[0] + JDE[1] + JDE[2] + JDE[3];

	z = 1;
	do {
		var nextday = new Date(today.getTime() + (24 * 60 * 60 * 1000 * z));
		var JDEnext =  MoonQuarters(nextday.getFullYear(),nextday.getMonth()+1,nextday.getDate());
		var JDEnext_tmp = JDEnext[0] + JDEnext[1] + JDEnext[2] + JDEnext[3];
		z++;
	} while (JDE_tmp == JDEnext_tmp);
	
	var phase = ["New", "First", "Full", "Last","New", "First", "Full", "Last"];
	JDE = JDE.concat(JDEnext);
	
	obj.quarter = [];
	obj.quarterdate = [];
	for (var i=0; i < JDE.length; i++) {
		var date_tmp = jdtocd(JDE[i]);
		JDE[i] = new Date(date_tmp[0], date_tmp[1]-1, date_tmp[2], 23, 59, 59, 999);
		if (JDE[i].getTime() >= today.getTime()) {
			obj.quarterdate[obj.quarterdate.length] = JDE[i]; 
			obj.quarter[obj.quarter.length] = phase[i];
		}
	}
}

function dateFromISO8601(isostr) {
	var parts = isostr.match(/\d+/g);
	return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
}

function ConvertToAmPm(d) {
	var updateTimeHours = d.getHours();
	var updateTimeMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
	var updateTimeOfDay = ( updateTimeHours < 12 ) ? "am" : "pm";

	if (ampm == false) {
		updateTimeHours = ( updateTimeHours < 10 ? "0" : "" ) + updateTimeHours;
		var updateString = updateTimeHours + ":" + updateTimeMinutes;
	} else {
		updateTimeHours = ( updateTimeHours > 12 ) ? updateTimeHours - 12 : updateTimeHours;
		updateTimeHours = ( updateTimeHours == 0 ) ? 12 : updateTimeHours;
		var updateString = updateTimeHours + ":" + updateTimeMinutes + " " + updateTimeOfDay;
	}
	return updateString;
}


window.onload = init;

function newWW3Stuff(Unit,where,dates) {
	
	// WEATHER.COM "DEFAULT" INFORMATION
		var defFD = [];
		var defFN = [];
		var defForecast = [];
		for (i=0; i < (ForecastDays)+1; i++) {			
			changeCase(); //Changes Partly Cloudy and Rain Early, etc, to Partly cloudy and Rain early, etc)		
			defFD[i] =
			'<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + " " + Suffix(dates[i]) + "- " + '</span>' + convertTxtDay(obj.day_desc[i]) + ((obj.code[i] == 24 && obj.day_desc[i].indexOf("wind" == -1)) ? " and windy with a high of " : " with a high of ")  + obj.high[i] + "&#176;" + Unit + ". " + "Hum " + obj.day_humidity[i] + "%. " + "Winds " + obj.day_cardinal[i] + " at " + obj.day_speed[i] + windspeedunit + ". " + ((obj.pop[i] != 0) ? "Prec." + obj.pop[i]+ "% chance." : "") + "<BR>";			
			defFN[i] = 
			'<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + nighttext + "- " + '</span>' + convertTxtNight(obj.ndesc[i]) + ((obj.code[i] == 24 && obj.day_desc[i].indexOf("wind" == -1)) ? " and windy with a low of " : " with a low of ")  + obj.low[i] + "&#176;" + Unit + ". " + "Hum " + obj.nhum[i] + "%. " + "Winds " + obj.ncard[i] + " at " + obj.nspeed[i] + windspeedunit + ". " + ((obj.npop[i] != 0) ? "Prec." + obj.npop[i]+ "% chance." : "")+ "<BR>";
			
			if (DayOnly == false) { defForecast.push(defFD[i], defFN[i]); } //move day & night alternating into 1 array
			else { defForecast.push(defFD[i]); }
		} //closes 'for' loop
		
		document.getElementById("defSumm").innerHTML = ((Use_Forecast_Header == true) ? "Apple Day/Night Summaries: " + "<BR>" : "") + (DayOnly == false && obj.sunsH <= currentTime.getHours() && currentTime.getHours() <= 23 ? defForecast = defForecast.splice(1).join('') : defForecast = defForecast.join('')); //during day show night forec. - after sunset show next day
 
	
	// WEATHER UNDERGROUND INFORMATION 
	if (wuCurrentExtras == true) {
		document.getElementById("wuCity").innerHTML = "wuCity: " + obj.wuCity;
		if (obj.celsius == "NO") { document.getElementById("wuForecast").innerHTML = "Forecast: " + obj.wuForecast; }
		else { document.getElementById("wuForecast").innerHTML = "Forecast: " + obj.wuForecastMetric; }
		document.getElementById("wuWeatherStation").innerHTML = "Weather Station: " + obj.wuWeatherStation;
		document.getElementById("wuElevation").innerHTML = "Elevation: " + Math.round(obj.wuElevation*convertF) + " " + feetunit;
		document.getElementById("wuWindText").innerHTML = "Wind Text: " + obj.wuWindText;
	}
	if (wuForecastExtras == true) {
		var wuFD = [];
		var wuFN = [];
		var wuForecast = [];
		if (obj.celsius == "NO") {
			for (i=0; i < ForecastDays; i++) {
				wuFD[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i]+ " " + Suffix(dates[i]) + "- " + '</span>' + obj.wuSumm[i] + "<BR>";
				wuFN[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + nighttext + "- " + '</span>' + obj.wuSummNight[i]+ "<BR>";
				if (DayOnly == false) { wuForecast.push(wuFD[i], wuFN[i]);} //move night and day alternating into 1 array
				else { wuForecast.push(wuFD[i]); } 
			}
			document.getElementById("wuSumm").innerHTML = ((Use_Forecast_Header == true) ? "WU Day/Night Summaries: " + "<BR>" : "") + (DayOnly == false && obj.sunsH <= currentTime.getHours() && currentTime.getHours() <= 23 ? wuForecast = wuForecast.splice(1).join('') : wuForecast = wuForecast.join('')) ;  //during day show night forec. - after sunset show next day
		} else {
			for (i=0; i < ForecastDays; i++) {
				wuFD[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + " " + Suffix(dates[i]) + "- " + '</span>' + obj.wuSummMetric[i] + "<BR>";
				wuFN[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + nighttext + "- " + '</span>' + obj.wuSummNightMetric[i] + "<BR>";
				if (DayOnly == false) { wuForecast.push(wuFD[i], wuFN[i]);} //move night and day alternating into 1 array
				else { wuForecast.push(wuFD[i]); } 
			}
			document.getElementById("wuSumm").innerHTML = ((Use_Forecast_Header == true) ? "WU Day/Night Summaries: " + "<BR>" : "") + (DayOnly == false && obj.sunsH <= currentTime.getHours() && currentTime.getHours() <= 23 ? wuForecast = wuForecast.splice(1).join('') : wuForecast = wuForecast.join('')) ;  //during day show night forec. - after sunset show next day
		}
	}	
	// DARKSKY (FIO) INFORMATION
	if (fioCurrentExtras == true) {
		document.getElementById("fioAPICalls").innerHTML = "API Calls Today: " + obj.fioAPICalls;
		document.getElementById("fioCloudCover").innerHTML = "Cloud Cover: " + Math.round(obj.fioCloudCover) + "%";
		document.getElementById("fioOzone").innerHTML = "Ozone: " + obj.fioOzone + " DU";
		document.getElementById("fioStormDistance").innerHTML =  "Storm Distance: " + Math.round(obj.fioStormDistance*convertD) + " " + visibilityunit;
		document.getElementById("fioStormBearing").innerHTML = "Storm Bearing: " + obj.fioStormBearing + "&#176;";
		document.getElementById("fioPrecipIntensity").innerHTML = "Precip. Intensity: " + Math.round(obj.fioPrecipIntensity*convertM*100)/100 + " " + measureunit + "/hour";
		document.getElementById("fioHourSummary").innerHTML = "Hour Summary: " + obj.fioMinutely;
		document.getElementById("fioDaySummary").innerHTML = "Day Summary: " + obj.fioHourly;
		document.getElementById("fioWeekSummary").innerHTML = "Week Summary: " + obj.fioDaily;	
	}
	if (fioForecastExtras == true) {
		var fioForecast = [];
		for (i=0; i < (ForecastDays)+1; i++) {
			fioForecast[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i]+ " " + Suffix(dates[i]) + "- " + '</span>' + obj.fioSummDay[i] + "<BR>";
		}
		document.getElementById("fioSumm").innerHTML = ((Use_Forecast_Header == true) ? "DarkSky Day Summaries: " + "<BR>" : "") + (fioForecast = fioForecast.splice(1).join(""));
	}
	//ACCUWEATHER INFORMATION
	if (accuCurrentExtras == true) {
		document.getElementById("accuUV").innerHTML = "UV Index: " + obj.accuUV;
		document.getElementById("accuPrecip").innerHTML = "Current Precip: " + Math.round(obj.accuPrecip * convertC * 100)/100 + " " + measureunit;
		document.getElementById("accuRain").innerHTML = "Forecasted Rain: " + Math.round(obj.accuRain[0] * convertM * 100)/100 + " " + measureunit;
		document.getElementById("accuSnow").innerHTML = "Forecasted Snow: " + Math.round(obj.accuSnow[0] * convertC * 100)/100 + " " + ((measureunit == "in.") ? measureunit : "cm.");
		document.getElementById("accuTStormProb").innerHTML = "T-storm Chance: " + obj.accuTStormProb[0] + "%";
		document.getElementById("accuShortSumm").innerHTML = "Short Summary: " + obj.accuShortSumm;
		document.getElementById("accuLongSumm").innerHTML = "Long Summary: " + obj.accuLongSumm;
	}
	if (accuAllergyExtras == true) {
		document.getElementById("accuAirQuality_Type").innerHTML = "Air Quality [Type]: " + obj.accuAirQuality + " [" + obj.accuAirQualityType + "]";
		document.getElementById("accuWeed").innerHTML = "Weed Pollen Count: " + obj.accuWeeds;
		document.getElementById("accuGrass").innerHTML = "Grass Pollen Count: " + obj.accuGrass;
		document.getElementById("accuTree").innerHTML = "Tree Pollen Count: " + obj.accuTree;
		document.getElementById("accuMold").innerHTML = "Mold Pollen Count: " + obj.accuMold;
	}
	if (accuPlanetExtras == true) {
		document.getElementById("accuMercury").innerHTML = "Mercury Rise/Set: " + obj.accuMercury;
		document.getElementById("accuVenus").innerHTML = "Venus Rise/Set: " + obj.accuVenus;
		document.getElementById("accuMars").innerHTML = "Mars Rise/Set: " + obj.accuMars;
		document.getElementById("accuJupiter").innerHTML = "Jupiter Rise/Set: " + obj.accuJupiter;
		document.getElementById("accuSaturn").innerHTML = "Saturn Rise/Set: " + obj.accuSaturn;
		document.getElementById("accuUranus").innerHTML = "Uranus Rise/Set: " + obj.accuUranus;
		document.getElementById("accuNeptune").innerHTML = "Neptune Rise/Set: " + obj.accuNeptune;
		document.getElementById("accuPluto").innerHTML = "Pluto Rise/Set: " + obj.accuPluto;
	}
	if (accuForecastExtras == true) {
		var accuForecastShort = [];
		for (i=0; i < ForecastDays; i++) {
			accuForecastShort[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + " " + Suffix(dates[i]) + "- " + '</span>' + obj.accuShortSummDay[i] + "<BR>";
		}
		document.getElementById("accuDayShortSumm").innerHTML = ((Use_Forecast_Header == true) ? "ACCU Day Short Summaries: " + "<BR>" : "") + accuForecastShort.join("");
		
		var accuForecastLong = [];
		for (i=0; i < ForecastDays; i++) {
			accuForecastLong[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + " " + Suffix(dates[i]) + "- " +'</span>' + obj.accuLongSummDay[i] + "<BR>";
		}
		document.getElementById("accuDayLongSumm").innerHTML = ((Use_Forecast_Header == true) ? "ACCU Day Long Summaries: " + "<BR>" : "") + accuForecastLong.join("");
	}	
	// YAHOO INFORMATION
	if (yahooForecastExtras == true) {
		var yahooForecast = [];
		for (i=0; i < ForecastDays; i++) {
			obj.yahooSumm[i] = obj.yahooSumm[i].toLowerCase();
			obj.yahooSumm[i] = obj.yahooSumm[i].charAt(0).toUpperCase() + obj.yahooSumm[i].slice(1);
			yahooForecast[i] = '<span style= color:' + ((where == "day") ? font_color_night : font_color_day) + '>' + obj.dayname[i] + " " + Suffix(dates[i]) + "- " + '</span>' + obj.yahooSumm[i] + " with a high of "  + obj.yahooHighDay[i] + "&#176;" + Unit + "/low of " + obj.yahooLowDay[i] + "&#176;" + Unit + ". "+"<BR>";
		}
		document.getElementById("yahooSumm").innerHTML = ((Use_Forecast_Header == true) ? "YAHOO Day Summaries: " + "<BR>" : "") + yahooForecast.join("");
	}

} //closes newWW3Stuff function

function convertTxtDay () {	/* for use with Weather.com summary creation */
	if (obj.day_desc[i] == "Sunny") {return "Bright sunshine"; }
	if (obj.day_desc[i] == "Clear" && obj.code[i] == 34) {return "A mostly sunny day"; }
	if (obj.day_desc[i] == "Partly cloudy") {return "A partly sunny day"; }
	if (obj.day_desc[i] == "Overcast") {return "An overcast day"; }
	if (obj.day_desc[i] == "Few showers") {return "A few showers today"; }
	if (obj.day_desc[i].match(/Chance/) ) { return "The " + obj.day_desc[i].replace('Chance','chance'); }
	if (obj.day_desc[i].match(/(early|late)/) ) { return obj.day_desc[i]; }
	if (obj.day_desc[i].match(/(Rain|Snow|Flurr|Shower|AM|PM|Blowing|Light|Ice)/) ) { return obj.day_desc[i] + " expected"; }
	if (obj.day_desc[i].match(/Scattered|Thunder/) ) { return obj.day_desc[i] + "s expected"; }
	
	return "A " + obj.day_desc[i].toLowerCase() + " day "; //all other cases
}
function convertTxtNight () { /* for use with Weather.com summary creation */
	if (obj.ndesc[i] == "Clear" && obj.code[i] == 33) {return "Mostly clear skies"; }
	if (obj.ndesc[i] == "Few showers") {return "A few showers tonight"; }
	if (obj.ndesc[i].match(/Chance/) ) { return "The " + obj.ndesc[i].replace('Chance','chance'); }
	if (obj.ndesc[i].match(/(early|late)/) ) { return obj.ndesc[i]; }
	if (obj.ndesc[i].match(/(Rain|Snow|Flurr|Shower|Blowing|Light|Ice)/) ) { return obj.ndesc[i] + " expected"; }
	if (obj.ndesc[i].match(/Scattered|Thunder/) ) { return obj.ndesc[i] + "s expected"; }
	
	return obj.ndesc[i] + " skies "; //all other cases
}
function changeCase() { /* for use with Weather.com summary creation */
	obj.day_desc[i] = obj.day_desc[i].toLowerCase(); //'Rain Early', etc, to 'rain early'
	obj.day_desc[i] = obj.day_desc[i].charAt(0).toUpperCase() + obj.day_desc[i].slice(1); //'rain early', etc, to 'Rain early'
	obj.day_desc[i] = obj.day_desc[i].replace('Am','AM').replace('Pm','PM').replace('/',' and ').replace('wind','windy');			
	obj.ndesc[i] = obj.ndesc[i].toLowerCase();//'Partly Cloudy', etc, to 'partly cloudy'
	obj.ndesc[i] = obj.ndesc[i].charAt(0).toUpperCase() + obj.ndesc[i].slice(1); //'partly cloudy', etc, to 'Partly cloudy'
	obj.ndesc[i] = obj.ndesc[i].replace('/',' and ').replace('windy','wind').replace('wind','windy');
}
