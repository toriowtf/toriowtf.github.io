function playClickSound() {
    var audio = document.getElementById("clickSound");
    audio.play();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var totalElement = document.querySelector('.total');
    totalElement.addEventListener('click', function() {
      playClickSound();

    });
  });
  