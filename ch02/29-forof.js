let data = ["go", "ruby", "php"];

Array.prototype.hoge = function() {};
for(let value of data){
  console.log(value);
}