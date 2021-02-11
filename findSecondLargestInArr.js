// Return the second-largest number from the input array
// Do this in O(n) time
// Always at least 2 numbers, and they're all positive

const arr = [1, 2, 3, 9]

function secondLargest(arr) {
  let largestNum = 0;
  let secondLargestNum = 0;
  arr.sort().reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
  }
}
  console.log(largestNum)
}

secondLargest(arr)

function secondLargest2(arr) {
  let largestNum = 0;
  let secondLargestNum = 0;

  arr.forEach((num) => {
    if (num >= largestNum) {
      secondLargestNum = largestNum;
      largestNum = num;
    } else if (num > secondLargestNum) {
      secondLargestNum = num;
    }
  })

  console.log(secondLargestNum);
  return secondLargestNum;
}

secondLargest2(arr)