console.log("___________1_ARRAYS___________________________");

//ex 1 Array
var fruits = ["mango", "lemon", "blueberry"]
console.log(fruits);
console.table(fruits); //WAAAW PAS MAL !!!
//fin ex1
console.log("___________2_ACCESS___________________________");

// ex 2 access
var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));
//fin ex2
console.log("___________3_ADD AND REMOVE___________________________");

//ex 3 add and remove
var objects = ["pen", "book", "lamp"]
objects.unshift("chair");
console.log(objects);
/*var objects = ["pen", "book", "lamp"]
console.log(objects.push("chair"));
affiche 4 (pourquoi ?)*/
objects.pop()
//objects.splice(2,1);//ha ha ! dla triche ?
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);
//fin ex3
console.log("___________4_ORDER___________________________");

//ex 4 order
var numbers = [4, 10, 8, 12, 6]
numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);
//fin ex 4
console.log("___________5_LOOPS___________________________");

//ex 5 boucle
var total = 0
var limit = 10
for(var i = 1; i <= 10; i++){
 //   console.log(i);
    total+=i
    console.log(total);
}
//fin ex5
console.log("___________6_REVERSE___________________________");

//ex 6 reverse
var sentence = "Hello Konexio !"
for(var i = sentence.length-1; i >= 0; i--){
    
    console.log(sentence);
}
console.log("____________BONUS I___________________________");
