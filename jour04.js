console.log("________01 Object________");
//ex1
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}
console.log(cat);
console.log("Cat age :",cat.age);

if(cat.isCute === true){
    console.log("So cute !");
}
//fin ex1

console.log("________02 Combine________");
//ex2
var cat2= {
    name : "Chatouille",
    age : 2,
    isCute : false
}
console.log(cat.age, cat2.isCute);
//fin ex2

console.log("________03 Even________");
//ex3
function checkIfEven(){
    var num = 2
    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkIfEven();
////////////////////////
var num = 3;
function checkIfEven2(num){

    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

checkIfEven2(3);
checkIfEven2(320);
checkIfEven2(537);
// fin ex3

console.log("________04 Compare________");
//ex4
/*var num1 = 16; var a l'exterieur de la fonction = scope global.
var num2 = 15;*/
function compare(){
    var num1 = 16;//var a l'interieur de la fonction = scope local.
    var num2 = 15;
    if(num1 > num2){
        console.log("num1 is bigger");
    }
    else if(num1 < num2){
        console.log("num2 is bigger");
    }
    else if (num1 = num2){
        console.log("both are the same");
    }
}
compare();
////////////////////////////
function compare2(num1, num2){
    if(num1 > num2){
        console.log("num1 is bigger");
    }
    else if(num1 < num2){
        console.log("num2 is bigger");
    }
    else if (num1 = num2){
        console.log("both are the same");
    }
}
compare2(6, 25);
compare2(10, 10);
