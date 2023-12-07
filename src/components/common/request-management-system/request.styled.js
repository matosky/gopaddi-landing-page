import styled from "styled-components";

export const RequestWrap = styled.section`
 width: 100%;
 max-width: 100%;
 background-color: #fff;
 margin: 4rem ;

 

 .right-box{
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 4rem 5rem;
    box-shadow: 0 2px 12px 0 #E8F1FF;
 }

 h3{
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: -0.0004px;

    span{
        display: block;
    }
 }

 p{
        font-size: 1.8rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
      }

 .left-img{
   max-width: 50%;
    img {
        width: 80%;
        height: 100%;
        object-fit: cover;
      }
 }
`;
