let dat1 = new Date(2017, 4, 15);
let dat2 = new Date(2017, 5, 20);
let diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff + '日の差があります。');
