import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface/80 border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold text-primary">
          Smart Portfolio
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/project" className="hover:text-primary transition-colors">Project</Link>
          <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
          <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
