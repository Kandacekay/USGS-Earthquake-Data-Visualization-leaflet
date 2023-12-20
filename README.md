# USGS Earthquake Data Visualization-leaflet
## Background
The United States Geological Survey (USGS) plays a crucial role in providing scientific data related to natural hazards, ecosystem health, and the impacts of climate and land-use change. As part of their mission, the USGS collects vast amounts of earthquake data from around the world on a daily basis. However, they face a challenge in effectively visualizing this data to educate the public and other government organizations about the Earth's seismic activities.

## Project Overview
This project aims to develop a powerful and informative tool for visualizing USGS earthquake data. The provided code utilizes Leaflet, a popular JavaScript library for interactive maps, to create an intuitive map representation of earthquake occurrences.

## Implementation Details
### HTML and CSS
- The HTML file (index.html) includes the necessary structure for the map and links to essential stylesheets and libraries.
- The CSS file (style.css) ensures a clean and responsive design for the map and legend.

## JavaScript (logic.js)
- The JavaScript code is responsible for loading earthquake data in GeoJSON format and rendering it on the Leaflet map.
- The map is initialized with a default view, and an OpenStreetMap tile layer is added as the base layer.
- Each earthquake is represented by a dynamically sized and colored circle marker based on its magnitude and depth.
- A legend is incorporated to provide a visual guide for interpreting marker colors in relation to depth ranges.

## How to Use
1. Open index.html in a web browser.
2. Explore the interactive map to visualize recent earthquake data.
3. Use the legend to understand the relationship between marker colors and earthquake depths.
   
### Additional Information
- Leaflet version: 1.9.4
- D3 version: 7.0.0
