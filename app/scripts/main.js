'use strict';

  $(document).ready(function () {

    //zip code availability
    $('#unavailable').hide();
    $('#available').hide();
    $('#enter-zip').on('submit', function(e){
      e.preventDefault();
       var zipcode = $('#zipcode-input').val();
      $('#enter-zip').hide();
      if (zipcode === '02116') {
        $('#available').fadeIn();
      } else {
        $('#unavailable').fadeIn();
      }
    });

    $('.extradirty').tooltip();

    // smooth scrolling
     $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });

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

     // changing nav bar from white to blue based on section bg color
     $(window).on('scroll', function(){
      //accounting for differing browser and window heights
      var pos = $(window).scrollTop();
      var blueTop = $('#where_are_we').offset().top - 50;
      var blueBottom = $('#download').offset().top - 50;

        if (pos >= blueTop && pos <= blueBottom) {
          $('nav').addClass('nav-white');
          $('#nav-logo').hide();
          $('#nav-logo-blue').show();
        } else {
          $('nav').removeClass('nav-white');
          $('#nav-logo-blue').hide();
          $('#nav-logo').show();
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

