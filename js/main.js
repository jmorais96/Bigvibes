$(document).ready(function(){
  $(".info-container").hide();

  // let data = new Date();
  // let hour = currentdate.getHours();
  //
  // if (hour > 8) {
  //   $("html").css("background-color", "white");
  // }else if( hour < 20 ){
  //   $("html").css("background-color", "grey");
  // }


    /* HOVER DO MENU */

  $(".menu a").hover(function(){
      $(this).css("background-color", "#74C8D2");
      $(this).css("color", "#fff");
      $(this).css("transition", "all .5s ease-in-out");
      }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });

  // $(".sub-menu").hover(function(){
  //     $(this).css("z-index", "1");
  //     $(this).css("opacity" , "1");
  //     }, function(){
  //       $(this).css("z-index", "-1");
  //       $(this).css("opacity" , "0");
  // });




    /* HOVER DO SUBMENU */

  //    $(".submenu li a", "sub-menu .current-item a").hover(function(){
  //     $(this).css("background-color", "#74C8D2");
  //     $(this).css("color", "#fff");
  //     $(this).css("transition", "all .5s ease-in-out");
  //     }, function(){
  //     $(this).css("background-color", "#fff");
  //     $(this).css("color", "#74C8D2");
  // });



    /* HOVER DO ARTISTS */

  $(".artist-photo").hover(function(){
      $(this).find("img").css("opacity", "1");
      $(this).find("img").css("-webkit-transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("filter", "contrast(20%)");
      $(this).find(".info-container").show();
      }, function(){
        $(this).find("img").css("opacity", "0.7");
        $(this).find("img").css("-webkit-transform", "scale(1.18) skewX(10deg);");
        $(this).find("img").css("transform", "skewX(10deg)");
        $(this).find("img").css("filter", "contrast(100%)");
          $(this).find(".info-container").hide();
  });

  $(".info-container h4").hover(function(){
    $(this).css("color", "black");
    $(this).css("transition", "background-color 0.5s ease-in");
      }, function(){
        $(this).css("color", "white");
        $(this).css("transition", "background-color 0.5s ease-in");
  });

  $(".info-container p").hover(function(){
    $(this).css("color", "black");
    //$(this).css("transition", "background-color 0.5s ease-in");
      }, function(){
        $(this).css("color", "white");
        //$(this).css("transition", "background-color 0.5s ease-in");
  });



});
