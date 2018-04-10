function gen(arr, n) {
  let start_one = 0;
  let start_two = start_one + 1;
  let start_end = start_two + n - 2;
  let tmp = [], tmp_line=[];
  while(start_one < arr.length-n+1) {
    tmp[0] = arr[start_one];
    start_two = start_one + 1;
    
    while(start_two < arr.length-n+2) {
      for(let i=start_two, j=1; i<=start_two+n-2; i++,j++) {
        tmp[j] = arr[i];
      }
      start_end = start_two + n - 2;
      while(start_end < arr.length) {
        tmp[n-1] = arr[start_end++];
        tmp_line.push(tmp.join(','));
      }
      console.log(tmp_line);
      tmp_line=[];
      start_two++;
    }
    start_one++;
  }

}

gen([1,2,3,4,5,6,7], 3);

// output
// [ '1,2,3', '1,2,4', '1,2,5', '1,2,6', '1,2,7' ]
// [ '1,3,4', '1,3,5', '1,3,6', '1,3,7' ]
// [ '1,4,5', '1,4,6', '1,4,7' ]
// [ '1,5,6', '1,5,7' ]
// [ '1,6,7' ]
// [ '2,3,4', '2,3,5', '2,3,6', '2,3,7' ]
// [ '2,4,5', '2,4,6', '2,4,7' ]
// [ '2,5,6', '2,5,7' ]
// [ '2,6,7' ]
// [ '3,4,5', '3,4,6', '3,4,7' ]
// [ '3,5,6', '3,5,7' ]
// [ '3,6,7' ]
// [ '4,5,6', '4,5,7' ]
// [ '4,6,7' ]
// [ '5,6,7' ]