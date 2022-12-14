import gql from "graphql-tag";

export const getPackerSales = gql`
  query getPackerSale {
    getPackerSale {
      id
      total
      date
      completed
    }
  }
`;

export const beginSupply = gql`
mutation beginSupply {
  begginSupply {
    steps {
      section {
        shelfId
        sectionNumber
        capacity
        product {
          id
          name
          brand
          price
          stock
          volume
          imageUrl
          description
        }
      }
      saleLine {
        cart_sale_id
        saleLineId
        product {
          id
          name
          brand
          price
          stock
          volume
          imageUrl
          description
        }
        supplierId
        batchId
        subTotal
        price
        amount
        batchId
      }
    }
    saleid
    packed
    lastItem
  }
}
`;