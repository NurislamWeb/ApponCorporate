//****************** banner slider part js start ****************************
$('.banner-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//****************** banner slider part js end ****************************





//****************** screenshort slider part js start ***********************
$('.screenshort-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//****************** screenshort slider part js end *************************




//****************** video play  part js stsrt *******************************
$(document).ready(function(){
    $('.venobox').venobox(); 
});
//****************** video play  part js end *********************************



//****************** feedback slider  part js start ****************************
$('.details').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.images'

  });

  $('.images').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerMode:true,
    centerPadding:0,
    asNavFor: '.details'

  });

//****************** feedback slider  part js end *******************************







//****************** back to top & fixed part js start ****************************

$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".b-top").css("visibility","visible");
  }else{
    $(".b-top").css("visibility","hidden");
  }
})

$(".b-top").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

//****************** back to top & fixed part js end ******************************
























