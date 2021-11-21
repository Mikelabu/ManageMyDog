//scroll bar will be used on dog wellbeing section to enable reading of medical, wellbeing andd training records. 

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  letscrolled = (winScroll / height) * 100;
  document.getElementById("dropdown-content").style.width = scrolled + "%";
};