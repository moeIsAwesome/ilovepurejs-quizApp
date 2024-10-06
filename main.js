import quizQuestions from './quiz.js';

const allOptions = document.getElementsByName('option');
const submitButton = document.querySelector('.submit-btn');
const question = document.querySelector('#question');
const optionA_text = document.querySelector('#a_text');
const optionB_text = document.querySelector('#b_text');
const optionC_text = document.querySelector('#c_text');
const optionD_text = document.querySelector('#d_text');
const warningArea = document.querySelector('.warning-area');

let currentQuestion = 0;
let numberOfQuestions = quizQuestions.length;

function loadQuestions() {
  deselectAll();
  question.innerText = quizQuestions[currentQuestion].question;
  optionA_text.innerText = quizQuestions[currentQuestion].a;
  optionB_text.innerText = quizQuestions[currentQuestion].b;
  optionC_text.innerText = quizQuestions[currentQuestion].c;
  optionD_text.innerText = quizQuestions[currentQuestion].d;
}
loadQuestions();

function getSelectedOption() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  return selectedOption ? selectedOption : null;
}

function deselectAll() {
  allOptions.forEach((option) => (option.checked = false));
}

submitButton.addEventListener('click', () => {
  let selectedAnswerByuser = getSelectedOption();
  if (!selectedAnswerByuser) {
    alert('please select something!');
    return;
  }
  if (selectedAnswerByuser === quizQuestions[currentQuestion].correct) {
    warningArea.innerHTML = '<p style="color: green;">Correct!</p>';
  } else {
    warningArea.innerHTML = '<p style="color: red;">Wrong!</p>';
  }

  if (currentQuestion < numberOfQuestions) {
    currentQuestion++;
    loadQuestions();
  }
});
