// divisible by 3 "Fizz", divisible by 5 "Buzz", divisible by 5 and 3 "Fizz Buzz"

function fizzbuzz() {
    var i = 0;
    while (i <= 100) {
        if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 && i %5) {
            console.log("Fizz Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}
