// Wait for the DOM to be fully loaded before executing the logic
document.addEventListener("DOMContentLoaded", function() {
    // Define the map and set its view to a specific location and zoom level
    var map = L.map('map').setView([38.8296661, -122.814003], 6);

    // Add a tile layer to the map from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Load and add GeoJSON data to the map
    fetch('static/js/all_week.geojson')  // Assuming your GeoJSON file is located here
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    // Extract magnitude and depth information from the GeoJSON properties
                    var magnitude = feature.properties.mag;
                    var depth = feature.geometry.coordinates[2];

                    // Define marker size and color based on magnitude and depth
                    var markerSize = magnitude * 5;
                    var markerColor = depth > 100 ? '#FF5733' : '#FFC300'; // Orange for depth > 100, Yellow otherwise

                    // Create and style markers
                    return L.circleMarker(latlng, {
                        radius: markerSize,
                        fillColor: markerColor,
                        color: '#000',
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                    }).bindPopup(`<strong>Magnitude:</strong> ${magnitude}<br><strong>Depth:</strong> ${depth} km`);
                }
            }).addTo(map);

            // Add legend
            var legend = L.control({ position: 'bottomright' });
            legend.onAdd = function (map) {
                var div = L.DomUtil.create('div', 'info legend');
                var depths = [-10, 10, 30, 50, 70, 90]; // Define depth ranges
                var colors = ['#FF5733', '#FFC300', '#FFD700', '#FFFF00', '#ADFF2F', '#00FF00']; // Corresponding colors for each range
        
                // Loop through depth ranges and generate labels with colors
                for (var i = 0; i < depths.length; i++) {
                    var range = depths[i] + (depths[i + 1] ? '&ndash;' + (depths[i + 1] - 1) : '+');
                    div.innerHTML +=
                        '<i style="background:' + colors[i] + '"></i> ' +
                        range + ' km<br>';
                }
        
                return div;
            };
            legend.addTo(map);

            var markerColor = '';
            if (depth >= -10 && depth <= 10) {
                markerColor = '#00FF00'; // Green for -10 to 10 km
            } else if (depth > 10 && depth <= 30) {
                markerColor = '#ADFF2F'; // GreenYellow for 10 to 30 km
            } else if (depth > 30 && depth <= 50) {
                markerColor = '#FFFF00'; // Yellow for 30 to 50 km
            } else if (depth > 50 && depth <= 70) {
                markerColor = '#FFD700'; // Gold for 50 to 70 km
            } else if (depth > 70 && depth <= 90) {
                markerColor = '#FFC300'; // Orange for 70 to 90 km
            } else {
                markerColor = '#FF5733'; // Red for 90+ km
            }
        });
});