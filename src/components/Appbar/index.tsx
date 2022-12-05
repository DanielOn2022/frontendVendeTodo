import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  ListItem,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { FunctionComponent } from "react";
import {
  SearchContainer,
  SearchIconWrapper,
  InputBaseContainer,
  ButtonContainer,
  AppbarList,
  ListItemText,
} from "./styled";
import { Product } from "../../domain/Product/Product";


interface Props {
  handleOnProductList : ()=>void
  handleOnCreateProduct : ()=>void
}

export const Appbar: FunctionComponent<Props> = ({handleOnCreateProduct, handleOnProductList}) => {

  return (
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Vende Todo
          </Typography>
          <ButtonContainer marginLeft="16px">
            <Button variant="text" sx={{color:"white"}} onClick={handleOnProductList}> productos</Button>
          </ButtonContainer>
          <ButtonContainer marginLeft="16px">
            <Button variant="text" sx={{color:"white"}} onClick={handleOnCreateProduct}> añadir producto</Button>
          </ButtonContainer>
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBaseContainer placeholder="Search…" />
          </SearchContainer>
        </Toolbar>
      </AppBar>
  );
};
