var xmlDown = false;
var Celsius = false;
var ampm = true;

function doWorkaround() {
	if (xmlDown == true) {
		if (iOS == true) {
			var urljson = "file:///private/var/mobile/Documents/raw.json";
		} else {
			if (currentDoc == "index.html") {
				var urljson = "test_files/raw.json";
			} else {
				var urljson = "AnemoneHTML/test_files/raw.json";
			}
		}
		$.getJSON(urljson, function(data) {		  
			obj.icon = data.conditionsshort.observation.wx_icon;
			obj.code[0] = obj.icon; //live forecast
			obj.temp = (Celsius == true) ? data.conditionsshort.observation.metric.temp * 1 : data.conditionsshort.observation.imperial.temp *1;
			obj.realFeel = (Celsius == true) ? data.conditionsshort.observation.metric.feels_like *1 : data.conditionsshort.observation.imperial.feels_like *1;
			if ((weatherAPI == "default") && (lang != "am") && (lang != "en")) {
				obj.desc = WeatherDesc[obj.code[0]];
			} else {
				obj.desc = data.conditionsshort.observation.wx_phrase;
			}
			obj.direction = data.conditionsshort.observation.wdir_cardinal;
			obj.windspeed = (Celsius == true) ? data.conditionsshort.observation.metric.wspd : data.conditionsshort.observation.imperial.wspd; windsspeedunit = "ll";
			obj.high[0] = (Celsius == true) ? (data.fcstdaily10short.forecasts[0].metric.max_temp) * 1 : Math.round(data.fcstdaily10short.forecasts[0].metric.max_temp * 9/5 + 32);
			obj.low[0] = (Celsius == true) ? (data.fcstdaily10short.forecasts[0].metric.min_temp) * 1 : Math.round(data.fcstdaily10short.forecasts[0].metric.min_temp * 9/5 + 32);
			obj.sunrise[0] = ConvertHours(data.fcstdaily10short.forecasts[0].sunrise.split('T')[1]);
			obj.sunset[0] = ConvertHours(data.fcstdaily10short.forecasts[0].sunset.split('T')[1]);
		
		
		
			dealWithWeather(obj);		
		});
	}
}

function getLiveUpdate () {
	if (ampm == true){
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
	} else {
		d=new Date();
		var year=d.getFullYear();
		var month=d.getMonth();
		month =month+1; //month are displayed from 0 to 11, hence the +1
		var day=d.getDate();
		var hour=d.getHours();
		var minute=d.getMinutes();
		var second=d.getSeconds();
		if (hour<10) hour="0"+hour;
		if (minute<10) minute="0"+minute;
		if (second<10) second="0"+second;
		if (month<10) month="0"+month;
		if (day<10) day="0"+day;
		obj.updatetimestring =(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
	}
}