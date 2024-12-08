
function innerFunc(a, b) {
    return a * b;
  }
  

  function outerFunc(x, y) {
    return innerFunc(x, y);
  }
  

  const result = outerFunc(5, 4);
  console.log(result); 
  