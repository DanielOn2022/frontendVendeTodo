import { gql } from "@apollo/client";

export const getCart = gql`
  query getCart {
    getCart {
      id
      lastUpdate
      cartLines {
        cart_sale_id
        saleLineId
        amount
        price
        subTotal
        product {
          name 
          imageUrl
        }
      }
    }
  }
`;
