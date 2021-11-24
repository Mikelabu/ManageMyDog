"use strict";
// Display date and time on Contact Us form
document.getElementById("timebtn").onclick = displayDate;

function displayDate() {
  document.getElementById("dateTime").innerHTML = Date();
}

