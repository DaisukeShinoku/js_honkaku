document.addEventListener('DOMContentLoaded', function() {
  let setRadioValue = function(name, value) {
    let elems = document.getElementsByName(name);

    for(let i = 0, len = elems.length; i < len; i++) {
      let elem = elems.item(i);
      if (elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  };
  setRadioValue('food', '餃子');
}, false);