var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: 40.8054491, lng: -73.965441},
    zoom: 10,
    scrollwheel: false
  });
}

