import { Button, Container, Typography } from "@mui/material";

interface Props {
  lastDigits: number,
  handleOnClickSelect: (e: any) => void
}
const PaymentMethod = (props: Props) => {
  const { lastDigits, handleOnClickSelect } = props;
  return (
    <Container sx={{
        border: "2px solid red"
    }}>
        <Typography>****-****-****{lastDigits}</Typography>
        <Button onClick={handleOnClickSelect}>
            Select
        </Button>
    </Container>
  );
}

export default PaymentMethod;