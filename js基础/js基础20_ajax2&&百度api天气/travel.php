<?php 
	header("Access-Control-Allow-Origin:*");
	header("Content-Type:text/html;charset=utf8");
	$scene = $_GET["scene"];
	$url = "http://api.map.baidu.com/telematics/v3/travel_attractions?id=".$scene."&output=json&ak=LWfDkMLR9GmiSGe38xjeUizF";

	echo file_get_contents($url);
?>