let name2 = ' Kyle ';

let namelen = name2.length;
console.log(namelen);

console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
// includes or contains

let passwords = 'abcde12323password4455667';
console.log(passwords.includes('password1'));


console.log(name2.trim());

/** 
 * 
 *  **Challenge**
 * functions to make :
 *  length is more than 8 
 *  doesnt contain the word password 
 * 
*/

let isValidPassword = function(password){
  const pass = password.length > 8 && !password.toLowerCase().includes('password')? true : false;
  return pass;
};

let getpass = 'isdubgvsiaubgviuasbrgvirjibds';

console.log(isValidPassword(getpass));