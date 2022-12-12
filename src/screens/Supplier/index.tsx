import { Container, Typography } from "@mui/material";
import { Appbar } from "../../components/Appbar";

export function Supplier(props:any) {
    
    return (
        <Container maxWidth={false} disableGutters style={{ background: "white", paddingBottom: 24}}>
          <Appbar/>
          <Typography variant="h3">Suplier</Typography>
        </Container>
    );

}