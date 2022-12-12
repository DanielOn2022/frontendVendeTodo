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
mutation authorizePayment {
  authorizePayment(
    paymentMethod: { cardNumber: 4466, clientId: 8 }
    shippingAddress: {
      id: 3
      city: "Culiacan"
      street: "Universitarios"
      externalNumber: "561"
      clientId: 8
    }
    shoppingCart: {
      id: 7
      lastUpdate: "2022-12-10T18:54:13"
      saleLines: [
       {
          cart_sale_id: 7,
          saleLineId: 1,
          product: {
            id: 3,
            name: "Mouse G230",
            brand: "Logitec",
            price: 500,
            stock: 24,
            volume: 0.5,
            imageUrl: "https://imgs.search.brave.com/jJKzdCBv-M13uxiVVvKwHjrXzQYSNNGIIXTtihcZbq8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRpbWlhLmNv/bS9wcm9kdWN0b3Mv/OTEwLTAwNTg1Mi0y/LmpwZw",
            description: "Mouse gamer para jugar con luces y muy comodo, velocidad de respuesta alta, etc",
            suppliers: []
          },
          supplierId: 2,
          batchId: 6,
          amount: 6,
          price: 49.99,
          subTotal: 299.94,
          supplier: {
            id: 2,
            company: "TecnoProduct SA de CV",
          }
        }
      ]
    }
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
