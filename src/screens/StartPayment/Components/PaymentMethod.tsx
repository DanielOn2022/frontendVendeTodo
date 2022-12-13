import { Button, Container, Typography } from "@mui/material";

interface Props {
  lastDigits: any,
  handleOnClickSelect: (e: any) => void,
  selectedPayment: any,
  paymentMethod: any;
}
const PaymentMethod = (props: Props) => {
  const { lastDigits, handleOnClickSelect, selectedPayment, paymentMethod } = props;
  const handleOnClick = () => {
    handleOnClickSelect(paymentMethod);
  }
  console.log("🚀 ~ file: PaymentMethod.tsx:15 ~ PaymentMethod ~ selectedPayment", typeof selectedPayment)
  const selectedCartNumber = selectedPayment ? selectedPayment.cardNumber : null;
  const background = lastDigits === selectedCartNumber ? "#AAA" : "#fff";
  return (
    <Container sx={{
        backgroundColor: background,
        gap: "8px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        padding: "8px",
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