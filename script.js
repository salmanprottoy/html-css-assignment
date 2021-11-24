let map;

function initMap() {
  // The location of dhaka
  const dhaka = { lat: 23.81575591787694, lng: 90.41176168642586 };
  //23.81575591787694, 90.41176168642586
  // The map, centered at dhaka
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: dhaka,
  });
  // The marker, positioned at dhaka
  const marker = new google.maps.Marker({
    position: dhaka,
    map: map,
  });
}

var guestNumber = 0;

function increment() {
  guestNumber++;
  document.getElementById("updateGuestInfo").innerHTML = guestNumber;
}

function decrement() {
  if (guestNumber > 0) {
    guestNumber--;
    document.getElementById("updateGuestInfo").innerHTML = guestNumber;
  }
}

function guestupdate() {
  var guest = document.getElementById("updateGuestInfo").innerText;
  document.getElementById("showguest").innerHTML = guest;
}
