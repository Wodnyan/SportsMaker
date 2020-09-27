import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Form from "../components/AuthForm";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -49%)",
  },
  pointer: {
    cursor: "pointer",
  },
});

const Copyright = () => {
  return (
    <Typography component="h1" variant="body2" align="center">
      Copyright ©{" "}
      <Link href="/" color="textPrimary">
        SportsMaker
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export const Login = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h3" align="center">
        Login
      </Typography>
      <Form
        handleChange={handleChange}
        inputValues={inputs}
        buttonText="login"
        handleSubmit={handleSubmit}
      />
      <Box m={2}>
        <Grid container>
          <Grid item xs>
            <Link variant="body2" className={classes.pointer}>
              Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              component={RouterLink}
              to="/auth/sign-up"
              variant="body2"
              className={classes.pointer}
            >
              Don't have an account? Sign Up!
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
};
export const SignUp = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h3" align="center">
        Sign Up
      </Typography>
      <Form
        handleChange={handleChange}
        inputValues={inputs}
        buttonText="login"
        handleSubmit={handleSubmit}
      />
      <Box m={2}>
        <Grid container>
          <Grid item xs>
            <Link variant="body2" className={classes.pointer}>
              Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              component={RouterLink}
              to="/auth/login"
              variant="body2"
              className={classes.pointer}
            >
              Already have an account? Log In!
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
};
