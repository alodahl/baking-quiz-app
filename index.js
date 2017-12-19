var $ = window.jQuery;

let i = 0;
let numCorrect = 0;
let userMadeChoice = false;
let userClickedSubmit = false;
let choice;

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

function handleUserAnswerChosen() {
  $('.insertQuizQuestion').on('change', 'input', function(event) {
    event.preventDefault();
    userMadeChoice = true;
    userClickedSubmit = false;
    choice = event.currentTarget.value;
  })
}

function handleUserAnswerSubmitted() {
    $('.insertQuizQuestion').on('click', `.js-submit-radio-form`, function(event) {
      event.preventDefault();
      userClickedSubmit = true;

      if ((questionList[i].rightAnswerIndex == choice) && userMadeChoice && userClickedSubmit) {
        numCorrect++;
        getCorrectFeedbackPage();
        i++;
      } else if (userMadeChoice && userClickedSubmit) {
        getIncorrectFeedbackPage();
        i++;
      }
      userMadeChoice = false;
      userClickedSubmit = false;
    })
}

//on button click, generate next quiz page
function handleNextQuestionButtonClick() {
  $('.insertQuizQuestion').on('click', '.js-next-ques-button', event => {
    event.preventDefault();
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
  $('.question').empty();
  $('.insertQuizQuestion').html(generateQuestionPage());
}

function generateQuestionPage() {
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
  $('.question').empty();
  $('.insertQuizQuestion').html(generateFinalPage());
}

function generateFinalPage() {
  return`<section role="dialog" class="quiz">
  <p>You scored ${numCorrect}/10!</p><img class="feedback-image"  src="https://i.giphy.com/media/l1J3A70hF2PUEh7pu/giphy.webp" alt="Tina Fey dips a grilled cheese into sheetcake">
  <button class="submit js-start-quiz-button button" type="submit">Try Again</button>
  </section>`;
}

//run event listeners
function runBakingQuiz() {
  handleStartQuizButtonClick();
  handleUserAnswerChosen();
  handleUserAnswerSubmitted();
  handleNextQuestionButtonClick();
}

$(runBakingQuiz);
