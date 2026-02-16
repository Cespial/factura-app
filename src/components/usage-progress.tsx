"use client";

import { Progress } from "@/components/ui/progress";

interface UsageProgressProps {
  current: number;
  limit: number;
}

export function UsageProgress({ current, limit }: UsageProgressProps) {
  const percentage = Math.min((current / limit) * 100, 100);
  const remaining = Math.max(limit - current, 0);
  const isNearLimit = percentage >= 80;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-gray-900">
          {remaining}{" "}
          <span className="text-base font-normal text-gray-400">
            restantes
          </span>
        </p>
      </div>
      <Progress
        value={percentage}
        className={`h-2 ${isNearLimit ? "[&>div]:bg-amber-500" : "[&>div]:bg-gray-900"}`}
      />
      <p className="text-sm text-gray-400">
        {current} de {limit} facturas este mes
      </p>
    </div>
  );
}
