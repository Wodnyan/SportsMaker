import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { LoginForm, SignUpForm } from "../components/AuthForms";
import axios from "axios";
import { API_ENDPOINT } from "../constants/apiEndpoint";

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
  const [form, setForm] = useState({
    password: "",
    email: "",
    username: "",
    isLoading: false,
    error: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody = {
      username: form.username,
      password: form.password,
      email: form.email,
    };
    try {
      setForm((prev) => ({
        ...prev,
        isLoading: true,
      }));
      const response = await axios.post(
        `${API_ENDPOINT}/auth/login`,
        requestBody
      );
      setForm((prev) => ({
        ...prev,
        isLoading: false,
      }));
      console.log(response);
    } catch (err) {
      setForm((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h3" align="center">
        Login
      </Typography>
      <LoginForm
        handleChange={handleChange}
        inputValues={form}
        handleSubmit={handleSubmit}
        isLoading={form.isLoading}
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
    username: "",
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody = {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
    };
    const response = await axios.post(
      `${API_ENDPOINT}/auth/register`,
      requestBody
    );
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h3" align="center">
        Sign Up
      </Typography>
      <SignUpForm
        handleChange={handleChange}
        inputValues={inputs}
        handleSubmit={handleSubmit}
        isLoading={false}
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
