function mousewheel(element, callback) {
	element.onmousewheel = fn;
	if(element.addEventListener) {
		element.addEventListener("DOMMouseScroll", fn, false);
	}
	
	function fn(e) {
		if(e.wheelDelta < 0 || e.detail > 0) {
			e.delta = true;
		}else {
			e.delta = false;
		}
		callback(e);
		//以下阻止默认事件
		if(e.preventDefault) {
			e.preventDefault();
		}
		return false;
	}
}
