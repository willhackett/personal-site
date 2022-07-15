import { Container, links as containerLinks } from '~/components/Container';
import {
  type HeaderProps,
  Header,
  links as headerLinks,
} from '~/components/Header';
import { combine } from '~/util/combine';

interface PrimaryProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
}

export function links() {
  return combine(headerLinks, containerLinks);
}

export function PrimaryLayout({ children, headerProps }: PrimaryProps) {
  return (
    <div>
      <Header {...headerProps} />
      <Container>{children}</Container>
    </div>
  );
}
