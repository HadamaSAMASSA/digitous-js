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
console.log(test+bis, test-bis, test*bis, test/bis, test%bis);
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
if(score<limite){
console.log("Ok good !")}
else{console.log("Oh nooo...")
};
//fin ex6