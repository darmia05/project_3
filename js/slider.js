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
    content: "<h2>McCormick Student Village</h2><p>The oldest resident building on campus.</p>",
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("Slider script loaded.");

  const slides = document.querySelectorAll(".slide");
  console.log("Slides found:", slides.length);

  if (slides.length === 0) {
    console.error("No slides found. Check your HTML.");
    return;
  }

  let currIndex = 0;

  function show(idx) {
    console.log("Showing slide index:", idx);

    if (idx >= slides.length) currIndex = 0;
    if (idx < 0) currIndex = slides.length - 1;

    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === currIndex) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currIndex++;
    show(currIndex);
  }

  function prevSlide() {
    currIndex--;
    show(currIndex);
  }

  show(currIndex);
  setInterval(nextSlide, 3000);

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
