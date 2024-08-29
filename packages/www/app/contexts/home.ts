import { createContext, useContext } from 'react';
import { HomeViewQuery, MetricsQuery, NotesQuery } from '~/gql/graphql';

export type HomeContext = {
  metrics: MetricsQuery['metrics'];
  textContent: HomeViewQuery['textContent'];
  notes: NotesQuery['notes'];
};

const initialState: HomeContext = {
  metrics: [],
  textContent: [],
  notes: [],
};

export const HomeContext = createContext<HomeContext>(initialState);

export const HomeContextProvider = HomeContext.Provider;

export function useHomeContext(): HomeContext {
  return useContext(HomeContext);
}
