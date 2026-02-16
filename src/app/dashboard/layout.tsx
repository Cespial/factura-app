"use client";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const breadcrumbLabels: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/upload": "Cargar Facturas",
  "/dashboard/history": "Historial",
  "/dashboard/reportes": "Reportes",
  "/dashboard/plan": "Mi Plan",
  "/dashboard/facturacion": "Facturacion",
  "/dashboard/integraciones": "Integraciones",
  "/dashboard/settings": "Configuracion",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentLabel = breadcrumbLabels[pathname] || "Overview";

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar />

      {/* Main content area */}
      <div className="ml-64 flex flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#F0F0F0] bg-white/80 px-8 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Dashboard</span>
            <span className="text-gray-300">&gt;</span>
            <span className="font-medium text-gray-900">{currentLabel}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar facturas..."
                className="h-9 w-64 rounded-full border-0 bg-gray-50 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="Usuario" />
              <AvatarFallback className="bg-gray-200 text-xs font-medium text-gray-600">
                CE
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
