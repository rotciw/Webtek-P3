function zoomIn (n) {
  console.log('yo')
  let i
  let slides = document.getElementsByClassName('slides')
  console.log(slides)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides[slideIndex - 1].style.transform = 'scale(3)'
}

function zoomOut (n) {
  console.log('yo')
  let i
  let slides = document.getElementsByClassName('slides')
  console.log(slides)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides[slideIndex - 1].style.transform = 'scale(1)'
}
