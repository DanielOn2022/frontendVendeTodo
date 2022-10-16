import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../../domain/Product/Product";
import { ProductCard } from "../ProductCard";

interface Props {
  products: Product[];
}

export const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <Grid container item spacing={3}>
      {products.map((product) => (
        <ProductCard product={product} key={product.snapshot.id} />
      ))}
    </Grid>
  );
};
