import { MetricName } from '~/gql/graphql';
import { MetricNameLabel } from './MetricNameLabel';
import { MetricLabel } from './MetricLabel';

import * as css from './MetricTypeFloat.css';

type MetricTypeFloatProps = {
  name: MetricName;
  float: number;
};

export function MetricTypeFloat({
  name,
  float,
}: MetricTypeFloatProps): JSX.Element {
  return (
    <div className={css.root}>
      <MetricNameLabel name={name} />
      <span className={css.float}>{float}</span>
      <MetricLabel name={name} />
    </div>
  );
}
