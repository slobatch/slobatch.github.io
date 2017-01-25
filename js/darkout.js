
var x = document.getElementById("demo");
var userLat = undefined;
var userLong = undefined;

var locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// Get Position

function showPosition(position){
  var crd = position.coords;
  userLat = crd.latitude;
  userLong = crd.longitude;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  x.innerHTML = "Your location is " + crd.latitude + ", " + crd.longitude + ".";
}

function error(err){
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, error, locationOptions);
} else {
  console.log("Geolocation is not supported by this browser.")
}

// Get sunrise & sunset times for current location.
