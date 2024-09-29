/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output
*/
alert("Loaded Euler JS");

// answers

// 1.

total = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) total += i;
};

alert('Find the sum of all the multiples of 3 or 5 below 1000 : ' + total);


// 2.
a = 3;
b = 5;
n = 1000;
function findMultiples(aval, bval, nval) {
    total = 0;
    for (i = 0; i < nval; i++) {
        if (i % aval == 0 || i % bval == 0) total += i;
    };
    return total;
}

const totalFinal = findMultiples(a,b,n);
alert('multiples of a or b below n : '+totalFinal);

// 3.
function findMultiplesViaInput() {
    let inputTextA = document.getElementById('userInputA').value;
    let inputTextB = document.getElementById('userInputB').value;
    let inputTextN = document.getElementById('userInputN').value;
    total = 0;
    for (i = 0; i < inputTextN; i++) {
        if (i % inputTextA == 0 || i % inputTextB == 0) total += i;
    };
     alert('Your answer is '+total);
}