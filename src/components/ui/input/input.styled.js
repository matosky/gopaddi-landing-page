import styled from "styled-components";

export const InputStyles = styled.div`
  input {
    padding: 15px 8px;
    width: 100%;
    background-color: #82b4ff;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      border-color: #82b4ff;
      outline: none;
    }

    &::placeholder{
      color: #fff;
      font-weight: 22px;
      font-weight: 700;
    }
  }
`;
