import { Button, FormControl, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";


const ShippingAddress = (props: any) => {
  const { id, city, street, externalNumber, internalNumber, handleOnClickSelect, selectedAddress } = props;
  const handleOnClick = () => {
    handleOnClickSelect(id);
  }
  console.log("🚀 ~ file: ShippingAddress.tsx:12 ~ ShippingAddress ~ selectedAddress", typeof selectedAddress);
  
  const background = id === selectedAddress ? "#AAA" : "#fff";
  return (
    <Container sx={{
        border: "2px solid red",
        gap: "8px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: background,
    }}>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>
        <Typography>City</Typography>
        <Typography>Street</Typography>
        <Typography>External number</Typography>
        <Typography>Internal number</Typography>
      </Container>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>
        <Typography>{city}</Typography>
        <Typography>{street}</Typography>
        <Typography>{externalNumber}</Typography>
        <Typography>{internalNumber}</Typography>
      </Container>
        <Button 
        variant="outlined"
        onClick={handleOnClick}
        >
            Select
        </Button>
    </Container>
  );
}

export default ShippingAddress;