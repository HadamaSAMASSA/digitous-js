/*console.log("________01 Calculator________");
//ex1
function calculate(num1, operator, num2){
var n1 = parseInt(num1);
var n2 = parseInt(num2);
    if(operator === "+"){
        return n1 + n2;
    }
    else if(operator === "-"){
        return n1 - n2;
    }
    else if(operator === "*"){
        return n1 * n2;
    }
    else if(operator === "/"){
        return n1 / n2;
    }
    else if(operator === "%"){
        return n1 % n2;
    } 
}
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
//fin ex1*/

console.log("________02 Table________");
//ex2
function multiply(entier){
    for(var i = 1; i <= 10; i++){
        console.log(`${entier} * ${i}`);
        
    }
    return i * entier;
}
multiply(process.argv[2]);

