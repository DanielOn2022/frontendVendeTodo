import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../../domain/Product/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { CreateProduct, DeleteProduct, GetProductById, UpdateProduct, GetAllProducts } from './queries';
import LoopIcon from '@mui/icons-material/Loop';

interface Props {}

export const CRUD: FunctionComponent<Props> = ({}) => {

  const [formProduct, setFormProduct] = useState<Product>(new Product({brand: '', name: '', price: 0}));
  const [showProducts, setShowProducts] = useState<Product[]>([]);

  const [singleProduct, {data: singleProductQueryData}] = useLazyQuery(GetProductById);
  const [createProduct] = useMutation(CreateProduct);
  const [deleteProdcut] = useMutation(DeleteProduct);
  const [updateProduct] = useMutation(UpdateProduct);

  const { data: allProductsData, loading } = useQuery(GetAllProducts, {
    skip: showProducts.length <= 0 ? false : true
  });

  useEffect(() => {
    if (singleProductQueryData) {
      const fetchedProduct = new Product({...singleProductQueryData.singleProduct});
      setShowProducts([fetchedProduct]);
    }
  }, [singleProductQueryData]);
  

  const handleOnCreate = async (productData: {name: string, price: number, brand: string}) => {
    const { name, brand, price } = productData;
    const responseCreateProduct = await createProduct({
      variables: {name, brand, price}
    });
    
    const { name: newName, brand: newBrand, price: newPrice, id } = responseCreateProduct.data.createProduct;
    const newProduct = new Product({brand: newBrand, name: newName, price: newPrice, id});
    setShowProducts([newProduct]);
  }

  const handleOnGetById = async (id: number) => {
    singleProduct({variables: {id}});
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
 
  if (allProductsData) {
    const allProducts = allProductsData.getAllProducts.map((fetchedProduct: any) => new Product({...fetchedProduct})); 
    setShowProducts(allProducts);
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} marginBottom={10}>
      <Box gridColumn="span 4">
        <ProductForm product={formProduct} handleOnCreate={handleOnCreate} handleOnGetById={handleOnGetById} handleOnUpdate={handleOnUpdate}/>
      </Box>
      <Box gridColumn="span 8">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {loading 
              ? <LoopIcon></LoopIcon> 
              : <ProductList products={showProducts} handleOnDelete={handleOnDelete} />
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
