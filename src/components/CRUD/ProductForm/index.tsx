import { Box, Button, Grid, TextField, Stack, Divider } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Product } from "../../../domain/Product/Product";
import { InputContainer } from "../styled";

interface Props {
  product: Product;
  handleOnCreate: (productData: {
    name: string;
    price: number;
    brand: string;
  }) => void;
  handleOnGetById: (id: number) => void;
  handleOnUpdate: (product: Product) => void;
}

export const ProductForm: FunctionComponent<Props> = ({
  product: propProduct,
  handleOnCreate,
  handleOnGetById,
  handleOnUpdate,
}) => {
  const propSnapshot = propProduct.snapshot;
  const [id, setId] = useState(propSnapshot.id ? propSnapshot.id + "" : "");
  const [name, setName] = useState(propSnapshot.name);
  const [brand, setBrand] = useState(propSnapshot.brand);
  const [price, setPrice] = useState(
    propSnapshot.price ? propSnapshot.price + "" : ""
  );

  const handleChange = ({
    target: { id, value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    if (id === "id") setId(value);
    if (id === "name") setName(value);
    if (id === "brand") setBrand(value);
    if (id === "price") setPrice(value);
  };

  const handleCreateProduct = () => {
    handleOnCreate({ brand, name, price: +price });
  };

  const handleGetById = () => {
    handleOnGetById(+id);
  };

  const handleUpdate = () => {
    handleOnUpdate(new Product({ brand, name, price: +price, id: +id }));
  };

  return (
    <Stack spacing={2} maxWidth={350}>
      <Stack spacing={2}>
        <TextField
          id="id"
          label="Id"
          value={id}
          type={"number"}
          onChange={handleChange}
        />
        <TextField
          id="name"
          label="Nombre"
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="brand"
          label="Marca"
          value={brand}
          onChange={handleChange}
        />
        <TextField
          id="price"
          label="Precio"
          value={price}
          type={"number"}
          onChange={handleChange}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={handleCreateProduct}
          disabled={id ? true : false}
        >
          Crear
        </Button>
        <Button
          variant="contained"
          disabled={id ? false : true}
          onClick={handleUpdate}
        >
          Actualizar
        </Button>
        <Button
          variant="contained"
          onClick={handleGetById}
          disabled={id ? false : true}
        >
          Obtener
        </Button>
      </Stack>
    </Stack>
  );
};
