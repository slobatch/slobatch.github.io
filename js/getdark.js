---
---

var demo = document.getElementById("demo")
var date = new Date();
var css = document.getElementById("css-file");

var locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// Get Position


function error(err){
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getDark(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(isDark, error, locationOptions);
  } else {
    console.log("Geolocation is not supported by this browser.")
    return false;
  }
}

// Get sunrise & sunset times for current location.
function isDark(position){
  console.log(position);
  var times = SunCalc.getTimes(date, position.coords.latitude, position.coords.longitude)
  var dusk = times.dusk;
  var dawn = times.dawn;
  if (date >= dawn && date <= dusk){
    console.log("It's Daytime!");
    css.href = "{{"/css/main.css" | prepend: site.baseurl }}"
    demo.innerHTML = "It's light out! Nightmode not enabled."
  }
  else {
    console.log("It's Nighttime!");
    css.href = "{{"/css/dark-main.css" | prepend: site.baseurl }}"
    demo.innerHTML = "It's dark out! Nightmode enabled."
  }
}

getDark();
