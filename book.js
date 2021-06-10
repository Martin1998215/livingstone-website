// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -17.8477, lng: 25.8684 };
    // The map, centered at Uluru
    const options = {
        zoom: 14,
        center: uluru,
    }

    const map = new google.maps.Map(document.getElementById("map"), options);
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

}