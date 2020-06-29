const tail = function(elements) {
  let output = [];
  output.push(elements.pop());
  return elements;
};



module.exports = tail;