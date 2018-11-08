function getTotal () {

  var pris = document.getElementById('pris').value;

  var antall = document.getElementById('antall').value;

  document.getElementById('total').value = (antall*pris);

}
