'use strict';
var sendForm = function(){
  //event.preventDefault();
  var username = 'zyp';
  var key = '896694c70a83d138014d65c6eb85c2a6-us12';
  $.ajax({
      url: 'https://us12.api.mailchimp.com/3.0/lists/97177/members',
      type: 'POST',
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader ('Authorization', 'Basic ' + btoa(username + ':' + key));
      },
      data: {
        'email_address': $('#emailinput').val(),
        'status': 'subscribed',
        'merge_fields': {
          'FNAME': 'Katy',
          'LNAME': 'Feng'
        }
      },
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    });
  };

  $(document).ready(function () {
    //zip code availability
    $('#unavailable').hide();
    $('#available').hide();
    $('#enter-zip').on('submit', function(event){
      event.preventDefault();
      var zipcode = $('#zipcode-input').val();
      $('input#hiddenzip').val(zipcode);
    $('#enter-zip').hide();
    if (zipcode === '02116' || zipcode === '02452' || zipcode === '02453') {
        $('#available').fadeIn();
      } else {
        $('#unavailable').fadeIn();
      }
    });

    $('#unavailable').on('submit', function(e){
      e.preventDefault();
      sendForm();
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

     var numSlides;
     if ($(window).width() > 767) {
        numSlides = 3;
     } else {
        numSlides = 1;
     }
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
      slidesPerView: numSlides,
      coverflow: {
         rotate: -30,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: false
      }
    });

  });


