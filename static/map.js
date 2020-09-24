// Initialize and add the map
function initMap() {

  // The location of tinyStompers
  var tinyStompers = {lat: 54.233292, lng: -1.3316585};

  // Map options
  var options = {
    zoom: 14,
    center: tinyStompers,
  }

  // The map, centered at tinyStompers
  var map = new google.maps.Map(
      document.getElementById('map'), options);

  // The icon
  var icon = {
    url: "./img/tiny-stompers-logo-pin.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
};

  // The marker, positioned at tinyStompers
  var marker = new google.maps.Marker({
    position: tinyStompers, 
    map: map,
    icon: icon,
  });


   
}