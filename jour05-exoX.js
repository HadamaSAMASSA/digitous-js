console.log("________01 Calculator________");
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