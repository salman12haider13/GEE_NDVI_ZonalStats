# NDVI Analysis and Zonal Statistics using Google Earth Engine
This repository contains a script for calculating and visualizing Normalized Difference Vegetation Index (NDVI) using Google Earth Engine (GEE). The script uses Sentinel-2 data to calculate the median NDVI within a given area of interest (AOI) and time range, and also calculates the mean NDVI for a set of cities within the AOI. The resulting NDVI statistics are exported to a Google Drive folder.

## Getting Started
1. Create a GEE account and set up your project: https://earthengine.google.com/signup/
2. Clone or download this repository
3. Open the script in GEE code editor and set the path to the shapefile of cities, AOI and time range
4. Run the script and verify the output in the GEE map interface
5. To export the NDVI statistics to your Google Drive, replace the folder path with your own Google Drive folder.

## Script Overview
- The script first defines the AOI, cities shapefile and time range for the NDVI calculation.
- It then loads Sentinel-2 data for the specified time range and filters it based on the AOI and cloud coverage.
- Next, the script defines a function to calculate NDVI, which is applied to the image collection.
- The NDVI band is selected and a median composite is created.
- The median composite is then clipped to the AOI and displayed on the GEE map interface.
- The script also performs zonal statistics by using the reduceRegions() function to calculate the mean NDVI for each city within the AOI.
- Finally, the resulting NDVI statistics are exported to a Google Drive folder.

## Requirements
- A GEE account
- A shapefile of cities within the AOI

## Built With
- Google Earth Engine

## Acknowledgments
- This script was created using the GEE documentation and tutorials as a guide.
- The Sentinel-2 data used in this script is provided by the European Space Agency (ESA) and processed by Copernicus.
