class PrimeNumber {
  static isPrime = (number) => {
    for (let j = 2; j <= number / 2; j++) {
      if (number % j === 0) return false;
    }
    return true;
  };

  static generatePrimeNumbers(requiredNumbers) {
    let primeCount = 0;
    let primesArr = [];
    for (let i = 2; ; i++) {
      if (PrimeNumber.isPrime(i)) {
        primeCount++;
        primesArr.push(i);
      }
      if (primeCount === requiredNumbers) {
        break;
      }
    }
    return primesArr;
  }
}

export default PrimeNumber;
