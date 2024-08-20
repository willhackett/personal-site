import { MetricName } from '~/gql/graphql';
import * as css from './MetricBlock.css';
import { MetricIcon } from './MetricIcon';
import { Tooltip } from '../Tooltip';
import { getMetricNameLabel } from './MetricNameLabel';

type MetricBlockProps = {
  children: () => JSX.Element;
  name: MetricName;
};

export function MetricBlock({ children, name }: MetricBlockProps): JSX.Element {
  return (
    <Tooltip content={getMetricNameLabel(name)}>
      <div className={css.root}>
        <div className={css.icon}>
          <MetricIcon name={name} />
        </div>
        <div className={css.metric}>{children()}</div>
      </div>
    </Tooltip>
  );
}
