"use strict"; // Enable strict mode for better error handling

// Function to create a shallow copy of an array-like object
function _toConsumableArray(a) {
  if (Array.isArray(a)) { // Check if 'a' is an array
    // If 'a' is an array, create a new array with the same elements
    for (var b = 0, c = Array(a.length); b < a.length; b++) {
      c[b] = a[b];
    }
    return c; // Return the new array
  }
  return Array.from(a); // Convert 'a' to an array and return it
}

// Variable to track whether the timer is currently running
var playing = true;

// Function to start the timer and update the counter every second
var timer = function timer() {
  return setInterval(function () {
    var a = document.getElementById("counter"), // Get the counter element
        b = parseInt(a.innerText); // Parse the current count as an integer
    a.innerText = b + 1; // Increment the count and update the counter element
  }, 1000); // Set the interval to 1000 milliseconds (1 second)
};

// Initialize the timer and store the interval ID
var interval = timer(),
    minus = document.getElementById("minus"), // Get the minus button element
    plus = document.getElementById("plus"), // Get the plus button element
    heart = document.getElementById("heart"), // Get the heart button element
    pause = document.getElementById("pause"), // Get the pause button element
    commentForm = document.getElementsByTagName("form")[0]; // Get the comment form element

// Event listener for clicking the minus button
minus.addEventListener("click", function () {
  var a = document.getElementById("counter"), // Get the counter element
      b = parseInt(a.innerText); // Parse the current count as an integer
  a.innerText = b - 1; // Decrement the count and update the counter element
});

// Event listener for clicking the plus button
plus.addEventListener("click", function () {
  var a = document.getElementById("counter"), // Get the counter element
      b = parseInt(a.innerText); // Parse the current count as an integer
  a.innerText = b + 1; // Increment the count and update the counter element
});

// Event listener for clicking the heart button
heart.addEventListener("click", function () {
  var a = document.getElementById("counter"), // Get the counter element
      b = parseInt(a.innerText), // Parse the current count as an integer
      c = document.querySelector(".likes"), // Get the likes list element
      d = void 0;
  if ([].concat(_toConsumableArray(c.children)).map(function (a) {
    return parseInt(a.dataset.num);
  }).includes(b)) {
    d = document.querySelector('[data-num="' + b + '"]');
    var e = parseInt(d.children[0].innerText);
    d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
  } else {
    (d = document.createElement("li")).setAttribute("data-num", b);
    d.innerHTML = b + " has been liked <span>1</span> time";
    c.appendChild(d);
  }
});

// Event listener for clicking the pause button
pause.addEventListener("click", function () {
  if (playing) {
    playing = false; // Set playing flag to false
    clearInterval(interval); // Stop the timer
    this.innerText = "resume"; // Update the button text to 'resume'
  } else {
    playing = true; // Set playing flag to true
    interval = timer(); // Restart the timer
    this.innerText = "pause"; // Update the button text to 'pause'
  }
  // Disable all buttons except the pause button when paused
  [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function (a) {
    return "pause" !== a.id && (a.disabled = !playing);
  });
});

// Event listener for submitting the comment form
commentForm.addEventListener("submit", function (a) {
  a.preventDefault(); // Prevent the default form submission behavior
  var b = this.children[0], // Get the input field element
      c = b.value; // Get the value of the input field
  b.value = ""; // Clear the input field
  var d = document.querySelector(".comments"), // Get the comments list element
      e = document.createElement("p"); // Create a new paragraph element
  e.innerText = c; // Set the text content of the paragraph element
  d.appendChild(e); // Append the paragraph element to the comments list
});
