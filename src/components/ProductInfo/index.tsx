import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useRef, useState } from "react";
import { addToCart, getCart, GetSingleProduct, islogged } from "./queries";
import {
  Typography,
  Stack,
  Autocomplete,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { Product } from "../../domain/Product/Product";
import { Supplier } from "../../domain/Supplier/Supplier";
import { ShoppingCartFactory } from "../../domain/ShopppingCart/ShoppingCartFactory";
import { ShoppingCart } from "../../domain/ShopppingCart/ShoppingCart";
import { ProductFactory } from "../../domain/Product/ProductFactory";

export function ProductInfo(props: any) {
  const { product } = props;
  const productSnapshot = product.snapshot;
  const navigation = useContext(NavigationContext);
  
  const [supplier, setSupplier] = useState('');
  const [amount, setAmount] = useState("1");
  const [singleProduct, setsingleProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<ShoppingCart | null>(null);
  const [addCartLine, { data: addedCartLine }] = useMutation(addToCart);
  const { data: userCart } = useQuery(getCart, {fetchPolicy:"network-only"});
  const { data: userData } = useQuery(islogged, {
    fetchPolicy: "network-only",
  });
  const { data: ProductDetail, loading, error: errorCart } = useQuery(GetSingleProduct, {
    variables: {
      id: productSnapshot.id,
      name: productSnapshot.name,
      price: productSnapshot.price,
    },
    fetchPolicy:"network-only"
  }, );

  useEffect(() => {
    if (!loading) {
      setsingleProduct(ProductFactory.createFromGraphql(ProductDetail.singleProduct));
    }
  }, [loading])

  useEffect(() => {
    if(singleProduct) {
      console.log('singleProduct en el info => ', singleProduct)
      setSupplier((singleProduct?.snapshot.suppliers as Supplier[])[(singleProduct?.snapshot.suppliers as Supplier[]).length - 1].snapshot.company);
    }
  }, [singleProduct]);

  useEffect(() => {
    if(userCart) {
      setCart(ShoppingCartFactory.createFromGraphql(userCart.getCart));
    }
  }, [userCart]);

  const onChangeAmount = (e: any) => {
    if (e.target.value >= 0) {
      setAmount(e.target.value);
    }
  };

  const onChangeSupplier = (e: any, newValue: any) => {
    setSupplier(newValue);
  };

  const handleOnAddToCart = async () => {
    const supplierId = singleProduct?.snapshot.suppliers?.find(supplierItem => {
      return supplierItem.snapshot.company === supplier
    });
    const addedLine = await addCartLine({
      variables: {
        quantity: parseInt(amount),
        supplierId: supplierId?.snapshot.id,
        product: {...singleProduct?.snapshot, suppliers: singleProduct?.snapshot.suppliers?.map(supplier => {return {...supplier.snapshot}})},
        cart: {...cart?.snapshot, saleLines: cart?.snapshot.saleLines?.map(saleLine => {return {
          ...saleLine.snapshot,
          product: {
            ...saleLine.snapshot.product.snapshot,
            suppliers: undefined,
          },
          supplier: { ...saleLine.snapshot.supplier?.snapshot },
        };})},
      },
    });
  };

  return (
    <Container maxWidth="lg">
      {!loading && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            minWidth="100%"
          >
            <img
              src={ProductDetail.singleProduct.imageUrl}
              style={{ minWidth: "40%", maxWidth: "40%" }}
            />
            <Stack direction="column" spacing={1} marginX={2} minWidth="40%">
              <Typography gutterBottom variant="h3" component="div">
                {ProductDetail.singleProduct.name}
              </Typography>
              <Stack direction="column" alignItems="flex-start">
                <Stack direction="row" alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    Precio:
                  </Typography>
                  <Typography variant="h6" color="text.secondary" padding={0.5}>
                    <b>${ProductDetail.singleProduct.price}</b>
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paddingY={0.5}
                >
                  Disponibles: <b>{ProductDetail.singleProduct.stock}</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paddingY={0.5}
                >
                  Marca: <b>{ProductDetail.singleProduct.brand}</b>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paddingY={0.5}
                  marginRight={2}
                >
                  Surtidor:
                </Typography>
                <Autocomplete
                  disablePortal
                  disableClearable
                  id="provedor"
                  options={ProductDetail.singleProduct.suppliers.map(
                    (suplier: any) => {
                      return suplier.company;
                    }
                  )}
                  style={{ width: "50%" }}
                  size="small"
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      onKeyPress={(e) => {
                        e.preventDefault();
                      }}
                    />
                  )}
                  value={supplier}
                  onChange={onChangeSupplier}
                />
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paddingY={0.5}
                  marginRight={2}
                >
                  Cantidad:
                </Typography>
                <TextField
                  onChange={onChangeAmount}
                  defaultValue={1}
                  InputProps={{ inputProps: { min: 0, max: ProductDetail.singleProduct.stock } }}
                  type="number"
                  size="small"
                  style={{ width: 65 }}
                ></TextField>
              </Stack>
              <Button
                variant="contained"
                style={{ marginTop: 32, width: 200 }}
                onClick={handleOnAddToCart}
              >
                Add to my cart
              </Button>
              {addedCartLine && (
                <Typography sx={{ color: "green" }}>
                  Successfully added product
                </Typography>
              )}
              {errorCart && (
                <Typography sx={{ color: "red" }} >
                  {errorCart.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction="column" minWidth="85%" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              <b>Especificaciones del producto</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" minWidth="85%">
              {ProductDetail.singleProduct.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" minWidth="85%">
              <b>Dimentions: </b>
              {ProductDetail.singleProduct.volume} m3
            </Typography>
          </Stack>
        </Stack>
      )}
    </Container>
  );
}
