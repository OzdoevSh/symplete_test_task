const fib = function (n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i + 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};

module.exports = fib;
