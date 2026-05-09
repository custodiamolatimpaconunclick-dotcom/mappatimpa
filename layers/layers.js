var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Puntidacquasorgentipozzi_linee_1 = new ol.format.GeoJSON();
var features_Puntidacquasorgentipozzi_linee_1 = format_Puntidacquasorgentipozzi_linee_1.readFeatures(json_Puntidacquasorgentipozzi_linee_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidacquasorgentipozzi_linee_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidacquasorgentipozzi_linee_1.addFeatures(features_Puntidacquasorgentipozzi_linee_1);
var lyr_Puntidacquasorgentipozzi_linee_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntidacquasorgentipozzi_linee_1, 
                style: style_Puntidacquasorgentipozzi_linee_1,
                popuplayertitle: 'Punti d\'acqua sorgenti pozzi_linee',
                interactive: true,
                title: '<img src="styles/legend/Puntidacquasorgentipozzi_linee_1.png" /> Punti d\'acqua sorgenti pozzi_linee'
            });
var format_Puntidacquasorgentipozzi_punti_2 = new ol.format.GeoJSON();
var features_Puntidacquasorgentipozzi_punti_2 = format_Puntidacquasorgentipozzi_punti_2.readFeatures(json_Puntidacquasorgentipozzi_punti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidacquasorgentipozzi_punti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidacquasorgentipozzi_punti_2.addFeatures(features_Puntidacquasorgentipozzi_punti_2);
var lyr_Puntidacquasorgentipozzi_punti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntidacquasorgentipozzi_punti_2, 
                style: style_Puntidacquasorgentipozzi_punti_2,
                popuplayertitle: 'Punti d\'acqua sorgenti pozzi_punti',
                interactive: true,
                title: '<img src="styles/legend/Puntidacquasorgentipozzi_punti_2.png" /> Punti d\'acqua sorgenti pozzi_punti'
            });
var format_Strutturegeologichedidattiche_linee_3 = new ol.format.GeoJSON();
var features_Strutturegeologichedidattiche_linee_3 = format_Strutturegeologichedidattiche_linee_3.readFeatures(json_Strutturegeologichedidattiche_linee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strutturegeologichedidattiche_linee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strutturegeologichedidattiche_linee_3.addFeatures(features_Strutturegeologichedidattiche_linee_3);
var lyr_Strutturegeologichedidattiche_linee_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strutturegeologichedidattiche_linee_3, 
                style: style_Strutturegeologichedidattiche_linee_3,
                popuplayertitle: 'Strutture geologiche didattiche_linee',
                interactive: true,
                title: '<img src="styles/legend/Strutturegeologichedidattiche_linee_3.png" /> Strutture geologiche didattiche_linee'
            });
var format_Strutturegeologichedidattiche_poligoni_4 = new ol.format.GeoJSON();
var features_Strutturegeologichedidattiche_poligoni_4 = format_Strutturegeologichedidattiche_poligoni_4.readFeatures(json_Strutturegeologichedidattiche_poligoni_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strutturegeologichedidattiche_poligoni_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strutturegeologichedidattiche_poligoni_4.addFeatures(features_Strutturegeologichedidattiche_poligoni_4);
var lyr_Strutturegeologichedidattiche_poligoni_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strutturegeologichedidattiche_poligoni_4, 
                style: style_Strutturegeologichedidattiche_poligoni_4,
                popuplayertitle: 'Strutture geologiche didattiche_poligoni',
                interactive: true,
                title: '<img src="styles/legend/Strutturegeologichedidattiche_poligoni_4.png" /> Strutture geologiche didattiche_poligoni'
            });
var format_Geomorfologia_punti_5 = new ol.format.GeoJSON();
var features_Geomorfologia_punti_5 = format_Geomorfologia_punti_5.readFeatures(json_Geomorfologia_punti_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorfologia_punti_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorfologia_punti_5.addFeatures(features_Geomorfologia_punti_5);
var lyr_Geomorfologia_punti_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorfologia_punti_5, 
                style: style_Geomorfologia_punti_5,
                popuplayertitle: 'Geomorfologia_punti',
                interactive: true,
                title: '<img src="styles/legend/Geomorfologia_punti_5.png" /> Geomorfologia_punti'
            });
var format_Geomorfologia_linee_6 = new ol.format.GeoJSON();
var features_Geomorfologia_linee_6 = format_Geomorfologia_linee_6.readFeatures(json_Geomorfologia_linee_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorfologia_linee_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorfologia_linee_6.addFeatures(features_Geomorfologia_linee_6);
var lyr_Geomorfologia_linee_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorfologia_linee_6, 
                style: style_Geomorfologia_linee_6,
                popuplayertitle: 'Geomorfologia_linee',
                interactive: true,
                title: '<img src="styles/legend/Geomorfologia_linee_6.png" /> Geomorfologia_linee'
            });
var format_Geomorfologia_poligoni_7 = new ol.format.GeoJSON();
var features_Geomorfologia_poligoni_7 = format_Geomorfologia_poligoni_7.readFeatures(json_Geomorfologia_poligoni_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorfologia_poligoni_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorfologia_poligoni_7.addFeatures(features_Geomorfologia_poligoni_7);
var lyr_Geomorfologia_poligoni_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorfologia_poligoni_7, 
                style: style_Geomorfologia_poligoni_7,
                popuplayertitle: 'Geomorfologia_poligoni',
                interactive: true,
                title: '<img src="styles/legend/Geomorfologia_poligoni_7.png" /> Geomorfologia_poligoni'
            });
var format_Litologia_punti_8 = new ol.format.GeoJSON();
var features_Litologia_punti_8 = format_Litologia_punti_8.readFeatures(json_Litologia_punti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologia_punti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologia_punti_8.addFeatures(features_Litologia_punti_8);
var lyr_Litologia_punti_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologia_punti_8, 
                style: style_Litologia_punti_8,
                popuplayertitle: 'Litologia_punti',
                interactive: true,
                title: '<img src="styles/legend/Litologia_punti_8.png" /> Litologia_punti'
            });
var format_Litologia_linee_9 = new ol.format.GeoJSON();
var features_Litologia_linee_9 = format_Litologia_linee_9.readFeatures(json_Litologia_linee_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologia_linee_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologia_linee_9.addFeatures(features_Litologia_linee_9);
var lyr_Litologia_linee_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologia_linee_9, 
                style: style_Litologia_linee_9,
                popuplayertitle: 'Litologia_linee',
                interactive: true,
                title: '<img src="styles/legend/Litologia_linee_9.png" /> Litologia_linee'
            });
var format_Litologia_poligoni_10 = new ol.format.GeoJSON();
var features_Litologia_poligoni_10 = format_Litologia_poligoni_10.readFeatures(json_Litologia_poligoni_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologia_poligoni_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologia_poligoni_10.addFeatures(features_Litologia_poligoni_10);
var lyr_Litologia_poligoni_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologia_poligoni_10, 
                style: style_Litologia_poligoni_10,
                popuplayertitle: 'Litologia_poligoni',
                interactive: true,
                title: '<img src="styles/legend/Litologia_poligoni_10.png" /> Litologia_poligoni'
            });
var format_centrinucleistorici_11 = new ol.format.GeoJSON();
var features_centrinucleistorici_11 = format_centrinucleistorici_11.readFeatures(json_centrinucleistorici_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centrinucleistorici_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centrinucleistorici_11.addFeatures(features_centrinucleistorici_11);
var lyr_centrinucleistorici_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centrinucleistorici_11, 
                style: style_centrinucleistorici_11,
                popuplayertitle: 'centri nuclei storici',
                interactive: true,
                title: '<img src="styles/legend/centrinucleistorici_11.png" /> centri nuclei storici'
            });
var format_areeriserveregionali_12 = new ol.format.GeoJSON();
var features_areeriserveregionali_12 = format_areeriserveregionali_12.readFeatures(json_areeriserveregionali_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areeriserveregionali_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areeriserveregionali_12.addFeatures(features_areeriserveregionali_12);
var lyr_areeriserveregionali_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areeriserveregionali_12, 
                style: style_areeriserveregionali_12,
                popuplayertitle: 'aree riserve regionali',
                interactive: true,
    title: 'aree riserve regionali<br />\
    <img src="styles/legend/areeriserveregionali_12_0.png" /> A<br />\
    <img src="styles/legend/areeriserveregionali_12_1.png" /> B<br />\
    <img src="styles/legend/areeriserveregionali_12_2.png" /> <br />' });
var format_viabilitstoricatimpa_13 = new ol.format.GeoJSON();
var features_viabilitstoricatimpa_13 = format_viabilitstoricatimpa_13.readFeatures(json_viabilitstoricatimpa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viabilitstoricatimpa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viabilitstoricatimpa_13.addFeatures(features_viabilitstoricatimpa_13);
var lyr_viabilitstoricatimpa_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viabilitstoricatimpa_13, 
                style: style_viabilitstoricatimpa_13,
                popuplayertitle: 'viabilità storica timpa',
                interactive: true,
                title: '<img src="styles/legend/viabilitstoricatimpa_13.png" /> viabilità storica timpa'
            });
var format_viabilitstorica_14 = new ol.format.GeoJSON();
var features_viabilitstorica_14 = format_viabilitstorica_14.readFeatures(json_viabilitstorica_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viabilitstorica_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viabilitstorica_14.addFeatures(features_viabilitstorica_14);
var lyr_viabilitstorica_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viabilitstorica_14, 
                style: style_viabilitstorica_14,
                popuplayertitle: 'viabilità storica',
                interactive: true,
                title: '<img src="styles/legend/viabilitstorica_14.png" /> viabilità storica'
            });
var format_ferroviastoricatimpa_15 = new ol.format.GeoJSON();
var features_ferroviastoricatimpa_15 = format_ferroviastoricatimpa_15.readFeatures(json_ferroviastoricatimpa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferroviastoricatimpa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferroviastoricatimpa_15.addFeatures(features_ferroviastoricatimpa_15);
var lyr_ferroviastoricatimpa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ferroviastoricatimpa_15, 
                style: style_ferroviastoricatimpa_15,
                popuplayertitle: 'ferrovia storica timpa',
                interactive: true,
                title: '<img src="styles/legend/ferroviastoricatimpa_15.png" /> ferrovia storica timpa'
            });
var format_ferrovietimpa_16 = new ol.format.GeoJSON();
var features_ferrovietimpa_16 = format_ferrovietimpa_16.readFeatures(json_ferrovietimpa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferrovietimpa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferrovietimpa_16.addFeatures(features_ferrovietimpa_16);
var lyr_ferrovietimpa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ferrovietimpa_16, 
                style: style_ferrovietimpa_16,
                popuplayertitle: 'ferrovie timpa',
                interactive: true,
                title: '<img src="styles/legend/ferrovietimpa_16.png" /> ferrovie timpa'
            });
var format_stradepanoramichetimpa_17 = new ol.format.GeoJSON();
var features_stradepanoramichetimpa_17 = format_stradepanoramichetimpa_17.readFeatures(json_stradepanoramichetimpa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stradepanoramichetimpa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stradepanoramichetimpa_17.addFeatures(features_stradepanoramichetimpa_17);
var lyr_stradepanoramichetimpa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stradepanoramichetimpa_17, 
                style: style_stradepanoramichetimpa_17,
                popuplayertitle: 'strade panoramiche timpa',
                interactive: true,
                title: '<img src="styles/legend/stradepanoramichetimpa_17.png" /> strade panoramiche timpa'
            });
var format_beniisolatitimpa_18 = new ol.format.GeoJSON();
var features_beniisolatitimpa_18 = format_beniisolatitimpa_18.readFeatures(json_beniisolatitimpa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beniisolatitimpa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beniisolatitimpa_18.addFeatures(features_beniisolatitimpa_18);
var lyr_beniisolatitimpa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beniisolatitimpa_18, 
                style: style_beniisolatitimpa_18,
                popuplayertitle: 'beni isolati timpa',
                interactive: true,
                title: '<img src="styles/legend/beniisolatitimpa_18.png" /> beni isolati timpa'
            });
var format_geosititimpa_19 = new ol.format.GeoJSON();
var features_geosititimpa_19 = format_geosititimpa_19.readFeatures(json_geosititimpa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geosititimpa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geosititimpa_19.addFeatures(features_geosititimpa_19);
var lyr_geosititimpa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geosititimpa_19, 
                style: style_geosititimpa_19,
                popuplayertitle: 'geositi timpa',
                interactive: true,
                title: '<img src="styles/legend/geosititimpa_19.png" /> geositi timpa'
            });
var format_puntipanoramicitimpa_20 = new ol.format.GeoJSON();
var features_puntipanoramicitimpa_20 = format_puntipanoramicitimpa_20.readFeatures(json_puntipanoramicitimpa_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntipanoramicitimpa_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntipanoramicitimpa_20.addFeatures(features_puntipanoramicitimpa_20);
var lyr_puntipanoramicitimpa_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntipanoramicitimpa_20, 
                style: style_puntipanoramicitimpa_20,
                popuplayertitle: 'punti panoramici timpa',
                interactive: false,
                title: '<img src="styles/legend/puntipanoramicitimpa_20.png" /> punti panoramici timpa'
            });
var format_Edificato_21 = new ol.format.GeoJSON();
var features_Edificato_21 = format_Edificato_21.readFeatures(json_Edificato_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificato_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificato_21.addFeatures(features_Edificato_21);
var lyr_Edificato_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificato_21, 
                style: style_Edificato_21,
                popuplayertitle: 'Edificato',
                interactive: true,
                title: '<img src="styles/legend/Edificato_21.png" /> Edificato'
            });
var format_percorsi_sentieri_22 = new ol.format.GeoJSON();
var features_percorsi_sentieri_22 = format_percorsi_sentieri_22.readFeatures(json_percorsi_sentieri_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_percorsi_sentieri_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_percorsi_sentieri_22.addFeatures(features_percorsi_sentieri_22);
var lyr_percorsi_sentieri_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_percorsi_sentieri_22, 
                style: style_percorsi_sentieri_22,
                popuplayertitle: 'percorsi_sentieri',
                interactive: true,
                title: '<img src="styles/legend/percorsi_sentieri_22.png" /> percorsi_sentieri'
            });
var format_ImpluviDispluvi_23 = new ol.format.GeoJSON();
var features_ImpluviDispluvi_23 = format_ImpluviDispluvi_23.readFeatures(json_ImpluviDispluvi_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImpluviDispluvi_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImpluviDispluvi_23.addFeatures(features_ImpluviDispluvi_23);
var lyr_ImpluviDispluvi_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImpluviDispluvi_23, 
                style: style_ImpluviDispluvi_23,
                popuplayertitle: 'Impluvi-Displuvi',
                interactive: true,
    title: 'Impluvi-Displuvi<br />\
    <img src="styles/legend/ImpluviDispluvi_23_0.png" /> D<br />\
    <img src="styles/legend/ImpluviDispluvi_23_1.png" /> I<br />\
    <img src="styles/legend/ImpluviDispluvi_23_2.png" /> <br />' });
var format_areeterrnonrilevabili_24 = new ol.format.GeoJSON();
var features_areeterrnonrilevabili_24 = format_areeterrnonrilevabili_24.readFeatures(json_areeterrnonrilevabili_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areeterrnonrilevabili_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areeterrnonrilevabili_24.addFeatures(features_areeterrnonrilevabili_24);
var lyr_areeterrnonrilevabili_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areeterrnonrilevabili_24, 
                style: style_areeterrnonrilevabili_24,
                popuplayertitle: 'aree terr. non rilevabili',
                interactive: true,
                title: '<img src="styles/legend/areeterrnonrilevabili_24.png" /> aree terr. non rilevabili'
            });
var format_incendi_25 = new ol.format.GeoJSON();
var features_incendi_25 = format_incendi_25.readFeatures(json_incendi_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_incendi_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_incendi_25.addFeatures(features_incendi_25);
var lyr_incendi_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_incendi_25, 
                style: style_incendi_25,
                popuplayertitle: 'incendi',
                interactive: true,
    title: 'incendi<br />\
    <img src="styles/legend/incendi_25_0.png" /> 2012-04-01<br />\
    <img src="styles/legend/incendi_25_1.png" /> 2018-07-22<br />\
    <img src="styles/legend/incendi_25_2.png" /> 2023-07-23<br />\
    <img src="styles/legend/incendi_25_3.png" /> 2024-09-13<br />\
    <img src="styles/legend/incendi_25_4.png" /> <br />' });
var format_murierasole1_26 = new ol.format.GeoJSON();
var features_murierasole1_26 = format_murierasole1_26.readFeatures(json_murierasole1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_murierasole1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_murierasole1_26.addFeatures(features_murierasole1_26);
var lyr_murierasole1_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_murierasole1_26, 
                style: style_murierasole1_26,
                popuplayertitle: 'muri e rasole1',
                interactive: true,
    title: 'muri e rasole1<br />\
    <img src="styles/legend/murierasole1_26_0.png" /> muro<br />\
    <img src="styles/legend/murierasole1_26_1.png" /> muro di confine<br />\
    <img src="styles/legend/murierasole1_26_2.png" /> muro di sostegno<br />\
    <img src="styles/legend/murierasole1_26_3.png" /> rasola<br />\
    <img src="styles/legend/murierasole1_26_4.png" /> saia<br />\
    <img src="styles/legend/murierasole1_26_5.png" /> terrazzamenti<br />\
    <img src="styles/legend/murierasole1_26_6.png" /> <br />' });
var format_Foto_27 = new ol.format.GeoJSON();
var features_Foto_27 = format_Foto_27.readFeatures(json_Foto_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foto_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foto_27.addFeatures(features_Foto_27);
var lyr_Foto_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foto_27, 
                style: style_Foto_27,
                popuplayertitle: 'Foto',
                interactive: true,
                title: '<img src="styles/legend/Foto_27.png" /> Foto'
            });
var format_percorsosaiamastra_28 = new ol.format.GeoJSON();
var features_percorsosaiamastra_28 = format_percorsosaiamastra_28.readFeatures(json_percorsosaiamastra_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_percorsosaiamastra_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_percorsosaiamastra_28.addFeatures(features_percorsosaiamastra_28);
var lyr_percorsosaiamastra_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_percorsosaiamastra_28, 
                style: style_percorsosaiamastra_28,
                popuplayertitle: 'percorso saia mastra',
                interactive: true,
                title: '<img src="styles/legend/percorsosaiamastra_28.png" /> percorso saia mastra'
            });
var format_Puntisaiamastra_29 = new ol.format.GeoJSON();
var features_Puntisaiamastra_29 = format_Puntisaiamastra_29.readFeatures(json_Puntisaiamastra_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntisaiamastra_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntisaiamastra_29.addFeatures(features_Puntisaiamastra_29);
var lyr_Puntisaiamastra_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntisaiamastra_29, 
                style: style_Puntisaiamastra_29,
                popuplayertitle: 'Punti saia mastra',
                interactive: true,
                title: '<img src="styles/legend/Puntisaiamastra_29.png" /> Punti saia mastra'
            });
var format_Puntituboconsorzio_30 = new ol.format.GeoJSON();
var features_Puntituboconsorzio_30 = format_Puntituboconsorzio_30.readFeatures(json_Puntituboconsorzio_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntituboconsorzio_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntituboconsorzio_30.addFeatures(features_Puntituboconsorzio_30);
var lyr_Puntituboconsorzio_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntituboconsorzio_30, 
                style: style_Puntituboconsorzio_30,
                popuplayertitle: 'Punti tubo consorzio',
                interactive: true,
                title: '<img src="styles/legend/Puntituboconsorzio_30.png" /> Punti tubo consorzio'
            });
var group_Layer = new ol.layer.Group({
                                layers: [lyr_Edificato_21,lyr_percorsi_sentieri_22,lyr_ImpluviDispluvi_23,lyr_areeterrnonrilevabili_24,lyr_incendi_25,lyr_murierasole1_26,lyr_Foto_27,lyr_percorsosaiamastra_28,lyr_Puntisaiamastra_29,lyr_Puntituboconsorzio_30,],
                                fold: 'open',
                                title: 'Layer'});
var group_SOPRINTENDENZA = new ol.layer.Group({
                                layers: [lyr_centrinucleistorici_11,lyr_areeriserveregionali_12,lyr_viabilitstoricatimpa_13,lyr_viabilitstorica_14,lyr_ferroviastoricatimpa_15,lyr_ferrovietimpa_16,lyr_stradepanoramichetimpa_17,lyr_beniisolatitimpa_18,lyr_geosititimpa_19,lyr_puntipanoramicitimpa_20,],
                                fold: 'close',
                                title: 'SOPRINTENDENZA'});
var group_geologiaFiletti = new ol.layer.Group({
                                layers: [lyr_Puntidacquasorgentipozzi_linee_1,lyr_Puntidacquasorgentipozzi_punti_2,lyr_Strutturegeologichedidattiche_linee_3,lyr_Strutturegeologichedidattiche_poligoni_4,lyr_Geomorfologia_punti_5,lyr_Geomorfologia_linee_6,lyr_Geomorfologia_poligoni_7,lyr_Litologia_punti_8,lyr_Litologia_linee_9,lyr_Litologia_poligoni_10,],
                                fold: 'close',
                                title: 'geologia Filetti'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Puntidacquasorgentipozzi_linee_1.setVisible(true);lyr_Puntidacquasorgentipozzi_punti_2.setVisible(true);lyr_Strutturegeologichedidattiche_linee_3.setVisible(true);lyr_Strutturegeologichedidattiche_poligoni_4.setVisible(true);lyr_Geomorfologia_punti_5.setVisible(true);lyr_Geomorfologia_linee_6.setVisible(true);lyr_Geomorfologia_poligoni_7.setVisible(true);lyr_Litologia_punti_8.setVisible(true);lyr_Litologia_linee_9.setVisible(true);lyr_Litologia_poligoni_10.setVisible(true);lyr_centrinucleistorici_11.setVisible(true);lyr_areeriserveregionali_12.setVisible(true);lyr_viabilitstoricatimpa_13.setVisible(true);lyr_viabilitstorica_14.setVisible(true);lyr_ferroviastoricatimpa_15.setVisible(true);lyr_ferrovietimpa_16.setVisible(true);lyr_stradepanoramichetimpa_17.setVisible(true);lyr_beniisolatitimpa_18.setVisible(true);lyr_geosititimpa_19.setVisible(true);lyr_puntipanoramicitimpa_20.setVisible(true);lyr_Edificato_21.setVisible(true);lyr_percorsi_sentieri_22.setVisible(true);lyr_ImpluviDispluvi_23.setVisible(true);lyr_areeterrnonrilevabili_24.setVisible(true);lyr_incendi_25.setVisible(true);lyr_murierasole1_26.setVisible(true);lyr_Foto_27.setVisible(true);lyr_percorsosaiamastra_28.setVisible(true);lyr_Puntisaiamastra_29.setVisible(true);lyr_Puntituboconsorzio_30.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_geologiaFiletti,group_SOPRINTENDENZA,group_Layer];
lyr_Puntidacquasorgentipozzi_linee_1.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Puntidacquasorgentipozzi_punti_2.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Strutturegeologichedidattiche_linee_3.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Strutturegeologichedidattiche_poligoni_4.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Geomorfologia_punti_5.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Geomorfologia_linee_6.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Geomorfologia_poligoni_7.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'PRIORITA\'': 'PRIORITA\'', 'VULNER': 'VULNER', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', });
lyr_Litologia_punti_8.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', });
lyr_Litologia_linee_9.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', });
lyr_Litologia_poligoni_10.set('fieldAliases', {'Name': 'Name', 'COD_CAT': 'COD_CAT', 'TIPO': 'TIPO', 'DESCR': 'DESCR', 'VALORE': 'VALORE', 'STATO': 'STATO', 'ACCESS': 'ACCESS', 'VULNER': 'VULNER', 'PRIORITA\'': 'PRIORITA\'', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', 'Quota_m': 'Quota_m', 'DATA_RIL': 'DATA_RIL', 'RILEVATORE': 'RILEVATORE', 'NOTE': 'NOTE', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', });
lyr_centrinucleistorici_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DENOM': 'DENOM', 'AREA': 'AREA', 'AMBITO': 'AMBITO', 'COMUNE': 'COMUNE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Progress__': 'Progress__', 'Ente_sched': 'Ente_sched', 'Riferiment': 'Riferiment', 'Classe': 'Classe', 'Compilator': 'Compilator', 'Allegato': 'Allegato', 'vincolo_pa': 'vincolo_pa', 'Paesaggio_': 'Paesaggio_', 'Strumento_': 'Strumento_', 'Decreto_st': 'Decreto_st', 'Sintesi_no': 'Sintesi_no', 'N_scheda': 'N_scheda', 'Compilat_1': 'Compilat_1', 'Nota': 'Nota', 'N_scheda_D': 'N_scheda_D', 'Emergenze_': 'Emergenze_', });
lyr_areeriserveregionali_12.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CODICE_REG': 'CODICE_REG', 'NOME_AREA': 'NOME_AREA', 'AREA_KMQ': 'AREA_KMQ', 'DATUM': 'DATUM', 'PROIEZIONE': 'PROIEZIONE', 'FUSO': 'FUSO', 'LAT_MT': 'LAT_MT', 'LON_MT': 'LON_MT', 'RIF_LEGGE': 'RIF_LEGGE', 'REGIONE': 'REGIONE', 'PROVINCIA': 'PROVINCIA', 'COMUNE': 'COMUNE', 'TIPOLOGIA': 'TIPOLOGIA', 'ZONA': 'ZONA', 'TIPO_SITO': 'TIPO_SITO', 'REG_BIOG': 'REG_BIOG', 'ANNO_ISTIT': 'ANNO_ISTIT', 'DATA_ISTIT': 'DATA_ISTIT', 'GESTORE': 'GESTORE', 'CAP': 'CAP', 'TEL': 'TEL', 'CELL': 'CELL', 'INDIRIZZO': 'INDIRIZZO', 'MAIL': 'MAIL', 'Shape_Leng': 'Shape_Leng', 'ART142_f_R': 'ART142_f_R', 'ISTAT_PROV': 'ISTAT_PROV', 'AMBITO_PRO': 'AMBITO_PRO', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_viabilitstoricatimpa_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'USO_STOR': 'USO_STOR', 'ART_134': 'ART_134', 'ID_SCHEDA': 'ID_SCHEDA', 'AMBITO': 'AMBITO', 'ID': 'ID', 'NUMERO_SCH': 'NUMERO_SCH', 'TIPO_SCHED': 'TIPO_SCHED', 'ENTE_SCHED': 'ENTE_SCHED', 'LOCALITà_': 'LOCALITà_', 'PROVINCIA_': 'PROVINCIA_', 'COMUNI_ATT': 'COMUNI_ATT', 'CONTRADA__': 'CONTRADA__', 'RIFERIMENT': 'RIFERIMENT', 'DEFINIZION': 'DEFINIZION', 'DENOMINAZI': 'DENOMINAZI', 'DENOMINA_1': 'DENOMINA_1', 'SECOLO__IN': 'SECOLO__IN', 'FONTI': 'FONTI', 'LUNGHEZZA_': 'LUNGHEZZA_', 'TIPO_DI_FO': 'TIPO_DI_FO', 'STATO_DI_C': 'STATO_DI_C', 'USO_ATTUAL': 'USO_ATTUAL', 'QUALIFICAZ': 'QUALIFICAZ', 'CONTESTO__': 'CONTESTO__', 'RILEVANZA': 'RILEVANZA', 'DATA': 'DATA', 'NOME_DEL_C': 'NOME_DEL_C', 'RUOLO_DEL_': 'RUOLO_DEL_', 'SEGNALAZIO': 'SEGNALAZIO', 'Shape_Leng': 'Shape_Leng', 'Osservazio': 'Osservazio', 'numero_tra': 'numero_tra', 'Numero_per': 'Numero_per', 'legenda': 'legenda', 'numero_leg': 'numero_leg', 'Revisore_s': 'Revisore_s', 'Revisione_': 'Revisione_', 'Ruolo_revi': 'Ruolo_revi', 'Oggetto_re': 'Oggetto_re', 'DATA_DISMI': 'DATA_DISMI', });
lyr_viabilitstorica_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'USO_STOR': 'USO_STOR', 'ART_134': 'ART_134', 'ID_SCHEDA': 'ID_SCHEDA', 'AMBITO': 'AMBITO', 'ID': 'ID', 'NUMERO_SCH': 'NUMERO_SCH', 'TIPO_SCHED': 'TIPO_SCHED', 'ENTE_SCHED': 'ENTE_SCHED', 'LOCALITà_': 'LOCALITà_', 'PROVINCIA_': 'PROVINCIA_', 'COMUNI_ATT': 'COMUNI_ATT', 'CONTRADA__': 'CONTRADA__', 'RIFERIMENT': 'RIFERIMENT', 'DEFINIZION': 'DEFINIZION', 'DENOMINAZI': 'DENOMINAZI', 'DENOMINA_1': 'DENOMINA_1', 'SECOLO__IN': 'SECOLO__IN', 'FONTI': 'FONTI', 'LUNGHEZZA_': 'LUNGHEZZA_', 'TIPO_DI_FO': 'TIPO_DI_FO', 'STATO_DI_C': 'STATO_DI_C', 'USO_ATTUAL': 'USO_ATTUAL', 'QUALIFICAZ': 'QUALIFICAZ', 'CONTESTO__': 'CONTESTO__', 'RILEVANZA': 'RILEVANZA', 'DATA': 'DATA', 'NOME_DEL_C': 'NOME_DEL_C', 'RUOLO_DEL_': 'RUOLO_DEL_', 'SEGNALAZIO': 'SEGNALAZIO', 'Shape_Leng': 'Shape_Leng', 'Osservazio': 'Osservazio', 'numero_tra': 'numero_tra', 'Numero_per': 'Numero_per', 'legenda': 'legenda', 'numero_leg': 'numero_leg', 'Revisore_s': 'Revisore_s', 'Revisione_': 'Revisione_', 'Ruolo_revi': 'Ruolo_revi', 'Oggetto_re': 'Oggetto_re', 'DATA_DISMI': 'DATA_DISMI', });
lyr_ferroviastoricatimpa_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DENOM': 'DENOM', 'USO_ATT': 'USO_ATT', 'VALORE': 'VALORE', 'FONDO': 'FONDO', 'ALT': 'ALT', 'AMBITO': 'AMBITO', 'PR': 'PR', 'Shape_Leng': 'Shape_Leng', 'osservazio': 'osservazio', 'fonte': 'fonte', 'QUALIFICAZ': 'QUALIFICAZ', 'TIPOLOGIA': 'TIPOLOGIA', 'LOC__COLLE': 'LOC__COLLE', 'DATA_COSTR': 'DATA_COSTR', 'DATA_DISMI': 'DATA_DISMI', 'N__TRATTO': 'N__TRATTO', 'N__FERROVI': 'N__FERROVI', 'COMUNE': 'COMUNE', 'ENTE_COMPI': 'ENTE_COMPI', 'ENTE_REVIS': 'ENTE_REVIS', 'NOME_REVIS': 'NOME_REVIS', 'NOME_COMPI': 'NOME_COMPI', });
lyr_ferrovietimpa_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Fondo': 'Fondo', 'UsoAttuale': 'UsoAttuale', 'UsoStorico': 'UsoStorico', 'ValAttuale': 'ValAttuale', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'N_FERROVIA': 'N_FERROVIA', 'N_TRATTO': 'N_TRATTO', 'TIPOLOGIA': 'TIPOLOGIA', 'QUALIFICAZ': 'QUALIFICAZ', 'DENOMINAZI': 'DENOMINAZI', 'DATA_DI_CO': 'DATA_DI_CO', 'COMUNE': 'COMUNE', 'LOC_COLLEG': 'LOC_COLLEG', 'FONTE': 'FONTE', 'osservazio': 'osservazio', 'ENTE_COMPI': 'ENTE_COMPI', 'NOME_COMPI': 'NOME_COMPI', 'ENTE_REVIS': 'ENTE_REVIS', 'NOME_REVIS': 'NOME_REVIS', });
lyr_stradepanoramichetimpa_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DENOMINAZ': 'DENOMINAZ', 'VALORE': 'VALORE', 'DIREZIONE': 'DIREZIONE', 'TIPO': 'TIPO', 'AMBITO': 'AMBITO', 'LENGHT': 'LENGHT', 'FONTE': 'FONTE', 'ALT': 'ALT', 'PROVINCIA': 'PROVINCIA', 'COMUNI_ATT': 'COMUNI_ATT', 'ENTE_SCHED': 'ENTE_SCHED', 'Altra_deno': 'Altra_deno', 'OSSERVAZ_1': 'OSSERVAZ_1', });
lyr_beniisolatitimpa_18.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'id_dbf': 'id_dbf', 'Progressiv': 'Progressiv', 'Numero_sch': 'Numero_sch', 'Riferiment': 'Riferiment', 'Provincia': 'Provincia', 'Ambito': 'Ambito', 'Comune': 'Comune', 'Localit�': 'Localit�', 'Definizion': 'Definizion', 'Classe_Ogg': 'Classe_Ogg', 'Qualificaz': 'Qualificaz', 'Denominazi': 'Denominazi', 'Denomina_1': 'Denomina_1', 'Secolo': 'Secolo', 'Coordinata': 'Coordinata', 'Coordina_1': 'Coordina_1', 'Dati_Catas': 'Dati_Catas', 'Stato_di_c': 'Stato_di_c', 'Uso_attual': 'Uso_attual', 'Uso_storic': 'Uso_storic', 'Osservazio': 'Osservazio', 'Rilevanza': 'Rilevanza', 'Rilevanza1': 'Rilevanza1', 'Vincoli': 'Vincoli', 'Vincolo_Pa': 'Vincolo_Pa', 'Schema_': 'Schema_', 'Forma': 'Forma', 'Tipo_sched': 'Tipo_sched', 'Altre_sche': 'Altre_sche', 'Riferime_1': 'Riferime_1', 'Ubicaz_via': 'Ubicaz_via', 'paes__loc': 'paes__loc', 'Cartografi': 'Cartografi', 'Propriet��': 'Propriet��', 'Centro_sto': 'Centro_sto', 'Data': 'Data', 'Compilator': 'Compilator', 'Ruolo': 'Ruolo', 'Ente_Sched': 'Ente_Sched', 'Tipologia': 'Tipologia', 'immagine': 'immagine', 'Riferime_2': 'Riferime_2', 'Riferim_LG': 'Riferim_LG', });
lyr_geosititimpa_19.set('fieldAliases', {'ID_geosito': 'ID_geosito', 'Compilator': 'Compilator', 'Acq_dati': 'Acq_dati', 'Cod__sch': 'Cod__sch', 'Data_sch': 'Data_sch', 'Sch__coll': 'Sch__coll', 'Nome_geos': 'Nome_geos', 'Regione': 'Regione', 'Provincia': 'Provincia', 'Ambit_PTPR': 'Ambit_PTPR', 'Comune': 'Comune', 'Localit�': 'Localit�', 'Quota': 'Quota', 'DenomIGM': 'DenomIGM', 'SezioneCTR': 'SezioneCTR', 'Bac__idrog': 'Bac__idrog', 'Dominio_ge': 'Dominio_ge', 'Int_sc_I': 'Int_sc_I', 'Int_sc_II': 'Int_sc_II', 'Valut_int_': 'Valut_int_', 'Grado_int_': 'Grado_int_', 'Altro_int_': 'Altro_int_', 'Altro_int1': 'Altro_int1', 'Giudiz_sog': 'Giudiz_sog', 'Giudiz_ogg': 'Giudiz_ogg', 'Descr_geos': 'Descr_geos', 'Doc_icon': 'Doc_icon', 'Tipol_geos': 'Tipol_geos', 'Litologia': 'Litologia', 'Unit_cron': 'Unit_cron', 'Età_subst': 'Età_subst', 'Elemento': 'Elemento', 'Forma': 'Forma', 'Area': 'Area', 'Lunghezza': 'Lunghezza', 'Spessore': 'Spessore', 'Esposizion': 'Esposizion', 'Accessibil': 'Accessibil', 'Diff_acces': 'Diff_acces', 'Mod_access': 'Mod_access', 'Geositi_co': 'Geositi_co', 'Punt_pan': 'Punt_pan', 'Punt_visib': 'Punt_visib', 'Stagione': 'Stagione', 'Area_attre': 'Area_attre', 'Strut_albe': 'Strut_albe', 'Campeggio': 'Campeggio', 'Acqua_pot': 'Acqua_pot', 'Uso_suolo': 'Uso_suolo', 'Propr_priv': 'Propr_priv', 'Area_prot': 'Area_prot', 'Altri_vinc': 'Altri_vinc', 'St_conserv': 'St_conserv', 'Risch_degr': 'Risch_degr', 'Descr_risc': 'Descr_risc', 'Valore_pae': 'Valore_pae', 'Prop_prote': 'Prop_prote', 'Notaz_agg': 'Notaz_agg', 'Bibliograf': 'Bibliograf', 'FID_': 'FID_', 'X': 'X', 'Y': 'Y', 'Cod_sch': 'Cod_sch', });
lyr_puntipanoramicitimpa_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AMBITO': 'AMBITO', 'COMUNE': 'COMUNE', 'STAZIONE': 'STAZIONE', 'ROTAZ': 'ROTAZ', 'BELVEDERE': 'BELVEDERE', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'Art_134': 'Art_134', 'ALT': 'ALT', });
lyr_Edificato_21.set('fieldAliases', {'Denominazi': 'Denominazi', 'Via': 'Via', 'Foto': 'Foto', 'Tipo': 'Tipo', 'Uso': 'Uso', 'Stato': 'Stato', 'Rif. Catas': 'Rif. Catas', 'Rif Cat St': 'Rif Cat St', 'Tec. costr': 'Tec. costr', 'Epoca real': 'Epoca real', 'Note-Altro': 'Note-Altro', 'ID': 'ID', 'Rilevanza': 'Rilevanza', });
lyr_percorsi_sentieri_22.set('fieldAliases', {'id': 'id', 'denominazi': 'denominazi', 'note': 'note', });
lyr_ImpluviDispluvi_23.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', });
lyr_areeterrnonrilevabili_24.set('fieldAliases', {'id': 'id', });
lyr_incendi_25.set('fieldAliases', {'id': 'id', 'data': 'data', 'link': 'link', });
lyr_murierasole1_26.set('fieldAliases', {'zona timpa': 'zona timpa', 'tipo muro': 'tipo muro', 'stato': 'stato', 'Tipologia': 'Tipologia', 'rif.cat.st': 'rif.cat.st', });
lyr_Foto_27.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', });
lyr_percorsosaiamastra_28.set('fieldAliases', {'id': 'id', });
lyr_Puntisaiamastra_29.set('fieldAliases', {'Name': 'Name', 'SAMPLE_1': 'SAMPLE_1', 'x': 'x', 'y': 'y', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', });
lyr_Puntituboconsorzio_30.set('fieldAliases', {'Name': 'Name', 'SAMPLE_1': 'SAMPLE_1', 'x': 'x', 'y': 'y', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', });
lyr_Puntidacquasorgentipozzi_linee_1.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Puntidacquasorgentipozzi_punti_2.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Strutturegeologichedidattiche_linee_3.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Strutturegeologichedidattiche_poligoni_4.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Geomorfologia_punti_5.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Geomorfologia_linee_6.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Geomorfologia_poligoni_7.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'VULNER': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', });
lyr_Litologia_punti_8.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', });
lyr_Litologia_linee_9.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', });
lyr_Litologia_poligoni_10.set('fieldImages', {'Name': 'TextEdit', 'COD_CAT': 'TextEdit', 'TIPO': 'TextEdit', 'DESCR': 'TextEdit', 'VALORE': 'TextEdit', 'STATO': 'TextEdit', 'ACCESS': 'TextEdit', 'VULNER': 'TextEdit', 'PRIORITA\'': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', 'Quota_m': 'TextEdit', 'DATA_RIL': 'DateTime', 'RILEVATORE': 'TextEdit', 'NOTE': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', });
lyr_centrinucleistorici_11.set('fieldImages', {'OBJECTID': '', 'DENOM': '', 'AREA': '', 'AMBITO': '', 'COMUNE': '', 'Shape_Leng': '', 'Shape_Area': '', 'Progress__': '', 'Ente_sched': '', 'Riferiment': '', 'Classe': '', 'Compilator': '', 'Allegato': '', 'vincolo_pa': '', 'Paesaggio_': '', 'Strumento_': '', 'Decreto_st': '', 'Sintesi_no': '', 'N_scheda': '', 'Compilat_1': '', 'Nota': '', 'N_scheda_D': '', 'Emergenze_': '', });
lyr_areeriserveregionali_12.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODICE_REG': 'TextEdit', 'NOME_AREA': 'TextEdit', 'AREA_KMQ': 'TextEdit', 'DATUM': 'TextEdit', 'PROIEZIONE': 'TextEdit', 'FUSO': 'TextEdit', 'LAT_MT': 'TextEdit', 'LON_MT': 'TextEdit', 'RIF_LEGGE': 'TextEdit', 'REGIONE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNE': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_SITO': 'TextEdit', 'REG_BIOG': 'TextEdit', 'ANNO_ISTIT': 'TextEdit', 'DATA_ISTIT': 'TextEdit', 'GESTORE': 'TextEdit', 'CAP': 'TextEdit', 'TEL': 'TextEdit', 'CELL': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'MAIL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ART142_f_R': 'TextEdit', 'ISTAT_PROV': 'TextEdit', 'AMBITO_PRO': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_viabilitstoricatimpa_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'USO_STOR': 'TextEdit', 'ART_134': 'TextEdit', 'ID_SCHEDA': 'TextEdit', 'AMBITO': 'TextEdit', 'ID': 'TextEdit', 'NUMERO_SCH': 'TextEdit', 'TIPO_SCHED': 'TextEdit', 'ENTE_SCHED': 'TextEdit', 'LOCALITà_': 'TextEdit', 'PROVINCIA_': 'TextEdit', 'COMUNI_ATT': 'TextEdit', 'CONTRADA__': 'TextEdit', 'RIFERIMENT': 'TextEdit', 'DEFINIZION': 'TextEdit', 'DENOMINAZI': 'TextEdit', 'DENOMINA_1': 'TextEdit', 'SECOLO__IN': 'TextEdit', 'FONTI': 'TextEdit', 'LUNGHEZZA_': 'TextEdit', 'TIPO_DI_FO': 'TextEdit', 'STATO_DI_C': 'TextEdit', 'USO_ATTUAL': 'TextEdit', 'QUALIFICAZ': 'TextEdit', 'CONTESTO__': 'TextEdit', 'RILEVANZA': 'TextEdit', 'DATA': 'TextEdit', 'NOME_DEL_C': 'TextEdit', 'RUOLO_DEL_': 'TextEdit', 'SEGNALAZIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Osservazio': 'TextEdit', 'numero_tra': 'TextEdit', 'Numero_per': 'TextEdit', 'legenda': 'TextEdit', 'numero_leg': 'TextEdit', 'Revisore_s': 'TextEdit', 'Revisione_': 'TextEdit', 'Ruolo_revi': 'TextEdit', 'Oggetto_re': 'TextEdit', 'DATA_DISMI': 'TextEdit', });
lyr_viabilitstorica_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'USO_STOR': 'TextEdit', 'ART_134': 'TextEdit', 'ID_SCHEDA': 'TextEdit', 'AMBITO': 'TextEdit', 'ID': 'TextEdit', 'NUMERO_SCH': 'TextEdit', 'TIPO_SCHED': 'TextEdit', 'ENTE_SCHED': 'TextEdit', 'LOCALITà_': 'TextEdit', 'PROVINCIA_': 'TextEdit', 'COMUNI_ATT': 'TextEdit', 'CONTRADA__': 'TextEdit', 'RIFERIMENT': 'TextEdit', 'DEFINIZION': 'TextEdit', 'DENOMINAZI': 'TextEdit', 'DENOMINA_1': 'TextEdit', 'SECOLO__IN': 'TextEdit', 'FONTI': 'TextEdit', 'LUNGHEZZA_': 'TextEdit', 'TIPO_DI_FO': 'TextEdit', 'STATO_DI_C': 'TextEdit', 'USO_ATTUAL': 'TextEdit', 'QUALIFICAZ': 'TextEdit', 'CONTESTO__': 'TextEdit', 'RILEVANZA': 'TextEdit', 'DATA': 'TextEdit', 'NOME_DEL_C': 'TextEdit', 'RUOLO_DEL_': 'TextEdit', 'SEGNALAZIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Osservazio': 'TextEdit', 'numero_tra': 'TextEdit', 'Numero_per': 'TextEdit', 'legenda': 'TextEdit', 'numero_leg': 'TextEdit', 'Revisore_s': 'TextEdit', 'Revisione_': 'TextEdit', 'Ruolo_revi': 'TextEdit', 'Oggetto_re': 'TextEdit', 'DATA_DISMI': 'TextEdit', });
lyr_ferroviastoricatimpa_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DENOM': 'TextEdit', 'USO_ATT': 'TextEdit', 'VALORE': 'TextEdit', 'FONDO': 'TextEdit', 'ALT': 'TextEdit', 'AMBITO': 'TextEdit', 'PR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'osservazio': 'TextEdit', 'fonte': 'TextEdit', 'QUALIFICAZ': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'LOC__COLLE': 'TextEdit', 'DATA_COSTR': 'TextEdit', 'DATA_DISMI': 'TextEdit', 'N__TRATTO': 'TextEdit', 'N__FERROVI': 'TextEdit', 'COMUNE': 'TextEdit', 'ENTE_COMPI': 'TextEdit', 'ENTE_REVIS': 'TextEdit', 'NOME_REVIS': 'TextEdit', 'NOME_COMPI': 'TextEdit', });
lyr_ferrovietimpa_16.set('fieldImages', {'OBJECTID': '', 'Fondo': '', 'UsoAttuale': '', 'UsoStorico': '', 'ValAttuale': '', 'ID': '', 'Shape_Leng': '', 'N_FERROVIA': '', 'N_TRATTO': '', 'TIPOLOGIA': '', 'QUALIFICAZ': '', 'DENOMINAZI': '', 'DATA_DI_CO': '', 'COMUNE': '', 'LOC_COLLEG': '', 'FONTE': '', 'osservazio': '', 'ENTE_COMPI': '', 'NOME_COMPI': '', 'ENTE_REVIS': '', 'NOME_REVIS': '', });
lyr_stradepanoramichetimpa_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DENOMINAZ': 'TextEdit', 'VALORE': 'Range', 'DIREZIONE': 'TextEdit', 'TIPO': 'TextEdit', 'AMBITO': 'Range', 'LENGHT': 'TextEdit', 'FONTE': 'TextEdit', 'ALT': 'Range', 'PROVINCIA': 'TextEdit', 'COMUNI_ATT': 'TextEdit', 'ENTE_SCHED': 'TextEdit', 'Altra_deno': 'TextEdit', 'OSSERVAZ_1': 'TextEdit', });
lyr_beniisolatitimpa_18.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'id_dbf': 'TextEdit', 'Progressiv': 'TextEdit', 'Numero_sch': 'TextEdit', 'Riferiment': 'TextEdit', 'Provincia': 'TextEdit', 'Ambito': 'TextEdit', 'Comune': 'TextEdit', 'Localit�': 'TextEdit', 'Definizion': 'TextEdit', 'Classe_Ogg': 'TextEdit', 'Qualificaz': 'TextEdit', 'Denominazi': 'TextEdit', 'Denomina_1': 'TextEdit', 'Secolo': 'TextEdit', 'Coordinata': 'TextEdit', 'Coordina_1': 'TextEdit', 'Dati_Catas': 'TextEdit', 'Stato_di_c': 'TextEdit', 'Uso_attual': 'TextEdit', 'Uso_storic': 'TextEdit', 'Osservazio': 'TextEdit', 'Rilevanza': 'TextEdit', 'Rilevanza1': 'TextEdit', 'Vincoli': 'TextEdit', 'Vincolo_Pa': 'TextEdit', 'Schema_': 'TextEdit', 'Forma': 'TextEdit', 'Tipo_sched': 'TextEdit', 'Altre_sche': 'TextEdit', 'Riferime_1': 'TextEdit', 'Ubicaz_via': 'TextEdit', 'paes__loc': 'TextEdit', 'Cartografi': 'TextEdit', 'Propriet��': 'TextEdit', 'Centro_sto': 'TextEdit', 'Data': 'TextEdit', 'Compilator': 'TextEdit', 'Ruolo': 'TextEdit', 'Ente_Sched': 'TextEdit', 'Tipologia': 'TextEdit', 'immagine': 'TextEdit', 'Riferime_2': 'TextEdit', 'Riferim_LG': 'TextEdit', });
lyr_geosititimpa_19.set('fieldImages', {'ID_geosito': '', 'Compilator': '', 'Acq_dati': '', 'Cod__sch': '', 'Data_sch': '', 'Sch__coll': '', 'Nome_geos': '', 'Regione': '', 'Provincia': '', 'Ambit_PTPR': '', 'Comune': '', 'Localit�': '', 'Quota': '', 'DenomIGM': '', 'SezioneCTR': '', 'Bac__idrog': '', 'Dominio_ge': '', 'Int_sc_I': '', 'Int_sc_II': '', 'Valut_int_': '', 'Grado_int_': '', 'Altro_int_': '', 'Altro_int1': '', 'Giudiz_sog': '', 'Giudiz_ogg': '', 'Descr_geos': '', 'Doc_icon': '', 'Tipol_geos': '', 'Litologia': '', 'Unit_cron': '', 'Età_subst': '', 'Elemento': '', 'Forma': '', 'Area': '', 'Lunghezza': '', 'Spessore': '', 'Esposizion': '', 'Accessibil': '', 'Diff_acces': '', 'Mod_access': '', 'Geositi_co': '', 'Punt_pan': '', 'Punt_visib': '', 'Stagione': '', 'Area_attre': '', 'Strut_albe': '', 'Campeggio': '', 'Acqua_pot': '', 'Uso_suolo': '', 'Propr_priv': '', 'Area_prot': '', 'Altri_vinc': '', 'St_conserv': '', 'Risch_degr': '', 'Descr_risc': '', 'Valore_pae': '', 'Prop_prote': '', 'Notaz_agg': '', 'Bibliograf': '', 'FID_': '', 'X': '', 'Y': '', 'Cod_sch': '', });
lyr_puntipanoramicitimpa_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'AMBITO': 'TextEdit', 'COMUNE': 'TextEdit', 'STAZIONE': 'TextEdit', 'ROTAZ': 'TextEdit', 'BELVEDERE': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'Art_134': 'TextEdit', 'ALT': 'TextEdit', });
lyr_Edificato_21.set('fieldImages', {'Denominazi': 'TextEdit', 'Via': 'TextEdit', 'Foto': 'ExternalResource', 'Tipo': 'TextEdit', 'Uso': 'TextEdit', 'Stato': 'TextEdit', 'Rif. Catas': 'TextEdit', 'Rif Cat St': 'TextEdit', 'Tec. costr': 'TextEdit', 'Epoca real': 'TextEdit', 'Note-Altro': 'TextEdit', 'ID': 'TextEdit', 'Rilevanza': 'TextEdit', });
lyr_percorsi_sentieri_22.set('fieldImages', {'id': '', 'denominazi': '', 'note': '', });
lyr_ImpluviDispluvi_23.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_areeterrnonrilevabili_24.set('fieldImages', {'id': '', });
lyr_incendi_25.set('fieldImages', {'id': 'TextEdit', 'data': 'DateTime', 'link': 'TextEdit', });
lyr_murierasole1_26.set('fieldImages', {'zona timpa': 'TextEdit', 'tipo muro': 'TextEdit', 'stato': 'TextEdit', 'Tipologia': 'TextEdit', 'rif.cat.st': 'TextEdit', });
lyr_Foto_27.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_percorsosaiamastra_28.set('fieldImages', {'id': '', });
lyr_Puntisaiamastra_29.set('fieldImages', {'Name': 'TextEdit', 'SAMPLE_1': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', });
lyr_Puntituboconsorzio_30.set('fieldImages', {'Name': 'TextEdit', 'SAMPLE_1': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', });
lyr_Puntidacquasorgentipozzi_linee_1.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'inline label - visible with data', });
lyr_Puntidacquasorgentipozzi_punti_2.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', });
lyr_Strutturegeologichedidattiche_linee_3.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'no label', 'STATO': 'no label', 'ACCESS': 'no label', 'VULNER': 'no label', 'PRIORITA\'': 'no label', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'no label', 'FOTO_2': 'no label', });
lyr_Strutturegeologichedidattiche_poligoni_4.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', });
lyr_Geomorfologia_punti_5.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', });
lyr_Geomorfologia_linee_6.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'inline label - visible with data', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', });
lyr_Geomorfologia_poligoni_7.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', });
lyr_Litologia_punti_8.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', 'FOTO_3': 'inline label - visible with data', });
lyr_Litologia_linee_9.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', 'FOTO_3': 'inline label - visible with data', });
lyr_Litologia_poligoni_10.set('fieldLabels', {'Name': 'no label', 'COD_CAT': 'no label', 'TIPO': 'no label', 'DESCR': 'no label', 'VALORE': 'inline label - visible with data', 'STATO': 'inline label - visible with data', 'ACCESS': 'inline label - visible with data', 'VULNER': 'inline label - visible with data', 'PRIORITA\'': 'inline label - visible with data', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', 'Quota_m': 'no label', 'DATA_RIL': 'no label', 'RILEVATORE': 'no label', 'NOTE': 'no label', 'FOTO_1': 'inline label - visible with data', 'FOTO_2': 'inline label - visible with data', 'FOTO_3': 'inline label - visible with data', });
lyr_centrinucleistorici_11.set('fieldLabels', {'OBJECTID': 'no label', 'DENOM': 'inline label - visible with data', 'AREA': 'no label', 'AMBITO': 'no label', 'COMUNE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Progress__': 'no label', 'Ente_sched': 'no label', 'Riferiment': 'no label', 'Classe': 'no label', 'Compilator': 'no label', 'Allegato': 'no label', 'vincolo_pa': 'no label', 'Paesaggio_': 'no label', 'Strumento_': 'no label', 'Decreto_st': 'no label', 'Sintesi_no': 'no label', 'N_scheda': 'no label', 'Compilat_1': 'no label', 'Nota': 'no label', 'N_scheda_D': 'no label', 'Emergenze_': 'no label', });
lyr_areeriserveregionali_12.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'CODICE_REG': 'no label', 'NOME_AREA': 'no label', 'AREA_KMQ': 'no label', 'DATUM': 'no label', 'PROIEZIONE': 'no label', 'FUSO': 'no label', 'LAT_MT': 'no label', 'LON_MT': 'no label', 'RIF_LEGGE': 'no label', 'REGIONE': 'no label', 'PROVINCIA': 'no label', 'COMUNE': 'no label', 'TIPOLOGIA': 'no label', 'ZONA': 'no label', 'TIPO_SITO': 'no label', 'REG_BIOG': 'no label', 'ANNO_ISTIT': 'no label', 'DATA_ISTIT': 'no label', 'GESTORE': 'no label', 'CAP': 'no label', 'TEL': 'no label', 'CELL': 'no label', 'INDIRIZZO': 'no label', 'MAIL': 'no label', 'Shape_Leng': 'no label', 'ART142_f_R': 'no label', 'ISTAT_PROV': 'no label', 'AMBITO_PRO': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_viabilitstoricatimpa_13.set('fieldLabels', {'OBJECTID': 'no label', 'USO_STOR': 'no label', 'ART_134': 'no label', 'ID_SCHEDA': 'no label', 'AMBITO': 'no label', 'ID': 'no label', 'NUMERO_SCH': 'no label', 'TIPO_SCHED': 'no label', 'ENTE_SCHED': 'no label', 'LOCALITà_': 'no label', 'PROVINCIA_': 'no label', 'COMUNI_ATT': 'no label', 'CONTRADA__': 'no label', 'RIFERIMENT': 'no label', 'DEFINIZION': 'no label', 'DENOMINAZI': 'inline label - always visible', 'DENOMINA_1': 'no label', 'SECOLO__IN': 'no label', 'FONTI': 'no label', 'LUNGHEZZA_': 'no label', 'TIPO_DI_FO': 'no label', 'STATO_DI_C': 'inline label - visible with data', 'USO_ATTUAL': 'inline label - visible with data', 'QUALIFICAZ': 'no label', 'CONTESTO__': 'no label', 'RILEVANZA': 'no label', 'DATA': 'no label', 'NOME_DEL_C': 'no label', 'RUOLO_DEL_': 'no label', 'SEGNALAZIO': 'no label', 'Shape_Leng': 'no label', 'Osservazio': 'no label', 'numero_tra': 'no label', 'Numero_per': 'no label', 'legenda': 'no label', 'numero_leg': 'no label', 'Revisore_s': 'no label', 'Revisione_': 'no label', 'Ruolo_revi': 'no label', 'Oggetto_re': 'no label', 'DATA_DISMI': 'no label', });
lyr_viabilitstorica_14.set('fieldLabels', {'OBJECTID': 'no label', 'USO_STOR': 'inline label - visible with data', 'ART_134': 'no label', 'ID_SCHEDA': 'no label', 'AMBITO': 'no label', 'ID': 'no label', 'NUMERO_SCH': 'no label', 'TIPO_SCHED': 'no label', 'ENTE_SCHED': 'no label', 'LOCALITà_': 'no label', 'PROVINCIA_': 'no label', 'COMUNI_ATT': 'no label', 'CONTRADA__': 'no label', 'RIFERIMENT': 'no label', 'DEFINIZION': 'no label', 'DENOMINAZI': 'inline label - visible with data', 'DENOMINA_1': 'no label', 'SECOLO__IN': 'no label', 'FONTI': 'no label', 'LUNGHEZZA_': 'no label', 'TIPO_DI_FO': 'no label', 'STATO_DI_C': 'inline label - visible with data', 'USO_ATTUAL': 'inline label - visible with data', 'QUALIFICAZ': 'inline label - visible with data', 'CONTESTO__': 'no label', 'RILEVANZA': 'no label', 'DATA': 'no label', 'NOME_DEL_C': 'no label', 'RUOLO_DEL_': 'no label', 'SEGNALAZIO': 'no label', 'Shape_Leng': 'no label', 'Osservazio': 'no label', 'numero_tra': 'no label', 'Numero_per': 'no label', 'legenda': 'no label', 'numero_leg': 'no label', 'Revisore_s': 'no label', 'Revisione_': 'no label', 'Ruolo_revi': 'no label', 'Oggetto_re': 'no label', 'DATA_DISMI': 'no label', });
lyr_ferroviastoricatimpa_15.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'DENOM': 'inline label - visible with data', 'USO_ATT': 'inline label - visible with data', 'VALORE': 'no label', 'FONDO': 'no label', 'ALT': 'no label', 'AMBITO': 'no label', 'PR': 'no label', 'Shape_Leng': 'no label', 'osservazio': 'no label', 'fonte': 'no label', 'QUALIFICAZ': 'no label', 'TIPOLOGIA': 'no label', 'LOC__COLLE': 'no label', 'DATA_COSTR': 'no label', 'DATA_DISMI': 'no label', 'N__TRATTO': 'no label', 'N__FERROVI': 'no label', 'COMUNE': 'no label', 'ENTE_COMPI': 'no label', 'ENTE_REVIS': 'no label', 'NOME_REVIS': 'no label', 'NOME_COMPI': 'no label', });
lyr_ferrovietimpa_16.set('fieldLabels', {'OBJECTID': 'no label', 'Fondo': 'no label', 'UsoAttuale': 'inline label - visible with data', 'UsoStorico': 'inline label - visible with data', 'ValAttuale': 'inline label - visible with data', 'ID': 'no label', 'Shape_Leng': 'no label', 'N_FERROVIA': 'no label', 'N_TRATTO': 'no label', 'TIPOLOGIA': 'no label', 'QUALIFICAZ': 'no label', 'DENOMINAZI': 'no label', 'DATA_DI_CO': 'no label', 'COMUNE': 'no label', 'LOC_COLLEG': 'no label', 'FONTE': 'no label', 'osservazio': 'no label', 'ENTE_COMPI': 'no label', 'NOME_COMPI': 'no label', 'ENTE_REVIS': 'no label', 'NOME_REVIS': 'no label', });
lyr_stradepanoramichetimpa_17.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'DENOMINAZ': 'inline label - visible with data', 'VALORE': 'no label', 'DIREZIONE': 'no label', 'TIPO': 'no label', 'AMBITO': 'no label', 'LENGHT': 'no label', 'FONTE': 'no label', 'ALT': 'no label', 'PROVINCIA': 'no label', 'COMUNI_ATT': 'no label', 'ENTE_SCHED': 'no label', 'Altra_deno': 'no label', 'OSSERVAZ_1': 'no label', });
lyr_beniisolatitimpa_18.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'id_dbf': 'no label', 'Progressiv': 'no label', 'Numero_sch': 'no label', 'Riferiment': 'no label', 'Provincia': 'no label', 'Ambito': 'no label', 'Comune': 'no label', 'Localit�': 'no label', 'Definizion': 'no label', 'Classe_Ogg': 'no label', 'Qualificaz': 'no label', 'Denominazi': 'no label', 'Denomina_1': 'no label', 'Secolo': 'no label', 'Coordinata': 'no label', 'Coordina_1': 'no label', 'Dati_Catas': 'no label', 'Stato_di_c': 'no label', 'Uso_attual': 'no label', 'Uso_storic': 'no label', 'Osservazio': 'no label', 'Rilevanza': 'no label', 'Rilevanza1': 'no label', 'Vincoli': 'no label', 'Vincolo_Pa': 'no label', 'Schema_': 'no label', 'Forma': 'no label', 'Tipo_sched': 'no label', 'Altre_sche': 'no label', 'Riferime_1': 'no label', 'Ubicaz_via': 'no label', 'paes__loc': 'no label', 'Cartografi': 'no label', 'Propriet��': 'no label', 'Centro_sto': 'no label', 'Data': 'no label', 'Compilator': 'no label', 'Ruolo': 'no label', 'Ente_Sched': 'no label', 'Tipologia': 'no label', 'immagine': 'no label', 'Riferime_2': 'no label', 'Riferim_LG': 'no label', });
lyr_geosititimpa_19.set('fieldLabels', {'ID_geosito': 'no label', 'Compilator': 'no label', 'Acq_dati': 'no label', 'Cod__sch': 'no label', 'Data_sch': 'no label', 'Sch__coll': 'no label', 'Nome_geos': 'inline label - visible with data', 'Regione': 'no label', 'Provincia': 'no label', 'Ambit_PTPR': 'no label', 'Comune': 'no label', 'Localit�': 'inline label - visible with data', 'Quota': 'no label', 'DenomIGM': 'no label', 'SezioneCTR': 'no label', 'Bac__idrog': 'no label', 'Dominio_ge': 'no label', 'Int_sc_I': 'no label', 'Int_sc_II': 'no label', 'Valut_int_': 'no label', 'Grado_int_': 'no label', 'Altro_int_': 'no label', 'Altro_int1': 'no label', 'Giudiz_sog': 'no label', 'Giudiz_ogg': 'no label', 'Descr_geos': 'no label', 'Doc_icon': 'no label', 'Tipol_geos': 'inline label - visible with data', 'Litologia': 'inline label - visible with data', 'Unit_cron': 'no label', 'Età_subst': 'inline label - visible with data', 'Elemento': 'no label', 'Forma': 'no label', 'Area': 'no label', 'Lunghezza': 'no label', 'Spessore': 'no label', 'Esposizion': 'inline label - visible with data', 'Accessibil': 'inline label - visible with data', 'Diff_acces': 'inline label - visible with data', 'Mod_access': 'inline label - visible with data', 'Geositi_co': 'no label', 'Punt_pan': 'no label', 'Punt_visib': 'no label', 'Stagione': 'no label', 'Area_attre': 'no label', 'Strut_albe': 'no label', 'Campeggio': 'no label', 'Acqua_pot': 'no label', 'Uso_suolo': 'inline label - visible with data', 'Propr_priv': 'no label', 'Area_prot': 'inline label - visible with data', 'Altri_vinc': 'no label', 'St_conserv': 'inline label - visible with data', 'Risch_degr': 'inline label - visible with data', 'Descr_risc': 'inline label - visible with data', 'Valore_pae': 'inline label - visible with data', 'Prop_prote': 'no label', 'Notaz_agg': 'no label', 'Bibliograf': 'no label', 'FID_': 'no label', 'X': 'no label', 'Y': 'no label', 'Cod_sch': 'no label', });
lyr_puntipanoramicitimpa_20.set('fieldLabels', {'OBJECTID': 'no label', 'AMBITO': 'no label', 'COMUNE': 'no label', 'STAZIONE': 'no label', 'ROTAZ': 'no label', 'BELVEDERE': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'Art_134': 'no label', 'ALT': 'no label', });
lyr_Edificato_21.set('fieldLabels', {'Denominazi': 'inline label - visible with data', 'Via': 'inline label - visible with data', 'Foto': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Stato': 'inline label - visible with data', 'Rif. Catas': 'inline label - visible with data', 'Rif Cat St': 'inline label - visible with data', 'Tec. costr': 'inline label - visible with data', 'Epoca real': 'inline label - visible with data', 'Note-Altro': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Rilevanza': 'inline label - visible with data', });
lyr_percorsi_sentieri_22.set('fieldLabels', {'id': 'no label', 'denominazi': 'inline label - visible with data', 'note': 'no label', });
lyr_ImpluviDispluvi_23.set('fieldLabels', {'id': 'no label', 'Tipo': 'no label', });
lyr_areeterrnonrilevabili_24.set('fieldLabels', {'id': 'no label', });
lyr_incendi_25.set('fieldLabels', {'id': 'no label', 'data': 'inline label - visible with data', 'link': 'no label', });
lyr_murierasole1_26.set('fieldLabels', {'zona timpa': 'no label', 'tipo muro': 'no label', 'stato': 'no label', 'Tipologia': 'inline label - visible with data', 'rif.cat.st': 'no label', });
lyr_Foto_27.set('fieldLabels', {'id': 'no label', 'Foto': 'inline label - visible with data', });
lyr_percorsosaiamastra_28.set('fieldLabels', {'id': 'no label', });
lyr_Puntisaiamastra_29.set('fieldLabels', {'Name': 'no label', 'SAMPLE_1': 'no label', 'x': 'no label', 'y': 'no label', 'foto1': 'no label', 'foto2': 'no label', 'foto3': 'no label', });
lyr_Puntituboconsorzio_30.set('fieldLabels', {'Name': 'no label', 'SAMPLE_1': 'no label', 'x': 'no label', 'y': 'no label', 'foto1': 'no label', 'foto2': 'no label', 'foto3': 'no label', });
lyr_Puntituboconsorzio_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});