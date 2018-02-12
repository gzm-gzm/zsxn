$(function(){
    $(".del").one("click",function(){
     /*   $(".shopcar_content_shop_list").css("display","none");
        $(".shopcar_footer_right_2").html("");*/
       
        var cookiearr= $.cookie("cart")?josn.parse($.cookie("cart")):[]
        for (var i=0;i<cookiearr.length;i++){
            if (cookiearr[i].id==obj.id){
                cookiearr[i].num++;
                break;
            }
        }
        //如果for循环 循环完成,没有进入if 则不存在相同商品, 就添加新商品到数组
        if (i==cookiearr.length){
            var myobj={
                id:obj.id,
                img:obj.img,
                content:obj.content,
                num:1//数量
            };
        }
        cookiearr.push(myobj)
        $.cookie("cart",JSON.stringify(cookiearr),{expires:30,path:"/"});
        var li1= $("<li></li>").appendTo(".cart_toast");
        ("<a><img src='http://img.zbird.cn/picdb/230/45/23045_303_.jpg'></a>").appendTo(".shopcar_content_shop_list_1")
    })

});
