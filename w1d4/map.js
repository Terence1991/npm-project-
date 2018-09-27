
var words = ["ground", "control", "to", "major", "tom"];

function map(array, callBack) {
 var arr = [];
for(i = 0; i < array.length; i++) {
arr.push(callBack(array[i]));
 }
 return arr
}




 
var x = map(words, function(word) {
  return word.length;
});
console.log(x);

var y = map(words, function(word) {
  return word.toUpperCase();
});
console.log(y);
var g = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(g);