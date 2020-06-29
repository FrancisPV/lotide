const findKeyByValue = function(tvShows, comparedValues) {
  for (let genre in tvShows) {
    if (tvShows[genre] === comparedValues) {
      return genre
    } 
    }
    return undefined
  }

module.exports = findKeyByValue;

