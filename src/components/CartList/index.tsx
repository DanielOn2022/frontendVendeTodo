import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LineCard } from "../LineCard";
import {
  cancelStartPayment,
  getCart,
  removeLineCart,
  startPayment,
} from "./queries";
import emptycart from "../../assets/emptycart.png";
import { ShoppingCart } from "../../domain/ShopppingCart/ShoppingCart";
import { SaleLine } from "../../domain/SaleLine/SaleLine";
import { ShoppingCartFactory } from "../../domain/ShopppingCart/ShoppingCartFactory";
import { SaleLineFactory } from "../../domain/SaleLine/SaleLineFactory";

export function CartList(props: any) {
  const [cart, setCart] = useState<ShoppingCart | null>(null);
  const [open, setOpen] = useState(false);

  const { data: userCart, error: errorCart, loading } = useQuery(getCart, {fetchPolicy:"network-only", nextFetchPolicy:"network-only"});
  const [removeCartLine] = useMutation(removeLineCart);
  const [payCart, { data: paymentData }] = useMutation(startPayment);
  const [cancelPayCart] = useMutation(cancelStartPayment);
  const navigation = useContext(NavigationContext);

  const handleKeepBuying = () => {
    navigation?.navigate("Checkout", {
      lines: paymentData?.startPayment.availableLines,
    });
  };

  const handleDiscardPayment = async () => {
    console.log("DATA PAYMENTINTENT->", paymentData);
    const lines = SaleLineFactory.createManyFromGraphql(
      paymentData?.startPayment.availableLines
    );
    console.log("DOM LINES->", lines);
    await cancelPayCart({
      variables: {
        availableLines: SaleLineFactory.createManyForGraphql(lines),
      },
    });
    setOpen(false);
  };

  const handleOnRemoveCartLine = async (lineId: number) => {
    try {
      await removeCartLine({
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

  const handleOnCheckout = async () => {
    console.log("payment->");
    try {
      console.log("cart->", cart);
      const graphqlCart = ShoppingCartFactory.createForGrapqhl(
        cart as ShoppingCart
      );
      console.log("params->", graphqlCart);
      const response = await payCart({
        variables: {
          cart: graphqlCart,
        },
      });
      response.data?.startPayment.nonAvailableLines.length
        ? setOpen(true)
        : navigation?.navigate("Checkout", {
            lines: response.data.startPayment.availableLines,
          });
      console.log("🚀 ResponsePayCart->>", response);
    } catch (error) {
      console.log("error->", error);
    }
  };

  useEffect(() => {
    if (userCart) {
      setCart(ShoppingCartFactory.createFromGraphql(userCart.getCart));
    }
  }, [userCart]);

  console.log("CART", cart);
  return (
    <Container maxWidth="xl">
      <Stack spacing={4} marginBottom={16}>
        {!loading && cart?.getLines()?.length ? (
          <Container>
            <Stack
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
              <Button variant="contained" onClick={handleOnCheckout}>
                Proceed to payment
              </Button>
            </Stack>
          </Container>
        ) : (
          <Stack>
            <Typography variant="h4" textAlign="center">
              Sorry, your cart is empty
            </Typography>
            <img src={emptycart} />
          </Stack>
        )}
        {cart?.snapshot.saleLines?.map((line: any) => (
          <Grid item xs={4} spacing={0} >
            <LineCard line={line} onRemoveLine={handleOnRemoveCartLine} />
          </Grid>
        ))}
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Couldn't complete your order
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            One or more products do not have the enough existence to fulfill
            your order. Keep buying the rest of the products?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDiscardPayment}>Cancel</Button>
          <Button onClick={handleKeepBuying} autoFocus>
            Keep buying
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
