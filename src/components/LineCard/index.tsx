import { Button, Container, Divider, Stack, Typography } from "@mui/material";
export function LineCard(props: any) {
  const line = props.line;

  return (
    <Container>
      <Divider  />
      <Stack
        direction="row"
        spacing={7}
        alignItems="center"
        justifyContent="center" sx={{ marginTop: 4 }}
      >
        <img
          src={line.product.imageUrl}
          style={{ minWidth: "20%", maxWidth: "20%" }}
        />
        <Stack direction="column" spacing={2} minWidth="40%">
          <Typography variant="h4">{line.product.name}</Typography>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h6">Amount: {line.amount}</Typography>
            <Typography variant="h6">Suplier: {line.supplierName}</Typography>
            <Typography variant="h6">
              Amount: <b>{line.amount}</b>
            </Typography>
            <Typography variant="h6">
              Suplier: <b>{line.supplier.snapshot.company}</b>
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Precio unitario:</Typography>
              <Typography variant="h5" color="green">
                <b>${line.subTotal}</b>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            sx={{ height: 40 }}
            onClick={() => {
              props.onRemoveLine(line.saleLineId);
            }}
          >
            Eliminar
          </Button>
          <Button variant="outlined" size="large" sx={{ height: 40 }}>
            Editar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
