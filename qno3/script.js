function sumEvenIntegers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 === 0) {
            sum = sum + number;
        }
    });
    return sum;
}
function calculateSum() {
    let numbers = [10, 15, 25, 25, 28, 35, 40];
    let sum = sumEvenIntegers(numbers);
    document.getElementById("result").innerHTML =
        "Array: " + numbers + "<br>" +
        "Sum of Even Integers: " + sum;
}