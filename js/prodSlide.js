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
  let thumb = document.getElementsByClassName("thumbs")
  console.log(slides)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    thumb[i].style.opacity = "1"
  }
  slides[slideIndex - 1].style.display = 'block'
  thumb[slideIndex - 1].style.opacity = "0.3"
}
