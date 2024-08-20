import { GraphQLClient } from 'graphql-request';

export class GraphQLService {
  constructor(protected fetcher: Fetcher) {}

  get client() {
    return new GraphQLClient('https://api.willhackett.com/', {
      fetcher: this.fetcher,
    });
  }
}
