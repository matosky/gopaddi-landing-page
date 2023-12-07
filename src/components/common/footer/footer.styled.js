import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: #4a84d6;

  .top {
    width: 100%;
    padding: 4rem 2rem;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    h5 {
      margin-bottom: 2rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        margin-top: 2rem;
      }
    }

    @media screen and (max-width: 765px) {
      grid-template-columns: 1fr;
    }
  }
`;
