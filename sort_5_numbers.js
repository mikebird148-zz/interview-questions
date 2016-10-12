/*
    Create a javascript program that continuously asks a user for 5 numbers that are comma separated.
    Your program should show them the same numbers but sorted.
        -Cannot use array.sort();
        -Must use an array, a loop, a function, a conditional
        -Make sure there are 5 numbers and that they are actual numbers
        For example:

            input: 8, 45, 67, 32, 9
            output: 8, 9, 32, 45, 67

            input: done
            output: 'bye'

        Things to consider:
            1. You need to convert the list of numbers from a string to an array of strings
            2. You need to convert each string into a number
 */
    // function game() {
    //     alert('We are going to play a fun game. Give me 5 random numbers that are not organized in any particular manner, and I will organize them in ascending order. If you decide you do not want to play, type "no thanks"');
    //     var theirNumbers = prompt("Enter your numbers").split(",");
    //
    //     if (theirNumbers == "no thanks") {
    //         alert('Thanks for your time');
    //     } else {
    //         theirNumbers;
    //         console.log('The unorganized numbers are: ' + theirNumbers);
    //         var moreNumbers = confirm('Would you like to add another number?');
    //     while (moreNumbers == true) {
    //         theirNumbers;
    //     }
    //         if (theirNumbers < 10) {
    //             prompt("Enter your additional numbers").push(",");
    //         } else {
    //             alert('Here is your updated list of numbers that are organized');
    //             document.getElementById('youOrganizedNumbers').innerHTML = theirNumbers;
    //         }
    //     }
    // }

    function startProgram() {
        var input;

        while (input !== 'done') {
            input = prompt('Please enter 5 comma separated numbers. If you do not want to participate, type "done"');

            if (input == 'done') {
                alert('Thanks for your time.');
                break;
            }
            // Example string of numbers:
            // var somethingLikeThis = '8, 45, 67, 32, 9';
            var arrayOfStrings = input.split(",");

            console.log(arrayOfStrings);

            var arrayOfNumbers = [];

            for (var i = 0; i < arrayOfStrings.length; i++) {
                arrayOfNumbers[i] = parseInt(arrayOfStrings[i]);
            }

            console.log(arrayOfNumbers);

            var sortedNumbers =[];

            // for (var i = 0; i < arrayOfNumbers.length; i++) {
            //     var lowestNumber = arrayOfNumbers[i];
            //     for (var j = 0; j < arrayOfNumbers.length; j++) {
            //         if (arrayOfNumbers[j] < lowestNumber && !sortedNumbers.contains(arrayOfNumbers[j])) {
            //             lowestNumber = arrayOfNumbers[j];
            //
            //         }
            //     }
            //     sortedNumbers.push(lowestNumber);
            // }

            while(!done) {
                if (arrayOfNumbers.length == 0) {
                    var lowestNumber = arrayOfNumbers[0];

                    for (var j = 0; j < arrayOfNumbers.length; j++) {
                        if (arrayOfNumbers[j] < lowestNumber) {
                            lowestNumber = arrayOfNumbers[j];
                        }
                    }
                    sortedNumbers.push(lowestNumber);
                    arrayOfNumbers.splice(arrayOfNumbers.indexOf(lowestNumber), 1);
                } else {
                    done = true;
                }
            }

            console.log(sortedNumbers);

            alert(sortedNumbers);
        }
    }