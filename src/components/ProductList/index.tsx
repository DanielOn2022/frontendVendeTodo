import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../domain/Product/Product";
import { ProductCard } from "../ProductCard";

interface Props {
  products?: Product[] | [];
  handleOnDelete: (id: number) => void;
}

export const ProductList: FunctionComponent<Props> = ({
  products,
  handleOnDelete,
}) => {
  return (
    <Grid container spacing={5} columns={{ xs: 4, md: 12 }}>
      {products?.map((product) => (
        <Grid item xs={4}>
          <ProductCard
            product={product}
            key={product.snapshot.id}
            handleOnDelete={handleOnDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
};
