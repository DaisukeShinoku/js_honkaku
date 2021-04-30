let data = [4, 9, 16, 25];
let result = data.some(function(value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log("３の倍数が見つかりました");
} else {
  console.log("3の倍数が見つかりません！！")
}