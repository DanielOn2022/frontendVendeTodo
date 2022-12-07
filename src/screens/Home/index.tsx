import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/ProductList";
import { useState } from "react";

export function Home(navigation: { navigation: any }) {
  const [searchedProduct,setSearchedProduct] = useState("");
  const state = {searchedProduct,setSearchedProduct};
  
  return (
      <Container maxWidth={"xl"} sx={{ background: "#fff" }}>
        <Appbar state={state}/>
        <Banner />
        <ProductList state={state} />
        <Footer />
      </Container>
  );
}
