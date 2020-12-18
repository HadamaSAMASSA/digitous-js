console.log("________01 Alphabet________");
//ex1
function sortLetters(stringLetters){
var letters = stringLetters.split("").sort().join("");
console.log(letters);
}
sortLetters("konexio");
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
