import { MetricName } from '~/gql/graphql';
import * as css from './MetricBlock.css';
import { MetricIcon } from './MetricIcon';

type MetricBlockProps = {
  children: () => JSX.Element;
  name: MetricName;
};

export function MetricBlock({ children, name }: MetricBlockProps): JSX.Element {
  return (
    <div className={css.root}>
      <div className={css.icon}>
        <MetricIcon name={name} />
      </div>
      <div className={css.metric}>{children()}</div>
    </div>
  );
}
