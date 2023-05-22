const chestAndTricep =() =>{
  fetch("/api/mgroups/1", {
    method: 'GET',
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) => {
      let chestTitle = document.querySelector(".chestandtris");
      let workoutDesc2 = document.querySelector(".exercise-desc2");

      chestTitle.textContent= data[0].exercise_name;
      
      // data.exercises.forEach((exercise) => {
      //   const setsAndReps = `<p>Set ${exercise.sets}: ${exercise.reps}</p>`;
      //   const description = `<p>${exercise.description}</p>`;
      //   workoutDesc2.innerHTML += setsAndReps + description;
      // });
     });
};

const backAndBicep =() =>{
  fetch("/api/mgroups/2",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) => {
      console.log(data)
      let backTitle = document.querySelector(".backandbis");
      let workoutDesc1 = document.querySelector('.exercise-desc');

      backTitle.textContent= data[0].exercise_name;
      // workoutDesc1.textContent= data.description.sets.reps;
    });
};


const shoulders =() =>{
  fetch("/api/mgroups/3",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let shouldersTitle = document.querySelector(".shoulders");
      let workoutDesc3 = document.querySelector(".exercise-desc3");

      shouldersTitle.textContent= data[0].exercise_name;
      // workoutDesc3.textContent = data.description.sets.reps;
    });
};

const quads =() =>{
  fetch("/api/mgroups/4",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let quadsTitle = document.querySelector(".quads");
      let workoutDesc4 = document.querySelector(".exercise-desc4");

      quadsTitle.textContent= data[0].exercise_name;
      // workoutDesc4.textContent=data.description.sets.reps;
    });
};

const glutesAndHams =()=>{
  fetch("/api/mgroups/5",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let ghamTitle = document.querySelector(".gluteshammies");
      let workoutToDo5 = document.querySelector(".exeercise-desc5");

      ghamTitle.textContent=data[0].exercise_name;
      // workoutToDo5.textContent= data.description.sets.reps;
    });
};


chestAndTricep();
backAndBicep();
shoulders();
quads();
glutesAndHams();








// document.addEventListener('workoutpage', function() {
//     const myModal = new Modal(document.getElementById('{{muscle}}modal'), {});
//     myModal.show();
//   });

// modal event listener
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// var allModals = document.querySelectorAll('.modal-open')
// console.log(allModals);
// // populate the modal content as desired
// allModals.forEach(modal =>{
//     console.log(modal)
//     modal.addEventListener('show.bs.modal', function (event) {
//         console.log(event.target);
//         var button = event.relatedTarget;
//         var muscleData = button.getAttribute('data-muscle');
//         var muscle = JSON.parse(muscleData);
//       });
// })


// $(document).ready(function(){
//   $("#myBtn").click(function(){
//     $("#myModal").modal({backdrop: true});
//   });
// });


//  // Attach click event to exercise card
//  const exerciseCards = document.querySelectorAll('.exercise-card');
//  exerciseCards.forEach(card => {
//    card.addEventListener('click', (event) => {
//      // Get exercise ID from card
//      const exerciseId = card.getAttribute('data-exercise-id');
     
//      // Fetch exercise data by ID
//      fetch(`/api/exercises/${exerciseId}`)
//        .then(response => response.json())
//        .then(exercise => {
//          // Populate modal with exercise data
//          const modalTitle = document.querySelector('.modal-title');
//          modalTitle.innerText = exercise.exercise_name;
         
//          const exerciseDesc = document.querySelector('.exercise-desc');
//          exerciseDesc.innerText = exercise.description;
         
//          // Show the modal
//          const exerciseModal = new bootstrap.Modal(document.querySelector('#exampleModal'));
//          exerciseModal.show();
//        })
//        .catch(error => console.error(error));
//    });
//  });


//   const MuscleGroups = require("../../models/musclegroup")

