import { Button, Container, Stack, Typography } from "@mui/material";
import { Appbar } from "../../components/Appbar";
import { EmployeeInfo } from "../../components/EmployeeInfo";

export function WarehouseManagerHome({ navigation }: { navigation: any }) {
  const onSeeShelfs = () => {
    navigation.navigate("ShelfsDetail");
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
        <Button
          sx={{ marginY: 8, marginX: 16, width: "10%" }}
          variant="contained"
          onClick={onSeeShelfs}
        >
          See shelfs
        </Button>
      </Stack>
    </Container>
  );
}
