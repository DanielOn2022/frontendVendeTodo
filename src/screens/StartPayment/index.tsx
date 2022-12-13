import { useMutation } from "@apollo/client";
import {
  Alert,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Appbar } from "../../components/Appbar";
import { SaleLineFactory } from "../../domain/SaleLine/SaleLineFactory";
import { ListPaymentMethods } from "./Components/ListPaymentMethods";
import { ListShippingAddress } from "./Components/ListShippingAddress";
import ProductDescription from "./Components/ProductDescription";
import {
  authorizePayment,
  cancelStartPayment,
} from "./queries";

export function StartPayment(props: any) {
  const { lines, total } = props.route.params;
  console.log('----------------------', lines, total)
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [error, setError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const navigation = useContext(NavigationContext);


  const [mutationCancel] = useMutation(cancelStartPayment);
  const [mutationPay] = useMutation(authorizePayment);

  const handleOnClickPay = async () => {
    if (!selectedAddress || !selectedPayment) {
      setError(true);
      setErrorDescription("You have to select the address and the payment");
      return;
    }
    try {
      const response = await mutationPay({
        variables: lines,
      });
      navigation?.navigate("Home");
    } catch (error: any) {
      setError(true);
      const description: string = error?.message || error?.description || "Unexpected error, try to reload the page.";
      setErrorDescription(description);
    } 
  };
  const handleOnClickCancel = async () => {
    try {
      const graphqlLines = SaleLineFactory.createManyFromGraphql(lines);
      const response = await mutationCancel({
        variables: {
          availableLines: SaleLineFactory.createManyForGraphql(graphqlLines),
        },
      });
      //console.log("🚀 ~ file: index.tsx:43 ~ handleOnClickCancel ~ response",response);
    } catch (e) {
      console.log(e);
    } finally {
      navigation?.navigate("Home");
    }
  };
  const handleOnCloseError = () => {
    setError(false);
    setErrorDescription('');
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ background: "#fff", marginTop: 16 }}
    >
      <Appbar searchedProduct={""} />
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center",  gap: "8px",  padding: "64px" }}>
        <Typography>You are going to buy</Typography>
          {lines.map((line: any) => (
            <ProductDescription line={line}></ProductDescription>
          ))}
          <Typography>Total: {total}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: 8,
          }}
        >
          <ListPaymentMethods
            setSelectedPayment={setSelectedPayment}
            selectedPayment={selectedPayment}
          ></ListPaymentMethods>
          <ListShippingAddress
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
          ></ListShippingAddress>
          {error && <Alert severity="error" onClose={handleOnCloseError}>
            {errorDescription}
          </Alert>}
          <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" onClick={handleOnClickPay}>
              Pay
            </Button>
            <Button onClick={handleOnClickCancel} variant="outlined">
              Cancel
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
