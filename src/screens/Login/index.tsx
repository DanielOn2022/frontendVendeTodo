import { ArrowBack } from "@mui/icons-material";
import { Container, Button, Typography, Stack, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { login, loginEmployee } from "./queries";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import { NavigationContext } from "@react-navigation/core";

export function Login(props: any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [clientLogin, { data: client, error: clientError }] =
    useMutation(login);
  const [employeeLogin, { data: employee, error: employeeError }] =
    useMutation(loginEmployee);
  const navigation = useContext(NavigationContext);
  const { loginType } = props.route.params;

  const navigateSignin = () => {
    navigation?.navigate("Signin");
  };

  const goBack = () => {
    navigation?.goBack();
  };

  const onLoginClient = async (email: String, password: String) => {
    const loggedUser = await clientLogin({ variables: { email, password } });
    if (!loggedUser) return;
    localStorage.setItem("token", loggedUser.data.login.token);
    localStorage.setItem("name", loggedUser.data.login.name);
    window.location.reload();
  };

  const onLoginEmployee = async (email: String, password: String) => {
    const loggedUser = await employeeLogin({
      variables: { email, password },
    });
    if (!loggedUser){
      localStorage.clear();
       return;
    }
    console.log("USEER -> ",loggedUser.data.loginEmployee)
    localStorage.setItem("token", loggedUser.data.loginEmployee.token);
    localStorage.setItem("name", loggedUser.data.loginEmployee.name);
    localStorage.setItem("role", loggedUser.data.loginEmployee.role);
    localStorage.setItem("cellphone", loggedUser.data.loginEmployee.cellphone);
    localStorage.setItem("rfc", loggedUser.data.loginEmployee.rfc);
    localStorage.setItem("email", loggedUser.data.loginEmployee.email);
    window.location.reload();
  };

  const onChangeEmail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container sx={{ background: "#fff", paddingY: 8, paddingX: 0 }}>
      <Button onClick={goBack}>
        <ArrowBack />
      </Button>
      <Container maxWidth={"xl"} sx={{ paddingY: 0 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img src={logo} style={styles.logo} />
          <Stack spacing={2} width={450}>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={onChangeEmail}
            />
            <TextField
              type="password"
              id="outlined-password-input"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
            <Container>
              {clientError || employeeError ? (
                <Typography sx={{ color: "red" }} textAlign="center">
                  Error ocurred at log in{" "}
                </Typography>
              ) : (
                <p></p>
              )}
            </Container>
          </Stack>
          <Button
            variant="outlined"
            style={{ width: 100 }}
            onClick={() => {
              loginType == "client"
                ? onLoginClient(email, password)
                : onLoginEmployee(email, password);
            }}
          >
            Log in
          </Button>
          {loginType == "client" && (
            <Stack justifyContent="center" alignItems="center">
              <Typography>Do not have an account?</Typography>
              <Button
                variant="outlined"
                style={{ width: 100 }}
                onClick={navigateSignin}
              >
                Sign in
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </Container>
  );
}
