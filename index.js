"use strict";
var $ = window.jQuery;

console.log("running index.js")

const questionList = [
  {questionText: "All of the following sugars are white, except:",
  answers:[
    "beet sugar",
    "turbinado sugar",
    "castor sugar",
    "cane sugar"
  ],
  rightAnswerIndex:1
},{
  questionText: "How did the pound cake get its name?",
  answers:[
    "A traditional pound cake weighs one pound.",
    "A traditional pound cake is very dense.",
    "A traditional pound cake is made with one pound each of flour, butter, eggs, and sugar.",
    "Part of the process involves pounding the butter."
  ],
  rightAnswerIndex:2
},{
  questionText: "Which spice is not typically used in apple pie filling?",
  answers:[
    "coriander",
    "allspice",
    "nutmeg",
    "clove"
  ],
  rightAnswerIndex:0
},{
  questionText: "Which type of chocolate has the highest percentage of cocoa?",
  answers:[
    "baking chocolate",
    "semi-sweet chocolate",
    "bittersweet chocolate",
    "milk chocolate"
  ],
  rightAnswerIndex:0
},{
  questionText: "What is the purpose of eggwash?",
  answers:[
    "It is for cleaning eggs before use in a recipe.",
    "It is the base for certain sauces.",
    "It is useful for cleaning burnt pans.",
    "It gives crusts shine and a golden-brown color."
  ],
  rightAnswerIndex:3
},{
  questionText: "Which of these has the highest gluten content?",
  answers:[
    "cake flour",
    "bread flour",
    "wheat flour",
    "all-purpose flour"
  ],
  rightAnswerIndex:1
},{
  questionText: "What gives pretzels their characteristic brown crust?",
  answers:[
    "baking soda",
    "eggwash",
    "a high baking temperature",
    "molasses"
  ],
  rightAnswerIndex:0
},{
  questionText: "What is sweet cream butter?",
  answers:[
    "butter with added sugar",
    "a type of frosting",
    "unsalted butter",
    "a mixture of butter and cream"
  ],
  rightAnswerIndex:2
},{
  questionText: "Which of the following would be an appropriate oil tempurature for frying donuts?",
  answers:[
    "250° F",
    "350° F",
    "450° F",
    "550° F"
  ],
  rightAnswerIndex:1
},{
  questionText: "What is involved in tempering chocolate?",
  answers:[
    "Cooling melted chocolate in a mold.",
    "Melting chocolate, bringing the temperature down, bringing the temperature up again before cooling in a mold.",
    "Whipping air into the melted chocolate.",
    "Mixing cream and sugar into cocoa paste."
  ],
  rightAnswerIndex:1
}];




let i = 0;
let numCorrect = 0;
//NB: answer indeces are compared to hard-coded correct indeces in the handleSubmit and handleStart button functions

function getCorrectFeedbackPageOnSubmit(){
        $('.insertQuizQuestion').on('click', `.js-submit-radio-form`, event => {
          event.preventDefault();
          renderFeedbackPage();
        })
}

function handleStartQuizButtonClick() {
  $('body').on('click', '.js-start-quiz-button', event => {
    event.preventDefault();
  //on button click on the start or final page, reset correct answers to 0,
  //render quiz page 0 to DOM (aka question 1)
  //and record only a correct radio choice to the numCorrect total.
  
  i = 0;
  numCorrect = 0;
  renderQuestionPage(i);
  $(".start-page").addClass("hidden");
   
  $("input[name='answer1']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
  
  console.log("handleStartQuizButtonClick ran");
})}

function handleSubmitAnswerButtonClick() {
    $('.insertQuizQuestion').on('click', `.js-submit-radio-form`, event => {
      event.preventDefault();
      
  if (i < 9) {
    i++;
    renderQuestionPage();
  
    if (i==1) {
      $("input[name='answer2']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==2) {
      $("input[name='answer0']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==3) {
      $("input[name='answer0']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==4) {
      $("input[name='answer3']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==5) {
      $("input[name='answer1']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==6) {
      $("input[name='answer0']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==7) {
      $("input[name='answer2']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==8) {
      $("input[name='answer1']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    } else if (i==9) {
      $("input[name='answer1']").change(function(){
      numCorrect++;
      console.log(numCorrect);
      getCorrectFeedbackPageOnSubmit();
    })
    }
  } else {
  renderFinalPage();
  }
  //and generate and display feedback page: 
  //  renderFeedbackPage();
  //this should apply to button on all question pages
    console.log("handleSubmitAnswerButtonClick ran");
})}

function handleNextQuestionButtonClick(pageNum) {
  $('.insertQuizQuestion').on('click', '#js-next-ques-button', event => {
    event.preventDefault();
  console.log("handleNextQuestionButtonClick ran");
  //on button click, generate next quiz page 
  i++;
  
  renderQuestionPage();
  
})}

function renderQuestionPage(pageNum) {
  console.log("renderQuestionPage ran");
  //increase question number ++
  //empty the ".insert..." div, then generate next question page and place it inside the div 
 
  $('.question').empty();
  $('.insertQuizQuestion').html(generateQuestionPage(i));
  //console.log(`${questionList[i].questionText}`);
  //$('.question').text(`${questionList[i].questionText}`);
   
}

function generateQuestionPage(pageNum) {
  console.log("generateQuestionPage ran");
  
  return `<form class="quiz" name="quizquestion"><section class="quizquestion" id="quizquestion" role="quiz question">
        <p class="question">Question ${pageNum + 1}/10: ${questionList[pageNum].questionText} (choose one)</p>
        <span role="question"><input type="radio" name="answer0" id="" value="0">
          <label for="">${questionList[pageNum].answers[0]}</label>
          <br></span>
        <span role="question"><input type="radio" name="answer1" id="" value="1">
          <label for="">${questionList[pageNum].answers[1]}</label>
          <br></span>
        <span role="question"><input type="radio" name="answer2" id="" value="2">
          <label for="ans-great-3">${questionList[pageNum].answers[2]}</label>
          <br></span>
        <span role="question"><input type="radio" name="answer3" id="" value="3">
          <label for="ans-great-3">${questionList[pageNum].answers[3]}</label><br></span>
          </section>
        <button class="submit js-submit-radio-form" type='submit'>Submit</button></form>`;
}

function renderIncorrectFeedbackPage() {
  console.log("renderFeedbackPage ran");
  //empty the question html from the div, then generate next feedback page and place it inside the form element
  let correctIndex= `${questionList[i].rightAnswerIndex}`;
  $('.insertQuizQuestion').empty();
  $('.insertQuizQuestion').html(`<section role="feedback popup page" class="quiz">
       <p>Not quite!</p><span role="text">The correct answer was:${questionList[i].answers[correctIndex]}</span>
    </section>`);

}

function renderFeedbackPage() {
  console.log("renderFeedbackPage ran");
  //empty the question html from the div, then generate next feedback page and place it inside the form element
  $('.insertQuizQuestion').empty();
  $('.insertQuizQuestion').html(generateFeedbackPage());
  //return pageNum;
}

function generateFeedbackPage() {
  console.log("generateFeedbackPage ran");
  
  
  
  return`<section role="feedback page" class="quiz">
       <p>Correct!</p><img class="correctanswerimage" src="https://media.giphy.com/media/cqLxStdbAGVnW/giphy.gif" alt="Tina Fey eats a cupcake sandwich">
       <button id="js-next-ques-button" class="submit" type="submit">Next Question</button>
    </section>`;
}

function renderFinalPage() {
  console.log("renderFinalPage ran");
  
  $('.question').empty();
  $('.insertQuizQuestion').html(generateFinalPage());
}
  
function generateFinalPage() {
  console.log("generateFinalPage ran");
  return`<section role="final page" class="quiz">
       <p>You scored ${numCorrect}/10!</p><img class="correctanswerimage"  src="https://i.giphy.com/media/l1J3A70hF2PUEh7pu/giphy.webp" alt="Tina Fey dips a grilled cheese into sheetcake">
       <button class="submit js-start-quiz-button" type="submit">Try Again</button>
     </section>`;
}


function handleCorrectAnswerCount() {
  
  //on answer submission, if answer matches correct answer index, add 1 to correct answer count
  //if () {
  //  numCorrect++;
  //}
  console.log("handleCorrectAnswerCount ran");
}

function displayNumberCorrect() {
  
  //this function handles displaying the number of correct answers to the text in the final page.
  console.log("displayNumberCorrect ran");
}

function runBakingQuiz() {
  //run event listeners
  handleStartQuizButtonClick();
  handleSubmitAnswerButtonClick();
  handleNextQuestionButtonClick();
  displayNumberCorrect();
}

$(runBakingQuiz);
