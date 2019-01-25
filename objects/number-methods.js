
let num = 103.947;
console.log(num.toFixed(2));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log(Math.sin(num));

let mins = 0;
let maxs = 1;

//returns a random number between 0 and .999999
let rando = Math.random();
console.log(rando);

//returns a number between min aand max +1
let rando1 = Math.floor(Math.random() * (maxs-mins +1))+mins;
console.log(rando1);


/**   
 * 
 * ***CHALLENGE***
 *  1-5 random number between 1-5 
*/

let makeGuess = function(guess){
  let randoNum = Math.floor(Math.random()*(5-1 +1))+1;
  const answers = randoNum === guess ? true:false;
  console.log(`my guess is ${guess} and the random numer is ${randoNum} === ${answers}`);
};

makeGuess(1);


// let numbers = 3;

// let answerss = numbers%2;
// console.log('this is :'+answerss);

// let l = 3 ;

// let r = 7;

// let i = l ;
//  for( i; i < r+1; i++){
//    if ( i %2 === 1){

//      console.log(i);
//    }
//  }
//simple question ignore
// let str = '><><><>>><>>>>>>>>>>';
// let x = 0;
// let y = 0;
// let ii = 0;
// let xx = [];
// let yy=[];
// let master = []
// let replacements = 3;
// let replacementCount = 0;
// for( ii ; ii<str.length+1; ii++ ){
//   if(str[ii] === '<'){
//     xx.push(str[ii]);
//   }
//   if(str[ii] === '>'){
//     yy.push(str[ii]);
//   }
//   if(xx.length < yy.length && str[ii]==='>' && str[ii-1]==='>'){
//     master.push('<>');
//     xx.push('<');
//     if(replacementCount > replacements){
//       return console.log('not balanced');

//     }else{
//       replacementCount= replacementCount+1;
//     }
//   }else {
//     master.push(str[ii]);
//   }
// }
// if(xx.length === yy.length){
//   console.log("balanced");
// }else{
//   console.log('not balanced');

// }
// console.log(xx);
// console.log(yy);




