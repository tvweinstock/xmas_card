$(document).ready(function(){
    $(function (){
        $('.tower-container span').hover(function() {
            $(this).addClass('sparkle-sparkle')
        });
        $('.clear').click(function(event) {
            event.preventDefault();
            $('.sparkle-sparkle').removeClass('sparkle-sparkle');
        });
    });


});