import styled from "styled-components";


export const HeaderStyles  = styled.header`
   width: 100%;
   padding: 1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
   position: sticky;
   top: 0;
   z-index: 9999;
   background-color: #fff;


   .header-items{
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   .logo{
     img{
        width: 80%;
        height: 40%;
        object-fit: cover;
     }
   }

  
`