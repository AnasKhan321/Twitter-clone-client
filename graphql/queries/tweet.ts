export const allTweetQuery  = `#graphql 

  query GetAllTweets {
    getAllTweets {
        
        content
        author {
            firstName
            lastName
            profileImageUrl
            id
        
        }
        id
        imageURL
  }
}




`

export const  getSignedUrlforTweetQuery  = `#graphql 

query Query($imageName: String!, $imageType: String!) 
{
  getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
}


`