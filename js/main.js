$("#navbar-sticky").hide();
$(".div-pesquisa").hide();
$(".div-biography").hide();
$(".player").hide();
$("#more-music").hide();
var color="";
var form ="";
var query="";
var favoritos=[];
var index=0;
const youtubeAPIKey ="AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";
$(document).ready(function(){
  $(".search-button").click(function(){
      let artista = $("#header-song").val();
      $("#artist").val(artista);
      $("#submeter").click();
      $('html,body').animate({
        scrollTop: $("#search").offset().top},
        'slow');
  });

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

/* ---------------------------------   --------------------------- */





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

  $(".artists-showcase li .artist-photo").click(function(){
    let artist = $(this).find(".info-container").find("h4").html();
    //alert(artist);
    $("#artist").val(artist);
    $("#submeter").click();
    $('html,body').animate({
        scrollTop: $("#search").offset().top},
        'slow');
  });

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
                        $("#topmusic1 figure").append($("<div>").addClass("option-btn1_top").append($("<div>").addClass("btn-add-fav_top").append($("<i>").addClass("ion-ios-add").click(function(){
                          addFav(response.items[0].snippet.title);
                        }))));
                        $("#topmusic1 figure .ion-ios-play-circle").click(function(){
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
                          $("#topmusic2 figure").append($("<div>").addClass("option-btn1_top").append($("<div>").addClass("btn-add-fav_top").append($("<i>").addClass("ion-ios-add").click(function(){
                            addFav(response.items[0].snippet.title);
                          }))));

                          $("#topmusic2 figure .ion-ios-play-circle").click(function(){
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
                            $("#topmusic3 figure").append($("<div>").addClass("option-btn1_top").append($("<div>").addClass("btn-add-fav_top").append($("<i>").addClass("ion-ios-add").click(function(){
                              addFav(response.items[0].snippet.title);
                            }))));
                            $("#topmusic3 figure .ion-ios-play-circle").click(function(){
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

          $(".see-more-btn").click(function(){
            let singles=[];
            $(".div-pesquisa").hide();
            $("#more-music").show();
            $("#more-music .row h3").html("You searched for " + response.artists[0].name);
            $(".see-more-music").empty();
            $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="backArtist()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
            url="http://musicbrainz.org/ws/2/artist/"+ response.artists[0].id +"?inc=releases&fmt=json";
            url=encodeURI(url);
            //alert(url);
            $.get(url,function(response,status){
              if (status=='success') {
                for (result of response.releases) {
                  //alert(result.id);
                  var album = result.id;
                  let titulo = result.title;
                  url="http://musicbrainz.org/ws/2/release/"+album+"?inc=recordings+media&fmt=json";
                  url=encodeURI(url);
                  $.get(url,function(response,status){
                    if (status=='success') {
                      let aux=0;
                      for (music of response.media[0].tracks) {
                        for (var i = 0; i < singles.length; i++) {
                          if (singles[i]==music.title) {
                            aux=1;
                            break;
                          }
                        }
                        if (aux==1) {
                          break;
                        }else{
                          singles[i+1]=music.title;
                        }

                      $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<div>").addClass("option-btn1").append($("<div>").addClass("btn-add-fav").append($("<i>").addClass("ion-ios-add").click(function(){
                        addFav(music.title);
                      })))).append($("<i>").addClass("ion-ios-play-circle").click(function(){
                        $("#more-music").hide();
                        $(".player").show();
                        let url ="https://www.googleapis.com/youtube/v3/search?q="+music.title+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
                        url=encodeURI(url);
                        $.get(url,function(response,status){
                          if (status=='success') {
                            $(".player iframe").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100vh");
                          }
                        });
                      })).append($("<div>").addClass("info-music").append($("<h6>").html(music.title).css("color","#FFF")))));
                    }
                  }
                });
              }
            }
          });
        });


          $("#top-albums").click(function(){
            $(".div-pesquisa").hide();
            $("#more-music").show();
            $(".see-more-music").empty();
            $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="backArtist()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
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
                    $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="backArtist()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
                    url="http://musicbrainz.org/ws/2/release/"+album+"?inc=recordings+media&fmt=json";
                    url=encodeURI(url);
                      $.get(url,function(response,status){
                        if (status=='success') {
                          for (let track = 0; track < response.media[0].tracks.length; track++) {
                              $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<div>").addClass("option-btn1").append($("<div>").addClass("btn-add-fav").append($("<i>").addClass("ion-ios-add").click(function(){
                                addFav(response.media[0].tracks[track].title);
                              })))).append($("<i>").addClass("ion-ios-play-circle").click(function(){
                                showMusic(response.media[0].tracks[track].title);
                              })).append($("<div>").addClass("info-music").append($("<h6>").html(response.media[0].tracks[track].title).css("color","#FFF")))));
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
            $(".see-more-music").empty();
            $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="back()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
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
                            $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<div>").addClass("option-btn1").append($("<div>").addClass("btn-add-fav").append($("<i>").addClass("ion-ios-add").click(function(){
                              addFav(music.title);
                            })))).append($("<i>").addClass("ion-ios-play-circle")).append($("<div>").addClass("info-music").append($("<h6>").html(music.title).css("color","#FFF"))))).click(function(){
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
          let url ="https://www.googleapis.com/youtube/v3/search?q="+response.works[0].title+" "+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
          url=encodeURI(url);

          $.get(url,function(response,status){
            if (status=='success') {
              $(".form").hide();
              $(".player").show();
              $(".player iframe").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100vh");
            }
          });

        }else {
          alert('não foram encontrados resultados para esta musica');
        }
      });
    }

    $(".search-filter").keyup(function() {
      //alert('here');
      let filter = $(this).val().toLowerCase();
      $(".see-more-music li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1)
      });
    });





  //$("#")

  $("#back-form").click(function(){
    $(".div-pesquisa").hide();
    $(".form").show();
  });



/*--------------------------------------------------------*/


  $("#biography").click(function(){
    $(".div-pesquisa").hide();
    $(".div-biography").show();



        url="https://en.wikipedia.org/w/api.php?action=parse&page="+ query +"&format=json&origin=*";
        url=encodeURI(url);
        $.get(url,function(response,status){
          if (status=='success') {
            $(".div-biography .row h3").html(response.parse.title);
            $(".div-biography p").html(response.parse.text['*']);
          }
        });


  });



  $(".favs").click(function(){
    $(".form").hide();
    $("#more-music").show();
    $(".see-more-music").empty();
    $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="back()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
    $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<i>").addClass("ion-ios-musical-notes").click(function(){
      playPlaylist(favoritos);
    }))).append($("<div>").addClass("info-music").append($("<h6>").html("favoritos").css("color","#FFF"))))
    for (music of favoritos) {
      $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<i>").addClass("ion-ios-play-circle").css("top", "50px").click(function(){
        showMusic(music);
        }))).append($("<div>").addClass("info-music").append($("<h6>").html(music).css("color","#FFF"))))
    }
  });

  $(".plays").click(function(){
    $(".form").hide();
    $("#more-music").show();
    $(".see-more-music").empty();
    $(".see-more-music").html('<li><button class="go-back-btn" type="button" name="button" id="your-playlist" onclick="back()"><i class="ion-ios-arrow-back" ></i>GO BACK</button></li>');
    $(".see-more-music").append($("<li>").append($("<figure>").addClass("music-img").append($("<i>").addClass("ion-ios-musical-notes").click(function(){
      playPlaylist(favoritos);
    }))).append($("<div>").addClass("info-music").append($("<h6>").html("favoritos").css("color","#FFF"))))
  })

  $("#back-form").click(function(){
    $(".player").hide();
    $(".form").show();
  });
  $("#back-form-artist").click(function(){
    $(".div-pesquisa").hide();
    $(".form").show();
  });


});
});
function showMusic(musica){
  $("#more-music").hide();
  $(".player").show();
  let url ="https://www.googleapis.com/youtube/v3/search?q="+musica+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
   url=encodeURI(url);
   $.get(url,function(response,status){
     if (status=='success') {
       $(".player iframe").attr("src", "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100vh");
      }
  });
}

  function playPlaylist(playlist){
    $("#more-music").hide();
    $(".player").show();
    var fullPlaylist="";
    let j = 0;
    for (musica of playlist) {
        let id = musicaPlaylist(musica);
        id=id.responseJSON.items[0].id.videoId;
        //alert(id);
        //console.log(id);
      if (j==0) {
        fullPlaylist= id ;
      }else if(j==1){
        fullPlaylist=fullPlaylist + "?playlist="  + id ;
      }else{
        fullPlaylist=fullPlaylist  + ","  +id  ;
      }
      j++;
    }


    $(".player iframe").attr("src", "https://www.youtube.com/embed/"+fullPlaylist).css("border", "0").css("width", "100%").css("height", "100vh");
  }

 function musicaPlaylist(musica){
   let url ="https://www.googleapis.com/youtube/v3/search?q="+musica+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
   url=encodeURI(url);
   var result;
    $.ajaxSetup({async: false});
      var result =$.get(url,function(response,status){
       if (status=='success') {
         result = response.items[0].id.videoId;
         return result;
       }
     });
     return result;
 }

function addFav(musica){
  favoritos[index]=musica;
  index++;
}

function backArtist(){
  $("#more-music").hide();
  $(".div-pesquisa").show();
}

/* voltar ao form*/
function back(){
  $("#more-music").hide();
  $(".player").hide
  $('.form').show();
}








/*    PESQUISA HEADER   */
