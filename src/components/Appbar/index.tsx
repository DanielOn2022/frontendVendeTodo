import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useContext } from "react";
import {
  SearchContainer,
  SearchIconWrapper,
  InputBaseContainer,
  AppbarList,
} from "./styled";
import { NavigationContext } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import { styles } from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { Container } from "@mui/system";
import { useState } from "react";

export function Appbar(props: any) {
  const navigation = useContext(NavigationContext);
  const searchedProduct = props.state.searchedProduct;
  const [searchText, setsearchText] = useState("");

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
    navigation?.navigate("Home");
  };
  const setSearchedProduct = (e: React.ChangeEvent<HTMLDivElement>) => {
    setsearchText(e.target.id);
  };

  const onEnterSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code == "Enter") {
      props.state.setSearchedProduct(searchText);
      return;
    }
  };

  return (
    <AppBar color="primary" position="fixed">
      <Container>
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
          <SearchContainer
            id={searchedProduct}
            onKeyDown={onEnterSearch}
            onChange={setSearchedProduct}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBaseContainer placeholder="Search…" />
          </SearchContainer>
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
            <Button>
              <ShoppingCart sx={{ color: "white" }} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
