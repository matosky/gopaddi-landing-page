import styled from "styled-components";

export const NavbarWrap = styled.nav`
   width: fit-content;
    ul{
        display: flex;
        gap: 2rem;
    }
    .navbar-item{
      display: flex;
      align-items: center;
      justify-content: space-between;

      & :hover{
        color: #0D6EFD;
      }
    }
`