import React from "react";

import * as S from "./styles";

const Button = ({ text, type, className, onClick }) => (
  <S.Container type={type} onClick={onClick} className={className}>
    {text}
  </S.Container>
);

export default Button;
