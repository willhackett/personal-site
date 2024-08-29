import { MetricName } from '~/gql/graphql';
import { exhaustive } from '~/util/type';
import * as css from './MetricNameLabel.css';

type MetricNameLabelProps = {
  name: MetricName;
};

export function getMetricNameLabel(name: MetricName): string {
  switch (name) {
    case MetricName.CaloriesBurned:
      return 'Average calories burned in the last 7 days';
    case MetricName.CurrentCity:
      return 'Current city';
    case MetricName.FavouriteSong:
      return 'Favourite song from the last 7 days';
    case MetricName.MilesCycled:
      return 'Cycled miles in the last 7 days';
    case MetricName.GitCommits:
      return 'Code commits in the last 7 days';
    default:
      return exhaustive(name);
  }
}

export function MetricNameLabel({ name }: MetricNameLabelProps): JSX.Element {
  return <span className={css.root}>{getMetricNameLabel(name)}</span>;
}
