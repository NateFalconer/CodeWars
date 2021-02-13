function highestRank(arr){
  let compare = 0;
  let mostFreq = 0;

  arr.reduce((a, v) => {
    if(v in a){
      a[v]++;
    } else {
      a[v] = 1;
    }

if (a[v] > compare) {
  compare = a[v];
  mostFreq = v;
}

return a;
  }, {})
return mostFreq;
}
var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];

highestRank(arr)
