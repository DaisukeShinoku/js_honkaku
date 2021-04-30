let p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
let str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
let str2 = 'サポートサイト「サーバサイド」もよろしく';
console.log(p.test(str1));
console.log(p.test(str2));