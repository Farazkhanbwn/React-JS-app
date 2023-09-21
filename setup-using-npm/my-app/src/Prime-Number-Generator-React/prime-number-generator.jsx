import { useState } from "react";
import styles from "./prime-number.module.css";

function PrimeNumberGenerator() {
  let [primeNumberArray, setPrimeNumberArray] = useState([]);
  let [consumedValue, setConsumedValue] = useState();

  let isPrime = (number) => {
    let isComposite = 0;
    for (let j = 2; j <= number / 2; j++) {
      if (number % j === 0) {
        isComposite = 1;
      }
    }
    return isComposite === 0;
  };

  let generatePrime = () => {
    let choice = parseInt(prompt("Enter The Number of prime to generate"));
    let primeFound = 0;
    for (let i = 2; ; i++) {
      if (isPrime(i)) {
        primeFound++;
        primeNumberArray.push(i);
        setPrimeNumberArray([...primeNumberArray]);
      }
      if (primeFound === choice) {
        break;
      }
    }
  };

  let handleGeneratePrimeNumbers = () => {
    if (primeNumberArray.length > 0) {
      let shouldGenerate = window.confirm(
        "Are U want to again Generate Prime Numbers"
      );
      if (shouldGenerate) {
        primeNumberArray = [];
        setPrimeNumberArray([...primeNumberArray]);
        generatePrime();
        setConsumedValue();
      }
    } else {
      generatePrime();
    }
  };

  let consumerPrimeNumber = () => {
    if (primeNumberArray.length === 0) {
      alert("No Number In Queue Kindly First Gnerate Prime Numbers");
      setConsumedValue();
    } else {
      consumedValue = primeNumberArray.shift();
      setConsumedValue(consumedValue);
      setPrimeNumberArray([...primeNumberArray]);
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <h3>Values Generated ={primeNumberArray}</h3>
      <h3>Value Consumed as Prime ={consumedValue}</h3>
      <button
        className={`${styles.btn} ${styles.btnPrimary}`}
        onClick={handleGeneratePrimeNumbers}
      >
        GeneratePrimeNumber
      </button>

      <button
        className={`${styles.btn} ${styles.btnSuccess}`}
        onClick={consumerPrimeNumber}
      >
        Consume Prime Number
      </button>
    </>
  );
}

export default PrimeNumberGenerator;
