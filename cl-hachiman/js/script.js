$(function() {

});

// <!-- 出現・消える系 -->
jQuery(window).on('load',function(){jQuery(function($) {
    // 出現
    //var fix_mimi = jQuery("#mimitab");
    var fix_PageTop = jQuery("#PageTop");
    var fix_NavSp = jQuery("nav.sp");
    var ftr_elm = jQuery(".ftr");
    jQuery(window).scroll(function() {
        /*if(jQuery(window).scrollTop() >= 680) {
            fix_mimi.addClass("show");
        } else {
            fix_mimi.removeClass("show");
        }*/
        if(jQuery(window).scrollTop() >= 360) {
            fix_PageTop.addClass("show");
            fix_NavSp.addClass("show");
        } else {
            fix_PageTop.removeClass("show");
            fix_NavSp.removeClass("show");
        }
    // 消える
        ftr_elm.each(function () {  
            var ftr_elmOffset = jQuery(this).offset().top;
            var ftr_scrollPos = jQuery(window).scrollTop();
            var ftr_wh = jQuery(window).height();

            if(ftr_scrollPos > ftr_elmOffset - ftr_wh ){
                //fix_mimi.removeClass("show");
                fix_PageTop.removeClass("show");
            }
        });
    });
    // #PageTop押したら
    jQuery(document).on('click','#PageTop.show',function () {
        //fix_mimi.removeClass("show");
        fix_PageTop.removeClass("show");
        fix_NavSp.removeClass("show");

        jQuery('body,  html').animate({
            scrollTop: 0
        },   500);
        return false;
    });
});
});

// <!-- SP スマホメニュー（gnav.php）-->
$("nav.sp .nav > *").on("click",function(){
    var $th = $(this).index();
    $("nav.sp .nav > *").removeClass("nav-active");
    $('.nav-active_delete').fadeIn('');
    $(this).addClass("nav-active");

});
// ドロワー消し方
$('.nav-active_delete').on('click', function() {
    $('.nav-active_delete').fadeOut('');
    $("nav.sp .nav > *").removeClass("nav-active");
    $("nav.sp .nav > a:first-of-type").addClass("nav-active");
});
// ドロワー内タブ切り替え
$(".nav-tab > div").on("click",function(){
    var $th = $(this).index();
    $(".nav-tab > div").removeClass("tab-active");
    $(".nav-panel > div").removeClass("tab-active");
    $(this).addClass("tab-active");
    $(".nav-panel > div").eq($th).addClass("tab-active");
});

/*
$(function(){
    var state = false;
    var pos;
    $(‘nav.sp .nav-active .nav-hid’).click(function(){
    if (state == false) {
        pos = $(window).scrollTop();
        $(‘body’).addClass(‘fixed’).css({‘top’: -pos});
        state = true;
    } else {
        $(‘body’).removeClass(‘fixed’).css({‘top’: 0});
        window.scrollTo(0, pos);
        state = false;
    }
    });
});

*/
// <!-- PCナビゲーションfixed（gnav.php）-->
$(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 480) {
        // ページトップ以外の処理
            $("nav.pc").addClass('fixed');
                } else {
        // ページトップの処理
            $("nav.pc").removeClass('fixed');
        }
    });
});

// <!-- タブコンテンツ（implant.html）-->
$(".tab").on("click",function(){
    var $th = $(this).index();
    $(".tab").removeClass("active");
    $(".board").removeClass("active");
    $(this).addClass("active");
    $(".board").eq($th).addClass("active");
});


