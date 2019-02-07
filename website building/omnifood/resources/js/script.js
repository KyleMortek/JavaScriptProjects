$(document).ready(function () {
  // sticking navigation
  $('*').waypoint(function (direction) {
    if (direction == "up") {
      $('nav').css('transition', '1s').addClass('sticky');
    } else {
      // nav.slideToggle(200);
      // $('nav').slideToggle(200);
      $('nav').css('transition', '0.5s').removeClass('sticky');
    }

  }, {
    offset: '60px'
  });

  // scroll to im hungry
  $(".js--scroll-to-plans").click(function () {
    $('html,body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);

  });
  $(".js--scroll-to-show-me").click(function () {
    $('html,body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 500);

  });
  ///////////////////////////
  ////////////////////////
  // navigation scrolling 
  ////////////////////////
  //////////////////////////
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  ////////////////////////
  // navigation scrolling ANIMATIONS
  ////////////////////////
  // getfoodfast animationsecrition
  $('.js--wp1').waypoint(function () {
    $('.js--wp1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp2').waypoint(function () {
    $('.js--wp2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp3').waypoint(function () {
    $('.js--wp3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp4').waypoint(function () {
    $('.js--wp4').addClass('animated heartBeat');
  }, {
    offset: '50%'
  });
  // menu navi 
  ////////////////
  ////////////////
  $('.js--menu').click(function(){
    let nav = $('.js--main-nav');
    let icon= $('.js--menu i');
    nav.slideToggle(200);
    if(icon.hasClass('ion-ios-menu')){
      icon.addClass('ion-ios-close-circle');
      icon.removeClass('ion-ios-menu');
    }else{
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close-circle');
    }
  });


  // $('h1').click(function(){
  //   $(this).css('background-color','#ff0000');
  // });
  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })
});
// console.log("hello");