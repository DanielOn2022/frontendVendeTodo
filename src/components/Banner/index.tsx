import { Stack, Typography } from "@mui/material";
import { minWidth } from "@mui/system";
import { FunctionComponent } from "react";
import {BannerImage} from './styled';

interface Props {}

export const Banner: FunctionComponent<Props> = ({}) => {
  return (
    <Stack maxHeight={300} alignContent={'center'} alignItems={'center'} marginBottom={10} marginTop={10}>
      <BannerImage src={'https://imgs.search.brave.com/cnBCkIuxfoM7vcwH_dx3alkHgSwdQBQA1oGW5nwPktc/rs:fit:935:460:1/g:ce/aHR0cHM6Ly9nby5o/YXJib3JmcmVpZ2h0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNy8xNzgw/ODhfMjE0OTU3MTMu/cG5n'}  />
    </Stack>
  );
}; 