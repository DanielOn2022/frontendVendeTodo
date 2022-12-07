import { Grid, Container } from "@mui/material";
import { Product } from "../../domain/Product/Product";
import { ProductCard } from "../ProductCard";
import {  useQuery } from "@apollo/client";
import {
  GetProductsByName
} from "./queries";
import { useState } from "react";


export function ProductList (props:any) {
  var products: Product[] = [];
  
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const state = {selectedProduct,setSelectedProduct}; 

  var searchedProduct = props.state.searchedProduct;
  
  const { data: allProductsData, loading } = useQuery(GetProductsByName,{variables:{name:searchedProduct}});

  console.log(allProductsData);
  if (allProductsData) {
    products = allProductsData.getProductsByName.map(
      (fetchedProduct: any) => new Product({ ...fetchedProduct })
    );
  }
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} columns={{ xs: 4, md: 12 }}>
        {products?.map((product) => (
          <Grid item xs={4}>
            <ProductCard product={product} state={state} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
