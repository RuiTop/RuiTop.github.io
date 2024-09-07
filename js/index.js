$(function () {

    //鼠标滑过事件
    $(".menu .nav>li").hover(function () {
        //鼠标滑过时执行的操作
        $(this).children("dl").stop(true, true).slideDown("fast");
    }, function () {
        //鼠标移出执行的操作
        $(this).children("dl").stop(true, true).slideUp("fast");
    });

    //一楼鼠标滑过动画
    $(".floor1 .pic .cover").parent().hover(function () {
        //遮罩层升上来
        $(this).children(".cover").stop(true, true).animate({
            top: 0
        }, 300);

    }, function () {
        $(this).children(".cover").stop(true, true).animate({
            top: "100%"
        }, 300);
    });

    //二楼动画
    $(".floor2 .pic>div").hover(function () {
        $(this).children(".cover").stop(true, true).animate({
            opacity: 0
        }, 400);

        $(this).siblings().children(".cover").stop(true, true).animate({
            opacity: 0.7
        }, 400);

    }, function () {
        //do nothing...
    });

    $(".floor2 .pic").hover(function () { }, function () {
        $(this).children().children(".cover").stop(true, true).animate({
            opacity: 0
        }, 400);
    });


    //新闻资讯，更换成系统当前日期
    let now = new Date();
    let date = now.getDate();
    if (date < 10) {
        date = "0" + date;
    }
    $(".floor3 .pic .cover>i").text(date);

    //新闻资讯动画
    $(".floor3 ul>li").hover(function () {
        $(this).find(".cover").stop(true, true).fadeOut("normal");
    }, function () {
        $(this).find(".cover").stop(true, true).fadeIn("normal");
    });


    //文档滚动事件
    $(window).scroll(function () {
        let dx = $(document).scrollTop();//可以获取垂直方向上文档滚动的距离

        if (dx >= 200) {
            //logo隐藏，菜单左移
            $(".menu .logo").fadeOut("normal");

            $("header .nav").stop(true, false).animate({
                left: 0
            }, "normal");

            $(".gotoTop").stop(true, false).fadeIn("normal");

        } else {
            //菜单右移，logo显示
            $("header .nav").stop(true, false).animate({
                left: 200
            }, "normal");

            $(".menu .logo").fadeIn("normal");


            $(".gotoTop").stop(true, false).fadeOut("normal");
        }


    });



    //点击回到顶部按钮
    $(".gotoTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "normal")
    });



    //初始化轮播插件
    new Swiper('.swiper', {
        loop: true, // 循环模式选项
        autoplay: true,
        //effect:"fade",

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

});