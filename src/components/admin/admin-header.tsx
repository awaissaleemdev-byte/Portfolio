import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, LogOut, Code2 } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Persona Portfolio / Admin</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">
              <Eye className="mr-2 h-4 w-4" />
              View Site
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
