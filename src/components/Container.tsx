interface ContainerProps {
  children: React.ReactNode;
  inner?: boolean;
}

export function Container({ children, inner }: ContainerProps) {
  if (inner) {
    return (
      <div className="container__root">
        <div className="container__inner">{children}</div>
      </div>
    );
  }

  return <div className="container__root">{children}</div>;
}
