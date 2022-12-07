
function scrollToAnchor(aid){
    var aTag = $("[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top-$("nav").height()},'slow');
}
$(document).ready(function(){

	$(".anchorlink").click(function(e) {
		e.preventDefault();
	   	myFunction();
		var aid = $(this).attr("href");
	   	scrollToAnchor(aid.substring(1));
	});	
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}