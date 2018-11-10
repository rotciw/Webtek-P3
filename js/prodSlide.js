/* inspired by "How TO - Lightbox" from https://www.w3schools.com/howto/howto_js_lightbox.asp */

let slideIndex = 1
showSlides(slideIndex)

// Thumbnail image controls
function currentSlide (n) {
  showSlides((slideIndex = n))
}

function showSlides (n) {
  let i
  let slides = document.getElementsByClassName('slides')
  console.log(slides)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex - 1].style.display = 'block'
}
