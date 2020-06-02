/* var CLASS = function (args) {
  this.args = args;
}
module.exports = CLASS; */

var CLASS = function () {
  this.name = "class";
}
CLASS.prototype.func = function () {
  console.log(this.name)
}
module.exports = new CLASS()

