// 2019-01-21 12:04:43

let myBook1 = {
  title: '1984',
  author: 'Geoge Orwell',
  pageCount: 326
};

let myBook2 = {
  title: 'A Peoples History',
  author: 'Howard Zim',
  pageCount: 723
};

/**
 *
 *
 * @param {*} book
 * @returns
 */
let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
  // console.log(`${book.title} by ${book.author}`);
};

// getSummary(myBook1);
// getSummary(myBook2);

// second way you can use objects
let mybook1Summary = getSummary(myBook1);
let mybook2Summary = getSummary(myBook2);
console.log(mybook1Summary.pageCountSummary);
console.log(mybook2Summary.pageCountSummary);

/**
 * 
 * Challenge 
 */
let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius:(fahrenheit -32 )*(5/9)
  };
};

let temps = convertFahrenheit(74);
console.log(temps);
console.log(`the temp in degrees F is ${temps.fahrenheit}`);
console.log(`the temp in degrees K is ${temps.kelvin}`);
console.log(`the temp in degrees C is ${temps.celsius}`);



