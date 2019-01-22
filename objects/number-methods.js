
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