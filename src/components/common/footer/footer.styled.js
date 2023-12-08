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
      margin-left: -5px;
      & img {
        width: 10%;
        height: 20%;
        object-fit: cover;
      }
      @media screen and (max-width: 765px) {
      margin-left: 0;
      & img {
        width: 30%;
        height: 20%;
        object-fit: cover;
      }
    }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    @media screen and (max-width: 765px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    & .inner-row {
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-auto-flow: column;
      gap: 2rem;

      @media screen and (max-width: 765px) {
        grid-template-columns: 1fr;
        grid-auto-flow: row;
      }

      & :nth-child(1) {
        grid-column: span 2;
        margin-right: 2rem;
        @media screen and (max-width: 765px) {
          grid-column: auto;
        }
        & p {
          margin-bottom: 2rem;
          font-family: "Poppins", sans-serif;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
        }
      }

      & .column {
        width: fit-content;
        @media screen and (max-width: 765px) {
          width: 100%;
          max-width: 100%;
        }
      }
    }

    h5 {
      margin-bottom: 2rem;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
      @media screen and (max-width: 765px) {
          margin-bottom: 0.5rem;
        }
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        margin-top: 2rem;
        font-weight: 200;
        cursor: pointer;
        color: #fff;
        font-size: 1.2rem;
        @media screen and (max-width: 765px) {
          margin-top: 0.5rem;
        }
      }
    }

    & .last-column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 400px;

      .input {
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

      .map {
        img {
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
