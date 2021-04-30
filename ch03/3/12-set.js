// setオブジェクトに値を追加
let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);

// 同じ値は無視
s.add(5);

console.log(s.has(100)); // true
console.log(s.size);     // 4

// 値を順に取得
for (let val of s.values()) {
  console.log(val);
}

for (let val of s) {
  console.log(val);
}

// 値100を廃棄
s.delete(100);
console.log(s.size);    // 3

// 全て廃棄
s.clear();
console.log(s.size);    // 0