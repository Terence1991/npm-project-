var args = process.argv;


function obfuscate(password) {
    var durp = password.split("");
    
  
  for(var i = 0; i < durp.length; i++) {
        if (durp[i] === "a") {
            durp[i] = 4
        } else if (i === "e") {
            durp[i] += 3
        } else if (i === "o") {
            durp[i] = 0
        } else if (i === "l") {
            durp[i] = 1
        }
    }
  
  var join = durp.join('');
  return join;
 
} 

console.log(obfuscate(args[2]));





function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


function rollDice(num) {  
    for(var i = 0; i < num; i++) {
    var roll = Math.floor((Math.random() * 6) + 1);
    }
}







function rollDice(num) {
    for(var i = 1; i < num; i++) {
       dice  = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)]
    return "Rolled 3 dice: " + dice + ", " +  dice
    }
  }
  
var numberOfDie 

  console.log("Rolled", rollDice(4));