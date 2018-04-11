function gen(arr,n,selectedArr){
	if(n == 1){
		var resultArr = [];
		for(val of arr){
			resultArr.push('['+ selectedArr.concat(val).join(',') +']');
		}
		console.log(resultArr.join(','));
	}else if(n > 1){
		for(val of arr){
			var newArr = arr.filter(function(item){return item > val});
			if(newArr.length) gen(newArr, n-1, selectedArr.concat(val));
		}
	}
}
gen([1,2,3,4,5,6,7],3,[]);//7中选3,最后传入一个空数组用作递归数组
/**
  output text:
[1,2,3],[1,2,4],[1,2,5],[1,2,6],[1,2,7]
[1,3,4],[1,3,5],[1,3,6],[1,3,7]
[1,4,5],[1,4,6],[1,4,7]
[1,5,6],[1,5,7]
[1,6,7]
[2,3,4],[2,3,5],[2,3,6],[2,3,7]
[2,4,5],[2,4,6],[2,4,7]
[2,5,6],[2,5,7]
[2,6,7]
[3,4,5],[3,4,6],[3,4,7]
[3,5,6],[3,5,7]
[3,6,7]
[4,5,6],[4,5,7]
[4,6,7]
[5,6,7]
*/
