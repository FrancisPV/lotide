const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(tvShows, comparedValues) {
  for (let genre in tvShows) {
    if (tvShows[genre] === comparedValues) {
      return genre
    } 
    }
    return undefined
  }

module.exports = findKeyByValue;

