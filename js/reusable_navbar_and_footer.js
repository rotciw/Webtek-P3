window.onload = function load_navbar_and_footer () {
  document.getElementById('footer').innerHTML =
    "<div class='footerLeft'><h4> Siste Nytt: </h4>" +
    '<ul><li><a>Ny nettside</a><li><a>2</a></li><li><a>3</a></li><li><a>4</a></li></ul></div>' +
    '<ul><li><a>Ny nettside</a><li><a>2</a></li><li><a>3</a></li><li><a>4</a></li></ul>'

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

      let locationArray = window.location.href.split("/")
      let location = locationArray[locationArray.length - 1]
      let element = document.querySelector("a[href='"+location+"']")
      element.classList.add('active')




  let locationArray = window.location.href.split('/')
  let location = locationArray[locationArray.length - 1]
  let element = document.querySelector("a[href='" + location + "']")
  element.classList.add('active')
}
