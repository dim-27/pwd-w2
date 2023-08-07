function countFactorial(n) {
    if(n === 0) {
        return 1;
    }
    return n * countFactorial(n-1);
}

countFactorial(4)
countFactorial(12)