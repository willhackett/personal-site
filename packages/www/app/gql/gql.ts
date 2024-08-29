/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Metrics {\n  metrics {\n    ... on FloatMetric {\n      __typename\n      float\n      name\n    }\n    ... on MediaMetric {\n      __typename\n      artist\n      title\n      name\n    }\n    ... on TextMetric {\n      __typename\n      name\n      text\n    }\n  }\n}": types.MetricsDocument,
    "query Notes {\n  notes {\n    date\n    permalink\n    section\n    summary\n    title\n  }\n}": types.NotesDocument,
    "query HomeView {\n  textContent(location: \"HOMEPAGE\") {\n    name\n    text\n  }\n}": types.HomeViewDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Metrics {\n  metrics {\n    ... on FloatMetric {\n      __typename\n      float\n      name\n    }\n    ... on MediaMetric {\n      __typename\n      artist\n      title\n      name\n    }\n    ... on TextMetric {\n      __typename\n      name\n      text\n    }\n  }\n}"): (typeof documents)["query Metrics {\n  metrics {\n    ... on FloatMetric {\n      __typename\n      float\n      name\n    }\n    ... on MediaMetric {\n      __typename\n      artist\n      title\n      name\n    }\n    ... on TextMetric {\n      __typename\n      name\n      text\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Notes {\n  notes {\n    date\n    permalink\n    section\n    summary\n    title\n  }\n}"): (typeof documents)["query Notes {\n  notes {\n    date\n    permalink\n    section\n    summary\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HomeView {\n  textContent(location: \"HOMEPAGE\") {\n    name\n    text\n  }\n}"): (typeof documents)["query HomeView {\n  textContent(location: \"HOMEPAGE\") {\n    name\n    text\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;