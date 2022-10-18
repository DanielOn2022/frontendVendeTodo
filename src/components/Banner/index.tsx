import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTheme } from "styled-components";
import { BannerContainer, BannerContent } from "./styled";

interface Props {

}

export const Banner: FunctionComponent<Props> = ({}) => {
  const theme = useTheme()

  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h6">Bienvenido a Vende Todo</Typography>
      </BannerContent>
    </BannerContainer>
  )
}