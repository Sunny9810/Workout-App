// const logout = async () => {
//   const response = await fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/login');
//   } else {
//     alert(response.statusText);
//   }
// };

// document.querySelector('#logout').addEventListener('click', logout);

// IF we are using jQUery
// if(window.matchMedia("(min-width: 576px)").matches){
//   var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;

// $('.carousel-control-next').on('click', function(){
//   if(scrollPosition < (carouselWidth - (cardWidth *4))){
//     console.log('next');
//     scrollPosition = scrollPosition + cardWidth;
//     $('.carousel-inner').animate({scrollLeft:
//     scrollPosition},600);
//   }
// });
// $('.carousel-control-prev').on('click', function(){
//   if(scrollPosition > 0){
//     console.log('previous');
//     scrollPosition = scrollPosition - cardWidth;
//     $('.carousel-inner').animate({scrollLeft:
//     scrollPosition},600);
//   }
// });
// }else{

// }

if (window.matchMedia("(min-width: 576px)").matches) {
  var carouselWidth = document.querySelector('.carousel-inner').scrollWidth;
  var cardWidth = document.querySelector('.carousel-item').offsetWidth;
  var scrollPosition = 0;

  document.querySelector('.carousel-control-next').addEventListener('click', function() {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
      console.log('next');
      scrollPosition = scrollPosition + cardWidth;
      document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
    }
  });

  document.querySelector('.carousel-control-prev').addEventListener('click', function() {
    if (scrollPosition > 0) {
      console.log('previous');
      scrollPosition = scrollPosition - cardWidth;
      document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
    }
  });
} else {
  window.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('carousel-control-next')) {
      if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
      }
    } else if (target.classList.contains('carousel-control-prev')) {
      if (scrollPosition > 0) {
        console.log('previous');
        scrollPosition = scrollPosition - cardWidth;
        document.querySelector('.carousel-inner').scrollLeft = scrollPosition;
      }
    }
  });
}

