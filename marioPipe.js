function pipeFix(numbers) {
  let firstLast = [numbers.shift(), numbers.pop()];
  let coolLength = firstLast[1] - firstLast[0] + 1;
  let firstNum = firstLast[0];
  let finalArr = Array.from({ length: coolLength }, (v, i) => i + firstNum);
  console.log(finalArr);
}

const numbers = [2, 3, 4, 6, 8, 9];

pipeFix(numbers);
