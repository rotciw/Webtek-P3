function navbar() {
    var x = document.getElementById("header");
    var y = document.getElementById("myNavbar")
    if (x.className === "header" || y.className ==="navbar") {
       x.className += " responsive";
       y.className += " responsive";
    } else {
       x.className = "header";
       y.className = "navbar"
    }
}
