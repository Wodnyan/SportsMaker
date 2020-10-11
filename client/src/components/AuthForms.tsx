import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button, CircularProgress, Box } from "@material-ui/core";

interface InputValues {
  email: string;
  password: string;
  username?: string;
}

interface Props {
  inputValues: InputValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const useStyles = makeStyles({
  input: {
    display: "block",
    marginBottom: "10px",
  },
});
export const LoginForm: React.FC<Props> = ({
  inputValues,
  handleChange,
  handleSubmit,
  isLoading,
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
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      )}
    </form>
  );
};

export const SignUpForm: React.FC<Props> = ({
  inputValues,
  handleChange,
  handleSubmit,
  isLoading,
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
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      )}
    </form>
  );
};
