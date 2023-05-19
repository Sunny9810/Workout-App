// Add eventlisteners to elements

// console.log("testing");

var previousWorkoutCard = document.querySelector(".previous-workout");
var warmUpCard = document.querySelector(".warm-up");
var todaysWorkoutCard = document.querySelector(".todays-workout");
var coolDownCard = document.querySelector(".cool-down");

previousWorkoutCard.addEventListener("click", function () {
  previousWorkoutCard.classList.toggle("active");
});

warmUpCard.addEventListener("click", function () {
  warmUpCard.classList.toggle("active");
});

todaysWorkoutCard.addEventListener("click", function () {
  todaysWorkoutCard.classList.toggle("active");
  document.location.replace("workoutpage");
});

coolDownCard.addEventListener("click", function () {
  coolDownCard.classList.toggle("active");
});
