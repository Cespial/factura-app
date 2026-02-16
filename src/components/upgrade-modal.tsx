"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    name: "Gratis",
    price: "0",
    current: true,
    features: [
      "18 facturas por mes",
      "Procesamiento basico",
      "Historial 30 dias",
    ],
  },
  {
    name: "Pro",
    price: "49,900",
    current: false,
    features: [
      "500 facturas por mes",
      "Procesamiento prioritario",
      "Historial ilimitado",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
  },
];

export function UpgradeModal({ open, onOpenChange }: UpgradeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-gray-900">
            Has alcanzado tu limite mensual
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-500">
            18/18 facturas usadas este mes. Actualiza tu plan para continuar.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-5 ${
                plan.current
                  ? "border-gray-200 bg-gray-50"
                  : "border-gray-900 bg-white shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                {plan.current && (
                  <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600">
                    Actual
                  </span>
                )}
              </div>

              <div className="mt-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-500">/mes</span>
              </div>

              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {!plan.current && (
                <Button className="mt-5 w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800">
                  Actualizar a Pro
                </Button>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
