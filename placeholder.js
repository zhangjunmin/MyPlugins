/*
** sense  :fixed  less ie version 9 placeholder
** author : zhangjunmin
** date   :2014/10/31
*/
;(function($){
	'use strict';

	$.fn.extend({
		placeholder : function(){

			//check brower  suggest  use  less juqery1.8
			if($.browser.msie!=true){
				return;
			};
			if($.browser.version>8){
				return;
			};

			//main
			var  self =  this;
			for (var i = 0,length = self.length; i<length; i++) {
				var  createElement = document.createElement('span');
				var input = self[i];
				(function(span,input){
					var $input = $(input);
					$input.before(span);
					$input.parent().css('position','relative');
					span.innerText = $input.attr('placeholder');

					$(span).css({
						'position'    :'absolute',
						'display'     :'inline-block',
						'left'        :input.offsetLeft+'px',
						'top'         :input.offsetTop+'px',
						'font-size'   :$input.css('font-size'),
						'font-family' :$input.css('font-family'),
						'font-weight' :$input.css('font-weight'),
						'padding-left':parseInt($input.css('padding-left')) + 2 + 'px',
						'line-height' :$input.outerHeight() + 'px',
						'filter'      :'alpha(opacity=100)'
					});

					//bindEvents
					span.onclick = function(){
						input.focus();
					};

					$input.focus(function(event) {
						if(this.value ==''){
							span.style.display = 'none';
						}
					});

					$input.blur(function(event) {
						if(this.value ==''){
							span.style.display = 'inline-block';
						}
					});
				})(createElement,input);
			};
			return this;
		}
	});
})(jQuery)
