const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Buds which give rise to leafy shoots are',
    answers: [
      { text: 'Adventitious buds', correct: false },
      { text: 'Vegetative buds', correct: true },
      { text: 'Reproductive buds', correct: false },
      { text: 'Radical buds', correct: false },
    ]
  },
  {
    question: 'Buds occurring on the nodes outside the leaf bases are',
    answers: [
      { text: 'Axillary', correct: false },
      { text: 'Extra-axillary', correct: true },
      { text: 'Terminal', correct: false },
      { text: 'Cauline', correct: false }
    ]
  },
  {
    question: ' Axillary buds develop',
    answers: [
      { text: 'Endogenously from plerome', correct: false },
      { text: 'Exogenously from outer cortex', correct: true },
      { text: 'Exogenously from epidermis', correct: false },
      { text: 'Endogenously from pericycle', correct: false }
    ]
  },
  {
    question: 'Largest bud occurs in',
    answers: [
      { text: 'Brussel’s Sprout', correct: false },
      { text: 'Cabbage', correct: true },
      { text: 'Lettuce head', correct: false },
      { text: 'Cauliflower', correct: false },
    ]
  },
  {
    question: 'Heads of Lettuce are',
    answers: [
      { text: 'Undeveloped', correct: false },
      { text: 'Unopened flowers', correct: false },
      { text: 'Buds', correct: true },
      { text: 'Modified stems', correct: false },
    ]
  },
  {
    question: 'Brussel’s Sprouts are',
    answers: [
      { text: 'Undeveloped inflorescence', correct: false },
      { text: 'Floral buds', correct: false },
      { text: 'Vegetative buds', correct: true },
      { text: 'Fruits', correct: false },
    ]
  },
  {
    question: 'Bulbils occur in',
    answers: [
      { text: 'Oxalis', correct: false },
      { text: 'Agave', correct: false },
      { text: 'Lily', correct: false },
      { text: 'All the above', correct: true },
    ]
  },
  {
    question: 'Buds that produce lateral brunches develop at',
    answers: [
      { text: 'Internodes', correct: false },
      { text: 'Apical meristems', correct: false },
      { text: 'Auxillary meristems', correct: false },
      { text: 'Nodes', correct: true },
    ]
  },
  {
    question: 'Buds typically occur at',
    answers: [
      { text: 'Leaf bases', correct: false },
      { text: 'Leaf axils', correct: false },
      { text: 'Tips of stems and roots', correct: false },
      { text: 'Tips of branches and leaf branches', correct: true },
    ]
  },
  {
    question: 'Monopodial stem is produced due to the activity of',
    answers: [
      { text: 'Accessory bud', correct: false },
      { text: 'Lateral bud', correct: false },
      { text: 'Apical bud', correct: true },
      { text: 'Adventitious bud', correct: false },
    ]
  },
  {
    question: 'Stem is reduced in',
    answers: [
      { text: 'Rhizome', correct: false },
      { text: 'Corm', correct: false },
      { text: 'Bulb', correct: true },
      { text: 'Tuber', correct: false },
    ]
  },
]