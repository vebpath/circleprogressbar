let circle = document.querySelector('.circle')

let progressvalue = 0
let endprogressvalue = 68
let speed = 0.5


function updateProgressBar(){
  progressvalue += speed

  circle.setAttribute('data-percent', `${progressvalue.toFixed()}%`)

  circle.style.background = `conic-gradient(var(--primaryColor),${progressvalue*3.6}deg , #EBEBEB 0deg)`

  if(progressvalue<endprogressvalue){
    requestAnimationFrame(updateProgressBar)
  }
}

requestAnimationFrame(updateProgressBar)