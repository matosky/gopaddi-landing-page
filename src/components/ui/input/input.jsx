// Example usage in another component
export const Input = ({type}) => {
    return (
      <div>
        <label htmlFor="username">Username:</label>
        <Input type={type} id="username" name="username" />
      </div>
    );
  };
  