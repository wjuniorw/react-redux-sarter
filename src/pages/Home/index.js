import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { Creators } from "../../store/ducks/user";
const { loadUser } = Creators;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <S.Container>
      <p>Edit src/App.tsx and save to reload.</p>
      <a
        className="App-link"
        href="/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        Login
      </a>
    </S.Container>
  );
};

export default Home;
