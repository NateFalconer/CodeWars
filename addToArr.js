function upArray(arr){

    if (arr.length === 0) {
      return null;
    }
  
    const posInt = arr.every(num => (num >= 0 && num <= 9))
  
    const addArr = parseFloat(arr
    .join('')) + 1;
  
    const splitArr = addArr
    .toString()
    .split('')
    .map(parseFloat);
  
    if (posInt === false) {
      return null;
    } else {
      return splitArr;
    }
  }