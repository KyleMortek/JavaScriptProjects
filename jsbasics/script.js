console.log("hello world ");

var firstname= "fred";
console.log("hello "+firstname);

// var firstn = prompt("what is your first name?");
// prompt is asking for your first name and the user will then input this name
// to the prompt, stores it in a variable so it can be printed to the console
// console.log("my first name is "+firstn);
var img1; // make this var the image we put into the html 



// operators
var year = 2018-28;

console.log(year);
var x= typeof 16
console.log(x)
var arras = [1,2,3,4]//arrays
console.log(arras[0])
// ? means "then"  and : means else
var ques = arras.length ===4 ? "yay" : "booo"; 
if (arras.length ===4){
    console.log("yay")
}else{
    console.log("booo")
}//this is the same thing as above with more lines of code

console.log(ques)// very insteresting.

//functions 
function calcualteAge(b){
    return 2018 -b;

}
console.log(calcualteAge(1990));// functions exercise
var w = function(j, first){// switch case practice
    switch(j){
        case 'teacher':
            return first +" teaches kids "
        case 'driver':
            return first + "drives"
        default:
            return first +"does nothing"
    }
}

console.log(w('teacher', 'john'))

// ternary operators with switch statements 
var age = 22;
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
switch (true){
    case age<13:
        console.log(first +'boy')
        break;
    case age>= 13 && age <20:
        console.log(first +' is a teenager')
        break;
    default:
        console.log("is something else")


}

//objects and properties
var john = {
    firstName:'john',
    lastName: 'smith',
    birthday: '1990',
    family: ['joe', 'jamie', 'jill'],
    job:'teacher',
    isMarried: false,
    calcAge: function(){
        return 2018-this.birthday;
    }
};
//getting data from an object
console.log(john)
console.log(john.family)
console.log(john.family[0])
console.log(john.calcAge(1990))
console.log(john.calcAge())
