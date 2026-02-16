"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const monthlyData = [
  { name: "ENE", facturas: 14, procesadas: 12 },
  { name: "FEB", facturas: 18, procesadas: 16 },
  { name: "MAR", facturas: 12, procesadas: 10 },
  { name: "ABR", facturas: 16, procesadas: 14 },
  { name: "MAY", facturas: 10, procesadas: 8 },
  { name: "JUN", facturas: 15, procesadas: 13 },
  { name: "JUL", facturas: 17, procesadas: 15 },
  { name: "AGO", facturas: 11, procesadas: 9 },
  { name: "SEP", facturas: 13, procesadas: 11 },
  { name: "OCT", facturas: 16, procesadas: 14 },
  { name: "NOV", facturas: 18, procesadas: 16 },
  { name: "DIC", facturas: 12, procesadas: 10 },
];

const weeklyData = [
  { name: "LUN", facturas: 3, procesadas: 2 },
  { name: "MAR", facturas: 5, procesadas: 4 },
  { name: "MIE", facturas: 2, procesadas: 2 },
  { name: "JUE", facturas: 4, procesadas: 3 },
  { name: "VIE", facturas: 6, procesadas: 5 },
  { name: "SAB", facturas: 1, procesadas: 1 },
  { name: "DOM", facturas: 0, procesadas: 0 },
];

const yearlyData = [
  { name: "2020", facturas: 120, procesadas: 100 },
  { name: "2021", facturas: 180, procesadas: 160 },
  { name: "2022", facturas: 250, procesadas: 230 },
  { name: "2023", facturas: 310, procesadas: 290 },
  { name: "2024", facturas: 420, procesadas: 400 },
  { name: "2025", facturas: 480, procesadas: 460 },
];

type Period = "weekly" | "monthly" | "yearly";

const periodData: Record<Period, typeof monthlyData> = {
  weekly: weeklyData,
  monthly: monthlyData,
  yearly: yearlyData,
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-[#F0F0F0] bg-white p-3 shadow-lg">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <div className="mt-1 space-y-1">
        <p className="text-xs text-gray-500">
          Cargadas:{" "}
          <span className="font-medium text-gray-900">
            {payload[0]?.value}
          </span>
        </p>
        {payload[1] && (
          <p className="text-xs text-gray-500">
            Procesadas:{" "}
            <span className="font-medium text-gray-900">
              {payload[1].value}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export function InvoiceChart() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <Card className="rounded-xl border border-[#F0F0F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Actividad de Facturas
        </h3>
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          {(["weekly", "monthly", "yearly"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                period === p
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {p === "weekly"
                ? "Semanal"
                : p === "monthly"
                  ? "Mensual"
                  : "Anual"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={periodData[period]}
            barGap={2}
            barCategoryGap="20%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F0F0F0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0,0,0,0.02)" }}
            />
            <Bar
              dataKey="facturas"
              fill="#111111"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="procesadas"
              fill="#D1D5DB"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
