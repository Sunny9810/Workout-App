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
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
  if(scrollPosition < (carouselWidth - (cardWidth *4))){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft:
    scrollPosition},600);
  }
});
$('.carousel-control-prev').on('click', function(){
  if(scrollPosition > 0){
    console.log('previous');
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft:
    scrollPosition},600);
  }
});