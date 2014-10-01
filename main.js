
var output,
first = document.getElementById('num_one'),
second = document.getElementById('num_two'),
submit = document.getElementById('calculateBtn'), solution = document.getElementById('answer');

submit.onclick = function () {
  output = Number(first.value) + Number(second.value);
  solution.innerHTML = output;
}

var output,
inputField = document.getElementById(inputField),
seven = document.getElementById('seven');

// var compile = function () {
//   output = eval(inputField.value);
//   getElementById('inputField').innerHTML;
// }

seven.onclick = function () {
  inputField.innerHTML = 7;
  console.log('seven');
}
