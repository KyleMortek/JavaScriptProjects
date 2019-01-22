 
// let greetUser  =()=>{
//   console.log('Welcome User');
// };
let greetUser  =function(){
  console.log('Welcome User');
};
// let greetUser=() => console.log('Welcome User'); 
greetUser();

let square = function(num) {
  let result = num * num ;
  return result;
};
let retVal = square(10);
console.log(retVal);