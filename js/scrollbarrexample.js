"use strict";
//scroll bar will be used to enable reading of articles

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  letscrolled = (winScroll / height) * 100;
  document.getElementById("dropdown-content").style.width = scrolled + "%";
};