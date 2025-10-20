//activate search button
document.querySelector('button').addEventListener('click', getDutyStation);

// Add function
function getDutyStation(event) {
    event.preventDefault();
    //set constants
    // Get base location, sanitize to lowercase
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
        //example data = oconus.germany
        //example data = conus.texas
        console.log(data); //displays all stations
        console.log(data[0]); //displays first duty station

        //display all duty stations
        for(let i = 0; i <data.length; i++){
        
        //display station and hospital to the dom dynamically
        document.getElementById('result').innerText = `Station and Hospital: ${data[i].stationName}, ${data[i].hospital}`
        
        //display station and hospital on leaflet.js
        console.log(`Station and Hospital: ${data[i].stationName}, ${data[i].hospital}`)
        
        // //lat long to console
        console.log(`Latitude and Longitude: ${data[i].lat}, ${data[i].long}`)
        }
    
        // console.log(data[0].stationName)
        // console.log(data[0].hospital)
        // console.log(data[0].tosReq)
        // console.log(data[0].Uniqueness)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}