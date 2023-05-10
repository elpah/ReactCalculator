import React from "react";
import "../../src/style/button.css";
interface Props {
  onClick: () => void;
  name: string;
}
export default function Button({ onClick, name }: Props) {
  return <button onClick={onClick}>{name}</button>;
}
