let numberic = document.getElementById('numberic')
let englishWord = document.getElementById('EnglishWord')
let blind = document.getElementById('blind')
let type = document.getElementById('type')
let korean = document.getElementById('korean')
let prevWord = document.getElementById('prevWord')
let nextWord = document.getElementById('nextWord')
let progressBar = document.getElementById('progressBar')

blind.addEventListener('mousedown',() => {
  if(!blind.classList.contains('showAnswer')) {
    blind.classList.add('showAnswer')

  }
})

blind.addEventListener('mouseup',() => {
  if(blind.classList.contains('showAnswer')) {
    blind.classList.remove('showAnswer')
  }
})

prevWord.addEventListener('click', () => {

})

nextWord.addEventListener('click', () => {

})

progressBar.style.width = '12%'
