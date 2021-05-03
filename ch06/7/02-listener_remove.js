document.addEventListener('DOMContentLoaded', function() {
  let btn = document.getElementById('btn');
  let listener = function() {
    window.alert('HELLO WORLD!!');
  };

  btn.addEventListener('click', listener, false);

  // btn.removeEventListener('click', listener, false);
}, false);