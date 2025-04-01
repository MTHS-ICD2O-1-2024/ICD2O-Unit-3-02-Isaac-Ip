// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html


/**
* Do basic math.
*/
function doMathClicked() {
    // input
    const length = parseFloat(document.getElementById("length").value)
    const width = parseFloat(document.getElementById("width").value)
    const height = parseFloat(document.getElementById("height").value)
    
    
    // process
    const volumeOfPyramid = (length * width * height) / 3


    // output
    document.getElementById("volume").innerHTML =
      "<p>The area is: " + volumeOfPyramid.toFixed(2) + " cm³. </p>"
   }
  