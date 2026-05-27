import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectListPage() {
  // Placeholder data until DB is connected
  const projects = [
    { id: '1', title: 'Smart Portfolio', category: 'Web App', description: 'Interactive AI Developer Portfolio using Next.js and Gemini.', tech: ['Next.js', 'Supabase', 'Gemini'] },
    { id: '2', title: 'AI Code Reviewer', category: 'Tool', description: 'Automated PR review bot.', tech: ['Python', 'OpenAI'] },
    { id: '3', title: 'Design System', category: 'Library', description: 'React component library built with Tailwind.', tech: ['React', 'Tailwind'] },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-muted mb-12">Explore the tools and applications I've built.</p>

      {/* Filter placeholder */}
      <div className="flex justify-center gap-3 mb-12">
        <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-background">All</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-surface text-muted border border-white/5 hover:text-text transition-colors">Web App</button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-surface text-muted border border-white/5 hover:text-text transition-colors">Tool</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div key={p.id} className="group flex flex-col bg-surface border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all cursor-pointer">
            <div className="h-48 bg-white/5 w-full flex items-center justify-center text-muted text-sm shrink-0">
              [Image Placeholder]
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">{p.category}</span>
              <h3 className="text-xl font-heading font-bold text-text mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted text-sm mb-6 flex-1 line-clamp-3">{p.description}</p>
              
              <Link href={`/project/${p.id}`} className="flex items-center gap-2 text-sm font-medium text-text group-hover:text-primary mt-auto">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
