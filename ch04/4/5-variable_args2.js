function printf(format) {
  for (let i = 0, len = arguments.length; i < len; i++) {
    let pattern = new RegExp('\\{' + (i-1) + '\\}', 'g');
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '山田', '鈴木');