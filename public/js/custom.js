$(document).ready(function(){

 "use strict";
 /*==============================================================
// toggler js
==============================================================*/

$("button.navbar-toggler").on('click', function(){
    $(".main-menu-area").addClass("active");
    $(".mm-fullscreen-bg").addClass("active");
    $("body").addClass("hidden");
});

$(".close-box").on('click', function(){
    $(".main-menu-area").removeClass("active");
    $(".mm-fullscreen-bg").removeClass("active");
    $("body").removeClass("hidden");
});

$(".mm-fullscreen-bg").on('click', function(){
    $(".main-menu-area").removeClass("active");
    $(".mm-fullscreen-bg").removeClass("active");
    $("body").removeClass("hidden");
});

/*==============================================================
  Newsletter Popup
==============================================================*/

$('#myModal1').modal('show');

/*==============================================================
// cart js
==============================================================*/

$(".shopping-cart a.cart-count").on('click', function(){
    $(".mini-cart").addClass("show");
    $(".mm-fullscreen-bg").addClass("active");
    $("body").addClass("hidden");
});

$(".shopping-cart-close").on('click', function(){
    $(".mini-cart").removeClass("show");
    $(".mm-fullscreen-bg").removeClass("active");
    $("body").removeClass("hidden");
});

$(".mm-fullscreen-bg").on('click', function(){
    $(".mini-cart").removeClass("show");
    $(".mm-fullscreen-bg").removeClass("active");
    $("body").removeClass("hidden");
});

/*==============================================================
// header sticky
==============================================================*/
  $(window).scroll(function() {
    var sticky = $('.header-main-area'),
    scroll = $(window).scrollTop();
    if (scroll >= 150) {
      sticky.addClass('is-sticky');
    }
    else {
      sticky.removeClass('is-sticky');
    }
  });
  


/*==============================================================
// home slider
==============================================================*/

$('.home-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

$('.home-slider2').owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

/*==============================================================
// category image slider
==============================================================*/

$('.home-category').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 3,
            margin: 15
        },
        479: {
            items: 3,
            margin: 15
        },
        768: {
            items: 4
        },
        979: {
            items: 6
        },
        1199: {
            items: 6
        }
    }
});

/*==============================================================
// trending products slider
==============================================================*/

$('.trending-products').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 2,
            margin: 15
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});



/*==============================================================
//quick view slider
==============================================================*/

  $('.quick-slider').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    sautoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });


/*==============================================================
// deal countdown js
==============================================================*/

    if(document.getElementById('days1'))
    {
            const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
            x = setInterval(function() {
            if(document.querySelectorAll('.contdown_row').length == 1){
                    document.getElementById('days').innerText = Math.floor(distance / (day)),
                    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }else{
                var i;
                for (i = 1; i <= document.querySelectorAll('.contdown_row').length; i++) {
                    console.log($('[data-timer='+i+']').attr('data-date'));
                    var date_date = $('[data-timer='+i+']').attr('data-date');
                    var date_timer = $('.contdown_row').attr('data-timer');
                        var countDown = new Date(date_date).getTime();
                        var now = new Date().getTime();
                        var distance = countDown - now;
                        document.getElementById('days'+[i]).innerText = Math.floor(distance / (day)),
                        document.getElementById('hours'+[i]).innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById('minutes'+[i]).innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById('seconds'+[i]).innerText = Math.floor((distance % (minute)) / second);
                    }
                }
            }, second)
    }

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.home-pro-tab', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        991: {
            slidesPerView: 3
        },
        1199: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
// testimonials slider
==============================================================*/

$('.testi-m').owlCarousel({
    loop: false,
    rewind: true,
    nav: true,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 1,
            margin: 15
        },
        768: {
            items: 2
        },
        979: {
            items: 2
        },
        1199: {
            items: 2
        }
    }
});

/*==============================================================
// blog slider
==============================================================*/

$('.home-blog').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 15
        },
        768: {
            items: 2
        },
        979: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

/*==============================================================
// brand-logo slider
==============================================================*/

$('.brand-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        479: {
            items: 2
        },
        540: {
            items: 3
        },
        768: {
            items: 5
        },
        979: {
            items: 6
        },
        1199: {
            items: 6
        }
    }
});

/*==============================================================
// back to top js
==============================================================*/

$(window).on('scroll',function() {
    if ($(this).scrollTop() > 600) {
        $('#top').addClass('show');
    } else {
        $('#top').removeClass('show');
    }
});


$('#top').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

// **************************************** home-2 ********************************************

/*==============================================================
// trending products sliders
==============================================================*/

$('.home2-trending').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 4
        },
        1199:{
            items: 5
        }
    }
});

/*==============================================================
//category image
==============================================================*/

$('.home2-cate-image').owlCarousel({
    loop: true,
    rewind: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            margin: 15
        },
        479:{
            items:2,
            margin: 15
        },
        600:{
            items:3,
            margin: 15
        },
        768:{
            items:4,
            margin: 20
        },
        979:{
            items:5,
            margin: 20
        },
        1199:{
            items:7,
            margin: 20
        }
    }
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.our-products-tab', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 3
        }
    }
});

/*==============================================================
// testimonials slider
==============================================================*/

$('.home2-testi').owlCarousel({
    loop: false,
    rewind: true,
    nav: true,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 1,
            margin: 15
        },
        768: {
            items: 1
        },
        979: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

/*==============================================================
// featured products slider
==============================================================*/

$('.featured').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 4
        },
        1199:{
            items: 5
        }
    }
});

/*==============================================================
// blog
==============================================================*/

$('.blog2').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 15
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});

// **************************************** home-3********************************************

/*==============================================================
// home slider
==============================================================*/

$('.home-slider3').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.our-pro-tab', {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        },
        1199: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
// special products swiper
==============================================================*/

var swiper = new Swiper('.swiper-container.special-pro', {
    slidesPerView: 1,
    slidesPerColumn: 3,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerColumn: 2,
            slidesPerView: 1,
        },
        640: {
            slidesPerColumn: 2,
            slidesPerView: 1,
        },
        768: {
            slidesPerColumn: 3,
            slidesPerView: 2,
        },
        1024: {
            slidesPerColumn: 2
        }
    }
});

/*==============================================================
// testimonials slider
==============================================================*/

$('.testi-3').owlCarousel({
    loop: false,
    rewind: true,
    nav: false,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 1,
            margin: 15
        },
        768: {
            items: 1
        },
        979: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

/*==============================================================
// deal of the day
==============================================================*/

$('.deal-day').owlCarousel({
    loop: false,
    rewind: true,
    nav: true,
    dots:false,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 15
        },
        768: {
            items: 1
        },
        979: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

/*==============================================================
// trending products swiper
==============================================================*/

var swiper = new Swiper('.swiper-container.trening-left-pro', {
    slidesPerView: 1,
    slidesPerColumn: 3,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerColumn: 2,
            slidesPerView: 1,
        },
        640: {
            slidesPerColumn: 2,
            slidesPerView: 1,
        },
        768: {
            slidesPerColumn: 3,
            slidesPerView: 2,
        },
        1024: {
            slidesPerColumn: 2
        }
    }
});

/*==============================================================
// featured products slider
==============================================================*/

$('.featured-products-slider').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 3
        },
        1200:{
            items: 5
        }
    }
});

/*==============================================================
//brand
==============================================================*/

$('.home3-brand').owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    nav: false,
    dots: false,autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        479:{
            items:3
        },
        768:{
            items:4
        },
        979:{
            items:2
        },
        1199:{
            items: 2
        }
    }
});

/*==============================================================
//blog
==============================================================*/

$('.home3-blog').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    lazyLoad:true,
    nav: false,
    dots: false,responsive:{
        0:{
            items:1,
            margin: 15
        },
        479:{
            items:2,
            margin: 15
        },
        768:{
            items:2
        },
        979:{
            items:2
        },
        1199:{
            items:3
        }
    }
});

// **************************************** home-4********************************************

/*==============================================================
// home slider
==============================================================*/

$('.home4-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.home4-tab', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
//category image
==============================================================*/

$('.home4-cate').owlCarousel({
    loop: true,
    rewind: true,
    nav: true,
    margin:20,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            margin: 15
        },
        479:{
            items:3,
            margin: 15
        },
        768:{
            items:3,
        },
        979:{
            items:4,
        },
        1199:{
            items:5,
        }
    }
});

/*==============================================================
//home featured image
==============================================================*/

$('.home4-featured').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 4
        },
        1199:{
            items: 5
        }
    }
});

/*==============================================================
//brand slider
==============================================================*/

$('.home4-brand').owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        479:{
            items:3
        },
        768:{
            items:4
        },
        979:{
            items:4
        },
        1199:{
            items:5
        }
    }
});


// **************************************** home-5********************************************

/*==============================================================
//swiper slider
==============================================================*/

var swiper = new Swiper('.home5-slider', {
    slidesPerColumn: 1,
    slidesPerView: 1,
    dots: false,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        },
    }
});

/*==============================================================
//category image slider
==============================================================*/

$('.home5-cate-image').owlCarousel({
    loop: true,
    rewind: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            margin: 5
        },
        479:{
            items:3,
            margin: 5
        },
        768:{
            items:4,
            margin: 20
        },
        979:{
            items:5,
            margin: 20
        },
        1199:{
            items:6,
            margin: 20
        }
    }
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.home5-tab', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
//featured
==============================================================*/

$('.featured5-pro').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 4
        },
        1199:{
            items: 4
        }
    }
});

/*==============================================================
// blog
==============================================================*/

$('.blog5').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 15
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        },
        1199: {
            items: 3
        }
    }
});


// **************************************** home-6********************************************

/*==============================================================
// home slider
==============================================================*/

$('.home6-slider').owlCarousel({
    loop: false,
    items: 1,
    rewind: true,
    margin: 0,
    nav: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

/*==============================================================
//category
==============================================================*/

$('.cate-6').owlCarousel({
    loop: false,
    rewind: true,
    nav: true,
    margin: 0,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,autoplay: false,
    responsive:{
        0:{
            items:1,
        },
        479:{
            items:2
        },
        768:{
            items:2
        },
        979:{
            items:3
        },
        1199:{
            items:4
        }
    }
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.home6-tab', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
// testimonials slider
==============================================================*/

$('.testi-6').owlCarousel({
    loop: false,
    rewind: true,
    nav: false,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        479: {
            items: 1,
        },
        768: {
            items: 2
        },
        979: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});


/*==============================================================
//featured product
==============================================================*/

$('.home6-featured').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    lazyLoad:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 3,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 4
        },
        1199:{
            items: 5
        }
    }
});

/*==============================================================
// blog slider
==============================================================*/

$('.blog-6').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 15
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});

// **************************************** home-7********************************************

/*==============================================================
// home slider
==============================================================*/

$('.home-slider7').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    dots: false,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

/*==============================================================
//category
==============================================================*/

$('.cate-7').owlCarousel({
    loop: true,
    rewind: true,
    nav: false,
    margin: 60,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,autoplay: false,
    responsive:{
        0:{
            items:1,
        },
        479:{
            items:1
        },
        768:{
            items:2,
            margin: 30
        },
        979:{
            items:2,
            margin: 30
        },
        1199:{
            items:3,
            margin: 30
        }
    }
});

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.home-7-tab', {
    slidesPerColumn: 2,
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
});

/*==============================================================
//special
==============================================================*/

$('.special-7').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    lazyLoad:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        479:{
            items: 2,
            margin: 15
        },
        768:{
            items: 3
        },
        979:{
            items: 3
        },
        1199:{
            items: 4
        }
    }
});

/*==============================================================
//Blog
==============================================================*/

$('.blog-7').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    lazyLoad:true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 15,
        },
        479: {
            items: 2,
            margin: 15,
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});

// **************************************** About page********************************************

/*==============================================================
//counter
==============================================================*/

(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }

}(jQuery));

jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});


// **************************************** cart page********************************************

/* ========================================== 
  Minus and Plus Btn Height
  ========================================== */

  $('.minus-btn,.minus-btn-1').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val(),10);

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }
    $input.val(value);
  });

  $('.plus-btn,.plus-btn-1').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val(),10);

    if (value < 100) {
      value = value + 1;
    } else {
      value =100;
    }
    $input.val(value);
  });

// **************************************** product page ********************************************

    
  /* ========================================== 
  //additional
  ========================================== */
  
    $('.pro-page-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        responsive:{
          0:{
            items:3
          },
          600:{
            items:4
          },
          1000:{
            items:4
          }
        }
   });

    $('.pro-pag-5-slider').owlCarousel({
        loop: false,
        margin: 15,
        nav: false,dots: false,
        responsive:{
          0:{
            items:3
          },
          600:{
            items:4
          },
          1000:{
            items:4
          }
        }
    });


    $('.pro-page .nav-item .nav-link').on( "click", function() {

        $('.pro-page .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');

    });

  /* ========================================== 
   //related product
  ========================================== */
  $('.releted-products').owlCarousel({
  loop: false,
  rewind: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  sautoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items:2,
      margin: 15
    },
    480:{
      items: 2
    },
    768:{
      items: 3
    },
    979:{
      items: 3
    },
    1200:{
      items: 4
    }
  }
});  

   /* ========================================== 
   // index 7
  ========================================== */

  $('.releted-products-7').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,autoplay: true,
    sautoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:2,
        margin: 15
      },
      480:{
        items:2
      },
      768:{
        items:2
      },
      979:{
        items:3
      }
    }
  });

// **************************************** coming soon ********************************************


if(document.getElementById('day')){
    var deadline = new Date("july 30, 2050 15:37:25").getTime();             
    var x = setInterval(function() {
       var currentTime = new Date().getTime();                
       var t = deadline - currentTime; 
       var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
       var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
       var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
       var seconds = Math.floor((t % (1000 * 60)) / 1000); 
       
           document.getElementById("day").innerHTML = days ; 
           document.getElementById("hour").innerHTML =hours; 
           document.getElementById("minute").innerHTML = minutes; 
           document.getElementById("second").innerHTML =seconds; 
           if (t < 0) {
              clearInterval(x); 
              document.getElementById("time-up").innerHTML = "TIME UP"; 
              document.getElementById("day").innerHTML ='0'; 
              document.getElementById("hour").innerHTML ='0'; 
              document.getElementById("minute").innerHTML ='0' ; 
              document.getElementById("second").innerHTML = '0'; 
           } 
        

    }, 1000); 

}

if(document.getElementById('days')){
    //alert('sf');
    var deadline = new Date("july 30, 2022 15:37:25").getTime();             
    var x = setInterval(function() {
       var currentTime = new Date().getTime();                
       var t = deadline - currentTime; 
       var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
       var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
       var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
       var seconds = Math.floor((t % (1000 * 60)) / 1000); 
       
           document.getElementById("days").innerHTML = days ; 
           document.getElementById("hours").innerHTML =hours; 
           document.getElementById("minutes").innerHTML = minutes; 
           document.getElementById("seconds").innerHTML =seconds; 
           if (t < 0) {
              clearInterval(x); 
              document.getElementById("time-up").innerHTML = "TIME UP"; 
              document.getElementById("days").innerHTML ='0'; 
              document.getElementById("hours").innerHTML ='0'; 
              document.getElementById("minutes").innerHTML ='0' ; 
              document.getElementById("seconds").innerHTML = '0'; 
           } 
    }, 1000); 
}

// **************************************** blog page ********************************************

$('.single-image-carousel').owlCarousel({
    loop: false,
    rewind: true,
    nav: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 1,
            margin: 15
        },
        768: {
            items: 1
        },
        979: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

/* ========================================== 
   //blog
  ========================================== */

$('.details-blog-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    lazyLoad:true,
    nav: false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            margin: 15
        },
        479:{
            items:2,
            margin: 20
        },
        768:{
            items:2
        },
        979:{
            items:3
        },
        1199:{
            items:3
        }
    }
});

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

// **************************************** home-8 ********************************************

$('.home-slider-main').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

// category
var swiper = new Swiper('.swiper-container.category-slider', {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        991: {
            slidesPerView: 3
        },
        1199: {
            slidesPerView: 3
        }
    }
});

// swiper product-tab slider

$( document ).ready(function() {
  var swiper = new Swiper('.swiper-container.home8-tab-product', {
    slidesPerColumn: 2,
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    },
  });
});
    
// masonry
$('.grid').imagesLoaded(function () {
    $('.grid').isotope({
        itemSelector: 'li',
        layoutMode: 'masonry'
    });
});


// blog
$('.blog-home8').owlCarousel({
    loop: false,
    rewind: true,
    margin: 20,
    lazyLoad:true,
    nav: false,
    dots: false,
    responsive: true,responsive:{
      0:{
        items:1,
        margin: 15
      },
      479:{
        items:1,
        margin: 15
      },
      768:{
        items:2
      },
      979:{
        items:3
      },
      1199:{
        items:3
      }
    }
    });

// brand logo
$('.brand-slider').owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:2
      },
      479:{
        items:2
      },
      768:{
        items:4
      },
      979:{
        items:4
      },
      1199:{
        items:5
      }
    }
});

// **************************************** home-9 ********************************************

/*==============================================================
// top category slider
==============================================================*/
  var swiper = new Swiper('.swiper-container#top-category', {
    slidesPerColumn: 1,
    slidesPerView: 5,
    spaceBetween: 0,
    observer: true,
    loop: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-next-cat',
        prevEl: '.swiper-prev-cat',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1599: {
        slidesPerView: 4,
      }
    }
  });

/*==============================================================
// home main slider slider
==============================================================*/
  var swiper = new Swiper('.swiper-container#home-slider-09', {
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-next-slider',
        prevEl: '.swiper-prev-slider',
    },
  });

/*==============================================================
// swiper product-tab slider
==============================================================*/

var swiper = new Swiper('.swiper-container.product-tab', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1199: {
            slidesPerView: 4
        }
    }
});

/*==============================================================
// category slider
==============================================================*/
var swiper = new Swiper('.swiper-container#category-slider', {
    slidesPerColumn: 2,
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-next-cat',
      prevEl: '.swiper-prev-cat',
    },breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1599: {
        slidesPerView: 3
      }
    },
  });
    
// testimonials 
var swiper = new Swiper('.swiper-container#testimonials', {
  slidesPerColumn: 1,
  slidesPerView: 3,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-next-testi',
    prevEl: '.swiper-prev-testi',
  },breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1599: {
      slidesPerView: 2
    }
  },
});

// featured product
var swiper = new Swiper('.swiper-container#featured-9', {
  slidesPerColumn: 1,
  slidesPerView: 5,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  },
});

// blog
 $('#blog-slider-09').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    lazyLoad:true,
    nav: false,
    dots: false,
    responsive: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      479:{
        items:1,
        margin: 15
      },
      768:{
        items:2
      },
      979:{
        items:2
      },
      1199:{
        items: 3
      }
    }
  });

 // **************************************** home-10 ********************************************
$('.home-10-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: true,
    navText : ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    dots: false,
    fade: true,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});

// product tab slider
var swiper = new Swiper('.swiper-container.home10-tab-product', {
slidesPerColumn: 2,
slidesPerView: 4,
spaceBetween: 30,
observer: true,
observeParents: true,
breakpoints: {
  0: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
},
});

// special product 
var swiper = new Swiper('.swiper-container.healthy-product', {
slidesPerColumn: 1,
slidesPerView: 4,
spaceBetween: 30,
observer: true,
observeParents: true,
breakpoints: {
  0: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
},
});

// blog
$('.blog-home10').owlCarousel({
    loop: false,
    rewind: true,
    margin: 0,
    lazyLoad:true,
    nav: false,
    dots: false,
    responsive: true,responsive:{
      0:{
        items:1
      },
      479:{
        items:1
      },
      768:{
        items:2
      },
      979:{
        items:2
      },
      1199:{
        items:3
      }
    }
});

// **************************************** home-11 ********************************************
/*==============================================================
// category slider
==============================================================*/
var swiper = new Swiper('.swiper-container#header-category', {
slidesPerColumn: 1,
slidesPerView: 5,
spaceBetween: 0,
loop: true,
observer: true,
observeParents: true,
navigation: {
  nextEl: '.swiper-next-cat',
  prevEl: '.swiper-prev-cat',
    },breakpoints: {
      0: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      },
      540: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2
      },
      1599: {
        slidesPerView: 4
      }
    },
});

/*==============================================================
// swiper product-tab slider
==============================================================*/
var swiper = new Swiper('.swiper-container.home-pro-tab-slider', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2
        },
        1299: {
            slidesPerView: 3
        }
    }
});

/*==============================================================
    home category 
==============================================================*/
var swiper = new Swiper('.swiper-container#home-category-slider', {
  slidesPerColumn: 1,
  slidesPerView: 6,
  spaceBetween: 30,
  observer: true,
  loops: true, 
  observeParents: true,
  navigation: {
    nextEl: '.swiper-prev-cat',
    prevEl: '.swiper-next-cat',
  },breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1360: {
      slidesPerView: 5
    }
  },
});

/*==============================================================
// swiper testimonials slider
==============================================================*/
var swiper = new Swiper('.swiper-container#testi-slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
});

// blog
 $('#blog-slider-11').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    lazyLoad:true,
    nav: false,
    dots: false,
    responsive: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      479:{
        items:1,
        margin: 15
      },
      768:{
        items:2
      },
      979:{
        items:3
      },
      1199:{
        items: 3
      },
      1499:{
        items: 4
      }
    }
});

});