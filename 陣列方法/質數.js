function isPrime(n) {
  // 1非質數
  if (n === 1) return false;
  // 如果 n 能被 i整除，就不是質數
  for (let i = 0; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
