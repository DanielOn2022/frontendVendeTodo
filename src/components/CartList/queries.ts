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


export const removeLineCart = gql`
  mutation removeLineCart($id: Int!, $lastUpdate: String!, $saleLineId: Int!) {
    removeLineCart(
      shoppingCart: { id: $id, lastUpdate: $lastUpdate }
      saleLineId: $saleLineId
    ) {
      id
      lastUpdate
      cartLines {
        cart_sale_id
        saleLineId
        product {
          id
          name
        }
        supplierId
        batchId
        amount
        price
        subTotal
        supplierName
      }
      total
    }
  }
`;
