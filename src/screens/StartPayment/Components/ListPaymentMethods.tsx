import { useQuery } from "@apollo/client";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AnyStyledComponent } from "styled-components";
import { getPaymentMethod } from "../queries";
import PaymentMethod from "./PaymentMethod";

export const ListPaymentMethods = (props: any) => {
  const { setSelectedPayment, selectedPayment } = props;
  const { data, error, loading } = useQuery(getPaymentMethod);
  const [paymentMethod, setPaymentMethods] = useState([]);
  useEffect(() => {
    if (data) {
      setPaymentMethods(data.getPaymentMethods);
      console.log("🚀 ~ file: index.tsx:23 ~ useEffect ~ data.getPaymentMethods", data.getPaymentMethods)
    }
  }, [data, loading]);

  const handleOnClickSelect = (paymentMethod: number) => {
    setSelectedPayment(paymentMethod);
  }
  if (loading) return <CircularProgress />
  return (
    <Container sx={{display: 'flex', gap: "8px", flexDirection: "column"}}>
      <Typography>Select your payment method</Typography>
      {paymentMethod.map((payment: any) => <PaymentMethod selectedPayment={selectedPayment} lastDigits={payment.cardNumber as number} handleOnClickSelect={handleOnClickSelect} ></PaymentMethod>)}
    </Container>
  );
}