jQuery(document).ready(function($){
    
    function toggleDrawerMenu(){
        $('body').toggleClass('menu-opened');
    }
    
    $('#menu-toggle').click(toggleDrawerMenu);
});


