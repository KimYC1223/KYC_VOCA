let button = document.getElementById('button');
let headTitle = document.getElementById('headTitle')

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(isMobile()) {
  button.addEventListener('touchend', () => {
    location.href="./wordTest"
  })

  headTitle.addEventListener('touchend', () => {
    location.href="/"
  })
} else {
  button.addEventListener('click', () => {
    location.href="./wordTest"
  })

  headTitle.addEventListener('click', () => {
    location.href="/"
  })
}

