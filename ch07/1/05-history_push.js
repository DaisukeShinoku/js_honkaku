let count = 0;
let result = document.getElementById('result');
document.getElementById('btn').addEventListener('click', function() {
  result.textContent = ++count;
  history.pushState(count, null, '/file:///Users/shinokudaisuke/Desktop/js_honkaku/ch07/1/05-history_push.html/' + count);
});

window.addEventListener('popstate', function(e) {
  count = e.state;
  result.textContent = count;
})