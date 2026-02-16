"use client";

import { FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  fileName: string;
  status: "completed" | "processing" | "error";
  date: string;
  amount?: string;
}

const mockActivity: ActivityItem[] = [
  {
    id: "1",
    fileName: "FE-001234.pdf",
    status: "completed",
    date: "Hace 2 horas",
    amount: "$1,250,000",
  },
  {
    id: "2",
    fileName: "FE-001235.xml",
    status: "completed",
    date: "Hace 3 horas",
    amount: "$890,000",
  },
  {
    id: "3",
    fileName: "FE-001236.pdf",
    status: "processing",
    date: "Hace 5 horas",
  },
  {
    id: "4",
    fileName: "FE-001237.pdf",
    status: "completed",
    date: "Ayer",
    amount: "$2,340,000",
  },
  {
    id: "5",
    fileName: "FE-001238.xml",
    status: "error",
    date: "Ayer",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    label: "Procesada",
    color: "text-emerald-500",
  },
  processing: {
    icon: Clock,
    label: "Procesando",
    color: "text-amber-500",
  },
  error: {
    icon: AlertCircle,
    label: "Error",
    color: "text-red-500",
  },
};

export function RecentActivity() {
  return (
    <Card className="rounded-xl border border-[#F0F0F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <h3 className="text-xs font-medium uppercase tracking-wider text-gray-400">
        Actividad Reciente
      </h3>

      <div className="mt-4 space-y-3">
        {mockActivity.map((item) => {
          const config = statusConfig[item.status];
          const StatusIcon = config.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                <FileText className="h-4 w-4 text-gray-400" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-gray-900">
                  {item.fileName}
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>

              {item.amount && (
                <p className="text-sm font-medium text-gray-900">
                  {item.amount}
                </p>
              )}

              <div className="flex items-center gap-1">
                <StatusIcon className={cn("h-4 w-4", config.color)} />
                <span className={cn("text-xs font-medium", config.color)}>
                  {config.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
