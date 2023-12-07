import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: #4a84d6;
  padding: 3rem 0;

  a{
    color: #fff;
  }

  .top {
    .logo {
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

      h5 {
        margin-bottom: 2rem;
        color: #fff;
        font-size: 2rem;
        white-space: nowrap;
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        li {
          margin-top: 2rem;
          color: #fff;
        }
      }

      .column1{
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: #fff;
      }

      .last-column{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .check{
          display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        }

        p{
          color: #fff;
        }
      }
    }

    @media screen and (max-width: 765px) {
      .bottom{
        grid-template-columns: 1fr;
      }
    }
`;
