import styled from "styled-components";

export const FlexibleDiv = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  gap: ${props => props.gap || '0'}; 


  @media screen and (max-width: 765px) {
    width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
