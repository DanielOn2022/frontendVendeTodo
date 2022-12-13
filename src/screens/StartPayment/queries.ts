import { gql } from "@apollo/client";

export const getPaymentMethod = gql`query getPaymentMethod {
    getPaymentMethods {
      cardNumber clientId
    }
  }
`;

export const getShippingAddress = gql`
query getShippingAddresses {
  getShippingAddresses {
    id city street externalNumber internalNumber clientId
  }
}
`;
export const register = gql`
  mutation register(
    $email: String!
    $password: String!
    $name: String!
    $cellphone: String!
    $lastname: String!
  ) {
    register(
      email: $email
      password: $password
      name: $name
      cellphone: $cellphone
      lastname: $lastname
    ) {
      id
      name
      lastLoginDate
      profileUrl
      email
      token
    }
  }
`;
export const cancelStartPayment = gql`
  mutation cancelStartPayment($availableLines:[SaleLineIn!]!){
  cancelStartPayment(availableLines:$availableLines)
  }
`;

export const authorizePayment = gql`
mutation authorizePayment(
  $paymentMethod: Int!
  $shippingAddress: Int!
  ) {
  authorizePayment(
    paymentMethod: $paymentMethod,
    shippingAddress: $shippingAddress,
  ) {
    sale {
      id
      total
      date
      shippingAddress {
        city
        street
        externalNumber
      }
      saleLines {
        cart_sale_id
        saleLineId
        product {
          id
          name
          brand
          stock
        }
        supplierId
        amount
        price
        subTotal
      }
    }
    shoppingCart {
      id
      lastUpdate
      total
      cartLines {
        saleLineId
      }
    }
    payment {
      id
      amount
      concept
    }
  }
}
`;
