const person = {
    name: 'Jasem',
    age: 120,
    
   
    introduce: function() {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
  };
  
 
  person.introduce();
  
  