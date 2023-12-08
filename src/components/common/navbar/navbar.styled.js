import styled from "styled-components";

export const NavbarWrap = styled.nav`
  width: fit-content;
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .navbar-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 765px){
      display: none;
    }

    a {
      display: block;
    }

    & .active {
      position: absolute;
      display: block;
      bottom: -15px;
      left: 50%;
      width: 10px;
      height: 10px;
      transform: translateX(-50%);
      border-radius: 50%;
      background-color: #0d6efd;
    }

    .icon {
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      & :last-child{
        font-weight: 100;
      }
    }

    &:first-child {
      color: #0d6efd;
    }

    & :hover {
      color: #0d6efd;
    }
  }
`;
