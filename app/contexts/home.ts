import { createContext, useContext } from 'react';
import { HomeViewQueryQuery } from '~/gql/graphql';

export type HomeContext = {
  metrics: HomeViewQueryQuery['metrics'];
  textContent: HomeViewQueryQuery['textContent'];
  notes: HomeViewQueryQuery['notes'];
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
