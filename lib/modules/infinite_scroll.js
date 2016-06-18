$(function(){
	
	var content = {
		url : "",
		data : ""
	}

	function getFeed(){
		
		var url = $('.nextprev a').attr('href');

		$.ajax({
			url : url,
			type : 'get',
			success : populateFeed
		});

	}

	function populateFeed(data){

		var dom = $(data);

		$.each(dom.find('#siteTable').children(),function(id,item){
			$('#siteTable').append(item);

			if($(item).hasClass('nav-buttons')){
				$('#siteTable .nav-buttons')[0].remove();
				$('.nextprev a')[0].remove();
			}
		});
		addLoadMoreButton();

	}
	
	function addLoadMoreButton(){

		var span = document.createElement('span');
		$(span).addClass('nextprev');
		var a = document.createElement('a');
		$(a).text('Continue Infinite Scroll!');
		$(a).css('cursor','pointer');
		$(span).append(a);
	
		$('#siteTable .nav-buttons').append('<span class="separator">|</span>');	
		$('#siteTable .nav-buttons').append(span);

		$(span).click(getFeed);

	}

	addLoadMoreButton();
})
