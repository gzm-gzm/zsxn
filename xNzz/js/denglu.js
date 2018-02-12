/*登录*/
$(function () {
    var flag1 = true;
    var flag2 = true;

    /*用户登录*/
    $("#name").keyup(function () {
        var tel = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/;
        if (tel.test($("#name").val())) {//获取inut的值(test是用于检测是否匹配)
            $("#name").eq(0).css("border", "solid 1px #fff");
            $(".errorMsg").eq(0).html("");
            flag1=true
        }
        else {
            $("#name").eq(0).css("border", "solid 1px #f00");
            $(".errorMsg").eq(0).html("手机号码格式不正确");
            flag1=false
        }
    });
    $("#opwd").keyup(function () {
        var tel = /^\w{6,16}$/;
        if (tel.test($("#opwd").val())) {//获取inut的值(test是用于检测是否匹配)
            $("#opwd").eq(0).css("border", "solid 1px #fff");
            $(".errorMsg").eq(0).html("");
            flag2=true
        }
        else {
            $("#opwd").eq(0).css("border", "solid 1px #f00");
            $(".errorMsg").eq(0).html("用户名或者密码不正确");
            flag1=false
        }
    });


    $(".lo_gin").click(function(){

       /* if (flag1 && flag2 ) {*/
            console.log( $("#opwd").eq(0).val())
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/QF/javascript/xNzz/phpCode/zuce111.php",//接口
                data: {//参数
                    "uname": $("#name").eq(0).val(),
                    "pwd": $("#opwd").eq(0).val()
                },
                success: function (data) {//如果成功就打印这里面的值

                    var  json=JSON.parse(data);//这个是字符串转换为对象
                    if (json.status==1){
                        alert("登录成功");
                        $.cookie('uname',json.msg,{expires:30,path:"/"})

                        /*var d=new Date();
                        d.setDate(d.getDate()+30);
                        var user=getCookie("user")
                        $.cookie("user",JSON.stringify($("#name").val()),{expires:30,path:"/"});*/

                         window.location.href="index.html"
                    }else if(json.status==2){
                        alert("用户名已存在");
                    }else if(json.status==0){
                        alert("该用户已经注册过")
                    }
                }, error: function (e) {//如果失败就打印这 请求失败
                    console.log("请求失败" + e.status)
                }
            })
            //禁止复制
       $("input:password").bind("copy cut paste",function(e){
            return false;
        })
    })














   /* $(".lo_gin").click(function () {
        $.ajax({
            type: "post",
            url: "  http://localhost/QF/javascript/xNzz/phpCode/login.php",//接口
            data: {//参数
                "uname": $("#name").eq(0).val(),//第一个input的value的值
                "pwd": $("#opwd").eq(1).val()//第二个input的value的值
            },
            //需要些success 才可以接收到成功或者失败发返回值
            success: function (data) {//如果成功就打印这里面的值
                console.log(data)
            }, error: function () {//如果失败就打印这 请求失败
                console.log("请求失败")
            }

        })
    });*/
    /*鼠标经过变换图片*/
    $(".party_login>ul>li").hover(function () {
        $(this).stop(true).animate({"background-position-x": "-47px"})
    }, function () {
        $(this).stop(true).animate({"background-position-x": "0px"})
    });



})
