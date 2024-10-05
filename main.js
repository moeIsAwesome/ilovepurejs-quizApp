import quizQuestions from './quiz.js';

const allOptions = document.getElementsByName('option');
const submitButton = document.querySelector('.submit-btn');
const question = document.querySelector('#question');
const optionA_text = document.querySelector('#a_text');
const optionB_text = document.querySelector('#b_text');
const optionC_text = document.querySelector('#c_text');
const optionD_text = document.querySelector('#d_text');

let currentQuestion = 0;

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
  let selectedOption;
  allOptions.forEach((option) => {
    if (option.checked) {
      selectedOption = option.id;
    }
  });
  return selectedOption;
}

function deselectAll() {
  allOptions.forEach((e) => {
    e.checked = false;
  });
}
console.log(currentQuestion);

submitButton.addEventListener('click', () => {
  let selectedAnswerByuser = getSelectedOption();
  if (!selectedAnswerByuser) {
    alert('please select something!');
    return;
  }
  if (selectedAnswerByuser === quizQuestions[currentQuestion].correct) {
    console.log('Huraaay!');
  } else {
    console.log('Wrong!');
  }
  if (currentQuestion === quizQuestions.length - 1) {
    submitButton.disabled = true;
    return;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    loadQuestions();
  }
});
