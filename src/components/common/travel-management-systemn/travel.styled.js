import styled from "styled-components";

export const TravelWrap = styled.section`
  width: 100%;
  max-width: 100%;
  background: linear-gradient(to bottom, #edf4ff 0%, #edf4ff 100%);
  margin: 10rem 0 0 0;
  padding: 3rem 0;

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
    margin-left: 70px;
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
      color: #0d6efd;
      display: block;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #5e5e5e;
    @media screen and (max-width: 765px) {
      text-align: center;
      font-size: 1.3rem;
    }
  }

  .right {
    flex: 1;
    margin-top: -80px;
    @media screen and (max-width: 765px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -50px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
