import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import priceTag from "../../assets/price-tag.png";
import { NavigationContext } from "@react-navigation/native";
import { useContext } from "react";
import { Container } from "@mui/system";

export function ProductCard(props: any) {
  const product = props.product;
  console.log("PRODCARD:", product)
  const productSnapshot = product.snapshot;
  const navigation = useContext(NavigationContext);

  const handleOnSelectProduct = () => {
    navigation?.navigate("ProductDetail", {product:product });
  };

  const handleOnAddToCart = () => {
    navigation?.navigate("ProductDetail", {product:product });
  };

  return (
    <Container>
      <Card
        sx={{ maxWidth: "auto", width: "auto" }}
        onClick={handleOnSelectProduct}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={productSnapshot.imageUrl}
            alt="price tag"
          />
          <div>
            <CardContent>
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
              </Stack>
              <Typography variant="body2" color="text.secondary" paddingY={0.5}>
                Marca: <b>{productSnapshot.brand}</b>
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOnAddToCart}>
            Ver producto
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
