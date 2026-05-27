import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <Link href="/project" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <div className="w-full aspect-video bg-surface border border-white/5 rounded-2xl mb-10 flex items-center justify-center text-muted">
        [Main Project Image Placeholder]
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
          <div>
            <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">Web App</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text">Project {id}</h1>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors">
              <GitBranch className="w-4 h-4" /> Code
            </Link>
            <Link href="#" className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors">
              <ExternalLink className="w-4 h-4" /> Demo
            </Link>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed">
            This is a detailed description of the project. Here we will fetch data from Supabase and render the markdown content representing the project's architecture, challenges faced, and solutions implemented.
          </p>
          
          <h3 className="text-xl font-heading font-bold text-text mt-8 mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Tailwind'].map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-muted">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
