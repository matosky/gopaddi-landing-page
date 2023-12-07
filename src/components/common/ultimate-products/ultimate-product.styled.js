import styled from "styled-components";

export const UltimateWrap = styled.section`
  width: 100%;
  max-width: 100%;
  position: relative;
  background: linear-gradient(to bottom, #edf4ff 0%, #edf4ff 100%);
  .stripe {
    position: relative;
    width: 140px;
    height: 140px;
    z-index: 10;
    position: absolute;
    padding-bottom: 3rem;
    top: 0;
    right: 0;
    .right-img-stripe {
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .left {
    width: 100%;
    max-width: 100%;
    height: 400px;
    position: relative;
    .left-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  }


  .right {
    width: 100%;
    max-width: 100%;
    height: 400px;
    background-color: #fff;
    position: relative;


    .fixed-bg {
    width: 100%;
    height: 100%;
    .right-img-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

    .utimate-desc {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      z-index: 10;
      & h3 {
        width: 100%;
        font-size: 2.4rem;
        color: #0D6EFD;
        font-weight: 600;
        line-height: 25.1px;
        font-weight: 600;
        letter-spacing: -0.0004px;
      }

      & p{
        width: 100%;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
        color: #5E5E5E;
      }
    }
  }

`;
