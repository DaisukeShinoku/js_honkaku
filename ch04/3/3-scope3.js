let scope = 'Global';

function getValue() {
  // console.log(scope);
  let scope = 'Local';
  return scope;
}

console.log(getValue());
console.log(scope);