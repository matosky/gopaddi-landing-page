import styled from "styled-components";

export const NavbarWrap = styled.nav`
   width: fit-content;
    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .navbar-item{
      display: flex;
      align-items: center;
      justify-content: space-between;

      a{
        display: block;
      }

      span{
        margin-left: 0.5rem;
        display: block;
      }

      &:first-child{
        color: #0D6EFD;
      }

      & :hover{
        color: #0D6EFD;
      }
    }
`