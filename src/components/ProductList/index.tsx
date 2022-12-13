import { Grid, Container } from "@mui/material";
import { Product } from "../../domain/Product/Product";
import { ProductCard } from "../ProductCard";
import {  useQuery } from "@apollo/client";
import {
  GetProductsByName
} from "./queries";

export function ProductList (props:any) {
  var products: Product[] = [];
  var searchedProduct = props.searchedProduct;
  
  const { data: allProductsData, loading } = useQuery(GetProductsByName,{variables:{name:searchedProduct}, fetchPolicy:"network-only"});

  if (allProductsData) {
    console.log(allProductsData);
    products = allProductsData.getProductsByName.map(
      (fetchedProduct: any) => new Product({ ...fetchedProduct })
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        {products?.map((product) => (
          <Grid item xs={4}>
            <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
