document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function(e) {
    let target = e.target;
    console.log('発生前:' + target.nodeName + '/' + target.id);
    console.log('種類:' + e.type);
  }, false);
}, false);