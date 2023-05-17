const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);




  if(window.matchMedia("(min-width: 576px)").matches){
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
  }else{
    
  }
