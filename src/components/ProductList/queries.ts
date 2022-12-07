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
    deleteProduct(id: $id) {
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
    $name: String!
    $price: Int!
    $brand: String!
  ) {
    updateProduct(id: $id, newName: $name, newPrice: $price, newBrand: $brand) {
      id
      name
      brand
      price
    }
  }
`;

export const GetAllProducts = gql`
  query getAllProducts {
    getAllProducts {
      id
      name
      brand
      price
    }
  }
`;

export const GetProductsByName = gql`
  query getProductByName($name: String!) {
    getProductsByName(name: $name) {
      id
      name
      brand
      price
    }
  }
`;
