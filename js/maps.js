// Initialize and add the map
function myMap() {
  // The location of Uluru
  var sted = {lat:63.4180555, lng:10.399731};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: sted});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: sted, map: map});

}
