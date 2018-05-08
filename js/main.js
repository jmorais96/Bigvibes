let form ="";
$(document).ready(function(){

  // let data = new Date();
  // let hour = currentdate.getHours();
  //
  // if (hour > 8) {
  //   $("html").css("background-color", "white");
  // }else if( hour < 20 ){
  //   $("html").css("background-color", "grey");
  // }
  const youtubeAPIKey ="AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";

    /* HOVER DO MENU */

  $(".menu a").hover(function(){
      $(this).css("background-color", "#74C8D2");
      $(this).css("color", "#fff");
      $(this).css("transition", "all .5s ease-in-out");
      }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });



    /* HOVER DO SUBMENU */
    $(".menu li").hover(function(){
      $(this).find(".sub-menu").css("transition" , "all .5s ease-in-out");
      $(this).find(".sub-menu").css("z-index", "1");
      $(this).find(".sub-menu").css("opacity" , "1");
      $(this).find(".sub-menu").css("display", "block");
    }, function(){
      $(this).find(".sub-menu").css("z-index", "-1");
      $(this).find(".sub-menu").css("opacity" , "0");
      $(this).find(".sub-menu").css("display", "none");
    });



    /* HOVER DO ARTISTS */

  $(".artist-photo").hover(function(){
      $(this).find("img").css("opacity", "1");
      $(this).find("img").css("-webkit-transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("filter", "contrast(90%)");
      $(this).find(".info-container").show();
      }, function(){
        $(this).find("img").css("opacity", "0.7");
        $(this).find("img").css("-webkit-transform", "scale(1.18) skewX(10deg);");
        $(this).find("img").css("transform", "skewX(10deg)");
        $(this).find("img").css("filter", "contrast(100%)");
          $(this).find(".info-container").hide();
  });

  /*pesquisa*/

$("#submeter").click(function(){
  if ($("#song").val()!="") {
    let query = $('#song').val();

    let url ="https://www.googleapis.com/youtube/v3/search?q="+query+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
    url=encodeURI(url);

    $.get(url,function(response,status){
      if (status=='success') {
        let form = $('#search').text();
        $('#search').empty();
        $('#search').append($("<button></button>").html("BACK").attr("id","back").css("height", "10%").attr("onclick", "back(form)"));
        $("#search").append($("<iframe>").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("width", "90%").css("height", "100%"));

      }
    });
  }
});








    /*send music*/

const realFileBtn = document.getElementById("realfile");
const customBtn = document.getElementById("custombtn");
const customTxt = document.getElementById("customtext");

    customBtn.addEventListener("click", function(){
        realFileBtn.click();
    })

    realFileBtn.addEventListener("change", function(){
        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value;
        } else {
            customTxt.innerHTML = "No files chosen, yet!";
        }
    })

});


function back(){
  $('#search').empty();
  $('#search').text(form);
}
