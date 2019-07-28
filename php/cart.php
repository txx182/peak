<?php 
header("Content-type:text/html;charset=utf-8");
$imgSrc=$_POST["imgSrc"];
$goodsName=$_POST["goodsName"];
$goodsColor=$_POST["goodsColor"];
$goodsSize=$_POST["goodsSize"];
$singlePrice=$_POST["singlePrice"];
$goodsNum=$_POST["goodsNum"];
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");
$insert="insert into cart (srcbig,goodsname,color,size,currentPrice,shoenumber) values
('$imgSrc','$goodsName','$goodsColor','$goodsSize','$singlePrice','$goodsNum')";
$result=mysql_query($insert,$conn);
mysql_close($conn);
?>