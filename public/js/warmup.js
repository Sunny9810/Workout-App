
let workoutDayBtn= document.querySelector("#today-workout-btn");


workoutDayBtn.addEventListener("click", function () {
    document.location.replace("workoutpage")
  });


const quoteWarmUp =() =>{
    fetch("/api/quotes",{
        method: "GET",
        cache: "reload",
        // body: JSON.stringify({ quotes }),
      headers: { "Content-Type": "application/json" },
    })
        .then(function(response){
            return response.json();
    }).then((data)=>{
        let quoteSpace=document.querySelector(".quote-text");
        console.log(data);
        const randomIndex=Math.floor(Math.random()*data.length);

        const randomQuote=data[randomIndex];
        console.log(randomQuote);

        quoteSpace.textContent= JSON.stringify(randomQuote);
    });
};


const exercisesWarmUp1 =() =>{
    fetch("/api/exercises/21",{
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
    fetch("/api/exercises/22",{
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
    fetch("/api/exercises/23",{
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
    fetch("/api/mgroups/6",{
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



quoteWarmUp();
exercisesWarmUp1();
exercisesWarmUp2();
exercisesWarmUp3();
muscleGroupDes();




