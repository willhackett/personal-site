import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';
import { ArchiveIcon } from '~/icons/Archive';
import { ContactIcon } from '~/icons/Contact';
import { Experience } from '~/icons/Experience';
import { NowIcon } from '~/icons/Now';
import { OpenSourceIcon } from '~/icons/OpenSource';
import { ProjectsIcon } from '~/icons/Projects';
import { SnippetsIcon } from '~/icons/Snippets';
import styles from '~/styles/components/Header.css';
import { Logo } from './Logo';

export interface HeaderProps {
  children?: ReactNode;
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const navLinks = [
  { href: '/archive', label: 'Archive', icon: ArchiveIcon },
  { href: '/snippets', label: 'Snippets', icon: SnippetsIcon },
  { href: '/experience', label: 'Experience', icon: Experience },
  { href: '/open-source', label: 'Open Source', icon: OpenSourceIcon },
  { href: '/projects', label: 'Projects', icon: ProjectsIcon },
  { href: '/now', label: 'Now', icon: NowIcon },
  { href: '/contact', label: 'Contact', icon: ContactIcon },
];

export function Header({ layout, children }: HeaderProps) {
  return (
    <header>
      <nav className="header__nav" aria-label="Top">
        <div className="header__nav-inner">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Will Hackett</span>
              <Logo className="header__logo" />
            </Link>
          </div>
        </div>
        {children}
        <div className="header__nav-list-container">
          <ul className="header__nav-list">
            {navLinks.map(({ href, label, icon: IconComponent }) => (
              <li key={href}>
                <span>
                  <IconComponent size={20} />
                </span>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
