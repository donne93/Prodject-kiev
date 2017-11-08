'use strict'

$(document).ready(function() {
    
    $('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.m-nav').slideToggle('fast');
	});
    
    $('.left-panel-btn').on('click', function () {
        $('.left-panel-btn').toggleClass('left-panel-btn__open')
        $('.left-panel').toggleClass('left-panel__open');
        $('body').toggleClass('body-left-panel__open');
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
    
    $('.more-options').click(function() {
        $('.for-more').toggleClass('active');
        $('.options-block').toggleClass('active');
    });

});