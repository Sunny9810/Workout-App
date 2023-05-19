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
  
  
// redirect button for cooldown page
document.getElementById('redirect-btn').addEventListener('click', function(){
    window.location.href = 'cooldownpage'
});

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


//   const MuscleGroups = require("../../models/musclegroup")

