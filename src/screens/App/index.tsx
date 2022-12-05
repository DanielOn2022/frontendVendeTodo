import { ApolloProvider } from "@apollo/client";
import client from "../../api";
import { ThemeProvider } from "@mui/material";
import { useEffect, useState, Component } from "react";
import { theme } from "./theme";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductForm2 } from "../../components/ProductForm2";
import { ProductList2 } from "../../components/ProductList2";
import { Product } from "../../domain/Product/Product";
import { CreateProduct } from "../../components/MainContent/queries";

class App extends Component<
  {},
  {
    showProducts: Boolean;
    createProduct: Boolean;
    selectedProduct: Product | undefined;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      showProducts: true,
      createProduct: false,
      selectedProduct: undefined,
    };
  }

  render() {
    var { showProducts, createProduct, selectedProduct } = this.state;
    const handleOnProductList = () => {
      this.setState({
        showProducts: true,
        createProduct: false,
        selectedProduct: undefined,
      });
    };
    const handleOnCreateProduct = () => {
      this.setState({
        showProducts: false,
        createProduct: true,
        selectedProduct: undefined,
      });
    };
    const handleOnSelectProduct = (product: Product) => {
      this.setState({
        showProducts: false,
        createProduct: false,
        selectedProduct: product,
      });
      console.log(product.snapshot.id);
    };
    const handleOnDeleteProduct = () => {
      if(!this.state.selectedProduct){
        console.log("PRODUCTO NOT SELECTED")
      }
      console.log("ELIMINAR...", this.state.selectedProduct?.snapshot.id)
    };

    return (
      <ApolloProvider {...{ client }}>
        <ThemeProvider theme={theme}>
          <Appbar
            handleOnCreateProduct={handleOnCreateProduct}
            handleOnProductList={handleOnProductList}
          />
          <Banner />
          {showProducts ? (
            <ProductList2 handleOnSelectProduct={handleOnSelectProduct} handleOnDeleteProduct={handleOnDeleteProduct}/>
          ) : createProduct ? (
            <ProductForm2
              product={new Product({ brand: "", name: "", price: 0 })}
              action="create"
            />
          ) : selectedProduct ? (
            <ProductForm2 product={selectedProduct} action="update" />
          ) : (
            <h1>ERROR</h1>
          )}

          {/*
          promotions
          title
          products
          footer
          searchbox
          appdrawer
          */}
          <Footer />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
