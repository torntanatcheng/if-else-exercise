var language = prompt("This program will say hello world in either Spanish(es), French(fr), and English(en)");

if (language === "es"){
	console.log("Hola Mundo!");
} else if (language === "fr"){
	console.log("Bonjour le monde!");
} else if (language === "en"){
	console.log("Hello World");
} else{
	console.log("Pick either french english or spanish!");
}
