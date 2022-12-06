import { Button, TextField, Stack, Divider, Container, ButtonGroup } from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Product } from "../../domain/Product/Product";
import { useMutation } from "@apollo/client";
import {
  CreateProduct,
  DeleteProduct,
  GetProductById,
  UpdateProduct,
  GetAllProducts,
} from "./queries";

interface Props {
  product: Product;
  action: String;
}

export const ProductForm: FunctionComponent<Props> = ({
  product: propProduct,
  action,
}) => {
  const propSnapshot = propProduct.snapshot;
  const [id, setId] = useState(propSnapshot.id ? propSnapshot.id + "" : "");
  const [name, setName] = useState(propSnapshot.name ? propSnapshot.name : "");
  const [brand, setBrand] = useState(
    propSnapshot.brand ? propSnapshot.brand : ""
  );
  const [price, setPrice] = useState(
    propSnapshot.price ? propSnapshot.price + "" : ""
  );

  const [createProduct] = useMutation(CreateProduct);
  const [deleteProduct] = useMutation(DeleteProduct);
  const [updateProduct] = useMutation(UpdateProduct);

  const handleOnDelete = async (id: number) => {
    const responseDeleteProduct = await deleteProduct({
      variables: { id },
    });

    if (responseDeleteProduct.data.deleteProduct) {
    }
  };

  const handleChange = ({
    target: { id, value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    if (id === "id") setId(value);
    if (id === "name") setName(value);
    if (id === "brand") setBrand(value);
    if (id === "price") setPrice(value);
  };

  const handleCreateProduct = async () => {
    const responseCreateProduct = await createProduct({
      variables: { name, brand, price },
    });

    const {
      name: newName,
      brand: newBrand,
      price: newPrice,
      id,
    } = responseCreateProduct.data.createProduct;
    const newProduct = new Product({
      brand: newBrand,
      name: newName,
      price: newPrice,
      id,
    });
  };

  const handleUpdate = async () => {
    const responseUpdateProduct = await updateProduct({
      variables: {
        id: +id,
        name: name,
        price: +price,
        brand: brand,
      },
    });

    if (responseUpdateProduct.data.updateProduct) {
      const {
        name: newName,
        brand: newBrand,
        price: newPrice,
        id,
      } = responseUpdateProduct.data.updateProduct;
      const newProduct = new Product({
        brand: newBrand,
        name: newName,
        price: newPrice,
        id,
      });
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <TextField
            id="id"
            label="Id"
            value={id}
            type={"number"}
            onChange={handleChange}
            disabled={action == "update" ? true : false}
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
      </Container>
      {action == "create" ? (
        <Button
          variant="contained"
          onClick={handleCreateProduct}
          disabled={id ? true : false}
          sx={{ width: "auto" }}
        >
          Crear
        </Button>
      ) : (
        <ButtonGroup>
          <Button
            variant="contained"
            sx={{ width: "auto" }}
          >
            modificar
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: "auto" }}
          >
            eliminar
          </Button>
        </ButtonGroup>
      )}
    </Stack>
  );
};
