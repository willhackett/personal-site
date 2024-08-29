import {
  BicycleIcon,
  CalorieIcon,
  GitCommitIcon,
  LocationIcon,
  MusicIcon,
} from '~/components/Icon';
import { MetricName } from '~/gql/graphql';
import { exhaustive } from '~/util/type';

type MetricIconProps = {
  name: MetricName;
};

export function MetricIcon({ name }: MetricIconProps): JSX.Element {
  switch (name) {
    case MetricName.MilesCycled:
      return <BicycleIcon />;
    case MetricName.GitCommits:
      return <GitCommitIcon />;
    case MetricName.CurrentCity:
      return <LocationIcon />;
    case MetricName.FavouriteSong:
      return <MusicIcon />;
    case MetricName.CaloriesBurned:
      return <CalorieIcon />;
    default:
      return exhaustive(name);
  }
}
