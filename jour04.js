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
function checkIfEven2(){
    var num = 3;
    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkIfEven2();
////////////////////////
function checkIfEven3(){
    var num = 321;
    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkIfEven3();
////////////////////////
    var num = 556;
function checkIfEven4(num){

    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkIfEven4(537);
