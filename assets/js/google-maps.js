function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -7.257472, lng: 112.752090};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Surabaya, INA' // Title Location
    });
}