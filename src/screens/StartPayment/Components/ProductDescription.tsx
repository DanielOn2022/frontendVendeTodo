import { Container, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { SaleLine } from "../../../domain/SaleLine/SaleLine"

interface Props {
  line: SaleLine;
}
const ProductDescription = (props: Props) => {
  const {line} = props;
  return (
    <Container sx={{display: "flex", justifyContent: "flex-start", gap: "16px", borderBottom: "2px solid gray", paddingBottom: "16px", marginTop: "16px"}}>
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
    </Container>
  )
}

export default ProductDescription;