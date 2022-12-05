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
import { Product } from "../../domain/Product/Product";
import priceTag from '../../assets/price-tag.png';

interface Props {
  product: Product;
  handleOnDelete: (id: number) => void  ;
}

export const ProductCard: FunctionComponent<Props> = ({ product, handleOnDelete }) => {
  const productSnapshot = product.snapshot;

  const handleDelete = () => {
    handleOnDelete(productSnapshot.id || 0);
  }

  return (
    <Card sx={{ maxWidth: "auto", width: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={priceTag}
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
        <Button size="small" color="primary" onClick={handleDelete}>
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
};
