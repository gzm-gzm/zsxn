<?php
header('Access-Control-Allow-Origin:*');

//先获取前端提交过来的参数
$uname = $_REQUEST["uname"];
$pwd = $_REQUEST["pwd"];
//$age = $_REQUEST["age"];

//先检查该用户是否存在
//注册


$conn = new mysqli("127.0.0.1", "root","", "mydb15") or die("连接失败");

//先检查该用户是否存在
$sql1 = "select * from users where username='$uname'";
$result1 = $conn->query($sql1);
if ($result1 && $result1->num_rows>0){
    //说明存在相同用户名
    //不可以注册
    $obj = array("status"=>2, "msg"=>"该用户已存在");
    echo  json_encode($obj);
}
else {
    //说明不存在相同用户名
    //可以注册
    $sql2 = "insert into users(username,password) values('$uname', '$pwd')";
    $result2 = $conn->query($sql2);
    if ($result2) {
        $obj = array("status"=>1, "msg"=>"注册成功");
        echo  json_encode($obj);
    }
    else {
        $obj = array("status"=>0, "msg"=>"注册失败");
        echo  json_encode($obj);
    }
}

//关闭连接
$conn->close();








