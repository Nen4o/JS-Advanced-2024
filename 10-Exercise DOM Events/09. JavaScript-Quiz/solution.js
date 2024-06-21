function solve() {
  const questionContainer = document.getElementById('quizzie');
  const questions = questionContainer.querySelectorAll('section');

  const firstQuestion = questions[0];
  const secondQuestion = questions[1];
  const thirdQuestion = questions[2];

  const liElementForFirstQuestion = firstQuestion.querySelectorAll('li');
  const liElementForSecondQuestion = secondQuestion.querySelectorAll('li');
  const liElementForThirdQuestion = thirdQuestion.querySelectorAll('li');

  let ulElement = document.getElementById('results');
  const resultText = ulElement.querySelector('h1');
  let correctAnswers = 0;

  for (let i = 1; i < liElementForFirstQuestion.length; i++) {
    const divElements = liElementForFirstQuestion[i].querySelector('div [class=answer-wrap]');
    const paragraphs = divElements.querySelector('p');
    paragraphs.addEventListener('click', firstQuestionAnswer)
  }

  for (let i = 1; i < liElementForSecondQuestion.length; i++) {
    const divElements = liElementForSecondQuestion[i].querySelector('div [class=answer-wrap]');
    const paragraphs = divElements.querySelector('p');
    paragraphs.addEventListener('click', secondQuestionAnswer)
  }

  for (let i = 1; i < liElementForThirdQuestion.length; i++) {
    const divElements = liElementForThirdQuestion[i].querySelector('div [class=answer-wrap]');
    const paragraphs = divElements.querySelector('p');
    paragraphs.addEventListener('click', thirdQuestionAnswer)
  }

  function firstQuestionAnswer(event){
    if (event.currentTarget.textContent == `onclick`){
      correctAnswers++;
    }
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'block';
  }

  function secondQuestionAnswer(event){
    if (event.currentTarget.textContent == `JSON.stringify()`) {
      correctAnswers++;
    }
    secondQuestion.style.display = 'none';
    thirdQuestion.style.display = 'block';
  }

  function thirdQuestionAnswer(event){
    if (event.currentTarget.textContent == `A programming API for HTML and XML documents`) {
      correctAnswers++;
    }
    thirdQuestion.style.display = 'none';
    console.log(resultText.parentElement);
    ulElement.style.display = 'block';
    if (correctAnswers == 3) {
      resultText.textContent = "You are recognized as top JavaScript fan!";
    } else {
      resultText.textContent = `You have ${correctAnswers} right answers`
    }
  }

}
