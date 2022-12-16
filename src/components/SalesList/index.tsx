import { Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { SaleInfo } from "../SaleInfo";
import desert from "../../assets/desert.png";
import { ArrowBack } from "@mui/icons-material";
import { NavigationContext } from "@react-navigation/core";
import { useContext, useEffect, useState } from "react";
import { getPackerSales } from "./queries";
import { useQuery } from "@apollo/client";
import { example } from "yargs";

export function SalesList(props: any) {
  const navigation = useContext(NavigationContext);
  const [sales, setSales] = useState([]);
  const { data: initialData, loading } = useQuery(getPackerSales);

  useEffect(() => {
    if (!loading && initialData) {
      setSales(initialData.getPackerSale);
    }
  }, [initialData]);
  console.log("SHELFS ->->->-> ", sales);
  return (
    <Container>
      {sales.length == 0 ? (
        <Stack marginTop={4}>
          <Button
            sx={{ width: "10%" }}
            onClick={() => {
              navigation?.goBack();
            }}
          >
            <ArrowBack />
          </Button>
          <Stack alignItems="center">
            <Typography variant="h3" marginTop={5} textAlign="center">
              You don't have pending sales to supply
            </Typography>
            <img width="70%" src={desert} />
          </Stack>
        </Stack>
      ) : (
        <Stack>
          <Stack marginTop={6} marginLeft={6} spacing={2} direction="column" alignItems="flex-start">
            <Button
              style={{ width: "10", height: "10", margin:6}}
              onClick={() => {
                navigation?.goBack();
              }}
            >
              <ArrowBack />
            </Button>
            <Typography variant="h3" padding={5} textAlign="center">
              Pending sales
            </Typography>
          </Stack>
          <Grid container paddingX={8} columns={{ xs: 4, md: 12 }}>
            {sales?.map((sale: any) => (
              <Grid
                item
                xs={4}
                spacing={0}
                border={2}
                margin={2}
                borderRadius={4}
              >
                <SaleInfo sale={sale} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </Container>
  );
}
