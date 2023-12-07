import styled from "styled-components";

export const InputStyles = styled.div`
  input {
    padding: 10px 8px;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #82b4ff;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      border-color: #82b4ff;
      outline: none;
    }

    &::placeholder{
      color: #fff;
    }
  }
`;
