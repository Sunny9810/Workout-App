// modal event listener

var myModal = document.getElementById('exampleModal')
//populate the modal content as desired
document.getElementById('exampleModal').addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var muscleData = button.getAttribute('data-muscle');
    var muscle = JSON.parse(muscleData);
  });

// document.getElementById('exampleModal').addEventListener('show.bs.modal', function (event) {
//     var button = event.relatedTarget;
//     var muscleData = button.getAttribute('data-muscle');
//     var muscle = JSON.parse(muscleData);
  
//     var modalBody = document.querySelector('.modal-body');
//     modalBody.innerHTML = `
//       <h2>${muscle.muscle_name}</h2>
//       <p>${muscle.description}</p>
//       <p>${muscle.exercises_id}</p>
//     `;
//   });
  
  

// carousel event listener
const multipleItemCarousel =document.querySelector('#carouselExampleControls');

if(window.matchMedia("(min-width:576px").matches){
const multipleItemCarousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
})

    var carouselWidth = $('.carousel-inner').scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log('next')
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition},
        600);
    }
});
$('.carousel-control-prev').on('click', function(){
    if(scrollPosition > 0){
    console.log('prev')
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},
        600);
    }
});
}else{
    $(multipleItemCarousel).addClass('slide');
}


// if (window.matchMedia("(min-width: 576px)").matches) {
//     var carouselWidth = document.querySelector('.carousel-inner').scrollWidth;
//     var cardWidth = document.querySelector('.carousel-item').offsetWidth;
//     var scrollPosition = 0;
  
//     document.querySelector('.carousel-control-next').addEventListener('click', function() {
//       if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
//         console.log('next');
//         scrollPosition = scrollPosition + cardWidth;
//         document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
//       }
//     });
  
//     document.querySelector('.carousel-control-prev').addEventListener('click', function() {
//       if (scrollPosition > 0) {
//         console.log('previous');
//         scrollPosition = scrollPosition - cardWidth;
//         document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
//       }
//     });
//   } else {
//     document.addEventListener('click', function(event) {
//       var target = event.target;
//       if (target.classList.contains('carousel-control-next')) {
//         if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
//           console.log('next');
//           scrollPosition = scrollPosition + cardWidth;
//           document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
//         }
//       } else if (target.classList.contains('carousel-control-prev')) {
//         if (scrollPosition > 0) {
//           console.log('previous');
//           scrollPosition = scrollPosition - cardWidth;
//           document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
//         }
//       }
//     });
//   }


//   const MuscleGroups = require("../../models/musclegroup")

