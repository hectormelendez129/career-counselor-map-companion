//add dependencies express, cors, port
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//create the middleware server to handle requests
app.use(cors());

//create the data sets
const baseLocations = {
    'conus': {
        'alabama': [
            {
                'stationName': 'Redstone Arsenal',
                'lat': 34.7000,
                'long': -86.6000,
                'hospital': 'Redstone Health Clinic',
                'coursesOffered': ['Aerospace Medicine', 'Flight Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Huntsville, Tech Hub, Space and Rocketry History']
            }
        ], //alabama end
        'colorado': [
            {
                'stationName': 'Fort Carson',
                'lat': 38.7000,
                'long': -104.8000,
                'hospital': 'Evans Army Community Hospital',
                'coursesOffered': ['Air Force Academy', 'Mountain Warfare Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Colorado Springs and Denver, Mountainous Terrain, Outdoor Activities']
            }
        ], //colorado end
        'florida': [
            {
                'stationName': 'Eglin Air Force Base',
                'lat': 30.4833,
                'long': -86.5333,
                'hospital': 'Eglin Hospital',
                'coursesOffered': ['EOD School', 'Aerospace Medicine', 'Flight Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['EOD School House, Warm Weather, Beach Access, Diverse Culture']
            },
            {
                'stationName': 'Naval Air Station Pensacola',
                'lat': 30.3500,
                'long': -87.3000,
                'hospital': 'Naval Hospital Pensacola',
                'coursesOffered': ['Naval Nursing', 'Flight Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of Naval Aviation and Blue Angels, Beach Access, Rich History']
            },
            {
                'stationName': 'MacDill Air Force Base',
                'lat': 27.8500,
                'long': -82.5300,
                'hospital': 'MacDill Hospital',
                'coursesOffered': ['Aerospace Medicine', 'Flight Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Tech Hub for Top Secret Clearance Holders, Home of U.S. Central Command, Warm Weather, Beach Access']
            },
            {
                'stationName': 'Naval Station Mayport',
                'lat': 30.4000,
                'long': -81.4000,
                'hospital': 'Naval Hospital Jacksonville',
                'coursesOffered': ['Naval Nursing', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Jacksonville and ST Augustine, Beach Access, Maritime Culture']
            }
        ], //florida end
        'kentucky': [
            {
                'stationName': 'Fort Knox, HRC',
                'lat': 37.9000,
                'long': -85.9000,
                'hospital': 'Fort Knox Health Clinic',
                'coursesOffered': ['Armored Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Louisville, Nothing']
            }
        ], //kentucky end
        'maryland': [
            {
                'stationName': 'Fort Meade',
                'lat': 39.1000,
                'long': -76.7500,
                'hospital': 'Fort Meade Health Clinic',
                'coursesOffered': ['Cybersecurity Nursing', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of NSA and Cyber Command, Close to Baltimore and Washington D.C., Tech Hub']
            },
            {
                'stationName': 'Aberdeen Proving Ground',
                'lat': 39.5000,
                'long': -76.2000,
                'hospital': 'Aberdeen Health Clinic',
                'coursesOffered': ['Ordnance Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of Army Research Laboratory, Close to Philadelphia and Baltimore, Rich History']
            },
            {
                'stationName': 'Walter Reed National Military Medical Center',
                'lat': 39.0000,
                'long': -77.1000,
                'hospital': 'Walter Reed National Military Medical Center',
                'coursesOffered': ['Trauma Nursing', 'Critical Care Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Premier Military Medical Facility, Close to Washington D.C., Diverse Culture']
            },
            {
                'stationName': 'Fort Detrick',
                'lat': 39.4000,
                'long': -77.4000,
                'hospital': 'Fort Detrick Health Clinic',
                'coursesOffered': ['Biological Warfare Nursing', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of U.S. Army Medical Research Institute of Infectious Diseases, Close to Frederick and Washington D.C., Rich History']
            }
        ], //maryland end
        'north carolina': [
            {
                'stationName': 'Fort Bragg, Airborne and Special Forces',
                'lat': 35.1400,
                'long': -79.0000,
                'hospital': 'Womack Army Medical Center',
                'coursesOffered': ['Combat Medic Course', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of Airborne and Special Forces, Large Military Community']
            }
        ], //north carolina end
        'tennessee': [
            {
                'stationName': 'Fort Campbell, 101 Airborne',
                'lat': 36.6000,
                'long': -87.5000,
                'hospital': 'Fort Campbell Health Clinic',
                'coursesOffered': ['Airborne Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Alot of friends, Close to Nashville, 52d GP EOD, Rich History']
            }
        ], //tennessee end
        'texas': [
            {
                'stationName': 'Fort Hood',
                'lat': 31.1000,
                'long': -97.8000,
                'hospital': 'Carl R. Darnall Army Medical Center',
                'coursesOffered': ['Combat Medic Course', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Austin and San Antonio, Rich History']
            },
            {
                'stationName': 'Joint Base San Antonio',
                'lat': 29.4000,
                'long': -98.5000,
                'hospital': 'Brooke Army Medical Center',
                'coursesOffered': ['Aerospace Medicine', 'Flight Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to San Antonio, Diverse Culture']
            },
            {
                'stationName': 'Fort Bliss',
                'lat': 31.8000,
                'long': -106.4000,
                'hospital': 'William Beaumont Army Medical Center',
                'coursesOffered': ['Desert Warfare Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to El Paso and Mexico, Desert Climate']
            }
        ], //texas end
        'virginia': [
            {
                'stationName': 'Fort Belvoir',
                'lat': 38.7000,
                'long': -77.1500,
                'hospital': 'Fort Belvoir Community Hospital',
                'coursesOffered': ['Nursing Leadership', 'Critical Care Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Washington D.C., Tech Hub, Diverse Culture']
            },
            {
                'stationName': 'Fort Lee, EOD School House',
                'lat': 37.1500,
                'long': -77.3000,
                'hospital': 'Fort Lee Health Clinic',
                'coursesOffered': ['Explosive Ordnance Disposal Nursing', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Home of EOD School, Close to Richmond, Historic Sites']
            },
            {
                'stationName': 'Naval Station Norfolk',
                'lat': 36.9500,
                'long': -76.3000,
                'hospital': 'Naval Medical Center Portsmouth',
                'coursesOffered': ['Naval Nursing', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Fighter jets, Tech Hub, Close to Virginia Beach and OBX, Maritime Culture']
            }
        ], //virginia end
        'washington': [
            {
                'stationName': 'Joint Base Lewis-McChord',
                'lat': 47.1000,
                'long': -122.5000,
                'hospital': 'Madigan Army Medical Center',
                'coursesOffered': ['Combat Medic Course', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Friends there, Tech Hub, Close to Seattle and Mount Rainier, Diverse Culture, Outdoor Activities']
            }
        ], //washington end
    }, //end conus
    'oconus': {
        'germany': [
            {
                'stationName': 'Ramstein Air Base',
                'lat': 49.4361,
                'long': 7.6000,
                'hospital': 'Landstuhl Regional Medical Center',
                'coursesOffered': ['Aerospace Medicine', 'Flight Nursing'],
                'tosReq': '36 months', //time on station requirements
                'Uniqueness': ['OCONUS, Cheap travel to Europe, diverse culture']
            },
            {
                'stationName': 'Grafenwoehr Training Area',
                'lat': 49.7050,
                'long': 11.9333,
                'hospital': 'Grafenwoehr Health Clinic',
                'coursesOffered': ['Combat Medic Course', 'Field Nursing'],
                'Time on Station Requirements': '36 months',
                'Uniqueness': 'Close to Austria, Czech Republic and Slovakia'
            },
            {
                'stationName': 'Vilseck Army Base',
                'lat': 49.5964,
                'long': 11.7500,
                'hospital': 'Vilseck Health Clinic',
                'coursesOffered': ['Nursing Leadership', 'Emergency Nursing'],
                'Time on Station Requirements': '36 months',
                'Uniqueness': 'Close to Czech Republic and Poland'
            },
            {
                'stationName': 'Stuttgart Army Base',
                'lat': 48.7833,
                'long': 9.1833,
                'hospital': 'Stuttgart Health Clinic',
                'coursesOffered': ['Nursing Administration', 'Critical Care Nursing'],
                'Time on Station Requirements': '36 months',
                'Uniqueness': ['Close to France and Switzerland', 'Tech Hub', 'Home of Mercedes-Benz', 'Special Forces']
            }
        ], //germany end
        'italy': [
            {
                'stationName': 'Aviano Air Base',
                'lat': 46.0000,
                'long': 12.6000,
                'hospital': 'Aviano Health Clinic',
                'coursesOffered': ['Flight Nursing', 'Aerospace Medicine'],
                'tosReq': '36 months',
                'Uniqueness': ['OCONUS, Close to Venice and the Dolomites, Rich History']
            },
            {
                'stationName': 'Vicenza Army Base, Airborne Brigade',
                'lat': 45.6500,
                'long': 11.5500,
                'hospital': 'Vicenza Health Clinic',
                'coursesOffered': ['Combat Medic Course', 'Field Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['Close to Venice and the Dolomites', 'Rich History', 'Cheap flight access to the US']
            }
        ], //italy end
        'spain': [
            {
                'stationName': 'Rota Naval Base',
                'lat': 36.6250,
                'long': -6.3500,
                'hospital': 'Rota Health Clinic',
                'coursesOffered': ['Naval Nursing', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['OCONUS, Close to Gibraltar and Morocco, Beach Access']
            }
        ], //spain end
        'hawaii': [
            {
                'stationName': 'Schofield Barracks',
                'lat': 21.5000,
                'long': -158.1000,
                'hospital': 'Tripler Army Medical Center',
                'coursesOffered': ['Tropical Medicine', 'Emergency Nursing'],
                'tosReq': '36 months',
                'Uniqueness': ['OCONUS, Island Life, Tropical Climate, Diverse Culture']
            }
        ] //hawaii end
    } //end oconus
} //end baseLocations

//root endpoints
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    console.log('index.html logged successfully')
})

// Send files to main.js
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})

// Send files to style.css
app.get('/style.css', (request, response) => {
    response.sendFile(__dirname + '/style.css')
})

/*****API Endpoint*****/
app.get('/api/:locationType/:location', (request, response) => {
    const locationType = request.params.locationType.toLowerCase(); // sanitize the input
    const stateOrCountry = request.params.location.toLowerCase(); // sanitize the input
    console.log(`api endpoint accessed: ${locationType}, ${stateOrCountry}`);

    if (baseLocations[locationType] && baseLocations[locationType][stateOrCountry]) 
      // basesLocations is the name of the JSON dataset, 
      // [locationType] is either conus or oconus, 
      // [stateOrCountry] is the specific state or country
    { 
        response.json(baseLocations[locationType][stateOrCountry]);
    } 
    
    else {
        response.json('Please enter another location.');
    }
})

//Log the port listener
app.listen(process.env.PORT || PORT, () => {
    console.log('Serving is listening on 8000')
})