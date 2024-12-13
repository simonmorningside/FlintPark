var style_FlintStreets_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "bold 13.0px 'Arial', sans-serif"; // Bold font
    var labelFill = "#278c28"; // Green text color
    var bufferColor = "#000000"; // Black text outline
    var bufferWidth = 2.5; // Thicker black outline
    var placement = 'line'; // Align labels along lines
    var offsetY = -6; // Adjust vertically (-5 moves it up, +5 moves it down)
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,0,0,1.0)', // Black line color
            width: 1.8 // Line thickness
        }),
        text: new ol.style.Text({
            font: labelFont,
            text: labelText,
            textAlign: "center", // Center the text on the line
            placement: placement, // Keep labels on the line
            textBaseline: "middle", // Align text vertically
            fill: new ol.style.Fill({
                color: labelFill
            }),
            stroke: new ol.style.Stroke({
                color: bufferColor,
                width: bufferWidth
            }),
            offsetY: offsetY // Apply the vertical offset
        })
    })];

    return style;
};
