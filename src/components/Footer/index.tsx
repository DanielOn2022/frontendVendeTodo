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

/*import {
  Box,
  Grid,
  List,
  ListItemText,
  Typography,
  Stack,
  BottomNavigation,
} from "@mui/material";
import { FunctionComponent } from "react";

interface Props {}

export const Footer: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      sx={{
        background: "AliceBlue",
        pt: 4,
        pb: 3,
        marginTop: 8,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Stack direction="row" spacing={3}>
          <Stack direction="column">
            <Typography variant="body1">
              Ing Web / Proyecto Integrador
            </Typography>
            <Typography variant="caption">
              Dr. Celemente Garcia Gerardo
            </Typography>
            <Typography variant="caption">
              Martha Estela Valenzuela Tirado
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="body1">Integrantes:</Typography>
            <Typography variant="caption">Cordero Vazquez Kenia</Typography>
            <Typography variant="caption">
              Espinosa Lopez Daniel Alejandro
            </Typography>
            <Typography variant="caption">Espinoza Perea Anidene</Typography>
            <Typography variant="caption">Leon Molina Elevier Amin</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};
*/
