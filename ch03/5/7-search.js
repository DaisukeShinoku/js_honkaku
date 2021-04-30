let p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
let str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
let str2 = 'サポートサイト「サーバサイド」もよろしく';
console.log(str1.search(p));
console.log(str2.search(p));