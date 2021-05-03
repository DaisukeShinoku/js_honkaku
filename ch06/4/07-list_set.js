document.addEventListener('DOMContentLoaded', function() {
  let setListValue = function(name, value) {
    let opts = document.getElementById(name);

    for(let i = 0, len = opts.length; i < len; i++) {
      let opt = opts.item(i);

      if (value.indexOf(opt.value) > -1) {
        opt.selected = true;
      }
    }
  };

  setListValue('food', ['餃子', '焼き肉']);
}, false);