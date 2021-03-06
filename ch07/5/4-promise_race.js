function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値: ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.race([
  asyncProcess('一郎'),
  asyncProcess('次郎'),
  asyncProcess('三郎')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー: ${error}`);
  }
);