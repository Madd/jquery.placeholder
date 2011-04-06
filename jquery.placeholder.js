/**
	jQuery placeholder plugin.
	
	Makes browsers that does not support HTML5 placeholder attribute, preform as a modern browser.
	
	Created by:
		Lasse Søberg
		06.04.2011
		
**/

(function($) {
	$.fn.placeholder = function() {
		var native_support = (function() {
			var i = document.createElement('input');
			return 'placeholder' in i;
		})();
		
		if(!native_support) {
			this.each(function() {
				$(this).focus(function() {
					var el = $(this);
					if(el.data('isEmpty')) {
						el.val('').removeClass('placeholder');
					}
				}).blur(function() {
					var el = $(this);
					if(el.data('isEmpty') || !el.val().length) {
						el.val(el.attr('placeholder')).addClass('placeholder');
					}
				}).keyup(function() {
					var el = $(this);
					if(el.val().length) {
						el.data('isEmpty', false);
					} else {
						el.data('isEmpty', true);
					}
				}).change(function() {
					$(this).keyup();
				});
				
				if(!$(this).val().length) {
					$(this).val($(this).attr('placeholder')).addClass('placeholder').data('isEmpty', true);
				}
			});
		}
		
		return this;
	}
})(jQuery);