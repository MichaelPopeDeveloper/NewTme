/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
 function disapearTME() {
 	  $(".sub-menu-tme").css("display", "none");
};

 

 	function disapearTimer() {
 		clearTimeout(disapearTME);
 			disapearTME = setTimeout(disapearTME, 10);

 	}

$(document).ready(function(){


$(".ntf-hover").hover(function() {

$(".sub-menu-tme").css("display", "flex");

})

 $(".ntf-hover").mouseleave(function() {

disapearTimer();




 	// if ($('#sub-menu-tme').is(":hover")) {
 	// 	clearTimeout(disapearTME);
 	// }




    
  });

  // $(".sub-menu-tme").mouseleave(function() {


 	// disapearTME = setInterval(disapearTME, 500);




    
  // });




 $(".blue-hover").hover(function() {
$(".sub-menu-blueprint").css("display", "flex");

})

 $(".blue-hover").mouseleave(function() {
$(".sub-menu-blueprint").css("display", "none");


    
  });

  $(".media-hover").hover(function() {
$(".sub-menu-media").css("display", "flex");

})

 $(".media-hover").mouseleave(function() {
$(".sub-menu-media").css("display", "none");


    
  });

   $(".enlist-hover").hover(function() {
$(".sub-menu-enlist").css("display", "flex");

})

 $(".enlist-hover").mouseleave(function() {
$(".sub-menu-enlist").css("display", "none");


    
  });
     
   

 console.log("You clicked it");



});

