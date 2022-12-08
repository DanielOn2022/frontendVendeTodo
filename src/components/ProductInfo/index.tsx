import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";
import priceTag from "../../assets/price-tag.png";
import { Typography, Stack, Autocomplete, TextField } from "@mui/material";

export function ProductInfo(props: any) {
  const product = props.product;
  console.log("component -> ", product);
  const productSnapshot = product.snapshot;
  const navigation = useContext(NavigationContext);
  const [suplier, setSuplier] = useState('Select suplier');

  const onKeyDownSuplier = (e:React.KeyboardEvent<HTMLDivElement> ) => {
    console.log(suplier);
    setSuplier(suplier);
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
      paddingX={24}
    >
      <img src={priceTag} style={{ maxWidth: "40%" }} />
      <Stack direction="column" spacing={1}>
        <Typography gutterBottom variant="h5" component="div">
          {productSnapshot.name}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Precio:
          </Typography>
          <Typography variant="h6" color="text.secondary" padding={0.5}>
            <b>${productSnapshot.price}</b>
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" paddingY={0.5}>
          Disponibles: <b>10</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" paddingY={0.5}>
          Marca: <b>{productSnapshot.brand}</b>
        </Typography>
        <Autocomplete
          disablePortal
          id="provedor"
          options={["Suplier1", "Suplier2", "Suplier3"]}
          sx={{ width: 300, marginY: 16 }}
          size="small"
          renderInput={(params: any) => (
            <TextField {...params} />
          )}
          value={suplier}
          onKeyDown={onKeyDownSuplier}
        />
        <TextField type="number"  size="small"></TextField>
      </Stack>
    </Stack>
  );
}
