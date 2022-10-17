import { useMutation, useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Product } from "../../domain/Product/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { CreateProduct, DeleteProduct, GetProductById, UpdateProduct } from './queries';

interface Props {}

let formProductId: number | null;

export const CRUD: FunctionComponent<Props> = ({}) => {

  const [formProduct, setFormProduct] = useState<Product>(new Product({brand: '', name: '', price: 0}));
  const [showProducts, setShowProducts] = useState<Product[]>([]);

  const [createProduct] = useMutation(CreateProduct);
  const [deleteProdcut] = useMutation(DeleteProduct);
  const [updateProduct] = useMutation(UpdateProduct);

  const { loading, error, data: queryProductData, refetch: refetchProductById } = useQuery(GetProductById, {
    skip: formProductId ? false : true,
    variables:{id: formProductId}
  });

  const handleOnCreate = async (productData: {name: string, price: number, brand: string}) => {
    const { name, brand, price } = productData;
    const responseCreateProduct = await createProduct({
      variables: {name, brand, price}
    });
    
    const { name: newName, brand: newBrand, price: newPrice, id } = responseCreateProduct.data.createProduct;
    const newProduct = new Product({brand: newBrand, name: newName, price: newPrice, id});
    formProductId = null;
    setShowProducts([newProduct]);
  }

  const handleOnGetById = async (id: number) => {
    formProductId = id;
    refetchProductById({ id });
  }

  const handleOnDelete = async (id: number) => {
    const responseDeleteProduct = await deleteProdcut({
      variables: {id}
    });

    if (responseDeleteProduct.data.deleteProduct)
      setShowProducts(showProducts.filter(product => product.snapshot.id !== id));
  }

  const handleOnUpdate = async (product: Product) => {
    const responseUpdateProduct = await updateProduct({
      variables: {
        id: product.snapshot.id,
        name: product.snapshot.name,
        price: product.snapshot.price,
        brand: product.snapshot.brand,
      }
    });

    if (responseUpdateProduct.data.updateProduct){
      const { name: newName, brand: newBrand, price: newPrice, id } = responseUpdateProduct.data.updateProduct;
      const newProduct = new Product({brand: newBrand, name: newName, price: newPrice, id});
      setShowProducts([newProduct]);
    }
  }
 
  const queryData = queryProductData?.singleProduct;
  let queryProduct: Product | null = null;
  if (queryData) {
    queryProduct = new Product({...queryData})
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} marginBottom={10}>
      <Box gridColumn="span 4">
        <ProductForm product={formProduct} handleOnCreate={handleOnCreate} handleOnGetById={handleOnGetById} handleOnUpdate={handleOnUpdate}/>
      </Box>
      <Box gridColumn="span 8">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <ProductList
              products={queryProduct ? [queryProduct] : showProducts} handleOnDelete={handleOnDelete}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
