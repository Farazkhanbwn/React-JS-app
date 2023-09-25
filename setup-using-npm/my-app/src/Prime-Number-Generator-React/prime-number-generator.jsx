import styles from "./prime-number.module.css";
import usePrimeNumberGeneratedValue from "./hooks/use-prime-number-generator";

function PrimeNumberGenerator() {
  const {
    consumedValue,
    primeNumberArray,
    generateConsumedValue,
    regeneratePrimeNumber,
  } = usePrimeNumberGeneratedValue();

  let handleGeneratePrimeNumbers = () => {
    regeneratePrimeNumber();
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
        onClick={generateConsumedValue}
      >
        Consume Prime Number
      </button>
    </>
  );
}

export default PrimeNumberGenerator;
