"use client";

import { useState } from "react";
import { StatCard } from "@/components/stat-card";
import { UploadZone } from "@/components/upload-zone";
import { UsageProgress } from "@/components/usage-progress";
import { InvoiceChart } from "@/components/invoice-chart";
import { RecentActivity } from "@/components/recent-activity";
import { UpgradeModal } from "@/components/upgrade-modal";

export default function DashboardPage() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Facturas Este Mes"
          value="12"
          change="+3 vs mes anterior"
          changeType="positive"
          sparklineData={[4, 7, 5, 9, 6, 8, 12]}
        />
        <StatCard
          title="Total Procesadas"
          value="847"
          change="+12% este ano"
          changeType="positive"
          sparklineData={[60, 75, 65, 80, 90, 85, 100]}
        />
        <StatCard title="Limite Disponible">
          <UsageProgress current={12} limit={18} />
        </StatCard>
      </div>

      {/* Upload Zone */}
      <UploadZone
        currentCount={12}
        monthlyLimit={18}
        onLimitReached={() => setShowUpgrade(true)}
      />

      {/* Chart + Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <InvoiceChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
    </div>
  );
}
