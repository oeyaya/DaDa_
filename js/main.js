$(function(){
      $("body").css("display", "none");

    $("body").fadeIn(1000);

    function redirectPage() {
        window.location = linkLocation;
    };


        $('.images>div').on('click', function(){
           var num = $(this).index();
            num += 1;

            $('.images>div').removeClass('focusOn');
            $('.images>div').eq(num-1).addClass('focusOn');
        });

    
    $(".ifGuid").click(function(){
            $(".guideCont").fadeIn(400);
        });
    $(".guideCont .ifGuid").click(function(){
            $(".guideCont").fadeOut(400);
        });
    
    

});
