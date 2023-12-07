import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100vw;
  max-width: 100%;
  background-color: #4a84d6;
  padding: 3rem 0;

  a {
    color: #fff;
  }

  .top {
    .logo {
      margin-left: -12px;
      & img {
        width: 15%;
        height: 10%;
        object-fit: cover;
      }
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 4rem;
    grid-auto-flow: column;

    h5 {
      margin-bottom: 2rem;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        margin-top: 2rem;
        font-weight: 200;
        color: #fff;
        font-size: 1.2rem;
      }
    }

     & .first-column{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: #fff;
      grid-column: span 8;
      p{
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 27px;
      }
    }

    & .second-column{
      grid-column: 1rem;
      max-width: 100px;
    }

    & .third-column{
      grid-column: 1rem;
      max-width: 100px;
    }

    & .fourth-column{
      grid-column: 1rem;
      max-width: 100px;
      margin-right: 100px;
    }

    & .last-column {
      display: flex;
      flex-direction: column;
      grid-column: span 10;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 400px;


      .input{
        width: 100%;
      }


      .check {
        display: flex;
        margin: 2rem 0;
        gap: 1rem;
      }

      p {
        color: #fff;
      }

      .map{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media screen and (max-width: 765px) {
    .bottom {
      grid-template-columns: 1fr;
    }
  }
`;
