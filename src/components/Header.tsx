import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArchiveIcon } from '@icons/Archive';
import { ContactIcon } from '@icons/Contact';
import { Experience } from '@icons/Experience';
import { NowIcon } from '@icons/Now';
import { OpenSourceIcon } from '@icons/OpenSource';
import { ProjectsIcon } from '@icons/Projects';
import { SnippetsIcon } from '@icons/Snippets';
import { Logo } from './Logo';

export interface HeaderProps {
  children?: ReactNode;
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

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <nav className="header__nav" aria-label="Top">
        <div className="header__nav-inner">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a>
                <span className="sr-only">Will Hackett</span>
                <Logo className="header__logo" />
              </a>
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
