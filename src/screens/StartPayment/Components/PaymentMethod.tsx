import { Button, Container, Typography } from "@mui/material";

interface Props {
  lastDigits: number,
  handleOnClickSelect: (e: any) => void,
  selectedPayment: number
}
const PaymentMethod = (props: Props) => {
  const { lastDigits, handleOnClickSelect, selectedPayment } = props;
  const handleOnClick = () => {
    handleOnClickSelect(lastDigits);
  }
  console.log("🚀 ~ file: PaymentMethod.tsx:15 ~ PaymentMethod ~ selectedPayment", typeof selectedPayment)
  
  const background = lastDigits === selectedPayment ? "#AAA" : "#fff";
  return (
    <Container sx={{
        border: "2px solid red",
        backgroundColor: background,
        gap: "8px",
        display: "flex",
        flexDirection: "row"
    }}>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>
        <Typography>Card:   ****-****-****{lastDigits}</Typography>
        <Typography>Method: Visa</Typography>
      </Container>
        <Button 
        onClick={handleOnClick}
        variant="outlined"
        >
            Select
        </Button>
    </Container>
  );
}

export default PaymentMethod;