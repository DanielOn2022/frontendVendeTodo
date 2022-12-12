import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import profile from "../../assets/profile.png";

export function EmployeeInfo(props: any) {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        minWidth="100%"
      >
        <img src={profile} style={{ minWidth: "40%", maxWidth: "40%" }} />
        <Stack direction="column" spacing={1} marginX={2} minWidth="40%">
          <Typography gutterBottom variant="h3" component="div">
            Welcome, {localStorage.getItem("name")}
          </Typography>
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h6" color="text.secondary">
              Role:<b>{localStorage.getItem("role")}</b>
            </Typography>
            <Typography variant="h6" color="text.secondary" paddingY={0.5}>
              cellphone: <b>{localStorage.getItem("cellphone")}</b>
            </Typography>
            <Typography variant="h6" color="text.secondary" paddingY={0.5}>
              RFC: <b>{localStorage.getItem("rfc")}</b>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
