// touch(event) by am80ma (TeamIOS)
<!--  Modded by D-Shin (TeamIOS) -->
// don´t touch this header punk!!!

'use strict'
	var $$ = function(el){
	return document.getElementById(el);
}

	
var Xtouch = false;
function touch1() {
    
    if(Xtouch){
	Xtouch=false;
    $$("home").style.opacity = "1.0";
	$$("forecastContainer").style.opacity = "0.0";
	$$("Moonphase").style.opacity = "0.0";
	$$("MediaPlayer").style.opacity = "0.0";
	
	}else{
	Xtouch=true;
	$$("home").style.opacity = "1.0";
	$$("forecastContainer").style.opacity = "0.0";
	$$("Moonphase").style.opacity = "0.0";
	$$("MediaPlayer").style.opacity = "0.0";
		
}}

var ytouch = false;
function touch2() {
	
	if(ytouch){
	ytouch=false;
	$$("forecastContainer").style.opacity = "1.0";
	$$("home").style.opacity = "0.0";
	$$("Moonphase").style.opacity = "0.0";
	$$("MediaPlayer").style.opacity = "0.0";

	}else{
	ytouch=true;
    $$("forecastContainer").style.opacity = "1.0";	
	$$("home").style.opacity = "0.0";
	$$("Moonphase").style.opacity = "0.0";
	$$("MediaPlayer").style.opacity = "0.0";
		
}}

var ztouch = false;
function touch3() {
	
	if(ztouch){
	ztouch=false;
	$$("Moonphase").style.opacity = "1.0";
	$$("forecastContainer").style.opacity = "0.0";	
	$$("home").style.opacity = "0.0";   
	$$("MediaPlayer").style.opacity = "0.0";
		
	}else{
	ztouch=true;
	$$("Moonphase").style.opacity = "1.0";	
	$$("forecastContainer").style.opacity = "0.0";
    $$("home").style.opacity = "0.0";
	$$("MediaPlayer").style.opacity = "0.0";
		
}}

var atouch = false;
function touch4() {
	
	if(atouch){
	atouch=false;
	$$("MediaPlayer").style.opacity = "1.0";
	$$("Moonphase").style.opacity = "0.0";
	$$("forecastContainer").style.opacity = "0.0";	
	$$("home").style.opacity = "0.0";   
	
	}else{
	atouch=true;
	$$("MediaPlayer").style.opacity = "1.0";
	$$("Moonphase").style.opacity = "0.0";	
	$$("forecastContainer").style.opacity = "0.0";
    $$("home").style.opacity = "0.0";
		
}}
