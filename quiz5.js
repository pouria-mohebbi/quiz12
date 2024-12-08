const obj = {
    string: "Hello world how are you?",
    counterString: function(str) {

      const wordsArray = str.split(' ');
      
   
      const lengthsArray = wordsArray.map(word => word.length);
      
  
      return lengthsArray;
    }
  };
  

  console.log(obj.counterString(obj.string)); 

  