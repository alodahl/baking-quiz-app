"use strict";
var $ = window.jQuery;

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

function handleStartQuizButtonClick() {
  $('body').on('click', '.js-start-quiz-button', event => {
    event.preventDefault();
    //on button click on the start or final page, reset correct answers to 0,
    //render quiz page 0 to DOM (aka question 1)
    //and record only a correct radio choice to the numCorrect total.
    i = 0;
    numCorrect = 0;
    renderQuestionPage();
    $(".start-page").addClass("hidden");
  })
}

function handleUserAnswerSubmission() {
  $('.insertQuizQuestion').on('change', 'input', function(event) {
    event.preventDefault();
    let choice = event.currentTarget.value;
    console.log(`user choice was ${choice} for question ${i + 1}/10. The correct answer was ${questionList[i].rightAnswerIndex}`);

    $(`.js-submit-radio-form`).on('click', function(event) {
      event.preventDefault();
      if (questionList[i].rightAnswerIndex == choice) {
        numCorrect++;
        console.log(`${numCorrect} correct answers`);
        getCorrectFeedbackPage();
      } else {
        getIncorrectFeedbackPage();
      }
      i++;
      console.log("whole handleUserAnswerSubmission ran");
    })
  })
}

//on button click, generate next quiz page
function handleNextQuestionButtonClick() {
  $('.insertQuizQuestion').on('click', '.js-next-ques-button', event => {
    event.preventDefault();
    console.log("handleNextQuestionButtonClick ran");
    if (i === 10) {
      renderFinalPage();
    } else {
      renderQuestionPage();
    }
  })
}

function getCorrectFeedbackPage(){
  let correctFeedbackHtml = `<section role="dialog" class="quiz">
  <p>Correct!</p><img class="feedback-image correctanswerimage" src="https://media.giphy.com/media/cqLxStdbAGVnW/giphy.gif" alt="Tina Fey eats a cupcake sandwich">
  <button class="submit button js-next-ques-button" type="submit">Next Question</button>
  </section>`;
  $('.insertQuizQuestion').empty();
  $('.insertQuizQuestion').html(`${correctFeedbackHtml}`);
  // })
}

function getIncorrectFeedbackPage() {
  //empty the question html from the div, then generate next feedback page and place it inside the form element
  let correctIndex= `${questionList[i].rightAnswerIndex}`;
  $('.insertQuizQuestion').empty();
  $('.insertQuizQuestion').html(`
    <section role="feedback popup page" class="quiz">
    <p>Not quite!</p>
    <span role="text">The correct answer was: </span>
    <span role="text">${questionList[i].answers[correctIndex]}</span>
    <button class="js-next-ques-button button">Next Question</button>
    </section>`);
}

//increase question number ++
//empty the ".insert..." div, then generate next question page and place it inside the div

function renderQuestionPage() {
  console.log("renderQuestionPage ran");
  $('.question').empty();
  $('.insertQuizQuestion').html(generateQuestionPage());
}

function generateQuestionPage() {
  console.log("generateQuestionPage ran");

  return `<form class="quiz" name="quizquestion"><section class="quizquestion" id="radio-button-form" role="radiogroup">
  <p class="question">Question ${i + 1}/10: ${questionList[i].questionText} (choose one)</p>
  <span role="radio"><input type="radio" name="radio" id="answer0" value="0" required="required">
  <label for="answer0">${questionList[i].answers[0]}</label>
  <br></span>
  <span role="radio"><input type="radio" name="radio" id="answer1" value="1" required="required"
  <label for="answer1">${questionList[i].answers[1]}</label>
  <br></span>
  <span role="radio"><input type="radio" name="radio" id="answer2" value="2" required="required">
  <label for="answer2">${questionList[i].answers[2]}</label>
  <br></span>
  <span role="radio"><input type="radio" name="radio" id="answer3" value="3" required="required">
  <label for="answer3">${questionList[i].answers[3]}</label><br></span>
  </section>
  <button class="submit js-submit-radio-form button" type='submit'>Submit</button></form>`;
}

function renderFinalPage() {
  console.log("renderFinalPage ran");

  $('.question').empty();
  $('.insertQuizQuestion').html(generateFinalPage());
}

function generateFinalPage() {
  console.log("generateFinalPage ran");
  return`<section role="dialog" class="quiz">
  <p>You scored ${numCorrect}/10!</p><img class="feedback-image"  src="https://i.giphy.com/media/l1J3A70hF2PUEh7pu/giphy.webp" alt="Tina Fey dips a grilled cheese into sheetcake">
  <button class="submit js-start-quiz-button button" type="submit">Try Again</button>
  </section>`;
}

function runBakingQuiz() {
  //run event listeners
  handleStartQuizButtonClick();
  handleUserAnswerSubmission();
  handleNextQuestionButtonClick();
  // displayNumberCorrect();
}

$(runBakingQuiz);
