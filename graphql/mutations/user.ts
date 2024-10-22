export const followuser = `#graphql 


   mutation FollowUser($to: ID!) {
         followUser(to: $to)
    }


`

export const unFollowUser = `#graphql 

    mutation UnfollowUser($to: ID!) {
         unfollowUser(to: $to)
    }

`