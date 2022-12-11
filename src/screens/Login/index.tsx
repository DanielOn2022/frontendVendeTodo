import { ArrowBack } from "@mui/icons-material";
import { Container, Button, Typography, Stack, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { login } from "./queries";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

export function Login(props: any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginUser, { data, loading, error }] = useMutation(login);
  const { navigation } = props;
  const { loginType } = props.route.params;

  const navigateSignin = () => {
    navigation.navigate("Signin");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onLogin = async (email: String, password: String) => {
    try {
      const loggedUser = await loginUser({ variables: { email, password } });
      localStorage.setItem("token", loggedUser.data.login.token);
      if (loginType == "client") {
        navigation.navigate("Home", { searchedProduct: "" });
      } else {
        navigation.navigate("Suplier");
      }
      window.location.reload();
    } catch (e) {
      console.log("e: ", e);
      if (error) console.log("error: ", error);
    }
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
            {error && <Typography sx={{color:"red"}} textAlign="center">"Error ocurred at log in"</Typography>}
          </Stack>
          <Button
            variant="outlined"
            style={{ width: 100 }}
            onClick={() => onLogin(email, password)}
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
