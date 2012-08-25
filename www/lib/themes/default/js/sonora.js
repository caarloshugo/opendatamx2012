$(document).on("ready", function() {
	$(".Sonora").hover(
		function(){ $(this).css("fill","#9ae5e5");},
		function(){ $(this).css("fill","#CDDAE0");}
	)

	$(".Sonora").on("click", function(){
		var id   = $(this).attr("id");
		$(".table-sinaloa tbody tr").fadeOut();
		$(".table-sinaloa tbody tr." + id).fadeIn();
		console.log(id);
		$.scrollTo('#auto', 800);
	});
});
