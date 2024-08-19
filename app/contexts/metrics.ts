import { createContext, useContext } from 'react';
import { HomeViewQueryQuery } from '~/gql/graphql';

export type MetricsContext = {
  metrics: HomeViewQueryQuery['metrics'];
};

const initialState: MetricsContext = {
  metrics: [],
};

export const MetricsContext = createContext<MetricsContext>(initialState);

export const MetricsProvider = MetricsContext.Provider;

export function useMetrics(): MetricsContext {
  return useContext(MetricsContext);
}
