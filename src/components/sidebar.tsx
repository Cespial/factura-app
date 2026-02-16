"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  History,
  BarChart3,
  CreditCard,
  Receipt,
  Puzzle,
  Settings,
  ChevronDown,
  FileText,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const mainMenu = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Cargar Facturas", href: "/dashboard/upload", icon: Upload },
  { label: "Historial", href: "/dashboard/history", icon: History },
  { label: "Reportes", href: "/dashboard/reportes", icon: BarChart3 },
];

const managementMenu = [
  { label: "Mi Plan", href: "/dashboard/plan", icon: CreditCard },
  { label: "Facturacion", href: "/dashboard/facturacion", icon: Receipt },
  { label: "Integraciones", href: "/dashboard/integraciones", icon: Puzzle },
];

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-gray-100 font-semibold text-gray-900"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      <Icon
        className={cn(
          "h-5 w-5 shrink-0",
          active ? "text-gray-900" : "text-gray-400"
        )}
      />
      {label}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-[#F0F0F0] bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
          <FileText className="h-4 w-4 text-white" />
        </div>
        <span className="text-base font-semibold text-gray-900">
          MiFactura
        </span>
        <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
      </div>

      <Separator className="bg-[#F0F0F0]" />

      {/* Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {/* Menu Principal */}
        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            Menu Principal
          </p>
          <div className="space-y-1">
            {mainMenu.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </div>
        </div>

        {/* Gestion */}
        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            Gestion
          </p>
          <div className="space-y-1">
            {managementMenu.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Settings at bottom */}
      <div className="border-t border-[#F0F0F0] px-3 py-3">
        <NavItem
          href="/dashboard/settings"
          icon={Settings}
          label="Configuracion"
          active={pathname === "/dashboard/settings"}
        />
      </div>
    </aside>
  );
}
