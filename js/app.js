$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
  });


// $(function () {
//   var lastScrollTop = 0;
//   var $navbar = $('.navbar');
//   var navbarHeight = $navbar.outerHeight();
//   var movement = 0;
//   var lastDirection = 0;

//   $(window).scroll(function(event){
//     var st = $(this).scrollTop();
//     movement += st - lastScrollTop;

//     if (st > lastScrollTop) { // scroll down
//       if (lastDirection != 1) {
//         movement = 0;
//       }
//       var margin = Math.abs(movement);
//       if (margin > navbarHeight) {
//         margin = navbarHeight;
//       }
//       margin = -margin;
//       $navbar.css('margin-top', margin+"px")

//       lastDirection = 1;
//     } else { // scroll up
//       if (lastDirection != -1) {
//         movement = 0;
//       }
//       var margin = Math.abs(movement);
//       if (margin > navbarHeight) {
//         margin = navbarHeight;
//       }
//       margin = margin-navbarHeight;
//       $navbar.css('margin-top', margin+"px")

//       lastDirection = -1;
//     }

//     lastScrollTop = st;
//     // console.log(margin);
//   });
// });

  