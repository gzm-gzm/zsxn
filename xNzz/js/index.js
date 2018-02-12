/**
 * Created by Administrator on 2017/12/26 0026.
 */
$(function () {
    /*首页大banner*/
    /*先获取json图片*/
    $.get("json/lunbo.json", function (lunbodata) {//先用get获取路径
        obj = lunbodata;

        var arr = obj.lunbodata;//lunbodata数组
        //遍历数组,得到数组里的每个对象obj1
        for (var i = 0; i < arr.length; i++) {//通过for循环 将obj1赋值给arr 的for循环里
            var obj1 = arr[i]
            // console.log(obj1)
            //创建li节点,并添加到list1里面
            $("<li><img src=" + obj1.img + "></li>").appendTo(".list001");
            //先动态创建span 在让span节点等于span这个变量
            var li = $("<li></li>").appendTo(".list002")
            //然后在判读如果上面的for循环 i=0的话 就让第一个span添加on的样式
            if (i == 0) {
                li.addClass("on");
            }
        }
        lunbo()
    });
    function lunbo() {
        var list1 = $(".list001");
        var list2 = $(".list002");
        var li1 = $(".list001 li");
        var li2 = $(".list002 li");

        //复制第一张图到最后
        li1.first().clone(true).appendTo(list1);
        var size = $(".list001 li").size();
        //console.log(size);
        var liW = li1.width();
        list1.width(liW * size);
        //console.log(liW);
        // console.log(list1.width(liW * size))

        //开启定时器
        var i = 0;
        var timer = setInterval(function () {
            i++;
            move()
        }, 2000);
        //鼠标移入
        $(".list001 ,.next ,.prev").hover(function () {
                //移入, 关闭定时器
                clearInterval(timer);
            },
            function () {
                //移出, 重新开启定时器
                timer = setInterval(function () {
                    i++;
                    move();
                }, 2000);
            });
        //封装的方法
        function move() {
            if (i < 0) {
                list1.css("left", -liW * (size - 1));
                i = size - 2
            }
            if (i >= size) {
                list1.css("left", 0);
                i = 1;
            }
            list1.stop().animate({left: -i * liW}, 500);
            //给小圆点添加样式
            li2.eq(i).addClass("on").siblings().removeClass("on");
            if (i == size - 1) {
                li2.eq(0).addClass("on").siblings().removeClass("on");
            }
        }

        $(".prev").click(function () {
            i--;
            move();
        })
        //下一页
        $(".next").click(function () {
            i++;
            move();
            //alert("s")
        })
    }

    /*鼠标经过导航的时候*/
    $(function () {
        $(".nav_left>a,.menu_all").hover(function () {
            $(".menu_all").eq($(this).index()).show()

        }, function () {
            $(".menu_all").eq($(this).index()).hide()
        })
    });

    /*设计订婚戒指*/
    $(".z").click(function () {
        if ($(".min_banner > ul").offset().left <= 0) {

            $(".min_banner > ul").css({left: 0})
        }

        $(".min_banner > ul").stop(true).animate({left: "-=240px"})
    });
    $(".y").click(function () {
        if ($(".min_banner > ul").offset().left >= -240) {

            $(".min_banner > ul").css({left: -240});
            // console.log(2)
        }
        $(".min_banner > ul").stop(true).animate({left: "+=240px"})

    });


    /*系列产品*/
    $(".goods_nav>ul>li").hover(function () {
        $(this).css("color", "#000").siblings().css("color", "#fff");//给当前移入的时候设置黑色 然后兄弟节点移除的时候设置白色
        $(".goods_nav_tab").eq($(this).index()).show().siblings().hide()

    });
    /*鼠标经过变换图片*/
    $(".s_h_show>a>i").hover(function () {
        $(this).css("background-position-y", "-50px")
    }, function () {
        $(this).css("background-position-y", "0px")
    })


    //鼠标经过有动画  品牌故事1
    //$(".Story a:nth-child(1)").hover(function () {
    //    $(".Story a:nth-child(1) img").animate({width: 732, height: 653})
    //}, function () {
    //    $(".Story a:nth-child(1) img").animate({width: 722, height: 643})
    //})
    //鼠标经过有动画  品牌故事2
    //$(".Story a:nth-child(2)").hover(function () {
    //    $(".Story a:nth-child(2) img").animate({width: 452, height: 653})
    //}, function () {
    //    $(".Story a:nth-child(2) img").animate({width: 440, height: 643})
    //})
    //鼠标经过有动画  品牌故事3
    //$(".Story a:nth-child(3)").hover(function () {
    //    $(".Story a:nth-child(3) img").animate({width: 1280, height: 332})
    //}, function () {
    //    $(".Story a:nth-child(3) img").animate({width: 1180, height: 322})
    //})

    //当鼠标失去焦点的时候和鼠标获取焦点的时候   发送地址
    $(".input_fs").on({
        "focus": function () {
            $(".fs").css("display", "block")
        }, "blur": function () {
            $(".fs").css("display", "none")
        }
    })
    /*体验店*/

    $("._qh_max>a").click(function () {
        //为啥index还要加当前的类名  因为 a下面还有span节点  所以要指定的更加完美
        $(".ty_center").eq($(this).index("._qh_max a")).show().siblings().hide();
    })

    /*底部文字滚动*/
    //$(".script_gd").slideUp(1000, function () {
    //    $(".g_d").eq($(this).index()).show().siblings().hide();
    //})

    /*鼠标经过的时候出现二维码*/
    $("#ewm_pro").on({
        "mousemove": function () {
            $(".ewm").css("display", "block")
        }, "mouseout": function () {
            $(".ewm").css("display", "none")
        }
    })


    $("#crl_topo").on({
        "mouseenter": function () {
            $(this).css("background-position-x", "-40px")
        }, "mouseout": function () {
            $(this).css("background-position-x", "0px")
        }, "click": function () {
            $("html").scrollTop(0);
        }

    })

    /*返回顶部*/
    //动画版本的返回顶部
    //先默认隐藏
    $("#crl_topo").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {//先判断当前如果距离浏览器顶部大于100px
            $("#crl_topo").fadeIn();//就淡入
        } else {
            $("#crl_topo").fadeOut();//淡出
        }
    })
    $("#crl_topo").click(function () {
        $('html,body').animate({scrollTop: 0}, 300);
    })
    /*list页面*/


    $("#show").click(function () {
        $("#show").html("收起高级搜索");
        $(".li_r_none").toggle();//点击显示隐藏
    })

    /*箭头切换*/
    $(".hidden").hide();
    $(".show").click(function () {
        $(this).siblings().toggle();
    })


    day_1()
    function day_1() {
        $(".show1 li").first().clone(true).appendTo(".show1");
        var size = $(".show1 li").size();
        //console.log(size);
        $(".show1").width(352 * size);
        // console.log($(".show1").width())
        //开启定时器
        var j = 0;
        var timers = setInterval(function () {
            j++;
            moves();
        }, 1000);

        function moves() {
            if (j < 0) {
                $(".show1").css("left", -352 * (size - 1));
                j = size - 2;
            }
            if (j >= size) {
                $(".show1").css("left", 0);
                j = 1;
            }
            $(".show1").stop().animate({left: -j * 352}, 500);

        }

        $(".show_all").hover(function () {
                //console.log("mouseenter");
                clearInterval(timers);
            },
            function () {
                //console.log("mouseleave");
                timers = setInterval(function () {
                    j++;
                    moves();
                }, 1000);
            })
    }

    //第二个轮播
    day_2()
    function day_2() {
        $(".list_1_banner li").first().clone(true).appendTo(".list_1_banner");
        var size = $(".list_1_banner li").size();
        //console.log(size);
        $(".list_1_banner").width(480 * size);
        //console.log($(".list_1_banner").width())
        //开启定时器
        var j = 0;
        var timers = setInterval(function () {
            j++;
            moves();
        }, 3000);

        function moves() {
            if (j < 0) {
                $(".list_1_banner").css("left", -480 * (size - 1));
                j = size - 2;
            }
            if (j >= size) {
                $(".list_1_banner").css("left", 0);
                j = 1;
            }
            $(".list_1_banner").stop().animate({left: -j * 480}, 500);

        }

        $(".se").hover(function () {
                //console.log("mouseenter");
                clearInterval(timers);
            },
            function () {
                //console.log("mouseleave");
                timers = setInterval(function () {
                    j++;
                    moves();
                }, 3000);
            })
    }

    //第二个轮播
    //复制第一张图到最后
    day_3();
    function day_3() {
        $(".list_1 li").first().clone(true).appendTo(".list_1");
        var size = $(".list_1 li").size();
        // console.log(size)
        $(".list_1").width(480 * size);
        //console.log($(".list_1").width())
        //开启定时器
        var i = 0;
        var timer = setInterval(function () {
            i++;
            move();
        }, 2000);

        function move() {
            if (i < 0) {
                $(".list_1").css("left", -480 * (size - 1));
                i = size - 2;
            }
            if (i >= size) {
                $(".list_1").css("left", 0);
                i = 1;
            }
            $(".list_1").stop().animate({left: -i * 480}, 500);

            $(".list_2 li").eq(i).stop(true).addClass("li_act").siblings().stop(true).removeClass("li_act");
            if (i == size - 1) {
                $(".list_2 li").eq(0).addClass("li_act").siblings().removeClass("li_act");
            }
        }

        $(".list_2 li").mouseenter(function () {
            i = $(this).index();
            move();
        });
        $(".new_img").hover(function () {
                //console.log("mouseenter");
                clearInterval(timer);
            },
            function () {
                //console.log("mouseleave");
                timer = setInterval(function () {
                    i++;
                    move();
                }, 2000);
            })
    }

    /*文字滚动*/
    day_4();
    function day_4() {
        var size = $(".gd002 p").size();//获取.gd002 p的长度
        //console.log(size)
        $(".gd002").height(36 * size);
        //console.log($(".gd002").width())
        //开启定时器
        var i = 0;
        var timer = setInterval(function () {
            i++;
            move();
        }, 2000);

        function move() {
            if (i < 0) {
                $(".gd002").css("top", 36 * (size - 1));
                i = size - 2;
            }
            if (i >= size) {
                $(".gd002").css("top", 0);
                i = 1;
            }
            $(".gd002").stop().animate({top: -i * 36}, 500);
        }

        $(".gd002 p").mouseenter(function () {
            i = $(this).index();
            move();
        })
        $(".gd002 p").eq(i).hover(function () {
                //console.log("mouseenter");
                clearInterval(timer);
            },
            function () {
                //console.log("mouseleave");
                timer = setInterval(function () {
                    i++;
                    move();
                }, 2000);
            })
    }









})