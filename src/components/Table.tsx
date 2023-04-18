import React, { useEffect, useState } from "react";
import "./table.css";

export default function Table() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState<string | number>("");
  const addition = (firstNumber: number, secondNumber: number) =>
    firstNumber + secondNumber;

  const subtract = (firstNumber: number, secondNumber: number) =>
    firstNumber - secondNumber;

  const divide = (firstNumber: number, secondNumber: number) => {
    if (secondNumber === 0) {
      throw new Error("cannot divide by 0");
    }
    return firstNumber / secondNumber;
  };
  const multiply = (firstNumber: number, secondNumber: number) => {
    return firstNumber * secondNumber;
  };

  useEffect(() => {
    console.log(firstNumber);
  }, [firstNumber]);

  useEffect(() => {
    console.log(secondNumber);
  }, [secondNumber]);

  useEffect(() => {
    setResult(firstNumber);
  }, [firstNumber]);

  useEffect(() => {
    setResult(firstNumber + operator + secondNumber);
  }, [secondNumber]);

  useEffect(() => {
    console.log(operator);
  }, [operator]);

  function handleClick(event: React.MouseEvent<HTMLTableCellElement>) {
    if (operator === "") {
      let value = (event.target as HTMLTableCellElement).innerText;
      setFirstNumber((prevResult) => prevResult + value);
    }
    if (operator !== "") {
      let value = "";
      value = (event.target as HTMLTableCellElement).innerText;
      setSecondNumber((prevResult) => prevResult + value);
    }
  }
  function useOperator(event: React.MouseEvent<HTMLTableCellElement>) {
    if (firstNumber !== "") {
      const value = (event.target as HTMLTableCellElement).innerText;
      setOperator(value);
      setResult((prevResult) => prevResult + value);
    }
  }

  function handleEqual() {
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
  }

  function handleReset() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
    setOperator("");
  }

  return (
    <>
      <h1 className="result">{result}</h1>

      <table>
        <tr>
          <td className="clear" onClick={handleReset}>
            AC
          </td>
          <td className="posNeg">+/-</td>
          <td className="percentage" onClick={useOperator}>
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
          <td className="period">.</td>
          <td className="equals" onClick={handleEqual}>
            =
          </td>
        </tr>
      </table>
    </>
  );
}
