$(function(){
     $('html, body').stop().animate({"scrollTop": 0}, 1000, 'easeInOutCubic');

//    slick slider 플러그인

    $("#mainBanner ul").slick({
     centerMode: true,
  centerPadding: '150px',
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





});
