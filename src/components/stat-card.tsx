"use client";

import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  sparklineData?: number[];
  children?: React.ReactNode;
}

function MiniSparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-[3px]">
      {data.map((value, i) => {
        const height = ((value - min) / range) * 32 + 8;
        const isLast = i === data.length - 1;
        return (
          <div
            key={i}
            className="rounded-sm"
            style={{
              width: 6,
              height,
              backgroundColor: isLast ? "#111111" : "#D1D5DB",
            }}
          />
        );
      })}
    </div>
  );
}

export function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  sparklineData,
  children,
}: StatCardProps) {
  return (
    <Card className="rounded-xl border border-[#F0F0F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {title}
      </p>
      {children ? (
        <div className="mt-3">{children}</div>
      ) : (
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {change && (
              <p
                className={`mt-1 text-sm font-medium ${
                  changeType === "positive"
                    ? "text-emerald-500"
                    : changeType === "negative"
                      ? "text-red-500"
                      : "text-gray-400"
                }`}
              >
                {change}
              </p>
            )}
          </div>
          {sparklineData && <MiniSparkline data={sparklineData} />}
        </div>
      )}
    </Card>
  );
}
