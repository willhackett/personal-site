import { GraphQLClient } from 'graphql-request';

export class GraphQLService {
  constructor(protected uri: string) {}

  get client() {
    return new GraphQLClient(this.uri);
  }
}
