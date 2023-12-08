import { StyledButton } from "./button.styled";
const Button = ({text}) => {
    return (
        <StyledButton bg bd>{text}</StyledButton>
    );
  };
  
  export default Button;