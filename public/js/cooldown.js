

  


// const quoteWarmUp =() =>{
//     fetch("/api/quotes",{
//         method: "GET",
//         cache: "reload",
//         // body: JSON.stringify({ quotes }),
//       headers: { "Content-Type": "application/json" },
//     })
//         .then(function(response){
//             return response.json();
//     }).then((data)=>{
//         let quoteSpace=document.querySelector(".quote-text");
//         console.log(data);
//         const randomIndex=Math.floor(Math.random()*data.length);

//         const randomQuote=data[randomIndex];
//         console.log(randomQuote);

//         quoteSpace.textContent= JSON.stringify(randomQuote);
//     });
// };

 //Saving the quote to local storage and displaying the saved quote in a separte section of the page-S.
    // function saveQuote(){
    // let quote =document.getElementById("quote-input").value;
    // localStorage.setItem("quote-input", quote);
    // let quoteData=document.createElement("div");
    // }


const exercisesWarmUp1 =() =>{
    fetch("/api/exercises/24",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        let titleSpace1=document.querySelector("#titleone");;

        let workoutSpace1=document.querySelector("#workout-des1");

        titleSpace1.textContent= data.exercise_name;
        workoutSpace1.textContent=data.description;
    });
};

const exercisesWarmUp2 =() =>{
    fetch("/api/exercises/25",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        
        let titleSpace2=document.querySelector("#titletwo");
        let workoutSpace2=document.querySelector("#workout-des2");

        titleSpace2.textContent= data.exercise_name;
        workoutSpace2.textContent=data.description;
    });
};


const exercisesWarmUp3 =() =>{
    fetch("/api/exercises/26",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        let titleSpace3=document.querySelector("#titlethree");
        let workoutSpace3=document.querySelector("#workout-des3");

        titleSpace3.textContent= data.exercise_name;
        workoutSpace3.textContent=data.description;
    });
};


const muscleGroupDes =() =>{
    fetch("/api/mgroups/7",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        let mDes=document.querySelector("#musclegroup");

        mDes.textContent= data.description;
    });
};


// let getQuotes =() =>{
//     fetch("/api/quotes/create",{
//         method: "POST",
//         cache: "reload",
//       body: JSON.stringify({ id,quotes }),
//       headers: { "Content-Type": "application/json" },
//     })
//         .then(function(response){
//             return response.json();
//     }).then((data)=>{
//         let quote=document.querySelector("quote-input");

//         quote.value= data.description;
//     });
// };
// const saveQuote = (quote) => {
//     fetch("/api/quotes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ quotes: quote }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Quote saved successfully.");
//         } else {
//           console.log("Failed to save quote.");
//         }
//       })
//       .catch((error) => {
//         console.error("An error occurred while saving the quote:", error);
//       });
//   };

const saveQuote = () => {
    const quoteInput = document.querySelector("#quote-input");
    const quote = quoteInput.value;
    fetch("/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quotes: quote }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Quote saved successfully.");
          // Optionally, you can clear the input field after saving the quote
          quoteInput.value = "";
        } else {
          console.log("Failed to save quote.");
        }
      })
      .catch((error) => {
        console.error("An error occurred while saving the quote:", error);
      });
  };
  const saveButton = document.querySelector("#save-button");
  saveButton.addEventListener("click", saveQuote);
  
let optionBtn= document.querySelector("#back-to-option");
// let saveBtn= document.querySelector("#save-button");


optionBtn.addEventListener("click", function () {
    document.location.replace("optionpg")
  });

//   saveBtn.addEventListener("click", function () {
//     saveQuote(quote)
//   });


// quoteWarmUp();
exercisesWarmUp1();
exercisesWarmUp2();
exercisesWarmUp3();
muscleGroupDes();