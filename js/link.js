
function scrollToAnchor(aid){
    var aTag = $("[name='"+ aid +"']");
    $('html,body').stop(true, true).delay(500).animate({scrollTop: aTag.offset().top},'slow');
}
$(document).ready(function(){

	$(".anchorlink").click(function(e) {
		e.preventDefault();
	   	closeNav();
		var aid = $(this).attr("href");
	   	scrollToAnchor(aid.substring(1));
	});	
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}