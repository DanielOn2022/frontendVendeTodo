import { Divider, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import moment from "moment";

export function ShelfInfo(props: any) {
  const shelf = props.shelf;
  return (
    <Container>
      <Divider />
      <Stack direction="row" spacing={3} padding={3}>
        <Typography variant="h5">
          Shelf ID: <b>{shelf.id}</b>
        </Typography>
        <Typography variant="h5">
          Last sorted: <b>{moment(shelf.sortedDate).format("DD/MM/YYYY")}</b>
        </Typography>
      </Stack>
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }} margin={2} >
        {shelf.sections?.map((section: any) => (
          <Grid item xs={4} spacing={0} border={0.5} margin={2} padding={2}>
            <Typography variant="h6">
              Section number: <b>{section.sectionNumber}</b>
            </Typography>
            <Typography variant="h6">Capacity: <b>{section.capacity}</b></Typography>
            <Typography variant="h6">
              Product: <b>{section.product.name}</b>
            </Typography>
            <Typography variant="h6">
              Product brand: <b>{section.product.brand}</b>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
