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

