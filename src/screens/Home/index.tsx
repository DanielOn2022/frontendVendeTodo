import { Appbar } from "../../components/Appbar";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { CRUD } from "../../components/CRUD";
import { TestComponent } from "../../components/TestComponent";
import { Button, Container } from "@mui/material";

export function Home() {
  return (
    <Container maxWidth={"xl"} sx={{ background: "#fff" }}>
      <Appbar />
      <Banner />
      {/*
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
  );
}

