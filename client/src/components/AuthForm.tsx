import React from "react";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles({
  input: {
    display: "block",
  },
});

const AuthForm: React.FC<any> = ({
  inputValues,
  buttonText,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();
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
        className={classes.input}
      />
      <TextField
        margin="normal"
        variant="outlined"
        label="Username"
        type="text"
        autoComplete="current-username"
        required
        fullWidth
        value={inputValues.username}
        onChange={handleChange}
        name="username"
        className={classes.input}
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
        className={classes.input}
      />
      <Button type="submit" variant="contained" fullWidth>
        {buttonText}
      </Button>
    </form>
  );
};
export default AuthForm;
