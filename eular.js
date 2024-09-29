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
function findMultiples(a, b, n) {
    total = 0;
    for (i = 0; i < n; i++) {
        if (i % a == 0 || i % b == 0) total += i;
    };
    return total;
}

const totalFinal = findMultiples(a, b, n);
alert('multiples of a or b below n : ' + totalFinal);

// 3.
function multiplesValue() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    let inputN = document.getElementById('inputN').value;
    total = 0;
    for (i = 0; i < inputN; i++) {
        if (i % inputA == 0 || i % inputB == 0) total += i;
    };
    alert('Your answer is ' + total);
}