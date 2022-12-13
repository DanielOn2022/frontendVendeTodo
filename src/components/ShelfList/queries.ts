import { gql } from "@apollo/client";

export const beginSortingProcess = gql`
  query beginSortingProcess($role: String!) {
    beginSortingProcess(role: $role) {
      id
      warehouseManagerId
      shelfManagerId
      sortedDate
      sections {
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
          suppliers {
            id
            company
            stock
          }
        }
      }
    }
  }
`;

export const sortShelfs = gql`
  mutation sortShelf($shelfIds: [Int!]!) {
    sortShelfs(shelfIds: $shelfIds) {
      shelf {
        id
        warehouseManagerId
        shelfManagerId
        sortedDate
        sections {
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
            suppliers {
              id
              company
              stock
            }
          }
        }
      }
      newStoredProducts {
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
      newUnStoredProducts {
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
    }
  }
`;

export const finishSortingProcess = gql`
  mutation finishSortingProcess(
    $sortOrder: [SortOrder!]!
    $newStoredProducts: [Int]!
    $newUnStoredProducts: [Int]!
  ) {
    finishSortingProcess(
      sortOrder: $sortOrder
      newStoredProducts: $newStoredProducts
      newUnStoredProducts: $newUnStoredProducts
    )
  }
`;
