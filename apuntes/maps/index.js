
// Initialize and add the map
let map, marker
function initMap() {
    // The location of Posicion
    const Lima = { lat: -12.025827, lng: -77.2679841 };
    const NuevaYork = { lat: 40.6976701, lng: -74.2598756 };
    const Habana = { lat: 23.0509409, lng: -82.4730907 };
    // The map, centered at Posicion
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Lima,
    });
    // The marker, positioned at Posicion
    marker = new google.maps.Marker({
      position: Lima,
      map: map,
    });
    markers.push(
        new google.maps.Marker({
            position: NuevaYork,
            map,
            title: "Nueva York",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: Habana,
            map,
            title: "la Habana",
        })
    );
    //obtener la geolocalización
    //markersetPosition({lat,lng})
    geoPosicion();

}
function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}


function centraMapa(position){
    const nuevaPos = {
        lat:position.coords.latitude,
        lng:position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
function onError(error){
    console.error(error)
}
  
window.initMap = initMap;