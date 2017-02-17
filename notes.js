var store;
var set = function (thing) { store = thing;};
var get = function () {return store;};

set(123);
return(store);

get;          // this will return the function itself
get();        // this will return the value of the function



//geoJSON and Advaced Cartography

JSON.parse();   // a way of turning data that the internet can understand into something your javascript can understand
                // turns something that is just a string into objects with keys and characteristics

var theString = ("name: Casey");    // this will return just a string if you look at it in console
JSON.parse(theString);             // this will return an object with key NAME and value CASEY

// geoJSON encodes the same kind of data as a ShapeFile: a vector, a type, some associated properties
// geoJSON.io is amazing
// arcGIS can convert shapefiles to geoJSON files, though huge shapes are not a great idea

//Each Layer and Feature Group in Leaflet
featuregroup.eachlayer(eachFeatureFunction);
      // featuregroup corresponds to data living in an ecosystem
      // any instance of a featuregroup is also a layergroup the way any dog is also a mammal
      // anything that a layergroup can do, a featuregroup can also do
featuregroup.getlayer(layerID);
      // this will get a specific layer out of a layer group by the layer ID
featuregroup.getLayerId(someLayer);
      // this will get a specific layer our of a layer group by its name
featuregroup.removeLayer(somelayer);
      // if you have 30 objects in a featuregroup, you can add the whole featuregroup to the map
      // if you remove a layer from the featuregroup, it will be removed from the map
