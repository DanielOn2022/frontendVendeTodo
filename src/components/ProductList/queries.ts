import { gql } from "@apollo/client";

export const GetProductsByName = gql`
  query getProductByName($name: String!) {
    getProductsByName(name: $name) {
      id
      name
      brand
      price
      imageUrl
    }
  }
`;
