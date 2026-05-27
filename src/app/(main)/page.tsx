import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-surface shadow-[0_4px_20px_rgba(0,0,0,0.4)] shrink-0 bg-surface flex items-center justify-center">
          <span className="text-muted text-sm">Profile Image</span>
          {/* <Image src="/profile.jpg" alt="Profile" width={256} height={256} className="object-cover w-full h-full" /> */}
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text">
            Hi, I'm an <span className="text-primary">AI Developer</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            I specialize in building intelligent applications using Next.js, Supabase, and Large Language Models.
            Feel free to ask my AI assistant any questions about my portfolio!
          </p>
          <Link href="/project" className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-lg">
            View Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google Gemini AI', 'Python'].map(skill => (
            <span key={skill} className="px-6 py-2 rounded-full border border-primary/30 text-primary font-medium text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">Experience</h2>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-surface border border-white/5 shadow-sm">
              <div className="flex flex-col mb-2">
                <span className="text-primary font-bold">Senior AI Developer</span>
                <span className="text-sm text-muted">Tech Corp • 2024 - Present</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Led the development of AI-powered web applications and optimized RAG pipelines.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
