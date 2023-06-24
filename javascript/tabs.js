/*
 File: tabs.js
 Assignment: Interactive Dynamic Multiplication Table
 Sindhuja Ghale, UMass Lowell Computer Science, Sindhuja_Ghale@student.uml.edu
 Copyright (c) 2023 by Sindhuja Ghale. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by SG on June 24, 2023 at 7:00 PM
 Brief Overview: This interactive multiplication table dynamically generates based on user input, utilizing the power of jQuery. This is the part two of HW4, where more stuff like slider and tabs are implemented. 
 Sources of Help: w3school, Class Notes, and Stack Overflows. 
*/

$(function() {
  $( "#tabs" ).tabs({
    // Enable collapsible behavior for the tabs
      collapsible: true
  });
});

var num_tabs = 0;
var active_tabs = [];

function addTableTabs(){
  // Increment the number of tabs when saved 
  num_tabs += 1;

  // Append a new list item for the tab with its corresponding content
  $("#tabs ul").append("<li><a href='#tab" + num_tabs + "'>" + getParams() + "</a>"  + 
  " <input type='checkbox' value=1 id='cb"+ num_tabs + "'>" + "</li>");

  // Append a new div element for the tab content and clone the #table element into it
  $("#tabs").append("<div id='tab" + num_tabs + "'>" + "</div>");
  $("#table").clone().appendTo("#tab" + num_tabs);

  // Refresh the tabs widget to update the added tab
  $("#tabs").tabs("refresh");

  // Add the new tab index to the active_tabs array
  active_tabs.push(num_tabs)
}

function closeTabs(){
  // Iterate over the tabs
  for(let i = 0; i < Number(num_tabs); i++){
      var index = Number(i) + 1;
      var cbIdStr = "#cb" + index;
      var tabIdStr = "#tab" + index;
      
      // Check if the tab is active and the checkbox is checked
      if(active_tabs[Number(index - 1)] != -1){
          if(document.querySelector(cbIdStr).checked){
            // Remove the tab and its corresponding list item
              $('#tab'+ index).remove();
              var hrefStr = "a[href='" + tabIdStr + "']"
              $( hrefStr ).closest("li").remove()

              // Refresh the tabs widget to reflect the changes
              $("#tabs").tabs("refresh");

              // Update the active_tabs array and set the corresponding index to -1
              for(let j = 0; j < active_tabs.length; j++){
                  if(active_tabs[j] === index){
                      active_tabs[j] = -1;
                      console.log(active_tabs[j]);
                  }
              }
          }
      } 
  }
}