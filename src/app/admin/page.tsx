export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold text-text">Dashboard Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-white/5 p-6 rounded-2xl shadow-sm">
          <h3 className="text-muted text-sm font-medium mb-2">Total Projects</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="bg-surface border border-white/5 p-6 rounded-2xl shadow-sm">
          <h3 className="text-muted text-sm font-medium mb-2">Total Visitors</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="bg-surface border border-white/5 p-6 rounded-2xl shadow-sm">
          <h3 className="text-muted text-sm font-medium mb-2">Chatbot Interactions</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
      </div>
    </div>
  )
}
