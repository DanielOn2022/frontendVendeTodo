import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {}

export const Footer: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        background: "#6161f5",
        color: "white",
        pt: 4,
        pb: 4,
        marginTop: 12,
        width: "100%",
        padding:0,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={4}>
          <Typography variant="body1">Ing Web / Proyecto Integrador</Typography>
          <List>
            <ListItemText>
              <Typography variant="caption">
                Dr. Celemente Garcia Gerardo
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption">
                Martha Estela Valenzuela Tirado
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="body1">Integrantes:</Typography>
          <List>
            <ListItemText
              primaryTypographyProps={{
                letterSpacing: 0,
              }}
            >
              <Typography variant="caption">Cordero Vazquez Kenia</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption">
                Espinosa Lopez Daniel Alejandro
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption">Espinoza Perea Anidene</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption">
                Leon Molina Elevier Amin
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};