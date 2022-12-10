import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { CartList } from "../../components/CartList";
import { getCart } from "../../components/CartList/queries";

export function ShoppingCart(props: any, navigation: { navigation: any }) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ background: "#fff", marginTop: 16 }}
    >
      <Appbar searchedProduct={""} />
      <CartList />
    </Container>
  );
}
