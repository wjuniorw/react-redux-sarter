import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3ca5e7;
  background: linear-gradient(35deg, #3ca5e7, #22bed9);
`;

export const Content = styled.div`
  width: 60vh;
  height: 80vh;
  display: flex;
  background: #fff;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  // @media (max-width: 768px) {
  //   justify-content: space-around;
  // }
  @media (max-width: 576px) {
    margin: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
  div {
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-style: none;
    vertical-align: middle;
    width: ${({ size }) => (size ? size : "70%")};
  }
`;

export const Input = styled.input`
  height: 50px;
`;
