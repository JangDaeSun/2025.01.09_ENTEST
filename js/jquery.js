$(function(){
    var sWidth=$("#Intro").width();
    var sCount=$("#Intro>.list .slide").length;

    function resize() {
        sWidth = $("#Intro").width();
        sCount = $("#Intro > .list .slide").length;

        $("#Intro > .list").css({
            width: sWidth * sCount
        });
    }

    resize();

    function gap() {
        const $list = $('#Card > .list');
        const $boxes = $list.find('.box');
    
        const cWidth = $list.innerWidth();
    
        const iWidth = $boxes.outerWidth(true);
    
        const iCount = Math.floor(cWidth / iWidth);
    
        const space = cWidth - (iCount * iWidth);
    
        if (iCount > 1) {
            const gap = space / (iCount - 1);
            $list.css('column-gap', `${gap}px`);
        } else {
            $list.css('column-gap', '0px');
        }
    }
    
    gap();

    $(window).on("resize", function () {
        resize();
        gap();
    });

    var sClick=false

    $("#Intro .btn .lbtn").click(function(){
        if(!sClick){
            sClick=true
            $("#Intro>.list").prepend($("#Intro>.list .slide").last())
            $("#Intro>.list").css({
                left: -sWidth
            })
            $("#Intro>.list").animate({
                left: 0
            },function(){
                sClick=false
            })
        }
    })
    $("#Intro .btn .rbtn").click(function(){
        if(!sClick){
            sClick=true
            $("#Intro>.list").animate({
                left: -sWidth
            },function(){
                sClick=false
                $("#Intro>.list").append($("#Intro>.list .slide").eq(0))
                $("#Intro>.list").css({
                    left: 0
                })
            })
        }
    })

    var autoSlide = setInterval(function() {
        if (!$('#Intro').is(':hover')) {
            $("#Intro .btn .rbtn").click();
        }
    }, 5000);

    $('#Intro').hover(function() {
        clearInterval(autoSlide);
    }, function() {
        autoSlide = setInterval(function() {
            if (!$('#Intro').is(':hover')) {
                $("#Intro .btn .rbtn").click();
            }
        }, 5000);
    });

    function Site(index, move, duration, reset) {
        $("#Custom .list .site").eq(index).animate({
            left: move
        }, duration, "linear", function() {
            $(this).css({
                left: reset
            });
            Site(index, move, duration, reset);
        });
    }
    
    Site(0, "-1000px", 4000, "100%");
    
    Site(1, "-1000px", 3000, "100%");
    
    Site(2, "-1000px", 5000, "100%");
})
