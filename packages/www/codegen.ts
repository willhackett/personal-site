import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8787/',
  documents: 'app/**/*.graphql',
  generates: {
    'app/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
