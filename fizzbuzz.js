// divisible by 3 "Fizz", divisible by 5 "Buzz", divisible by 5 and 3 "Fizz Buzz"
// it seems like in order to print to the html I may need to add the items to an array and then print to html

    function fizzy() {

        for (var i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                // document.getElementById("fizzbuzz").innerHTML = "Fizz Buzz";
                console.log("Fizz Buzz");
            }
            if (i % 3 == 0) {
                // document.getElementById("fizzbuzz").innerHTML = "Fizz";
                console.log("Fizz");
            } else if (i % 5 == 0) {
                // document.getElementById("fizzbuzz").innerHTML = "Buzz";
                console.log("Buzz");
            } else {
                // document.getElementById("fizzbuzz").innerHTML = i;
                console.log(i);
            }
        }
    }

    fizzy();