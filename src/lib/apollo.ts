import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oax18s1jba01xrf8p03b5v/master",
  cache: new InMemoryCache(),
});
