import { Container, Typography } from "@mui/material";
import { Appbar } from "../../components/Appbar";

export function ShelfManager(props:any) {
    
    return (
        <Container maxWidth={false} disableGutters style={{ background: "white", paddingBottom: 24}}>
          <Appbar/>
          <Typography variant="h3">Shelf</Typography>
        </Container>
    );

}