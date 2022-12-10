import { Container, Button, Stack, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import { ArrowBack } from "@mui/icons-material";
import { styles } from "./styles";
import { register } from "./queries";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";

export function Signin({navigation}: {navigation: any}) {

  const [email, setEmail] = useState("");  
  const [name, setName] = useState("");  
  const [lastname, setLastname] = useState("");  
  const [password, setPassword] = useState("");  
  const [cellphone, setCellphone] = useState("");  
  const [registerUser] = useMutation(register);

  const onChangeEmail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };
  const onChangeLastname = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLastname(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };
  const onChangeCellphone = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCellphone(e.target.value);
  };

  const onSignin = async (email:String,name:String,lastname:String,password:String,cellphone:String)=>{
    const registeredUser = await registerUser({ variables: { email, name, lastname, password, cellphone} });
    localStorage.setItem("token", registeredUser.data.register.token);
    navigation.navigate("Home",{searchedProduct: ""});
    window.location.reload();
  };
  
  const goBack = () =>{
    navigation.goBack();
  }

  return (
    <Container maxWidth={"md"} sx={{ background: "#fff", paddingY:8, }}>
      <Button onClick={goBack}><ArrowBack/></Button>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img src={logo} style={styles.logo} />
        <Stack spacing={2} width={450}>
          <TextField value={email} id="email" label="Email" onChange={onChangeEmail} />
          <TextField value={name} id="name" label="Name" onChange={onChangeName}/>
          <TextField value={lastname} id="lastname" label="Lastname" onChange={onChangeLastname}/>
          <TextField value={password} id="password" label="Password" type="password" onChange={onChangePassword}/>
          <TextField value={cellphone} id="cellphone" label="Cellphone" onChange={onChangeCellphone}/>
        </Stack>
        <Button variant="outlined" style={{ width: 100 }} onClick={()=>onSignin(email,name,lastname,password,cellphone)}>
          Sign in
        </Button>
      </Stack>
    </Container>
  );
}
