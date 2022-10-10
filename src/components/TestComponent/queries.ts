import { gql } from '@apollo/client';

export const GetFirstPost = gql`
  query test2($id: Int!) {
    singlePost(test: $id) {
      id title body
    }
  }
`;