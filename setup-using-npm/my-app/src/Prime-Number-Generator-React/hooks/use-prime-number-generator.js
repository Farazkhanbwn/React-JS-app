import { useEffect, useState } from "react";
import { getNumberThroughPrompt } from "../../shared/utils";
import PrimeNumber from "../../shared/utils/PrimeNumber";

const usePrimeNumberGeneratedValue = () => {
  let [primeNumberArray, setPrimeNumberArray] = useState();
  let [consumedValue, setConsumedValue] = useState();

  function initiatePrimeNumberGeneratorUsingPrompt() {
    let userNumberVal = getNumberThroughPrompt();
    let primeArr = PrimeNumber.generatePrimeNumbers(userNumberVal);
    setPrimeNumberArray(primeArr);
    setConsumedValue(undefined);
  }

  useEffect(() => {
    initiatePrimeNumberGeneratorUsingPrompt();
  }, []);

  // main functionality

  const generateConsumedValue = () => {
    if (!primeNumberArray[0]) {
      return alert("All Prime Number Consumed");
    }
    setConsumedValue(() => {
      return primeNumberArray[0];
    });
    setPrimeNumberArray((prevPrimeNumberArray) => {
      return prevPrimeNumberArray.slice(1);
    });
  };

  const regeneratePrimeNumber = () => {
    initiatePrimeNumberGeneratorUsingPrompt();
  };

  return {
    generateConsumedValue,
    consumedValue,
    primeNumberArray,
    regeneratePrimeNumber,
  };
};

export default usePrimeNumberGeneratedValue;
