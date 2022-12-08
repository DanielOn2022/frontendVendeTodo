import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductInfo } from "../../components/ProductInfo";
import { useContext, useState } from "react";

export function ProductDetail(props:any, navigation: { navigation: any }) {
    const product = props.route.params.product;
    const [searchedProduct,setSearchedProduct] = useState("");
  const stateProductDetail = {searchedProduct,setSearchedProduct};
    return (
        <Container maxWidth={false} disableGutters sx={{ background: "#fff", marginTop: 16}}>
          <Appbar state={stateProductDetail}/>
          <ProductInfo product={product}/>
          <Footer />
        </Container>
    );
  }