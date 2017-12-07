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
    
    $('.all-ladies-invitations-btn').on('click', function () {
        $('.all-ladies-invitations-btn').toggleClass('all-ladies-invitations-btn__open')
        $('.all-ladies-invitations').toggleClass('all-ladies-invitations__open');
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
    
    $('.sound-line').click(function() {
        $('.hid-sound').toggleClass('active');
    });
    
    $('.your-web-cam-line').click(function() {
        $('.hid-camera').toggleClass('active');
    });
    
    $('.forgot-pass').click(function() {
        $('.hide-change').toggleClass('active');
    });
    
    $('.one-faq-block').click(function() {
        $(this).find('.hide-text').toggleClass('active');
        $(this).find('.hide-down').toggleClass('active');
        $(this).find('.hide-up').toggleClass('active');
    });
    
    $('.forg-p').click(function() {
        $('.hide-forg-pass').toggleClass('active');
    });
    
    $('.messages-numbers').click(function() {
        $('.hidden-girls-bl').toggleClass('active');
    });
    
    $('.girls-inv-head').click(function() {
        $('.hidden-girls-bl').toggleClass('active');
    });

});