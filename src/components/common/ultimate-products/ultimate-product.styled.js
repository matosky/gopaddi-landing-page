import styled from "styled-components";

export const UltimateWrap = styled.section`
  width: 100%;
  max-width: 100%;
  position: relative;
  background: linear-gradient(to bottom, #edf4ff 0%, #edf4ff 100%);



  .box-wrap{
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
  }
  .stripe {
    position: relative;
    width: 140px;
    height: 140px;
    z-index: 10;
    position: absolute;
    padding-bottom: 3rem;
    top: 0;
    right: 0;
    @media screen and (max-width: 765px) {
       width: 80px;
    }
    .right-img-stripe {
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .left {
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: relative;
    .left-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }


  .right {
    width: 100%;
    max-width: 100%;
    height: 450px;
    background-color: #ffff;
    position: relative;
    top: -11px;

    &::after{
      position: absolute;
      content: "";
      width: 100%;
      height: 20px;
      background-color: #fff;
      z-index: 20;
      top: 100%;
      bottom: -40px;
    }
    


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
      width: 95%;
      max-width: 100%;
      height: 100%;
      position: absolute;
      top: 4px;
      left: 30px;
      display: flex;
      align-items: center;
      justify-content: right;
      z-index: 10;

      .text-wrap{
        width: 95%;
        margin-top: 6rem;
        max-width: 100%;
        padding-left: 6rem;
      }
      & h3 {
        width: 100%;
        font-size: 2.8rem;
        color: #0D6EFD;
        font-weight: 600;
        line-height: 40.1px;
        font-weight: 600;
        letter-spacing: -0.04px;
        @media screen and (max-width: 765px) {
         font-size: 2.3rem;
      }
        &span{
          width: 100%;
          display: block;
          margin: 1rem 0;
        }
      }

      & p{
        max-width: 100%;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
        color: #5E5E5E;
        @media screen and (max-width: 765px) {
         font-size: 1.3rem;
      }
      }
    }
  }

  @media screen and (max-width: 765px) {
        width: 100%;
        .box-wrap{
          flex-direction: column;
          justify-content: center;
        }

        .right{
          .utimate-desc{
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;

            .text-wrap{
              padding-left: 0;
            }
          }
        }

    }

`;
