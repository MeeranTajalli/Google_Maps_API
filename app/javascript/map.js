// app/javascript/packs/map.js (for Rails 6) or app/javascript/map.js (for Rails 7)
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    const latitude = mapElement.getAttribute('data-latitude');
    const longitude = mapElement.getAttribute('data-longitude');
    const city = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

    // Function to initialize the map and markers
    function initMap() {
        const map = new google.maps.Map(mapElement, {
            zoom: 10,
            center: city
        });

        const breweries = document.querySelectorAll('.brewery-list-item');
        breweries.forEach(brewery => {
            const latitude = parseFloat(brewery.getAttribute('data-latitude'));
            const longitude = parseFloat(brewery.getAttribute('data-longitude'));
            const position = { lat: latitude, lng: longitude };

            new google.maps.Marker({
                position: position,
                map: map
            });
        });
    }

    // Check if the Google Maps API is loaded
    if (typeof google === 'object' && typeof google.maps === 'object') {
        initMap(); // Call the function to initialize the map
    } else {
        // If Google Maps API is not loaded, add a script tag to load it
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC2LbkMmTDERD1FCnSRkNXjLk22vJemgkc&callback=initMap`;
        script.defer = true;
        script.async = true;
        window.initMap = initMap; // Define the initMap function as a global variable
        document.head.appendChild(script);
    }
});
