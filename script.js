
// var secretNum = Math.floor(Math.random() * 9 + 1);
// var hint = " ";
// var guess = null;

// function guessNumber() {
//     var yourGuess;
//     (guess != null) ?
//         yourGuess = window.prompt("Please guess my number between 1 and 10, " + hint + " " + guess) : yourGuess = window.prompt("Please guess my number between 1 and 0");
    
//     if (yourGuess != null) {
//         if (secretNum == yourGuess) {
//                 window.document.write("You guessed right my number is " + secretNum);
//             } else {
//                 window.console.log("BRRR wrong answer!");
//                 if (yourGuess < secretNum) {
//                     hint = "Try again the number is higher than ";
//                     guess = yourGuess;
//                     guessNumber();
//                 } else {
//                     hint = "Try again the number is lower than ";
//                     guess = yourGuess;
//                     guessNumber();
//                 }
//             }
//     } else {
//         yourGuess = window.prompt("Please guess my number between 1 and 9");
//     }
// }

// guessNumber();

// let grade = parseInt(window.prompt("Enter the student's grade."));

// if (grade >= 90) {
//     window.document.write('Student received an A');
// } else if (grade >= 80) {
//     window.document.write('Student received an B');
// } else if (grade >= 70) {
//     window.document.write('Student received an C');
// } else if (grade >= 60) {
//     window.document.write('Student received an D');
// } else {
//     window.document.write('Student failed the course');
// } 