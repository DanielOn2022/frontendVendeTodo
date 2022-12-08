import { ArrowBack } from "@mui/icons-material";
import { Container, Button, Typography, Stack, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { login } from "./queries";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

export function Login(props:any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginUser] = useMutation(login);
  const {navigation } = props
  const { globalState, loginType } = props.route.params;
  const [ user, setUser] = globalState;

  const navigateSignin = () => {
    navigation.navigate("Signin");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onLogin = async (email: String, password: String) => {
    const loggedUser = await loginUser({ variables: { email, password } });
    localStorage.setItem("token", loggedUser.data.login.token);
    setUser(loggedUser);
    if(loginType=="client"){
      navigation.navigate("Home");
    }
    else{
      navigation.navigate("Suplier");
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container sx={{ background: "#fff", paddingY: 8, paddingX:0 }}>
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
          </Stack>
          <Button
            variant="outlined"
            style={{ width: 100 }}
            onClick={() => onLogin(email, password)}
          >
            Log in
          </Button>
          {loginType == "client" && (
            <div>
              <Typography>Do not have an account?</Typography>
              <Button
                variant="outlined"
                style={{ width: 100 }}
                onClick={navigateSignin}
              >
                Sign in
              </Button>
            </div>
          )}
        </Stack>
      </Container>
    </Container>
  );
}
