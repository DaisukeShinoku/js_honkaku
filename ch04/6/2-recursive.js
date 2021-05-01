function fanctional(n) {
  if (n != 0) { return n * fanctional(n-1); }
  return 1;
}

console.log(fanctional(5));