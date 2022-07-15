import { Container } from '@components/Container';
import { type HeaderProps, Header } from '@components/Header';

interface PrimaryProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
}

export function PrimaryLayout({ children, headerProps }: PrimaryProps) {
  return (
    <div>
      <Header {...headerProps} />
      <Container>{children}</Container>
    </div>
  );
}
