function queueTime(customers, n) {
    let customerNumber = customers.length;
    let customerTime = customers.reduce((a, b) => a + b, 0);
    let largestTime = 0;
    customers.forEach((num) => {
      if (num >= largestTime) {
        largestTime = num;
      }
    })
    if (customerNumber == 0) {
      return 0;
    }
    
    
    else if (customerTime <= n) {
      return largestTime;
    } else return (Math.max(customerTime / n));
  }
  
  queueTime([3,2,3,3,4,4], 2) // 9
  
  // couldn't pass all tests...
  
  //codeWars solution
  
  // function queueTime(customers, n) {
  //   var w = new Array(n).fill(0);
  //   for (let t of customers) {
  //     let idx = w.indexOf(Math.min(...w));
  //     w[idx] += t;
  //   }
  //   return Math.max(...w);
  // }