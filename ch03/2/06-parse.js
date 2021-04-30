let n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

n = new Date();
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

n = '0x10';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

n = '0b11';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

n = '1.01e+2';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));