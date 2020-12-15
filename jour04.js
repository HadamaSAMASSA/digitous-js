console.log("________01 Object________");
//ex1
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}
console.log(cat);
console.log("Cat age :",cat.age);

if(cat.isCute){
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
//var num = 3; pas besoin
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
        console.log(`${num2} is bigger than ${num1}`);
    }
    else if (num1 = num2){
        console.log("both are the same");
    }
}
compare2(6, 25);
compare2(10, 10);
//fin ex4

console.log("________05 Add Up________");
//ex5
function addUp(num){
    var result = 0;
    for(var i = 1; i <= num; i++){
        result = result + i;
    } 
    console.log(result);
}
addUp(12);
 //fin ex5

console.log("________06 Time________");
//ex6
/*function format(num){
var hour = (num/60/60)-(num/60/60)%
var minute = hour / 60;
var second = minute / 60;
}
format(3700);
console.log(hour + ":" + minute + ":" + second);*/