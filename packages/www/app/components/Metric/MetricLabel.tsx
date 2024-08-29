import { MetricName } from '~/gql/graphql';
import { exhaustive } from '~/util/type';

import * as css from './MetricLabel.css';

type MetricLabelProps = {
  name: MetricName;
};

export function MetricLabel({ name }: MetricLabelProps): JSX.Element {
  return (
    <span className={css.root}>
      {(() => {
        switch (name) {
          case MetricName.CaloriesBurned:
            return 'calories';
          case MetricName.MilesCycled:
            return 'miles';
          case MetricName.GitCommits:
            return 'commits';
          case MetricName.CurrentCity:
            return 'Current city';
          case MetricName.FavouriteSong:
            return '';
          default:
            return exhaustive(name);
        }
      })()}
    </span>
  );
}
