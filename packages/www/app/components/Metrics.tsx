import { useHomeContext } from '~/contexts/home';
import { MetricBlock } from './Metric/MetricBlock';
import { MetricTypeFloat } from './Metric/MetricTypeFloat';
import { MetricTypeMedia } from './Metric/MetricTypeMedia';
import { MetricTypeText } from './Metric/MetricTypeText';

import { Await } from '@remix-run/react';
import { Suspense } from 'react';
import {
  FloatMetric,
  MediaMetric,
  MetricName,
  TextMetric,
} from '~/gql/graphql';
import * as css from './Metrics.css';

const PREFERRED_ORDER = [MetricName.FavouriteSong, MetricName.CurrentCity];

type Metric = FloatMetric | MediaMetric | TextMetric;

function sortMetrics(a: Metric, b: Metric) {
  const aIndex = PREFERRED_ORDER.indexOf(a.name);
  const bIndex = PREFERRED_ORDER.indexOf(b.name);

  if (aIndex === -1 && bIndex === -1) {
    return a.name.localeCompare(b.name);
  }

  if (aIndex === -1) {
    return 1;
  }

  if (bIndex === -1) {
    return -1;
  }

  return aIndex - bIndex;
}

export function Metrics(): JSX.Element {
  const { metrics } = useHomeContext();

  return (
    <div className={css.root}>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={metrics}>
          {(resolvedMetrics) => (
            <>
              {resolvedMetrics.sort(sortMetrics).map((metric) => {
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
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
