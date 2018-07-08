$(document).ready(function(){
	
var config = {
    apiKey: "AIzaSyBgCooaMRU1_c_pR0Quoy8o3x-KytrMVew",
    authDomain: "trainschedule-be902.firebaseapp.com",
    databaseURL: "https://trainschedule-be902.firebaseio.com",
    projectId: "trainschedule-be902",
    storageBucket: "trainschedule-be902.appspot.com",
    messagingSenderId: "295353835580"
  };
firebase.initializeApp(config);
 
var datebase = firebase.database();
var apiKey = "ip1soj992i";
var arrivalUrl = "https://api.railwayapi.com/v2/arrivals/station/cdg/hours/2/apikey/ip1soj992i/";
console.log (datebase);

	// On Click for sumbmit button with prevent to stop reloading
	$("#add-train-btn").on('click', function(event){
	event.preventDefault();
	//console.log("working");

  	// On click event Button for adding trains
	$("#add-train-btn").on("click", function() 
						   
	// Grabs user input from forms
  	var numberInput = $("#number-input").val().trim();
	var trainName = $("#train-name-input").val().trim();

 	// Creates local "temporary" object for holding train data
  	var newTrain = {
    name: trainName,
	schdep: scheduledDepart,
	actdep: actualDepart,
  };

	// Load JSON values
	function trainRoutes {
	loadJSON (url, gotData);
	console.log (data);
	}


  	// Upload train data to the database
  	database.ref().push(newTrain);

  	// Alert
  	alert("Train successfully added");

	  // Clears all of the text-boxes
	  $("#train-name-input").val("");
	  $("#number-input").val("");


