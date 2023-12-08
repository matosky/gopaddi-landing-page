import styled from "styled-components";

export const HeroWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 80vh;
  padding: 0 0 8rem 0;

  .hero {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hero-text {
      margin-left: 8rem;
      h1 {
        font-size: 4rem;
        margin-bottom: 20px 0;
        color: #0d6efd;
        position: relative;

        .dot-s {
          position: relative;
        }

        .dots {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 2px;
          right: -20px;
          display: flex;
          transform: rotate(-120deg);
          justify-content: space-between;
          & .dot1 {
            width: 2px;
            height: 20px;
            display: block;
            border-radius: 24px;
            background-color: #0d6efd;
            position: absolute;
            left: 50%;
            top: 3px;
          }
          & .dot2 {
            width: 2px;
            height: 20px;
            display: block;
            background-color: #0d6efd;
            margin-bottom: 10px;
            border-radius: 24px;
            transform: rotate(-160deg);

            position: absolute;
            left: 0;
          }
          & .dot3 {
            width: 2px;
            height: 20px;
            border-radius: 24px;
            display: block;
            transform: rotate(160deg);
            background-color: #0d6efd;
            position: absolute;
            right: 0;
          }
        }
      }

      h3 {
        font-size: 2.5rem;
        color: #383737;
        white-space: nowrap;
        font-weight: 600;
      }

      p {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
        max-width: 80%;
        color: #5E5E5E;
      }
    }

    .hero-img {
      display: flex;
      width: 100%;
      max-width: 80%;
      align-items: center;
      justify-content: right;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 765px) {
    height: 80vh;
    padding: 0 0 2rem 0;
    .hero {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;

      .hero-text {
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;

        h1 {
          text-align: center;
          font-size: 2.5rem;
        }

        h3{
          font-size: 2rem;
        }

        p {
          width: 100%;
          max-width: 90%;
          text-align: center;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
