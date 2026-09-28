// codeline for the Prompt-sync module
const prompt = require('prompt-sync')();

// //Exercise 1

// let x = "#";

// for(let i = 1; i <= 7; i++){
//     console.log(x);
//     x += "#";
// }

// //Exercise 2

// for(let num = 1; num <= 100; num++){
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(num % 5 === 0){
//         console.log("Buzz");
//     }
//     else if(num % 3 === 0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(num);
//     }
// }

// //Exercise 3

// let board = "";

// for(let i = 1; i <= 8; i++){
//     for(let j = 1; j <= 8; j++){
//         if((i + j) % 2 === 0){
//             board += " ";
//         }
//         else{
//             board += "#";
//         }
//     }
//     board += "\n";
// }
// console.log(board);

// //Exercise 4

// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }

// for(let j = 0; j < 25; j++){
//     console.log(j);
// }

// for(let k = 0; k < 25; k++){
//     if(k % 2 !== 0){
//         console.log(k);
//     }
// }

// for(let l = 0; l < 25; l++){
//     if(l % 3 === 0){
//         console.log(l);
//     }
// }

// for(let m = 0; m <= 50; m++){
//     if(m % 5 === 0){
//         console.log(m);
//     }
// }

// for(let n = 0; n <= 50; n++){
//     if(n % 2 === 0 && n % 3 !== 0){
//         console.log(n);
//     }
//     else if(n % 3 === 0 && n % 2 !== 0){
//         console.log(n);
//     }
// }

// for(let o = 0; o <= 100; o++){
//     if(o % 2 === 0 && o % 3 === 0 && o % 12 !== 0){
//         console.log(o);
//     }
// }

// //Exercise 5

// for(let i = 50; i >= 1; i--){
//     console.log(i);
// }

// for(let j = 24; j >= 0; j--){
//     console.log(j);
// }

// for(let k = 24; k >= 0; k--){
//     if(k % 2 !== 0){
//         console.log(k);
//     }
// }

// for(let l = 24; l >= 0; l--){
//     if(l % 3 === 0){
//         console.log(l);
//     }
// }

// for(let m = 50; m >= 0; m--){
//     if(m % 5 === 0){
//         console.log(m);
//     }
// }

// for(let n = 50; n >= 0; n--){
//     if(n % 2 === 0 && n % 3 !== 0){
//         console.log(n);
//     }
//     else if(n % 3 === 0 && n % 2 !== 0){
//         console.log(n);
//     }
// }

// for(let o = 100; o >= 0; o--){
//     if(o % 2 === 0 && o % 3 === 0 && o % 12 !== 0){
//         console.log(o);
//     }
// }

// //Exercise 6

// for(let i = 1; i <= 10; i++){
//     console.log(`3*${i} = ${3 * i}`);
// }

// for(let j = 1; j <= 10; j++){
//     console.log(`17*${j} = ${17 * j}`);
// }

//Exercise 7
while(true){
    console.log("Please select an option \nPress 1 to add\nPress 2 to subtract\nPress 3 to multiply\nPress 4 to divide\nPress 5 to quit\n");
    let option = Number(prompt("Please select an option: "));


    while(option < 1 || option > 5 || isNaN(option)){
        console.log("Please select a valid option");
        option = Number(prompt("Please select an option: "));

        //Si el usuario no selecciona la opción 5, se le pedirá que ingrese dos números y se realizará la operación correspondiente
        if(option === 1){
            let num1 = Number(prompt("Enter first number: "));
            let num2 = Number(prompt("Enter second number: "));
            if(isNaN(num1) || isNaN(num2)){
                console.log("Please enter valid numbers");
            }
            else {
                console.log(num1 + num2);
            }
        }
        else if(option === 2){
            let num1 = Number(prompt("Enter first number: "));
            let num2 = Number(prompt("Enter second number: "));
            if(isNaN(num1) || isNaN(num2)){
                console.log("Please enter valid numbers");
            }
            else {
                console.log(num1 - num2);
            }
        }
        else if(option === 3){
            let num1 = Number(prompt("Enter first number: "));
            let num2 = Number(prompt("Enter second number: "));
            if(isNaN(num1) || isNaN(num2)){
                console.log("Please enter valid numbers");
            }
            else {
                console.log(num1 * num2);
            }
        }
        else if(option === 4){
            let num1 = Number(prompt("Enter first number: "));
            let num2 = Number(prompt("Enter second number: "));
            if(isNaN(num1) || isNaN(num2)){
                console.log("Please enter valid numbers");
            }
            else {
                console.log(num1 / num2);
            }
        }
        else {
            console.log("Invalid option");
            break;
        }
    }
}