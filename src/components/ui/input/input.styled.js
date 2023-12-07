
import styled from 'styled-components';

export const InputStyles = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
