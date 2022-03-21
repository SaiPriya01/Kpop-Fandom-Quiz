var readlineSync=require("readline-sync");
var score=0;
var kQuestions=[{
  question: "which is the most viewed k-pop music video of all time? ",
  answer: "Gangnam Style"
},{
  question: "The non-korean idol in Blackpink  who is considered as 'Diamond-maknae'? ",
  answer: "Lisa"
},{
  question: "which is the most popular kpop group worldwide? ",
  answer: "BTS"
},{
  question: "Blackpink's jisoo made her acting debut in which kdrama? ",
  answer: "Snow drop"
},{
  question: "Who is considered as 'Golden-makanae' in BTS? ",
  answer: "Jungkook"
}]
function welcome() {
  var userName=readlineSync.question("Please enter your name to start the quiz ");
  console.log("Hey "+userName+"!! Welcome to Kpop Quiz");
}
function Quiz(question,answer){
  
  var userAnswer=readlineSync.question(question);
  if (userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("Your answer is right");
    score+=1;
    console.log("-------------------------------");
  }
  else {
    console.log("your answer is wrong");
    console.log("-------------------------------");
       }
}
function play(){
   welcome()
  for (let i=0;i<kQuestions.length;i++){
     Quiz(kQuestions[i].question,kQuestions[i].answer) 
  }
  console.log("Yeah!! you have scored "+score+" points");
}
play();
