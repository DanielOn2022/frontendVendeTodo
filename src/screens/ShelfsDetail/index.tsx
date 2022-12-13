import { Container, Stack } from "@mui/system";
import { Button } from "react-native";
import { Appbar } from "../../components/Appbar";
import { EmployeeInfo } from "../../components/EmployeeInfo";
import { ShelfList } from "../../components/ShelfList";

export function ShelfsDetail(props: any) {
    return (
      <Container
        maxWidth={false}
        disableGutters
        style={{ marginTop: 64, background: "white", paddingBottom: 24 }}
      >
        <Appbar searchedProduct="" />
        <ShelfList/>
      </Container>
    );
  }
  