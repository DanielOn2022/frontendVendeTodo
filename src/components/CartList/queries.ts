import { gql } from "@apollo/client";

export const getCart = gql`
  query getCart {
    getCart {
      id
      lastUpdate
      cartLines {
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
          suppliers {
            id
            company
            stock
          }
        }
        supplierId
        batchId
        amount
        price
        subTotal
        supplier {
          id
          company
          stock
        }
      }
      total
    }
  }
`;

export const removeLineCart = gql`
  mutation removeLineCart(
    $id: Int!
    $lastUpdate: String!
    $saleLineId: Int!
    $saleLines: [SaleLineIn]
  ) {
    removeLineCart(
      shoppingCart: { id: $id, lastUpdate: $lastUpdate, saleLines: $saleLines }
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
          brand
          price
          stock
          volume
          imageUrl
          description
          description
          suppliers {
            id
            company
            stock
          }
        }
        supplierId
        batchId
        amount
        price
        subTotal
      }
      total
    }
  }
`;

export const startPayment = gql`
  mutation startPayment($cart: ShopppingCart!) {
    startPayment(cart: $cart) {
      availableLines {
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
          suppliers {
            id
            company
            stock
          }
        }
        supplierId
        batchId
        amount
        price
        subTotal
        supplier {
          id
          company
          stock
        }
      }
      nonAvailableLines {
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
          suppliers {
            id
            company
            stock
          }
        }
        supplierId
        batchId
        amount
        price
        subTotal
        supplier {
          id
          company
          stock
        }
      }
      total
      shoppingCart {
        id lastUpdate cartLines {cart_sale_id saleLineId subTotal product {id name brand price volume imageUrl description suppliers {id company}}
        supplierId batchId amount price supplier {id company}} total
      }
    }
  }
`;

export const cancelStartPayment = gql`
  mutation cancelStartPayment($availableLines:[SaleLineIn!]!){
  cancelStartPayment(availableLines:$availableLines)
  }
`;