// 2019-01-25 14:32:17
// improved expense tracker
const newAccount = {
  name:'kyle',
  expense:[],
  income:[],
  addExpense: function(expenseTitle, amount){
    // function to add expense 
    this.expense.push({
      description: expenseTitle,
      amount: amount
    });
  },
  getAccountSummary: function(){
    // get all amounts from expense object
    let moneyArr=[0,0,0];

    let getSumExp= 0;
    let getSumInc=0;
    this.expense.forEach(element => {
      getSumExp = getSumExp +element.amount;
    });
    this.income.forEach(elem=>{
      getSumInc =getSumInc+ elem.amount;
    });
    moneyArr[0]=getSumExp; // this array is not needed. 
    moneyArr[1]=getSumInc;
    moneyArr[2]=getSumInc-getSumExp;
    return `${newAccount.name} has $${moneyArr[0]} in expenses, $${moneyArr[1]} in income and has a balance of $${moneyArr[2]}`;
  },
  addIncome: function(description,amount){
    this.income.push({
      description: description,
      amount: amount
    });
  }

};
console.log(newAccount)
newAccount.addExpense('Rent', 950);
console.log(newAccount);
// newAccount.getAccountSummary()

newAccount.addExpense('Coffee',2);

newAccount.addIncome('website', 500);
newAccount.addIncome('website', 500);

newAccount.addIncome('website', 500);
newAccount.addIncome('website', 500);
newAccount.addIncome('website', 500);

// console.log(newAccount.income);
console.log(newAccount.getAccountSummary());
// console.log(`${newAccount.name} has $${newAccount.getAccountSummary()[0]} in expenses, $${newAccount.getAccountSummary()[1]} in income and has a balance of $${newAccount.getAccountSummary()[2]}`);









// funcitons

// const sumAll = function(ar){
//   let getSum = 0;
//   ar.forEach(elem=>{
//     getSum = getSum +elem;
//   });
// };