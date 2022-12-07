import styled from "styled-components";
import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { Box } from "@mui/material";


export const BannerContainerMui = MuiStyled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  marginTop: 150,
}));


export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px;
  height: 100px;
  background-color: AliceBlue;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;