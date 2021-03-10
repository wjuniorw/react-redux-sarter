import React from "react";
import { InputLarge } from "./styles";

const Input = ({ value, name, required, ...props }) => {
  const val = value[name];

  return (
    <InputLarge>
      <input {...props} value={val} />
      <span />
    </InputLarge>
  );
};

export default Input;
