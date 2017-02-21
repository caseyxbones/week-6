/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */



var indegoStationUrl = "https://www.rideindego.com/stations/json/";

var downloadData = $.ajax(indegoStationUrl);

var parseData = function(ajaxResponseValue) {
  return(JSON.parse(ajaxResponseValue));
};
