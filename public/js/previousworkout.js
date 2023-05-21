// fetch("/api/exercises-routes")
//   .then(response => response.json())
//   .then(data => {
//     // Call the function to render the template with the fetched data
//     renderpreviousworkout(data);
//   })
//   .catch(error => {
//     console.log("Error fetching exercises:", error);
//   });
//   var source = document.getElementById("previousworkout").previousworkout.handlebars;
//   var previousworkout = Handlebars.compile(source);

const previousWorkout =() =>{
    fetch("/api/exercises",{
        method: "GET",
        cache: "reload",

    });

}
        // body: JSON.stringify({ quotes }),
//       headers: { "Content-Type": "application/json" },
//     })
//         .then(function(response){
//             return response.json();
//     }).then((data)=>{
//         let titleSpace1=document.querySelector("#titleone");;

//         let workoutSpace1=document.querySelector("#workout-des1");

//         titleSpace1.textContent= data.exercise_name;
//         workoutSpace1.textContent=data.description;
//     });
// };

  