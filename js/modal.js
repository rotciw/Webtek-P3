function openModal (n) {
  let i
  let Modal = document.getElementsByClassName('Modal')
  console.log(Modal)
  if (n > Modal.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = Modal.length
  }
  for (i = 0; i < Modal.length; i++) {
    Modal[i].style.display = 'none'
  }
  Modal[slideIndex - 1].style.display = 'block'
}

function closeModal () {
  document.getElementsByClassName('Modal')[0].style.display = 'none'
  document.getElementsByClassName('Modal')[1].style.display = 'none'
  document.getElementsByClassName('Modal')[2].style.display = 'none'
  document.getElementsByClassName('Modal')[3].style.display = 'none'
}
