$(document).ready(function(){

  $(".hamburger").click(function() {
    $(".navigation").fadeIn(10);
  });

  $(".x").click(function() {
    $(".navigation").fadeOut(10);
  });

  $(".beginning").delay(2000).fadeIn(1000);

});

$(document).scroll(function(){

  var y = $(document).scrollTop();

  $(".scroll").html(y);

  if (y > 750 && y < 2000) {
    $(".word").fadeIn();
  }

  else {
    $(".word").fadeOut();
  }

  if (y > 810 && y < 2000) {
    $(".links").fadeIn();
  }

  else {
    $(".links").fadeOut();
  }

  if (y > 970 && y < 2000) {
    $(".mndot").fadeIn();
  }

  else {
    $(".mndot").fadeOut();
  }

  if (y > 1060 && y < 2000) {
    $(".mndot2").fadeIn();
  }

  else {
    $(".mndot2").fadeOut();
  }

  if (y > 1040 && y < 2000) {
    $(".circle5").fadeIn();
  }

  else {
    $(".circle5").fadeOut();
  }

  if (y > 1040 && y < 2000) {
    $(".circle6").fadeIn();
  }

  else {
    $(".circle6").fadeOut();
  }

  if (y > 1040 && y < 2000) {
    $(".circle7").fadeIn();
  }

  else {
    $(".circle7").fadeOut();
  }


});
