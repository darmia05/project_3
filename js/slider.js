let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.83573, lng: -87.62424 },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: 41.83573, lng: -87.62424 },
    map: map,
    title: "McCormick Student Village",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>McCormick Student Village</h3><p>The oldest resident building on campus.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  const centerControlDiv = document.createElement("div");
  const centerControl = createCenterControl(centerControlDiv, map, marker);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
}

function createCenterControl(controlDiv, map, marker) {
  const controlUI = document.createElement("div");
  controlUI.classList.add("custom-control");
  controlUI.title = "Click to center the map on the marker";
  controlUI.innerText = "Center Map on Marker";
  controlDiv.appendChild(controlUI);

  controlUI.addEventListener("click", () => {
    map.setCenter(marker.getPosition());
    map.setZoom(15);
  });

  return controlUI;
}

let currentIndex = 0;

function showNextSlide() {
  const slides = document.querySelectorAll('.slider .slide');
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);
