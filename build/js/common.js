'use strict'

$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.m-nav').slideToggle('fast');
	});
});