import React, { useState } from "react";
import "./table.css";
export default function Table() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <h1 className="result"></h1>

      <table>
        <tr>
          <td className="clear">AC</td>
          <td className="posNeg">+/-</td>
          <td className="percentage">%</td>
          <td className="operator divide">÷</td>
        </tr>
        <tr>
          <td className="seven">7</td>
          <td className="eight">8</td>
          <td className="nine">9</td>
          <td className="operator multiply">x</td>
        </tr>
        <tr>
          <td className="foiur">4</td>
          <td className="five">5</td>
          <td className="six">6</td>
          <td className="operator subtract">-</td>
        </tr>
        <tr>
          <td className="one">1</td>
          <td className="two">2</td>
          <td className="three">3</td>
          <td className="operator add">+</td>
        </tr>
        <tr>
          <td colSpan={2}>0</td>
          <td className="period">.</td>
          <td className="equals">=</td>
        </tr>
      </table>
    </>
  );
}
