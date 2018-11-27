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
  $(document).ready(function(){
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});

// $(document).ready(function(){
//     $('.navbar-nav > li').click(function(event) {
// 		event.preventDefault();
// 		var target = $(this).find('>a').prop('hash');
// 		$('html, body').animate({
// 			scrollTop: $(target).offset().top
// 		}, 500);
// 	});
// });