//ex1 - number 
var entier = 102;
var float = 13.9;
console.log(entier, float);
//fin ex1

//ex2 - convertir
var basic = 34;
var stringifiee = basic.toString();
console.log(stringifiee);
console.log(basic);
//fin ex2

//ex3 - rond
var num = 1.5;
var arrondie = Math.round(num);
var arrondie2 = Math.ceil(num);
var arrondie3 = Math.floor(num);
console.log(arrondie, arrondie2, arrondie3);
//fin ex3

//ex 4 - arithmetique
var test = 12;
var bis = 5;
console.log(test+bis, test-bis, test*bis, test/bis, test**bis, test%bis);
//fin ex4

//ex 5 - comparaison
var test = 143;
var bis = 219;
console.log(test<bis, test>bis, test==bis, test===bis, test&&bis,/* test||bis*/);/*Pourquoi cela affihe t-il un seul des chiffres avec && (le plus grand) et || (le premier) ?*/
console.log(test<bis, test>bis, test==bis, test===bis, test&&bis, test||bis);
//fin ex5

//ex 6 - etat
var limite = 50;
var score = 64;
if(score>limite){
console.log("Ok good !")}
else{console.log("Oh nooo...")
};
//fin ex6

//ex 7 - etat II
var password = "azerty";
if(password.length >= 5){
    console.log("The password is secured")
};
//fin ex7

//ex 8 - etat III
var limite2 = 150;
var score2 = 64;
var password2 = "azerty";

if(score2>limite2 && password2.length > 5){
    console.log("Tout va bien");
}
else if(score2>limite2 || password2.length >= 5){
    console.log("Quelque chose est bon");
}
else{
    console.log("Rien n'est bon");
}

var limite2 = 150;
var score2 = 64;
var password2 = "azty";

if(score2>limite2 && password2.length > 5){
    console.log("Tout va bien");
}
else if(score2>limite2 || password2.length >= 5){
    console.log("Quelque chose est bon");
}
else{
    console.log("Rien n'est bon");
}
//fin ex8

/*prime
var max = 6;
var min = 1;
var random = Math.random() * (max - min + 1) + min;
console.log(random);

if(randon === 6){
    console.log("I win");
}
else{
    console.log("Try again");
}*/

//bonus II
var month = "january";
switch (month) {
	case "december": 
	case "january": 
	case "february": 
		console.log("winter");
        break;
    case "march": 
	case "april": 
	case "may": 
		console.log("spring");
        break;
    case "june":
	case "july":
	case "august":
		console.log("summer");
        break;
    case "september": 
	case "october": 
	case "november": 
        console.log("fall");
        break;
	default: 
		console.log("That's not a season");
}
//fin bonus II

//bonus III
var nbArrondi = 3.6;
var arrondiResult = Math.floor(nbArrondi);
console.log(arrondiResult);

var nbArrondi = 3.6;
var arrondiResult = Math.ceil(nbArrondi);
console.log(arrondiResult);
