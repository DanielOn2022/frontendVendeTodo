import { useMutation } from "@apollo/client";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { EmployeeInfo } from "../../components/EmployeeInfo";
import { beginSupply } from '../../components/SalesList/queries'
import { Packer } from "../../domain/Packer/Packer";
import { PackingRoute } from "../../domain/PackingRoute/PackingRoute";
import { Product } from "../../domain/Product/Product";

export function PackerHome({ navigation }: { navigation: any }) {

  const [mutationBeginSupply] = useMutation(beginSupply);

  const onBeginSupply = async () => {
    console.log('Se abrio espacio para el pacjing route');  
    const response = await mutationBeginSupply();
    console.log(response.data.begginSupply);
    const data = response.data.begginSupply;
    
    
  };

  const onPendingSales = () => {
    navigation.navigate("SaleLinesDetail");
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{ marginTop: 64, background: "white", paddingBottom: 24 }}
    >
      <Appbar searchedProduct="" />
      <Stack alignItems="center" justifyContent="center">
        <EmployeeInfo />
        <Stack direction="row">
          <Button
            sx={{ marginY: 8, marginX: 16, width: "auto" }}
            variant="contained"
            onClick={onPendingSales}
          >
            Pending sales
          </Button>
          <Button
            sx={{ marginY: 8, marginX: 16, width: "auto" }}
            variant="contained"
            onClick={onBeginSupply}
          >
            Begin supply
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
