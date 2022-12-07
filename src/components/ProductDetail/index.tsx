import { NavigationContext } from "@react-navigation/native";
import { useContext } from "react";
import{
Typography,
Stack,
} from "@mui/material";

export function ProductDetail(props: any) {
    const product = props.product;
    console.log("component -> ",product)
    const productSnapshot = product.snapshot;
    const navigation = useContext(NavigationContext);
    return(
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography gutterBottom variant="h5" component="div">
          {productSnapshot.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" padding={1}>
          <b>${productSnapshot.price}</b>
        </Typography>
      <Typography variant="body2" color="text.secondary" paddingY={0.5}>
        Marca: <b>{productSnapshot.brand}</b>
      </Typography>);
      </Stack>);
}