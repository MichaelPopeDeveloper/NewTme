/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function disapearTME() {
    $(".sub-menu-tme").css("display", "none");
};

 function disapearBlueprint() {
    $(".sub-menu-blueprint").css("display", "none");
};

 function disapearAdvocates() {
    $(".sub-menu-advocates").css("display", "none");
};

 function disapearMedia() {
    $(".sub-menu-media").css("display", "none");
};

 function disapearEnlist() {
    $(".sub-menu-enlist").css("display", "none");
};

 

  function disapearTimerTme() {
      disapearTmeTimer = setTimeout(disapearTME, 10);
      // clearTimeout(disapearTmeTimer);


  }

    function disapearTimerBlueprint() {
      disapearBlueprintTimer = setTimeout(disapearBlueprint, 10);
      // clearTimeout(disapearTmeTimer);


  }

    function disapearTimerAdvocates() {
      disapearAdvocatesTimer = setTimeout(disapearAdvocates, 10);
      // clearTimeout(disapearTmeTimer);


  }

    function disapearTimerMedia() {
      disapearMediaTimer = setTimeout(disapearMedia, 10);
      // clearTimeout(disapearTmeTimer);


  }

    function disapearTimerEnlist() {
      disapearEnlistTimer = setTimeout(disapearEnlist, 10);
      // clearTimeout(disapearTmeTimer);


  }


$(document).ready(function(){
var slideTime = 7000;

// This starts the slider function when the page loads
slide1();

// $(".sub-menu").hide();

	
//These functions handle the slider videos source changes, and modal circle color changes
function slide1() {
	document.getElementById('main-content-video-1').src = 'videos/tme.mp4';
$("#circle1").css("background-color", "orange");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

 slide2Timer = setTimeout(slide2, slideTime);



}

function slide2() {
	document.getElementById('main-content-video-1').src = 'videos/ntf.mp4';
$("#circle2").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide3Timer = setTimeout(slide3, slideTime);



}

function slide3() {
document.getElementById('main-content-video-1').src = 'videos/socialeconomicadvocate.mp4';
$("#circle3").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide4Timer = setTimeout(slide4, slideTime);


}

function slide4() {
document.getElementById('main-content-video-1').src = 'videos/noexcuses.mp4';
$("#circle4").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide5Timer = setTimeout(slide5, slideTime);


}

function slide5() {
document.getElementById('main-content-video-1').src = 'videos/smallbusiness.mp4';
$("#circle5").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide1Timer = setTimeout(slide6, slideTime);


}

function slide6() {
document.getElementById('main-content-video-1').src = 'videos/promo.mp4';
$("#circle6").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");

slide1Timer = setTimeout(slide1, slideTime);


}
	



// These functions handle manual click slider changes
	$("#circle1").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide1();
    });

    $("#circle2").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide2();
// slide2Timer = setTimeout(slide2, slideTime);

    });

    $("#circle3").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide3();
});

    $("#circle4").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide4();
    });

    $("#circle5").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide5();
    });






$(".ntf-hover").hover(function() {

$(".sub-menu-tme").css("display", "flex");

});

 $(".ntf-hover").mouseleave(function() {

disapearTimerTme();

    
  });

 $(".sub-menu-tme").hover(function() {

clearTimeout(disapearTmeTimer);

});

 $(".sub-menu-tme").mouseleave(function() {

disapearTmeTimer = setTimeout(disapearTME, 100);

    
  });






 $(".blue-hover").hover(function() {

$(".sub-menu-blueprint").css("display", "flex");

});

 $(".blue-hover").mouseleave(function() {

disapearTimerBlueprint();

    
  });

 $(".sub-menu-blueprint").hover(function() {

clearTimeout(disapearBlueprintTimer);

});

 $(".sub-menu-blueprint").mouseleave(function() {

disapearBlueprintTimer = setTimeout(disapearBlueprint, 10);

    
  });



 $(".advocates-hover").hover(function() {

$(".sub-menu-advocates").css("display", "flex");

});

 $(".advocates-hover").mouseleave(function() {

disapearTimerAdvocates();

    
  });

  $(".sub-menu-advocates").hover(function() {

clearTimeout(disapearAdvocatesTimer);

});

 $(".sub-menu-advocates").mouseleave(function() {

disapearAdvocatesTimer = setTimeout(disapearAdvocates, 10);

    
  });




 $(".media-hover").hover(function() {

$(".sub-menu-media").css("display", "flex");

});

 $(".media-hover").mouseleave(function() {

disapearTimerMedia();

    
  });

 $(".sub-menu-media").hover(function() {

clearTimeout(disapearMediaTimer);

});

 $(".sub-menu-media").mouseleave(function() {

disapearMediaTimer = setTimeout(disapearMedia, 10);

    
  });






 $(".enlist-hover").hover(function() {

$(".sub-menu-enlist").css("display", "flex");

});

 $(".enlist-hover").mouseleave(function() {

disapearTimerEnlist();

    
  });

 $(".sub-menu-enlist").hover(function() {

clearTimeout(disapearEnlistTimer);

});

 $(".sub-menu-enlist").mouseleave(function() {

disapearEnlistTimer = setTimeout(disapearEnlist, 10);

    
  });



// });

//  //When the leaves the Economic blueprint tab

//  $("#blueprint-hover").mouseleave(function() {
//       $(".sub-flex-blueprint").hide();



    
//   });







//   $("#media-hover").hover(function() {

// $(".sub-flex-media").show();
// // $(".sub-flex-blueprint").css("margin-top", "37.4%");



// });

//  $("#media-hover").mouseleave(function() {
//       $(".sub-flex-media").hide();



    
//   });




//   $("#enlist-hover").hover(function() {

// $(".sub-flex-enlist").show();
// // $(".sub-flex-blueprint").css("margin-top", "37.4%");



// });

//  $("#enlist-hover").mouseleave(function() {
//       $(".sub-flex-enlist").hide();



    
//   });





 console.log("You clicked it");



});

