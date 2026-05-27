export default function AdminKnowledgePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold text-text">RAG Knowledge Base</h1>
        <button className="bg-primary text-background px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          + Add Knowledge
        </button>
      </div>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-muted text-sm">
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Source Type</th>
              <th className="px-6 py-4 font-medium">Content Preview</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-muted">
                No knowledge data found. Add your resume or portfolio details for the AI to learn.
              </td>
            </tr>
            {/* Knowledge items will be mapped here */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
