import { AppBar, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Appbar } from "../../components/Appbar";
import { LineCard } from "../../components/LineCard";
import { SaleLine } from "../../domain/SaleLine/SaleLine";

export function StartPayment(props: any) {
  const { lines } = props.route.params;
  const [ count, setCount ] = useState(0);
  const [ error, setError ] = useState(false);
  const [ productsChange, setProductsChanges ] = useState<SaleLine[]>([]);

  useEffect(() => {
    const products: SaleLine[] = [];
    console.log("🚀", lines);
    lines.forEach((productLine: SaleLine) => {
      const { product } = productLine;
      if (product?.stock && product.stock < productLine.amount) {
        setError(true);
        productLine.amount = product.stock >= 0 ? product.stock : 0;
        products.push(productLine);
      }
    });
    console.log("🚀 ~ file: index.tsx:22 ~ lines.forEach ~ lines", lines)
    setProductsChanges(products);
  }, []);

  const handleOnRemoveCartLine = () => console.log("🚀 Hi thereeeee");

  if (error) {
    return (
      <Container sx={{margin: 16}}>
        This elements change
        {productsChange.map((line) => 
          <Container>
            <Typography>Here we go</Typography>
              <Grid item xs={4}>
              <LineCard line={line} onRemoveLine={handleOnRemoveCartLine} />
          </Grid>
          </Container>
        )}
        <Button variant="outlined">Continuar</Button>
        <Button variant="outlined">Cancelar</Button>
      </Container>
    )
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ background: "#fff", margin: 16 }}
    >
      <Appbar searchedProduct={""} />
      {count}
      <Button
        variant="outlined"
        onClick={() => setCount(count+1)}
      >click Me!</Button>
    </Container>
  )
}
