let myAccount = {
  name: 'Kyle',
  expenses: 0,
  income: 0
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense(myAccount, 2.50);
console.log(myAccount);

/** 
 * 
 * **Challenge**
 * *functions*
 *  addIncome
 *  restAccount
 *  getAccountSummary
 *  
 */
/**
 *
 *
 * @param {Object} account - refernce to myAccount Object
 * @param {string} account.name - The name of the account holder
 * @param {number} account.expenses - The account holders expenses
 * @param {number} account.income - The account holders income
 * @param {number} payCheck - the account holders paycheck to be added to income
 * 
 * this function allows one to add paycheck to income inside the myAccount obj
 */
let addIncome = function (account, payCheck) {
  account.income = account.income + payCheck;
};

/**
 * 
 * this function resets the income and expenses from account 
 * @param {Object} account - refernce to myAccount Object
 * @param {string} account.name - The name of the account holder
 * @param {number} account.expenses - The account holders expenses
 * @param {number} account.income - The account holders income
 */
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};
/** 
 * this function prints out the summary of myAccount 
 * @param {Object} account - refernce to myAccount Object
 * @param {string} account.name - The name of the account holder
 * @param {number} account.expenses - The account holders expenses
 * @param {number} account.income - The account holders income
*/
let getAccountSummary = function(account){
  let balance = account.income - account.expenses;
  console.log(`${account.name}'s account contains ${account.expenses} dollars of debt and ${account.name} has an income of ${account.income}`);
  console.log(`${account.name} has a balance of ${balance} in the account`);
};


addIncome(myAccount,250);
getAccountSummary(myAccount);
console.log('resetting the account');
resetAccount(myAccount);
getAccountSummary(myAccount);

// let resetAccount = ()=>{
//   myAccount.expenses = 0;
//   myAccount.income = 0;
// };
// function addIncome(account,payCheck){
//   account.income = account.income + payCheck;

// }