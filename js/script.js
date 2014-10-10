var main = function() {
  animateSocialIcons();

  $(window).scroll(function() {
    var topOfWindow = $(window).scrollTop();
    console.log(topOfWindow);

    var $showcaseSection = $(".image-placeholder");
    if (topOfWindow >= 750 && !$showcaseSection.hasClass("animate")) {
      $showcaseSection.addClass("animate");
    } else if (topOfWindow < 400) {
      $showcaseSection.removeClass("animate");
    }

    var $interestsSectionParagraph = $("#interests-section p");
    if (topOfWindow >= 2000) {

    } else if (topOfWindow >= 1300) {
      var topOffset = (topOfWindow - 1100) / 4;
      $interestsSectionParagraph.css({'top': topOffset});
    }
  });
}

var animateSocialIcons = function() {
  $(".fa").addClass("animate");
}

$(document).ready(main);