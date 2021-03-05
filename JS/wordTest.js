let numberic = document.getElementById('numberic')
let englishWord = document.getElementById('EnglishWord')
let blind = document.getElementById('blind')
let type = document.getElementById('type')
let korean = document.getElementById('korean')
let prevWord = document.getElementById('prevWord')
let nextWord = document.getElementById('nextWord')
let progressBar = document.getElementById('progressBar')
let headTitle = document.getElementById('headTitle')


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(!isMobile()) {
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

  headTitle.addEventListener('click', () => {
    location.href="/"
  })
  
} else {
  blind.addEventListener('touchstart',() => {
    if(!blind.classList.contains('showAnswer')) {
      blind.classList.add('showAnswer')
    }
  })
  
  blind.addEventListener('touchend',() => {
    if(blind.classList.contains('showAnswer')) {
      blind.classList.remove('showAnswer')
    }
  })
  
  blind.addEventListener('touchcancel',() => {
    if(blind.classList.contains('showAnswer')) {
      blind.classList.remove('showAnswer')
    }
  })

  headTitle.addEventListener('touchend', () => {
    location.href="/"
  })
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x; 
  }
}

function chnageType(str) {
  type.classList.remove('n')
  type.classList.remove('v')
  type.classList.remove('adv')
  type.classList.remove('adj')

  switch(str) {
    case 'n' : type.innerHTML = `명사`; type.classList.add('n'); break;
    case 'v' : type.innerHTML = `동사`; type.classList.add('v'); break;
    case 'adv' : type.innerHTML = `부사`; type.classList.add('adv'); break;
    case 'adj' : type.innerHTML = `형용사`; type.classList.add('adj'); break;
    default : type.innerHTML = `???`; break;
  }
}

function makeQuiz(_Word,_Mean,_type,_index) {
  numberic.innerHTML = `${_index+1}/${wordArray.length}`
  englishWord.innerHTML = _Word
  korean.innerHTML = _Mean
  chnageType(_type)
}


let wordArray
let index = 0
let maxIndex = 987654321
progressBar.style.width = '12%'


jQuery.ajax({
  type:'GET',						// POST 방식으로
  url: `/data`,		// saveVideo.php로 전송
  success: function(msg) {			// 성공시

    wordArray = JSON.parse(msg)
    maxIndex = wordArray.length
    shuffle(wordArray)
    shuffle(wordArray)

    makeQuiz(wordArray[index].Word,wordArray[index].Mean,wordArray[index].Type,index)

    if(isMobile()) {
      prevWord.addEventListener('touchend', () => {
        if(index > 0) {
          if(index == 1) { prevWord.classList.add('disable')}
          if(index == maxIndex-1) {nextWord.classList.remove('done'); nextWord.innerHTML = `다음 단어`;}
          index --;
          progressBar.style.width = `${12 +88*((index+1)/maxIndex)}%`
          makeQuiz(wordArray[index].Word,wordArray[index].Mean,wordArray[index].Type,index)
        }
      })
      
      nextWord.addEventListener('touchend', () => {
        if(index >= maxIndex-1) {
          alert(`학습 완료!`)
          location.href = '/'
        } else {
          if(index == 0) {prevWord.classList.remove('disable');}
          index++;
          if(index == maxIndex-1) {nextWord.classList.add('done'); nextWord.innerHTML = `학습 완료`}
          progressBar.style.width = `${12 +88*((index+1)/maxIndex)}%`
          makeQuiz(wordArray[index].Word,wordArray[index].Mean,wordArray[index].Type,index)
        }
      })
    } else {
      prevWord.addEventListener('click', () => {
        if(index > 0) {
          if(index == 1) { prevWord.classList.add('disable')}
          if(index == maxIndex-1) {nextWord.classList.remove('done'); nextWord.innerHTML = `다음 단어`;}
          index --;
          progressBar.style.width = `${12 +88*((index+1)/maxIndex)}%`
          makeQuiz(wordArray[index].Word,wordArray[index].Mean,wordArray[index].Type,index)
        }
      })
      
      nextWord.addEventListener('click', () => {
        if(index >= maxIndex-1) {
          alert(`학습 완료!`)
          location.href = '/'
        } else {
          if(index == 0) {prevWord.classList.remove('disable');}
          index++;
          if(index == maxIndex-1) {nextWord.classList.add('done'); nextWord.innerHTML = `학습 완료`}
          progressBar.style.width = `${12 +88*((index+1)/maxIndex)}%`
          makeQuiz(wordArray[index].Word,wordArray[index].Mean,wordArray[index].Type,index)
        }
      })
    }

  },error: function(msg) {			// 실패시
    console.log(msg)
  }
  
});

document.addEventListener('touchmove', function(event) {
  event = event.originalEvent || event;
  if(event.scale > 1) {
      event.preventDefault();
  }
}, false);

