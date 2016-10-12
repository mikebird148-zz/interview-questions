// write a function fact() that takes an integer n and returns the factorial of n
// n = 7, 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040
// good interview question: fib/factorial, make and add a repository for good interview questions, study recursion

function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}

var theChosenNumber = fact(7);

console.log(fact(7));
console.log(fact(6));
console.log(fact(5));
console.log(fact(4));
console.log(fact(3));
console.log(fact(2));
console.log(fact(1));

   /*
      fact(7) : not <= 1 so, 7 * fact(6)
      fact(6) : not <= 1 so, 6 * fact(5)
      fact(5) : not <= 1 so, 5 * fact(4)
      fact(4) : not <= 1 so, 4 * fact(3)
      fact(3) : not <= 1 so, 3 * fact(2)
      fact(2) : not <= 1 so, 2 * fact(1)
      fact(1) : is == 1 so, return 1 and stop here;

    */
   /* When we put the iterations from the function operation from above together, we get:
      7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040
      let's run to make sure
    */

document.getElementById('factorial7').innerText = theChosenNumber;

