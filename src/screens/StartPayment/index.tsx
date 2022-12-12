import { useQuery } from "@apollo/client";
import { AppBar, Button, CircularProgress, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Appbar } from "../../components/Appbar";
import { LineCard } from "../../components/LineCard";
import { SaleLine } from "../../domain/SaleLine/SaleLine";
import PaymentMethod from "./Components/PaymentMethod";
import ProductDescription from "./Components/ProductDescription";
import { getPaymentMethod } from "./queries";

export function StartPayment(props: any) {
  const { lines, total, userId } = props.route.params;
  const cardNumberRef = useRef<HTMLInputElement>();
  const cvvRef = useRef<HTMLInputElement>();
  const expirationRef = useRef<HTMLInputElement>();
  const [paymentsMethod, setPaymentMethods] = useState([]);
  const [selectedPayment, setSelectedMethod] = useState([]);
  const { data, error, loading } = useQuery(getPaymentMethod);

  useEffect(() => {
    if (data) {
      setPaymentMethods(data.getPaymentMethods);
      console.log("🚀 ~ file: index.tsx:24 ~ useEffect ~ data.getPaymentMethod", data.getPaymentMethods)
    }
  }, [data, loading]);

  const handleOnClickSelect = (e: any) => {
    console.log("🚀 ~ file: index.tsx:28 ~ handleOnClickSelect ~ key", e)
    //setSelectedMethod(key);
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ background: "#fff", marginTop: 16 }}
    >
      <Appbar searchedProduct={""} />
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{border: "1px solid red", padding: 8}}>
          {lines.map((line: any) =>
              <ProductDescription line={line}></ProductDescription>
            )}
        <Typography>Total: {total}</Typography>
        </Grid>
        <Grid item xs={6} sx={{border: "1px solid red", padding: 8}}>
          {loading || !paymentsMethod ? (
            <CircularProgress />
          ) : 
          (
            <FormControl sx={{display: 'flex', grap: 4}}>
              <Typography>Select your payment method</Typography>
              {paymentsMethod.map((payment: any) => <PaymentMethod lastDigits={payment.cardNumber as number} handleOnClickSelect={handleOnClickSelect} ></PaymentMethod>)}
          </FormControl>
          )}
        </Grid>
</Grid>
    </Container>
  )
}
