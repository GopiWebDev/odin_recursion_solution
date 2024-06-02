function fibo(n) {
  // base case if number is less than or equal to 1 it'll return the number
  if (n <= 1) return n;
  // will return calling itself by adding previous two values
  return fibo(n - 1) + fibo(n - 2);
}


