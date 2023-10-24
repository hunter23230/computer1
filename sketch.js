// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://hunter23230.github.io/computer1/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {

  createCanvas(320, 320);

  

  // Create the video

    var constraints = {

    audio: false,

    video: {

      facingMode: {

        exact: "environment"

      }

    }   

    //video: {

      //facingMode: "user"

    //}

  };

  video = createCapture(constraints);

  video.size(320, 320);

  video.hide();



  flippedVideo = ml5.flipImage(video)

  // Start classifying

  classifyVideo();

}