// to find the sum of even integers
function sumEvenIntegers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
function calculateSum() {
    let numbers = [20, 15, 14, 25, 30, 35, 40];
    let sum = sumEvenIntegers(numbers);
    document.getElementById("result").innerHTML =
        "Array: [" + numbers + "]<br>" +
        "Sum of even integers: " + sum;
}

