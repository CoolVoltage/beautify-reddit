$(function(){
	
	var content = {
		url : "default",
		data : ""
	}

	function getFeed(shouldPopulate){
		
		var url;
		
		if($('.nextprev a').attr('rel').indexOf("next") >= 0)
			url = $('.nextprev a').attr('href');
		else
			url = $($('.nextprev a')[1]).attr('href');

		if(url === content['url']){
			populateFeed(content['data']);
			return;
		}

		$.ajax({
			url : url,
			type : 'get',
			success : function(data){

				content['url'] = url;
				content['data'] = data;

				if(shouldPopulate)
					populateFeed(content['data']);

			} 
		});

	}

	function populateFeed(data){

		var dom = $(data);

		$.each(dom.find('#siteTable').children(),function(id,item){
			$('#siteTable').append(item);

			if($(item).hasClass('nav-buttons')){
				$('#siteTable .nav-buttons')[0].remove();
				$('.nextprev a')[0].remove();

				addLoadMoreButton();
				getFeed(false);
			}
		});

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

		$(span).click(function(){
			getFeed(true);
		});

	}
	
	addLoadMoreButton();
	getFeed(false);
})
