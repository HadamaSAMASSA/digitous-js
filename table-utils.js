console.log("________03 Separate Table________");
//ex3
function multiply(entier){
    for(var i = 1; i <= 10; i++){
        console.log(`${entier} * ${i}`);
        
    }
    return i * entier;
}
multiply(process.argv[2]);
////////////////////////////////
function addition(entier){
    for(var i = 1; i <= 10; i++){
        console.log(`${entier} + ${i}`);
        
    }
    return i + entier;
}
addition(process.argv[2]);