import { getIconProps, type IconProps } from './Base';

export function LocationIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...getIconProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Location icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.3572 3.23397C3.66645 2.97447 4.1014 2.92638 4.45988 3.11204L20.7851 11.567C21.1426 11.7522 21.3542 12.1337 21.322 12.5351C21.2898 12.9364 21.02 13.2793 20.6375 13.405L13.7827 15.6586L10.373 22.0179C10.1828 22.3728 9.79826 22.5789 9.39743 22.541C8.9966 22.503 8.65762 22.2284 8.53735 21.8441L3.04564 4.29872C2.92505 3.91345 3.04794 3.49346 3.3572 3.23397ZM5.67123 5.99173L9.73507 18.9752L12.2091 14.361C12.3304 14.1347 12.5341 13.9637 12.7781 13.8835L17.7518 12.2484L5.67123 5.99173Z"
      />
    </svg>
  );
}
