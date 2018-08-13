/* ------ UniAW7.1 from Ian Nicoll & Dacal ------ */

// INITIALIZE TOUCH EVENT
var doubleTapped = false;
var touchdownX;
var touchupX;
var touchX;
var stateX = 0;
var hourlydisplay = false;
var forecastdisplay = true;
var moondisplay = false;
var pagenumber = 0;
var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
if (iOS == true) { var touchmode = "touchend"; } else { var touchmode = "click"; }

function StartTouch() {
	// MAIN PART
	if (ShowForecast == true) {
		if (iOS == true) {
			document.getElementById("TouchHourlyForecastSlide").addEventListener("touchstart", touchStartX, false);
			document.getElementById("TouchHourlyForecastSlide").addEventListener("touchmove", touchMoveX, false);
		} else {
			document.getElementById("TouchHourlyForecastSlide").addEventListener("mousedown", mouseDownX, false);
			document.getElementById("TouchHourlyForecastSlide").addEventListener("mouseup", mouseUpX, false);
		}
		
		if (No_Forecast_On_Start == false ) {
			document.getElementById("TouchShowHourlyForecast").addEventListener(touchmode, touchExtra, false);
		} else {
			document.getElementById("forecastContainer").className = "scaleZero";
			forecastdisplay = false;
			document.getElementById("TouchShowHourlyForecast").addEventListener(touchmode, touchExtra2, false);
		}
	}
	document.getElementById("TouchMoonInfo").addEventListener(touchmode, touchMoon, false);
}

function StartAnimationTouch() {
	document.getElementById("animationsTouchLayer").addEventListener(touchmode, touchAnimations, false);
}

function StartLocationTouch() {
	document.getElementById("Next1").style.opacity = "1.0";
	document.getElementById("TouchNext").addEventListener(touchmode, touchNXML, false);
}

function touchAnimations() {
	if (useDoubleTap == true) {
		if(!doubleTapped) {
			doubleTapped = true;
			setTimeout( function() { doubleTapped = false; }, 500 );
			return false;
		}
	}
    if (noAnimations == false) {
        noAnimations = true;
		filename = "";
		document.getElementById("twilightBG").className = "fade-out";
		clearTimeout(meteorTimer);
		clearTimeout(lightningTimer);
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
		ShowSunOrMoon = false;
		document.getElementById("animationsOn").style.display = 'none';
		document.getElementById("animationsOff").style.display = 'block';
		document.getElementById("Day0Icon").style.display = "block";
		if ((Clock_Logo == true) || (ShowCurrentConditionIcon == true)) { document.getElementById("clocklogo").style.display = "none"; }
		if (OptionalClockCalendar == false) { document.getElementById("year").style.display = "none"; }
	} else {
		noAnimations = false;
		LaunchAnimations();
		document.getElementById("animationsOn").style.display = 'block';
		document.getElementById("animationsOff").style.display = 'none';
		document.getElementById("Day0Icon").style.display = "none";
		if (Clock_Logo == true) { document.getElementById("clocklogo").style.display = "block"; }
		if (ShowCurrentConditionIcon == true) {
			document.getElementById("clocklogo").style.display = "none";
			document.getElementById("Day0Icon").style.display = "block";
		}
		if (OptionalClockCalendar == false) { document.getElementById("year").style.display = "block"; }
		if ((OptionalClockCalendar == false) && (ShowYear == true) && (ShowCurrentConditionIcon == true)) { document.getElementById("year").style.display = "none"; }
	}
}

function touchNXML() {
	updateFileTimer = "";
	pagenumber++;
	xmlnumber = obj.location[pagenumber];
	if (pagenumber == obj.location.length-1) {
		document.getElementById("Next1").style.opacity = "0.0";
		document.getElementById("TouchNext").removeEventListener(touchmode, touchNXML, false);
	}
	if (pagenumber == 1) {
		document.getElementById("Prev1").style.opacity = "1.0";
		document.getElementById("TouchPrevious").addEventListener(touchmode, touchPXML, false);
		document.getElementById("TouchHome").addEventListener(touchmode, touchHome, false);
	}
	updateWeather();
}

function touchPXML() {
	updateFileTimer = "";
	pagenumber--;
	xmlnumber = obj.location[pagenumber];
	if (pagenumber == 0) {
		document.getElementById("Prev1").style.opacity = "0.0";
		document.getElementById("TouchPrevious").removeEventListener(touchmode, touchPXML, false);
		document.getElementById("TouchHome").removeEventListener(touchmode, touchHome, false);
	}
	if (obj.location.length - pagenumber == 2) {
		document.getElementById("Next1").style.opacity = "1.0";
		document.getElementById("TouchNext").addEventListener(touchmode, touchNXML, false);
	}
	updateWeather();
}

function touchHome() {
	updateFileTimer = "";
	pagenumber = 0;
	xmlnumber = "";
	document.getElementById("Prev1").style.opacity = "0.0";
	document.getElementById("Next1").style.opacity = "1.0";
	document.getElementById("TouchPrevious").removeEventListener(touchmode, touchPXML, false);
	document.getElementById("TouchHome").removeEventListener(touchmode, touchHome, false);
	document.getElementById("TouchNext").addEventListener(touchmode, touchNXML, false);
	updateWeather();
}

function touchMoon(event) {
	if (useDoubleTap == true) {
		if(!doubleTapped) {
			doubleTapped = true;
			setTimeout( function() { doubleTapped = false; }, 500 );
			return false;
		}
	}
	event.preventDefault();
	if (moondisplay == false) {
		if (forecastdisplay == true) {
			document.getElementById("forecastContainer").className = "scaleZero";	
		}
		if (hourlydisplay == true) {
			document.getElementById("hourlyforecastContainer").className = "scaleZero";
			document.getElementById("TouchHourlyForecastSlide").style.display = "none";
		}
		document.getElementById("animationsTouchLayer").style.display = "none";
		document.getElementById("moonDescription").innerHTML = obj.moondesc;
		document.getElementById("moonDescription").style.display = "block";
		document.getElementById("Moonphase").className = "scaleNormal";
		document.getElementById("MoonInfo").className = "fade-in";
		document.getElementById("SunInfo").className = "fade-out";
		moondisplay = true;
		if ((Clock_Logo == true) || (noAnimations == true)) {
			document.getElementById("clocklogo").style.display = "none";
		}
		if ((OptionalClockCalendar == false) && (ShowYear == true)) {
			document.getElementById("year").style.display = "none";
		}
		if ((noAnimations == true)  || (ShowCurrentConditionIcon == true )){
			document.getElementById("Day0Icon").style.display = "block";
		}	
	} else {
		if (forecastdisplay == true) {
			document.getElementById("forecastContainer").className = "scaleNormal";				
		}
		if (hourlydisplay == true) {
			document.getElementById("hourlyforecastContainer").className = "scaleNormal";
			document.getElementById("TouchHourlyForecastSlide").style.display = "block";
		}
		if (noAnimations == false) {
			if ((OptionalClockCalendar == false) && (ShowYear == true)) {
				document.getElementById("year").style.display = "block";
			}
			if ((Clock_Logo == true) && (ShowCurrentConditionIcon == false)) {
				document.getElementById("clocklogo").style.display = "block";
			}
			if (ShowCurrentConditionIcon == true) {
				document.getElementById("Day0Icon").style.display = "block";
				document.getElementById("year").style.display = "none";
			}
		} else {
			document.getElementById("Day0Icon").style.display = "block";
		}
		document.getElementById("animationsTouchLayer").style.display = "block";
		document.getElementById("moonDescription").style.display = "none";
		document.getElementById("Moonphase").className = "scaleZero";
		document.getElementById("MoonInfo").className = "fade-out";
		document.getElementById("SunInfo").className = "fade-in";
		moondisplay = false;
	}
}

function touchExtra(event) {
	if (useDoubleTap == true) {
		if(!doubleTapped) {
			doubleTapped = true;
			setTimeout( function() { doubleTapped = false; }, 500 );
			return false;
		}
	}
	event.preventDefault();
	if (moondisplay == false) {
		if (hourlydisplay == true) {
			document.getElementById("hourlyforecastContainer").className = "scaleZero";
			document.getElementById("forecastContainer").className = "scaleNormal";
			document.getElementById("TouchHourlyForecastSlide").style.display = "none";
			hourlydisplay = false;
			forecastdisplay = true;
		} else {
			document.getElementById("hourlyforecastContainer").className = "scaleNormal";
			document.getElementById("forecastContainer").className = "scaleZero";
			document.getElementById("TouchHourlyForecastSlide").style.display = "block";			
			hourlydisplay = true;
			forecastdisplay = false;
		}
	} else {
			document.getElementById("animationsTouchLayer").style.display = "block";
			document.getElementById("moonDescription").style.display = "none";
			document.getElementById("Moonphase").className = "scaleZero";
			document.getElementById("MoonInfo").className = "fade-out";
			document.getElementById("SunInfo").className = "fade-in";
			if (noAnimations == false) {
				if ((OptionalClockCalendar == false) && (ShowYear == true)) {
					document.getElementById("year").style.display = "block";
				}
				if ((Clock_Logo == true) && (ShowCurrentConditionIcon == false)) {
					document.getElementById("clocklogo").style.display = "block";
				}
				if (ShowCurrentConditionIcon == true) {
					document.getElementById("Day0Icon").style.display = "block";
					document.getElementById("year").style.display = "none";
				}
			} else {
				document.getElementById("Day0Icon").style.display = "block";
			}
			if (forecastdisplay == true) {
				document.getElementById("forecastContainer").className = "scaleNormal";				
			}
			if (hourlydisplay == true) {
				document.getElementById("hourlyforecastContainer").className = "scaleNormal";
				document.getElementById("TouchHourlyForecastSlide").style.display = "block";
			}
			moondisplay = false;
	}
}

function touchExtra2(event) { // NO FORECAST ON START - ADDITIONAL EMPTY STATE
	if (useDoubleTap == true) {
		if(!doubleTapped) {
			doubleTapped = true;
			setTimeout( function() { doubleTapped = false; }, 500 );
			return false;
		}
	}
	event.preventDefault();
	if (moondisplay == false) {
		if (hourlydisplay == true) {
			document.getElementById("hourlyforecastContainer").className = "scaleZero";
			document.getElementById("TouchHourlyForecastSlide").style.display = "none";
			hourlydisplay = false;
		} else {
			if (forecastdisplay == false) {
				document.getElementById("forecastContainer").className = "scaleNormal";
				forecastdisplay = true;
			} else {
				if (WeatherSource == "widgetweather") {
					document.getElementById("hourlyforecastContainer").className = "scaleNormal";
					document.getElementById("forecastContainer").className = "scaleZero";
					document.getElementById("TouchHourlyForecastSlide").style.display = "block";			
					hourlydisplay = true;
					forecastdisplay = false;
				} else {
					document.getElementById("forecastContainer").className = "scaleZero";
					forecastdisplay = false;
				}
			}
		}
	} else {
			document.getElementById("Moonphase").className = "scaleZero";
			document.getElementById("MoonInfo").className = "fade-out";
			document.getElementById("SunInfo").className = "fade-in";
			if (forecastdisplay == true) {
				document.getElementById("forecastContainer").className = "scaleNormal";				
			}
			if (hourlydisplay == true) {
				document.getElementById("hourlyforecastContainer").className = "scaleNormal";
				document.getElementById("TouchHourlyForecastSlide").style.display = "block";
			}
			moondisplay = false;
	}
}

function touchStartX(event) {
	event.preventDefault();
	touchdownX = event.targetTouches[0].pageX;
}

function touchMoveX(event) {
	event.preventDefault();
	touchupX = event.targetTouches[0].pageX;
	touchX = touchupX - touchdownX;
	if  (touchX != 0) {	MoveElementX();	}
}

function mouseDownX(event) {
	event.preventDefault();
	touchdownX = event.pageX;
}

function mouseUpX(event) {
	event.preventDefault();
	touchupX = event.pageX;
	touchX = touchupX - touchdownX;
	if  (touchX != 0) {	MoveElementX();	}
}

function MoveElementX() {
	switch (stateX) {
		case 0 :
		if ( touchX < 0 ) {
			document.getElementById("hourlyforecast").className = "forecastTranslateLeft";
			stateX++;
		}
		break;
		case 1 :
		if ( touchX > 0 ) {
			document.getElementById("hourlyforecast").className = "forecastTranslateRight";
			stateX--;
		} 
		break;
	}
}

function ForecastTouch() {
	document.getElementById('TouchSumm').addEventListener(touchmode, touchSumm, false);
	var ShowSummdisplay = ( showForecastExtras_on_startup == true ) ? true : false;
	function touchSumm(event) {
		if (useDoubleTap == true) {
			if(!doubleTapped) {
				doubleTapped = true;
				setTimeout( function() { doubleTapped = false; }, 500 );
				return false;
			}
		}
		event.preventDefault(); 
		if (ShowSummdisplay == false) {
			$(".AllSumms").addClass('fade-in');
			document.getElementById('APIName').className = "fade-in";
			document.getElementById('SummBackground').className = "fade-in";
			document.getElementById('SlideCalWrap').className = "fade-out";
			ShowSummdisplay = true;
		} else {
			$(".AllSumms").removeClass('fade-in');
			document.getElementById('APIName').className = "fade-out";
			document.getElementById('SummBackground').className = "fade-out";
			document.getElementById('SlideCalWrap').className = "fade-in";
			ShowSummdisplay = false;
		}
	}
}

