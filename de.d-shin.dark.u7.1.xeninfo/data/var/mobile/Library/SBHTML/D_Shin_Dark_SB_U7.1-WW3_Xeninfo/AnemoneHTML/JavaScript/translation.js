// UniAW7.1 from Ian Nicoll & Dacal

// TRANSLATION FOR MAIN ELEMENTS, BASED ON UNIAW 6.3
// EXPANDED by NewD
// EXPANDED by D-Shin
// EXPANDED by Uhoffi



switch (lang) {
	case "no": 
	    var touch1text = "Home";
		var touch2text = "Weather";
		var touch3text = "info";
		var days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
		var sdays = ["Sø", "Ma", "Ti", "On", "To", "Frg", "Lør"];
		var months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
		var hightext = "Høy ";
		var lowtext = "Lav ";
		var sunrisetext ="Soloppgang";
		var sunsettext = "Solnedgang";
		var moonrisetext ="Måneoppgang";
		var moonsettext = "Månenedgang";		
		var feelsliketext = "Føles som ";
		var pressuretext = "Lufttrykk ";
		var lastupdatetext = "Oppdatert ";
		var xmlupdatetext = "Oppdatert kl ";
		var visibilitytext = "Sikt";
		var humiditytext = "Luftfuktighet ";
		var windtext = "Vind ";
		var UVIndextext = "UV ";
		var Dewpointtext = "Duggpunkt ";
        var forecasttext = "Varsel";
		var nowindtext = "Vindstille";
		var wsutextimp = "m/t";
		var wsutextmet = "km/t";
		var gusttext = "Vindkast";
		var datatext = "Datakilde";
		var nighttext = " kveld";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tropisk storm",
			"Orkan",
			"Kraftige tordenbyger",
			"Tordenbyger",
			"Blandet Regn og snø",
			"Blandet regn og sludd",
			"Blandet snø og sludd",
			"Underkjølt duskregn",
			"Duskregn",
			"Underkjølt regn",
			"Regnbyger",
			"Regn",
			"Snøbyger",
			"Lette snøbyger",
			"Snøfokk",
			"Snø",
			"Hagl",
			"Sludd",
			"Støv",
			"Tåke",
			"Dis",
			"Røykfylt",
			"Mye Vind",
			"Vindkuler",
			"Frost",
			"Skyet ",
			"Muligheter for regn",
			"Muligheter for regn",
			"Delvis skyet",
			"Delvis skyet",
			"Klart",
			"Solskinn",
			"Det meste klart",
			"For det meste sol",
			"Blandet regn og hagl",
			"Varmt",
			"Isolerte tordenbyger",
			"Spredte tordenbyger",
			"Spredte tordenbyger",
			"Spredte regnbyger",
			"Kraftig snøfall",
			"Spredte snøbyger",
			"Kraftig snøfall",
			"Delvis skyet",
			"Regn og torden",
			"Snøbyger",
			"Isolerte regn og torden",
			"ikke mottak"];
	break;
	case "fr":
	    var touch1text = "Maison";
		var touch2text = "Temps";
		var touch3text = "d'info";
		var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
		var sdays = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];
		var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
		var hightext = "Max ";
		var lowtext = "Min ";
		var sunrisetext = "Lever";
		var sunsettext = "Coucher";
		var moonrisetext ="Lev.&nbsp;(lune)";
		var moonsettext = "Couc.&nbsp;(lune)";
		var feelsliketext = "Ressentie ";
		var lastupdatetext = "Vérifié à ";
		var xmlupdatetext = "Mis à jour à ";
		var humiditytext = "Humidité ";	
		var visibilitytext = "Visibilité";	
		var pressuretext = "Pression ";
		var windtext = "Vent ";
		var UVIndextext = "Indice UV ";
		var Dewpointtext = "Point de rosée ";
        var forecasttext = "Prévision de";
		var nowindtext = "Pas de vent";
		var wsutextimp = "mi/h";
		var wsutextmet = "km/h";
		var gusttext = "Rafales";
		var datatext = "Source de données";
		var nighttext = " soir";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornade",
			"Orage tropical",
			"Ouragan",
			"Orages violents",
			"Orages",
			"Pluie et neige mélées",
			"Pluie et grêle mélées",
			"Neige et grêle mélées",
			"Bruine verglaçante",
			"Bruine",
			"Pluie verglaçante",
			"Averses",
			"Pluie",
			"Quelques flocons",
			"Faibles chutes de neige",
			"Rafales de neige",
			"Neige",
			"Grêle",
			"Neige fondue",
			"Poussiéreux",
			"Brouillard",
			"Brume",
			"Brumeux",
			"Tempête",
			"Vent",
			"Temps froid",
			"Temps nuageux ",
			"Très nuageux",
			"Très nuageux",
			"Partiellement nuageux",
			"Partiellement nuageux",
			"Ciel dégagé",
			"Ensoleillé",
			"Beau temps",
			"Beau temps",
			"Pluie et grêles mélées",
			"Temps chaud",
			"Orages isolés",
			"Orages éparses",
			"Orages éparses",
			"Averses éparses",
			"Fortes chutes de neige",
			"Chutes de neige éparses",
			"Fortes chutes de neige",
			"Partiellement nuageux",
			"Orages",
			"Chute de neige",
			"Orages isolés",
			"Non disponible"];
    break;
	case "ge":
	    var touch1text = "Home";
		var touch2text = "Wetter";
		var touch3text = "info";
		var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
		var sdays = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];
		var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
		var hightext = "Hoch: ";
		var lowtext = "Tief: ";
		var sunrisetext = "Sonnenaufgang";
		var sunsettext = "Sonnenuntergang";
		var moonrisetext ="Mondaufgang";
		var moonsettext = "Monduntergang";
		var feelsliketext = "Gefühlte ";
		var lastupdatetext = "Letztes Update ";
		var xmlupdatetext = "Aktualisiert ";
		var visibilitytext = "Sichtweite";
		var humiditytext = "Luftfeuchte ";
		var pressuretext = "Luftdruck ";
		var windtext = "Wind ";
		var UVIndextext = "UV-index ";
		var Dewpointtext = "Taupunkt ";
        var forecasttext = "Prognose";
		var nowindtext = "Kein wind";
		var wsutextimp = "mph";
		var wsutextmet = "km/h";
		var gusttext = "Böen";
		var datatext = "Datenquelle";
		var nighttext = " nacht";
		var Weihnacht = "Frohe Weihnachten"; 
		var neuesJahr = " ein gesundes neues Jahr";
		var von = "von Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tropischer sturm",
			"Wirbelsturm",
			"Schwere gewitter",
			"Gewitter",
			"Regen und schnee",
			"Graupelschauer",
			"Schneeregen",
			"Gefrierender nieselregen",
			"Nieselregen",
			"Gefrierender regen",
			"Schauer",
			"Regen",
			"Schneegestuöber",
			"Leichte schneeschauer",
			"Schneetreiben",
			"Schnee",
			"Hagel",
			"Schneeregen",
			"Staubig",
			"Nebelig",
			"Dunstschleier",
			"Dunstig",
			"Stürmisch",
			"Windig",
			"Kalt",
			"Bewölkt ",
			"Meist bewölkt",
			"Meist bewölkt",
			"Teilweise bewölkt",
			"Teilweise bewölkt",
			"Klar",
			"Sonnig",
			"Heiter",
			"Meist sonnig",
			"Regen und hagel",
			"Heiss",
			"Örtliche gewitter",
			"Vereinzelte gewitte",
			"Vereinzelte gewitte",
			"Vereinzelte schauer",
			"Starker schneefall",
			"Vereinzelte schneeschauer",
			"Starker schneefall",
			"Teilweise bewölkt",
			"Gewitter",
			"Scheeschauer",
			"Örtliche gewitterschauer",
			"Nicht verfuegbar"];
	break;
	case "nl":
	    var touch1text = "thuis";
		var touch2text = "weer";
		var touch3text = "info";
		var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
		var sdays = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
		var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
		var hightext = "Hoog ";
		var lowtext = "Laag ";
		var sunrisetext ="Ochtend";
		var sunsettext = "Nacht";
		var moonrisetext ="Moonrise";
		var moonsettext = "Moonset";
		var feelsliketext = "Feels like ";
		var lastupdatetext = "Gecontroleerd ";
		var xmlupdatetext = "Bijgewerkt ";
		var humiditytext = "Vochtigheid ";
		var visibilitytext = "Zichtbaarheid";	
		var pressuretext = "Druk ";
		var windtext = "Wind ";
		var UVIndextext = "UV-index ";
		var Dewpointtext = "Dauwpunt ";
        var forecasttext = "Forecast";
		var nowindtext = "Geen wind";
		var wsutextimp = "mpu";
		var wsutextmet = "km/u";
		var gusttext = "Windvlagen";
		var datatext = "Gegevensbron";
		var nighttext = " nacht";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tropische storm",
			"Wervelwind",
			"Zware onweersbuien",
			"Onweersbuien",
			"Regen en sneeuw",
			"Regen en ijzel",
			"Sneeuw en ijzel",
			"Bevriezende motregen",
			"Motregen",
			"Ijzel",
			"Buien",
			"Regen",
			"Sneeuwvlagen",
			"Lichte sneeuwbuien",
			"Sneeuw drift",
			"Sneeuw",
			"Hagel",
			"Ijzel",
			"Stoffig",
			"Mistig",
			"Wazig",
			"Wazig",
			"Stormachtig",
			"Winderig",
			"Koud",
			"Bewolkt ",
			"Algemeen bewolkt",
			"Algemeen bewolkt",
			"Gedeeltelijk bewolkt",
			"Gedeeltelijk bewolkt",
			"Helder",
			"Zonnig",
			"Veelal helder",
			"Overwegend zonnig",
			"Regen en hagel",
			"Heet",
			"Geisoleerde onweersbuien",
			"Verspreide onweersbuien",
			"Verspreide onweersbuien",
			"Verspreide buien",
			"Zware sneeuw",
			"Verspreide sneeuwbuien",
			"Zware sneeuw",
			"Gedeeltelijk bewolkt",
			"Onweersbuien",
			"Sneeuwbuien",
			"Geisoleerde onweersbuien",
			"Niet beschikbaar"];
	break;
	case "fi":
	    var touch1text = "koti";
		var touch2text = "sää";
		var touch3text = "tiedot";
		var sdays = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
		var days = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
		var months = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
		var hightext = "Korkein ";
		var lowtext = "Alin ";
		var sunrisetext = "Aamu";
		var sunsettext = "Yö";
		var moonrisetext ="kuun nousu";
		var moonsettext = "Moon asetettu";
		var feelsliketext = "Tuntuu ";
		var pressuretext = "Paine ";	
		var lastupdatetext = "tarkastetaan ";
		var xmlupdatetext = "päivitetty ";
		var visibilitytext = "Näkyvyys";
		var humiditytext = "Ilmankosteus ";
		var windtext = "Tuuli ";
		var UVIndextext = "UV-indeksi ";
		var Dewpointtext = "Kastepiste ";
        var forecasttext = "Ennuste";
		var nowindtext = "Ei tuulta";
		var wsutextimp = "mph";
		var wsutextmet = "km/h";
		var gusttext = "Puuskat";
		var datatext = "Tietolähde";
		var nighttext = "-iltana";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornaado",
			"Trooppinen myrsky",
			"Wervelwind",
			"Rankkoja ukkoskuuroja",
			"Ukkosmyrskyjä",
			"Vesisadetta ja räntää",
			"Vesi ja räntäsadetta",
			"Lumi ja räntäsadetta",
			"Jäätävää tihkusadetta",
			"Tihkusadetta",
			"Jäätävää sadetta",
			"Sadekuuroja",
			"Sade",
			"Lumisadetta",
			"Heikkoja lumikuuroja",
			"Lumituisku",
			"Lumisadetta",
			"Rakeita",
			"Räntää",
			"Pölyistä",
			"Sumuista",
			"Utuista",
			"Utuista",
			"Ei tietoja",
			"Tuulista",
			"kylmää",
			"Pilvistä",
			"Enimmäkseen pilvistä",
			"Enimmäkseen pilvistä",
			"Puolipilvistä",
			"Puolipilvistä",
			"Selkeää",
			"Aurinkoista",
			"Selkeää",
			"Selkeää",
			"Vesisadetta ja raekuuroja",
			"Hellettä",
			"Paikallisia ukkoskuuroja",
			"Hajanaisia ukkoskuuroja",
			"Hajanaisia ukkoskuuroja",
			"Hajanaisia sadekuuroja",
			"Rankkaa lumisadetta",
			"Hajanaisia lumikuuroja",
			"Rankkaa lumisadetta",
			"Puolipilvistä",
			"Ukkoskuuroja",
			"Lumikuuroja",
			"Paikallisia ukkoskuuroja",
			"Ei tietoja"];
    break; 
	case "sp":
	    var touch1text = "casa";
		var touch2text = "tiempo";
		var touch3text = "info";
		var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		var sdays = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
		var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		var hightext = "Máx ";
		var lowtext = "Mín ";
		var sunrisetext ="Amanecer";
		var sunsettext = "Anochecer";
		var moonrisetext ="Salida/Luna";
		var moonsettext = "Puesta/Luna";
		var feelsliketext = "Más como ";
		var lastupdatetext = "Comprobado ";
		var xmlupdatetext = "Actualizado ";
		var humiditytext = "Humedad ";
		var visibilitytext = "Visibilidad";
		var pressuretext = "Presión ";
		var windtext = "Viento ";
		var UVIndextext = "Índice UV ";
		var Dewpointtext = "Punto de rocío ";
        var forecasttext = "Pronóstico";
		var nowindtext = "No hay viento";
		var wsutextimp = "milla/h";
		var wsutextmet = "kilo/h";
		var gusttext = "Ráfagas";
		var datatext = "Fuente de datos";
		var nighttext = " por la Noche";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tormenta Tropical",
			"Huracan",
			"Tormentas electricas Severas",
			"Tormentas electricas",
			"Mezcla de lluvia y nieve",
			"Mezcla de lluvia y aguanieve",
			"Mezcla de nieve y aguaniev",
			"Llovizna helada",
			"Llovizna",
			"Lluvia bajo cero",
			"Chubascos",
			"Lluvia",
			"Rafagas de nieve",
			"Ligeras precipitaciones de nieve",
			"Viento y nieve",
			"Nieve",
			"Granizo",
			"Aguanieve",
			"Polvareda",
			"Neblina",
			"Bruma",
			"Humeado",
			"Tempestuoso",
			"Vientoso",
			"Frio",
			"Nublado ",
			"Mayormente nublado",
			"Mayormente nublado",
			"Parcialmente despejado",
			"Parcialmente despejado",
			"Despejado",
			"Soleado",
			"Mayormente despejado",
			"Mayormente soleado",
			"Mezcla de lluvia y granizo",
			"Caluroso",
			"Tormentas electricas aisladas",
			"Tormentas electricas dispersas",
			"Tormentas electricas dispersas",
			"Chubascos dispersos",
			"Nieve fuerte",
			"Precipitaciones de nieve dispersas",
			"Nieve fuerte",
			"Parcialmente despejado",
			"Lluvia con truenos y relampagos",
			"Precipitaciones de nieve",
			"Tormentas aisladas",
			"No disponible"];
    break;
	case "it":
	    var touch1text = "casa";
		var touch2text = "tiempo";
		var touch3text = "info";
		var days = ["Domenica", "Lunedi ", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
		var sdays = ["Do", "Lu ", "Ma", "Me", "Gi", "Ve", "Sa"];
		var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
		var hightext = "Max ";
		var lowtext = "Min ";
		var sunrisetext ="Alba";
		var sunsettext = "Tramonto";
		var moonrisetext ="Luna sorge";
		var moonsettext = "Luna cala";
		var feelsliketext = "Percepita ";
		var lastupdatetext = "Controllato alle ";
		var xmlupdatetext = "Aggiornato alle ";
		var humiditytext = "Umidita ";
		var visibilitytext = "Visibilita ";
		var pressuretext = "Pressione ";
		var windtext = "Vento ";
		var UVIndextext = "Indice UV ";
		var Dewpointtext = "Punto di rugiada ";
		var forecasttext = "Previsione";
		var nowindtext = "Senza Vento";
		var wsutextimp = "mph"; //miglia all'ora
		var wsutextmet = "km/h"; //chilometri all'ora
		var gusttext = "Raffiche";
		var datatext = "Sorgente dati";
		var nighttext = " notte";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tempesta tropicale",
			"Uragano",
			"Tuoni e fulmini",
			"Fulmini",
			"Pioggia e neve",
			"Pioggia e nevischio",
			"Neve e nevischio",
			"Grandine",
			"Pioviggine",
			"Pioggia gelata",
			"Pioggia a tratti",
			"Pioggia",
			"Raffiche di neve",
			"Neve a tratti",
			"Vento e neve",
			"Neve",
			"Grandine",
			"Nevischio",
			"Pulviscolo",
			"Nebbia",
			"Foschia",
			"Umido",
			"Tempesta",
			"Ventoso",
			"Freddo",
			"Nuvoloso",
			"Prevalentemente nuvoloso",
			"Prevalentemente nuvoloso",
			"Parzialmente nuvoloso",
			"Parzialmente nuvoloso",
			"Sereno",
			"Soleggiato",
			"Prevalentemente sereno",
			"Prevalentemente sereno",
			"Neve e grandine",
			"Caldo",
			"Fulmini isolati",
			"Temporale",
			"Temporale",
			"Acquazzoni sparsi",
			"Forti nevicate",
			"Neve sparsa",
			"Forti nevicate",
			"Parzialmente nuvoloso",
			"Rovesci e temporali",
			"Precipitazioni nevose",
			"Temporali isolati",
			"Non disponibile"];
	break;
	case "ru":
	    var touch1text = "Главная";
		var touch2text = "Погода";
		var touch3text = "info";
		var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
		var sdays = ["Во","По","Вт","Ср","Чег","Пя","Су"];
		var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
		var hightext = "привет ";
		var lowtext = "вот ";
		var sunrisetext ="утро";
		var sunsettext = "закат";
		var moonrisetext ="Луна восход";
		var moonsettext = "Луна";
		var feelsliketext = "чувство ";
		var lastupdatetext = "проверено ";
		var xmlupdatetext = "обновленный ";
		var humiditytext = "Влажность ";
		var visibilitytext = "видимость";
		var pressuretext = "давление ";
		var windtext = "Bетер ";
		var UVIndextext = "УФ-индекс ";
		var Dewpointtext = "Точка росы ";
        var forecasttext = "Прогноз";
		var nowindtext = "Нет ветра";
		var wsutextimp = "<span style='font-size:80%'>миль/ч</span>";
		var wsutextmet = "<span style='font-size:80%'>км/ч</span>";
		var gusttext = "<span style='font-size:90%'>Порывы Bетра</span>";
		var datatext = "Источник данных"
		var nighttext = " вторника";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Торнадо",
			"Горячая буря",
			"Ураган",
			"Гроза",
			"Бури",
			"Дождь со снегом",
			"Дождь и мокрый снег",
			"Снег и мокрый снег",
			"Изморозь",
			"Изморось",
			"Ледяной дождь",
			"Дождь",
			"Дождь",
			"Снег с порывами",
			"Небольшой снег с дождем",
			"Снежные заряды",
			"Снег",
			"Град",
			"Дождь со снегом",
			"Пыль",
			"Туман",
			"Туман",
			"Туман",
			"Бурный",
			"Ветер",
			"Холодный",
			"Облачно ",
			"Небольшая облачность",
			"Небольшая облачность",
			"Переменная облачность",
			"Переменная облачность",
			"Ясно",
			"Солнечно",
			"Переменная облачность",
			"Кратковременные дожди",
			"Дождь и град",
			"Горячий",
			"Изолированные грозы",
			"Рассеянные грозы",
			"Рассеянные грозы",
			"Рассеянный дождь",
			"Сильный снег",
			"Рассеянный снег с дождем",
			"Сильный снег",
			"Переменная облачность",
			"Изолированные грозы с дождем",
			"Дождь со снегом",
			"Изолированные грозы с дождем",
			"Недоступно"];
	break;
	case "cn":
	    var touch1text = "家";
		var touch2text = "天气";
		var touch3text = "信息";
		var days = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var sdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
		var hightext = "最高 ";
		var lowtext = "最低 ";
		var sunrisetext = "日出";
		var moonrisetext ="月亮升起";
		var moonsettext = "月球集";
		var sunsettext = "日落";
		var feelsliketext = "感覺像";
		var pressuretext = "最高";	
		var lastupdatetext = "檢查 ";
		var xmlupdatetext = "更新 ";
		var visibilitytext = "能见度";
		var humiditytext = "湿度 ";
		var windtext = "风向 ";
		var UVIndextext = "紫外線指數 ";
		var Dewpointtext = "露点 ";
        var forecasttext = "预测";
		var nowindtext = "无风";
		var wsutextimp = "mph";
		var wsutextmet = "km/h";
		var gusttext = "阵风";
		var datatext = "数据源"
		var nighttext = "晚上";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"风卷残云",
			"热带风暴",
			"狂风暴雨",
			"电闪雷鸣",
			"电闪雷鸣",
			"雨雪霏霏",
			"雨雪霏霏",
			"雨雪纷纷",
			"寒风冷雨",
			"蒙蒙细雨",
			"凄风冷雨",
			"疾风骤雨",
			"雨",
			"俄而雪骤",
			"流风回雪",
			"狂风暴雪",
			"大雪纷飞",
			"天降冰雹",
			"雨雪霏霏",
			"飞沙走石",
			"云迷雾锁",
			"十面霾伏",
			"烟雾弥漫",
			"风起云涌",
			"风和日丽",
			"天寒地冻",
			"乌云蔽日",
			"浮云蔽日",
			"浮云蔽日",
			"云淡风轻",
			"云淡风轻",
			"晴空万里",
			"阳光明媚",
			"大部晴朗",
			"晴时多云",
			"冰雹带雨",
			"骄阳似火",
			"霹雳列缺",
			"电闪雷鸣",
			"电闪雷鸣",
			"急风骤雨",
			"大雪纷飞",
			"骤雪初歇",
			"大雪纷飞",
			"云淡风轻",
			"雷阵雨",
			"雨雪霏霏",
			"霹雳列缺",
			"自行判断"];
	break;
	case "tr":
	    var touch1text = "ev";
		var touch2text = "hava";
		var touch3text = "bilgi";
		var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma​​", "Cumartesi"]; 
		var sdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma​​", "Cumartesi"];
		var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül","Ekim", "Kasım", "Aralık"]; 
		var hightext = "Yüksek "; 
		var lowtext = "Düşük "; 
		var sunrisetext = "Gündoğumu"; 
		var sunsettext = "Gün Batımı"; 
		var moonrisetext = "Ayın doğuşu"; 
		var moonsettext = "Ayın Batışı"; 
		var feelsliketext = "Hissedilen "; 
		var pressuretext = "Basınç "; 
		var lastupdatetext = "Güncellendi "; 
		var xmlupdatetext = "Güncelleme vakti "; 
		var visibilitytext = "Görüş mesafesi"; 
		var humiditytext = "Nem "; 
		var windtext = "Rüzgar "; 
		var UVIndextext = "UV Endeksi ";
		var Dewpointtext = "İşbâ ";
		var forecasttext = "Hava durumu"; 
		var nowindtext = "Rüzgar yok";
		var wsutextimp = "mil/saat";
		var wsutextmet = "km/saat";
		var gusttext = "Bora";
		var datatext = "Veri kaynağı";
		var nighttext = " gecesi";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Kasırga", 
			"Tropik fırtına", 
			"Fırtına", 
			"Şiddetli fırtına", 
			"Gök gürültülü fırtına",
			"Karışık yağmur ve kar", 
			"Karışık yağmur ve sulusepken", 
			"Karışık kar ve sulusepken", 
			"Çisenti Donma", 
			"Çiseleyen yağmur", 
			"Dondurucu çiseleyen yağmur",
			"Sağanak", 
			"Yağmur", 
			"Hafif kar",
			"Hafif kar sağnağı", 
			"Esen kar", 
			"Kar", 
			"Dolu", 
			"Sulu kar", 
			"Toz", 
			"Sisli",
			"Sis", 
			"Dumanlı", 
			"Yaygaracı", 
			"Rüzgarlı", 
			"Soğuk", 
			"Bulutlu", 
			"Çoğunlukla bulutlu", 
			"Çoğunlukla bulutlu", 
			"Parçalı bulutlu", 
			"Parçalı bulutlu", 
			"Açık", 
			"Güneşli", 
			"Çoğunlukla açık", 
			"Hafif bulutlu", 
			"Karışık yağmur ve dolu", 
			"Sıcak", 
			"İzole gökgürültülü sağanak", 
			"Dağınık gökgürültülü sağanak",
			"Dağınık gökgürültülü sağanak",
			"Dağınık sağanak", 
			"Şiddetli kar", 
			"Dağınık sağanak kar", 
			"Şiddetli kar", 
			"Parçalı bulutlu", 
			"Gökgürültülü yağmur", 
			"Sağanak kar", 
			"Izole gökgürültülü yağmur", 
			"Müsait değil"];
	break;
	case "gr":
	    var touch1text = "Σπίτι";
		var touch2text = "καιρός";
		var touch3text = "info";
		var days = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];
		var sdays = ["Κυ", "Δε", "Τρ", "Τε", "Πέη", "Πα", "Σά"];
		var months = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
		var hightext = "Υψηλή ";
		var lowtext = "Χαμηλή ";
		var sunrisetext = "Ανατολή";
		var sunsettext = "Δύση";
		var moonrisetext ="Ανατολή";
		var moonsettext = "Δύση";
		var feelsliketext = "Αίσθηση ";
		var lastupdatetext = "ελέγχεται ";
		var xmlupdatetext = "Ανανέωση ";
		var humiditytext = "Υγρασία "; 
		var visibilitytext = "Ορατότητα";      
		var pressuretext = "Πίεση ";
		var windtext = "Άνεμος ";
		var UVIndextext = "Επίπεδο UV ";
		var Dewpointtext = "σημείο δρόσου ";
		var forecasttext = "Πρόβλεψη";
		var nowindtext = "Χωρίς αέρα";
		var wsutextimp = "μ.α.ώ";
		var wsutextmet = "χλμ";
		var gusttext = "Ριπές";
		var datatext = "Πηγή δεδομένων";
		var nighttext = " το βράδυ";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Ανεμοστρόβιλος",
			"Τροπική Καταιγίδα",
			"Τυφώνας",
			"Ισχυρές Καταιγίδες",
			"Καταιγίδες",
			"Βροχή και Χιόνι",
			"Βροχή και Χιονόνερο",
			"Χιόνι και Χιονόνερο",
			"Παγωμένο Ψιλόβροχο",
			"Ψιλόβροχο",
			"Παγωμένη Βροχή",
			"Καταιγίδες",
			"βροχή",
			"Διαστήματα Χιονιού",
			"Ελαφρές Χιονοπτώσεις",
			"Χιονοθύελλα",
			"Χιονόπτωση",
			"Χαλαζόπτωση",
			"Χιονόνερο",
			"Σκόνη",
			"Ομιχλώδης",
			"Καταχνιά",
			"Ομιχλώδης",
			"Θυελλώδης",
			"Ανεμώδης",
			"Κρύος",
			"Νεφελώδης ",
			"Κυρίως Νεφελώδης",
			"Κυρίως Νεφελώδης",
			"Μερικώς Νεφελώδης",
			"Μερικώς Νεφελώδης",
			"Αίθριος",
			"Ηλιόλουστος",
			"Κυρίως αίθριος",
			"Κυρίως λιακάδα",
			"Βροχή και Χαλάζι",
			"Ζεστός Καιρός",
			"Μεμονωμένες Καταιγίδες",
			"Ασθενείς Καταιγίδες",
			"Ασθενείς Καταιγίδες",
			"Πιθανές Βροχές",
			"Ισχυρή Χιονόπτωση",
			"Πιθανή Χιονόπτωση",
			"Ισχυρή Χιονόπτωση",
			"Μερικώς Νεφελώδης",
			"Καταιγίδες",
			"Χιονόπτωση",
			"Μεμονωμένες Καταιγίδες",
			"Μη Διαθέσιμος"];
	break;	
	default: 
	    var touch1text = "Home";
		var touch2text = "Weather";
		var touch3text = "info";
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var sdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var hightext = "Hi ";
		var lowtext = "Lo ";
		var sunrisetext ="Sunrise";
		var sunsettext = "Sunset";
		var moonrisetext ="Moonrise";
		var moonsettext = "Moonset";
		var feelsliketext = "Feels like ";
		var lastupdatetext = "Checked at ";
		var xmlupdatetext = "Updated at ";
		var humiditytext = "Humidity ";
		var visibilitytext = "Visibility";
		var pressuretext = "Pressure ";
		var windtext = "Wind ";
		var UVIndextext = "UV index ";
		var Dewpointtext = "Dew point ";
        var forecasttext = "Forecast";
		var nowindtext = "No wind";
		var wsutextimp = "mph";
		var wsutextmet = "km/h";
		var gusttext = "Gusts";
		var datatext = "Data Source";
		var nighttext = " night";
		var Weihnacht = "Merry Christmas"; 
		var neuesJahr = "Happy New Year";
		var von = "From Ian, David & D-Shin";
		var WeatherDesc = [
			"Tornado",
			"Tropical storm",
			"Hurricane",
			"Severe thunderstorms",
			"Thunderstorms",
			"Mixed rain and snow",
			"Mixed rain and sleet",
			"Mixed snow and sleet",
			"Freezing drizzle",
			"Drizzle",
			"Freezing rain",
			"Showers",
			"Rain",
			"Snow flurries",
			"Light snow showers",
			"Blowing snow",
			"Snow",
			"Hail",
			"Sleet",
			"Dust",
			"Foggy",
			"Haze",
			"Smoky",
			"Blustery",
			"Windy",
			"Cold",
			"Cloudy",
			"Mostly cloudy",
			"Mostly cloudy",
			"Partly cloudy",
			"Partly cloudy",
			"Clear",
			"Sunny",
			"Mostly clear",
			"Mostly sunny",
			"Mixed rain and hail",
			"Hot",
			"Isolated thunderstorms",
			"Scattered thunderstorms",
			"Scattered thunderstorms",
			"Scattered showers",
			"Heavy snow",
			"Scattered snow showers",
			"Heavy snow",
			"Partly cloudy",
			"Thundershowers",
			"Snow showers",
			"Isolated thundershowers",
			"Not available"];
	break;
}

function ForecastDayNames(day) {
switch (day) {
    case "Sun": { return days[0]; }
    case "Mon": { return days[1]; }
    case "Tue": { return days[2]; }
    case "Wed": { return days[3]; }
    case "Thu": { return days[4]; }
    case "Fri": { return days[5]; }
    case "Sat": { return days[6]; }
	}
}

function WindDescription() {
	switch (lang) {
		case "no": 			
			if (obj.windspeed >= 118) { var winddesc = "orkan"; }
			if (obj.windspeed < 118) { var winddesc = "voldelig vind"; }
			if (obj.windspeed < 103){ var winddesc = "sterk vind"; }
			if (obj.windspeed < 89){ var winddesc = "sterk kuling"; }				
			if (obj.windspeed < 75){ var winddesc = "sterk kuling"; }
			if (obj.windspeed < 62) { var winddesc = "stiv kuling"; }
			if (obj.windspeed < 50) { var winddesc = "liten kuling"; }
			if (obj.windspeed < 39) { var winddesc = "frisk bris"; }
			if (obj.windspeed < 29) { var winddesc = "moderat bris"; }	
			if (obj.windspeed < 20) { var winddesc = "laber bris"; }
			if (obj.windspeed < 12) { var winddesc = "lett bris"; }
			if (obj.windspeed < 6) { var winddesc = "svak vind"; }
			if (obj.windspeed < 3) { var winddesc = "flau vind"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "cn": 			
			if (obj.windspeed >= 118) { var winddesc = "飓风级风力"; }
			if (obj.windspeed < 118) { var winddesc = "猛烈的风"; }
			if (obj.windspeed < 103){ var winddesc = "强风"; }
			if (obj.windspeed < 89){ var winddesc = "八级大风"; }				
			if (obj.windspeed < 75){ var winddesc = "大风"; }
			if (obj.windspeed < 62) { var winddesc = "高风"; }
			if (obj.windspeed < 50) { var winddesc = "强风"; }
			if (obj.windspeed < 39) { var winddesc = "清新的微风"; }
			if (obj.windspeed < 29) { var winddesc = "和风"; }	
			if (obj.windspeed < 20) { var winddesc = "微风"; }
			if (obj.windspeed < 12) { var winddesc = "微风"; }
			if (obj.windspeed < 6) { var winddesc = "光气"; }
			if (obj.windspeed < 3) { var winddesc = "小风"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "fr":
			if (obj.windspeed >= 118) { var winddesc = "ouragan"; }
			if (obj.windspeed < 118) { var winddesc = "vent violent"; }
			if (obj.windspeed < 103){ var winddesc = "vent soufflant en tempête"; }
			if (obj.windspeed < 89){ var winddesc = "fort coup de vent"; }	
			if (obj.windspeed < 75){ var winddesc = "coup de vent"; }
			if (obj.windspeed < 62) { var winddesc = "vent fort"; }
			if (obj.windspeed < 50) { var winddesc = "forte brise"; }
			if (obj.windspeed < 39) { var winddesc = "bonne brise"; }
			if (obj.windspeed < 29) { var winddesc = "brise modérée"; }	
			if (obj.windspeed < 20) { var winddesc = "douce brise"; }
			if (obj.windspeed < 12) { var winddesc = "légère brise"; }
			if (obj.windspeed < 6) { var winddesc = "un peu d'air"; }
			if (obj.windspeed < 3) { var winddesc = "faible vent"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "ru":
			if (obj.windspeed >= 118) { var winddesc = "ураган"; }
			if (obj.windspeed < 118) { var winddesc = "сильный ветер"; }
			if (obj.windspeed < 103){ var winddesc = "штурмовой ветер"; }
			if (obj.windspeed < 89){ var winddesc = "сильный порыв ветра"; }	  
			if (obj.windspeed < 75){ var winddesc = "шторм"; }
			if (obj.windspeed < 62) { var winddesc = "сильный ветер"; }
			if (obj.windspeed < 50) { var winddesc = "сильный ветер"; }
			if (obj.windspeed < 39) { var winddesc = "хороший ветер"; }
			if (obj.windspeed < 29) { var winddesc = "умеренный ветер"; }	
			if (obj.windspeed < 20) { var winddesc = "слабый ветер"; }
			if (obj.windspeed < 12) { var winddesc = "спокойный ветер"; }
			if (obj.windspeed < 6) { var winddesc = "легкий ветер"; }
			if (obj.windspeed < 3) { var winddesc = "слабый ветер"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "fi": 			
			if (obj.windspeed >= 118) { var winddesc = "hirmumyrskyn tuulen"; }
			if (obj.windspeed < 118) { var winddesc = "raju tuulenpuuska"; }
			if (obj.windspeed < 103){ var winddesc = "voimakas tuuli"; }
			if (obj.windspeed < 89){ var winddesc = "voimakas myrsky"; }	
			if (obj.windspeed < 75){ var winddesc = "tuore Gale"; }
			if (obj.windspeed < 62) { var winddesc = "kova tuuli"; }
			if (obj.windspeed < 50) { var winddesc = "voimakas tuuli"; }
			if (obj.windspeed < 39) { var winddesc = "raikkaan"; }
			if (obj.windspeed < 29) { var winddesc = "kova tuuli"; }	
			if (obj.windspeed < 20) { var winddesc = "lempeä tuuli"; }
			if (obj.windspeed < 12) { var winddesc = "Heikkoa tuulta"; }
			if (obj.windspeed < 6) { var winddesc = "vaisto"; }
			if (obj.windspeed < 3) { var winddesc = "vähän tuulta"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "nl": 			
			if (obj.windspeed >= 118) { var winddesc = "orkaankracht wind"; }
			if (obj.windspeed < 118) { var winddesc = "hevige wind"; }
			if (obj.windspeed < 103){ var winddesc = "sterke wind"; }
			if (obj.windspeed < 89){ var winddesc = "sterke storm"; }				
			if (obj.windspeed < 75){ var winddesc = "verse gale"; }
			if (obj.windspeed < 62) { var winddesc = "harde wind"; }
			if (obj.windspeed < 50) { var winddesc = "sterke wind"; }
			if (obj.windspeed < 39) { var winddesc = "frisse wind"; }
			if (obj.windspeed < 29) { var winddesc = "matige wind"; }	
			if (obj.windspeed < 20) { var winddesc = "zwakke wind"; }
			if (obj.windspeed < 12) { var winddesc = "lichte bries"; }
			if (obj.windspeed < 6) { var winddesc = "zwak"; }
			if (obj.windspeed < 3) { var winddesc = "een beetje wind"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "ge":
			if (obj.windspeed >= 118) { var winddesc = "orkanartigen wind"; }
			if (obj.windspeed < 118) { var winddesc = "heftiger wind"; }
			if (obj.windspeed < 103){ var winddesc = "starker wind"; }
			if (obj.windspeed < 89){ var winddesc = "starken sturm"; }				
			if (obj.windspeed < 75){ var winddesc = "frischen sturm"; }
			if (obj.windspeed < 62) { var winddesc = "hohen wind"; }
			if (obj.windspeed < 50) { var winddesc = "starke brise"; }
			if (obj.windspeed < 39) { var winddesc = "frische brise"; }
			if (obj.windspeed < 29) { var winddesc = "sanfte brise"; }	
			if (obj.windspeed < 20) { var winddesc = "leichte brise"; }
			if (obj.windspeed < 12) { var winddesc = "leichte brise"; }
			if (obj.windspeed < 6) { var winddesc = "licht luft"; }
			if (obj.windspeed < 3) { var winddesc = "wenig wind"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "sp":
			if (obj.windspeed >= 118) { var winddesc = "viento huracanado"; }
			if (obj.windspeed < 118) { var winddesc = "viento violento"; }
			if (obj.windspeed < 103){ var winddesc = "viento fuerte"; }
			if (obj.windspeed < 89){ var winddesc = "ventarron fuerte"; }	
			if (obj.windspeed < 75){ var winddesc = "ventarron fresco"; }
			if (obj.windspeed < 62) { var winddesc = "viento fuerte"; }
			if (obj.windspeed < 50) { var winddesc = "brisa fuerte"; }
			if (obj.windspeed < 39) { var winddesc = "brisa fresca"; }
			if (obj.windspeed < 29) { var winddesc = "brisa moderada"; }	
			if (obj.windspeed < 20) { var winddesc = "brisa normal"; }
			if (obj.windspeed < 12) { var winddesc = "brisa"; }
			if (obj.windspeed < 6) { var winddesc = "viento suave"; }
			if (obj.windspeed < 3) { var winddesc = "viento"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "it":
			if (obj.windspeed >= 118) { var winddesc = "uragano violento"; }
			if (obj.windspeed < 118) { var winddesc = "uragano"; }
			if (obj.windspeed < 103){ var winddesc = "burrasca"; }
			if (obj.windspeed < 89){ var winddesc = "burrascoso"; }
			if (obj.windspeed < 75){ var winddesc = "vento fortissimo"; }
			if (obj.windspeed < 62) { var winddesc = "vento forte"; }
			if (obj.windspeed < 50) { var winddesc = "vento teso"; }
			if (obj.windspeed < 39) { var winddesc = "vento intenso"; }
			if (obj.windspeed < 29) { var winddesc = "vento moderato"; }
			if (obj.windspeed < 20) { var winddesc = "brezza moderata"; }
			if (obj.windspeed < 12) { var winddesc = "brezza leggera"; }
			if (obj.windspeed < 6) { var winddesc = "dolce brezza"; }
			if (obj.windspeed < 3) { var winddesc = "alito di vento"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;			
		case "tr": 
			if (obj.windspeed >= 118) { var winddesc = "kasırga"; }
			if (obj.windspeed <118) { var winddesc = "şiddetli rüzgar"; } 
			if (obj.windspeed <103) { var winddesc = "kuvvetli rüzgar"; } 
			if (obj.windspeed <89) { var winddesc = "güçlü fırtına"; } 
			if (obj.windspeed <75) { var winddesc = "güçlü meltem"; } 
			if (obj.windspeed <62) { var winddesc = "yüksek rüzgar"; } 
			if (obj.windspeed <50) { var winddesc = "güçlü esinti"; } 
			if (obj.windspeed <39) { var winddesc = "taze esinti"; } 
			if (obj.windspeed <29) { var winddesc = "ılımlı esinti"; } 
			if (obj.windspeed <20) { var winddesc = "nazik esinti"; } 
			if (obj.windspeed <12) { var winddesc = "hafif esinti"; } 
			if (obj.windspeed <6) { var winddesc = "hafif rüzgar"; } 
			if (obj.windspeed <3) { var winddesc = "az rüzgar"; } 
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		case "gr":
			if (obj.windspeed >= 118) { var winddesc = "Τύφωνας"; }
			if (obj.windspeed < 118) { var winddesc = "Ισχυροί Άνεμοι"; }
			if (obj.windspeed < 103){ var winddesc = "Ενισχυμένοι Άνεμοι"; }
			if (obj.windspeed < 89){ var winddesc = "Ισχυροι Θυελλώδης Άνεμοι"; }
			if (obj.windspeed < 75){ var winddesc = "Θυελλώδης Άνεμος"; }
			if (obj.windspeed < 62) { var winddesc = "Ισχυρός Άνεμος"; }
			if (obj.windspeed < 50) { var winddesc = "Δυνατός Αέρας"; }
			if (obj.windspeed < 39) { var winddesc = "Πολύς Αέρας"; }
			if (obj.windspeed < 29) { var winddesc = "Αρκετός Αέρας"; }	
			if (obj.windspeed < 20) { var winddesc = "Μετριος Αέρας"; }
			if (obj.windspeed < 12) { var winddesc = "Ήπιος Αέρας"; }
			if (obj.windspeed < 6) { var winddesc = "Ελαφρύς Αέρας"; }
			if (obj.windspeed < 3) { var winddesc = "Λίγος Αέρας"; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
		default: 			
			if (obj.windspeed >= 118) { var winddesc = "hurricane-force wind."; }
			if (obj.windspeed < 118) { var winddesc = "violent wind."; }
			if (obj.windspeed < 103){ var winddesc = "strong wind."; }
			if (obj.windspeed < 89){ var winddesc = "strong gale."; }				
			if (obj.windspeed < 75){ var winddesc = "fresh gale."; }
			if (obj.windspeed < 62) { var winddesc = "high wind."; }
			if (obj.windspeed < 50) { var winddesc = "strong breeze."; }
			if (obj.windspeed < 39) { var winddesc = "fresh breeze."; }
			if (obj.windspeed < 29) { var winddesc = "moderate breeze."; }	
			if (obj.windspeed < 20) { var winddesc = "gentle breeze."; }
			if (obj.windspeed < 12) { var winddesc = "light breeze."; }
			if (obj.windspeed < 6) { var winddesc = "light air."; }
			if (obj.windspeed < 3) { var winddesc = "little wind."; }
			if (obj.windspeed == 0) { var winddesc = ""; }
			return winddesc;
		break;
	}
}

function translateCardinal() {
	switch (lang) {
		case "no":
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORD
				case 'NNW': { return "NNV"; }		
				case 'NW': { return "NV"; } //NORDVEST	
				case 'WNW': { return "VNV"; }
				case 'W': { return "V"; } //VEST	
				case 'WSW': { return "VSV"; }		
				case 'SW': { return "SV"; } //SØRVEST
				case 'SSW': { return "SSV";	}	
				case 'S': { return "S"; } //SØR	
				case 'SSE': { return "SSØ"; }
				case 'SE': { return "SØ"; } //SØRØST		
				case 'ESE': { return "ØSØ"; }		
				case 'E': { return "Ø"; } //ØST	
				case 'ENE': { return "ØNØ"; }		
				case 'NE': { return "NØ"; } //NORDØST
				case 'NNE': { return "NNØ"; }		
				break;
			}
		break;
		
		case "ge": 					
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORDEN
				case 'NNW': { return "NNW"; }		
				case 'NW': { return "NW"; } //NORDENWEST	
				case 'WNW': { return "WNW"; }
				case 'W': { return "W"; } //WEST	
				case 'WSW': { return "WSW"; }		
				case 'SW': { return "SW"; } //SÜDWEST
				case 'SSW': { return "SSW";	}	
				case 'S': { return "S"; } //SÜD	
				case 'SSE': { return "SSO"; }
				case 'SE': { return "SO"; } //SÜDOSTEN		
				case 'ESE': { return "OSO"; }		
				case 'E': { return "O"; } //OSTEN	
				case 'ENE': { return "ONO"; }		
				case 'NE': { return "NO"; } //NORDENOSTEN
				case 'NNE': { return "NNO"; }		
				break;
			}
		break;
				
		case "it":
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORD
				case 'NNW': { return "NNO"; }		
				case 'NW': { return "NO"; } //NORDOVEST	
				case 'WNW': { return "ONO"; }
				case 'W': { return "O"; } //OVEST	
				case 'WSW': { return "OSO"; }		
				case 'SW': { return "SO"; } //SUDOVEST
				case 'SSW': { return "SSO";	}	
				case 'S': { return "S"; } //SUD	
				case 'SSE': { return "SSE"; }
				case 'SE': { return "SE"; } //SUDEST		
				case 'ESE': { return "ESE"; }		
				case 'E': { return "E"; } //EST	
				case 'ENE': { return "ENE"; }		
				case 'NE': { return "NE"; } //NORDEST
				case 'NNE': { return "NNE"; }		
				break;
			}
		break;
		
		case "fi":
			switch (obj.cardinal) { 					
				case 'N': { return "Pohjoinen"; } //POHJOINEN
				case 'NNW': { return "Pohjoinen"; }		
				case 'NW': { return "Koillinen"; } //KOILLINEN
				case 'WNW': { return "Itä"; }
				case 'W': { return "Itä"; } //ITÄ	
				case 'WSW': { return "Itä"; } 	
				case 'SW': { return "Kaakko"; } //KAAKKO
				case 'SSW': { return "Etelä"; }	
				case 'S': { return "Etelä"; } //ETELÄ	
				case 'SSE': { return "Etelä"; }
				case 'SE': { return "Lounas"; } //LOUNAS		
				case 'ESE': { return "Länsi"; }		
				case 'E': { return "Länsi"; } //LÄNSI	
				case 'ENE': { return "Länsi"; }		
				case 'NE': { return "Luode"; } //LUODE
				case 'NNE': { return "Pohjoinen"; }			
				break;
			}
		break;
		
		case "nl":	
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NOORDEN
				case 'NNW': { return "NNW"; }		
				case 'NW': { return "NW"; } //NOORDENWEST	
				case 'WNW': { return "WNW"; }
				case 'W': { return "W"; } //WEST	
				case 'WSW': { return "WZW"; }		
				case 'SW': { return "ZW"; } //ZUIDENWEST
				case 'SSW': { return "ZZW";	}	
				case 'S': { return "Z"; } //ZUIDEN	
				case 'SSE': { return "ZZO"; }
				case 'SE': { return "ZO"; } //ZUIDENOOSTEN		
				case 'ESE': { return "OZO"; }		
				case 'E': { return "O"; } //OOSTEN	
				case 'ENE': { return "ONO"; }		
				case 'NE': { return "NO"; } //NOORDENOOSTEN
				case 'NNE': { return "NNO"; }		
				break;
			}	
		break;
		
		case "fr":
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORD
				case 'NNW': { return "NNO"; }		
				case 'NW': { return "NO"; } //NORDOUEST	
				case 'WNW': { return "ONO"; }
				case 'W': { return "O"; } //OUEST	
				case 'WSW': { return "OSO"; }		
				case 'SW': { return "SO"; } //SUDOUEST
				case 'SSW': { return "SSO";	}	
				case 'S': { return "S"; } //SUD	
				case 'SSE': { return "SSE"; }
				case 'SE': { return "SE"; } //SUDEST		
				case 'ESE': { return "ESE"; }		
				case 'E': { return "E"; } //EST	
				case 'ENE': { return "ENE"; }		
				case 'NE': { return "NE"; } //NORDEST
				case 'NNE': { return "NNE"; }		
				break;
			}
		break;
		
		case "sp":	
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORTE
				case 'NNW': { return "NNO"; }		
				case 'NW': { return "NO"; } //NORTEOESTE
				case 'WNW': { return "ONO"; }
				case 'W': { return "O"; } //OESTE	
				case 'WSW': { return "OSO"; }		
				case 'SW': { return "SO"; } //SUROESTE
				case 'SSW': { return "SSO";	}	
				case 'S': { return "S"; } //SUR	
				case 'SSE': { return "SSE"; }
				case 'SE': { return "SE"; } //SURESTE		
				case 'ESE': { return "ESE"; }		
				case 'E': { return "E"; } //ESTE	
				case 'ENE': { return "ENE"; }		
				case 'NE': { return "NE"; } //NORTESTE
				case 'NNE': { return "NNE"; }		
				break;
			}
		break;
		
		case "ru": 
		    switch (obj.cardinal) {					
				case 'N': { return "С"; }
				case 'NNW': { return "ССЗ"; }		
				case 'NW': { return "СЗ"; }		
				case 'WNW': { return "ЗСЗ"; }
				case 'W': { return "З"; }		
				case 'WSW': { return "ЗЮЗ"; }		
				case 'SW': { return "ЗЮ"; }
				case 'SSW': { return "ЗЗЮ"; }		
				case 'S': { return "Ю"; }		
				case 'SSE': { return "ЮЮВ"; }
				case 'SE': { return "ЮВ"; }		
				case 'ESE': { return "ВЮВ"; }		
				case 'E': { return "В"; }		
				case 'ENE': { return "ВСВ"; }		
				case 'NE': { return "СВ"; }
				case 'NNE': { return "ССВ"; }		
				break;
			}
		break;
		
		case "gr": 					
			switch (obj.cardinal) {					
				case 'N': { return "Β"; }
				case 'NNW': { return "ΒΒΔ"; }		
				case 'NW': { return "ΒΔ"; }		
				case 'WNW': { return "ΔΒΔ"; }
				case 'W': { return "Δ"; }		
				case 'WSW': { return "ΔΝΔ"; }		
				case 'SW': { return "ΝΔ"; }
				case 'SSW': { return "ΝΝΔ"; }		
				case 'S': { return "Ν"; }		
				case 'SSE': { return "ΝΝΑ"; }
				case 'SE': { return "ΝΑ"; }		
				case 'ESE': { return "ΑΝΑ"; }		
				case 'E': { return "Α"; }		
				case 'ENE': { return "ΑΒΑ"; }		
				case 'NE': { return "ΒΑ"; }
				case 'NNE': { return "ΒΒΑ"; }		
				break;
			}
		break;
		case "tr":
			switch (obj.cardinal) { 					
				case 'N': { return "K"; } //NORTH
				case 'NNW': { return "KKB"; }		
				case 'NW': { return "KB"; } //NORTHWEST	
				case 'WNW': { return "BKB"; }
				case 'W': { return "B"; } //WEST	
				case 'WSW': { return "BGB"; }		
				case 'SW': { return "GB"; } //SOUTHWEST
				case 'SSW': { return "GGB";	}	
				case 'S': { return "G"; } //SOUTH	
				case 'SSE': { return "GGD"; }
				case 'SE': { return "GD"; } //SOUTHEAST		
				case 'ESE': { return "DGD"; }		
				case 'E': { return "D"; } //EAST	
				case 'ENE': { return "DKD"; }		
				case 'NE': { return "KD"; } //NORTHEAST
				case 'NNE': { return "KKD"; }		
				break;
			}
		break;
		
		case "cn":
			switch (obj.cardinal) { 					
				case 'N': { return "北"; }
				case 'NNW': { return "北"; }		
				case 'NW': { return "西北"; }	
				case 'WNW': { return "西"; }
				case 'W': { return "西"; }	
				case 'WSW': { return "西"; }		
				case 'SW': { return "西南"; }
				case 'SSW': { return "南";	}	
				case 'S': { return "南"; }	
				case 'SSE': { return "南"; }
				case 'SE': { return "东南"; }		
				case 'ESE': { return "东"; }		
				case 'E': { return "东"; }	
				case 'ENE': { return "东"; }		
				case 'NE': { return "东北"; }
				case 'NNE': { return "北"; }		
				break;
			}
		break;

		default:
			switch (obj.cardinal) { 					
				case 'N': { return "N"; } //NORTH
				case 'NNW': { return "NNW"; }		
				case 'NW': { return "NW"; } //NORTHWEST	
				case 'WNW': { return "WNW"; }
				case 'W': { return "W"; } //WEST	
				case 'WSW': { return "WSW"; }		
				case 'SW': { return "SW"; } //SOUTHWEST
				case 'SSW': { return "SSW";	}	
				case 'S': { return "S"; } //SOUTH	
				case 'SSE': { return "SSE"; }
				case 'SE': { return "SE"; } //SOUTHEAST		
				case 'ESE': { return "ESE"; }		
				case 'E': { return "E"; } //EAST	
				case 'ENE': { return "ENE"; }		
				case 'NE': { return "NE"; } //NORTHEAST
				case 'NNE': { return "NNE"; }		
				break;
			}
		break;
	}
}
