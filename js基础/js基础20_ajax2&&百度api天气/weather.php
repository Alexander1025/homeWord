<?php 
	//设置字符编码，能识别中文
	header("Content-Type:text/html;charset=utf8");
	//获取通过get请求方式，的参数
	$city = $_GET["city"];
	//百度的天气接口
	$url = "http://api.map.baidu.com/telematics/v3/weather?location=".$city."&output=json&ak=uIy0VwzdcZV9iUuDrZKD5Nna";
	//file_get_contents读取网页
	echo file_get_contents($url);
?>