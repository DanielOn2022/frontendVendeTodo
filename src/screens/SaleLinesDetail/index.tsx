import { useQuery } from "@apollo/client";
import { Container } from "@mui/system";
import { useState } from "react";
import { Appbar } from "../../components/Appbar";
import { SalesList } from "../../components/SalesList";
import { getPackerSales} from "./queries";
 
export function SaleLinesDetail(props: any) {
    
    return (
      <Container
        maxWidth={false}
        disableGutters
        style={{ marginTop: 64, background: "white", paddingBottom: 24 }}
      >
        <Appbar searchedProduct="" />
        <SalesList />
      </Container>
    );
  }