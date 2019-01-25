// how many paris of numbers are there without replacement.
const sampleA = 9;
const sampleB = [10,20,20,10,10,30,50,10,20];
let ars= [];
// 9 samples. find number of pairs there are hacker 
for( let i = 0; i <100; i++){
  ars.push(0);
}
for( let i = 0; i < sampleA; i++){
  let top = sampleB[i];
  ars[top]= ars[top]+1; 
}
let countPairs= 0;
for(let i = 0; i<100; i++){
  if(ars[i]!=0){
    countPairs= countPairs + Math.floor((ars[i]/2));
  }
}
console.log(ars);
console.log(countPairs);


// key-val pairs or a map would be nicer. 