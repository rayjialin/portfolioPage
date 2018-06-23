// (function($) {
//   "use strict"; // Start of use strict

//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#sideNav'
//   });

// })(jQuery); // End of use strict

$(document).ready(function(){
  // var typeIt = new TypeIt('.typeIt', {
  //   // strings: ["I am experienced in creating iOS apps with users in mind, I also understand the importance of creating reable and maintainable source code. And I enjoy reading newsfeeds in the morning to learn about latest iOS news and updates."],
  //   speed: 900,
    
  //   // typeSpeed: 10,
  //   // backSpeed: 50,
  //   loop: true,
  //   lifeLike: false,
  //   autoStart: false
  //   startDelay: 1000,
  //   }).type('I am typing slowly,')
  //   .options({speed: 100})
  //   .type('but now I am typing pretty fasst')
  //   .delete(2)
  //   .type('t!');
  var typeIt = new TypeIt('.typeIt', {
  speed: 100,
  lifeLike: true,
  autoStart: true
  })
  .type("| SAP Consultant")
  .delete(14)
  .options({speed: 50})
  .type('iOS Developer')
  .cursor(true);
  // .delete();
})
