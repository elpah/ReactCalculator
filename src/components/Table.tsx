import React, { useEffect, useState } from "react";
import "../../src/style/table.css";
import { addition, subtract, divide, multiply } from "../mathFuntions";

export default function Table() {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  useEffect(() => {
    let result = firstNumber;
    if (operator) {
      result += operator + secondNumber;
    }
    setResult(result);
  }, [firstNumber, secondNumber, operator]);

  function handleClick(event: React.MouseEvent<HTMLTableCellElement>) {
    if (operator !== "") {
      let value = "";
      value = (event.target as HTMLTableCellElement).innerText;
      return setSecondNumber((prevResult) => prevResult + value);
    }
    let value = (event.target as HTMLTableCellElement).innerText;
    setFirstNumber((prevResult) => prevResult + value);
  }

  function useOperator(event: React.MouseEvent<HTMLTableCellElement>) {
    const value = (event.target as HTMLTableCellElement).innerText;

    if (firstNumber !== "") {
      setOperator(value);
      setResult((prevResult) => prevResult + value);
    }
    if (firstNumber !== "" && secondNumber !== "") {
      handleEqual();
      setOperator(value);
    }
  }
  function handleNegPos() {
    if (firstNumber && !secondNumber && parseFloat(firstNumber) > 0) {
      setFirstNumber((prevState) => "-" + prevState);
    }
    if (firstNumber && !secondNumber && parseFloat(firstNumber) < 0) {
      setFirstNumber((prevState) => prevState.replace(/^-/, ""));
    }
    if (secondNumber && parseFloat(secondNumber) > 0) {
      setSecondNumber((prevState) => "-" + prevState);
    }
    if (secondNumber && parseFloat(secondNumber) < 0) {
      setSecondNumber((prevState) => prevState.replace(/^-/, ""));
    }
  }
  function handlePercentage() {
    if (firstNumber && !secondNumber && !operator) {
      const res = parseFloat(firstNumber) / 100;
      setFirstNumber(res.toString());
    }
    if (secondNumber) {
      const res = parseFloat(secondNumber) / 100;
      setSecondNumber(res.toString());
    }
  }
  function handleEqual() {
    if (firstNumber && !secondNumber) {
      return setResult(firstNumber);
    }
    let result = 0;
    if (operator === "+") {
      result = addition(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "-") {
      result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "x") {
      result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "÷") {
      result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    setResult(result);
    setFirstNumber(result.toString());
    setSecondNumber("");
    setOperator("");
  }
  function handleReset() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
    setOperator("");
  }

  return (
    <>
      <div className="result">
        <h1>{result}</h1>
      </div>
      <table>
        <tr>
          <td className="clear" onClick={handleReset}>
            AC
          </td>
          <td className="posNeg" onClick={handleNegPos}>
            +/-
          </td>
          <td className="percentage" onClick={handlePercentage}>
            %
          </td>
          <td className="operator divide" onClick={useOperator}>
            ÷
          </td>
        </tr>
        <tr>
          <td className="seven" onClick={handleClick}>
            7
          </td>
          <td className="eight" onClick={handleClick}>
            8
          </td>
          <td className="nine" onClick={handleClick}>
            9
          </td>
          <td className="operator multiply" onClick={useOperator}>
            x
          </td>
        </tr>
        <tr>
          <td className="four" onClick={handleClick}>
            4
          </td>
          <td className="five" onClick={handleClick}>
            5
          </td>
          <td className="six" onClick={handleClick}>
            6
          </td>
          <td className="operator subtract" onClick={useOperator}>
            -
          </td>
        </tr>
        <tr>
          <td className="one" onClick={handleClick}>
            1
          </td>
          <td className="two" onClick={handleClick}>
            2
          </td>
          <td className="three" onClick={handleClick}>
            3
          </td>
          <td className="operator add" onClick={useOperator}>
            +
          </td>
        </tr>
        <tr>
          <td colSpan={2} onClick={handleClick}>
            0
          </td>
          <td className="period" onClick={handleClick}>
            .
          </td>
          <td className="equals" onClick={handleEqual}>
            =
          </td>
        </tr>
      </table>
    </>
  );
}
