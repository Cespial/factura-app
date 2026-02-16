"use client";

import { useState } from "react";
import { UploadZone } from "@/components/upload-zone";
import { UsageProgress } from "@/components/usage-progress";
import { UpgradeModal } from "@/components/upgrade-modal";
import { Card } from "@/components/ui/card";

export default function UploadPage() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Cargar Facturas</h1>
        <p className="mt-1 text-sm text-gray-500">
          Sube tus facturas electronicas en formato PDF o XML
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UploadZone
            currentCount={12}
            monthlyLimit={18}
            onLimitReached={() => setShowUpgrade(true)}
          />
        </div>

        <Card className="rounded-xl border border-[#F0F0F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <h3 className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Uso del Mes
          </h3>
          <div className="mt-4">
            <UsageProgress current={12} limit={18} />
          </div>
        </Card>
      </div>

      <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
    </div>
  );
}
