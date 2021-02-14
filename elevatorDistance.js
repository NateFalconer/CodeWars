function elevatorDistance(array) {
    let distance = 0;
    array.reduce((acc, el) => {
      distance+= (Math.abs(acc-el));
      return el
    })
    return distance;
  }
  
  elevatorDistance([5,2,8,17,6])