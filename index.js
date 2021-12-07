require('colors')

const Colors = {GREEN : 0, YELLOW: 1, RED : 2}

let currentColor = Colors.GREEN;
const firstNumber = process.argv[2];
const secondNumber = process.argv[3];
let noPrimeNumber = true;

if(isNaN(firstNumber) || isNaN(secondNumber)){
    console.log('Incorrect start parameters'.red);
    return;
}

const isPrimeNumber = (num) => {
    if (num <= 1)
        return false;
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true;
}
const changeColor = () => {
    currentColor++;
    if (currentColor > Colors.RED)
        currentColor = Colors.GREEN;
}

const colorPrint = (num) => {
    if(noPrimeNumber) noPrimeNumber = false;
    switch (currentColor){
        case Colors.RED:
            console.log(`${num}`.red);
            break;
        case Colors.GREEN:
            console.log(`${num}`.green);
            break;
        case Colors.YELLOW:
            console.log(`${num}`.yellow);
            break;
    }
    changeColor();
}

for (let i = firstNumber; i <= secondNumber; i++){
    if (isPrimeNumber(i)) colorPrint(i);
}

if(noPrimeNumber)
    console.log(`There are no primes in this range[${firstNumber},${secondNumber}]`.red);