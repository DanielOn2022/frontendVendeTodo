import { Button, FormControl, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";


const ShippingAddress = (props: any) => {
  const { id, city, street, externalNumber, internalNumber, handleOnClickSelect, selectedAddress, address } = props;
  const handleOnClick = () => {
    handleOnClickSelect(address);
  }
  
  const selectedId = selectedAddress ? selectedAddress.id : null;
  const background = id === selectedId ? "#AAA" : "#fff";
  return (
    <Container sx={{
        gap: "8px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: background,
        paddingY: "8px",
        alignItems: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
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
        <Typography>{city || "-"}</Typography>
        <Typography>{street || "-"}</Typography>
        <Typography>{externalNumber || "-"}</Typography>
        <Typography>{internalNumber || "-"}</Typography>
      </Container>
        <Button 
        variant="outlined"
        onClick={handleOnClick}
        sx={{padding: "8px"}}
        >
            Select
        </Button>
    </Container>
  );
}

export default ShippingAddress;