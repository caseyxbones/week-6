/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

// Need a function to pull down the data and parse it

//This code came directly from the city's API site for this data:
        // https://www.opendataphilly.org/dataset/crime-incidents/resource/f6e5998d-9d33-4a45-8397-3a6bb8607d10?inner_span=True

 // I signed up for a Socrata account through the city to create an app token for the API

$.ajax({
    url: "https://data.phila.gov/resource/sspu-uyfa.json",
    type: "GET",
    data: {
      "$limit" : 200,                                          // starting with 200 to make things more manageable
      "$$app_token" : "nZtsnVJLQrElo9WkVcHn005wJ"
    }
}).done(function(data) {
  console.log("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
