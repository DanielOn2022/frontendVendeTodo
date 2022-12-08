import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/ProductList";
import { useState } from "react";

export function Home(props:any) {
  const [searchedProduct,setSearchedProduct] = useState("");
  const state = {searchedProduct,setSearchedProduct, ...props.globalState};
  console.log("props -> ",props)
  
  return (
      <Container maxWidth={false} disableGutters style={{ background: "white", marginTop: 16}}>
        <Appbar state={state} />
        <Banner />
        <ProductList state={state} />
        <Footer />
      </Container>
  );
}
