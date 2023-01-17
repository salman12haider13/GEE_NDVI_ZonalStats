// Define the area of interest (AOI)
var aoi = geometry;
var cities = ee.FeatureCollection('path/to/shapefile');

// Define the time range for one month
var startDate = ee.Date.fromYMD(2018, 6, 1);
var endDate = ee.Date.fromYMD(2018, 6, 30);

// Load Sentinel-2 data
var s2 = ee.ImageCollection("COPERNICUS/S2")
  .filterBounds(aoi)
  .filterDate(startDate, endDate)
  .sort("CLOUDY_PIXEL_PERCENTAGE", true);

// Define a function to calculate NDVI
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(["B8", "B4"]).rename("NDVI");
  return image.addBands(ndvi);
};

// Apply the function to the image collection
s2 = s2.map(addNDVI);

// Select the NDVI band and create a median composite
var median = s2.select("NDVI").median();

//Clip the median composite
var image_C = median.clip(geometry)

// Display the median composite
Map.addLayer(image_C, {min: -1, max: 1, palette: ["blue", "white", "green"]}, "Median NDVI");
Map.centerObject(aoi, 5);

//perform zonal statistics by using reduceRegions() function
var stats = image_C.reduceRegions({
  collection: cities, 
  reducer: ee.Reducer.mean(), 
  scale: 10
});

// Export the resulting to your Google Drive
Export.table.toDrive({
  collection: stats,
  description: 'city_NDVI_mean',
  folder: 'NDVI_GEE'
});














