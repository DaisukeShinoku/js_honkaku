class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member('太郎', '山田');
console.log(m.getName());

class BusinessMember extends Member {
  work() {
    return this.getName() + 'は働いています。';
  }
}

let bm = new BusinessMember('小次郎', '佐々木');
console.log(bm.getName());
console.log(bm.work());

class Area {
  static getTriangle(base, height) {
    return base * height / 2;
  }
}

console.log(Area.getTriangle(10, 5));