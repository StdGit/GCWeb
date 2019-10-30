/*
 * @title WET-BOEW Geomap English config file
 * @overview Exemple d'un fichier de configuration français pour Géocarte avec basemap ESRI REST
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @jsmoreau
 */
/*jshint unused:false*/
var wet_boew_geomap = {
	basemap: {
		title: "Basic Map",
		type: "esri",
		url: "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/provinces1c/MapServer/export",
		options: { singleTile: false, ratio: 1.0, projection: "EPSG:3978", fractionalZoom: true },
		mapOptions: {
			maxExtent: "-3000000.0, -800000.0, 4000000.0, 3900000.0",
			maxResolution: "auto",
			projection: "EPSG:3978",
			restrictedExtent: "-3000000.0, -800000.0, 4000000.0, 3900000.0",
			units: "m",
			displayProjection: "EPSG:4269",
			numZoomLevels: 2
		}
	}
};
