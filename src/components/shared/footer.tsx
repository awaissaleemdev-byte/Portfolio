import Link from 'next/link';
import { portfolioData } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials } = portfolioData.profile;

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Persona Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
