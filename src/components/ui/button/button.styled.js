import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 32px;
  font-size: 1.6rem;
  background-color: #0D6EFD;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }


  @media screen and (max-width: 765px) {
   font-size: 1.2rem;
  }

 
`;
