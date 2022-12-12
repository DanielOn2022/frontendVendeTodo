import { Container, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { SaleLine } from "../../../domain/SaleLine/SaleLine"

interface Props {
  line: SaleLine;
}
const ProductDescription = (props: Props) => {
  const {line} = props;
  return (
    <Container>
      <Stack
        direction="row"
        spacing={7}
        alignItems="center"
        justifyContent="center"
        >
        <img
          src={line.product.imageUrl}
          style={{ minWidth: "20%", maxWidth: "20%" }}
          />
        <Stack direction="column" spacing={2} minWidth="40%">
          <Typography variant="h4">{line.product.name}</Typography>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h6">Amount: {line.amount}</Typography>
            {/* <Typography variant="h6">Suplier: {line.supplier?.snapshot.company}</Typography> */}
            <Typography variant="h6">
              <b>${line.subTotal}</b>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 4 }} />
    </Container>
  )
}

export default ProductDescription;