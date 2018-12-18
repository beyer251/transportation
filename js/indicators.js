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

  if (y > 600 && y < 2000) {
    $(".protect").fadeIn();
  }

  else {
    $(".protect").fadeOut();
  }

  if (y > 690 && y < 2000) {
    $(".protect1").fadeIn();
  }

  else {
    $(".protect1").fadeOut();
  }

  if (y > 720 && y < 2000) {
    $(".protect2").fadeIn();
  }

  else {
    $(".protect2").fadeOut();
  }

  if (y > 1050 && y < 2000) {
    $(".steps").fadeIn();
  }

  else {
    $(".steps").fadeOut();
  }

  if (y > 1110 && y < 2000) {
    $(".steps2").fadeIn();
  }

  else {
    $(".steps2").fadeOut();
  }

  if (y > 1090 && y < 2000) {
    $(".circle5").fadeIn();
  }

  else {
    $(".circle5").fadeOut();
  }

  if (y > 1090 && y < 2000) {
    $(".circle6").fadeIn();
  }

  else {
    $(".circle6").fadeOut();
  }

  if (y > 1090 && y < 2000) {
    $(".circle7").fadeIn();
  }

  else {
    $(".circle7").fadeOut();
  }

  if (y > 1090 && y < 2000) {
    $(".circle8").fadeIn();
  }

  else {
    $(".circle8").fadeOut();
  }

  if (y > 1090 && y < 2000) {
    $(".circle9").fadeIn();
  }

  else {
    $(".circle9").fadeOut();
  }

  });
