import { GraphQLClient } from "graphql-request";

// Check if the code is running in the client/browser
const isClient = typeof window !== "undefined";

// Create the GraphQL client with proper headers
export const graphqlclient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL ||"http://twiiter-1590515209.ap-south-1.elb.amazonaws.com/graphql" , {
  headers: () => {
    // Only attempt to get the token in the client-side environment
    const token = isClient ? window.localStorage.getItem("__twittertoken") : null;

    // Return the authorization header only if the token exists
    return {
      Authorization: token ? `Bearer ${token}` : "",
    };
  },
});
