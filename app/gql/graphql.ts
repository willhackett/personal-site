/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FloatMetric = {
  __typename?: 'FloatMetric';
  float: Scalars['Float']['output'];
  name: MetricName;
};

export type MediaMetric = {
  __typename?: 'MediaMetric';
  artist: Scalars['String']['output'];
  name: MetricName;
  title: Scalars['String']['output'];
};

export type Metric = FloatMetric | MediaMetric | TextMetric;

export enum MetricName {
  CaloriesBurned = 'CALORIES_BURNED',
  CurrentCity = 'CURRENT_CITY',
  GitCommits = 'GIT_COMMITS',
  LastSongPlayed = 'LAST_SONG_PLAYED',
  MilesCycled = 'MILES_CYCLED'
}

export type Query = {
  __typename?: 'Query';
  metrics: Array<Metric>;
};

export type TextMetric = {
  __typename?: 'TextMetric';
  name: MetricName;
  text: Scalars['String']['output'];
};

export type HomeViewQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeViewQueryQuery = { __typename?: 'Query', metrics: Array<{ __typename: 'FloatMetric', float: number, name: MetricName } | { __typename: 'MediaMetric', artist: string, title: string, name: MetricName } | { __typename: 'TextMetric', name: MetricName, text: string }> };


export const HomeViewQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeViewQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FloatMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"float"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<HomeViewQueryQuery, HomeViewQueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FloatMetric = {
  __typename?: 'FloatMetric';
  float: Scalars['Float']['output'];
  name: MetricName;
};

export type MediaMetric = {
  __typename?: 'MediaMetric';
  artist: Scalars['String']['output'];
  name: MetricName;
  title: Scalars['String']['output'];
};

export type Metric = FloatMetric | MediaMetric | TextMetric;

export enum MetricName {
  CaloriesBurned = 'CALORIES_BURNED',
  CurrentCity = 'CURRENT_CITY',
  GitCommits = 'GIT_COMMITS',
  LastSongPlayed = 'LAST_SONG_PLAYED',
  MilesCycled = 'MILES_CYCLED'
}

export type Query = {
  __typename?: 'Query';
  metrics: Array<Metric>;
};

export type TextMetric = {
  __typename?: 'TextMetric';
  name: MetricName;
  text: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Metric: ( FloatMetric ) | ( MediaMetric ) | ( TextMetric );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  FloatMetric: ResolverTypeWrapper<FloatMetric>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  MediaMetric: ResolverTypeWrapper<MediaMetric>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Metric: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Metric']>;
  MetricName: MetricName;
  Query: ResolverTypeWrapper<{}>;
  TextMetric: ResolverTypeWrapper<TextMetric>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  FloatMetric: FloatMetric;
  Float: Scalars['Float']['output'];
  MediaMetric: MediaMetric;
  String: Scalars['String']['output'];
  Metric: ResolversUnionTypes<ResolversParentTypes>['Metric'];
  Query: {};
  TextMetric: TextMetric;
  Boolean: Scalars['Boolean']['output'];
};

export type FloatMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatMetric'] = ResolversParentTypes['FloatMetric']> = {
  float?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['MetricName'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaMetric'] = ResolversParentTypes['MediaMetric']> = {
  artist?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['MetricName'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metric'] = ResolversParentTypes['Metric']> = {
  __resolveType: TypeResolveFn<'FloatMetric' | 'MediaMetric' | 'TextMetric', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  metrics?: Resolver<Array<ResolversTypes['Metric']>, ParentType, ContextType>;
};

export type TextMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextMetric'] = ResolversParentTypes['TextMetric']> = {
  name?: Resolver<ResolversTypes['MetricName'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  FloatMetric?: FloatMetricResolvers<ContextType>;
  MediaMetric?: MediaMetricResolvers<ContextType>;
  Metric?: MetricResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TextMetric?: TextMetricResolvers<ContextType>;
};

