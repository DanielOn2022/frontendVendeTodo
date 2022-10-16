import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { InputContainer } from "../styled";

interface Props {}

export const ProductForm: FunctionComponent<Props> = ({}) => {
  const handleChange = () => {
    console.log("holi");
  };

  return (
    <Box display="grid" gap={2} padding={2}>
      <InputContainer>
        <TextField
          id="outlined-name"
          label="Id"
          value={""}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="outlined-name"
          label="Name"
          value={""}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="outlined-name"
          label="Brand"
          value={""}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="outlined-name"
          label="Price"
          value={""}
          onChange={handleChange}
        />
      </InputContainer>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button variant="contained">Crear</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" disabled>
            Actualizar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" href="#contained-buttons">
            Obtener
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
