import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../../domain/Product/Product";
import { ProductCard } from "../ProductCard";

interface Props {
  products?: Product[] | [];
  handleOnDelete: (id: number) => void;
}

export const ProductList: FunctionComponent<Props> = ({ products, handleOnDelete }) => {
  return (
    <Grid container item spacing={3}>
      {products?.map((product) => (
        <ProductCard product={product} key={product.snapshot.id} handleOnDelete={handleOnDelete}/>
      ))}
    </Grid>
  );
};
