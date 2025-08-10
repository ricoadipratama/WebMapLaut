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
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12821600.000000, -982725.361436, 12832010.000000, -972850.446785]
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
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12821600.000000, -982725.361436, 12832010.000000, -972850.446785]
        })
    });
var format_Daratan_3 = new ol.format.GeoJSON();
var features_Daratan_3 = format_Daratan_3.readFeatures(json_Daratan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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