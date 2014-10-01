
var output,
first = document.getElementById('num_one'),
second = document.getElementById('num_two'),
submit = document.getElementById('calculateBtn'), solution = document.getElementById('answer');

submit.onclick = function () {
  output = Number(first.value) + Number(second.value);
  solution.innerHTML = output;
}

var inputField;

li.onclick = function () {
  totalInput = document.getElementById('inputField');
}
