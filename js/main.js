$("#navbar-sticky").hide();
$(".div-pesquisa").hide();
$(".div-biography").hide();
$(".player").hide();
$("#more-music").hide();
var color="";
var form ="";
var query="";
const youtubeAPIKey ="AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";
$(document).ready(function(){

  // let data = new Date();
  // let hour = currentdate.getHours();
  //
  // if (hour > 8) {
  //   $("html").css("background-color", "white");
  // }else if( hour < 20 ){
  //   $("html").css("background-color", "grey");
  // }

//
// $("#custombtn").hover(function(){
//   $(this).css("background-color", "#000");
// });


    /*menu inicial*/

    $(".first-menu li a").hover(function(){

        /*Muda a cor do hover quando se muda o color scheme*/
        /*sunrise*/
        if(color =="miday"){
        $(this).css("border-bottom", "2px solid #0081C6");


        }else{


        $(this).css("border-bottom", "2px solid #fff");
        $(this).css("color", "#fff");
        }

        $(this).css("transition", "all .5s ease-in-out");
        }, function(){
          $(this).css("border-bottom", "2px solid transparent");
          $(this).css("color", "#fff");
    });




    /* HOVER DO STICKY MENU */

 // $(".menu a").hover(function(){

      /*Muda a cor do hover quando se muda o color scheme*/
     // if(color =="miday"){
    //  $(this).css("background-color", "#0081C6");
      //$(this).css("color", "#fff");

      //}else{


        // $(this).css("background-color", "#74C8D2");
    //  $(this).css("color", "#fff");
      //}

      //$(this).css("transition", "all .5s ease-in-out");
     /* }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });

/* ------------------------------------------------------------ */





    /* HOVER DO SUBMENU */
   /* $(".menu li").hover(function(){
      $(this).find(".sub-menu").css("transition" , "all .5s ease-in-out");
      $(this).find(".sub-menu").css("z-index", "1");
      $(this).find(".sub-menu").css("opacity" , "1");
      $(this).find(".sub-menu").css("display", "block");
    }, function(){
      $(this).find(".sub-menu").css("z-index", "-1");
      $(this).find(".sub-menu").css("opacity" , "0");
      $(this).find(".sub-menu").css("display", "none");
    }); */



    /* ----------------------------------------------- */






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


    /* ------------------------------------------------------------------ */









    /* ------------------------------------------------------- */






/*MOBILE NAVIGATION*/
   $('.js--nav-icon, .menu-js a, .logo').click(function(element){
        var nav = $('.menu-js');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.menu-js');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });





    /* -------------------------------------------------------- */

    /*Sticky nav*/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('#navbar-sticky').fadeIn();
  } else {
    $('#navbar-sticky').fadeOut();
  }
});


 /*----------------------------------------------------*/










    /* Smooth scroll */



    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});





/*-------------------------------------------------------------*/






/*pesquisa*/

  $("#submeter").click(function(){
    if ($("#artist").val()!="") {

      query = $("#artist").val()

      let url ="http://musicbrainz.org/ws/2/artist/?query=artist:"+ query +"&fmt=json";
      url=encodeURI(url);

      $.get(url,function(response,status){
        if (status=='success') {
          //alert(response.works)
          //alert(query);
          $(".form").hide();
          $(".div-pesquisa").show();
          $(".div-pesquisa h3").html("You searched for \" " + $("#artist").val() +  " \" ");

          url="http://musicbrainz.org/ws/2/artist/"+ response.artists[0].id +"?inc=releases&fmt=json";
          url=encodeURI(url);
          //alert(url);
          $.get(url,function(response,status){
            if (status=='success') {
              url="http://musicbrainz.org/ws/2/release/"+ response.releases[0].id +"?inc=recordings&fmt=json";
              url=encodeURI(url);
              $.get(url,function(response,status){
                if (status=='success') {
                  //for (var i = -1; i < 3 ; i++){


                  url ="https://www.googleapis.com/youtube/v3/search?q="+ query + " " +response.media[0].tracks[0].title+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
                  url=encodeURI(url);
                  //alert(url);
                  //alert(i);
                    $.get(url,function(response,status){
                      if (status=='success') {
                        //$("#topmusic1 figure img").attr("src", response.items[0].snippet.thumbnails.high.url).css("height", "240px").css("width", "100%");
                        $("#topmusic1 figure div h6").html(response.items[0].snippet.title).css("color", "#FFF");
                        $("#topmusic1 figure i").click(function(){
                          $(".div-pesquisa").hide();
                          $(".player").show();
                          $(".player iframe").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100%");
                        });
                      }
                    });


                    url ="https://www.googleapis.com/youtube/v3/search?q="+ query + " " +response.media[0].tracks[1].title+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
                    url=encodeURI(url);
                    //alert(url);
                    //alert(i);
                      $.get(url,function(response,status){
                        if (status=='success') {
                         // $("#topmusic2 figure img").attr("src", response.items[0].snippet.thumbnails.high.url).css("height", "240px").css("width", "100%");
                          $("#topmusic2 figure div h6").html(response.items[0].snippet.title).css("color", "#FFF");
                          $("#topmusic2 figure i").click(function(){
                            $(".div-pesquisa").hide();
                            $(".player").show();
                            $(".player iframe").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100%");
                          });
                        }
                      });


                      url ="https://www.googleapis.com/youtube/v3/search?q="+ query + " " +response.media[0].tracks[2].title+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
                      url=encodeURI(url);
                      //alert(url);
                      //alert(i);
                        $.get(url,function(response,status){
                          if (status=='success') {
                           // $("#topmusic3 figure img").attr("src", response.items[0].snippet.thumbnails.high.url).css("height", "240px").css("width", "100%");
                            $("#topmusic3 figure div h6").html(response.items[0].snippet.title).css("color", "#FFF");
                            $("#topmusic3 figure i").click(function(){
                              $(".div-pesquisa").hide();
                              $(".player").show();
                              $(".player iframe").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100%");
                            });
                          }
                        });

                  //}
                }
              });

            //query = response.artists[0].id;

          }
        });




          $("#top-albums").click(function(){
            $(".div-pesquisa").hide();
            $("#more-music").show();
            //alert(response.artists[0].id);
            url="http://musicbrainz.org/ws/2/artist/"+ response.artists[0].id +"?inc=releases&fmt=json";
            url=encodeURI(url);
            //alert(url);
            $.get(url,function(response,status){
              if (status=='success') {
            for (result of response.releases) {
              //alert(result.id);
              var album = result.id;
              let titulo = result.title;
              url ="http://coverartarchive.org/release/" + result.id;
              url=encodeURI(url);
              $.get(url,function(response,status){
                if (status=='success') {
                  //alert(response.images[0].thumbnails.small);
                  $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<img>").attr("src", response.images[0].thumbnails.small)).append($("<div>").addClass("info-music").append($("<h6>").html(titulo).css("color","#FFF")))).click(function(){
                    $(".see-more-music").empty();
                    url="http://musicbrainz.org/ws/2/release/"+album+"?inc=recordings+media&fmt=json";
                    url=encodeURI(url);
                      $.get(url,function(response,status){
                        if (status=='success') {
                            for (music of response.media[0].tracks) {
                              $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<i>").addClass("ion-ios-play-circle")).append($("<div>").addClass("info-music").append($("<h6>").html(music.title).css("color","#FFF"))))).click(function(){
                                $("#more-music").hide();
                                $(".player").show();
                                let url ="https://www.googleapis.com/youtube/v3/search?q="+query+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
                                 url=encodeURI(url);
                                 $.get(url,function(response,status){
                                   if (status=='success') {
                                $(".player iframe").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100vh");
                              }
                            });
                              });
                            }
                          }
                        });
                      }));
                }else {
                  $("#search").append($("<img>").attr("src", "nope"));
                }
              });

            }

              //query = response.artists[0].id;

            }
          });
        });


          // let url ="https://www.googleapis.com/youtube/v3/search?q="+query+" "+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
          // url=encodeURI(url);
          //
          // $.get(url,function(response,status){
          //   if (status=='success') {
          //
          //     $(".form").hide();
          //     $(".div-pesquisa").show();
          //     $(".div-pesquisa h3").html("You searched for \" " + query +  " \" ");
          //
          //   }
          // });

        }else {
          alert('não foram encontrados resultados para este artista');
        }
      });

      //form = $('#search').html();
      //$('#search').empty();
      //alert('aqui');



    } else if($("#album").val()!=""){

        query = $('#album').val();

        let url ='http://musicbrainz.org/ws/2/release/?query=release:' + query + '&fmt=json';
        url=encodeURI(url);
        $.get(url,function(response,status){
          if (status=='success') {


            $(".form").hide();
            $("#more-music").show();
            var album = response.releases[0].id;
            url="http://musicbrainz.org/ws/2/release/"+album+"?inc=recordings+media&fmt=json";
            url=encodeURI(url);
            //alert(url);
              $.get(url,function(response,status){
                if (status=='success') {
                    for (music of response.media[0].tracks) {
                      url ="https://www.googleapis.com/youtube/v3/search?q="+ query + " " +music.title+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
                      url=encodeURI(url);
                      //alert(url);
                      (function(music) {
                        $.get(url,function(response,status){
                          if (status=='success') {
                            $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<i>").addClass("ion-ios-play-circle")).append($("<div>").addClass("info-music").append($("<h6>").html(music.title).css("color","#FFF"))))).click(function(){
                              $("#more-music").hide();
                              $(".player").show();
                              $(".player iframe").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100vh");
                            });
                            //$("#search").append($("<iframe>").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId));
                          }
                        });
                      })(music);
                    }
                  }
                });
          }
        });



    } else if ($("#song").val()!="") {
      query = $('#song').val();

      let url ="http://musicbrainz.org/ws/2/work/?query=work:"+ query +"&fmt=json";
      url=encodeURI(url);

      $.get(url,function(response,status){
        if (status=='success' && (typeof response.works[0] !== 'undefined')) {
          //alert(response.works)
          let url ="https://www.googleapis.com/youtube/v3/search?q="+query+" "+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
          url=encodeURI(url);

          $.get(url,function(response,status){
            if (status=='success') {
              form = $('#search').html();
              //alert(form);
              $('#search').empty();
              $('#search').append($("<button></button>").html("GO BACK TO THE SEARCH").css("height", "70px").css("width", "100%").css("background-color", "#74C8D2").css("color", "#fff").css("border", "2px solid transparent").attr("onclick", "backForm()"));
              //$('#search').append($("<div>").html("<p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p>"));
              $("#search").append($("<iframe>").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100%"));

            }
          });

        }else {
          alert('não foram encontrados resultados para esta musica');
        }
      });
    }
  });



  $("#")

  $("#back-form").click(function(){
    $(".div-pesquisa").hide();
    $(".form").show();
  });



/*--------------------------------------------------------*/


  $("#biography").click(function(){
    $(".div-pesquisa").hide();
    $(".div-biography").show();



    url="http://en.wikipedia.org/w/api.php?action=query&formatversion=2&titles="+ query +"&prop=pageimages&pithumbsize=1000&format=json&origin=*";
    url=encodeURI(url);
    $.get(url,function(response,status){
      if (status=='success') {
        //alert("here");
        $(".div-biography h3").html(response.query.normalized[0].to);

      }else {
        //alert("here1");
      }
    });

  });

  $("#back-form").click(function(){
    $(".player").hide();
    $(".form").show();
  });
  $("#back-form-artist").click(function(){
    $(".div-pesquisa").hide();
    $(".form").show();
  });

});

/* voltar ao form*/
function backForm(){
  //alert (form);
  $('#search').empty();
  //alert(form)
  $('#search').html(form);
}








/*    PESQUISA HEADER   */
