import { MetricName } from '~/gql/graphql';
import { exhaustive } from '~/util/type';
import * as css from './MetricNameLabel.css';

type MetricNameLabelProps = {
  name: MetricName;
};

export function getMetricNameLabel(name: MetricName): string {
  switch (name) {
    case MetricName.CaloriesBurned:
      return 'Calories burned last 7 days';
    case MetricName.CurrentCity:
      return 'Current city';
    case MetricName.LastSongPlayed:
      return 'Last song played';
    case MetricName.MilesCycled:
      return 'Cycled miles last 7 days';
    case MetricName.GitCommits:
      return 'Code commits last 7 days';
    default:
      return exhaustive(name);
  }
}

export function MetricNameLabel({ name }: MetricNameLabelProps): JSX.Element {
  return <span className={css.root}>{getMetricNameLabel(name)}</span>;
}
