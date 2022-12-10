import { gql } from "@apollo/client";

export const GetSingleProduct = gql`
  query singleProduct($id:Int!,$name:String!,$price:Float!) {
    singleProduct(product:{id:$id name:$name price:$price}) {
        id
        name
        brand
        price
        stock
        volume
        imageUrl
        description
        suppliers{id company}
    }
  }
`;
