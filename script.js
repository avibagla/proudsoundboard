$(document).ready(function () {
  $('button').on('mousedown', function () {
    var id = this.id.slice(-1);
  
    var soundElem = document.getElementById(`sound` + id);
    if (soundElem.paused){
      soundElem.play();
    } else {
      soundElem.currentTime = 0;
    }
  });

});