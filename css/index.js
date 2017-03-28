// JavaScript File
$(document).ready(function(){
  $(".category").click(function(){
    $(".categorylink").slideToggle();
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            items: 1,
            autoplay: true
        }
    );
});


$(window).load(function(){
  $("#list img").click(function(){
    var img_src = $(this).attr("src");
    $("#display img").attr("src", img_src);
  });
});


$(function(){
  $(document).ready(function(){
    $("#carousel").click(function () {
      $(this).next().slideToggle();
    });
  });
});