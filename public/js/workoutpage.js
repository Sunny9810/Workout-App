const chestAndTricep =() =>{
  fetch("/api/mgroups/1", {
    method: 'GET',
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) => {
      let chestTitle = document.querySelector(".dbpress");
      let chestTitle1 = document.querySelector(".pushups");
      let chestTitle2 = document.querySelector(".chestflys");
      let chestTitle3 = document.querySelector(".mball")

      chestTitle.textContent= data[0].exercise_name;
      chestTitle1.textContent= data[1].exercise_name;
      chestTitle2.textContent=data[2].exercise_name;
      chestTitle3.textContent=data[3].exercise_name;
      
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
      let backTitle2 = document.querySelector('.reversefly');
      let backTitle3 = document.querySelector(".closegrip");
      let backTitle4 = document.querySelector(".superman");

      backTitle.textContent= data[0].exercise_name;
      backTitle2.textContent= data[1].exercise_name;
      backTitle3.textContent= data[2].exercise_name;
      backTitle4.textContent= data[3].exercise_name;
      // workoutDesc1.textContent= data.description.sets.reps;
    });
};


const shoulders =() =>{
  fetch("/api/mgroups/5",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let shouldersTitle = document.querySelector(".dbshoulderpress");
      let shouldersTitle1 = document.querySelector(".standingdb");
      let shouldersTitle2 = document.querySelector(".dbfrontraise");
      let shouldersTilte3 = document.querySelector(".bandpullaparts");

      shouldersTitle.textContent= data[0].exercise_name;
      shouldersTitle1.textContent=data[1].exercise_name;
      shouldersTitle2.textContent=data[2].exercise_name;
      shouldersTilte3.textContent=data[3].exercise_name;
      // workoutDesc3.textContent = data.description.sets.reps;
    });
};

const quads =() =>{
  fetch("/api/mgroups/3",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let quadsTitle = document.querySelector(".backsquats");
      let quadsTitle1 = document.querySelector(".legex");
      let quadsTitle2 =document.querySelector(".RDL");
      let quadsTitle3 = document.querySelector(".lunge");
      let quadsDes =document.querySelector(".des1")
      let quadsDes1 =document.querySelector(".des2");
      let quadsDes2 =document.querySelector(".des3")

      quadsTitle.textContent= data[0].exercise_name;
      quadsDes.textContent=data[0].description;
      quadsTitle1.textContent=data[1].exercise_name;
      quadsDes1.textContent=data[1].description;
      quadsTitle2.textContent=data[2].exercise_name;
      quadsDes2.textContent=data[2].descripiton;
      quadsTitle3.textContetn=data[3].exercise_name;
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

