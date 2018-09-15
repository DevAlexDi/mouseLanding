
$(document).ready(function () {
    
    $('.slider-baner').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    })
    $('.js-scroll').click(function (e) {
        e.preventDefault;
        var offsetPx = 0;
        if ($(this).attr('href')) {
            var el = $(this).attr('href');
            if(el == "#about"){
                offsetPx = 60;
            }
            if(el == "#faq"){
                offsetPx = -120;
            }
            $('body, html').animate({
                scrollTop: $(el).offset().top - offsetPx
            }, 700);
            return false;
        }
    });
    
    
});
    


$(window).load(function() {
    var win = $(window);
    

    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .main-baner, .sec-lvl-2__flex__left__text, .sec-lvl-3__flex__right__text .anim-none-padd,.sec-lvl-4__flex__left__text, .sec-lvl-3__5 .sec-lvl-3__flex,.sec-lvl-6__flex, .sec-lvl-7__flex").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;

        });
    }
    
    scrFunc();
    
    $(window).scroll(function(){
         scrFunc();
        
    });
    
    
});

