
var output,
first = document.getElementById('num_one'),
second = document.getElementById('num_two'),
submit = document.getElementById('calculateBtn'), solution = document.getElementById('answer');

submit.onclick = function () {
  output = Number(first.value) + Number(second.value);
  solution.innerHTML = output;
}

var output, buttonpush, inputArray = [],
inputField = document.getElementById(inputField),
seven = document.getElementById('seven'), eight = document.getElementById('eight'), plus = document.getElementById('plus');

// var compile = function () {
//   output = eval(inputField.value);
//   getElementById('inputField').innerHTML;
// }

seven.onclick = function () {
  inputArray.push(7);
}
eight.onclick = function () {
  inputArray.push(8);
}
plus.onclick = function () {
  inputArray.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
}
