// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 25, lng: 25},
//     zoom: 8
//   });
// }
function init() {
  alert('it works');
  
  var el = document.getElementById('mapCanvas');
  var myLocation = new google.maps.LatLng(25,-25);
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
  
}

google.maps.event.addDomListener(window, 'load', init);
