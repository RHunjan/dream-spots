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
    }
  }
`;