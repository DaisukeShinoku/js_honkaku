let book = {
  title: "ポケット本",
  publish: "本社",
  price: 100,
  other: { keyword: "ほげ", logo: "logo.png" }
};

let { title, publish: company, other, other: { keyword } } = book;

console.log(title);
console.log(company);
console.log(other);
console.log(keyword);