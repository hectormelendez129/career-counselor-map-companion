# Career Counselor Map Companion

This project is a full-stack Express.js and Leaflet.js application that allows users to search for U.S. and overseas (OCONUS) military bases. 
The app retrieves base details through a custom-built REST API and visualizes the results on an interactive Leaflet map.

## [Live Demo](https://career-counselor-map-companion-1.onrender.com/)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Acknowledgements](#acknowledgements)

## Project Overview

Bird Watching Journal is a personal wildlife tracking web application built using Node.js, Express, and MongoDB.
Users can log bird sightings with details such as species, latitude, longitude, and notes, then visualize all entries on an interactive Leaflet map.
Each post supports reaction buttons (thumbs up/down) and deletion, making it easy to manage and share your bird-watching experiences.

## Features

- Dynamic API for military base data by state (CONUS) or country (OCONUS)
- Interactive Leaflet map displaying all locations withing a state or country with popups.
- Search form with radio buttons for CONUS/OCONUS selection
- Real-time fetch requests that display station and hospital data
- Marker popups with latitude, longitude, and TOS (Time on Station) information
- Secure Node.js/Express setup
- CORS-enabled Express server to handle frontend and API requests

## Technologies Used

<a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" title="Linux" width="36" height="36" /></a>   <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /></a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" /></a>   <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" title="HTML5" width="36" height="36" /></a>   <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" title="CSS3" width="36" height="36" /></a>    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /></a>     <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=express" alt="ExpressJS" title="ExpressJS" width="36" height="36" /></a>  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /></a>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hectormelendez129/career-counselor-map-companion.git
````

2. Navigate to the project directory:

```bash
cd career-counselor-map-companion
```

3. Install Dependencies:
```bash
npm install
```
4. Start the server:
```bash
http://localhost:8080
```

## Usage

1. Launch the server and open http://localhost:8000 in your browser.
2. Select CONUS or OCONUS using the radio buttons.
3. Enter a state (e.g., florida) or country (e.g., germany).
4. Click Search to:  Fetch data from /api/:locationType/:location; Display base info (station + hospital); Zoom and mark the base on the Leaflet map

## Screenshots
[Live Demo](https://career-counselor-map-companion-1.onrender.com/)

<img width="1260" height="799" alt="Screenshot 2025-11-03 140506" src="https://github.com/user-attachments/assets/bf388300-910e-4a0f-a2cd-f11ccefc8b6f" />


## Acknowledgements
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Documentation](https://expressjs.com/)
* [MDN](https://developer.mozilla.org/en-US/)

