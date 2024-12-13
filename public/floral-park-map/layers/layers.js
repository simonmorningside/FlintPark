ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9317585.212465, 5317009.104938, -9311093.535614, 5320862.272799]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_StJohnsAerial_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "StJohnsAerial",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/StJohnsAerial_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9316125.467226, 5317106.894316, -9313588.543544, 5321120.460122]
                            })
                        });
var lyr_SouthSideAerial_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SouthSideAerial",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SouthSideAerial_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9316828.303852, 5312316.669756, -9313492.272280, 5314836.132714]
                            })
                        });
var format_FlintStreets_3 = new ol.format.GeoJSON();
var features_FlintStreets_3 = format_FlintStreets_3.readFeatures(json_FlintStreets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlintStreets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlintStreets_3.addFeatures(features_FlintStreets_3);
var lyr_FlintStreets_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlintStreets_3, 
                style: style_FlintStreets_3,
                popuplayertitle: "Flint Streets",
                interactive: true,
                title: '<img src="styles/legend/FlintStreets_3.png" /> Flint Streets'
            });
var format_School_4 = new ol.format.GeoJSON();
var features_School_4 = format_School_4.readFeatures(json_School_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_4.addFeatures(features_School_4);
var lyr_School_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_4, 
                style: style_School_4,
                popuplayertitle: "School",
                interactive: true,
                title: '<img src="styles/legend/School_4.png" /> School'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_StJohnsAerial_1.setVisible(true);lyr_SouthSideAerial_2.setVisible(true);lyr_FlintStreets_3.setVisible(true);lyr_School_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StJohnsAerial_1,lyr_SouthSideAerial_2,lyr_FlintStreets_3,lyr_School_4];
lyr_FlintStreets_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'URL': 'URL', });
lyr_School_4.set('fieldAliases', {'id': 'id', 'School': 'School', 'URL': 'URL', });
lyr_FlintStreets_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'URL': 'TextEdit', });
lyr_School_4.set('fieldImages', {'id': 'TextEdit', 'School': 'TextEdit', 'URL': 'TextEdit', });
lyr_FlintStreets_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'URL': 'inline label - always visible', });
lyr_School_4.set('fieldLabels', {'id': 'no label', 'School': 'inline label - always visible', 'URL': 'inline label - always visible', });
lyr_School_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});