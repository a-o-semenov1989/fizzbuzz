const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    // If number equals 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } //If number equals 3
      else if (i % 3 === 0) {
        console.log('fizz');
      } // If number equals 5
        else if (i % 5 === 0) {
          console.log('buzz');
      } else {
        console.log(i);
      }
  }
};

fizzBuzz(50);
