let Member = function() { };

Member.prototype.sex = '男';
let mem1 = new Member();
let mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = undefined;
console.log(mem1.sex + '|' + mem2.sex);