// script.js

// Handle Login Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (for demonstration purposes)
            if(username === "admin" && password === "password") {
                // Redirect to Home Page
                window.location.href = "index.html";
            } else {
                // Show error message
                const loginError = document.getElementById('loginError');
                loginError.textContent = "Invalid username or password.";
            }
        });
    }

    // Handle Logout
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components if needed
    // Example: Initialize tooltips
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (for demonstration purposes)
            if(username === "admin" && password === "password") {
                // Redirect to Home Page
                window.location.href = "index.html";
            } else {
                // Show error message using Materialize toast
                M.toast({html: 'Invalid username or password.', classes: 'red'});
            }
        });
    }

    // Handle Logout
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});

// js/script.js

// js/script.js

// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Leaflet map centered around Danang Beach
    var map = L.map('map').setView([16.0251310697358, 108.3446131869937], 12); // Current Position

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define custom DivIcon for normal ship marker
    var shipDivIcon = L.divIcon({
        html: '<div class="ship-marker"></div>',
        className: '', // Remove default class
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    // Define custom DivIcon for highlighted ship marker
    var highlightedShipDivIcon = L.divIcon({
        html: '<div class="ship-marker highlighted"></div>',
        className: '', // Remove default class
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    // Array of ship objects
    var ships = [
        {
            name: 'MV Pacific Star',
            type: 'Container Cargo Ship',
            capacity: '5,000 TEU',
            status: 'Active',
            lastUpdated: '2024-04-25',
            currentPosition: [16.0251310697358, 108.3446131869937],
            destinationPosition: [15.977492352878128, 108.49565428730347]
        },
        {
            name: 'SS Oceanic',
            type: 'Bulk Carrier',
            capacity: '3,000 tons',
            status: 'Inactive',
            lastUpdated: '2023-12-10',
            currentPosition: [16.0500, 108.3600],
            destinationPosition: [15.9800, 108.5000]
        },
        // Add more ships as needed
    ];

    // Array to hold all ship markers
    var shipMarkers = [];

    // Function to reset all marker highlights
    function resetMarkersHighlight() {
        shipMarkers.forEach(function(marker) {
            marker.setIcon(shipDivIcon);
        });
    }

    // Function to draw path for a ship
    function drawShipPath(current, destination) {
        // Draw the blue dashed polyline
        var shipPath = L.polyline([current, destination], {
            color: 'blue',
            dashArray: '5, 10',
            weight: 3
        }).addTo(map);

        // Optionally, add decorators like arrows to indicate direction
        /*
        var decorator = L.polylineDecorator(shipPath, {
            patterns: [
                {offset: '25%', repeat: '50px', symbol: L.Symbol.arrowHead({pixelSize: 10, pathOptions: {color: 'blue', weight: 2}})}
            ]
        }).addTo(map);
        */

        return shipPath;
    }

    // Iterate over each ship to create markers and paths
    ships.forEach(function(ship, index) {
        // Add marker for the ship's current position
        var marker = L.marker(ship.currentPosition, { icon: shipDivIcon }).addTo(map)
            .bindPopup(ship.type);

        // Draw the path from current to destination
        var path = drawShipPath(ship.currentPosition, ship.destinationPosition);

        // Handle marker click event
        marker.on('click', function() {
            // Display ship information in the information box
            document.getElementById('ship-details').innerHTML = `
                <strong>Name:</strong> ${ship.name}<br>
                <strong>Type:</strong> ${ship.type}<br>
                <strong>Capacity:</strong> ${ship.capacity}<br>
                <strong>Status:</strong> ${ship.status}<br>
                <strong>Last Updated:</strong> ${ship.lastUpdated}
            `;

            // Reset all marker highlights
            resetMarkersHighlight();

            // Highlight the selected marker
            this.setIcon(highlightedShipDivIcon);
        });

        // Store the marker in the array for future reference
        shipMarkers.push(marker);
    });

    // Adjust map view to fit all ship markers and their destinations
    var allPositions = [];
    ships.forEach(function(ship) {
        allPositions.push(ship.currentPosition);
        allPositions.push(ship.destinationPosition);
    });
    var bounds = L.latLngBounds(allPositions);
    map.fitBounds(bounds, { padding: [50, 50] });

    // Handle window resize to adjust map size
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });

    // Handle Logout functionality (assuming it's defined in the HTML)
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});



// Define custom DivIcon for normal ship marker
var shipDivIcon = L.divIcon({
    html: '<div class="ship-marker"></div>',
    className: '', // Remove default class
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

// Define custom DivIcon for highlighted ship marker
var highlightedShipDivIcon = L.divIcon({
    html: '<div class="ship-marker highlighted"></div>',
    className: '', // Remove default class
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

// Add a marker using DivIcon
var shipMarker = L.marker([16.0600, 108.2100], { icon: shipDivIcon }).addTo(map)
    .bindPopup('Container Cargo Ship');

// Handle marker click event
shipMarker.on('click', function() {
    // Display ship information
    document.getElementById('ship-details').innerHTML = `
        <strong>Name:</strong> MV Pacific Star<br>
        <strong>Type:</strong> Container Cargo Ship<br>
        <strong>Capacity:</strong> 5,000 TEU<br>
        <strong>Status:</strong> Active<br>
        <strong>Last Updated:</strong> 2024-04-25
    `;

    // Reset previous highlighted markers if any
    resetMarkersHighlight();

    // Highlight the selected marker
    this.setIcon(highlightedShipDivIcon);
});

// Function to reset marker highlights
function resetMarkersHighlight() {
    shipMarker.setIcon(shipDivIcon);
    // Reset other markers if any
}

// Define the curved path using SVG path syntax
var curvedPath = L.curve(['M', currentPosition, 'Q', [16.0000, 108.4000], destinationPosition], {
    color: 'blue',
    weight: 3,
    opacity: 0.7,
    dashArray: '10,10'
}).addTo(map);

// Define the curved path
var curvedPath = L.curve(['M', currentPosition, 'Q', [16.0000, 108.4000], destinationPosition], {
    color: 'blue',
    weight: 3,
    opacity: 0.7,
    dashArray: '10,10'
}).addTo(map);

// Add arrowheads using PolylineDecorator
var decorator = L.polylineDecorator(curvedPath, {
    patterns: [
        {
            offset: '25%',
            repeat: '50%',
            symbol: L.Symbol.arrowHead({ pixelSize: 8, polygon: false, pathOptions: { stroke: true, color: 'blue' } })
        }
    ]
}).addTo(map);

// Function to calculate intermediate points for a curve
function getCurvePoints(start, control, end, numPoints) {
    var points = [];
    for (var i = 0; i <= numPoints; i++) {
        var t = i / numPoints;
        var x = Math.pow(1 - t, 2) * start[0] + 2 * (1 - t) * t * control[0] + Math.pow(t, 2) * end[0];
        var y = Math.pow(1 - t, 2) * start[1] + 2 * (1 - t) * t * control[1] + Math.pow(t, 2) * end[1];
        points.push([x, y]);
    }
    return points;
}

// Define a control point for the curve
var controlPoint = [16.0000, 108.4000];

// Calculate curve points
var curvePoints = getCurvePoints(currentPosition, controlPoint, destinationPosition, 50);

// Draw the curve as a polyline with dashed blue line
var curvedPath = L.polyline(curvePoints, {
    color: 'blue',
    weight: 3,
    opacity: 0.7,
    dashArray: '10,10'
}).addTo(map);

var ships = [
    {
        name: 'MV Pacific Star 2',
        type: 'Container Cargo Ship',
        capacity: '5,000 TEU',
        status: 'Active',
        lastUpdated: '2024-04-25',
        currentPosition: [16.0251310697358, 108.3446131869937],
        destinationPosition: [15.977492352878128, 108.49565428730347]
    },
    {
        name: 'SS Oceanic',
        type: 'Bulk Carrier',
        capacity: '3,000 tons',
        status: 'Inactive',
        lastUpdated: '2023-12-10',
        currentPosition: [16.0500, 108.3600],
        destinationPosition: [15.9800, 108.5000]
    }
    // Add more ships as needed
];

var shipMarkers = [];

ships.forEach(function(ship) {
    // Add marker
    var marker = L.marker(ship.currentPosition, { icon: shipDivIcon }).addTo(map)
        .bindPopup(ship.type);
    
    // Handle click event
    marker.on('click', function() {
        document.getElementById('ship-details').innerHTML = `
            <strong>Name:</strong> ${ship.name}<br>
            <strong>Type:</strong> ${ship.type}<br>
            <strong>Capacity:</strong> ${ship.capacity}<br>
            <strong>Status:</strong> ${ship.status}<br>
            <strong>Last Updated:</strong> ${ship.lastUpdated}
        `;

        resetMarkersHighlight();

        // Highlight the selected marker
        this.setIcon(highlightedShipDivIcon);

        // Draw path
        drawShipPath(ship.currentPosition, ship.destinationPosition);
    });

    shipMarkers.push(marker);
});

function resetMarkersHighlight() {
    shipMarkers.forEach(function(m) {
        m.setIcon(shipDivIcon);
    });
}

function drawShipPath(current, destination) {
    // Remove existing paths if any
    if (window.currentPath) {
        map.removeLayer(window.currentPath);
    }
    if (window.decorator) {
        map.removeLayer(window.decorator);
    }

    // Draw polyline
    window.currentPath = L.polyline([current, destination], {
        color: 'blue',
        dashArray: '5, 10',
        weight: 3
    }).addTo(map);

    // Optional: Add decorators
    window.decorator = L.polylineDecorator(window.currentPath, {
        patterns: [
            {offset: '0%', repeat: '20px', symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: 'blue'}})}
        ]
    }).addTo(map);
}
