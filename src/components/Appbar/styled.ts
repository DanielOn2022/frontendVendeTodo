import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { InputBase, List, ListItemText as MuiListItemText } from '@mui/material';
import styled from "styled-components";

interface ButtonContainerProps {
  marginLeft?: string;
  width?: string;
}

export const SearchContainer = MuiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = MuiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InputBaseContainer = MuiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export const AppbarList = MuiStyled(List)(({ itemType }) => ({
  display: itemType === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'space-between',
  alignItems: 'left'
}));

export const ListItemText = MuiStyled(MuiListItemText)(({ theme }) => ({
  cursor: 'pointer' 
}));

export const ButtonContainer = styled.div`
  margin-left: ${({marginLeft}: ButtonContainerProps) => marginLeft};
  width: ${({width}: ButtonContainerProps) => width};
`;