import { Divider, Typography, Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import moment from "moment";

export function SaleInfo(props: any) {
  const sale = props.sale;
  return (
    <Container >
      <Stack margin={2} spacing={1} padding={3}>
        <Typography variant="h5">
          Sale ID: <b>{sale.id}</b>
        </Typography>
        <Typography variant="h5">
          Total: <b>${sale.total}</b>
        </Typography>
        <Typography variant="h5">
          Date: <b>{moment(sale.date).format("DD/MM/YYYY")}</b>
        </Typography>
      </Stack>
    </Container>
  );
}
