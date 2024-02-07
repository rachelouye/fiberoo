function fib() {
  const fibAr = [0,1];
  for (let i = 2; i < 50; i++) {
    fibAr.push(fibAr[i - 1] + fibAr[i - 2]);
  }
  return fibAr;
}
console.log(fib());


const numsToStrings = nums => nums.map(num => `${num}`);

console.log(numsToStrings(fib()));

const numEvenNums = nums => nums.filter(num => num % 2 === 0).length;


console.log(numEvenNums(fib()));
