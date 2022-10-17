import { useMutation, useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Product } from "../../domain/Product/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { CreateProduct, DeleteProduct, GetProductById, UpdateProduct } from './queries';

interface Props {}

export const CRUD: FunctionComponent<Props> = ({}) => {

  const [formProduct, setFormProduct] = useState<Product>(new Product({brand: '', name: '', price: 0}));
  const [showProducts, setShowProducts] = useState<Product[]>([
    new Product({
      id: 1,
      name: "Paquete de 10 lapices numero 2",
      brand: "Norma",
      price: 35,
    }),
    new Product({
      id: 2,
      name: "Paquete de 10 lapices numero 2",
      brand: "Norma",
      price: 35,
    }),
    new Product({
      id: 3,
      name: "Paquete de 10 lapices numero 2",
      brand: "Norma",
      price: 35,
    }),
    new Product({
      id: 4,
      name: "Paquete de 10 lapices numero 2",
      brand: "Norma",
      price: 35,
    }),
  ]);

  const [createProduct] = useMutation(CreateProduct);

  const handleOnCreate = async (productData: {name: string, price: number, brand: string}) => {
    const { name, brand, price } = productData;
    const responseCreateProduct = await createProduct({
      variables: {name, brand, price}
    });
    //console.log(productData);
    console.log("responseData: ", responseCreateProduct.data);
    const { name: newName, brand: newBrand, price: newPrice, id } = responseCreateProduct.data.createProduct;
    const newProduct = new Product({brand: newBrand, name: newName, price: newPrice, id});
    setShowProducts([newProduct]);
    console.log(showProducts);
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 3">
        <ProductForm product={formProduct} handleOnCreate={handleOnCreate}/>
      </Box>
      <Box gridColumn="span 9">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <ProductList
              products={showProducts}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
