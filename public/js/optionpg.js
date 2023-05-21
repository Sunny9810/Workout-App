// Add eventlisteners to elements

// console.log("testing");

var previousWorkoutCard = document.querySelector(".previous-workout");
var warmUpCard = document.querySelector(".warm-up");
var todaysWorkoutCard = document.querySelector(".todays-workout");
var coolDownCard = document.querySelector(".cool-down");

previousWorkoutCard.addEventListener("click", function () {
  previousWorkoutCard.classList.toggle("active");
});
// var source = document.getElementById("optionpg").optionpg.handlebars;
//   var optionpg = Handlebars.compile(source);

//   var previousWorkouts = [
//     { date: "2023-05-20", exercise: "Push-ups", duration: "15 minutes" },
//     { date: "2023-05-19", exercise: "Biceps", duration: "30 minutes" },
//     // Add more previous workouts as needed
//   ];

//   var renderedOptionpg = optionpg({ previousWorkouts: previousWorkouts });

//   var outputElement = document.getElementById("previous-workout");
// outputElement.optionpg.handlebars = renderedOptionpg;

warmUpCard.addEventListener("click", function () {
  warmUpCard.classList.toggle("active");
  document.location.replace("warmup")
});

todaysWorkoutCard.addEventListener("click", function () {
  todaysWorkoutCard.classList.toggle("active");
  document.location.replace("workoutpage");
});

coolDownCard.addEventListener("click", function () {
  coolDownCard.classList.toggle("active");
  document.location.replace("cooldown");
});
