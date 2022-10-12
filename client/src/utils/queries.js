import { gql } from '@apollo/client';

export const QUERY_SPOTS = gql`
  query Spots{
    spots {
      _id
      city
      country
      climate
      description
      category
      image
      treat
    }
  }
`;


export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN = gql`
    mutation addUser($password: String!, $email: String!) {
        login(password: $password, email: $email){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_DREAM_SPOT = gql`
    mutation addDreamSpot($_d: ID!) {
        addDreamSpot(_id: $_id){
            _id
            username
            email
            spots {
                _id
            }
        }
    }
`;

export const REMOVE_SPOT_USER = gql`
    mutation removeSpotUser($_d: ID!) {
        removeSpotUser(_id: $_id) {
            _id
            username
            email
            spots {
                _id
            }
        }
    }
`;


export const GET_FAVORITE_SPOTS = gql`
    query me {
        _id
        username
        email
        spots {
          _id
          city
          country
          climate
          description
          category
          image
          treat
        }
      }
`;


