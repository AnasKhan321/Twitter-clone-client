export const createTweetMutation = `#graphql 

mutation CreateTweet($payload: CreateTweetData!) {
  createTweet(payload: $payload) {
    id 

  }
}

`