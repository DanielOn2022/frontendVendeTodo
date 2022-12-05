import { Grid, Container } from "@mui/material";
import { Product } from "../../domain/Product/Product";
import { ProductCard } from "../ProductCard";
import { ProductCard2 } from "../ProductCard2";
import { FunctionComponent, useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  CreateProduct,
  DeleteProduct,
  GetProductById,
  UpdateProduct,
  GetAllProducts,
} from "./queries";

interface Props {
  handleOnSelectProduct: (producto:Product) => void;
  handleOnDeleteProduct: () => void;
}

export const ProductList2: FunctionComponent<Props> = ({
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
            <ProductCard2 product={product} handleOnSelectProduct={handleOnSelectProduct} handleOnDeleteProduct={handleOnDeleteProduct}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
