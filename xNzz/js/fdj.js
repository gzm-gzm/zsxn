/*放大镜*/
$(function(){


$(".SmallImgList>ul>li>img").click(function () {
    var index = $(this).index(".SmallImgList>ul>li>img");//获取这个下标
    $(".big>img").attr("src", "images/fdj_" + (index + 1) + ".jpg");//更换路径
    console.log(index);
});
/*放大镜*/
//放大系数
var scale = $(".big").width() / $(".border").width();//最大图片的宽度除以最大的div的宽度
$(".big").mousemove(function (e) {//鼠标移动到大的div的时候
    $(".border").show();//显示小区域
    $(".fdj_wrap_fdj").show();//显示大区域
    var x = e.pageX - $(".big").offset().left - $(".border").width() / 2;//鼠标的位置-大盒子的left的值-显示小区域的宽度除以2
    console.log("x的值是" + x);
    var y = e.pageY - $(".big").offset().top - $(".border").height() / 2;//鼠标的位置-大盒子的top的值-显示小区域的高度除以2
    console.log("Y的值是" + y);
    //控制不超出左右边界
    if (x < 0) {
        x = 0;
    } else if (x > $(".big").width() - $(".border").width()) {//否则如果x>大div的宽度再-显示小区域的宽度
        x = $(".big").width() - $(".border").width();// 然后x=大div的宽度-显示小区域的宽度
        console.log(x);
    }
    //控制不超出上下边界
    if (y < 0) {
        y = 0;
    } else if (y > $(".big").height() - $(".border").height()) {//否则如果x>大div的宽度再-显示小区域的高度
        y = $(".big").height() - $(".border").height();// 然后y=大div的宽度-显示小区域的高度
    }
    //小区域移动
    $(".border").css({left: x, top: y});
    //大图片移动
    console.log(scale)
    $(".fdj_img").css({left: -scale * x, top: -scale * y});
    //移除小图的时候 隐藏小区域和大区域
    $(".big").mouseleave(function () {
        $(".border").hide()
        $(".fdj_wrap_fdj").hide()
    })

})

    //先获取商品(list.html的页面)详情的id
    var params=location.search;
  /*  var myid=getParam(params,"id");*/


    //获取json中匹配id的商品数据
   /* $.get("json/list.json",function(data){
        var arr=data.data;
        for(var i=0;i<arr.length;i++){
            var obj=arr[i];
            if (obj.id==myid){//如果id跟obj的id相同 那就是要找的数据
                refreshUI(obj);
            }
        }
        //刷新一部分页面
        function refreshUI(obj){
            /!*===========================================================================================================*!/
        }

        function getParam(paramStr,name){
            paramStr=paramStr.substring(1);//截取id前面的字符串
            var arr=paramStr.split("&");//切割&
            for(var i0;i<arr.length;i++){
                var str2=arr[i];//id=101

                var arr2=str2.split("=");//在切割＝
                if(arr2[0]=name){
                    return arr2[1]
                }
            }
            return "";
        }
    })*/

    $(".fun").eq(0).click(function(){
        location.href="gwc.html";
    })

    /*$(".fun").on("click","a",function(){
        var index=$(this).parent().index(".fun a")
        //console.log(index)
        var obj=arr[index];
    })*/


});
