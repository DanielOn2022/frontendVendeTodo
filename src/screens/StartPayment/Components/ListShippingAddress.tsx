import { useQuery } from "@apollo/client";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getShippingAddress } from "../queries";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";

export const ListShippingAddress = (props: any) => {
  const { setSelectedAddress, selectedAddress } = props;
  const { data, error, loading } = useQuery(getShippingAddress);
  const [shippingAddress, setShippingAddress] = useState([]);

  useEffect(() => {
    if (data && !loading) {
      setShippingAddress(data.getShippingAddresses);
      console.log("🚀 ~ file: ListShippingAddress.tsx:15 ~ useEffect ~ data.getShippingAddresses", data.getShippingAddresses)
    }
  }, [data, loading]);
  
  const handleOnClickSelect = (address: any) => {
    console.log("🚀 ~ file: ListShippingAddress.tsx:21 ~ handleOnClickSelect ~ addressId", address)
    setSelectedAddress(address);
  }
  if (loading) return <CircularProgress />
  return (
    <Container sx={{display: 'flex', gap: "16px", flexDirection: "column"}}>
      <Typography>Select your shipping address</Typography>
      {shippingAddress.map((address: any) => <ShippingAddress address={address} {...address} selectedAddress={selectedAddress} handleOnClickSelect={handleOnClickSelect} ></ShippingAddress>)}
    </Container>
  );
}