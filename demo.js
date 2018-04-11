
const prime = {
  1: 2,
  2: 3,
  3: 5,
  4: 7,
  5: 11,
  6: 13,
  7: 17
}

let threeCom = gen([1,2,3,4,5,6,7], 3);
let twoCom = gen([1,2,3,4,5,6,7], 2);
let i = 0, tmp = 1;
let threeComPrime = [];
let twoComPrime = [];
let reverseObj = {};
while(i < threeCom.length) {
  threeCom[i].forEach(item => {
    tmp = tmp * prime[item]
  })
  threeComPrime.push(tmp);
  reverseObj[tmp] = threeCom[i];
  tmp = 1;
  i++;
}

i = 0;
tmp = 1;
while(i < twoCom.length) {
  twoCom[i].forEach(item => {
    tmp = tmp * prime[item]
  })
  twoComPrime.push(tmp);
  tmp = 1;
  i++;
}


let sevenCom = gen(threeComPrime, 7);

i = 0;
tmp = 0;
let j = 0;
while(i < sevenCom.length) {
  if(!calArr(sevenCom[i], twoComPrime)) {
    i++;
    continue;
  } else {
    break;
  }
}

let results = [];
for(tmp=0; tmp<sevenCom[i].length; tmp++) {
  results.push(reverseObj[sevenCom[i][tmp]]);
}
console.log('最佳组合:', results);


function calArr(drArr, dvArr) {
  let flag = false;
  for(let i=0; i<dvArr.length; i++) {
    flag = false;
    for(let j=0; j<drArr.length; j++) {
      if(drArr[j]%dvArr[i] === 0) {
        console.log(drArr[j], dvArr[i]);
        flag = true;
        break;
      }
    }
    if(!flag) {
      return false;
    }
  }
  return true;
}


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

