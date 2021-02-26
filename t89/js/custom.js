
$(document).ready(function () {
  $('.head-top .language .name').click(function(){
    $('.menu-language').toggleClass('active')
  })
  var slbn = $('.slide-banner .slider').lightSlider({
    item: 8,
    pager:false,
    slideMargin:20,
    responsive : [
      {
        breakpoint:1025,
        settings: {
            item:7,
          }
    },{
          breakpoint:991,
          settings: {
              item:6,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:4,
            }
      }
  ],
  onSliderLoad: function() {
    $('.slide-banner .slider').removeClass('cS-hidden');
} 
  })
  $('.prev-slbn').click(function() {
    slbn.goToPrevSlide();
  })
  $('.next-slbn').click(function() {
    slbn.goToNextSlide();
  })
  var sltprj = $('.list-top-prj .slider').lightSlider({
    item: 3,
    pager:false,
    slideMargin:20,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:2,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:1,
            }
      }
  ],
  onSliderLoad: function() {
    $('.list-top-prj .slider').removeClass('cS-hidden');
} 
  })
  $('.prev-sltprj').click(function() {
    sltprj.goToPrevSlide();
  })
  $('.next-sltprj').click(function() {
    sltprj.goToNextSlide();
  })
  var slritem = $('.slide-right .slide-pc .slider').lightSlider({
    item: 3,
    pager:false,
    slideMargin:0,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:2,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:1,
            }
      }
  ],
  onSliderLoad: function() {
    $('.slide-right .slide-pc .slider').removeClass('cS-hidden');
} 
  })
  $('.prev-slr').click(function() {
    slritem.goToPrevSlide();
  })
  $('.next-slr').click(function() {
    slritem.goToNextSlide();
  })
  var slitmn = $('.list-it .slider').lightSlider({
    item: 4,
    pager:false,
    slideMargin:20,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:3,
            }
      },
      {
          breakpoint:767,
          settings: {
              item:2,
              slideMargin:12,
            }
      }
  ],
  onSliderLoad: function() {
    $('.list-it .slider').removeClass('cS-hidden');
} 
  })
  $('.prev-lit').click(function() {
    slitmn.goToPrevSlide();
  })
  $('.next-lit').click(function() {
    slitmn.goToNextSlide();
  })
  var review = $(".slider-cmt").lightSlider({ item: 3, slideMargin: 20, easing: "cubic-bezier(0.25, 0, 0.25, 1)", loop: !0, pager: !1, enableDrag: !1, enableTouch: !1, onSliderLoad: function () { $(".slider-cmt").removeClass("cS-hidden"), 
        $(".detail-rv'").removeClass("active"); var e = $(".slider-cmt .lslide.active").attr("href"); $(e).addClass("active") } });
    var comment = $(".slider-comment .slider").lightSlider({ item: 1, easing: "cubic-bezier(0.25, 0, 0.25, 1)", loop: !0, pager: !1, mode: "fade", enableDrag: !1, enableTouch: !1, onSliderLoad: function () { $(".slider-comment .slider").removeClass("cS-hidden") } });
    $(".prevrv").click(function () { comment.goToPrevSlide(), review.goToPrevSlide() }), $(".nextrv").click(function () { comment.goToNextSlide(), review.goToNextSlide() });
    var slsp = $('.list-sup .slider').lightSlider({
      item: 5,
      pager:false,
      slideMargin:70,
      responsive : [
        {
          breakpoint:1025,
          settings: {
              item:4,slideMargin:35,
            }
      },{
            breakpoint:991,
            settings: {
                item:3,slideMargin:20,
              }
        },
        {
            breakpoint:767,
            settings: {
                item:2,slideMargin:20,
              }
        }
    ],
    onSliderLoad: function() {
      $('.list-sup .slider').removeClass('cS-hidden');
  } 
    })
    $('.prev-slsp').click(function() {
      slsp.goToPrevSlide();
    })
    $('.next-slsp').click(function() {
      slsp.goToNextSlide();
    })
    $('.imgdt-ct .slider').lightSlider({
      item: 5,
      pager:false,
      slideMargin:30,
      responsive : [
        {
          breakpoint:1025,
          settings: {
              item:4,slideMargin:20,
            }
      },{
            breakpoint:991,
            settings: {
                item:3,
              }
        },
        {
            breakpoint:767,
            settings: {
                item:2,
              }
        }
    ],
    onSliderLoad: function() {
      $('.imgdt-ct .slider').removeClass('cS-hidden');
    }
  }) 
  if ($(window).width() < 1025) {
    $('.other-news .slider').lightSlider({
      item: 3,
      slideMargin: 15,
      pager:false,
      responsive : [
        {
          breakpoint:991,
          settings: {
              item:2,
            }
      },
        {
          breakpoint:767,
          settings: {
              item:2,
            }
      }]
    })
  } 
  if ($(window).width() < 991) {
    $('.list-item-hots .slider').lightSlider({
      item: 3,
      slideMargin: 0,
      pager:false,
      responsive : [
        {
          breakpoint:767,
          settings: {
              item:2,
            }
      }]
    })
    $('.list-othitem .slider').lightSlider({
      item: 3,
      slideMargin: 15,
      pager:false,
      responsive : [
        {
          breakpoint:767,
          settings: {
              item:2,
            }
      }]
    })
    $('.list-qttk .slider').lightSlider({
      item: 3,
      slideMargin: 20,
      pager:false,
      responsive : [
        {
          breakpoint:767,
          settings: {
              item:2,slideMargin:10
            }
      }]
    })
    $('.sticker-menu').click(function() {
      $(this).toggleClass('active')
      $('.head-bottom').toggleClass('active')
      $('.bg-black').toggleClass('active')
    })
    $('.bg-black').click(function() {
      $(this).removeClass('active')
      $('.head-bottom').removeClass('active')
      $('.sticker-menu').removeClass('active')
    })
    $('.tog-show-sub').click(function() {
      $(this).toggleClass('active')
      $(this).parents('li').children('.sub-menu').slideToggle()
    })
  }
  var newssl = $('.list-news-sl .slider').lightSlider({
    item:1,
    slideMargin:0,
    pager:false,
    mode:"fade",
  })
  $('.prev-nsl').click(function() {
    newssl.goToPrevSlide();
  })
  $('.next-nsl').click(function() {
    newssl.goToNextSlide();
  })
  if ($(window).width() < 767) {
    var slidemb = $('.slide-mobile .slider').lightSlider({
      item: 2,
      slideMargin: 0,
      pager :false,
    })
    $('.prev-slrmb').click(function() {
      slidemb.goToPrevSlide();
    })
    $('.next-slrmb').click(function() {
      slidemb.goToNextSlide();
    })
    $('.list-othprjs .slider').lightSlider({
      item: 1,
      slideMargin: 10,
      pager :false,
      auto:true,
    })
    $('.list-ques .slider').lightSlider({
      item: 1,
      slideMargin: 10,
      pager :false,
      auto:true,
    })
    
  }
  $('.tit-scroll a').each(function() {
    if($(this).hasClass('active')) 
        var id = $(this).data('id');
        $('#' + id).fadeIn();
});
$('.tit-scroll a').click(function (a) {
    a.preventDefault();
    $('.tit-scroll a').removeClass('active');
    var id2 = $(this).data('id');
    $(".item-dtid").hide();
    $('#' + id2).slideToggle();
    $(this).addClass('active');
});
var slbig = $('.slider-glr .slider').lightSlider({
  item:1,
  slideMargin:0,
  pager:false,
});
var slmn = $('.slide-mini .slider').lightSlider({
  item:3,
  slideMargin: 10,
  pager:false,
});
$(".prev-glr").click(function () { slmn.goToPrevSlide(), slbig.goToPrevSlide() }), $(".next-glr").click(function () { slmn.goToNextSlide(), slbig.goToNextSlide() });
$('.slide-mini .item').each(function() {
  if($(this).hasClass('active'))
      $('.slider-glr .item').removeClass('active')
      var id = $(this).data('img');
      $('#' + id).addClass('active');
});
var slnv_1 = $('.slide-dn-1 .slider').lightSlider({
  item:4,
  pager:false,
  slideMargin: 25,
  responsive : [
    {
        breakpoint:991,
        settings: {
            item:3,slideMargin:20,
          }
    },
    {
        breakpoint:767,
        settings: {
            item:1,slideMargin:12,
          }
    }
],
})
$('.p-sldn-1').click(function() {
  slnv_1.goToPrevSlide();
})
$('.n-sldn-1').click(function() {
  slnv_1.goToNextSlide();
})
var slnv_2 = $('.slide-dn-2 .slider').lightSlider({
  item:4,
  pager:false,
  slideMargin: 25,responsive : [
    {
        breakpoint:991,
        settings: {
            item:3,slideMargin:20,
          }
    },
    {
        breakpoint:767,
        settings: {
            item:1,slideMargin:12,
          }
    }
],
})
$('.p-sldn-2').click(function() {
  slnv_2.goToPrevSlide();
})
$('.n-sldn-2').click(function() {
  slnv_2.goToNextSlide();
})
  
})
if ($(window).width() > 991) {
  if ($('header').length) {
    fixmenu = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            $('.head-bottom').addClass('fixed');
        } else {
            $('.head-bottom').removeClass('fixed');
        }
    };
    fixmenu();
    $(window).on('scroll', function () {
        fixmenu();
    });
}
}
else{
  if ($('header').length) {
    fixmenu = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 150) {
            $('.head-middle').addClass('fixed');
        } else {
            $('.head-middle').removeClass('fixed');
        }
    };
    fixmenu();
    $(window).on('scroll', function () {
        fixmenu();
    });
}
}
fixintro = function () {
  var headfixx = $('header').height();
  if ($('.tab-scroll').length > 0) {
      var tigger = $('.menutop-page').offset().top - headfixx;
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 300) {
          $('.tab-scroll').addClass('fixed');
      } else {
          $('.tab-scroll').removeClass('fixed');
      }
      $('.tab-scroll a').each(function () {
          var tag = $(this).data('tag');
          if (tag.length > 0) {
              var offset = $(tag).offset().top - 100;
              if (scrollTop >= offset) {
                  $('.tab-scroll a').removeClass('active');
                  $('.tab-scroll a[data-tag= ' + tag + ']').addClass('active');
              }
          }
      });
  }
};
fixintro();
$(window).on('scroll', function () { fixintro(); });
$(document).ready(function () {
  $('.scroll-gt.tab-scroll a').click(function () {
      var tag = $(this).data('tag');
      if (tag.length > 0) {
          var offset = $(tag).offset().top - 200;
          $("html,body").animate({ scrollTop: offset }, 700);
          $('.tab-scroll a').removeClass('active');
          $(this).addClass('active');
      }
  });
})
$(document).ready(function () {
  $('.csl-ct .item .text span').counterUp({ delay: 10, time: 1100 });
})