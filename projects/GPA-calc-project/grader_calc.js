// students score, total possible score 
// this is a gpa calculator 

// highest score is 4 points per credit hour. == A
// Letter Grade	Points
// A	4
// A-	3.67
// B+	3.33
// B	3
// B-	2.67
// C+	2.33
// C	2
// C-	1.67
// D+	1.33
// D	1
// F	0


// this js file will be a script for all the backend work on this calculator
let letterGradeArray = ['A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
let letterPoints = [4,3.67,3.33,3,2.67,2.33,2,1.67,1.33,1,0];
in_num = document.getElementById('input_number').value;
in_letter = document.getElementById('input_letter').value;
userInputCredits = ()=> {
  const credits = 
  Number.isInteger(in_num) ? 
  in_num : 
  'invalid response please input number in this format 0.00';
  // let text = document.getElementById('input_text').value;
};

//getter function for reading user input 
userInputLetterGrade = ()=>{
  const letterGrade = letterGradeArray.includes(in_letter) ?
  in_letter: `invalid response, please choose from this list:
  A,A-,B+,B,B-,C+,C,C-,D+,D,D-,F`;
  
  
};



pointsConverter = function (credits, letterGrade){
  
};
