import { gql } from "@apollo/client";

export const GetSingleProduct = gql`
  query singleProduct($id: Int!, $name: String!, $price: Float!) {
    singleProduct(product: { id: $id, name: $name, price: $price }) {
      id name brand price stock volume imageUrl description suppliers {
      id company 
    }
    }
  }
`;

export const islogged = gql`
  query islogged {
    logedIn {
      id
      name
      token
      shoppingCart {
        id
        lastUpdate
      }
    }
  }
`;

export const addToCart = gql`
  mutation addToCart(
    $quantity: Int!
    $supplierId: Int!
    $product: Product!
    $cart: ShopppingCart!
  ) {
    addToCart(
      quantity: $quantity
      supplierId: $supplierId
      product: $product
      cart: $cart
    ) {
      id
      cartLines {
        batchId
        cart_sale_id
      }
    }
  }
`;

export const getCart = gql`
  query getCart {
    getCart {
      id
    lastUpdate
    cartLines {
      cart_sale_id
      saleLineId
      product {
        id name brand price stock volume imageUrl description suppliers {
          id company stock
        }
      }
      supplierId
      batchId
      amount
      price
      subTotal
      supplier {
        id company stock
      }
    }
    total
    }
  }
`;
