import { gql } from "@apollo/client";

export const beginSortingProcess = gql`
query beginSortingProcess($role:String!){
beginSortingProcess(role:$role){
    id
    warehouseManagerId
    shelfManagerId
    sortedDate
    sections{
      shelfId
      sectionNumber
      capacity
      product{
        id
        name
        brand
        price
        stock
        volume
        imageUrl
        description
        suppliers{
          id
          company
          stock
        }
      }
    }
  }
}
`;
