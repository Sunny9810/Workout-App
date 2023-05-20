// document.addEventListener('workoutpage', function() {
//     const myModal = new Modal(document.getElementById('{{muscle}}modal'), {});
//     myModal.show();
//   });
  

// carousel event listener
var multipleItemCarousel =document.querySelector('#carouselExampleControls');

if(window.matchMedia("(min-width:576px)").matches){
    var newCarousel = new bootstrap.Carousel(multipleItemCarousel, {
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
}
else{
    multipleItemCarousel.classList.add('slide');
}


var backbtn = document.querySelector('.previousPageLink')

backbtn.addEventListener('click', function () {
    console.log('click');
    backbtn.classList.toggle('active');
})

// modal event listener
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

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


//   const MuscleGroups = require("../../models/musclegroup")

