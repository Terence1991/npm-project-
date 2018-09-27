function rollDice(num) {
    var result = [];
    for(var i = 1; i < num; i++) {
       result.push(Math.floor(Math.random() * 6) + 1));
    return result.join(",");
    }
  }
  
  var numberOfDie = process.argv[2];

  console.log("Rolled", numberOfDie, "dice:", rollDice(4));;