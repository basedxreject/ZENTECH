/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Akshay Vyas.", " A Designer.", " A Developer.", " An Entrepreneur.", " A World Traveler."],
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel 
  // ========================================================================= //

    // services
  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //
   $(".navbar a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })

  //   // skills 
  // $('.skills-carousel').owlCarousel({
  //     autoplay: true,
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     responsiveClass: true,
  //     responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  //   });

});