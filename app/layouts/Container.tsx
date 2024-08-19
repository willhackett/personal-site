import * as style from './Container.css';

type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props): JSX.Element {
  return <div className={style.root}>{children}</div>;
}
