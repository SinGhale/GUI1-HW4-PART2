/*
 File: validate.js
 Assignment: Interactive Dynamic Multiplication Table
 Sindhuja Ghale, UMass Lowell Computer Science, Sindhuja_Ghale@student.uml.edu
 Copyright (c) 2023 by Sindhuja Ghale. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by SG on June 24, 2023 at 7:00 PM
 Brief Overview: This interactive multiplication table dynamically generates based on user input, utilizing the power of jQuery. This is the part two of HW4, where more stuff like slider and tabs are implemented. 
 Sources of Help: w3school, Class Notes, and Stack Overflows. 
*/

$(function(){
    // Validating the input
  $("#nums").validate({
      rules: {
          num1:{
              required: true,   // Specifying that the input with ID "num1" is required
              max: 50,          // Specifying the maximum value allowed for "num1" as 50
              min: -50          // Specifying the minimum value allowed for "num1" as 50
          },
          num2:{
              required: true,
              max: 50,
              min: -50
          },
          num3:{
              required: true,
              max: 50,
              min: -50
          },
          num4:{
              required: true,
              max: 50,
              min: -50
          }
      },

      //If the requirment didn't meet, showing the following messages
      messages: {
          num1:{
              required:  "Please enter a integer between -50 and 50 in the minimum column value",
              max: "Please enter a integer less than 50 in the minimum column value",
              min: "Please enter a integer higher than -50 in the minimum column value "
          },
          num2:{
              required:  "Please enter a integer between -50 and 50 in the maximum column value",
              max: "Please enter a integer less than 50maximum column value",
              min: "Please enter a integer less than 50 maximum column value"
          },
          num3:{
              required:  "Please enter a integer between -50 and 50 in the minimum row value",
              max: "Please enter a integer less than 50 minimum row value",
              min: "Please enter a integer less than 50 minimum row value"
          },
          num4:{
              required:  "Please enter a integer between -50 and 50 in the maximum row value",
              max: "Please enter a integer less than 50 maximum row value",
              min: "Please enter a integer less than 50 maximum row value"
          },
      },

      // Specifying that error messages should be displayed as 'div' elements
      errorElement : 'div',
      // Specifying the container where error messages should be displayed
      errorLabelContainer: '#errorMSG',


      submitHandler: function(form) {
          if($("#nums").valid()) {
              table();
              addTableTabs();
          } else {
              return false;
          }
      },
      
  });
});

function updateTable(syncNum){
  if($("#nums").valid()) {
      syncInputs(syncNum);
      table();
  }
}