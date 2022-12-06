import { Grid, Container } from "@mui/material";
import { Product } from "../../domain/Product/Product";
import { ProductCard } from "../ProductCard";
import { FunctionComponent } from "react";
import {  useQuery } from "@apollo/client";
import {
  GetAllProducts,
} from "./queries";

interface Props {
  handleOnSelectProduct: (producto:Product) => void;
  handleOnDeleteProduct: () => void;
}

export const ProductList: FunctionComponent<Props> = ({
  handleOnSelectProduct, 
  handleOnDeleteProduct
}) => {
  var products: Product[] = [];

  const { data: allProductsData, loading } = useQuery(GetAllProducts);

  if (allProductsData) {
    products = allProductsData.getAllProducts.map(
      (fetchedProduct: any) => new Product({ ...fetchedProduct })
    );
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={5} columns={{ xs: 4, md: 12 }}>
        {products?.map((product) => (
          <Grid item xs={4}>
            <ProductCard product={product} handleOnSelectProduct={handleOnSelectProduct} handleOnDeleteProduct={handleOnDeleteProduct}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
