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

Promise.all([
  asyncProcess('一郎'),
  asyncProcess(''),
  asyncProcess('三郎')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー: ${error}`);
  }
);