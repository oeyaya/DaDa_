$(function(){
$('html, body').stop().animate({"scrollTop": 0}, 1000, 'easeInOutCubic');

        new WOW().init();
 $('.slideDown').click(function(e){

        e.preventDefault();

        var bottom = $('.bottom').offset().top;

        $('html, body').stop().animate({"scrollTop": bottom}, 1000, 'easeInOutCubic')

     new WOW().init();
    }); //click


    $('.slideUp').click(function(e){
        $('html, body').stop().animate({"scrollTop": 0}, 1000, 'easeInOutCubic');

    });

$(window).scroll(function(){
        var st = $(this).scrollTop();
            var brandTop = $(".snap").offset().top;

            if( st < brandTop ){
                $('.slideDown').removeClass('sticky');
            }else if( st >= brandTop ){
                $('.slideDown').addClass('sticky');
            }
});
});
