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

 		function disapearTimerMedia() {
 			disapearMediaTimer = setTimeout(disapearMedia, 10);
 			// clearTimeout(disapearTmeTimer);


 	}

 		function disapearTimerEnlist() {
 			disapearEnlistTimer = setTimeout(disapearEnlist, 10);
 			// clearTimeout(disapearTmeTimer);


 	}

$(document).ready(function(){


$(".ntf-hover").hover(function() {

$(".sub-menu-tme").css("display", "flex");

})

 $(".ntf-hover").mouseleave(function() {

disapearTimerTme();

    
  });

 $(".sub-menu-tme").hover(function() {

clearTimeout(disapearTmeTimer);

})

 $(".sub-menu-tme").mouseleave(function() {

disapearTmeTimer = setTimeout(disapearTME, 100);

    
  });






 $(".blue-hover").hover(function() {

$(".sub-menu-blueprint").css("display", "flex");

})

 $(".blue-hover").mouseleave(function() {

disapearTimerBlueprint();

    
  });

 $(".sub-menu-blueprint").hover(function() {

clearTimeout(disapearBlueprintTimer);

})

 $(".sub-menu-blueprint").mouseleave(function() {

disapearBlueprintTimer = setTimeout(disapearBlueprint, 10);

    
  });




 $(".media-hover").hover(function() {

$(".sub-menu-media").css("display", "flex");

})

 $(".media-hover").mouseleave(function() {

disapearTimerMedia();

    
  });

 $(".sub-menu-media").hover(function() {

clearTimeout(disapearMediaTimer);

})

 $(".sub-menu-media").mouseleave(function() {

disapearMediaTimer = setTimeout(disapearMedia, 10);

    
  });






 $(".enlist-hover").hover(function() {

$(".sub-menu-enlist").css("display", "flex");

})

 $(".enlist-hover").mouseleave(function() {

disapearTimerEnlist();

    
  });

 $(".sub-menu-enlist").hover(function() {

clearTimeout(disapearEnlistTimer);

})

 $(".sub-menu-enlist").mouseleave(function() {

disapearEnlistTimer = setTimeout(disapearEnlist, 10);

    
  });

 




     
   

 console.log("You clicked it");



});

