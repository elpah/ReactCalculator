import React from "react";
import "../../src/style/complex.css";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  inputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Complex({ onSubmit, inputChange, value }: Props) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <textarea value={value} onChange={inputChange}></textarea>
        <br />
        <button type="submit">Calculate</button>
      </form>
    </>
  );
}
