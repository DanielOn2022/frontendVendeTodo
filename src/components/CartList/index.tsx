import { useQuery } from "@apollo/client";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { LineCard } from "../LineCard";
import { getCart } from "./queries";

export function CartList(props: any) {
  const { data: userCart, error: errorCart, loading } = useQuery(getCart);
  const lines = !loading ? userCart.getCart.cartLines : [];
  console.log("LINESLIST->", lines);
  return (
    <Container maxWidth="xl">
      {lines.length==0&&(<Typography variant="h4" textAlign="center">Tu carrito está vacío</Typography>)}
      <Stack spacing={4}>
        {lines?.map((line: any) => (
          <Grid item xs={4}>
            <LineCard line={line} />
          </Grid>
        ))}
      </Stack>
    </Container>
  );
}
