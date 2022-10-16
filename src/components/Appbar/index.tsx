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
  ListItemText
} from "./styled";

interface Props {}

export const Appbar: FunctionComponent<Props> = ({}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            <AppbarList itemType="row">
              <ListItemText primary="CRUD" />
            </AppbarList>
          </ButtonContainer>
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBaseContainer placeholder="Search…" />
          </SearchContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
