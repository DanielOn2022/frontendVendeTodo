import { gql } from "@apollo/client";

export const getPaymentMethod = gql`query getPaymentMethod {
    getPaymentMethods {
      cardNumber clientId
    }
  }
`;

