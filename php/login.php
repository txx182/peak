<?php 
header("Content-type:text/html;charset=utf-8");
@ $username=$_POST["username"];
@ $pwd=$_POST["pwd"];
$conn=mysql_connect("localhost","root","root");
mysql_select_db("peak");

$select="select * from login where username='$username' and pwd='$pwd'";
$result=mysql_query($select,$conn);
$row=mysql_num_rows($result);
if($row==1){
	echo 1;
}else{
   echo 0;
}
mysql_close($conn);
?>