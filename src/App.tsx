import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Complex from "./components/Complex";
import Button from "./components/Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number | string | null>(null);
  const [displayResult, setDisplayResult] = useState<number | null | string>(
    ""
  );
  const [simpleButtonToggle, setSimpleButtonToggle] = useState(false);
  const [complexButtonToggle, setComplexButtonToggle] = useState(false);
  //const [closeButton, setCloseButton] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      expr: inputValue,
      precision: 5,
    };
    fetch("http://api.mathjs.org/v4/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setDisplayResult(result);
    setInputValue("");
  }, [result]);

  const toggleSimpleCalculator = () => {
    if (!calculatorOpen) {
      setSimpleButtonToggle(true);
      setCalculatorOpen(true);
    }
  };

  const toggleComplexCalculator = () => {
    if (!calculatorOpen) {
      setComplexButtonToggle(true);
      setCalculatorOpen(true);
    }
  };

  const handleCloseButton = () => {
    setSimpleButtonToggle(false);
    setComplexButtonToggle(false);
    setCalculatorOpen(false);
  };

  return (
    <>
      <div className="button-container">
        {!calculatorOpen && (
          <>
            <Button
              onClick={toggleSimpleCalculator}
              name="Perform Simple Calculations"
            />
            <Button
              onClick={toggleComplexCalculator}
              name="Perform Complex Calculations"
            />
          </>
        )}
      </div>

      {calculatorOpen && <Button onClick={handleCloseButton} name="Close" />}

      {simpleButtonToggle && <Table />}
      {complexButtonToggle && (
        <div>
          <p>{displayResult}</p>
          <Complex
            onSubmit={handleSubmit}
            value={inputValue}
            inputChange={handleInputChange}
          />
        </div>
      )}
    </>
  );
}

export default App;
