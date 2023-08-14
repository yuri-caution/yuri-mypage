$(function(){
    $('.header').load('../inc/header.html')
 

    // resize, reload
    // var resizeTimer;
    // $(window).bind('resize', function( ) {
    //     window.clearTimeout( resizeTimer );
    //     resizeTimer = window.setTimeout( resizeFunction, 500 );
    // });
    // function resizeFunction(){
    //     location.reload()
    // }

    
    //section uiux
    $('.filter_tab button').on('click', function(e){
        $('.filter_tab button').removeClass('active')
        $(this).addClass('active')
        // data-id = dataset.id
        var category = e.currentTarget.dataset.id
        if(category === 'All'){
            $('.brands li').slice(0, 10).css('display', 'flex')
        }else{
            // [data-item=category]
            // $('.list li').hide().filter('[data-item = ' + category + ']').show()
            $('.brands li').hide().filter(`[data-item = ${category}]`).css('display', 'flex')
        }
    })

    // section contents
    var $slide = $('.slide_wrap');
    $slide.on('init reInit', function (event, slick) {
        //페이징이니셜
        $("#slider_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + 12);
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        //슬라이드 변경 시 페이징 변경
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#slider_paging").find(".page").text(i);
    });

    $('.slide_wrap').slick({
        slidesToShow: 2,
        prevArrow : $('.prev'), 
        nextArrow : $('.next'),
    })

    ScrollReveal().reveal('.contents h2', {
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 0
    });

    ScrollReveal().reveal('.contents #text_wrap', {
        distance: '100px',
        origin: 'left',
        easing: 'ease-in-out',
        delay: 200
    });
        
    ScrollReveal().reveal('.contents .view_more', {
        distance: '10px',
        origin: 'left',
        easing: 'ease-in-out',
        delay: 200
    });
    
    ScrollReveal().reveal('.slide_wrap', {
        distance: '30px',
        origin: 'right',
        easing: 'ease-in-out',
        delay: 300
    });
    



    // section graphic
    $('.tab_slick').slick({
        centerMode: true,
        centerPadding: '450px',
        initialSlide: 1,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        draggable:false
    })

    $('.prevArrow').click(function(){
        var prevName = $('.slick-center').find('div > div').attr('class');
        console.log(prevName)
        if(prevName == 'ps'){
            $('.scroll_area.ps').show().siblings().hide()
        }else if(prevName == 'fg'){
            $('.scroll_area.fg').show().siblings().hide()
        }else{
            $('.scroll_area.ai').show().siblings().hide()
        }
    })

    $('.nextArrow').click(function(){
        var nextName = $('.slick-center').find('div > div').attr('class');
        console.log(nextName)
        if(nextName == 'ps'){
            $('.scroll_area.ps').show().siblings().hide()
        }else if(nextName == 'fg'){
            $('.scroll_area.fg').show().siblings().hide()
        }else{
            $('.scroll_area.ai').show().siblings().hide()
        }
    })

    
    ScrollReveal().reveal('.graphic h2', {
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 0
    });
    
    ScrollReveal().reveal('.graphic .ps .col_01', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 50
    });
    
    ScrollReveal().reveal('.graphic .ps .col_02', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 100
    });
    
    ScrollReveal().reveal('.graphic .ps .col_03', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 150
    });
    
    ScrollReveal().reveal('.graphic .ps .col_04', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 200
    });
        



})