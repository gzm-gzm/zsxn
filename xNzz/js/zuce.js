/**
 * Created by Administrator on 2018/1/8.
 */
/*登录*/
/*$("input").eq(2).click(function(){
 $.ajax({
 type:"post",
 url:"  http://localhost/QF/javascript/xNzz/phpCode/login.php",//接口
 data:{//参数
 "uname":$("#name").eq(0).val(),//第一个input的value的值
 "pwd":$("#opwd").eq(1).val()//第二个input的value的值
 },
 //需要些success 才可以接收到成功或者失败发返回值
 success:function(data){//如果成功就打印这里面的值
 console.log(data)
 },error:function(){//如果失败就打印这 请求失败
 console.log("请求失败")
 }

 })
 })*/
/*注册*/
$(function(){

    //注册  form表单验证
    //用户名 正则判断
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    var flag4 = true;
    $("#phone").keyup(function () {
        uname();
        function uname() {
            var tel = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/;
            if (tel.test($("#phone").val())) {//获取inut的值(test是用于检测是否匹配)
                $("#phone").eq(0).css("border", "solid 1px #fff");
                $(".errorMsg").eq(0).html("");
                var flag1 = true;
            }
            else {
                $("#phone").eq(0).css("border", "solid 1px #f00");
                $(".errorMsg").eq(0).html("手机号码格式不正确");
                flag1 = false;
            }
        }
    });
    //判断验证码
    $("#yzm").keyup(function () {
        var yzm = RegExp(/^\d{6}$/);
        if (yzm.test($("#yzm").val())) {//获取inut的值(test是用于检测是否匹配)
            $("#yzm").eq(0).css("border", "solid 1px #fff");
            $(".errorMsg").eq(1).html("");
            flag2 = true;
        }
        else {
            $("#yzm").eq(0).css("border", "solid 1px #f00");
            $(".errorMsg").eq(1).html("验证码格式不正确");
            flag2 = false;
        }
    });
    //请输入密码
    $("#pwd").keyup(function () {
        var reg = /^\w{6,16}$/;
        if (reg.test($("#pwd").val())) {//获取inut的值(test是用于检测是否匹配)
            $("#pwd").eq(0).css("border", "solid 1px #fff");
            $(".errorMsg").eq(2).html("");
            flag3 = true;
        }
        else {
            $("#pwd").eq(0).css("border", "solid 1px #f00");
            $(".errorMsg").eq(2).html("密码格式格式不正确,请输入6-16位 数字 字母 下划线");
            flag3 = false;
        }
    });

    //判断密码是否一致
    $(".qr_pwd>label>input").keyup(function () {
        if (($(".qr_pwd>label>input").val() == ($(".inp_pwd>label>input").val())) || ($(".inp_pwd>label>input").val() == ($(".qr_pwd>label>input").val()))) {//获取inut的值(test是用于检测是否匹配)
            $(".qr_pwd>label>input").eq(0).css("border", "solid 1px #fff");
            $(".errorMsg").eq(4).html("");
            flag4 = true;
        }
        else {
            $(".qr_pwd>label>input").eq(0).css("border", "solid 1px #f00");
            $(".errorMsg").eq(4).html("密码输入不一致 请重新输入");
            flag4 = false;

        }
    });
        //判断注册是否成功
        $(".reg_btn").click(function(){
            //console.log(1)
            if (flag1 && flag2 && flag3 && flag4) {
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1/QF/javascript/xNzz/phpCode/zuce.php",//接口
                    data: {//参数
                        "uname": $("#phone").eq(0).val(),
                        "pwd": $("#pwd").eq(0).val()
                    },
                    success: function (data) {//如果成功就打印这里面的值
                        //console.log(data);
                        var  json=JSON.parse(data)//这个是字符串转换为对象
                        if (json.status==1){
                            alert("注册成功");
                            window.location.href="denglu.html"
                        }else if(json.status==2){
                            alert("用户名已存在");
                        }else if(json.status==0){
                            alert("该用户已经注册过")
                        }
                    }, error: function (e) {//如果失败就打印这 请求失败
                        console.log("请求失败" + e.status)
                    }
                })

            }
        })

        $(".reg_btn").click(function () {
        if (($(".input_w01>label>input").val() == '') && ($(".input_w02>label>input")).val() == '' && ($(".inp_pwd>label>input")).val() == '' && ($(".qr_pwd>label>input")).val() == '') {
            alert("请补完上述选项");
            return false;
        }
        if (($("#name").val() == '') && ($("#opwd")).val() == '') {
            alert("请补完上述选项");
            return false;
        }

        //勾选该协议
        $(".reg_btn").click(function () {
            if ($(".Read").is(":checked")) {//is 是否选中checked
                $(".p_pMsg").eq(3).html("")
            } else {
                $(".p_pMsg").eq(3).html("请勾选该协议")
            }
        });
    });

       /* e.stopPropagation();*/



   /* $(".reg_btn").click(function(e){
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"http://127.0.0.1/QF/javascript/xNzz/phpCode/zuce.php",//接口
            data:{//参数
                "uname":$("#phone").eq(0).val(),//第一个input的value的值
                "pwd":$("#pwd").eq(0).val()//第二个input的value的值
                /!*"age":$("input").eq(0).val()//第三个input的value的值*!/
            },
            //需要些success 才可以接收到成功或者失败发返回值
            success:function(data){//如果成功就打印这里面的值
               /!* console.log(data)*!/

            },error:function(e){//如果失败就打印这 请求失败
                console.log("请求失败"+ e.status)
            }

        })
    })*/

//禁止复制
    $("input:password").bind("copy cut paste",function(e){
        return false;
    })

})
