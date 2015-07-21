'use strict';

  $(document).ready(function () {
    console.log('hi');
    //zip code availability

    $('#unavailable').hide();
    $('#available').hide();

    $('#enter-zip').on('submit', function(e){
      e.preventDefault();
       var zipcode = $('#zipcode-input').val();
      $('#enter-zip').hide();
      if (zipcode === '123456') {
        $('#available').fadeIn();
        console.log('available!');
      } else {
        $('#unavailable').fadeIn();
        console.log(zipcode);
        console.log('unavailable!');
      }
    });

    $('.extradirty').tooltip();

    // scrolling

     $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top,
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
      });

     $(window).on('scroll', function(){
      var pos = $(window).scrollTop();
      if (pos > 2330 && pos < 3123) {
        $('nav').addClass('nav-white');
        console.log('inversed');
      }else if (pos > 5505 && pos < 7088) {
        $('nav').addClass('nav-white');
        console.log('inversed');
      } else {
       $('nav').removeClass('nav-white');
       console.log('normal');
      }
    });


    //phone slider

    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflow: {
         rotate: -30,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: false
      }
    });

  });

