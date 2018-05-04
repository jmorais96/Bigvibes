$(document).ready(function(){

  // let data = new Date();
  // let hour = currentdate.getHours();
  //
  // if (hour > 8) {
  //   $("html").css("background-color", "white");
  // }else if( hour < 20 ){
  //   $("html").css("background-color", "grey");
  // }


  $(".menu a").hover(function(){
      $(this).css("background-color", "#74C8D2");
      $(this).css("color", "#fff");
      $(this).css("transition", "all .5s ease-in-out");
      }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });

  $(".artist-photo img").hover(function(){
      $(this).css("opacity", "1");
      $(this).css("-webkit-transform", "scale(1.03) skewX(10deg)");
      $(this).css("transform", "scale(1.03) skewX(10deg)");
      $(this).css("filter", "contrast(20%)");
      }, function(){
        $(this).css("opacity", "0.7");
        $(this).css("-webkit-transform", "scale(1.18) skewX(10deg);");
        $(this).css("transform", "skewX(10deg)");
        $(this).css("filter", "contrast(100%)");
  });





});

