import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../../domain/Product/Product";
import {} from '../../../assets/price-tag.png';

interface Props {
  product: Product;
}

export const ProductCard: FunctionComponent<Props> = ({ product }) => {
  const productSnapshot = product.snapshot;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../../../assets/price-tag.png"
          alt="price tag"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productSnapshot.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productSnapshot.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${productSnapshot.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Id: {productSnapshot.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
