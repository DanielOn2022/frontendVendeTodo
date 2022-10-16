import { ApolloProvider } from "@apollo/client";
import client from "../../api";
import { TestComponent } from "../../components/TestComponent";
import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { theme } from "./theme";
import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/CRUD/ProductList";
import { Product } from "../../domain/Product/Product";
import { CRUD } from "../../components/CRUD";

function App() {
  useEffect(() => {
    document.title = "Vende Todo";
  }, []);

  return (
    <ApolloProvider {...{ client }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={"xl"} sx={{ background: "#fff" }}>
          <Appbar />
          <Banner />
          {/*
          banner
          promotions
          title
          products
          footer
          searchbox
          appdrawer
          */}
          <CRUD />
          <Footer />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
