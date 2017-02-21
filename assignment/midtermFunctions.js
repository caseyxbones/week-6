/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//The ajax code below came  from the city's API site for this data:
        // https://www.opendataphilly.org/dataset/crime-incidents/resource/f6e5998d-9d33-4a45-8397-3a6bb8607d10?inner_span=True
        // adapted for use in this application
        // I signed up for a Socrata account through the city to create an app token for the API

$.ajax({
    url: "https://data.phila.gov/resource/sspu-uyfa.json",
    type: "GET",
    data: {
      // "$limit" : 200,                                          // This line breaks the ajax call when the query is happening so I commented it out
      "$query" : "SELECT * WHERE shape is not null",              // This automatically gets rid of any data without a shape and coordinates
      "$$app_token" : "nZtsnVJLQrElo9WkVcHn005wJ"
    }
}).done(function(data) {
  console.log("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});

var mapByType = function (parsedData) {
      // a dropdown menu where you can select the type of crime incident from a list of options
};

var mapByYear = function (parsedData) {
      // dropdown menu or something where you can select the year of the crime incident from a list of options
};

var resetMap = function (mappedPoints) {
      // this function will clear existing markers from the map
};
