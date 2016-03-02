//设置cookie
function setCookie(name, value, eDays) {
	if(eDays) {
		var nowDate = new Date();
		var targetDate = new Date(nowDate.getTime() + eDays * (24 * 60 * 60 * 1000));
	}
	document.cookie = name+"="+value+"; expires=" + targetDate;
}
//获取cookie
function getCookie(name) {
	var cookieArray = document.cookie.split("; ");
	for(var i = 0; i < cookieArray.length; i++) {
		if(cookieArray[i].indexOf(name) == 0) {
			return cookieArray[i].substring(name.length+1);
		}
	}
	return "";
}
// getCookie("c");
//清除cookie
function clearCookie(name) {
	setCookie(name, "", -1);
}