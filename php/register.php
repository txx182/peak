<?php 
header("Content-type:text/html;charset=utf-8");
@ $username=$_POST["username"];
@ $password=$_POST["pwd"];
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");
$insert="insert into login (username,pwd) values('$username','$password')";
$result=mysql_query($insert,$conn);
$row=mysql_num_rows($result);
if($row==1){
	echo 1;
}else{
   echo 0;
}
mysql_close($conn);
?>