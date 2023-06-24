/*
 File: script.js
 Assignment: Interactive Dynamic Multiplication Table
 Sindhuja Ghale, UMass Lowell Computer Science, Sindhuja_Ghale@student.uml.edu
 Copyright (c) 2023 by Sindhuja Ghale. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by SG on June 24, 2023 at 7:00 PM
 Brief Overview: This interactive multiplication table dynamically generates based on user input, utilizing the power of jQuery. This is the part two of HW4, where more stuff like slider and tabs are implemented. 
 Sources of Help: w3school, Class Notes, and Stack Overflows. 
*/

var one;
var two;
var three;
var four;

// Seting the display property of the element with ID "errorMSG" to "none" to hide it initially
var x = document.getElementById("errorMSG");
x.style.display = "none";

$( function() {
    // Set the slider to 0 and make sure it does not get past -50 and 50
    $( "#slider1" ).slider({
        max: 50,
        min: -50,
        value: 0,

        // Handle when slider stops
        stop: function(event, ui){
            // Update value and corresponding input field
            one = $("#slider1").slider( "option", "value" );
            // Round the decimal number to nearest whole number  
            one = Math.round(one);
            document.getElementById("num1").value = Number(one);
            // Call updateTable
            updateTable(1);
        }
    });

    $( "#slider2" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            two = $("#slider2").slider( "option", "value" );
            two = Math.round(two);
            document.getElementById("num2").value = Number(two);
            updateTable(2);
        }
    });

    $( "#slider3" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            three = $("#slider3").slider( "option", "value" );
            three = Math.round(three);
            document.getElementById("num3").value = Number(three);
            updateTable(3);
        }
    });

    $( "#slider4" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            four = $("#slider4").slider( "option", "value" );
            four = Math.round(four);
            document.getElementById("num4").value = Number(four);
            updateTable(4);
        }
    });
  } );


// Round the decimal number to the nearest whole number
function getNums(){
    one = Math.round(document.getElementById("num1").value);
    two = Math.round(document.getElementById("num2").value);
    three = Math.round(document.getElementById("num3").value);
    four = Math.round(document.getElementById("num4").value);
}

// Syncing 
function syncInputs(syncNum){
    var temp = Number(syncNum);
    if(temp == 1){
        // Update 'one' variable with the rounded value from input field
        one = Math.round(document.getElementById("num1").value);
        // Sync slider value with 'one'
        $( "#slider1" ).slider( "option", "value", Number(one) );
    } else if (temp == 2) {
        two = Math.round(document.getElementById("num2").value);
        $( "#slider2" ).slider( "option", "value", Number(two) );
    } else if (temp == 3) {
        three = Math.round(document.getElementById("num3").value);
        $( "#slider3" ).slider( "option", "value", Number(three) );
    } else if (temp == 4) {
        four = Math.round(document.getElementById("num4").value);
        $( "#slider4" ).slider( "option", "value", Number(four) );
    }
}

function syncSlider(syncNum){
    var temp = Number(syncNum)
    if(temp == 1){
        // Update 'one' variable with the rounded slider value
        one = $( "#slider1" ).slider( "option", "value" );
        one = Math.round(one);
        // Update input field with the rounded 'one' value
        document.getElementById("num1").value = Number(one);
    } else if (temp == 2) {
        two = Math.round(document.getElementById("slider-2").value);
        document.getElementById("num2").value = Number(two);
    } else if (temp == 3) {
        three = Math.round(document.getElementById("slider-3").value);
        document.getElementById("num3").value = Number(three);
    } else if (temp == 4) {
        four = Math.round(document.getElementById("slider-4").value);
        document.getElementById("num4").value = Number(four);
    }
}

// corrects the order of two numbers if the user inputs them in the wrong order and returns the minimum value. (Swapping )
function findMin(){
    if(Number(arguments[0]) < Number(arguments[1])){
        return arguments[0];
    }
    else{
        return arguments[1];
    }
}

function getParams(){
    // Initialize an empty string to store the parameter representation
    var paramStr = "";

    getNums();
    // Find the minimum value between one and two
    var colStr1 = findMin(one, two);
    paramStr += colStr1;

    // Check if colStr1 is equal to one
    if(colStr1 === one){
        // If true, append " * " and the value of two to the parameter string
        paramStr += " * " + two;
    } else {
        // If false, append " * " and the value of one to the parameter string
        paramStr += " * " + one;
    }

    // Append " by " to the parameter string
    paramStr += " by ";
    var rowStr1 = findMin(three, four);
    paramStr += rowStr1;

    // Check if rowStr1 is equal to three
    if(rowStr1 === three){
        // If true, append " * " and the value of four to the parameter string
        paramStr += " * " + four;
    } else {
        // If false, append " * " and the value of three to the parameter string
        paramStr += " * " + three;
    }

    return paramStr;
}

// Function to  dynamically generate the table
function table() {
    getNums();

    //Sets the range of the table to be generated
    var tableXLimDown = findMin(one, two) - 2;
    var tableYLimDown = findMin(three, four) - 2;
    
    var myTableDiv = document.getElementById("table");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    //For loop to generate one axis of the table
    for (var i = 0; i < Math.abs(two - one) + 2; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        tableXLimDown++;
        tableYLimDown = findMin(three, four) - 2;

        //For loop to generate the other axis of the table
        for (var j = 0; j < Math.abs(three - four) + 2; j++) {
            var th = document.createElement('TH');
            var td = document.createElement('TD');
        
            tableYLimDown++;
            
            // Sets the top left cell to be empty
            if(i == 0 && j == 0){
                th.appendChild(document.createTextNode("  "));
                tr.appendChild(th);
            }

            // Sets an axis
            else if(i == 0){
                th.appendChild(document.createTextNode(tableYLimDown));
                tr.appendChild(th);
            }

            // sets another axis
            else if(j == 0){
                th.appendChild(document.createTextNode(tableXLimDown));
                tr.appendChild(th);
            }

            // Sets the body of the table with correct values
            else {
                td.appendChild(document.createTextNode(tableYLimDown * tableXLimDown));
                tr.appendChild(td);
            }
        }
    }

    // Creates new table deleting if there is exiting table
    if(myTableDiv.hasChildNodes()){
        myTableDiv.removeChild(myTableDiv.firstChild);
        myTableDiv.appendChild(table);
    }
    else{
        myTableDiv.appendChild(table);
    }
    
}

