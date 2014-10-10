var main = function() {
  animateSocialIcons();

  $(window).scroll(function() {
    var topOfWindow = $(window).scrollTop();

    var $showcaseSection = $(".image-placeholder");
    if (topOfWindow >= 750 && !$showcaseSection.hasClass("animate")) {
      $showcaseSection.addClass("animate");
    } else if (topOfWindow < 750) {
      $showcaseSection.removeClass("animate");
    }
  });
}

var animateSocialIcons = function() {
  $(".fa").addClass("animate");
}

$(document).ready(main);