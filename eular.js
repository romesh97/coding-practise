alert("Loaded Euler JS");

// 1. Sum of multiples of 3 or 5 below 1000
let total = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
}
alert('Find the sum of all the multiples of 3 or 5 below 1000: ' + total);

// 2. Function to sum multiples of a or b below n
function sumMultiples(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

const result = sumMultiples(3, 5, 1000);
//alert('Multiples of a or b below n: ' + result);

// 3. Calculate from user input
function calculateFromUserInput() {
    let a = parseInt(document.getElementById('InputA').value);
    let b = parseInt(document.getElementById('InputB').value);
    let n = parseInt(document.getElementById('InputN').value);

    const result = sumMultiples(a, b, n);
    // alert(`Sum of multiples of ${a} or ${b} below ${n} is: ${result}`);
    const resultString = `Sum of multiples of ${a} or ${b} below ${n} is: ${result}`;

    //display result
    document.getElementById("resultDisplay").textContent = resultString;


}
