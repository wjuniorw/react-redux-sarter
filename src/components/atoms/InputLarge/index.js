import React from "react";
import { InputLarge } from "./styles";

const Input = ({ value, name, required, passref, ...props }) => {
  const val = value[name];

  return (
    <InputLarge>
      <input {...props} ref={passref} value={val} />
      <span />
    </InputLarge>
  );
};

export default Input;
