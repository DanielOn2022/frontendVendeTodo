import { Container, Button, Stack, TextField } from "@mui/material";
import logo from "../../assets/logo.png";

export function Signin({navigation}: {navigation: any}) {

  const onSignin = ()=>{
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
        <img src={logo} height="150" width="250" />
        <Stack spacing={2} width={450}>
          <TextField id="email" label="Email" />
          <TextField id="name" label="Name" />
          <TextField id="lastname" label="Lastname" />
          <TextField id="password" label="Password" />
          <TextField id="cellphone" label="Cellphone" />
        </Stack>
        <Button variant="outlined" style={{ width: 100 }} onClick={onSignin}>
          Sign in
        </Button>
      </Stack>
    </Container>
  );
}
