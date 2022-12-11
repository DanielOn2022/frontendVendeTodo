import { useMutation, useQuery } from "@apollo/client";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LineCard } from "../LineCard";
import { getCart, removeLineCart } from "./queries";
import emptycart from "../../assets/emptycart.png";

export function CartList(props: any) {
  const { data, error, loading } = useQuery(getCart);

  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!loading) {
      setLines(data.getCart.cartLines);
    }
  }, [data, loading]);
  
  const [removeCartLine] = useMutation(removeLineCart);
  const navigation = useContext(NavigationContext);
  const handleOnRemoveCartLine = (lineId: number) => {
    console.log("🚀 ~ file: index.tsx:24 ~ handleOnRemoveCartLine ~ lineId", lineId)
    
    // try {
    //   removeCartLine({
    //     variables: {
    //       id: userCart.getCart.id,
    //       lastUpdate: userCart.getCart.lastUpdate,
    //       saleLineId: lineId,
    //     },
    //   });
    //   navigation?.navigate("ShoppingCart", { undefined });
    // } catch (e) {}
  };

  if (loading) return <Typography variant="h4" textAlign="center">Loading....</Typography>;
  if (error) return <Typography variant="h4" textAlign="center">Error</Typography>;
  if (!lines.length) return (
    <Typography variant="h4" textAlign="center">
      Sorry, your cart is empty
    </Typography>
  )

  return (
    <Container maxWidth="xl">
        <Stack spacing={4}>
          {lines.map((line: any) =>
            <Grid item xs={4}>
              <LineCard line={line} onRemoveLine={handleOnRemoveCartLine} />
            </Grid>
          )}
        </Stack>
    </Container>
  );
}
