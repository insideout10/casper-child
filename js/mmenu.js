jQuery(document).ready(function($){
    
    $('#site-navigation').mmenu();
    
    $('#mmenu-toggle').click(function(){
        
        if( $('#site-navigation').hasClass('mmenu-opened') ) {
            closeMenu();
        } else {
            openMenu();
        }  
    });
    
    
    $('body').click(function(e) {
        console.log($(e.target).attr('id'));
        if(!$(e.target).closest('#site-navigation').length && $(e.target).attr('id') !== 'mmenu-toggle') {
            console.log(2);
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


