import { login } from './actions'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-background p-4 absolute top-0 left-0">
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/5">
        <h1 className="text-3xl font-heading font-bold text-center text-primary mb-2">Admin Login</h1>
        <p className="text-center text-muted mb-8 text-sm">Sign in to manage your portfolio</p>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-text">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="admin@example.com"
              className="px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-text">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              placeholder="••••••••"
              className="px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button 
            formAction={login}
            className="w-full py-3 mt-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg active:translate-y-0"
          >
            Log in
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
