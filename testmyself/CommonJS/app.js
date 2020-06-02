/* var func1 = function () {
  console.log("func1");
}
var func2 = function () {
  console.log("func2");
}

exports.function1 = func1;
exports.function2 = func2;
exports.func1 = function () {
  console.log('aa')
}
exports.func2 = function () {
  console.log('bb');

}
console.log(exports.func1) */

var app = {
  name: 'app',
  value: '1',
  sayName: function (name) {
    console.log(name);
  }
}

exports.name = app.name;
exports.value = app.value