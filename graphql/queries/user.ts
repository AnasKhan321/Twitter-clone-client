

export const verifyUserGoogleTokenQuery = `
        query VerifyUserGoogleToken($token: String!) {
            verifyGoogleToken(token: $token)
        }
`;

export const getCurrentUserQuery = `
  query GetCurrentUser {
    getCurrentUser {
      id
      email 
      firstName 
      lastName 
      profileImageUrl
      recommendedUser {
         email
        firstName 
        lastName 
        profileImageUrl
        id
      }
      followers {
        firstName 
        lastName 
        profileImageUrl
      
      }
      following {
          firstName 
          lastName 
          profileImageUrl
          email
      }
      tweets{
        id
        content
        author {
            email
            firstName
            id
            lastName
            profileImageUrl
        
        }
      }


    }
  }
`;


export const GetUserById = `#graphql 

  query GetUserById($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      email
      firstName
      id
      lastName
      profileImageUrl
      followers {
        firstName 
        lastName 
        profileImageUrl
      
      }
      following {
        firstName 
        lastName 
        profileImageUrl
      }
      tweets {
        author {
          firstName
          lastName
          profileImageUrl
        }
        content
        id
      }
    }
  }



`