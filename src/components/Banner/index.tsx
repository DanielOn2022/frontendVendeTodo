import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {}

export const Banner: FunctionComponent<Props> = ({}) => {
  return (
    <Typography variant="h6" color="primary" textAlign="center" marginTop={12} marginBottom={5}>
      Vende Todo, <i>vende todo tipo de productos no pedecederos</i>
    </Typography>
  );
};
