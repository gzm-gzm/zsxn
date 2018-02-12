<?php

header('Access-Control-Allow-Origin:*');

//先获取前端提交过来的参数
$uname = $_REQUEST["uname"];
$pwd = $_REQUEST["pwd"];

//登录
$conn = new mysqli("127.0.0.1", "root","", "mydb15") or die("连接失败");
$sql = "select * from users where username='$uname' and password='$pwd'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    //说明存在匹配的用户名和密码
    //登录成功
    $obj = array("status"=>1, "msg"=>"登录成功");
    echo  json_encode($obj);
}
else {
    //登录失败
    $obj = array("status"=>0, "msg"=>"登录失败");
    echo  json_encode($obj);
}
//关闭连接
$conn->close();


