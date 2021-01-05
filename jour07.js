console.log("________01 Alphabet________");
//ex1
function sortLetters(stringLetters){
var letters = stringLetters.split("").sort().join("");
console.log(letters);
}
sortLetters("KoneXio");
//fin ex1

console.log("________02 XOXO________");
//ex2
function countEach(stringCount){
    var error = "Error : Il n'y a ni \"x\" ni \"o\" !"
    var xCount = 0;
    var oCount = 0;
    for(var i = 0; i < stringCount.length; i++){
        if(stringCount[i] === "x"){
            xCount++
        }
        else if(stringCount[i] === "o"){
            oCount++;
        }
    }

    if(xCount === 0 && oCount === 0){
            return error;
        }
    else if(xCount === oCount){
        return true;
    }
    else{
        return false;
    }
}
console.log(countEach("Adama"));
//fin ex2

console.log("________03 Palindrome________");
//ex3
function checkPal(stringCheck){
    var pal = stringCheck.split("").reverse().join("");
    var isAPal = "Palindrome !"
    var notAPal = "Nope"
    if(stringCheck === pal){
        return isAPal;
    }
    else{
        return notAPal;
    }
}
console.log(checkPal("assa"));
//fin ex3

console.log("________04 Swap________");
//ex4
function swap(stringSwap){
    var lowerUpper = stringSwap.charAt(0).toLowerCase() + stringSwap.substring(1,5).toUpperCase()
     + " " + stringSwap.charAt(6).toLowerCase() + stringSwap.substring(7).toUpperCase();
    return lowerUpper;
    //MAIS AU FAIT, Y A PLUS SIMPLE JE SUPPOSE !?
}
console.log(swap("Hello World"));
//fin ex4

console.log("________Bonus I________");

function makeItSpongeBob(bobString){
var upperCSentence = bobString.toUpperCase()
return `${upperCSentence} / ${bobString}`;
}
console.log(makeItSpongeBob("javascript is easy ?"));
//j'ai vraiment reussi en 5 min ??? Ca peut pas etre aussi simple, il doit y avoir un autre truc !!!!