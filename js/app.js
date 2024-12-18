Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2Mzc2Njg5OC1kZTNhLTQyODYtYjQxZi00YjA4Y2M1OWNmZmIiLCJpZCI6MjYwNzE1LCJpYXQiOjE3MzM1NDA5MDh9.fYcq88HoubZucYmM1T3GrCw4yqc290yby_cyLG2bFog';

const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: Cesium.createWorldImagery(),
  terrainProvider: Cesium.createWorldTerrain(),
  animation: false,
  timeline: false,
});

console.log("Cesium Globe initialized!");
