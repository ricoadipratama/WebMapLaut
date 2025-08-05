ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([115.124660, -8.776354, 115.267117, -8.676905]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_CitraSatelit_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Citra Satelit<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CitraSatelit_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [115.178392, -8.793249, 115.271907, -8.705573]
        })
    });
var lyr_Kedalaman_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kedalaman<br />\
    <img src="styles/legend/Kedalaman_2_0.png" /> 0-1<br />\
    <img src="styles/legend/Kedalaman_2_1.png" /> 1,1-5<br />\
    <img src="styles/legend/Kedalaman_2_2.png" /> 5,1-10<br />\
    <img src="styles/legend/Kedalaman_2_3.png" /> 10,1-15<br />\
    <img src="styles/legend/Kedalaman_2_4.png" /> 15,1-20<br />\
    <img src="styles/legend/Kedalaman_2_5.png" /> 20,1-40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kedalaman_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [115.178392, -8.793249, 115.271907, -8.705573]
        })
    });
var format_Daratan_3 = new ol.format.GeoJSON();
var features_Daratan_3 = format_Daratan_3.readFeatures(json_Daratan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Daratan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daratan_3.addFeatures(features_Daratan_3);
var lyr_Daratan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daratan_3, 
                style: style_Daratan_3,
                popuplayertitle: 'Daratan',
                interactive: false,
                title: '<img src="styles/legend/Daratan_3.png" /> Daratan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CitraSatelit_1.setVisible(true);lyr_Kedalaman_2.setVisible(true);lyr_Daratan_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CitraSatelit_1,lyr_Kedalaman_2,lyr_Daratan_3];
lyr_Daratan_3.set('fieldAliases', {'FID': 'FID', });
lyr_Daratan_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_Daratan_3.set('fieldLabels', {'FID': 'no label', });
lyr_Daratan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});