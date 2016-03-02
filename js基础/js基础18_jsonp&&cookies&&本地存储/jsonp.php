<?php 
	//定义变量，通过$
	//echo 输出
	//获取通过get请求方式的数据
	$key = $_GET["key"];
	//从数据库找数据，并返回

	$callback = $_GET["callback"];
	echo "$callback({name:'shafee',age:20})";
	// echo "aaa()";
?>