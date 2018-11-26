$(document).ready(() => {
  $(".see-more-text").on("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });

  $("#contacts-link").on("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });

  $("#about-me-link").on("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });

  $("#projects-link").on("click", () => {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  $(".navbar-brand").on("click", () => {
    document.querySelector("#home").scrollIntoView({
      behavior: "smooth"
    });
  });

  $(".see-more-text").on("mouseenter", () => {
    $(".fa-angle-down").fadeIn(350);
  });
  $(".see-more-text").on("mouseleave", () => {
    $(".fa-angle-down").fadeOut(350);
  });

  $(window).on("scroll", function() {
    let hidePoint = $("#home").get(0).scrollHeight;

    if ($(this).scrollTop() >= hidePoint - 50) {
      $(".brand-text").slideUp();
      // $("#contacts-link").slideUp();
      // $("#about-me-link").slideUp();
      // $("#projects-link").slideUp();
    }
    if ($(this).scrollTop() <= hidePoint - 50) {
      $(".brand-text").slideDown();
    }
  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 250) {
      $("#return-to-top").fadeIn(900);
    } else {
      $("#return-to-top").fadeOut(900);
    }
  });

  $("#return-to-top").on("click", () => {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
});

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function (event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function () {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
