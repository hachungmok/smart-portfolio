import Link from 'next/link';
import { GitBranch, Mail, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm text-center md:text-left">
          <p>© 2026 Smart Portfolio. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-muted">
          <Link href="#" className="hover:text-primary transition-colors">
            <GitBranch className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
