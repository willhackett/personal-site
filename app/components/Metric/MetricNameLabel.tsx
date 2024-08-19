import { MetricName } from '~/gql/graphql';
import { exhaustive } from '~/util/type';
import * as css from './MetricNameLabel.css';

type MetricNameLabelProps = {
  name: MetricName;
};

function getMetricNameLabel(name: MetricName): string {
  switch (name) {
    case MetricName.CaloriesBurned:
      return 'Calories';
    case MetricName.CurrentCity:
      return 'Current city';
    case MetricName.LastSongPlayed:
      return 'Last song';
    case MetricName.MilesCycled:
      return 'Cycled miles';
    case MetricName.GitCommits:
      return 'Code commits';
    default:
      return exhaustive(name);
  }
}

export function MetricNameLabel({ name }: MetricNameLabelProps): JSX.Element {
  return <span className={css.root}>{getMetricNameLabel(name)}</span>;
}
