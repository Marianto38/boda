
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

var cards = $('#card-slider .slider-item').toArray();

startAnim(cards);

function startAnim(array){
    if(array.length >= 4 ) {
        TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});

        TweenMax.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

        TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

        TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array);
    },3000)
}
