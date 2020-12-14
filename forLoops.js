console.log("________Somme des carres_________");
//ex 1
var result = 0;
for(var i = 5; i <= 10; i++){
    result = result + i*i;
}
    console.log(result);
//fin

console.log("________Comptons________");
//ex2
var result = 0;
for(var i = 100; i <= 1000; i++){
    if(i % 7 === 0){
        result ++;
    }
}
console.log(result);
//fin

console.log("________Chanceux________");
//ex3
var sum = 0;
var min = 1;
var max = 6;
for(var i = 0; i < 20; i++){
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    if (dice >= 5){
        sum += dice;
    }
}
console.log(sum);

/*console.log("________Des boites________");




console.log("________Des setiob________");




console.log("________Encore des boites________");



*/