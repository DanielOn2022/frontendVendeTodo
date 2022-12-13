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
