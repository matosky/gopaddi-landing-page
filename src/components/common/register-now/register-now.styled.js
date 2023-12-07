import styled from "styled-components";
import img from "../../../assets/register-right.svg";

export const RegisterWrap = styled.section`
  width: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .register-box {
    border: 1px solid red;
    margin: 0 auto;
    width: 80%;
    position: relative;
    background-image: url(${img}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
