import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, User } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 h-full w-full">
      {/* Sidebar LNB */}
      <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-white/5 p-4 shrink-0">
        <div className="font-heading text-lg font-bold text-primary mb-8 px-2">
          Admin Dashboard
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <User className="w-5 h-5 text-muted" />
            <span>Profile</span>
          </Link>
          <Link href="/admin/project" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <LayoutDashboard className="w-5 h-5 text-muted" />
            <span>Projects</span>
          </Link>
          <Link href="/admin/knowledge" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <FileText className="w-5 h-5 text-muted" />
            <span>RAG Knowledge</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5 text-muted" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-auto bg-background p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
