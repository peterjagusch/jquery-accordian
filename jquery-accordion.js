(function($) {
	$.fn.accordion = function(options) {
	var defaults = { multiOpen: false, openFirst: true };
	var settings = $.extend(true, defaults, options);
	var allPanels = $('.accordion > div.panel-collapse').hide();    
	  $('.accordion > div > a.panel-title').click(function(e) {
		e.preventDefault();
		if($(this).parent().next().is(':visible')){
			$(this).parent().next().slideUp(); 
			return false;
		}
		if(!settings.multiOpen){ allPanels.slideUp() }
		$(this).parent().next().slideDown();		
	});
	if(settings.openFirst){
		$( ".accordion .panel-collapse:first" ).show();
	}
  return this; 
};
})(jQuery);
