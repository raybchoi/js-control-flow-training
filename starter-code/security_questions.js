console.log("security_questions.js loaded");

let securityQuestions = [
  {
    question: 'What is your current age?',
    expectedAnswer: '32'
  },
  {
    question: 'Where do you live?',
    expectedAnswer: 'SF'
  },
  {
    question: 'What is your name?',
    expectedAnswer: 'Ray'
  }
];
// console.log('securityQuestions :', securityQuestions);
let secTest = function () {
  // debugger;
  for ( let i = 0; i < securityQuestions.length; i++ ) {
  let input = prompt(securityQuestions[i].question);
  if ( input !== securityQuestions[i].expectedAnswer ) {
    alert('Sorry you are wrong');
    break;
  } else {
    alert('Well done!');
  }
  }

}
secTest();
// console.log('bottom');
