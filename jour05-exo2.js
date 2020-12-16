console.log("________02 Table________");
//ex2
function multiply(entier){
    for(var i = 1; i <= 10; i++){
        console.log(`${entier} * ${i} = ${entier * i}`);
    }
    return i * entier;
}
multiply(process.argv[2]);

