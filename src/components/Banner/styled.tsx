import styled from "styled-components";
import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { Box } from "@mui/material";


export const BannerContainerMui = MuiStyled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  backgroundColor: '#C9C6C6',
}));


export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0px 0px;
  background-color: #C9C6C6;
  margin-top: 50px;
  margin-bottom: 200px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 420;
  padding: 30px;
`;