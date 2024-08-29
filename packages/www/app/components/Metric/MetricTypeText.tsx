import { MetricName } from '~/gql/graphql';
import { MetricNameLabel } from './MetricNameLabel';
import { MetricLabel } from './MetricLabel';

import * as css from './MetricTypeText.css';

type MetricTypeTextProps = {
  name: MetricName;
  text: string;
};

export function MetricTypeText({
  name,
  text,
}: MetricTypeTextProps): JSX.Element {
  return (
    <div className={css.root}>
      <MetricNameLabel name={name} />
      <span className={css.text}>{text}</span>
      <MetricLabel name={name} />
    </div>
  );
}
