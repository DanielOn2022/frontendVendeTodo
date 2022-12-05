import { Navigation, WindowSharp } from "@mui/icons-material";
import { Container, Button, Typography, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";

export function Login({navigation}: {navigation: any}) {

  const onSignin = ()=>{
    navigation.navigate("Signin")
  };
  
  const onLogin = ()=>{
    navigation.navigate("Home");
  };

  return (
    <Container maxWidth={"xl"} sx={{ background: "#fff", paddingY:16, }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img src="logo.jpg" height="288" width="388" />
        <Stack spacing={2} width={450}>
          <TextField id="email" label="Email" />
          <TextField id="password" label="Password" />
        </Stack>
        <Button variant="outlined" style={{ width: 100 }} onClick={onLogin}>
          Log in
        </Button>
        <Typography>Do not have an account?</Typography>
        <Button variant="outlined" style={{ width: 100 }} onClick={onSignin} >
          Sign in
        </Button>
      </Stack>
    </Container>
  );
}
