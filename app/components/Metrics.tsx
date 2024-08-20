import { useHomeContext } from '~/contexts/home';
import { MetricTypeFloat } from './Metric/MetricTypeFloat';
import { MetricTypeMedia } from './Metric/MetricTypeMedia';
import { MetricTypeText } from './Metric/MetricTypeText';
import { MetricBlock } from './Metric/MetricBlock';

import * as css from './Metrics.css';

export function Metrics(): JSX.Element {
  const { metrics } = useHomeContext();

  return (
    <div className={css.root}>
      {metrics.map((metric) => {
        return (
          <MetricBlock key={metric.name} name={metric.name}>
            {() => {
              switch (metric.__typename) {
                case 'FloatMetric':
                  return <MetricTypeFloat {...metric} />;
                case 'MediaMetric':
                  return <MetricTypeMedia {...metric} />;
                case 'TextMetric':
                  return <MetricTypeText {...metric} />;
                default:
                  return <div />;
              }
            }}
          </MetricBlock>
        );
      })}
    </div>
  );
}
