$(document).ready(function(){
	$('#sections div').each(function(i,v){
		$(v).css('width', $(window).width()  + 'px');});
	function clearActiveLink(){	$('#links').find('li').each(function(i,v){
			$(v).removeClass('active');
		});	}
	function setActive(whichElement){if(!$(whichElement).hasClass('active')){
			clearActiveLink();
			$(whichElement).addClass('active');	
		}	}
	$('#links li').click(function(){
		var w = -($(this).attr('data-index')*  $(window).width());
		console.log('w: ' + w)
		$('#sections').animate({
		 	marginLeft:  w + 'px'
		},300);
		setActive($(this));
	});

}); 