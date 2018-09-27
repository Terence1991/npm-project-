function findWaldo(arr, found) {
   arr.forEach(function(name, i) {
     if (arr[i] === "Waldo") {
        found(found, i);  
    }
  })
  }

  
  function actionWhenFound(found, index) {
    console.log("Found Waldo at index:" + index);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)



  
    