import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Creators } from "../../store/ducks/user";
const { userLogin } = Creators;

import * as S from "./styles";

import { Button, InputLarge } from "../../components/atoms";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    dispatch(userLogin({ email, senha }));
  };
  const pass = useRef();
  const submitInput = e => {
    if (e.key === "Enter") {
      pass.current.focus();
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <img
            alt="logo"
            src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
          />
        </S.Logo>
        <InputLarge
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onKeyPress={e => submitInput(e)}
          onChange={({ target }) => setEmail(target.value)}
        />
        <InputLarge
          placeholder="Senha"
          type="password"
          name="senha"
          value={senha}
          passref={pass}
          onChange={({ target }) => setSenha(target.value)}
        />
        <Button onClick={() => login()} text="Login" />
      </S.Content>
    </S.Container>
  );
};

export default Login;
