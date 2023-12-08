import styled from "styled-components";

export const SocialWrap = styled.section`
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

  .right-box {
    flex: 1;
    padding: 5rem;
    margin-left: 70px;
    box-shadow: 0 2px 12px 0 #e8f1ff;
    border-radius: 24px;
    @media screen and (max-width: 765px) {
      padding: 1rem;
      margin-left: 0;
      margin: 3rem 0;
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
      color: #0D6EFD;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #5E5E5E;
    @media screen and (max-width: 765px) {
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
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
