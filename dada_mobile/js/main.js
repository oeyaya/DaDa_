$(function(){
//    slick slider 플러그인

    $("#mainBanner ul").slick({
     centerMode: true,
  centerPadding: '120px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
      $(".ifGuid").click(function(){
            $(".guideCont").fadeIn(400);
        });
    $(".guideCont .ifGuid").click(function(){
            $(".guideCont").fadeOut(400);
        });
});
    
    
