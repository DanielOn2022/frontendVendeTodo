import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { ProductList } from "../../components/ProductList";
import { useState } from "react";

export function Home(props:any) {
  const searchedProduct = props.route.params.searchedProduct;
  console.log("PROPS SEARCHEDPROD -> ",searchedProduct)
  
  return (
      <Container maxWidth={false} disableGutters style={{ background: "white", paddingBottom: 24}}>
        <Appbar searchedProduct={""}/>
        <Banner />
        <ProductList searchedProduct={searchedProduct} />
      </Container>
  );
}
