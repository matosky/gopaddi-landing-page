import styled from "styled-components";
import img from "../../../assets/register-right.svg";

export const RegisterWrap = styled.section`
  height: 350px;
  width: 100%;
  padding: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: center;
  background: linear-gradient(to bottom, #edf4ff 0%, #fff 80%);


  .cloudImg {
    width: 5%;
    height: 11%;
    object-fit: cover;
  }

  .cloud1 {
    position: absolute;
    top: 0;
    left: -15px;
  }
  .cloud2 {
    position: absolute;
    top: -20px;
    right: 50%;
  }
  .cloud3 {
    position: absolute;
    bottom: 10px;
    left: 10%;
  }
  .cloud4 {
    position: absolute;
    bottom: 0;
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
    height: 80%;
    position: relative;

    @media screen and (max-width: 765px) {
    margin-top: 100px;
        width: 100%;
        margin: 0 auto;
    }

    .plane{
      position: absolute;
      top: 20%;
      left: -18%;
      height: 70%;
      width: 30%;
      object-fit: cover;
      transform: translateX(-50%);
      @media screen and (max-width: 765px) {
      width: 40%;
      z-index: 100;
      height: 20%;
      top: -10%;
      left: 50%;
    }

    }

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
      width: 100%;
      max-width: 100%;

      .button{
        & button{
          color: #0d6efd;
          background-color: #FFFFFF;
          border: 1px solid #0D6EFD;
        }
      }

      h3 {
        color: #0D6EFD;
        font-size: 2.5rem;
        font-weight: 500;
        white-space: nowrap;
        letter-spacing: -0.0004px;
        @media screen and (max-width: 765px) {
         white-space: wrap;
         width: 100%;
         text-align: center;
         letter-spacing: -0.4px;
         font-size: 2rem;
      }
      }
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
