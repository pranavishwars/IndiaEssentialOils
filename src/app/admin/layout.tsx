import { ArrowLeft } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-ink text-white p-6">
        <h2 className="text-xl font-bold font-serif mb-8 text-primary">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin" className="block text-accent font-semibold">Products</a>
          <a href="#" className="block text-sub hover:text-white transition-colors">Orders</a>
          <a href="#" className="block text-sub hover:text-white transition-colors">Users</a>
          <a href="/" className="inline-flex items-center gap-2 text-sub hover:text-white transition-colors mt-8 pt-8 border-t border-gray-700"><ArrowLeft size={16} /> Back to Site</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
