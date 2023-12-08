import styled from "styled-components";
import img from "../../../assets/register-right.svg";

export const RegisterWrap = styled.section`
  height: 350px;
  width: 100%;
  padding: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #edf4ff 0%, #fff 80%);


  .cloudImg {
    width: 10%;
    height: 20%;
    object-fit: cover;
  }

  .cloud1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .cloud2 {
    position: absolute;
    top: -10px;
    right: 50%;
  }
  .cloud3 {
    position: absolute;
    bottom: 10px;
    left: 30%;
  }
  .cloud4 {
    position: absolute;
    top: 0;
    left: 40%;
  }

  .cloud5 {
    position: absolute;
    top: 0;
    left: 90%;
  }
  .cloud6 {
    position: absolute;
    top: 50%;
    right: 10px;
  }

  .register-box {
    width: 60%;
    height: 60%;
    position: relative;

    .fixed-line{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 10px;
      background-color: #C9DDFF;
    }
    .text {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      h3 {
        color: #0d6efd;
        font-size: 2rem;
        font-weight: 500;
        white-space: nowrap;
        letter-spacing: -0.0004px;
      }
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
