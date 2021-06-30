function factorial(n) {

    if (n === 0) {
        return 1;
    } else if (n > 0) {
        return n * factorial(n - 1);
    } else {
        console.log('Enter a positive number.');
    }
}

console.log(factorial(-12))