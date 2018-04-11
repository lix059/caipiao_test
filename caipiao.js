
function gen(arr, n) {
  if(n === 1) {
    let result = [];
    arr.forEach(item => {
      result.push([item]);
    });
    return result;
  }
  if(arr.length === n) {
    return [[...arr]];
  }
  return comb(arr[0], gen(arr.slice(1), n-1)).concat(gen(arr.slice(1), n))
}

function comb(e, arr) {
  let i = 0;
  while(i < arr.length) {
    arr[i].push(e);
    i++;
  }
  return arr;
}


console.log(gen([1,2,3,4,5,6,7], 3));
