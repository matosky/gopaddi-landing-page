import { InputStyles } from "./input.styled";

// Example usage in another component
export const Input = ({type, placeholder}) => {
    return (
      <InputStyles>
        <input type={type} i placeholder={placeholder}  />
      </InputStyles>
    );
  };
  