import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductDetail as Detail} from "../../components/ProductDetail";
import { useContext, useState } from "react";
import { RouteProp } from '@react-navigation/native';
import { Product } from "../../domain/Product/Product";

export function ProductDetail(props:any, navigation: { navigation: any }) {
    const product = props.route.params.product;
    console.log("screen -> ",product)
    const [searchedProduct,setSearchedProduct] = useState("");
  const stateProductDetail = {searchedProduct,setSearchedProduct};
    return (
        <Container maxWidth={"md"} sx={{ background: "#fff", paddingY: 8 }}>
          <Appbar state={stateProductDetail}/>
          <Banner />
          <Detail product={product}/>
          <Footer />
        </Container>
    );
  }