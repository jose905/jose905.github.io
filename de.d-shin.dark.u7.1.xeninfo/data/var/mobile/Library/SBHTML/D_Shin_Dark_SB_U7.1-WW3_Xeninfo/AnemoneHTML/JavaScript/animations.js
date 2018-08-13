// UniAW7.1 from Ian Nicoll & Dacal

// VARIABLES

var nb_big_ballons = [];
var nb_medium_ballons = [];

var nb_small_ballons = [];

var prev_big_ballon_number;
var prev_medium_ballon_number;
var prev_small_ballon_number;

// IANS METEORS

if (Ians_Meteors == true) { meteor_fall = "_sideways_"; } else { meteor_fall = ""; }



/* DO NOT MODIFY THESE VALUES WITHOUT CHANGE THE NUMBER OF PICTURES */

var NUMBER_OF_CLOUD_IMAGES = 23; // images + 1

var NUMBER_OF_FOG_IMAGES = 13; // images + 1

var NUMBER_OF_HAZE_IMAGES = 17; // images + 1

var NUMBER_OF_HAIL_IMAGES = 4; // images + 1

var NUMBER_OF_SLEET_IMAGES = 7; // images + 1

var NUMBER_OF_SNOW_IMAGES = 7; // images + 1

var NUMBER_OF_CIRCLE_IMAGES = 5; // images + 1

var NUMBER_OF_RAIN_IMAGES = 7; // images + 1

var NUMBER_OF_STAR_IMAGES = 6; // images + 1

var NUMBER_OF_METEOR_IMAGES = 3; // images + 1

var NUMBER_OF_SEED_IMAGES = 8; // images + 1

var NUMBER_OF_THUNDER_IMAGES = 7; // images + 1

var NUMBER_OF_LIGHT_IMAGES = 4; // images + 1

var NUMBER_OF_LEAF_IMAGES = 9; // images + 1

var NUMBER_OF_WIRE_IMAGES = 4; // images + 1

var NUMBER_OF_BIG_BALLOON_IMAGES = 6; // images + 1

var NUMBER_OF_SMALL_BALLOON_IMAGES = 6; // images + 1
var NUMBER_OF_MEDIUM_BALLOON_IMAGES = 6; // images + 1



/* DEFAULT VALUES - NOT USED, CAN BE CHANGED DIRECTLY IN THE FUNCTIONS BELOW FOR EACH WEATHER ELEMENTS ! */

var NUMBER_OF_DARK_CLOUDS = 20; // clouds to show on screen

var NUMBER_OF_WHITE_CLOUDS = 18; // clouds to show on screen

var NUMBER_OF_FAIR_CLOUDS = 4; // clouds to show on screen

var NUMBER_OF_STORM_CLOUDS = 12; // clouds to show on screen

var NUMBER_OF_FOG_CLOUDS = 20; // clouds to show on screen

var NUMBER_OF_HAZE_CLOUDS = 20; // clouds to show on screen

var NUMBER_OF_HAIL_DROPS = 40; // drop to show on screen

var NUMBER_OF_SLEET = 30; // drop to show on screen

var NUMBER_OF_SNOW = 30; // drop to show on screen

var NUMBER_OF_RAIN_DROPS = 60; // drop to show on screen

var NUMBER_OF_CIRCLES = 10; // circle to show on screen

var NUMBER_OF_WIRE = 50; // wire to show on screen

var NUMBER_OF_STARS = 20; // stars to show on screen

var NUMBER_OF_METEORS = 3; // meteors to show on screen

var NUMBER_OF_SEEDS = 25; // seeds to show on screen

var NUMBER_OF_THUNDERS = 2; // thunders to show on screen

var NUMBER_OF_LIGHTS = 2; // lights to show on screen

var NUMBER_OF_LEAVES = 16; // leaves to show on screen
var NUMBER_OF_BIG_BALLOONS = 3;  // big balloons to show on screen

var NUMBER_OF_SMALL_BALLOONS = 3;  // small balloons to show on screen
var NUMBER_OF_MEDIUM_BALLOONS = 3;  // medium balloons to show on screen



/* -------------------------------------- MAIN FUNCTION ----------------------------------------- */

/* ----------- YOU CAN SPECIFY THE NUMBER OF ELEMENTS TO LAUNCH FOR EACH CONDITION -------------- */


// WEATHER CONDITIONS CONFIGURATION FOR ALL PHONES
function LoadAnimations(filename) {
	if (superLiteMode == false) {
		switch (filename) {
			case "clear" :
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'leaves') { createLeaves(10); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createBirds();
				createAastronaut();
				createBigBalloons(2);
				createMediumBalloons(2);
				createSmallBalloons(3);
				createFrost();
			break;
			case "cloud":
				createStaticClouds();
				createDarkClouds(10);
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'leaves') { createLeaves(10); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createFrost();
			break;
			case "fair":
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				createFairClouds(4);
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'leaves') { createLeaves(10); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createBirds();
				createAastronaut();
				createBigBalloons(2);
				createMediumBalloons(2);
				createSmallBalloons(3);
				createFrost();
			break;
			case "frost":
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				createFrost();
				createLeaves(10);
			break;
			case "fog":
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				createFog(25);
				createFrost();
			break;
			case "haze":
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				createHaze(20);
				createFrost();
			break;
			case "partlycloudy":
				createSunOrMoon();
				createStars(6);
				createMeteors(2);
				createWhiteClouds(8);
				createBigBalloons(2);
				createMediumBalloons(2);
				createSmallBalloons(3);
				createFrost();
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'leaves') { createLeaves(10); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createBirds();
			break;
			case "mostlycloudy":
				createStaticClouds();
				createSunOrMoon();
				createStars(5);
				createMeteors(1);
				createWhiteClouds(12);
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'leaves') { createLeaves(10); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createBirds();
				createBigBalloons(2);
				createMediumBalloons(2);
				createSmallBalloons(3);
				createFrost();
			break;
			case "scattered_thunderstorms":
				createStaticClouds();
				createDarkClouds(8);
				createLight(1,1);
				createWiper();
				createRain(40,5,40);
				createFrost();
			break;
			case "thunderstorm":
				createStaticClouds();
				createDarkClouds(8);
				createLight(1,1);
				createWiper();
				createRain(40,5,40);
				createFrost();
			break;
			case "rain":
				createStaticClouds();
				createDarkClouds(8);
				createRain(40,5,25);
				createWiper();
				createFrost();
			break;
			case "showers":
				createStaticClouds();
//				createSunOrMoon();
				createWhiteClouds(8);
				createRain(40,5,25);
				createWiper();
				createRainbow();
				createFrost();
			break;
			case "hail":
				createStaticClouds();
				createDarkClouds(8);
				createHail(30);
				createFrost();
			break;
			case "sleet":
				createStaticClouds();
				createWhiteClouds(8);
				createRain(0,0,10);
				createSnow(20);
				createWiper();
				createFrost();
			break;
			case "lightsnow":
				createWhiteClouds(8);
//				createSunOrMoon();
				createSnow(35);
				createFrost();
			break;
			case "snow":
				createStaticClouds();
				createWhiteClouds(8);
				createSnow(40);
				createFrost();
			break;
			case "heavysnow":
				createStaticClouds();
				createWhiteClouds(8);
				createSnow(60);
				createFrost();
			break;
			case "wind":
				createSunOrMoon();
				createStars(10);
				createMeteors(2);
				if (Wind_Type == 'dandelion') { createDandelion(); }
				if (Wind_Type == 'windmill') { createWindmill(); }
				createLeaves(13);
				createFrost();
			break;
			case "christmas":
				createWhiteClouds(8);
				createSnow(50);
				createFrost();
			break;
		}
	} else { // BELOW IS THE CONFIGURATION FOR SUPERLITEMODE
		switch (filename) {

		case "clear" :

			createSunOrMoon();

			createStars(5);

			createMeteors(1);
			createMediumBalloons(1);

			createSmallBalloons(2);
			createFrost();

		break;

		case "cloud":

			createStaticClouds();

			createDarkClouds(5);
			createFrost();

		break;

		case "fair":

			createSunOrMoon();

			createStars(5);

			createMeteors(1);

			createFairClouds(2);
			createMediumBalloons(1);

			createSmallBalloons(2);
			createFrost();

		break;

		case "frost":

			createSunOrMoon();

			createStars(5);

			createMeteors(1);
			createFrost();

		break;

		case "fog":

			createSunOrMoon();

			createStars(5);

			createMeteors(1);

			createFog(5);
			createFrost();

		break;

		case "haze":

			createSunOrMoon();

			createStars(5);

			createMeteors(1);

			createHaze(5);
			createFrost();

		break;

		case "partlycloudy":

			createSunOrMoon();

			createStars(5);

			createMeteors(1);

			createWhiteClouds(3);
			createMediumBalloons(1);

			createSmallBalloons(2);
			createFrost();

		break;

		case "mostlycloudy":

			createStaticClouds();

			createSunOrMoon();

			createStars(3);

			createWhiteClouds(5);
			createMediumBalloons(1);

			createSmallBalloons(2);

			createFrost();

		break;

		case "scattered_thunderstorms":

			createStaticClouds();

			createDarkClouds(5);

			createLight(1,1);

			createRain(35,0,25);

			createFrost();

		break;

		case "thunderstorm":

			createStaticClouds();

			createDarkClouds(5);

			createLight(1,1);

			createRain(35,0,25);

			createFrost();

		break;

		case "rain":

			createStaticClouds();

			createDarkClouds(5);

			createRain(35,5,25);

			createWiper();

			createFrost();

		break;

		case "showers":

			createStaticClouds();

//			createSunOrMoon();

			createWhiteClouds(5);

			createRain(35,0,25);

			createRainbow();

			createFrost();

		break;

		case "hail":

			createStaticClouds();

			createDarkClouds(5);

			createHail(20);

			createFrost();

		break;

		case "sleet":

			createStaticClouds();

			createWhiteClouds(5);

			createRain(0,0,5);

			createSnow(15);

			createFrost();

		break;

		case "lightsnow":

			createWhiteClouds(5);

//			createSunOrMoon();

			createSnow(20);

			createFrost();

		break;

		case "snow":
			createStaticClouds();

			createWhiteClouds(5);

			createSnow(30);

			createFrost();

		break;

		case "heavysnow":
			createStaticClouds();

			createWhiteClouds(5);

			createSnow(40);

			createFrost();

		break;

		case "wind":

			createSunOrMoon();

			createStars(5);

			createMeteors(2);

			createLeaves(10);

			createFrost();

		break;

		case "christmas":

			createWhiteClouds(5);

			createSnow(40);

			createFrost();

		break;

		}
	}

}


/* --------------------------------- ALL ELEMENT FUNCTIONS --------------------------------- */

/* ------------------- DON'T TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING ----------------------- */



// STATIC CLOUDS

function createStaticClouds() {

    var image = document.createElement("img");

    image.id = "Static_cloud";	

    image.src = dualP + "Images/" + "Weather/clouds/static/Static_cloud.png";

	document.getElementById("cloudContainer").appendChild(image);

}



// DARK CLOUDS

function createDarkClouds(number) {

	if (number >= 0) { NUMBER_OF_DARK_CLOUDS = number; }
	if (ReverseWind == true) { document.getElementById("cloudContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("cloudContainer").style.webkitTransform = ""; }

	var cloudspeed_factor = (Math.round(obj.windspeed) >= 30) ? 30 : Math.round(obj.windspeed); // Factor between 0 & 30.
	var min_duration = 120 - cloudspeed_factor;
	var max_duration = 220 - cloudspeed_factor;
	for (var i = 0; i < NUMBER_OF_DARK_CLOUDS; i++) {

		var cloudDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/clouds/dark/" + where + "/cloud" + randomInteger(1, NUMBER_OF_CLOUD_IMAGES) + ".png";

		cloudDiv.style.top = pixelValue(randomInteger(-30, cloud_height));

		cloudDiv.style.left = pixelValue(randomInteger(-250, 0));

		cloudDiv.style.webkitAnimationName = "fade_dark_white_clouds, float";

	var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

		cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

		cloudDiv.appendChild(image);

		document.getElementById("cloudContainer").appendChild(cloudDiv);

	}

}



// WHITE CLOUDS

function createWhiteClouds(number) {

	if (number >= 0) { NUMBER_OF_WHITE_CLOUDS = number; }

	if (ReverseWind == true) { document.getElementById("cloudContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("cloudContainer").style.webkitTransform = ""; }
	var cloudspeed_factor = (Math.round(obj.windspeed) >= 40) ? 40 : Math.round(obj.windspeed); // Factor between 0 & 30.
	var min_duration = 120 - cloudspeed_factor;
	var max_duration = 220 - cloudspeed_factor;

	for (var i = 0; i < NUMBER_OF_WHITE_CLOUDS; i++) {

		var cloudDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/clouds/light/" + where + "/cloud" + randomInteger(1, NUMBER_OF_CLOUD_IMAGES) + ".png";

		cloudDiv.style.top = pixelValue(randomInteger(-30, cloud_height));

		cloudDiv.style.left = pixelValue(randomInteger(-250, 0));

		cloudDiv.style.webkitAnimationName = "fade_dark_white_clouds, float";

	var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

		cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

		cloudDiv.appendChild(image);

		document.getElementById("cloudContainer").appendChild(cloudDiv);

	}

}



// FAIR CLOUDS

function createFairClouds(number) {

	if (number >= 0) { NUMBER_OF_FAIR_CLOUDS = number; }

	if (ReverseWind == true) { document.getElementById("cloudContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("cloudContainer").style.webkitTransform = ""; }
	var cloudspeed_factor = (Math.round(obj.windspeed) >= 30) ? 30 : Math.round(obj.windspeed); // Factor between 0 & 30.
	var min_duration = 120 - cloudspeed_factor;
	var max_duration = 220 - cloudspeed_factor;

	for (var i = 0; i < NUMBER_OF_FAIR_CLOUDS; i++) {

		var cloudDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/clouds/light/" + where + "/cloud" + randomInteger(1, NUMBER_OF_CLOUD_IMAGES) + ".png";

		cloudDiv.style.top = pixelValue(randomInteger(-30, cloud_height));

		cloudDiv.style.left = pixelValue(randomInteger(-250, 0));

		cloudDiv.style.webkitAnimationName = "fade_fair_clouds, float";

	var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

		cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

		cloudDiv.appendChild(image);

		document.getElementById("cloudContainer").appendChild(cloudDiv);

	}

}



// FOG

function createFog(number) {

	if (number >= 0) { NUMBER_OF_FOG_CLOUDS = number; }

	if (ReverseWind == true) { document.getElementById("cloudContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("cloudContainer").style.webkitTransform = ""; }
	var cloudspeed_factor = (Math.round(obj.windspeed) >= 30) ? 30 : Math.round(obj.windspeed); // Factor between 0 & 30.
	var min_duration = 40 - cloudspeed_factor;
	var max_duration = 100 - cloudspeed_factor;

	for (var i = 0; i < NUMBER_OF_FOG_CLOUDS; i++) { 

		var cloudDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/fog/fog" + randomInteger(1, NUMBER_OF_FOG_IMAGES) + ".png";

		cloudDiv.style.top = pixelValue(randomInteger(-110, fog_height));

		cloudDiv.style.left = pixelValue(randomInteger(-250, 0));

		cloudDiv.style.webkitAnimationName = "fade_fog_clouds, float";

	var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

		cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

		cloudDiv.appendChild(image);

		document.getElementById("fogContainer").appendChild(cloudDiv);

	}

}



// HAZE

function createHaze(number) {

	if (number >= 0) { NUMBER_OF_HAZE_CLOUDS = number; }

	if (ReverseWind == true) { document.getElementById("cloudContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("cloudContainer").style.webkitTransform = ""; }

	var cloudspeed_factor = (Math.round(obj.windspeed) >= 30) ? 30 : Math.round(obj.windspeed); // Factor between 0 & 30.
	var min_duration = 40 - cloudspeed_factor;
	var max_duration = 75 - cloudspeed_factor;

	for (var i = 0; i < NUMBER_OF_HAZE_CLOUDS; i++) {

		var cloudDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/haze/haze" + randomInteger(1, NUMBER_OF_HAZE_IMAGES) + ".png";

		cloudDiv.style.top = pixelValue(randomInteger(-110, haze_height));

		cloudDiv.style.left = pixelValue(randomInteger(-250, 0));

		cloudDiv.style.webkitAnimationName = "fade_haze_clouds, float";

	var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

		cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

		cloudDiv.appendChild(image);

		document.getElementById("fogContainer").appendChild(cloudDiv);

	}

}



// HAIL

function createHail(number) {

	if (number >= 0) { NUMBER_OF_HAIL_DROPS = number; }

	document.getElementById("dropContainer").style.webkitTransform = "rotate(" + rain_effect + "deg)";

	var distance_min = 0 - Math.abs(rain_effect)*4;
	var distance_max = document.body.offsetWidth -14 + Math.abs(rain_effect)*4;
	var min_duration = 1;
	var max_duration = 2;

	for (var i = 0; i < NUMBER_OF_HAIL_DROPS; i++) {

		var dropDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/drops/hail/drop" + randomInteger(1, NUMBER_OF_HAIL_IMAGES) + ".png";

		dropDiv.style.top = pixelValue(randomInteger(-100, 50));

		dropDiv.style.left = pixelValue(randomInteger(distance_min, distance_max));

		dropDiv.style.webkitAnimationName = "fade_hail, drop";

		var fadeAndDropDuration = durationValue(randomFloat(min_duration, max_duration));

		dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

		var delayDuration = durationValue(randomInteger(1, 10));

		dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

		dropDiv.appendChild(image);

		document.getElementById("dropContainer").appendChild(dropDiv);

	}

}



// MAIN RAIN FUNCTION

function createRain(nbdrops, nbcircles, nbwires) {

	if (ClassicRain == true) { createDrop(nbdrops); }

	if (CircleRain == true) { createCircle(nbcircles); }

	if (WireRain == true) { createWire(nbwires); }

}



// WIRE

function createWire(number) {

	if (number >= 0) { NUMBER_OF_WIRE = number; }

	document.getElementById("wireContainer").style.webkitTransform = "rotate(" + rain_effect + "deg)";

	var distance_min = 0 - Math.abs(rain_effect)*4;
	var distance_max = document.body.offsetWidth -14 + Math.abs(rain_effect)*4;
	var min_duration = 1.8;
	var max_duration = 2.5;

	for (var i = 0; i < NUMBER_OF_WIRE; i++) {

		var dropDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/drops/wire/drop" + randomInteger(1, NUMBER_OF_WIRE_IMAGES) + ".png";

		dropDiv.style.top = pixelValue(randomInteger(-100, 50));

		dropDiv.style.left = pixelValue(randomInteger(distance_min, distance_max));

		dropDiv.style.webkitAnimationName = "fade_wire, drop_wire";

		var fadeAndDropDuration = durationValue(randomFloat(min_duration, max_duration));

		dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

		var delayDuration = durationValue(randomInteger(1, 10));

		dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

		dropDiv.appendChild(image);

		document.getElementById("wireContainer").appendChild(dropDiv);

	}

}

		

// CLASSIC RAIN

function createDrop(number) {

	if (number >= 0) { NUMBER_OF_RAIN_DROPS = number; }

	document.getElementById("dropContainer").style.webkitTransform = "rotate(" + rain_effect + "deg)";

	var distance_min = 0 - Math.abs(rain_effect)*4;
	var distance_max = document.body.offsetWidth -14 + Math.abs(rain_effect)*4;
	var min_duration = 0.5;
	var max_duration = 2.5;

	for (var i = 0; i < NUMBER_OF_RAIN_DROPS; i++) {

		var dropDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/drops/rain/drop" + randomInteger(1, NUMBER_OF_RAIN_IMAGES) + ".png";

		dropDiv.style.top = pixelValue(randomInteger(-100, 50));

		dropDiv.style.left = pixelValue(randomInteger(distance_min, distance_max));

		dropDiv.style.webkitAnimationName = "fade_rain_sleet, drop";

		var fadeAndDropDuration = durationValue(randomFloat(min_duration, max_duration));

		dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

		var delayDuration = durationValue(randomInteger(1, 10));

		dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

		dropDiv.appendChild(image);

		document.getElementById("dropContainer").appendChild(dropDiv);

	}

}



// CIRCLE

function createCircle(number) {

	if (number >= 0) { NUMBER_OF_CIRCLES = number; }
	var distance_left_max = document.body.offsetWidth - 30; 
	var distance_top_max = document.body.offsetHeight - 30; 
	for (var i = 0; i < NUMBER_OF_CIRCLES; i++) {

		var topDiv = pixelValue(randomInteger(20, distance_top_max));

		var leftDiv = pixelValue(randomInteger(20, distance_left_max));

		var fadeAndDropDuration = durationValue(randomFloat(2, 4));

		var delayDuration = durationValue(randomInteger(1, 10));

		var NumCircle = randomInteger(2, NUMBER_OF_CIRCLE_IMAGES);

		for (var t = 1; t <5; t++) {

			var circleDiv = document.createElement("div");

			var image = document.createElement("img");

			circleDiv.style.top = topDiv;

			circleDiv.style.left = leftDiv;

			if (t == 1) { image.src = dualP + "Images/" + "Weather/drops/circle/circle1.png"; }

			else { image.src = dualP + "Images/" + "Weather/drops/circle/circle" + NumCircle + ".png"; }

			circleDiv.style.webkitAnimationName = "fade" + t + ", scale" + t;

			circleDiv.style.webkitAnimationDuration = fadeAndDropDuration + "," + fadeAndDropDuration;

			circleDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

			circleDiv.appendChild(image);

			document.getElementById("circleContainer").appendChild(circleDiv);

		}

	}	

}



// SLEET

function createSleet(number) {

	if (number >= 0) { NUMBER_OF_SLEET = number; }

	document.getElementById("dropContainer").style.webkitTransform = "rotate(" + rain_effect + "deg)";

	var distance_min = 0 - Math.abs(rain_effect)*4;
	var distance_max = document.body.offsetWidth -14 + Math.abs(rain_effect)*4;
	var min_duration = 1.5;
	var max_duration = 3;

	for (var i = 0; i < NUMBER_OF_SLEET; i++) {

		var dropDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/drops/sleet/drop" + randomInteger(1, NUMBER_OF_SLEET_IMAGES) + ".png";

		dropDiv.style.top = pixelValue(randomInteger(-100, 50));

		dropDiv.style.left = pixelValue(randomInteger(distance_min, distance_max));

		dropDiv.style.webkitAnimationName = "fade_rain_sleet, drop";

		var fadeAndDropDuration = durationValue(randomFloat(min_duration, max_duration));

		dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

		var delayDuration = durationValue(randomInteger(1, 10));

		dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

		dropDiv.appendChild(image);

		document.getElementById("dropContainer").appendChild(dropDiv);

	}

}



// SNOW

function createSnow(number) {

	if (number >= 0) { NUMBER_OF_SNOW = number; }

	document.getElementById("dropContainer").style.webkitTransform = "rotate(" + rain_effect + "deg)";

	var distance_min = 0 - Math.abs(rain_effect)*4;
	var distance_max = document.body.offsetWidth -14 + Math.abs(rain_effect)*4;
	var min_duration = 4;
	var max_duration = 10;

	for (var i = 0; i < NUMBER_OF_SNOW; i++) {

		var dropDiv = document.createElement("div");

		var image = document.createElement("img");

		image.src = dualP + "Images/" + "Weather/drops/snow/snow" + randomInteger(1, NUMBER_OF_SNOW_IMAGES) + ".png";

		dropDiv.style.top = pixelValue(randomInteger(-100, 50));

		dropDiv.style.left = pixelValue(randomInteger(distance_min, distance_max));

		dropDiv.style.webkitAnimationName = "fade_snow, drop";

		var fadeAndDropDuration = durationValue(randomFloat(min_duration, max_duration));

		dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

		var delayDuration = durationValue(randomInteger(1, 10));

		dropDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

		dropDiv.appendChild(image);

		document.getElementById("dropContainer").appendChild(dropDiv);

	}

}



// FROST

function createFrost() {

	if ((Start_frost == true) || (filename == "frost")) {

		var image = document.createElement("img");

		image.id = "frost";	

		image.src = dualP + "Images/" + "Weather/frost/frost.png";

		document.getElementById("fogContainer").appendChild(image);

		Show_frost = true;

	}

}



// LIGHTNING

function createLight(nbthunders, nblights) {

	if (nbthunders >= 0) { NUMBER_OF_THUNDERS = nbthunders; }

	if (nblights >= 0) { NUMBER_OF_LIGHTS = nblights; }

	delelement("frameContainer");

	for (var i = 0; i < NUMBER_OF_THUNDERS; i++) {

		var thunderDiv = document.createElement("div");

		var image = document.createElement("img");

		var thunderNumber = randomInteger(1, NUMBER_OF_THUNDER_IMAGES);

		image.src = dualP + "Images/" + "Weather/lightnings/Thunder" + thunderNumber + ".png";
		thunderDiv.style.top = "0px";

		thunderDiv.style.left = "0px";

		var ThunderAnimationName = (Math.random() < 0.5) ? "thunder_animation1" : "thunder_animation2";

		thunderDiv.style.webkitAnimationName = ThunderAnimationName;

		thunderDiv.style.webkitAnimationDuration = durationValue(randomInteger(3, 6));

		thunderDiv.style.webkitAnimationDelay = durationValue(randomInteger(12, 20));

		thunderDiv.appendChild(image);

		document.getElementById("frameContainer").appendChild(thunderDiv);

	}

	for (var i = 0; i < NUMBER_OF_LIGHTS; i++) {

		var lightDiv = document.createElement("div");

		var image = document.createElement("img");

		var lightNumber = randomInteger(1, NUMBER_OF_LIGHT_IMAGES);

		image.src = dualP + "Images/" + "Weather/lightnings/Light" + lightNumber + ".png";

		lightDiv.style.top = "0px";

		lightDiv.style.left = "0px";

		var ThunderAnimationName = (Math.random() < 0.5) ? "thunder_animation1" : "thunder_animation2";

		lightDiv.style.webkitAnimationName = ThunderAnimationName;

		lightDiv.style.webkitAnimationDuration = durationValue(randomInteger(4, 8));

		lightDiv.style.webkitAnimationDelay = durationValue(randomInteger(11, 25));

		lightDiv.appendChild(image);

		document.getElementById("frameContainer").appendChild(lightDiv);

	}

	lightningTimer = setTimeout("createLight(NUMBER_OF_THUNDERS, NUMBER_OF_LIGHTS)", 30000);

}



// METEORS

function createMeteors(number) {

	if (where == "night") {

	if (number >= 0) { NUMBER_OF_METEORS = number; }

		delelement("meteorContainer");
		var distance_left_max = document.body.offsetWidth - 20;
		for (var i = 0; i < NUMBER_OF_METEORS; i++) {

			var meteorDiv = document.createElement("div");

			var image = document.createElement("img");

			var meteorNumber = randomInteger(1, NUMBER_OF_METEOR_IMAGES);

			image.src = dualP + "Images/" + "Weather/meteors/meteor" + meteor_fall + meteorNumber + ".png";

			meteorDiv.style.top = pixelValue(randomInteger(-5, 80));

			meteorDiv.style.left = pixelValue(randomInteger(0, distance_left_max));

			meteorDiv.style.webkitAnimationName = "fade_meteor, drop_meteor" + meteor_fall + meteorNumber;

			var fadeAndDropDuration = durationValue(randomFloat(1, 3));

			meteorDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;

			var delayDuration = durationValue(randomInteger(1, 7));

			meteorDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

			meteorDiv.appendChild(image);

			document.getElementById("meteorContainer").appendChild(meteorDiv);

		}

	meteorTimer = setTimeout("createMeteors(NUMBER_OF_METEORS)", 15000);

	}

}



// STARS

function createStars(number) {

	if (where == "night") {

		if (number >= 0) { NUMBER_OF_STARS = number; }

		var image = document.createElement("img");

		image.id = "Static_stars";	

		image.src = dualP + "Images/" + "Weather/stars/StarsBG.png";

		document.getElementById("starContainer").appendChild(image);
		var distance_left_max = document.body.offsetWidth - 15;

		for (var i = 0; i < NUMBER_OF_STARS; i++) { 

			var starDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/stars/star" + randomInteger(1, NUMBER_OF_STAR_IMAGES) + ".png";

			starDiv.style.top = pixelValue(randomInteger(5, 95));

			starDiv.style.left = pixelValue(randomInteger(-5, distance_left_max));

			starDiv.style.webkitAnimationName =  "star_anim";

			starDiv.style.webkitAnimationDuration = durationValue(randomInteger(5, 20));

			starDiv.style.webkitAnimationDelay = durationValue(randomInteger(1, 10));

			starDiv.appendChild(image);

			document.getElementById("starContainer").appendChild(starDiv);

		}

	}

}



// DANDELION

function createDandelion() {

	if ((Start_wind_effects == true) || (filename == "wind")) {
		if (ReverseWind == true) { document.getElementById("dandelionContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("dandelionContainer").style.webkitTransform = ""; }

		if (Use_Dacals_Dandelion == true) { var dandy = "Dacals_Dandelion/"; } else { var dandy = "Ians_Dandelion/"; }
		var min_duration = 5;
		var max_duration = 12;
		for (var i = 0; i < NUMBER_OF_SEEDS/2; i++) {

			var cloudDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/wind/" + dandy + where + "/seed" + randomInteger(1, NUMBER_OF_SEED_IMAGES) + ".png";
			var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";

			if (spinAnimationName == "clockwiseSpin") {

				cloudDiv.style.bottom = pixelValue(randomInteger(10, 140));

				cloudDiv.style.left = pixelValue(randomInteger(-80, -50));

				cloudDiv.style.webkitAnimationName = "fade_seed, float_seed";

				} else {

				cloudDiv.style.bottom = pixelValue(randomInteger(-20, 60));

				cloudDiv.style.left = pixelValue(randomInteger(-40, -50));

				cloudDiv.style.webkitAnimationName = "fade_seed, float_seed2";

			}

			image.style.webkitAnimationName = spinAnimationName;

			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

			cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

			image.style.webkitAnimationDuration = fadeAndfloatDuration;

			var delayDuration = durationValue(randomInteger(0, 7));

			cloudDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

			image.style.webkitAnimationDelay = delayDuration;

			cloudDiv.appendChild(image);

			document.getElementById("dandelionContainer").appendChild(cloudDiv);

		}

		var image = document.createElement("img");

		image.id = "dandelion";

	    image.src = dualP + "Images/" + "Weather/wind/" + dandy + where + "/dandelion.png";
		document.getElementById("dandelionContainer").appendChild(image);

		for (var i = 0; i < NUMBER_OF_SEEDS/2; i++) {

			var cloudDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/wind/" + dandy + where + "/seed" + randomInteger(1, NUMBER_OF_SEED_IMAGES) + ".png";
			var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";

			if (spinAnimationName == "clockwiseSpin") {

				cloudDiv.style.bottom = pixelValue(randomInteger(20, 80));

				cloudDiv.style.left = pixelValue(randomInteger(-70, -50));

				cloudDiv.style.webkitAnimationName = "fade_seed, float_seed";

				} else {

				cloudDiv.style.bottom = pixelValue(randomInteger(-40, 80));

				cloudDiv.style.left = pixelValue(randomInteger(-200, -100));

				cloudDiv.style.webkitAnimationName = "fade_seed, float_seed2";

			}

			image.style.webkitAnimationName = spinAnimationName;

			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

			cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

			image.style.webkitAnimationDuration = fadeAndfloatDuration;

			var delayDuration = durationValue(randomInteger(0, 7));

			cloudDiv.style.webkitAnimationDelay = delayDuration +", " + delayDuration;

			image.style.webkitAnimationDelay = delayDuration;

			cloudDiv.appendChild(image);

			document.getElementById("dandelionContainer").appendChild(cloudDiv);

		} 

	Show_Wind_Effects = true;

	}

}



// LEAVES

function createLeaves(number) {

	if ((Start_wind_effects == true) || (filename == "wind")) {
		if (ReverseWind == true) { document.getElementById("leafContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("leafContainer").style.webkitTransform = ""; }

		if (number >= 0) { NUMBER_OF_LEAVES = number; }
		var min_duration = 5;
		var max_duration = 13;
		var distance_top_max = document.body.offsetHeight - 60; 

		for (var i = 1; i < NUMBER_OF_LEAVES; i++) {

			var cloudDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/wind/leaves/cloud" + randomInteger(1, NUMBER_OF_LEAF_IMAGES) + ".png";

			cloudDiv.style.top = pixelValue(randomInteger(20, distance_top_max));

			cloudDiv.style.left = pixelValue(randomInteger(-180, 0));

			var spinAnimationName = (Math.random() < 0.0) ? "clockwiseSpin_leaves" : "counterclockwiseSpin_leaves";

			cloudDiv.style.webkitAnimationName = "fade_leaves, float_leaves";

			image.style.webkitAnimationName = spinAnimationName;

			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

			var spinDuration = durationValue(randomFloat(1, 4));

			cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;

			image.style.webkitAnimationDuration = spinDuration;

			cloudDiv.appendChild(image);

			document.getElementById("leafContainer").appendChild(cloudDiv);

		}

	Show_Wind_Effects = true;

	}

}

// WINDMILL
function createWindmill() {
	if ((Start_wind_effects == true) || (filename == "wind")) {
		var container = document.getElementById("windmillContainer");
		container.appendChild(createAwindmill());
		container.appendChild(createAwings());

		function createAwindmill() {
		var image = document.createElement("img");
		image.id = "windmill";
		image.src = dualP + "Images/" + "Weather/windmill/"+where+"/windmill.png";
		return image;
		}

		function createAwings() {
		var image = document.createElement("img");
		image.id = "wings";
		image.src = dualP + "Images/" + "Weather/windmill/"+where+"/wings.png";
		return image;
		}
	Show_Wind_Effects = true;
	}

}
	

// WIPER

function createWiper() {

	if (ShowWiper == true) {

		var image = document.createElement("img");

		image.id = "wiper";	

		image.src = dualP + "Images/" + "Weather/wiper/wiper.png";

		document.getElementById("wiperContainer").appendChild(image);

		var image = document.createElement("img");

		image.id = "trace";

		image.src = dualP + "Images/" + "Weather/wiper/wiper_trace.png";

		document.getElementById("wiperContainer").appendChild(image);

		var image = document.createElement("img");

		image.id = "water";

		image.src = dualP + "Images/" + "Weather/wiper/wiper_water.png";

		document.getElementById("wiperContainer").appendChild(image);

	}

}



// RAINBOW

function createRainbow() {

	if ((where == "day") && (ShowRainbow == true)){

		var image = document.createElement("img");

		image.id = "rainbow";	

		image.src = dualP + "Images/" + "Weather/rainbow/rainbow.png";

		document.getElementById("rainbowContainer").appendChild(image);

	}

}

// BIRDS

function createBirds() {

	if (where == "day") {

		if (Show_Birds == true) {

			var image = document.createElement("img");

			image.id = "Birds";	

			image.src = dualP + "Images/" + "Weather/birds/Birds.gif";

			document.getElementById("birdsContainer").appendChild(image);

		}

	}
}



// ASTRONAUT

function createAastronaut() {

	if ((where == "night") && (ShowAstronaut == true)) {

		var image = document.createElement("img");

		image.id = "astronaut"; 
		if (Homer_is_astronaut == true) {
		    image.src = dualP + "Images/" + "Weather/astronaut/Homerastronaut.png";
		} else {

		    image.src = dualP + "Images/" + "Weather/astronaut/astronaut.png";
		}

		document.getElementById("astronautContainer").appendChild(image);

	}

}


// BALLONS



function createBigBalloons(number) {
	if ((where == "day") && (ShowBigBalloons == true)) {
		if (number >= 0) { NUMBER_OF_BIG_BALLOONS = number; }
		if (ReverseWind == true) { document.getElementById("big_balloonContainer").style.webkitTransform = "scaleX(-1)"; }
		else { document.getElementById("big_balloonContainer").style.webkitTransform = ""; }
		var balloonspeed_factor = (Math.round(obj.windspeed) >= 50) ? 50 : Math.round(obj.windspeed); // Factor between 0 & 50.
		var min_duration = 140 - balloonspeed_factor;
		var max_duration = 200 - balloonspeed_factor;
		for (var i = 0; i < NUMBER_OF_BIG_BALLOONS; i++) {
			var big_balloonDiv = document.createElement("div");
			var image = document.createElement("img");
			image.src = dualP + "Images/" + "Weather/balloons/big_balloons/balloon" + randomBigBalloon(NUMBER_OF_BIG_BALLOON_IMAGES) + ".png";
			big_balloonDiv.style.top = pixelValue(randomInteger(-30, 20));
			big_balloonDiv.style.left = pixelValue(randomInteger(-100, 0));
			//big_balloonDiv.style.left = pixelValue(LeftPositionOfBigBalloon());
			big_balloonDiv.style.webkitAnimationName = "balloon_float";
			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));
			big_balloonDiv.style.webkitAnimationDuration = fadeAndfloatDuration;
			big_balloonDiv.appendChild(image);
			document.getElementById("big_balloonContainer").appendChild(big_balloonDiv);
		}
	}
}

function createMediumBalloons(number) {

	if ((where == "day") && (ShowMediumBalloons == true)) {
		if (number >= 0) { NUMBER_OF_MEDIUM_BALLOONS = number; }
		if (ReverseWind == true) { document.getElementById("medium_balloonContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("medium_balloonContainer").style.webkitTransform = ""; }		
		var balloonspeed_factor = (Math.round(obj.windspeed) >= 50) ? 50 : Math.round(obj.windspeed); // Factor between 0 & 50.
		var min_duration = 200 - balloonspeed_factor;
		var max_duration = 270 - balloonspeed_factor;

		for (var i = 0; i < NUMBER_OF_MEDIUM_BALLOONS; i++) {

			var medium_balloonDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/balloons/medium_balloons/balloon" + randomMediumBalloon(NUMBER_OF_MEDIUM_BALLOON_IMAGES) + ".png";

			medium_balloonDiv.style.top = pixelValue(randomInteger(0, 30));
			medium_balloonDiv.style.left = pixelValue(randomInteger(-100, 0));

			//medium_balloonDiv.style.left = pixelValue(LeftPositionOfMediumBalloon());

			medium_balloonDiv.style.webkitAnimationName = "balloon_float";

			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

			medium_balloonDiv.style.webkitAnimationDuration = fadeAndfloatDuration;
			medium_balloonDiv.appendChild(image);

			document.getElementById("medium_balloonContainer").appendChild(medium_balloonDiv);

		}

	}

}



function createSmallBalloons(number) {

	if ((where == "day") && (ShowSmallBalloons == true)) {

		if (number >= 0) { NUMBER_OF_SMALL_BALLOONS = number; }
		if (ReverseWind == true) { document.getElementById("small_balloonContainer").style.webkitTransform = "scaleX(-1)"; } else { document.getElementById("small_balloonContainer").style.webkitTransform = ""; }
		var balloonspeed_factor = (Math.round(obj.windspeed) >= 50) ? 50 : Math.round(obj.windspeed); // Factor between 0 & 50.
		var min_duration = 270 - balloonspeed_factor;
		var max_duration = 340 - balloonspeed_factor;

		for (var i = 0; i < NUMBER_OF_SMALL_BALLOONS; i++) {

			var small_balloonDiv = document.createElement("div");

			var image = document.createElement("img");

			image.src = dualP + "Images/" + "Weather/balloons/small_balloons/balloon" + randomSmallBalloon(NUMBER_OF_SMALL_BALLOON_IMAGES) + ".png";

			small_balloonDiv.style.top = pixelValue(randomInteger(5, 40));
			small_balloonDiv.style.left = pixelValue(randomInteger(-100, 0));

			//small_balloonDiv.style.left = pixelValue(LeftPositionOfSmallBalloon());

			small_balloonDiv.style.webkitAnimationName = "balloon_float";

			var fadeAndfloatDuration = durationValue(randomFloat(min_duration, max_duration));

			small_balloonDiv.style.webkitAnimationDuration = fadeAndfloatDuration;
			small_balloonDiv.appendChild(image);
			document.getElementById("small_balloonContainer").appendChild(small_balloonDiv);

		}

	}

}



function randomBigBalloon(nb_of_balloons) {
	if (nb_big_ballons.length == 0) { for (var i=0; i < nb_of_balloons - 1; i++) { nb_big_ballons[i] = i+1; }} // INITIALIZE THE ARRAY
	do {
		var nb = Math.floor(Math.random() * nb_big_ballons.length);
		var balloon_number = nb_big_ballons[nb];
	} while (balloon_number == prev_big_ballon_number);
	prev_big_ballon_number = balloon_number;
	nb_big_ballons.splice(nb,1);
	return balloon_number;
}

function randomMediumBalloon(nb_of_balloons) {
	if (nb_medium_ballons.length == 0) { for (var i=0; i < nb_of_balloons - 1; i++) { nb_medium_ballons[i] = i+1; }} // INITIALIZE THE ARRAY
	do {
		var nb = Math.floor(Math.random() * nb_medium_ballons.length);
		var balloon_number = nb_medium_ballons[nb];
	} while (balloon_number == prev_medium_ballon_number);
	prev_medium_ballon_number = balloon_number;
	nb_medium_ballons.splice(nb,1);
	return balloon_number;
}

function randomSmallBalloon(nb_of_balloons) {
	if (nb_small_ballons.length == 0) { for (var i=0; i < nb_of_balloons - 1; i++) { nb_small_ballons[i] = i+1; }} // INITIALIZE THE ARRAY
	do {
		var nb = Math.floor(Math.random() * nb_small_ballons.length);
		var balloon_number = nb_small_ballons[nb];
	} while (balloon_number == prev_small_ballon_number);
	prev_small_ballon_number = balloon_number;
	nb_small_ballons.splice(nb,1);
	return balloon_number;
}

// SUN OR MOON

function createSunOrMoon() {

	if (realMoon == true) {

		if (ShowMoon == true) {

			if (time_to_change_wall < moonrisehour) { var time_to_change_wall_tmp2 = time_to_change_wall + 24; } else { var time_to_change_wall_tmp2 = time_to_change_wall; }

			var pRotate = Math.abs((reversemove - (time_to_change_wall_tmp2 - moonrisehour) / DurationOfMoon) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			var moonContainerDiv = document.createElement("div");

			var moonDiv = document.createElement("div");

			var moonrayDiv = document.createElement("div");

			moonContainerDiv.id = "moonContainer";

			moonDiv.id = "moon";

			moonrayDiv.id = "moonray";

			moonDiv.style.backgroundImage = "url(" + dualP + "Images/" + "Weather/moon/" + obj.moonphase[0]  + ".png)";

			if (where == "day") {

				moonContainerDiv.style.opacity = "0.4";

				} else {

				moonContainerDiv.style.opacity = "1.0";

			}

			moonContainerDiv.appendChild(moonDiv);

			moonContainerDiv.appendChild(moonrayDiv);

			moonContainerDiv.style.webkitTransform	= "rotate(" + pRotate + "deg)";

			document.getElementById("sun_moonContainer").appendChild(moonContainerDiv);

		}

		

		if (where == "day") {

			var pRotate = Math.abs((reversemove - (time_to_change_wall - dayhour) / DurationOfDay) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			var sunContainerDiv = document.createElement("div");

			var sunDiv = document.createElement("div");

			var sunrayDiv = document.createElement("div");

			sunContainerDiv.id = "sunContainer";
			sunDiv.id = (Dacals_Sun == true) ? "Dacalsun" : "sun";

			sunrayDiv.id = "sunray";

			if (twilight == true) {

				if (((time_to_change_wall >= dayhour) && (time_to_change_wall - dayhour <= 0.5)) || ((time_to_change_wall < nighthour) && (nighthour - time_to_change_wall <= 0.5))) {

					sunDiv.style.webkitFilter = "hue-rotate(310deg) saturate(2.5)";

					document.getElementById("twilightBG").className = "fade-in";

					} else {

					sunDiv.style.webkitFilter = "none";

					document.getElementById("twilightBG").className = "fade-out";

				}

			}

			sunContainerDiv.appendChild(sunDiv);

			sunContainerDiv.appendChild(sunrayDiv);

			sunContainerDiv.style.webkitTransform  = "rotate(" + pRotate + "deg)";

			document.getElementById("sun_moonContainer").appendChild(sunContainerDiv);		

		} else {

			document.getElementById("twilightBG").className = "fade-out";

		}

	} else {

		if (where == "night") {

			document.getElementById("twilightBG").className = "fade-out";

			if (time_to_change_wall < dayhour) { time_to_change_wall = time_to_change_wall +24 };

			var pRotate = Math.abs((reversemove - (time_to_change_wall - nighthour) / DurationOfNight) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			var moonContainerDiv = document.createElement("div");

			var moonDiv = document.createElement("div");

			var moonrayDiv = document.createElement("div");

			moonContainerDiv.id = "moonContainer";

			moonDiv.id = "moon";

			moonrayDiv.id = "moonray";

			moonDiv.style.backgroundImage = "url(" + dualP + "Images/" + "Weather/moon/" + obj.moonphase[0] + ".png)";

			moonContainerDiv.appendChild(moonDiv);

			moonContainerDiv.appendChild(moonrayDiv);

			moonContainerDiv.style.webkitTransform	= "rotate(" + pRotate + "deg)";

			document.getElementById("sun_moonContainer").appendChild(moonContainerDiv);

		} else {

			var pRotate = Math.abs((reversemove - (time_to_change_wall - dayhour) / DurationOfDay) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			var sunContainerDiv = document.createElement("div");

			var sunDiv = document.createElement("div");

			var sunrayDiv = document.createElement("div");

			sunContainerDiv.id = "sunContainer";

			sunDiv.id = (Dacals_Sun == true) ? "Dacalsun" : "sun";

			sunrayDiv.id = "sunray";

			if (twilight == true) {

				if (((time_to_change_wall >= dayhour) && (time_to_change_wall - dayhour <= 0.5)) || ((time_to_change_wall < nighthour) && (nighthour - time_to_change_wall <= 0.5))) {

					sunDiv.style.webkitFilter = "hue-rotate(310deg) saturate(2.5)";

					document.getElementById("twilightBG").className = "fade-in";

					} else {

					sunDiv.style.webkitFilter = "none";

					document.getElementById("twilightBG").className = "fade-out";

				}

			}

			sunContainerDiv.appendChild(sunDiv);

			sunContainerDiv.appendChild(sunrayDiv);

			sunContainerDiv.style.webkitTransform  = "rotate(" + pRotate + "deg)";

			document.getElementById("sun_moonContainer").appendChild(sunContainerDiv);

		}

	}

	ShowSunOrMoon = true;	

}



function moveSunOrMoon() {

	if (realMoon == true) {

		if (ShowMoon == true) {

			if (time_to_change_wall < moonrisehour) { var time_to_change_wall_tmp2 = time_to_change_wall + 24; } else { var time_to_change_wall_tmp2 = time_to_change_wall; }

			var pRotate = Math.abs((reversemove - (time_to_change_wall_tmp2 - moonrisehour) / DurationOfMoon) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			document.getElementById("moonContainer").style.webkitTransform	= "rotate(" + pRotate + "deg)";

			if (where == "day") {

				document.getElementById("moonContainer").style.opacity = "0.4";

			} else {

				document.getElementById("moonContainer").style.opacity = "1.0";

			}

		}



		if (where == "day") {

			var pRotate = Math.abs((reversemove - (time_to_change_wall - dayhour) / DurationOfDay) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			document.getElementById("sunContainer").style.webkitTransform  = "rotate(" + pRotate + "deg)";

			if (twilight == true) {

				if (((time_to_change_wall >= dayhour) && (time_to_change_wall - dayhour <= 0.5)) || ((time_to_change_wall < nighthour) && (nighthour - time_to_change_wall <= 0.5))) {

					document.getElementById("sun").style.webkitFilter = "hue-rotate(310deg) saturate(2.5)";

					document.getElementById("twilightBG").className = "fade-in";

					} else {

					document.getElementById("sun").style.webkitFilter = "none";

					document.getElementById("twilightBG").className = "fade-out";

				}

			}

		} else {

			document.getElementById("twilightBG").className = "fade-out";	

		}

	} else {

		if (where == "night") {

			document.getElementById("twilightBG").className = "fade-out";

			if (time_to_change_wall < dayhour) { time_to_change_wall = time_to_change_wall +24 };

			var pRotate = Math.abs((reversemove - (time_to_change_wall - nighthour) / DurationOfNight) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			document.getElementById("moonContainer").style.webkitTransform	= "rotate(" + pRotate + "deg)";

		} else {

			var pRotate = Math.abs((reversemove - (time_to_change_wall - dayhour) / DurationOfDay) * 80) - 40; // ROTATE FROM -40 DEG TO +40 DEG

			document.getElementById("sunContainer").style.webkitTransform  = "rotate(" + pRotate + "deg)";

			if (twilight == true) {

				if (((time_to_change_wall >= dayhour) && (time_to_change_wall - dayhour <= 0.5)) || ((time_to_change_wall < nighthour) && (nighthour - time_to_change_wall <= 0.5))) {

					document.getElementById("sun").style.webkitFilter = "hue-rotate(310deg) saturate(2.5)";

					document.getElementById("twilightBG").className = "fade-in";

					} else {

					document.getElementById("sun").style.webkitFilter = "none";

					document.getElementById("twilightBG").className = "fade-out";

				}

			}

		}

	}

}

