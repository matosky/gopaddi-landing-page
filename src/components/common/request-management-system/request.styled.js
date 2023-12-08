import styled from "styled-components";

export const RequestWrap = styled.section`
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  margin: 4rem 0;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 765px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }

  .left-box {
    flex: 1;
    padding: 5rem;
    margin-right: 70px;
    box-shadow: 0 2px 12px 0 #e8f1ff;
    border-radius: 24px;
    @media screen and (max-width: 765px) {
      padding: 1rem;
      margin-right: 0;
      margin-top: 1rem;
      width: 100%;
    }
  }

  h3 {
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.0004px;
    color: #383737;
    @media screen and (max-width: 765px) {
      text-align: center;
      font-size: 2.3rem;
    }
    span {
      display: block;
      white-space: nowrap;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 1rem 0 2rem 0;
    color: #5e5e5e;
    @media screen and (max-width: 765px) {
      width: 100%;
      text-align: center;
      font-size: 1.3rem;
    }
  }

  .left-img {
    flex: 1;
    @media screen and (max-width: 765px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 80%;
      height: 100%;
      object-fit: cover;
    }

  }
`;
