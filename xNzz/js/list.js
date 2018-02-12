$(function () {
/*

    //1 使用ajax获取后台json数据
    $.ajax({

        url: "http://127.0.0.1/QF/javascript/xNzz/phpCode/list.php",//接口
        success: function (data) {
            console.log(data);
            //2 使用json数据创建节点
            var arr=JSON.parse(data);
            for (var i=0;i<arr.length;i++){
                var obj=arr[i]//每个商品详情的数据
            }
        },
        error: function () {
            alert("请求失败,请重试")
        }
    });
*/
    //获取数据
    //先设置全局变量 让后面的方法使用
    var arr=[];
    $.get("json/list.json", function (listdata) {//先用get获取路径
        obj = listdata;
       arr = obj.listdata;//list数组
        //遍历数组,得到数组里的每个对象obj1
        for (var i = 0; i < arr.length; i++) {//通过for循环 将obj1赋值给arr 的for循环里
            var obj1 = arr[i];//商品每个对象
           // console.log(obj1.content);
            //创建li节点,并添加到.goods里面
            var li = $("<li></li>").appendTo(".goods");

            $('<a href="javascript:;">' +
                "<img src=" + obj1.img + ">" +
                '<span>' + obj1.content + '</span>' +
                '</a>').appendTo(li);
        }
    });
    //事件委托
    //添加点击事件
    $(".goods").on("click","li",function(){
        //先获取当前点击商品的id
        var index= $(this).index();//点击li的下标
        var obj=arr[index];//所点击的商品数据
        //console.log(obj.id);//获取商品的id
      //添加新商品
        location.href="fdj.html?id="+obj.id;//把id传到fdj.html里面
        
        
        //获取数据，显示在商品详情上
//先获取商品的id
	var params = location.search;
	//console.log(params); //"?id=103&w=22"
	var myId = getParam(params, "id");
	//console.log(myId);

	var myObj = {};
	//获取json中匹配id的商品数据
	$.get("json/gwc.json", function(responseDate) {

		var arr = responseDate.listdata;
		//console.log(arr);
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
		//	console.log(obj);  	
		//console.log(obj.imgs1) 	
			if(obj.id == myId) {
				//obj对象就是当前商品详情的数据
				myObj = {
					id: obj.id,
					content: obj.content,
					jg:obj.jg,
					
					img: obj.img,					
					num: 1, //商品数量
					content:obj.content,
					checked: true //选中状态 
					
				}
				//	console.log(myObj.price)
				//刷新页面的一部分
				refreshUI(obj);
			} 
		}
		

		

 //首页头部小购物车头部显示商品
	//console.log($.cookie("cart"))
	//先获取cookie存的数据，进行解析后，遍历
	if($.cookie("cart")){
		
		var arr=JSON.parse($.cookie("cart"));
		//console.log(arr)
		var sum=0;//头部小购物车件数的显示数量
		for(var i=0;i<arr.length;i++){		
		var obj=arr[i];
		sum+=obj.num;
		$(".num_one").html(sum)//头部小购物车件数的显示数量
		//console.log(sum)
		//动态创建节点，并追加到cart_toast里面
		var li1= $("<li></li>").appendTo(".cart_toast");
		var  toast_img=$("<div class='toast_img'></div>").appendTo(li1);
		$("<img src="+obj.img+" />").appendTo(toast_img);
		var toast_content=$("<div class='toast_content'>"+obj.content+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_num'>"+obj.num+"</div>").appendTo(li1);
		var toast_num=$("<div class='toast_price'><strong>"+obj.unit+obj.showprice+"</strong><br><a  class='del' href='javascript:;'>【删除】</a>").appendTo(li1);

										}
						}
	
	//del删除所选节点；
	else{
		var li1= $("<li></li>").appendTo(".cart_toast");
		$(li1).html("您的购物车还没有商品，先去购物吧")
	}
	//删除按钮
	
	$(".cart_toast").on("click",".del",function(){
		var index=$(this).index(".cart_toast .del")
		$(this).parents(".cart_toast li").remove()
		//console.log(1)
		})
	})

	//刷新页面的一部分
	function refreshUI(obj) {
		//包包图片
		$(".img1").attr("src", obj.img);
		//包包详情
		$(".content").html(obj.content);
		//市场价
		$(".markprice").html(obj.markprice);
		//现售价
		$(".showprice").html(obj.showprice);
		//单位
		$(".unit").html(obj.unit);
		//包包销售量
		$(".xsl").html(obj.xsl) 
		//包包评论量 
		$(".pl").html(obj.pl)
		//点击跳转时显示第一张图片
		$("#bigImg").attr("src",obj.imgs2[0])
		//默认选择的小图片，在商品价格下
		
//创建list里面的li小图片
	var arr1=obj.imgs1; 
	for(var j=0;j<arr1.length;j++){
	$("<li><img src="+obj.imgs1[j]+"/></li>").appendTo("#list");
	console.log(obj.imgs1[j])
	
		}
		
	}

	//获取参数字符串paramStr中的参数name
	function getParam(paramStr, name) {
		paramStr = paramStr.substring(1); //id=103&w=22
		var arr = paramStr.split("&");
		for(var i = 0; i < arr.length; i++) {
			var str2 = arr[i]; //id=103

			var arr2 = str2.split("=");
			if(arr2[0] == name) {
				return arr2[1];
			} 
		}
		return "";
	}
	
	//加入购物车
	//	//建立cookies加购物车;
	$(".buy").click(function() {
		//取出其中一部分数据并保存到另一个对象myObj中

		//使用cookie
		//获取原来保存在cookie中的购物车商品， 如果没有商品则将数组cookieArr设置为空数组[]
		var cookieArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];

		//遍历原来cookie中是否存在和当前即将加入购物车的商品相同
		var isExist = false; //表示是否存在相同商品
		for(var i = 0; i < cookieArr.length; i++) {
			if(cookieArr[i].id == myObj.id) {
				//存在相同商品
				//console.log($("#num").val());
				cookieArr[i].num++;
				isExist = true; //表示存在相同商品

			}
		}
		//如果不存在相同商品， 则添加当前商品
		if(!isExist) {
			cookieArr.push(myObj);
		}

		//添加(替换原来的)cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});
		console.log($.cookie("cart"));

	})
	
        


    })


})