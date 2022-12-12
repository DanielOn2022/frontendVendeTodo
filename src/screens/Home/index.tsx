import { Container } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { ProductList } from "../../components/ProductList";

export function Home(props:any) {
  const searchedProduct = props.route.params.searchedProduct;
  
  return (
      <Container maxWidth={false} disableGutters style={{ background: "white", paddingBottom: 24}}>
        <Appbar searchedProduct={""}/>
        <Banner />
        <ProductList searchedProduct={searchedProduct} />
      </Container>
  );
}
