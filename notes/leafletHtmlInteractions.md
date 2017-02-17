# Leaflet & HTML Interaction

So far, we've dealt with HTML objects and `Leaflet` objects in relative
isolation. In this note, I'd like to outline one approach to creating
HTML content that relates to `Leaflet` objects.

First, we'll need some HTML:
```html
<html>
  <div id="container"></div>
</html
```

Next we'll create a `L.Featuregroup` (perhaps from some geojson), add
an HTML element with jQuery, and register an event on that new HTML to
change the properties of its corresponding layer.
```javascript
var featureGroup;

/** take one layer and register all behaviors + add HTML which corresponds to it */
var addToHtml = function(layer) {
  var id = layer._leaflet_id; // we can use this to grab our element later
  // jQuery documentation on HTML manipulation methods: http://api.jquery.com/category/Manipulation/
  var container = $("div.container")

  // create a new button
  var ourDiv = $("<button>").text("Click me to change color of layer " + id);
  // set an event on this button
  ourDiv.click(function(event) { layer.setStyle({ color: "#ff0000" }); })
  // Append our new div (with its attached event!) to our container (see HTML above)
  ourDiv.appendTo(container)
};

$.ajax("mydata.com").done(function(data) {
  var parsed = JSON.parse(data);

  // This is a FeatureGroup! http://leafletjs.com/reference-1.0.3.html#geojson
  var fgroup = L.geoJSON(parsed);
  fgroup.eachLayer(addToHtml);
});
```

With this pattern, you can do quite a bit. Perhaps you could experiment
with `$.hover`?
