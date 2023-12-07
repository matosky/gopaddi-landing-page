import styled from "styled-components";



export const FlexibleDiv = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
`;

