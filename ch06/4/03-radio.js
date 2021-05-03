document.addEventListener('DOMContentLoaded', function() {
  let getRadioValue = function(name) {
    let result = '';
    let elems = document.getElementsByName(name);

    for(let i = 0, len = elems.length; i < len; i++) {
      let elem = elems.item(i);
      if(elem.checked) {
        result = elem.value;
        break;
      }
    }
    return result;
  };

  document.getElementById('btn').addEventListener('click', function() {
    window.alert(getRadioValue('food'));
  }, false);
}, false);