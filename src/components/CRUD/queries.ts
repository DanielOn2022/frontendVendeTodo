import { gql } from "@apollo/client";

export const GetProductById = gql`
  query getProductById($id: Int!) {
    singleProduct(id: $id) {
      id
      name
      brand
      price
    }
  }
`;

export const CreateProduct = gql`
  mutation createProduct($name: String!, $price: Int!, $brand: String!) {
    createProduct(name: $name, price: $price, brand: $brand) {
      id
      name
      brand
      price
    }
  }
`;

export const DeleteProduct = gql`
  mutation deteleProduct($id: Int!) {
    deleteProduct(id: 1) {
      id
      name
      brand
      price
    }
  }
`;

export const UpdateProduct = gql`
  mutation updateProduct(
    $id: Int!
    $name: string!
    $price: number!
    $brand: stirng!
  ) {
    updateProduct(
      id: $id
      newName: $newName
      newPrice: $newPrice
      newBrand: $newBrand
    ) {
      id
      name
      brand
      price
    }
  }
`;
