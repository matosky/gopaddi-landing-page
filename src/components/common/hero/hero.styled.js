import styled from "styled-components";

export const HeroWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 95vh;
  padding-bottom: 8rem;
  .hero {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    padding: 50px;

    .hero-text {
      max-width: 50%;
      h1 {
        font-size: 4rem;
        margin-bottom: 20px 0;
        color: #0D6EFD;
      }

      h3{
        font-size: 2.5rem;
        color: #5E5E5E;
         white-space: nowrap;
        font-weight: 600;
      }

      p{
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
        max-width: 90%;
      }
    }

    .hero-img {
      display: flex;
      max-width: 50%;
      align-items: center;
      justify-content: right;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 765px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .hero-text{
      border: 1px solid red;
      max-width: 100%;
    }
  }
`;
