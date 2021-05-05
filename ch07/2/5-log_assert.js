function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0, '引数radiusは正の数で頼むわ');
  return radius * radius * Math.PI;
}

console.log(circle(-5));