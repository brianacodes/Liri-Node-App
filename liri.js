require("dotenv").config();
var inquirer = require("inquirer");


var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Command: concert-this
// Command: spotify-this-song
// Command: movie-this
// Command: do-what-it-says

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What song would you like Spotify to play for you?",
      name: "song"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.song);
      console.log("You asked Spotify to hear " + inquirerResponse.song + ". Here it is!\n");
    }
    else {
      console.log("\nWhoopsie! We were unable to find " + inquirerResponse.song + ". Please try another song.\n");
    }
  });