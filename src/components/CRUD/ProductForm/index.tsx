import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Product } from "../../../domain/Product/Product";
import { InputContainer } from "../styled";

interface Props {
  product: Product;
  handleOnCreate: (productData: {name: string, price: number, brand: string}) => void;
  handleOnGetById: (id: number) => void;
  handleOnUpdate: (product: Product) => void;
}

export const ProductForm: FunctionComponent<Props> = ({product: propProduct, handleOnCreate, handleOnGetById, handleOnUpdate}) => {
  const propSnapshot = propProduct.snapshot;
  const [id, setId] = useState(propSnapshot.id ? propSnapshot.id  + '' : '');
  const [name, setName] = useState(propSnapshot.name);
  const [brand, setBrand] = useState(propSnapshot.brand);
  const [price, setPrice] = useState(propSnapshot.price ? propSnapshot.price + '' : '');

  const handleChange = ( {target: {id, value}}: ChangeEvent<HTMLTextAreaElement> ) => {
    if (id === 'id') setId(value);
    if (id === 'name') setName(value);
    if (id === 'brand') setBrand(value);
    if (id === 'price') setPrice(value);
  };

  const handleCreateProduct = () => {
    handleOnCreate({brand, name, price: +price});
  }

  const handleGetById = () => {
    handleOnGetById(+id);
  }

  const handleUpdate = () => {
    handleOnUpdate(new Product({brand, name, price: +price, id: +id}));
  }

  return (
    <Box display="grid" component="form" gap={2}>
      <InputContainer>
        <TextField
          id="id"
          label="Id"
          value={id}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="name"
          label="Nombre"
          value={name}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="brand"
          label="Marca"
          value={brand}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <TextField
          id="price"
          label="Precio"
          value={price}
          onChange={handleChange}
        />
      </InputContainer>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleCreateProduct}>Crear</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" disabled={id ? false : true} onClick={handleUpdate}>
            Actualizar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleGetById} disabled={id ? false : true}>
            Obtener
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
