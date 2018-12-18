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

  if (y > 730 && y < 2000) {
    $(".america").fadeIn();
  }

  else {
    $(".america").fadeOut();
  }

  if (y > 780 && y < 2000) {
    $(".MN1").fadeIn();
  }

  else {
    $(".MN1").fadeOut();
  }

  if (y > 780 && y < 2000) {
    $(".state").fadeIn();
  }

  else {
    $(".state").fadeOut();
  }

  if (y > 810 && y < 2000) {
    $(".MN2").fadeIn();
  }

  else {
    $(".MN2").fadeOut();
  }

  if (y > 1360 && y < 2800) {
    $(".industry").fadeIn();
  }

  else {
    $(".industry").fadeOut();
  }

  if (y > 1400 && y < 2000) {
    $(".BAG1").fadeIn();
  }

  else {
    $(".BAG1").fadeOut();
  }

  if (y > 1430 && y < 2000) {
    $(".BAG2").fadeIn();
  }

  else {
    $(".BAG2").fadeOut();
  }

  if (y > 2000 && y < 3200) {
    $(".victims").fadeIn();
  }

  else {
    $(".victims").fadeOut();
  }

  if (y > 2040 && y < 3200) {
    $(".MAN1").fadeIn();
  }

  else {
    $(".MAN1").fadeOut();
  }

  if (y > 2070 && y < 3200) {
    $(".MAN2").fadeIn();
  }

  else {
    $(".MAN2").fadeOut();
  }


});
