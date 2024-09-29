alert("Loaded Euler JS");

// answers

total = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) total += i;
};

alert('Find the sum of all the multiples of 3 or 5 below 1000 : ' + total);


// 2.
a = 3;
b = 5;
n = 1000;
function sumMultiples(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

const result = findMultiples(3, 5, 1000);
alert('multiples of a or b below n : ' + result);

// 3.
function calculateFromUserInput() {
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;
    let n = document.getElementById('inputN').value;

    const result = sumMultiples(a, b, n);
    alert(`Sum of multiples of ${a} or ${b} below ${n} is: ${result}`);
}