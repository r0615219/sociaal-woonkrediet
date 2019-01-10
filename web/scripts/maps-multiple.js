function singleMap (mapStyle) {}

function multipleMap (mapStyle) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: new google.maps.LatLng(50.776168, 4.506146),
        styles: mapStyle,
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    var contentString = [];

    for (i = 0; i < points.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(points[i]['latitude'], points[i]['longitude']),
            map: map,
            icon: {url: "https://img.icons8.com/material/40/8ab62a/marker.png"}
        });

        contentString[i] = '<div class="modal">'+
            '<p><strong>' + points[i]['title'] + '</strong></p>' +
            '<p>' + points[i]['street'] + '<br>' +
            points[i]['city'] + '</p>' +
            (points[i]['mail'] ? ('<p><i class="fa fa-envelope-o"></i> &nbsp; <a href="mailto:' + points[i]['mail'] + '" target="_blank">' + points[i]['mail'] + '</a></p>') : '' ) +
            (points[i]['phone'] ? ('<p><i class="fa fa-phone"></i> &nbsp; <a href="tel:' + points[i]['phone'] + '" target="_blank">' + points[i]['phone'] + '</a></p>') : '' ) +
            (points[i]['website'] ? ('<p><i class="fa fa-globe"></i> &nbsp; <a href="' + points[i]['website'] + '" target="_blank">' + points[i]['website'] + '</a></p>') : '' ) +
            '<p><a class="btn" href="' + points[i]['url'] + '" target="_blank">Meer info</a></p>' +
            '</div>';

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(contentString[i]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function initMap() {

    var mapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]

    if (points.length == 1) {
        singleMap(mapStyle);
    } else {
        multipleMap(mapStyle);
    }

}