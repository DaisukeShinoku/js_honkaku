let data1 = [1, 2, 3, 4, 5];
let [x0, x1, x2, x3, x4]  = data1;

console.log(x3);

let data2 = [6, 7, 8, 9, 10];
let [y0, y1, y2, ...other] = data2;

console.log(y2);
console.log(other);


