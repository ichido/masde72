var $window;
var $videos;
var $intro;
var $introContent;

// Resize intro box
var fitIntro = function(e) {
  var height = $window.height();
  // If .intro-content exists, get its height and include .logo 90px
  var introContentHeight = $introContent.height() ? $introContent.height() + 90 : 0;

  if (height > introContentHeight) {
    $intro.height(height);
  } else {
    $intro.height(introContentHeight);
  }
}

$(function() {
  // Populate variables
  $window = $(window);
  $videos = $('.video');
  $intro = $('.intro');
  $introContent = $('.intro-content');

  // Behaviors
  $videos.fitVids();
  fitIntro();
  $window.on('resize', fitIntro);
  $.localScroll({
    'duration': 500
  });
});
