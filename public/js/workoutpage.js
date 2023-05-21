// document.addEventListener('workoutpage', function() {
//     const myModal = new Modal(document.getElementById('{{muscle}}modal'), {});
//     myModal.show();
//   });

// modal event listener
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

var allModals = document.querySelectorAll('.modal-open')
console.log(allModals);
// populate the modal content as desired
allModals.forEach(modal =>{
    console.log(modal)
    modal.addEventListener('show.bs.modal', function (event) {
        console.log(event.target);
        var button = event.relatedTarget;
        var muscleData = button.getAttribute('data-muscle');
        var muscle = JSON.parse(muscleData);
      });
})


// const exerciseDatabase = {
//     method: 'GET',
// };

// fetch(exerciseDatabase)
//     .then(response => response.json())
//     .then(data => {
//         const exerciseSeedsArray = Array.from(data.results);
//         const filteredArray = [];
//         for (let i = 0;) {
//             filteredArray.push(exerciseSeedsArray[i]);
//         };

//     })
//   const MuscleGroups = require("../../models/musclegroup")

