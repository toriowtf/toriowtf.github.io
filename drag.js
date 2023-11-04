document.addEventListener('DOMContentLoaded', function() {
    var draggedElement = null;

    document.querySelectorAll('.draggable').forEach(function(draggable) {
        draggable.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', draggable.id);
            draggedElement = draggable;
        });
    });

    document.querySelectorAll('.droppable').forEach(function(droppable) {
        droppable.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        droppable.addEventListener('drop', function(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData('text/plain');
            var droppedElement = document.getElementById(data);

            if (droppedElement && droppedElement.classList.contains('draggable')) {
                droppable.appendChild(droppedElement);
            }
        });
    });

    document.querySelector('.submit-btn').addEventListener('click', function() {
        var correctAnswers = 0;
        document.querySelectorAll('.droppable').forEach(function(droppable) {
            var draggable = droppable.querySelector('.draggable');
            if (draggable && droppable.id === draggable.id) {
                droppable.style.backgroundColor = '#4caf50';
                correctAnswers++;
            } else {
                droppable.style.backgroundColor = '#f44336';
            }
        });

        if (correctAnswers===3)
            alert("Damn! You got everything right, here is your 10% discount!")
        else
            alert('You got ' + correctAnswers + ' out of ' + document.querySelectorAll('.droppable').length + ' correct!');
    });
});
