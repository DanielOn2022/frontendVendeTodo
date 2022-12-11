import { useMutation, useQuery } from "@apollo/client";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";
import { LineCard } from "../LineCard";
import { getCart, removeLineCart } from "./queries";
import emptycart from "../../assets/emptycart.png";

export function CartList(props: any) {
  const { data: userCart, error: errorCart, loading } = useQuery(getCart);
  const lines = !loading ? userCart.getCart.cartLines : [];
  const [removeCartLine] = useMutation(removeLineCart);
  console.log("LINESLIST->", lines);
  const navigation = useContext(NavigationContext);
  const handleOnRemoveCartLine = (lineId: number) => {
    console.log("LINEIDREMOVE->", lineId);
    try {
      removeCartLine({
        variables: {
          id: userCart.getCart.id,
          lastUpdate: userCart.getCart.lastUpdate,
          saleLineId: lineId,
        },
      });
      navigation?.navigate("ShoppingCart", { undefined });
    } catch (e) {}
  };
  return (
    <Container maxWidth="xl">
      {lines.length==0&&(<Typography variant="h4" textAlign="center">Tu carrito está vacío</Typography>)}
      <Stack spacing={4}>
        {lines.length == 0 && !loading && (
          <Stack>
            <Typography variant="h4" textAlign="center">
              Sorry, your cart is empty
            </Typography>
            <img src={emptycart} />
          </Stack>
        )}
        {lines?.map((line: any) => (
          <Grid item xs={4}>
            <LineCard line={line} onRemoveLine={handleOnRemoveCartLine} />
          </Grid>
        ))}
      </Stack>
    </Container>
  );
}
