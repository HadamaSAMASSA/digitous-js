console.log("________01 Format________");
//ex1
function formatDate(string){
    var today = new Date(string);
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    console.log(`${day}/${month}/${year}`);
}
formatDate("2020-12-16");

function formatDate2(string){
    var today = new Date(string)
    console.log(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`)
}
formatDate2("2020-12-16");
//fin ex1

console.log("________02 Age________");
//ex 2
function calculateAge(){
    var birthDay = new Date(dateString); 
}
calculateAge("03/12/2010");