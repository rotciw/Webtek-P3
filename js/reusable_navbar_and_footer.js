window.onload = function load_navbar_and_footer () {

  // Footer
  document.getElementById('footer').innerHTML =
    '<div class="footer-right">'+
    '<p>Meld deg på nyhetsbrevet!</p>'+
    '<form action="#" method="post">'+
      '<input type="email" name="email" placeholder="Email" required />'+
      '<button>Send</button>'+
      '</form>'+
    '</div>'+
    '<div class="footer-left">'+
      '<p class="footer-contact">Kontakt:</p>'+
      '<p style="font-weight: normal">Lorem Ipsums vei 1, 7041 Trondheim</p>'+
      '<p>'+
      '<p class="footer-number-email">Telefon:</p>'+
      '<p class="footer-number-email">Email:</p>'+
      '<br>'+
      '<p class="footer-number-email-under">42 42 42 42</p>'+
      '<p class="footer-number-email-under">kontakt@lorem.no</p>'+
      '<hr>'+
    '<p class="footer-company-name">Wallpaper & Ipsum &copy; 2018</p>'+
    '</div>';

  // NAVBAR
  document.getElementById('myNavbar').innerHTML =
  "<ul>" +
  "<li><a class='navbarlogo'>"+
    "<img src='img/logo.png' alt='logo' class='logo' />"+
  "</a></li>"+
  "<li><a href='javascript:void(0);' class='hamburgericon' onclick='navbar()'>" +
  "<i class='fa fa-bars'></i></a></li>" +
  "<li><a href='kontakt.html'>Kontakt</a></li>" +
  "<li><a href='omoss.html'>Om oss</a></li>"+
  "<li><a href='nyheter.html'>Nyheter</a></li>"+
  "<li><a href='leverandor.html'>Leverandør</a></li>"+
  "<li><a href='produkter.html'>Produkter</a></li>"+
  "<li><a href='index.html'>Hjem</a></li>"+
  "</ul>";


  let locationArray = window.location.href.split('/')
  let location = locationArray[locationArray.length - 1]
  let element = document.querySelector("a[href='" + location + "']")
  element.classList.add('active')
}
