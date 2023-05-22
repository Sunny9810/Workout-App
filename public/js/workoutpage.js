//  fetch function for chest and triceps
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
      let chestDes = document.querySelector(".dbdes");
      let chestDes1 = document.querySelector(".pushdes");
      let chestDes2 = document.querySelector(".cfdes");
      let chestDes3 = document.querySelector(".mdes");

      chestTitle.textContent= data[0].exercise_name;
      chestTitle1.textContent= data[1].exercise_name;
      chestTitle2.textContent=data[2].exercise_name;
      chestTitle3.textContent=data[3].exercise_name;
      chestDes.textContent=data[0].description;
      chestDes1.textContent=data[1].description;
      chestDes2.textContent=data[2].descripiton;
      chestDes3.textContent=data[3].description;
     });
};

// fetch function for back
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
      let backDesc= document.querySelector(".description1");
      let backDesc1=document.querySelector(".rfdesc");
      let backDes2=document.querySelector(".cgdesc");
      let backDes3=document.querySelector(".smdesc");

      backTitle.textContent= data[0].exercise_name;
      backTitle2.textContent= data[1].exercise_name;
      backTitle3.textContent= data[2].exercise_name;
      backTitle4.textContent= data[3].exercise_name;
      backDesc.textContent=data[0].description;
      backDesc1.textContent=data[1].descripiton;
      backDes2.textContent=data[2].descripiton;
      backDes3.textContent=data[3].descripiton;
      // workoutDesc1.textContent= data.description.sets.reps;
    });
};


// fetch function for shoulders
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
      let shoulderDes = document.querySelector(".dbspdes");
      let shoulderDes1= document.querySelector(".sdbdes");
      // let shoulderDes2=documnet.querySelector(".frdes");
      let shoulderDes3=document.querySelector(".bpades");

      shouldersTitle.textContent= data[0].exercise_name;
      shouldersTitle1.textContent=data[1].exercise_name;
      shouldersTitle2.textContent=data[2].exercise_name;
      shouldersTilte3.textContent=data[3].exercise_name;
      shoulderDes.textContent=data[0].descripiton;
      shoulderDes1.textContent=data[1].description;
      // shoulderDes2.textContent=data[2].descripiton;
      shoulderDes3.textContent=data[3].descripiton;
      // workoutDesc3.textContent = data.description.sets.reps;
    });
};


// fetch funciton for legs
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


// fetch function for arms 
const bicepsTriceps =()=>{
  fetch("/api/mgroups/4",{
    method: "GET",
    cache: "reload",
    headers: { "Content-Type": "application/json"},
  })
    .then(function(response){
      return response.json();
    }).then((data) =>{
      let armTitle = document.querySelector(".skullcrushers");
      let armTitle1 = document.querySelector(".cabletricep");
      let armTitle2 = document.querySelector(".dbhammer");
      let armTitle3 = document.querySelector(".forearmcurl");
      let armDes = document.querySelector(".skulldesc");
      let armDes1 = document.querySelector(".tricepdesc");
      let armDes2 = document.querySelector(".hammerdesc");
      let armDes3 = document.querySelector(".forearmdesc");

      armTitle.textContent = data[0].exercise_name;
      armTitle1.textContent = data[1].exercise_name;
      armTitle2.textContent = data[2].exercise_name;
      armTitle3.textContent= data[3].exercise_name;
      armDes.textContent= data[0].descripiton;
      armDes1.textContent= data[1].description;
      armDes2.textContent=data[2].descripiton;
      armDes3.textContent=data[3].descripiton;
      // workoutToDo5.textContent= data.description.sets.reps;
    });
};


chestAndTricep();
backAndBicep();
shoulders();
quads();
bicepsTriceps();


