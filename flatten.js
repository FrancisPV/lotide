let flatten = function(arrays) {
  filteredArray = [];
  flattenedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    //console.log(arrays[i]);
    if (Array.isArray(arrays[i])) {
      filteredArray.push(arrays[i])
    } else {
      flattenedArray.push(arrays[i])
    }
    for (let j = 0; j < arrays[i].length; j++) {
      //console.log(arrays[i][j]);
      flattenedArray.push(arrays[i][j]);
    }
  }
  return flattenedArray
}

module.exports = flatten;