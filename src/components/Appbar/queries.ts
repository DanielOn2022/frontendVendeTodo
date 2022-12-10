import { gql } from "@apollo/client";

export const islogged = gql`
  query islogged {
    logedIn {
      id
      name
      token
    }
  }
`;
