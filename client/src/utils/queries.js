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

//todo - query schema
export const GET_FAVORITE_SPOTS = gql`
    query me {
        me {
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
      }}
`;


