import { gql } from "@apollo/client";

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

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      lastLoginDate
      profileUrl
      email
      token
    }
  }
`;
