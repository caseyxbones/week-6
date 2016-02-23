/* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';

/* =====================
  Map Setup
===================== */
// Notice that we've been using an options object since week 1 without realizing it
var mapOpts = {
  center: [0, 0],
  zoom: 2
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
};
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);


/* =====================
  Grab the data, parse it, and store it for later use
===================== */
var getAndParseData = function() {
  $.ajax('https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/world-country-capitals.json').done(function(res) {
    // Parse the JSON returned (res)
    var parsedRes = JSON.parse(res);

    // Store our (now parsed) data to the global variable `data`
    data = _.chain(parsedRes)
      .map(function(datum) {

        // These are both strings - we need to parse them
        var lat = parseFloat(datum.CapitalLatitude);
        var lng = parseFloat(datum.CapitalLongitude);

        /* We're going to use a <div> based icon which uses CSS for its styling.
         * We'll use the continent name for our class so that the CSS is specific to the continent
         * Check out style.css to see what this looks like.
         */
        var customIcon = L.divIcon({className: datum.ContinentName.replace(' ', '')});
        var markerOptions = { icon: customIcon };  // An options object

        // Actually make the marker object a part of our data for later use.
        datum.marker = L.marker([lat, lng], markerOptions)
          .bindPopup(datum.CapitalName + ', ' + datum.CountryName);
        return datum;

      }).groupBy(function(datum) {  // groupBy breaks the data up into groups

        return datum.ContinentName;

      }).mapObject(function(group) {  // It is an object after the `groupBy` call

        var markerArray = _.map(group, function(datum) { return datum.marker; });
        var fitBoundsOptions = { padding: [15, 15] };  // An options object

        return {
          data: group,
          features: L.featureGroup(markerArray)
            .on('click', function() {  // Bind a function onto any click on this `featureGroup`
              map.fitBounds(this.getBounds(), fitBoundsOptions);
            })
        };
      }).value();

    // Add the featureGroups to our map
    _.each(data, function(datum) { datum.features.addTo(map); });
  });
};


/*
 * This function filters our data and plots it
 */
var filterAndPlot = function() {
  _.each(data, function(continent) {
    var markerArray = _.chain(continent.data)
      .filter(function(country) {
        var condition = true;
        if (stringFilter) {
          condition = condition && country.CountryName.toLowerCase().includes(stringFilter);
        }
        if (selectValue !== 'All') {
          condition = condition && country.ContinentName === selectValue;
        }
        return condition;
      })
      .map(function(country) { return country.marker; })
      .value();

    // clear the continent featureLayers
    continent.features.clearLayers();

    // Notice that our featureGroup was never removed from the map - all we have to do is add
    // markers to one of our featureGroups and it will immediately appear on the map
    _.each(markerArray, function(marker) { continent.features.addLayer(marker); });
  });
};


/* We should be comfortable thinking of these functions as values - as 'recipes' for use by other
 * functions in other contexts. Here, functions are defined to be used as event callbacks later.
 * Note the naming scheme - the 'onEventOccurrence' naming scheme is very common for functions
 * such as this.
 */
var onStringFilterChange = function() {
  stringFilter = this.value.toLowerCase();
  filterAndPlot();
};

var onSelectChange = function() {
  selectValue = this.value;
  filterAndPlot();
};


/* =====================
  Events to bind when the page is loaded - we're using the functions defined just above
===================== */
var bindEvents = function() {
  // the `keyup` event fires after a keypress is lifted
  $('#str').keyup(onStringFilterChange);

  // the `change` event fires whenever the input it is bound to changes
  $('#sel').change(onSelectChange);
};


/* =====================
  Application execution
===================== */
getAndParseData();
$(document).ready(function() {
  bindEvents();
});
