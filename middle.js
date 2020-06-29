let middle = function(numbers){
  let resultArray = [];
    if(numbers.length < 3){
      return [];
    } else if(numbers.length % 2 === 0) {
      resultArray.push(numbers.length / 2)
      resultArray.push(numbers.length / 2 + 1)
    } else {
      resultArray.push(Math.ceil(numbers.length / 2))
    }
    return resultArray
  }
  
  module.exports = middle;
