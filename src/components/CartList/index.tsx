import { useMutation, useQuery } from "@apollo/client";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LineCard } from "../LineCard";
import { getCart, removeLineCart } from "./queries";
import emptycart from "../../assets/emptycart.png";
import { ShoppingCart } from "../../domain/ShopppingCart/ShoppingCart";
import { SaleLine } from "../../domain/SaleLine/SaleLine";
import { Product } from "../../domain/Product/Product";
import { any } from "prop-types";
import { ShoppingCartFactory } from "../../domain/ShopppingCart/ShoppingCartFactory";

export function CartList(props: any) {
  const [cart, setCart] = useState<ShoppingCart | null>(null);

  const { data: userCart, error: errorCart, loading } = useQuery(getCart);
  const [removeCartLine] = useMutation(removeLineCart);
  const navigation = useContext(NavigationContext);

  const handleOnRemoveCartLine = (lineId: number) => {
    try {
      removeCartLine({
        variables: {
          id: userCart.getCart.id,
          lastUpdate: userCart.getCart.lastUpdate,
          saleLineId: lineId,
          saleLines: cart?.snapshot.saleLines?.map((saleLine) => {
            return {
              ...saleLine.snapshot,
              product: {
                ...saleLine.snapshot.product.snapshot,
                suppliers: undefined,
              },
              supplier: { ...saleLine.snapshot.supplier?.snapshot },
            };
          }),
        },
      });
      navigation?.navigate("ShoppingCart", { undefined });
    } catch (e) {}
  };

  useEffect(() => {
    if (userCart) {
      console.log("userCart.getCart ------------------ ", userCart.getCart);
      setCart(ShoppingCartFactory.createFromGraphql(userCart.getCart));
    }
  }, [userCart]);

  return (
    <Container maxWidth="xl">
      {cart?.snapshot.saleLines?.length == 0 && (
        <Typography variant="h4" textAlign="center">
          Tu carrito está vacío
        </Typography>
      )}
      <Stack spacing={4}>
        {cart?.snapshot.saleLines?.length == 0 && !loading && (
          <Stack>
            <Typography variant="h4" textAlign="center">
              Sorry, your cart is empty
            </Typography>
            <img src={emptycart} />
          </Stack>
        )}
        {cart?.snapshot.saleLines?.map((line: any) => (
          <Grid item xs={4}>
            <LineCard line={line} onRemoveLine={handleOnRemoveCartLine} />
          </Grid>
        ))}
        {!loading ? cart?.getTotal(cart.getLines() as SaleLine[]) : null}
      </Stack>
    </Container>
  );
}
