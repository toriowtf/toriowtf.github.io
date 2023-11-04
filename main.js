// Function to handle form submission for email subscription
document.getElementById('emailForm').addEventListener('submit', function(event) {
  // Retrieve the value of the email input field
  var email = document.getElementById('email').value;
  // Initialize an empty string to store error messages
  var errorMessages = '';

  // Check if the email is empty
  if (email.trim() === '') {
      errorMessages += 'Email is required.<br>'; // Add error message if empty
  } else {
      // Define a regular expression for validating email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Test if the email matches the regular expression
      if (!emailRegex.test(email)) {
          errorMessages += 'Invalid Email Address<br>'; // Add error message for invalid format
      }
  }

  // If there are error messages
  if (errorMessages !== '') {
      // Display error messages in the designated element
      document.getElementById('errorMessages').innerHTML = '<div class="error">' + errorMessages + '</div>';
      // Prevent form submission
      event.preventDefault();
  } else {
      // If no error, clear error messages
      document.getElementById('errorMessages').innerHTML = '';
  }
})

// Function to set up a countdown timer
function timer() {
  var countDownDate = new Date("Nov 11, 2023 00:00:00").getTime();
      
  var x = setInterval(function() {

      var now = new Date().getTime();
      
      var distance = countDownDate - now;
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the countdown timer in the designated element
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
      }
  }, 1000);
}

// Function to append an alert message to the page
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

// Event listener to trigger an alert when a button is clicked
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
      appendAlert('Thank you for Helping Us to Improve!', 'success')
  })
}

// Run the timer function when the window is fully loaded
window.onload = timer();

document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var searchTerm = document.getElementById('searchInput').value; // Get the search term

    window.location.href = 'search-results.html?query=' + encodeURIComponent(searchTerm);
  });
});

