const arr = [1, 2, 3];

function map(arr, mapper) {
  return arr.reduce((acc, el) => {
    return [...acc, mapper(el)];
  }, [])
}

// map([1, 2, 3], (x) => x * x)

function filter(arr, f) {
  return arr.reduce((acc, el) => (f(el) ? [...acc, el] : acc), []);
}

// filter([-1, 0, 1, 2], (x) => x > 0);

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
  const obj = { value: n };
  return obj;
})

const html = items.join(' ')

console.log(items)

// const arr = [1, 2, 3];
// // arr.reduce((acc, el) => {
// //   return el + acc;
// // }) // => 15

// const arr2 = [26, 24, 50]

// arr2.reduce((a, b) => {
//   return a + b
// })

const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//   sum += n;

//   console.log(sum)

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0) // 0 is initialValue for accumulator

console.log(sum)