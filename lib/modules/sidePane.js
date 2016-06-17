$(function(){
	
	var heightOfPane = $('.side').css("height");
	var closed = true;

	function closeSidePane(){

		$('.side').animate({
			"height":"0px",
			"opacity":"0"
		});

	}
	
	function openSidePane(){

		$('.side').animate({
			"height":heightOfPane,
			"opacity":"1"
		});

	}
	

	$("#header-bottom-right").append("<span class='seperator'>|</span>");

	var el = document.createElement("span"); 
	$(el).text(' Toggle SidePane').css('cursor','pointer');
	$("#header-bottom-right").append(el);

	$(el).click(function(){
		
		if(closed)
			openSidePane();
		else
			closeSidePane();
		
		closed = !closed;

	})

	$(".side").css("height","0px").css("opacity","0");

})
