import { AppBar, Button, Stack, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { SearchContainer, InputBaseContainer } from "./styled";
import { NavigationContext } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { Container, margin } from "@mui/system";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { islogged } from "./queries";

export function Appbar(props: any) {
  const navigation = useContext(NavigationContext);
  const [searchText, setsearchText] = useState(props.searchedProduct);
  const { data: userData, error } = useQuery(islogged, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (userData) {
      localStorage.setItem("token", userData.logedIn.token);
    }
  }, [userData]);

  const navigateLoginAsClient = () => {
    navigation?.navigate("Login", { loginType: "client" });
  };
  const navigateLoginAsEmployee = () => {
    navigation?.navigate("Login", { loginType: "employee" });
  };
  const navigateSignin = () => {
    navigation?.navigate("Signin");
  };
  const navigateHome = () => {
    window.location.reload();
  };
  const navigateCart = () => {
    navigation?.navigate("ShoppingCart");
  };
  const setSearchedText = (e: any) => {
    setsearchText(e.target.value);
  };

  const onSearch = () => {
    navigation?.navigate("Home", { searchedProduct: searchText });
  };

  const onLogout = () => {
    localStorage.clear();
    navigation?.navigate("Home", { searchedProduct: "" });
    window.location.reload();
  };
  //console.log("ROLITO EN TOPBAR ->->->", localStorage.getItem("role"))
  return (
    <AppBar color="primary" position="fixed">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Button onClick={navigateHome}>
              <img src={logo} style={{ height: 50, width: 100 }} />
            </Button>
            <Button
              variant="text"
              sx={styles.button}
              onClick={navigateLoginAsEmployee}
            >
              Employees
            </Button>
          </Stack>
          {!localStorage.getItem("role") && (
            <Stack direction="row" justifyContent="center" alignItems="center">
              <SearchContainer
                id={searchText}
                onChange={setSearchedText}
                placeholder="Search..."
                style={{ maxWidth:"65%", margin:0}}
              >
                <InputBaseContainer placeholder="Search…" />
              </SearchContainer>
              <Button onClick={onSearch}>
                <SearchIcon style={{ color: "#fff" }} />
              </Button>
            </Stack>
          )}
          {userData ? (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Typography minWidth="50%">{localStorage.getItem("name")}</Typography>
              <Button variant="text" sx={styles.button} onClick={onLogout}>
                Logout
              </Button>
              {!localStorage.getItem("role") && (
                <Button onClick={navigateCart}>
                  <ShoppingCart sx={{ color: "white" }} />
                </Button>
              )}
            </Stack>
          ) : (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Button sx={styles.button} onClick={navigateSignin}>
                Sign in
              </Button>
              <Button sx={styles.button} onClick={navigateLoginAsClient}>
                Log in
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
}
