'use strict'

$(document).ready(function() {
    
    $('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.m-nav').slideToggle('fast');
	});

	$('.show-sort').click(function() {
        $('.hide-select').toggleClass('active');
    });
    
    $('.sort-sel').click(function() {
        $('.hidden-sort').toggleClass('active');
    });
    
    $('.add-file').click(function() {
        $('.hidden-add').toggleClass('active');
    });
    
    $('.read-more').click(function() {
        $('.block-with-full-text').toggleClass('active');
    });
    
    $('.close-full-text').click(function() {
        $('.block-with-full-text').toggleClass('active');
    });

});