import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { ProductInfo } from "../../components/ProductInfo";
import { useContext, useState } from "react";

export function ProductDetail(props:any, navigation: { navigation: any }) {
    const product = props.route.params.product;
    console.log("PRODUCT->", product)
    const [searchedProduct,setSearchedProduct] = useState("");
    return (
        <Container maxWidth={false} disableGutters sx={{ background: "#fff", marginTop: 16}} >
          <Appbar searchedProduct={""}/>
          <ProductInfo product={product}/>
        </Container>
    );
  }