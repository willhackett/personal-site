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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type FloatMetricInput = {
  float: Scalars['Float']['input'];
  name: MetricName;
};

export type MediaMetric = {
  __typename?: 'MediaMetric';
  artist: Scalars['String']['output'];
  name: MetricName;
  title: Scalars['String']['output'];
};

export type MediaMetricInput = {
  artist: Scalars['String']['input'];
  name: MetricName;
  title: Scalars['String']['input'];
};

export type Metric = FloatMetric | MediaMetric | TextMetric;

export enum MetricName {
  CaloriesBurned = 'CALORIES_BURNED',
  CurrentCity = 'CURRENT_CITY',
  FavouriteSong = 'FAVOURITE_SONG',
  GitCommits = 'GIT_COMMITS',
  MilesCycled = 'MILES_CYCLED'
}

export type Mutation = {
  __typename?: 'Mutation';
  setFloatMetric: FloatMetric;
  setMediaMetric: MediaMetric;
  setTextMetric: TextMetric;
};


export type MutationSetFloatMetricArgs = {
  input: FloatMetricInput;
};


export type MutationSetMediaMetricArgs = {
  input: MediaMetricInput;
};


export type MutationSetTextMetricArgs = {
  input: TextMetricInput;
};

export type NoteContent = {
  __typename?: 'NoteContent';
  date: Scalars['String']['output'];
  permalink: Scalars['String']['output'];
  section: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  metrics: Array<Metric>;
  notes: Array<NoteContent>;
  textContent: Array<TextContent>;
};


export type QueryTextContentArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
};

export type TextContent = {
  __typename?: 'TextContent';
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum TextContentLocation {
  Homepage = 'HOMEPAGE'
}

export enum TextContentName {
  HomepageHeading = 'HOMEPAGE_HEADING',
  HomepageTitle = 'HOMEPAGE_TITLE'
}

export type TextMetric = {
  __typename?: 'TextMetric';
  name: MetricName;
  text: Scalars['String']['output'];
};

export type TextMetricInput = {
  name: MetricName;
  text: Scalars['String']['input'];
};

export type HomeViewQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeViewQueryQuery = { __typename?: 'Query', metrics: Array<{ __typename: 'FloatMetric', float: number, name: MetricName } | { __typename: 'MediaMetric', artist: string, title: string, name: MetricName } | { __typename: 'TextMetric', name: MetricName, text: string }>, textContent: Array<{ __typename?: 'TextContent', name: string, text: string }>, notes: Array<{ __typename?: 'NoteContent', date: string, permalink: string, section: string, summary: string, title: string }> };


export const HomeViewQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeViewQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FloatMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"float"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextMetric"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"textContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"StringValue","value":"HOMEPAGE","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"section"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<HomeViewQueryQuery, HomeViewQueryQueryVariables>;
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

export type FloatMetricInput = {
  float: Scalars['Float']['input'];
  name: MetricName;
};

export type MediaMetric = {
  __typename?: 'MediaMetric';
  artist: Scalars['String']['output'];
  name: MetricName;
  title: Scalars['String']['output'];
};

export type MediaMetricInput = {
  artist: Scalars['String']['input'];
  name: MetricName;
  title: Scalars['String']['input'];
};

export type Metric = FloatMetric | MediaMetric | TextMetric;

export enum MetricName {
  CaloriesBurned = 'CALORIES_BURNED',
  CurrentCity = 'CURRENT_CITY',
  FavouriteSong = 'FAVOURITE_SONG',
  GitCommits = 'GIT_COMMITS',
  MilesCycled = 'MILES_CYCLED'
}

export type Mutation = {
  __typename?: 'Mutation';
  setFloatMetric: FloatMetric;
  setMediaMetric: MediaMetric;
  setTextMetric: TextMetric;
};


export type MutationSetFloatMetricArgs = {
  input: FloatMetricInput;
};


export type MutationSetMediaMetricArgs = {
  input: MediaMetricInput;
};


export type MutationSetTextMetricArgs = {
  input: TextMetricInput;
};

export type NoteContent = {
  __typename?: 'NoteContent';
  date: Scalars['String']['output'];
  permalink: Scalars['String']['output'];
  section: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  metrics: Array<Metric>;
  notes: Array<NoteContent>;
  textContent: Array<TextContent>;
};


export type QueryTextContentArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
};

export type TextContent = {
  __typename?: 'TextContent';
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum TextContentLocation {
  Homepage = 'HOMEPAGE'
}

export enum TextContentName {
  HomepageHeading = 'HOMEPAGE_HEADING',
  HomepageTitle = 'HOMEPAGE_TITLE'
}

export type TextMetric = {
  __typename?: 'TextMetric';
  name: MetricName;
  text: Scalars['String']['output'];
};

export type TextMetricInput = {
  name: MetricName;
  text: Scalars['String']['input'];
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
  FloatMetricInput: FloatMetricInput;
  MediaMetric: ResolverTypeWrapper<MediaMetric>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  MediaMetricInput: MediaMetricInput;
  Metric: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Metric']>;
  MetricName: MetricName;
  Mutation: ResolverTypeWrapper<{}>;
  NoteContent: ResolverTypeWrapper<NoteContent>;
  Query: ResolverTypeWrapper<{}>;
  TextContent: ResolverTypeWrapper<TextContent>;
  TextContentLocation: TextContentLocation;
  TextContentName: TextContentName;
  TextMetric: ResolverTypeWrapper<TextMetric>;
  TextMetricInput: TextMetricInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  FloatMetric: FloatMetric;
  Float: Scalars['Float']['output'];
  FloatMetricInput: FloatMetricInput;
  MediaMetric: MediaMetric;
  String: Scalars['String']['output'];
  MediaMetricInput: MediaMetricInput;
  Metric: ResolversUnionTypes<ResolversParentTypes>['Metric'];
  Mutation: {};
  NoteContent: NoteContent;
  Query: {};
  TextContent: TextContent;
  TextMetric: TextMetric;
  TextMetricInput: TextMetricInput;
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

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  setFloatMetric?: Resolver<ResolversTypes['FloatMetric'], ParentType, ContextType, RequireFields<MutationSetFloatMetricArgs, 'input'>>;
  setMediaMetric?: Resolver<ResolversTypes['MediaMetric'], ParentType, ContextType, RequireFields<MutationSetMediaMetricArgs, 'input'>>;
  setTextMetric?: Resolver<ResolversTypes['TextMetric'], ParentType, ContextType, RequireFields<MutationSetTextMetricArgs, 'input'>>;
};

export type NoteContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoteContent'] = ResolversParentTypes['NoteContent']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  section?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  metrics?: Resolver<Array<ResolversTypes['Metric']>, ParentType, ContextType>;
  notes?: Resolver<Array<ResolversTypes['NoteContent']>, ParentType, ContextType>;
  textContent?: Resolver<Array<ResolversTypes['TextContent']>, ParentType, ContextType, Partial<QueryTextContentArgs>>;
};

export type TextContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContent'] = ResolversParentTypes['TextContent']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  Mutation?: MutationResolvers<ContextType>;
  NoteContent?: NoteContentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TextContent?: TextContentResolvers<ContextType>;
  TextMetric?: TextMetricResolvers<ContextType>;
};

