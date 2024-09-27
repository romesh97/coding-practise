let calSum = () =>  {
    let totalSum = 0;
    for (let number = 0; number<1000; number++)
    if(number % 3 == 0 || number % 5 == 0){
        totalSum +=number;
        alert("sum of multiples of 3 and 5 and below 1000 is" + number)
    } 
}