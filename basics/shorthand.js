//2019-01-20 16:09:35 
// short hand techniques 

// the ternary operator 

const x = 1000;
let answer;
if (x > 10) {
  answer = 'greater than 10';
} else {
  answer = 'less than 10';
}

// can be shortened to 
const newAns = x > 10 ? 'greater than 10': 'less than 10';
// if x > 10 then(?) 'greater than 10' ELSE(:) 'less than ten'
console.log('here')
let variable1;
let variable2 = variable1  || '';
//^^ so this statement gives var2 two different values. 

console.log(variable2 === ''); // prints true

variable1 = 'foo';
variable2 = variable1  || '';
console.log(variable2); // prints foo

// let x = 10;
// const g = x>10 || x<10 ? 'its both': 'equals 10';
// nested if statement 
const g = x<10 || x==10 ? 'its both': x>100?'its big':'its small';
console.log(g);
