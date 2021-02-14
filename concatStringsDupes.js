function longest(s1, s2) {
    const newStr = s1.concat('', s2)
    .split('')
    .sort();
    const strSet = [...new Set(newStr)].join('');
    return strSet;
  }
  
  longest("aretheyhere", "yestheyarehere")