
// MAP_BOX_KEY= "pk.eyJ1IjoibWFyaWFudG8zOCIsImEiOiJjbDhuNmk5eXowMndpM29teGxzczJ2aDFoIn0.F7Y7yqIZRzWZQYCyKxw6LQ"
// import { MAP_BOX_KEY } from "./.env";
const MAP_BOX_KEY='pk.eyJ1IjoibWFyaWFudG8zOCIsImEiOiJjbDhuNmk5eXowMndpM29teGxzczJ2aDFoIn0.F7Y7yqIZRzWZQYCyKxw6LQ'

console.log("conectado con script")

//MAPA
mapboxgl.accessToken = MAP_BOX_KEY;
const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Parroquia Fry Eugenio',
                'iconSize': [66, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.424662, 6.025379]
            }
        },
    ]
};

const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-75.424662, 6.025379],
    zoom: 16
});

// Add markers to the map.
for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = 'url(images/parroquia.jpg)';
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
        window.alert(marker.properties.message);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
}





document.addEventListener('DOMContentLoaded', () => {
  //===
  // VARIABLES
  //===
  const DATE_TARGET = new Date('04/22/2023 1:00 PM');
  // DOM for render
  const SPAN_DAYS = document.querySelector('span#days');
  const SPAN_HOURS = document.querySelector('span#hours');
  const SPAN_MINUTES = document.querySelector('span#minutes');
  const SPAN_SECONDS = document.querySelector('span#seconds');
  // Milliseconds for the calculations
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
  //===
  // FUNCTIONS
  //===
  /**
   * Method that updates the countdown and the sample
   */
  function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    //
    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
  }
  //===
  // INIT
  //===
  updateCountdown();
  // Refresh every second
  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});


// navbar



// window.addEventListener('DOMContentLoaded', event => {

//   // Navbar shrink function
//   var navbarShrink = function () {
//       const navbarCollapsible = document.body.querySelector('#mainNav');
//       if (!navbarCollapsible) {
//           return;
//       }
//       if (window.scrollY === 0) {
//           navbarCollapsible.classList.remove('navbar-shrink')
//       } else {
//           navbarCollapsible.classList.add('navbar-shrink')
//       }

//   };

//   // Shrink the navbar
//   navbarShrink();

//   // Shrink the navbar when page is scrolled
//   document.addEventListener('scroll', navbarShrink);

//   // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector('#mainNav');
//   if (mainNav) {
//       new bootstrap.ScrollSpy(document.body, {
//           target: '#mainNav',
//           offset: 74,
//       });
//   };

//   // Collapse responsive navbar when toggler is visible
//   const navbarToggler = document.body.querySelector('.navbar-toggler');
//   const responsiveNavItems = [].slice.call(
//       document.querySelectorAll('#navbarResponsive .nav-link')
//   );
//   responsiveNavItems.map(function (responsiveNavItem) {
//       responsiveNavItem.addEventListener('click', () => {
//           if (window.getComputedStyle(navbarToggler).display !== 'none') {
//               navbarToggler.click();
//           }
//       });
//   });

// });



// slider about us

// var cards = $('#card-slider .slider-item').toArray();

// startAnim(cards);

// function startAnim(array){
//     if(array.length >= 4 ) {
//         TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});

//         TweenMax.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

//         TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

//         TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
//     } else {
//         $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
//     }
// }

// function sortArray(array) {
//     clearTimeout(delay);
//     var delay = setTimeout(function(){
//         var firstElem = array.shift();
//         array.push(firstElem);
//         return startAnim(array);
//     },3000)
// }






//fotos



// Author: Hoang Tran (https://fb.com/99.hoangtran)

// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

// Give me a coffee <3 https://github.com/HoangTran0410/HoangTran0410/blob/main/DONATE.md

// You can change global variables here:
var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL =
  "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
var bgMusicControls = true; // Show UI music control

/*
NOTE:
 + imgWidth, imgHeight will work for video
 + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
 + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
 + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay =
      delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

// add background music
// if (bgMusicURL) {
//   document.getElementById("music-container").innerHTML += `
// <audio src="${bgMusicURL}" ${bgMusicControls ? "controls" : ""} autoplay loop>
// <p>If you are reading this, it is because your browser does not support the audio element.</p>
// </audio>
// `;
// }

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
