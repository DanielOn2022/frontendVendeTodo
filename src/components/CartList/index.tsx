import { useMutation, useQuery } from "@apollo/client";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LineCard } from "../LineCard";
import { getCart, removeLineCart, startPayment } from "./queries";
import emptycart from "../../assets/emptycart.png";
import { ShoppingCart } from "../../domain/ShopppingCart/ShoppingCart";
import { SaleLine } from "../../domain/SaleLine/SaleLine";
import { ShoppingCartFactory } from "../../domain/ShopppingCart/ShoppingCartFactory";

export function CartList(props: any) {
  const [cart, setCart] = useState<ShoppingCart | null>(null);

  const { data: userCart, error: errorCart, loading } = useQuery(getCart);
  const [removeCartLine] = useMutation(removeLineCart);
  const [payCart] = useMutation(startPayment);
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

  const handleOnProceedToPayment = async () => {
    console.log("payment->");
    try {
      console.log("cart->", userCart.getCart);
      
      const cart = {
        id: userCart.getCart.id,
        lastUpdate: userCart.getCart.lastUpdate,
        saleLines: userCart.getCart.cartLines,
      };
      console.log("params->", cart);
      const response = await payCart({
        variables: {
          cart,
        },
      });

      console.log("ResponsePayCart->>", response);
    } catch (error) {
      console.log("error->", error);
    }
  };

  useEffect(() => {
    if (userCart) {
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
        {!loading && cart && (
          <Container>
            <Stack
              paddingBottom={8}
              paddingX={16}
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                marginLeft={5}
              >
                <Typography variant="h5">Total:</Typography>
                <Typography variant="h4">
                  ${cart.getTotal(cart.getLines() as SaleLine[]).toFixed(2)}
                </Typography>
              </Stack>
              <Button variant="contained" onClick={handleOnProceedToPayment}>
                Proceed to payment
              </Button>
            </Stack>
          </Container>
        )}
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
      </Stack>
    </Container>
  );
}
