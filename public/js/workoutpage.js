
// carousel event listener

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
    document.addEventListener('click', function(event) {
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


  // const MuscleGroups = require("../../models/musclegroup")

// //getting one muscle group with specific data
// router.get("//:id", async (req,res) => {
//     try {
//         //search db for exercise(or mgroup?) with id that matches params
//         const musclegroupdata = await MuscleGroups.findByPk(req.params.id)
//         console.log(musclegroupdata);
//         //serialize to only include data we need
//         const exercise = musclegroupdata.get({ plain: true });
//         res.render("workoutpage", exercise);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
