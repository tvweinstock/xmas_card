$(document).ready(function(){
    var slowTwinkle = $('.slow');
    var fastTwinkle = $('.fast');


    $('.1').delay(50);
    $('.2').delay(1550);
    $('.3').delay(3340);
    $('.4').delay(5175);
    $('.5').delay(4200);
    $('.6').delay(5620);
    $('.6').delay(2100);
    $('.6').delay(6623);

    function twinkleSlow() {
        slowTwinkle.animate({
            opacity: '+=1'
        }, 100);
        slowTwinkle.animate({
            opacity: '=1'
        }, 700);
        slowTwinkle.animate({
            opacity: '-=0.5'
        }, 100, twinkleSlow);
    }

    function twinkleFast() {
        fastTwinkle.animate({
            opacity: '+=1'
        }, 100);
        fastTwinkle.animate({
            opacity: '=1'
        }, 700);
        fastTwinkle.animate({
            opacity: '-=0.5'
        }, 100, twinkleFast);
    }

    $('.fa').click(function() {
        $('.tower-container span').show();
        twinkleFast();
        twinkleSlow();
    });

});