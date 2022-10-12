import { gql } from '@apollo/client';


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
    mutation login($password: String!, $email: String!) {
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
    mutation addDreamSpot($_id: ID!) {
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
    mutation removeSpotUser($_id: ID!) {
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