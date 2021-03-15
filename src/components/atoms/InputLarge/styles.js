import styled from "styled-components";

export const InputLarge = styled.div`
  width: 100%;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;

  input {
    width: 100%;
    height: 60px;
    border: none;
    color: #333333;
    font-size: 18px;
    padding: 0 20px;
    line-height: 1.2;
    font-family: Roboto;
    background: transparent;
  }
  input:focus + span {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  input:focus-visible {
    outline: none;
  }
  span {
    top: -1px;
    left: -1px;
    opacity: 0;
    display: block;
    position: absolute;
    visibility: hidden;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.4s;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid ${({ color }) => (color ? color : "#22bed9")};
    transform: scaleX(1.1) scaleY(1.3);
  }
`;
