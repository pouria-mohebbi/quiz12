function splitArray(numbers) {

    function displayFirstHalf(arr) {
      const midpoint = Math.floor(arr.length / 2);
      const firstHalf = arr.slice(0, midpoint);
      console.log(firstHalf);
    }
  
    
    function displaySecondHalf(arr) {
      const midpoint = Math.floor(arr.length / 2);
      const secondHalf = arr.slice(midpoint);
      console.log(secondHalf);
    }
  

    displayFirstHalf(numbers);
    displaySecondHalf(numbers);
  }
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  splitArray(numbers);
  