$(function(){
	
	var heightOfPane = $('.side').css('height');
	var closed = true;

	function closeSidePane(){

		$('.side').animate({
			'height':'0px',
			'opacity':'0'
		},function(){
			$('.side').css('display','none');
		});
		
	}
	
	function openSidePane(){

		$('.side').css('display','block');
		$('.side').animate({
			'height':heightOfPane,
			'opacity':'1'
		});

	}
	

	$('#header-bottom-right').append('<span class="separator">|</span>');

	var el = document.createElement('a'); 
	$(el).text('SidePane').css('cursor','pointer');
	$('#header-bottom-right').append(el);

	$(el).click(function(){
		
		if(closed)
			openSidePane();
		else
			closeSidePane();
		
		closed = !closed;

	})

	$('.side').css('height','0px').css('opacity','0').css('display','none');

	// Left Side Pane
	if(!$('body').hasClass('listing-chooser-collapsed'))
		$(".grippy").click();
})
