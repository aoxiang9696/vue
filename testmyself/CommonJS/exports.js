/* module.exports */
var app = {
  name: 'app',
  value: '1',
  sayName: function (name) {
    console.log(name);
  }
}
module.exports = app;

console.log(typeof exports);// {}
console.log(module.exports); // app[Object]

