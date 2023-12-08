import styled from "styled-components";

export const TravelWrap = styled.section`
 width: 100%;
 max-width: 100%;
 background: linear-gradient(to bottom, #edf4ff 0%, #edf4ff 100%);
 margin: 4rem 0 0 0;
 padding: 3rem 0;

 

 .right-box{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* padding: 4rem 5rem; */
    box-shadow: 0 2px 12px 0 #E8F1FF;
 }

 h3{
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: -0.0004px;
    span{
        color: #0D6EFD;
        display: block;
    }
 }

 p{
        font-size: 1.8rem;
        max-width: 80%;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
      }

 .left-img{
   max-width: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
 }
`;
