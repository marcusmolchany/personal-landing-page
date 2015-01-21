;(function() {
  var main = function() {
    animateSocialIcons();

    $(window).scroll(function() {
      var topOfWindow = $(window).scrollTop();

      var $showcaseSection = $(".showcase");
      if (topOfWindow >= 750 && !$showcaseSection.hasClass("animate")) {
        $showcaseSection.addClass("animate");
      } else if (topOfWindow < 400) {
        $showcaseSection.removeClass("animate");
      }

      var $interestsSectionParagraph = $("#interests-section p");
      if (topOfWindow >= 2000) {

      } else if (topOfWindow >= 1500) {
        var topOffset = (topOfWindow - 940) / 4;
        $interestsSectionParagraph.css({'top': topOffset});
      }
    });

    var width = $(window).width();
    if (width > 800) {
      var $video = $('<video autoplay  poster="media/background-img.jpg" id="bgvid" loop>' +
                        '<source src="media/background-video.webm" type="video/webm">' +
                        '<source src="media/background-video.mp4" type="video/mp4">' +
                      '</video>');
      $("#greeting-section").prepend($video);
    }
  };

  var animateSocialIcons = function() {
    $(".fa").addClass("animate");
  };

  $(document).ready(main);
})();