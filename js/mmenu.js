jQuery(document).ready(function($){
    
    // Make mmenu
    $('#site-navigation').mmenu();
    
    // Toggle menu
    $('#mmenu-toggle').click(function(){
        
        if( $('#site-navigation').hasClass('mmenu-opened') ) {
            closeMenu();
        } else {
            openMenu();
        }  
    });
    
    // Click outside menu closes it
    $('body').click(function(e) {
        if(!$(e.target).closest('#site-navigation').length && $(e.target).attr('id') !== 'mmenu-toggle') {
            if( $('#site-navigation').hasClass('mmenu-opened') ) {
                closeMenu();
            }
        } 
    });
    
    function openMenu(){
        $('#site-navigation')
            .css('display', 'block')
            .addClass('mmenu-opened');
    }
    
    function closeMenu(){
        $('#site-navigation')
            .css('display', 'none')
            .removeClass('mmenu-opened');
    }
    
});


