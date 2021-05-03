let s = document.getElementById('food');
let child = s.firstChild;
while (child) {
  if (child.nodeType === 1) {
    console.log(child.value);
  }
  child = child.nextSibling;
}