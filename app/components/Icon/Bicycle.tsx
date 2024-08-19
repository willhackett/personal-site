import { getIconProps, type IconProps } from './Base';

export function BicycleIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...getIconProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bicycle icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C17.1046 6 18 5.10457 18 4C18 2.89543 17.1046 2 16 2C14.8954 2 14 2.89543 14 4C14 5.10457 14.8954 6 16 6ZM13.2428 5.52993C13.5738 5.61279 13.8397 5.85869 13.9482 6.18222C14.13 6.72461 14.3843 7.20048 14.697 7.59998C15.5586 8.70094 16.9495 9.32795 18.8356 9.01361C19.3804 8.92281 19.8956 9.29083 19.9864 9.8356C20.0772 10.3804 19.7092 10.8956 19.1644 10.9864C17.0282 11.3424 15.1791 10.7992 13.8435 9.60462L11.1291 11.9869L12.7524 13.8413C12.912 14.0236 13 14.2577 13 14.5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V14.8759L8.9689 12.5556L8.92455 12.5059C8.68548 12.2386 8.28531 11.7911 8.11145 11.2626C8.00463 10.9379 7.97131 10.5628 8.08578 10.1667C8.1967 9.78279 8.42374 9.45733 8.7058 9.18044L8.71971 9.16705L12.3134 5.77299C12.5614 5.53871 12.9118 5.44708 13.2428 5.52993ZM2 17C2 15.3431 3.34315 14 5 14C6.65685 14 8 15.3431 8 17C8 18.6569 6.65685 20 5 20C3.34315 20 2 18.6569 2 17ZM5 12C2.23858 12 0 14.2386 0 17C0 19.7614 2.23858 22 5 22C7.76142 22 10 19.7614 10 17C10 14.2386 7.76142 12 5 12ZM16 17C16 15.3431 17.3431 14 19 14C20.6569 14 22 15.3431 22 17C22 18.6569 20.6569 20 19 20C17.3431 20 16 18.6569 16 17ZM19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C21.7614 22 24 19.7614 24 17C24 14.2386 21.7614 12 19 12Z"
      />
    </svg>
  );
}
