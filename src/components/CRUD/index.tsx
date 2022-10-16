import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../domain/Product/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

interface Props {}

export const CRUD: FunctionComponent<Props> = ({}) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 3">
        <ProductForm />
      </Box>
      <Box gridColumn="span 9">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <ProductList
              products={[
                new Product({
                  id: 1,
                  name: "Paquete de 10 lapices numero 2",
                  brand: "Norma",
                  price: 35,
                }),
                new Product({
                  id: 2,
                  name: "Paquete de 10 lapices numero 2",
                  brand: "Norma",
                  price: 35,
                }),
                new Product({
                  id: 3,
                  name: "Paquete de 10 lapices numero 2",
                  brand: "Norma",
                  price: 35,
                }),
                new Product({
                  id: 4,
                  name: "Paquete de 10 lapices numero 2",
                  brand: "Norma",
                  price: 35,
                }),
              ]}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
