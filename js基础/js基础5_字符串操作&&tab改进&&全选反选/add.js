/**
@method sqrtSum
@param array {Array} 计算的数组
@return sum {Number} 返回每一个数组元素的平方和
*/
function sqrtSum(array) {
	var sum = 0;
	//逻辑代码
	for(var i = 0; i < array.length; i++) {
		sum = sum + array[i]*array[i];
	}
	return sum;
}