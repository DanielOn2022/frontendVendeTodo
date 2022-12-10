import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { borderColor, borderRadius } from "@mui/system";

export function LineCard(props: any) {
  const line = props.line;
  const suplier = props.suplier;
  return (
    <Container >
      <Stack direction="row" spacing={7} alignItems="center" justifyContent="center">
        <img
          src={line.product.imageUrl}
          style={{ minWidth: "20%", maxWidth: "20%" }}
        />
        <Stack direction="column" spacing={2}>
          <Typography variant="h4">{line.product.name}</Typography>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h6">Amount: {line.amount}</Typography>
            <Typography variant="h6">Suplier: {line.amount}</Typography>
            <Typography variant="h6">
              <b>${line.subTotal}</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={2} justifyContent="center" >
          <Button variant="outlined" size="large" sx={{ height: 40 }}>
            Eliminar
          </Button>
          <Button variant="outlined" size="large" sx={{ height: 40 }}>
            Editar
          </Button>
        </Stack>
      </Stack >
      <Divider sx={{marginY:4}}/>
    </Container>
  );
}
