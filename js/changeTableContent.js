//To enable table contents to be changed//


function changeContent(id, row, cell, content) {
    var x = document.getElementById(id).rows[row].cells;
    x[cell].innerHTML = content;
  }