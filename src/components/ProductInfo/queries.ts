import { gql } from "@apollo/client";

export const GetSingleProduct = gql`
  query singleProduct($id: Int!, $name: String!, $price: Float!) {
    singleProduct(product: { id: $id, name: $name, price: $price }) {
      id
      name
      brand
      price
      stock
      volume
      imageUrl
      description
      suppliers {
        id
        company
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
    $productId: Int!
    $price: Float!
    $name: String!
    $cartId: Int!
    $lastUpdate: String!
  ) {
    addToCart(
      quantity: $quantity
      supplierId: $supplierId
      product: { id: $productId, price: $price, name: $name }
      cart: { id: $cartId, lastUpdate: $lastUpdate }
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
    }
  }
`;
