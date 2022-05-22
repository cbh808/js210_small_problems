function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  let lastFib = 1;
  let nextToLast = 1;
  let fib;

  for (let num = 3; num <= n; num += 1) {
    fib = lastFib + nextToLast
    nextToLast = lastFib;
    lastFib = fib;
  }
  return fib;
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050