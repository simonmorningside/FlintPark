var size = 0;
var placement = 'point';

var style_School_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;

    // Font and text style
    var labelFont = "bold 13.0px 'Arial', sans-serif"; // Bold like streets
    var labelFill = "#268827"; // Green text color
    var bufferColor = "#000000"; // Black text outline
    var bufferWidth = 2.0; // Thicker black outline for visibility
    var textAlign = "center"; // Center-align text
    var offsetX = 0; // Center horizontally
    var offsetY = 0; // Center vertically
    var placement = 'point'; // Use point placement for polygons

    // Label text from the "School" attribute
    if (feature.get("School") !== null) {
        labelText = String(feature.get("School"));
    }

    var style = [ new ol.style.Style({
        // Green outline for the school
        stroke: new ol.style.Stroke({
            color: 'rgba(0,0,255,1.0)', // Blue color, fully opaque
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.0 // Thicker outline
        }),
        // Semi-transparent green fill
        fill: new ol.style.Fill({
          color: 'rgba(0,0,255,0.4)' // Blue color, 40% opacity
        }),
        // Text styling for the label
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
