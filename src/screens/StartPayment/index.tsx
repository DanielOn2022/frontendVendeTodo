import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  AppBar,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useRef, useState } from "react";
import { Appbar } from "../../components/Appbar";
import { LineCard } from "../../components/LineCard";
import { SaleLine } from "../../domain/SaleLine/SaleLine";
import { SaleLineFactory } from "../../domain/SaleLine/SaleLineFactory";
import { ListPaymentMethods } from "./Components/ListPaymentMethods";
import { ListShippingAddress } from "./Components/ListShippingAddress";
import PaymentMethod from "./Components/PaymentMethod";
import ProductDescription from "./Components/ProductDescription";
import ShippingAddress from "./Components/ShippingAddress";
import {
  cancelStartPayment,
  getPaymentMethod,
  getShippingAddress,
} from "./queries";

export function StartPayment(props: any) {
  const { lines, total, userId } = props.route.params;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [error, setError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const navigation = useContext(NavigationContext);

  const [mutationCancel] = useMutation(cancelStartPayment);

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.tsx:20 ~ StartPayment ~ selectedPayment",
      selectedPayment
    );
  }, [selectedPayment]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.tsx:25 ~ StartPayment ~ selectedAddress",
      selectedAddress
    );
  }, [selectedAddress]);

  const handleOnClickPay = () => {
    if (!selectedAddress || !selectedPayment) {
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
      console.log(
        "🚀 ~ file: index.tsx:43 ~ handleOnClickCancel ~ response",
        response
      );
    } catch (e) {
      console.log(e);
    } finally {
      //navigation?.navigate("Home");
    }
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ background: "#fff", marginTop: 16 }}
    >
      <Appbar searchedProduct={""} />
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ border: "1px solid red", padding: 8 }}>
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
          <Alert severity="error" onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="outlined" onClick={handleOnClickPay}>
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
