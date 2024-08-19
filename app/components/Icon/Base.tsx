import * as css from './Base.css';

export type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const baseIconProps: IconProps = {
  width: 2,
  height: 2,
  className: css.root,
};

export function getIconProps(props: IconProps) {
  const { width, height, fill, className } = { ...baseIconProps, ...props };

  return {
    width: `${width}rem`,
    height: `${height}rem`,
    fill,
    className,
  };
}
