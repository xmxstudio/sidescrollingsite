$(document).ready(function(){

	 resizeDivs();
	
	$(window).resize(function(){
 		resizeDivs();
	});
			
	function clearActiveLink(){
		$('#links').find('li').each(function(i,v){
			$(v).removeClass('active');
		});
	}
	function setActive(whichElement){
		if(!$(whichElement).hasClass('active')){
			clearActiveLink();
			$(whichElement).addClass('active');	
		}
	}
	function resizeDivs(){
		$('#sections div').each(function(i,v){
			$(v).css('width', $(window).width()  + 'px'); //sets witdth of section divs to 100% window width. 
		});
	}

	$('#links li').click(function(){
		var w = -($(this).attr('data-index') * $(window).width());
		$('#sections').animate({marginLeft:  w + 'px'},300);
		setActive($(this));
	});

}); 