// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 25, lng: 25},
//     zoom: 8
//   });
// }
function init() {
  alert('Welcome to my map page! Try clicking on the marker to see what happens!');
  
  var el = document.getElementById('mapCanvas');
  var myLocation = new google.maps.LatLng(-0.28415731592554744, -90.42960532128117);
  var mapOptions = {
    center: myLocation,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP
  });
  
  var contentString = 'Welcome to the Galapagos Islands!';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    infowindow.open(myMap, marker);
  });
  
}

google.maps.event.addDomListener(window, 'load', init);
