var readlineSync = require('readline-sync');
var score = 0;
var highScorers = [{
    name: 'Maneesha',
    score: 5
  },
  {
    name: 'Bhargavi',
    score: 4
  }
]
var kQuestions = [{
  question: "which is the most viewed k-pop music video of all time? ",
  answer: "Gangnam Style"
}, {
  question: "The non-korean idol in Blackpink  who is considered as 'Diamond-maknae'? ",
  answer: "Lisa"
}, {
  question: "which is the most popular kpop group worldwide? ",
  answer: "BTS"
}, {
  question: "Blackpink's jisoo made her acting debut in which kdrama? ",
  answer: "Snow drop"
}, {
  question: "Who is considered as 'Golden-makanae' in BTS? ",
  answer: "Jungkook"
}]

function welcomeUser() {
  var userName = readlineSync.question('please enter your name: ');
  console.log(`\nHi! ${userName}. Welcome to "KPOP-FANDOM-QUIZ" quiz`)
}

function playQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('you are right!');
  } else {
    console.log('you are wrong! \ncorrect answer is: ' + answer);
  }
  console.log('current Score: ', score);
  console.log('---------------------------------');
}

function askQuestion() {
  for (let i = 0; i < kQuestions.length; i++) {
    var currentQuestion = kQuestions[i];
    playQuiz(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  if (score < 1) {
    console.log('your final score is: ', score, '. Don\'t worry if you don\'t know me.Let\'s have a coffee someday!');
  } else {
    console.log('Hurrah! you have scored: ', score, 'you know me well');
  }
  console.log('---------------------------------');
  console.log('\nBelow are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('---------------------------------');
  highScorers.map(names => console.log(`${names.name}: ${names.score}`));
}
welcomeUser();
askQuestion();
showScores();