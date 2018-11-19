//Script qui s'occupe d'initialiser la carte
function initMap() {
    var uluru = {lat: 46.347154, lng: -72.576881};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: uluru});
    var marker = new google.maps.Marker({position: UQTR, map: map});
}