import React from "react";
import { TextField, Button } from "@material-ui/core";

interface InputValues {
  email: string;
  password: string;
}

interface Props {
  inputValues: InputValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

const AuthForm: React.FC<any> = ({
  inputValues,
  buttonText,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        variant="outlined"
        label="E-mail"
        autoComplete="email"
        fullWidth
        required
        value={inputValues.email}
        onChange={handleChange}
        name="email"
      />
      <TextField
        margin="normal"
        variant="outlined"
        label="Password"
        type="password"
        autoComplete="current-password"
        required
        fullWidth
        value={inputValues.password}
        onChange={handleChange}
        name="password"
      />
      <Button type="submit" variant="contained" fullWidth>
        {buttonText}
      </Button>
    </form>
  );
};
export default AuthForm;
