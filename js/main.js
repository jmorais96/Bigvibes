var color="";
var form ="";
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

    
    
    
    

    /* HOVER DO STICKY MENU */

  $(".menu a").hover(function(){
      
      /*Muda a cor do hover quando se muda o color scheme*/
     /* if(color =="red"){
          $(this).css("background-color", "red");
      $(this).css("color", "#fff"); 
      
      }else{
      */
          
         $(this).css("background-color", "#74C8D2");
      $(this).css("color", "#fff"); 
      //}
      
      $(this).css("transition", "all .5s ease-in-out");
      }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });

/* ------------------------------------------------------------ */
    
    
    
    

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
    });
    
    
    
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
  if (y > 300) {
    $('#navbar-sticky').fadeIn();
  } else {
    $('#navbar-sticky').fadeOut();
  }
});
    
    
 /*----------------------------------------------------*/   
    
    
    
    
    
    /* COLOR SCHEME */
    
    $("#red").click(function(){
        color="red";
        $("html").css("background-color", "red");
    });

    
    
    
    
    
  /* ---------------------------------------------------- */  
    
    
    
    
    
    
    /* Smooth scroll */
    
    
    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
    
    

});


/*-------------------------------------------------------------*/






/*pesquisa*/

// $("#submeter").click(function(){
//   if ($("#song").val()!="") {
//     let query = $('#song').val();
//
//     let url ="https://www.googleapis.com/youtube/v3/search?q="+query+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
//     url=encodeURI(url);
//
//     $.get(url,function(response,status){
//       if (status=='success') {
//         form = $('#search').html();
//         //alert(form);
//         $('#search').empty();
//         $('#search').append($("<button></button>").html("BACK").attr("id","back").css("height", "10%").attr("onclick", "back()"));
//         $("#search").append($("<iframe>").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("width", "90%").css("height", "100%"));
//
//       }
//     });
//   }
// });



/*--------------------------------------------------------*/


/* PESQUISA*/

function back(){
  //alert (form);
  $('#search').empty();
  //alert(form)
  $('#search').html(form);
}

function pesquisa(){
  if ($("#song").val()!="") {
    let query = $('#song').val();

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
            $('#search').append($("<button></button>").html("BACK").attr("id","back").css("height", "10%").attr("onclick", "back()"));
            //$('#search').append($("<div>").html("<p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p>"));
            $("#search").append($("<iframe>").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("width", "90%").css("height", "100%"));

          }
        });

      }else {
        alert('não foram encontrados resultados para esta musica');
      }
    });



  }
}





