import { MetricName } from '~/gql/graphql';
import { MetricNameLabel } from './MetricNameLabel';

import * as css from './MetricTypeMedia.css';

type MetricTypeMediaProps = {
  name: MetricName;
  title: string;
  artist: string;
};

export function MetricTypeMedia({
  name,
  title,
  artist,
}: MetricTypeMediaProps): JSX.Element {
  return (
    <div className={css.root}>
      <MetricNameLabel name={name} />
      <span className={css.title}>{title}</span>
      <span className={css.artist}>{artist}</span>
    </div>
  );
}
