import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Product } from "../../domain/Product/Product";
import priceTag from "../../assets/price-tag.png";
import { FunctionComponent, useState } from "react";

interface Props {
  product: Product;
  handleOnSelectProduct: (product: Product) => void;
  handleOnDeleteProduct: () => void;
}

export const ProductCard: FunctionComponent<Props> = ({
  product,
  handleOnSelectProduct,
  handleOnDeleteProduct
}) => {
  const productSnapshot = product.snapshot;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnDelete = () => {
    handleOnSelectProduct(product);
    handleOnDeleteProduct();
    handleClose();
  };

  return (
    <Card sx={{ maxWidth: "auto", width: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={priceTag}
          alt="price tag"
        />
        <div
          onClick={() => {
            handleOnSelectProduct(product);
          }}
        >
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
        </div>
      </CardActionArea>
      <CardActions>
        <div>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Borrar
          </Button>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClose={handleClose}
          >
            <DialogTitle id="alert-dialog-title">
              {"¿Seguro que desea eliminar el producto?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleOnDeleteProduct}>Aceptar</Button>
              <Button autoFocus onClick={handleClose}>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handleOnSelectProduct(product);
          }}
        >
          modificar
        </Button>
      </CardActions>
    </Card>
  );
};
