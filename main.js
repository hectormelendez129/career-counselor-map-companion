//activate search button
document.querySelector('button').addEventListener('click', getDutyStation);

// initialize map globally
let map = L.map('map').setView([20, 0], 2); // initial world view

// add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// keep track of markers so they can be cleared between searches
let markers = [];

// Add function
function getDutyStation(event) {
    event.preventDefault();
    //set constants
    const stateOrCountry = document.getElementById('baseLocation').value.toLowerCase()
    console.log(stateOrCountry);
    
    //get radio button value
    const radioValue = document.querySelector('input[name="locationType"]:checked').value;
    console.log(radioValue);
    
    //url for fetch request
    const url = `/api/${radioValue}/${stateOrCountry}`

    //API Calls
    fetch(url)
    .then(res => res.json()) //parse data as json
    .then(data => { 
        console.log(data);
        console.log(data[0]);

        // clear existing markers
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];

        // set map view to first location if available
        if (data.length > 0) {
            map.setView([data[0].lat, data[0].long], 6);
        }

        //display all duty stations
        for(let i = 0; i < data.length; i++){
            document.getElementById('result').innerText = `Station and Hospital: ${data[i].stationName}, ${data[i].hospital}`

            console.log(`Station and Hospital: ${data[i].stationName}, ${data[i].hospital}`)
            console.log(`Latitude and Longitude: ${data[i].lat}, ${data[i].long}`)

            // create marker
            const marker = L.marker([data[i].lat, data[i].long]).addTo(map);
            markers.push(marker);

            // create popup info
            const popupContent = `
                <strong>${data[i].hospital}</strong><br>
                Duty Station: ${data[i].stationName}<br>
                TOS Requirement: ${data[i].tosReq || data[i]['Time on Station Requirements']}
            `;

            marker.bindPopup(popupContent);
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
