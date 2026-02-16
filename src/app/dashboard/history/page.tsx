"use client";

import {
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HistoryItem {
  id: string;
  fileName: string;
  invoiceNumber: string;
  issuer: string;
  amount: string;
  date: string;
  status: "completed" | "processing" | "error";
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    fileName: "FE-001234.pdf",
    invoiceNumber: "FE-001234",
    issuer: "Empresa ABC S.A.S",
    amount: "$1,250,000",
    date: "12 Feb 2025",
    status: "completed",
  },
  {
    id: "2",
    fileName: "FE-001235.xml",
    invoiceNumber: "FE-001235",
    issuer: "Distribuidora XYZ",
    amount: "$890,000",
    date: "12 Feb 2025",
    status: "completed",
  },
  {
    id: "3",
    fileName: "FE-001236.pdf",
    invoiceNumber: "FE-001236",
    issuer: "Servicios Tech",
    amount: "\u2014",
    date: "11 Feb 2025",
    status: "processing",
  },
  {
    id: "4",
    fileName: "FE-001237.pdf",
    invoiceNumber: "FE-001237",
    issuer: "Consultoria DEF",
    amount: "$2,340,000",
    date: "11 Feb 2025",
    status: "completed",
  },
  {
    id: "5",
    fileName: "FE-001238.xml",
    invoiceNumber: "FE-001238",
    issuer: "Proveedores GHI",
    amount: "\u2014",
    date: "10 Feb 2025",
    status: "error",
  },
  {
    id: "6",
    fileName: "FE-001239.pdf",
    invoiceNumber: "FE-001239",
    issuer: "Logistica JKL",
    amount: "$567,000",
    date: "10 Feb 2025",
    status: "completed",
  },
  {
    id: "7",
    fileName: "FE-001240.pdf",
    invoiceNumber: "FE-001240",
    issuer: "Manufactura MNO",
    amount: "$3,100,000",
    date: "9 Feb 2025",
    status: "completed",
  },
  {
    id: "8",
    fileName: "FE-001241.xml",
    invoiceNumber: "FE-001241",
    issuer: "Importaciones PQR",
    amount: "$4,500,000",
    date: "8 Feb 2025",
    status: "completed",
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

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Historial</h1>
        <p className="mt-1 text-sm text-gray-500">
          Todas tus facturas procesadas
        </p>
      </div>

      <Card className="rounded-xl border border-[#F0F0F0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_1fr_1fr_auto_auto] gap-4 border-b border-[#F0F0F0] px-6 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Factura
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Emisor
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Monto
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Estado
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Accion
          </p>
        </div>

        {/* Table rows */}
        {mockHistory.map((item) => {
          const config = statusConfig[item.status];
          const StatusIcon = config.icon;

          return (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_1fr_1fr_auto_auto] items-center gap-4 border-b border-[#F0F0F0] px-6 py-4 last:border-b-0 hover:bg-gray-50/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                  <FileText className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.invoiceNumber}
                  </p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">{item.issuer}</p>

              <p className="text-sm font-medium text-gray-900">{item.amount}</p>

              <div className="flex items-center gap-1.5">
                <StatusIcon className={cn("h-4 w-4", config.color)} />
                <span className={cn("text-xs font-medium", config.color)}>
                  {config.label}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-900"
                disabled={item.status !== "completed"}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
