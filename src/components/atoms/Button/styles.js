import styled from "styled-components";

// export const Container = styled.button`
//   padding: 0 16px;
//   border-radius: 8px;
//   border: none;
//   font-size: 16px;
//   text-align: center;
// `;

export const Container = styled.button`
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #09f;
  border-radius: 10px;
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  transition: all 2s;
  position: relative;
  border: none;
  outline: none !important;
  :hover {
    content: "";
    display: block;
    border-radius: 10px;
    transition: all 2s;
    background: linear-gradient(45deg, #00dbde, #22bed9);
  }
`;
