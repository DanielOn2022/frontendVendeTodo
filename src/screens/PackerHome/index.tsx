import { Button, Container, Stack, Typography } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { EmployeeInfo } from "../../components/EmployeeInfo";

export function PackerHome({ navigation }: { navigation: any }) {

  const onBeginSupply = () => {
    navigation.navigate("SaleLinesDetail");
  };

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
            onClick={onBeginSupply}
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
